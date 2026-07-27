# AGENTS.md

Guidance for any coding agent working in this repository. This is the
primary, tool-agnostic context source for AI agents (Claude Code, Cursor,
Copilot, Codex, etc.); tool-specific files like `CLAUDE.md` defer to it.

## What this repo is

A Next.js (App Router) implementation of
[techtankto.com](https://www.techtankto.com/), Toronto's volunteer-run
tech community website. The redesign moves away from a flat "link-tree"
layout toward a conversion-oriented onboarding hub that funnels
visitors into specific roles — attendee, speaker, host, sponsor, or
volunteer.

The PRD (`docs/prd/`) is the live source of truth for product intent, IA,
design tokens, architecture, and the delivery plan — a numbered pipeline,
read in order. House standards (process, writing, nextjs, components, data,
testing, performance, accessibility, seo, git) are supplied by the vendored
skills under `.claude/skills/` / `.agents/skills/` and load automatically via
skill discovery. Application code lives in `app/`, with shared pieces in
`components/`, `constants/`, and `public/`. The initial UI scaffold was
generated from the prior PRD via v0 —
[original prompt and generation](https://v0.app/chat/website-generation-from-prd-eLek8w4RJMh).

For developer-facing setup (scripts, directory tree, route map), see
[`README.md`](./README.md).

## Repository layout

```
.
├── AGENTS.md              # This file — primary agent context
├── CLAUDE.md              # Claude Code stub that includes AGENTS.md
├── .agents/skills/        # vendored house-standard skills (copied, portable)
├── .claude/skills/        # same skills (symlinked to .agents/skills/)
└── docs/
    └── prd/               # 01-brief → 06-plan, the numbered pipeline
```

`docs/prd/06-plan.md` is the live milestone list. `docs/prd/03-solution.md`
holds the route map and per-surface content requirements.

## How the information architecture works

The redesign replaces a flat "link-tree" layout with a
**conversion-oriented onboarding hub** — see `docs/prd/03-solution.md` for
the full route map, shared layouts, and navigation structure:

- `/` — social-proof-driven home (testimonials, event photos, logo cloud).
- `/about` — values manifesto built on four pillars: **Community,
  Innovation, Teamwork, Respect**.
- `/get-involved` — onboarding hub with four role sub-pages (Speaker,
  Host, Sponsor, Organizer Team), each ending in an intake action (email us
  at `techtankto@gmail.com`).
- `/events` — embedded Luma calendar.
- `/press-kit` — standalone brand assets and fast facts for media.
- `/legal` — grouped compliance documents.

The `/get-involved` and `/legal` sections use **Next.js shared layouts**
(sticky sub-nav, persistent CTA, consistent form/document styling).

## Working conventions

### Editing the PRD

- When the IA changes, update **both** the route table in
  `docs/prd/03-solution.md` **and** the global navigation section in the
  same file. Keeping these in sync is the single most important
  maintenance task.
- Never introduce a route in the code that isn't reflected in the route
  table.
- Keep each of the six pipeline files in its own concern (`01-brief.md`
  through `06-plan.md`) — don't restate one file's content in another;
  point instead.

### Tone in specs

- Concrete, not aspirational. If organizers haven't confirmed a number
  (attendance, tier, timing), flag it instead of inventing one.
- Conversion-oriented: every page spec must declare **one dominant
  CTA**, and `/get-involved/*` must end in an intake action (email us).
- Social proof first: testimonials, real event photography, and
  logo clouds are required patterns, not decoration.

### Theming

- `next-themes` handles light/dark/system detection. Always set `defaultTheme="system"` and `enableSystem` on `ThemeProvider`.
- Add `suppressHydrationWarning` to the `<html>` element to suppress the server/client hydration mismatch that `next-themes` causes.
- Theme-aware components must `useEffect` + `useState(mounted)` and return a placeholder until mounted — otherwise icons and states will SSR incorrectly.
- The theme toggle cycles `system → light → dark` (not just light↔dark) so users can return to system preference without a page reload.
- Dark-mode overrides use `@custom-variant dark (&:where(.dark, .dark *))` in Tailwind v4. Dark tokens live in `.dark {}` in `globals.css`.
- `globals.css` is divided into four sections: Base Tokens (`@theme`), Light Tokens & Gradients (`.light`), Dark Tokens & Gradients (`.dark`), Helper Classes.

### Global state

- Use Zustand (`lib/store.ts`) for sitewide UI state (mobile menu, future modal/drawer state, etc.).
- Keep `next-themes` as the single source of truth for theme — do not duplicate theme state in Zustand.
- Use `pnpm` (not npm or yarn) for all package operations in this repo.

### After making code changes

- Run `pnpm type:check` to catch type errors.
- Run `pnpm format` to keep the codebase oxfmt-clean.

Do both before reporting a task complete or opening a commit.

### Adding a new page

1. Decide where it belongs in the IA. If it's a role, it goes under
   `/get-involved`; if it's legal, under `/legal`; if it's a resource,
   it's probably a sibling of `/press-kit`.
2. Add the route to the route table and, if user-facing, the global
   navigation section in `docs/prd/03-solution.md`.
3. Update the relevant nav (global header or shared layout sub-nav)
   to match.

### Removing or renaming a page

- Remove the route table row, its navigation entry, and any inbound
  links from other pages or specs. Use Grep to find references before
  deleting.

## Things to avoid

- Don't let the implementation drift from the PRD. When behaviour or
  IA changes, update both `docs/prd/03-solution.md` and the matching code
  under `app/` in the same change.
- Don't add numbers, quotes, or tier details that organizers haven't
  confirmed. It's better to leave a "finalize with organizers" note
  than to publish fiction.
- Don't re-introduce the old flat structure (separate `/speak`,
  `/host`, `/mentors`, `/donate`, `/terms-conditions` pages) — those
  were intentionally rolled into `/get-involved/*` and `/legal/*`.
- Don't touch settings or hooks without being asked.
- Never use agent memory (e.g. Claude Code's persistent memory directory,
  `MEMORY.md`, or any equivalent tool-specific store). Conventions and
  project facts must live in this repository — in `AGENTS.md`, the
  `docs/prd/` pipeline, or the code itself — so they are reviewable,
  versioned, and available to every contributor and agent. Memory that
  only one tool can read is invisible to code review and drifts out of
  date. If something is worth remembering, commit it.

## Git workflow

Conventional Commits, branch naming, and the no-AI-attribution rule are
supplied by the vendored `git` skill. Project-specific overrides:

- Feature work happens on the branch specified in the session brief.
- Never force-push to any branch, especially `main`. No exceptions.
- Never skip hooks without explicit permission.
- Do not open a pull request unless explicitly asked.
