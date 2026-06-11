import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { generatedPosts } from "../../constants/instagram-posts.generated";
import type { GraphConfig } from "./graph-api";
import { fetchRecentMedia } from "./graph-api";
import type { MediaNode } from "./schema";
import { transformNode, type TransformResult } from "./transform";
import { assertNoShrink, upsertByKey } from "./merge";
import { renderGeneratedFile } from "./emit";
import { formatRunReport, type FailedPost } from "./report";
import { isFfmpegAvailable, processDownload } from "./media";

const DEFAULT_VERSION = "v21.0";
const DEFAULT_LIMIT = 25;

export function loadConfig(env: Record<string, string | undefined>): GraphConfig {
  const missing = ["INSTAGRAM_USER_ID", "INSTAGRAM_ACCESS_TOKEN"].filter(
    (key) => !env[key],
  );
  if (missing.length > 0) {
    throw new Error(
      `Missing required env vars: ${missing.join(", ")}. See .env.example.`,
    );
  }
  return {
    userId: env.INSTAGRAM_USER_ID!,
    accessToken: env.INSTAGRAM_ACCESS_TOKEN!,
    version: env.INSTAGRAM_GRAPH_VERSION ?? DEFAULT_VERSION,
    limit: Number(env.INSTAGRAM_FETCH_LIMIT ?? DEFAULT_LIMIT),
  };
}

export interface Selection {
  fresh: TransformResult[];
  skippedExisting: string[];
  failed: FailedPost[];
}

// Transform every node, dropping ones whose key already exists and collecting
// (never throwing on) any that fail to transform.
export function selectNewPosts(
  existingKeys: Set<string>,
  nodes: MediaNode[],
): Selection {
  const fresh: TransformResult[] = [];
  const skippedExisting: string[] = [];
  const failed: FailedPost[] = [];

  for (const node of nodes) {
    try {
      const result = transformNode(node);
      if (existingKeys.has(result.key)) {
        skippedExisting.push(result.key);
      } else {
        fresh.push(result);
      }
    } catch (error) {
      failed.push({ id: node.id, reason: (error as Error).message });
    }
  }

  return { fresh, skippedExisting, failed };
}

interface RunOptions {
  dryRun: boolean;
  publicDir: string;
  generatedPath: string;
}

async function run({ dryRun, publicDir, generatedPath }: RunOptions): Promise<void> {
  if (!dryRun && !isFfmpegAvailable()) {
    throw new Error(
      "ffmpeg not found in PATH. Install it (macOS: `brew install ffmpeg`).",
    );
  }

  const config = loadConfig(process.env);
  const response = await fetchRecentMedia(config);
  const existingKeys = new Set(Object.keys(generatedPosts));
  const selection = selectNewPosts(existingKeys, response.data);

  // Download + compress each fresh post's media; a media failure skips that post.
  const toAdd = [];
  for (const result of selection.fresh) {
    try {
      if (!dryRun) {
        for (const download of result.downloads) {
          await processDownload(download, publicDir);
        }
      }
      toAdd.push({ key: result.key, post: result.post });
    } catch (error) {
      selection.failed.push({ id: result.key, reason: (error as Error).message });
    }
  }

  const before = Object.keys(generatedPosts).length;
  const { merged, added } = upsertByKey(generatedPosts, toAdd);
  assertNoShrink(before, Object.keys(merged).length);

  if (!dryRun && added.length > 0) {
    await writeFile(generatedPath, renderGeneratedFile(merged));
  }

  const report = formatRunReport({
    added,
    skippedExisting: selection.skippedExisting,
    failed: selection.failed,
  });
  console.log(`${dryRun ? "[dry-run] " : ""}${report}`);
}

async function main(): Promise<void> {
  const root = process.cwd();
  await run({
    dryRun: process.argv.includes("--dry-run"),
    publicDir: join(root, "public"),
    generatedPath: join(root, "constants", "instagram-posts.generated.ts"),
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
}
