import { describe, expect, test } from "vitest";
import { transformNode } from "./transform";
import type { MediaNode } from "./schema";

const base = {
  permalink: "https://www.instagram.com/p/C69JJh-R2qP/",
  timestamp: "2024-05-14T16:19:58+0000", // == createdAtRaw 1715703598
};

describe("transformNode", () => {
  test("maps a single IMAGE to a post + one download", () => {
    const node: MediaNode = {
      ...base,
      id: "3367888333715237519",
      caption: "hello world",
      media_type: "IMAGE",
      media_url: "https://cdn.example.com/a.jpg",
    };
    const { key, post, downloads } = transformNode(node);

    expect(key).toBe("2024-05-14-C69JJhR2qP");
    expect(post.caption).toBe("hello world");
    expect(post.shortcode).toBe("C69JJh-R2qP"); // raw, dashes preserved
    expect(post.pk).toBe("3367888333715237519"); // string, exact
    expect(post.date).toBe("2024-05-14");
    expect(post.createdAtRaw).toBe(1715703598);
    expect(post.media).toEqual([
      {
        type: "image",
        path: "/media/instagram/2024-05-14-C69JJhR2qP/techtankto_C69JJh-R2qP_3367888333715237519.webp",
      },
    ]);
    expect(downloads).toEqual([
      {
        sourceUrl: "https://cdn.example.com/a.jpg",
        destPath:
          "/media/instagram/2024-05-14-C69JJhR2qP/techtankto_C69JJh-R2qP_3367888333715237519.webp",
        kind: "image",
      },
    ]);
  });

  test("treats a missing caption as an empty string", () => {
    const node: MediaNode = {
      ...base,
      id: "1",
      media_type: "IMAGE",
      media_url: "https://cdn.example.com/a.jpg",
    };
    expect(transformNode(node).post.caption).toBe("");
  });

  test("a VIDEO yields a video file plus a poster image", () => {
    const node: MediaNode = {
      ...base,
      id: "99",
      media_type: "VIDEO",
      media_url: "https://cdn.example.com/v.mp4",
      thumbnail_url: "https://cdn.example.com/v.jpg",
    };
    const { post, downloads } = transformNode(node);
    expect(post.media.map((m) => m.type)).toEqual(["video", "image"]);
    expect(post.media[0].path).toMatch(/techtankto_C69JJh-R2qP_99\.mp4$/);
    expect(post.media[1].path).toMatch(/techtankto_C69JJh-R2qP_99_poster\.webp$/);
    expect(downloads.map((d) => d.kind)).toEqual(["video", "image"]);
    expect(downloads[0].sourceUrl).toBe("https://cdn.example.com/v.mp4");
    expect(downloads[1].sourceUrl).toBe("https://cdn.example.com/v.jpg");
  });

  test("a CAROUSEL_ALBUM expands its children in order", () => {
    const node: MediaNode = {
      ...base,
      id: "parent",
      media_type: "CAROUSEL_ALBUM",
      children: {
        data: [
          { id: "c1", media_type: "IMAGE", media_url: "https://c/1.jpg" },
          { id: "c2", media_type: "IMAGE", media_url: "https://c/2.jpg" },
        ],
      },
    };
    const { post } = transformNode(node);
    expect(post.media).toHaveLength(2);
    expect(post.media[0].path).toMatch(/_c1\.webp$/);
    expect(post.media[1].path).toMatch(/_c2\.webp$/);
  });

  test("throws if a non-carousel node has no media_url", () => {
    const node = { ...base, id: "1", media_type: "IMAGE" } as MediaNode;
    expect(() => transformNode(node)).toThrow("media_url");
  });
});
