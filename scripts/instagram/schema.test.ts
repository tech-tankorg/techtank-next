import { describe, expect, test } from "vitest";
import { mediaNodeSchema, mediaResponseSchema } from "./schema";

const imageNode = {
  id: "17895695668004550",
  caption: "hello",
  media_type: "IMAGE",
  media_url: "https://cdn.example.com/a.jpg",
  permalink: "https://www.instagram.com/p/C69JJh-R2qP/",
  timestamp: "2024-05-14T18:59:58+0000",
};

describe("mediaNodeSchema", () => {
  test("accepts a valid IMAGE node", () => {
    expect(mediaNodeSchema.parse(imageNode).id).toBe("17895695668004550");
  });
  test("accepts a node with no caption (caption is optional)", () => {
    const { caption: _c, ...noCaption } = imageNode;
    expect(mediaNodeSchema.parse(noCaption).caption).toBeUndefined();
  });
  test("accepts a CAROUSEL_ALBUM with children and no media_url", () => {
    const carousel = {
      id: "1",
      media_type: "CAROUSEL_ALBUM",
      permalink: "https://www.instagram.com/p/X/",
      timestamp: "2024-05-14T18:59:58+0000",
      children: {
        data: [
          { id: "2", media_type: "IMAGE", media_url: "https://c/x.jpg" },
        ],
      },
    };
    expect(mediaNodeSchema.parse(carousel).children?.data).toHaveLength(1);
  });
  test("rejects an unknown media_type", () => {
    expect(() =>
      mediaNodeSchema.parse({ ...imageNode, media_type: "STORY" }),
    ).toThrow();
  });
  test("rejects a node missing a permalink", () => {
    const { permalink: _p, ...noPermalink } = imageNode;
    expect(() => mediaNodeSchema.parse(noPermalink)).toThrow();
  });
});

describe("mediaResponseSchema", () => {
  test("parses the { data: [...] } envelope", () => {
    expect(mediaResponseSchema.parse({ data: [imageNode] }).data).toHaveLength(1);
  });
});
