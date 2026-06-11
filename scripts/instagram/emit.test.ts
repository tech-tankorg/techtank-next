import { describe, expect, test } from "vitest";
import { renderGeneratedFile, sortByKey } from "./emit";
import type { InstagramPost } from "../../constants/instagram-posts";

const post = (caption: string): InstagramPost => ({
  caption,
  media: [{ type: "image", path: "/x.webp" }],
});

const dataLiteral = (rendered: string) => {
  const marker = "generatedPosts: Record<string, InstagramPost> =";
  const start = rendered.indexOf("{", rendered.indexOf(marker));
  return JSON.parse(rendered.slice(start, rendered.lastIndexOf("}") + 1));
};

describe("sortByKey", () => {
  test("orders keys ascending for stable diffs", () => {
    expect(Object.keys(sortByKey({ b: post("b"), a: post("a") }))).toEqual([
      "a",
      "b",
    ]);
  });
});

describe("renderGeneratedFile", () => {
  test("emits the type import and the typed export", () => {
    const out = renderGeneratedFile({ a: post("a") });
    expect(out).toContain('import type { InstagramPost } from "./instagram-posts";');
    expect(out).toContain(
      "export const generatedPosts: Record<string, InstagramPost> =",
    );
    expect(out.endsWith("\n")).toBe(true);
  });

  test("round-trips data unchanged, including newlines and quotes in captions", () => {
    const posts = {
      "2024-05-14-X": post('line1\nline2 "quoted" 🌟'),
      "2024-05-13-A": post("earlier"),
    };
    const parsed = dataLiteral(renderGeneratedFile(posts));
    expect(parsed).toEqual(sortByKey(posts));
    expect(parsed["2024-05-14-X"].caption).toBe('line1\nline2 "quoted" 🌟');
  });
});
