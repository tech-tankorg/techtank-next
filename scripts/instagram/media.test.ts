import { describe, expect, test, vi } from "vitest";
import {
  buildImageArgs,
  buildVideoArgs,
  isFfmpegAvailable,
  processDownload,
} from "./media";
import type { Download } from "./transform";

describe("ffmpeg arg builders", () => {
  test("video args encode h264 mp4 with faststart and a 1080 cap", () => {
    const args = buildVideoArgs("/in.mp4", "/out.mp4");
    expect(args).toContain("libx264");
    expect(args).toContain("-movflags");
    expect(args).toContain("+faststart");
    expect(args.join(" ")).toContain("min(1080,iw)");
    expect(args[0]).toBe("-y");
    expect(args).toContain("/in.mp4");
    expect(args.at(-1)).toBe("/out.mp4");
  });

  test("image args encode webp", () => {
    const args = buildImageArgs("/in.jpg", "/out.webp");
    expect(args).toContain("libwebp");
    expect(args.at(-1)).toBe("/out.webp");
  });
});

describe("isFfmpegAvailable", () => {
  test("true when the probe exits 0", () => {
    expect(isFfmpegAvailable(() => ({ status: 0 }))).toBe(true);
  });
  test("false when the probe errors or exits non-zero", () => {
    expect(isFfmpegAvailable(() => ({ status: 1 }))).toBe(false);
    expect(
      isFfmpegAvailable(() => {
        throw new Error("ENOENT");
      }),
    ).toBe(false);
  });
});

describe("processDownload", () => {
  const baseDeps = {
    fetchImpl: vi.fn().mockResolvedValue({
      ok: true,
      arrayBuffer: async () => new ArrayBuffer(4),
    }) as unknown as typeof fetch,
    writeTemp: vi.fn().mockResolvedValue("/tmp/raw"),
    ensureDir: vi.fn().mockResolvedValue(undefined),
    runFfmpeg: vi.fn().mockReturnValue({ status: 0 }),
    cleanup: vi.fn(),
  };

  test("routes a video through the video encoder to the right output path", async () => {
    const runFfmpeg = vi.fn().mockReturnValue({ status: 0 });
    const dl: Download = {
      sourceUrl: "https://c/v.mp4",
      destPath: "/media/instagram/k/techtankto_X_1.mp4",
      kind: "video",
    };
    await processDownload(dl, "/public", { ...baseDeps, runFfmpeg });
    expect(baseDeps.fetchImpl).toHaveBeenCalledWith("https://c/v.mp4");
    const [, args] = runFfmpeg.mock.calls[0];
    expect(args).toContain("libx264");
    expect(args.at(-1)).toBe("/public/media/instagram/k/techtankto_X_1.mp4");
  });

  test("throws when ffmpeg exits non-zero", async () => {
    const dl: Download = {
      sourceUrl: "https://c/a.jpg",
      destPath: "/media/instagram/k/a.webp",
      kind: "image",
    };
    await expect(
      processDownload(dl, "/public", {
        ...baseDeps,
        runFfmpeg: vi.fn().mockReturnValue({ status: 1, stderr: "boom" }),
      }),
    ).rejects.toThrow(/ffmpeg/i);
  });
});
