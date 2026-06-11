import type { InstagramPost } from "../../constants/instagram-posts";

// Referential-integrity check for the split-ownership model: every curated key
// must resolve to a generated post. A mistyped or stale key would otherwise drop
// its featured flag silently. Returns the orphaned keys (empty = healthy).
export function findOrphanedFeaturedKeys(
  generated: Record<string, InstagramPost>,
  featuredKeys: Iterable<string>,
): string[] {
  return [...featuredKeys].filter((key) => !(key in generated));
}
