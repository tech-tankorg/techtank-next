import { describe, expect, test } from "vitest";
import { loadConfig, selectNewPosts } from "./scrape-instagram";
import type { MediaNode } from "./schema";

const node = (over: Partial<MediaNode> = {}): MediaNode => ({
  id: "1",
  media_type: "IMAGE",
  media_url: "https://c/a.jpg",
  permalink: "https://www.instagram.com/p/C69JJh-R2qP/",
  timestamp: "2024-05-14T16:19:58+0000",
  ...over,
});

describe("loadConfig", () => {
  test("reads required vars and applies the version default", () => {
    const cfg = loadConfig({
      INSTAGRAM_USER_ID: "42",
      INSTAGRAM_ACCESS_TOKEN: "tok",
    });
    expect(cfg).toMatchObject({ userId: "42", accessToken: "tok", version: "v21.0" });
  });

  test("throws listing every missing required var", () => {
    expect(() => loadConfig({})).toThrow(
      /INSTAGRAM_USER_ID.*INSTAGRAM_ACCESS_TOKEN/,
    );
  });
});

describe("selectNewPosts", () => {
  test("keeps only posts whose key is not already present", () => {
    const existing = new Set(["2024-05-14-C69JJhR2qP"]);
    const { fresh, skippedExisting, failed } = selectNewPosts(existing, [
      node(), // existing key
      node({
        id: "2",
        permalink: "https://www.instagram.com/p/DW9-vcgiPHx/",
        timestamp: "2025-04-10T10:00:00+0000",
      }),
    ]);
    expect(skippedExisting).toEqual(["2024-05-14-C69JJhR2qP"]);
    expect(fresh.map((f) => f.key)).toEqual(["2025-04-10-DW9vcgiPHx"]);
    expect(failed).toEqual([]);
  });

  test("collects transform failures instead of throwing", () => {
    const { fresh, failed } = selectNewPosts(new Set(), [
      node({ id: "99", permalink: "https://example.com/broken" }),
    ]);
    expect(fresh).toEqual([]);
    expect(failed).toEqual([{ id: "99", reason: expect.stringContaining("permalink") }]);
  });
});
