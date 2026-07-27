import { describe, expect, test } from "vitest";
import { assertNoShrink, upsertByKey } from "./merge";
import type { InstagramPost } from "../../constants/instagram-posts";

const post = (caption: string): InstagramPost => ({
  caption,
  media: [{ type: "image", path: "/x.webp" }],
});

describe("upsertByKey", () => {
  test("adds posts whose key is not already present", () => {
    const { merged, added } = upsertByKey({ a: post("a") }, [{ key: "b", post: post("b") }]);
    expect(Object.keys(merged).sort()).toEqual(["a", "b"]);
    expect(added).toEqual(["b"]);
  });

  test("skips an existing key without overwriting it", () => {
    const existing = { a: post("original") };
    const { merged, added, skipped } = upsertByKey(existing, [{ key: "a", post: post("CHANGED") }]);
    expect(merged.a.caption).toBe("original");
    expect(added).toEqual([]);
    expect(skipped).toEqual(["a"]);
  });

  test("never deletes existing entries absent from the incoming set", () => {
    const { merged } = upsertByKey({ a: post("a"), b: post("b") }, [{ key: "c", post: post("c") }]);
    expect(Object.keys(merged).sort()).toEqual(["a", "b", "c"]);
  });

  test("does not mutate the input record", () => {
    const existing = { a: post("a") };
    upsertByKey(existing, [{ key: "b", post: post("b") }]);
    expect(Object.keys(existing)).toEqual(["a"]);
  });
});

describe("assertNoShrink", () => {
  test("throws when the result has fewer entries than before", () => {
    expect(() => assertNoShrink(10, 9)).toThrow(/shrink|fewer/i);
  });
  test("passes when the count grows or stays equal", () => {
    expect(() => assertNoShrink(10, 10)).not.toThrow();
    expect(() => assertNoShrink(10, 12)).not.toThrow();
  });
});
