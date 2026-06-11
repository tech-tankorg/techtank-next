import { describe, expect, test } from "vitest";
import { findOrphanedFeaturedKeys } from "./curation";
import { generatedPosts } from "../../constants/instagram-posts.generated";
import { featuredKeys } from "../../constants/instagram-curation";
import type { InstagramPost } from "../../constants/instagram-posts";

const post = (): InstagramPost => ({ caption: "", media: [] });

describe("findOrphanedFeaturedKeys", () => {
  test("returns keys that have no matching generated post", () => {
    expect(findOrphanedFeaturedKeys({ a: post() }, ["a", "ghost"])).toEqual([
      "ghost",
    ]);
  });

  test("returns empty when every curated key resolves", () => {
    expect(findOrphanedFeaturedKeys({ a: post(), b: post() }, ["a"])).toEqual([]);
  });

  // Guards the real data: a featured key that doesn't exist in the generated file
  // would silently vanish from the homepage. Fail the suite if that ever happens.
  test("the live curation file has no orphaned featured keys", () => {
    expect(findOrphanedFeaturedKeys(generatedPosts, featuredKeys)).toEqual([]);
  });
});
