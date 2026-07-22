# Instagram scraper

Fetches recent posts from the [@techtankto](https://www.instagram.com/techtankto/)
Instagram account and merges genuinely new ones into the site's data, so the feed
stays current without hand-transcribing each post.

## How it works

```
Graph API (1 page) → Zod validate → transform to InstagramPost
  → download + ffmpeg-compress media → upsert by key (never delete)
  → never-shrink guard → write instagram-posts.generated.ts
```

- **Split ownership.** The scraper only ever writes
  `constants/instagram-posts.generated.ts`. Human curation (featured posts) lives
  in `constants/instagram-curation.ts` and is never touched. `instagram-posts.ts`
  merges the two.
- **Incremental + safe.** Posts are deduped by their record key
  (`YYYY-MM-DD-<shortcode>`); existing entries are never overwritten or deleted,
  and a run that would shrink the file aborts without writing.
- **Skip-and-flag.** A post whose media 404s or fails to compress is skipped (not
  partially written) and surfaced in the run summary; it retries next run.

## Prerequisites

1. **ffmpeg with libwebp** on PATH — macOS: `brew install ffmpeg-full`. Plain
   `brew install ffmpeg` does **not** include the `libwebp` encoder and the
   media pipeline will fail on every post with `Unknown encoder 'libwebp'`.
   `ffmpeg-full` is keg-only (won't overwrite a plain `ffmpeg` install already
   on PATH), so put it first: `export PATH="/opt/homebrew/opt/ffmpeg-full/bin:$PATH"`.
2. **A Meta app + long-lived token** for the @techtankto account:
   - Convert @techtankto to an Instagram **Business/Creator** account and link it
     to a Facebook Page.
   - Create a Meta app, add the Instagram Graph API, and generate a **long-lived
     access token** (refresh roughly every 60 days).
   - Copy `.env.example` → `.env.local` and fill in `INSTAGRAM_USER_ID` and
     `INSTAGRAM_ACCESS_TOKEN`.

## Usage

```bash
# Preview what would change — fetches and prints a summary, writes nothing:
pnpm scrape:instagram --dry-run

# Real run — downloads media and updates instagram-posts.generated.ts:
pnpm scrape:instagram
```

Review the resulting diff (new entries + downloaded media under
`public/media/instagram/<key>/`) and commit it.

## Tests

```bash
pnpm test
```

The pure core (key derivation, schema, transform, merge, emit, report) is fully
unit-tested. The shell (fetch, ffmpeg) uses injectable dependencies, so tests
assert behavior without hitting the network or running ffmpeg.
