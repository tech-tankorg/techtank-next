---
name: nextjs
description: Next.js App Router conventions — runtime/language foundations, server-vs-client components, static generation, metadata, and folder structure. Use when scaffolding a Next.js app, adding a route/page, or deciding how a piece of code should be organized in a Next.js + TypeScript codebase.
---

# Next.js

How the framework is used: App Router, rendering, and the built-in primitives.

## Foundations

Runtime, language, and what "done" requires.

1. **pnpm only.** Never npm or yarn. Node ≥ 24.
2. **TypeScript strict.** No `any` escape hatches; domain types live in `types/`.
3. **Exported constants, hooks, types, and utils carry TSDoc.** Every export in `constants/`, `hooks/`, `types/`, and `utils/` opens with a `/** */` block: a one-line summary, plus `@param`/`@returns` for functions where the signature does not already say it, and per-member docs on non-obvious type fields; the doc is the contract a caller reads without opening the body. Components document themselves through their props types, not TSDoc.
4. **A server started for verification is killed when the check ends**: a `pnpm dev` or `pnpm start` run to confirm a change holds the port and outlives the task otherwise, so the next run collides or, worse, verifies against stale output. Long-running servers the human started are theirs to stop.
5. **A verification server runs on its own port and dies by its own pid.** Start it with an explicit `-p` well clear of `3000`, capture the pid (`pnpm start -p 3987 & echo $!`), and kill that pid. Never `pkill -f next-server` or any name match: it matches every Next process on the machine, including the human's dev server, and rule 4 leaves that one theirs to stop.

## Concepts

1. **App Router conventions.** One root layout; pages compose section components inside `<main>`; the `app/` route tree mirrors the site's information architecture.
2. **Server components by default.** `'use client'` only where state or browser APIs demand it (overlays, accordions, marquees, motion-driven sections), and as low in the tree as possible.
3. **Static generation everywhere.** No runtime content fetching. Dynamic routes prebuild with `generateStaticParams` over their id lists and return `notFound()` for unknown ids.
4. **All images render through `next/image`** with explicit width and height. (Video loops are not images; they render as media elements with their own posters and dimensions.)
5. **Fonts load through `next/font/local`**, exposed as CSS variables and applied on `<body>`.
6. **Metadata via the Metadata API**
: a full root export plus per-page overrides (never hand-rolled `<head>` tags).

## Folder structure

1. **Application code lives under `src/`**; `public/` stays at the repo root. The canonical layout:

   ```text
   .
   ├── public/           # static assets (fonts, images, favicons, files)
   └── src/
       ├── app/          # App Router routes: layout.tsx, page.tsx, <route>/page.tsx
       ├── components/   # atomic design: atoms/ · molecules/ · organisms/ · templates/
       ├── constants/    # typed compile-time content + site config
       ├── types/        # domain types
       ├── themes/       # CSS token files (theme.css entry, helpers)
       ├── fonts/        # next/font/local loader modules
       ├── providers/    # context providers wired in the root layout
       ├── hooks/        # shared React hooks
       └── utils/        # helpers (cn/cva re-exports, dates, strings)
   ```

   Folders are added only when they earn their place: no empty scaffolding for layers a project doesn't use yet.