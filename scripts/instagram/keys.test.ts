import { describe, expect, test } from "vitest";
import { deriveKey, shortcodeFromPermalink, stripShortcode } from "./keys";

describe("stripShortcode", () => {
  test.each([
    ["C69JJh-R2qP", "C69JJhR2qP"],
    ["C7Cc9Nvxnf-", "C7Cc9Nvxnf"],
    ["C7cskGFP_5-", "C7cskGFP5"],
    ["C6_wKWQOT7D", "C6wKWQOT7D"],
    ["DW9-vcgiPHx", "DW9vcgiPHx"],
  ])("strips non-alphanumerics: %s -> %s", (input, expected) => {
    expect(stripShortcode(input)).toBe(expected);
  });
});

describe("shortcodeFromPermalink", () => {
  test("extracts the shortcode segment from a /p/ permalink", () => {
    expect(shortcodeFromPermalink("https://www.instagram.com/p/DW9-vcgiPHx/")).toBe("DW9-vcgiPHx");
  });
  test("extracts from a /reel/ permalink without trailing slash", () => {
    expect(shortcodeFromPermalink("https://www.instagram.com/reel/C7o69MmuY1m")).toBe("C7o69MmuY1m");
  });
  test("throws on an unparseable permalink", () => {
    expect(() => shortcodeFromPermalink("https://example.com/nope")).toThrow("permalink");
  });
});

describe("deriveKey", () => {
  test("combines the UTC date with the stripped shortcode", () => {
    expect(deriveKey("2024-05-14T18:59:58+0000", "C69JJh-R2qP")).toBe("2024-05-14-C69JJhR2qP");
  });
  test("uses the UTC calendar date, not local time", () => {
    // 23:30 UTC stays on the 14th regardless of the runner's timezone
    expect(deriveKey("2024-05-14T23:30:00+0000", "C6_wKWQOT7D")).toBe("2024-05-14-C6wKWQOT7D");
  });
});
