# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this repo is

A Next.js (App Router) implementation of
[techtankto.com](https://www.techtankto.com/), Toronto's volunteer-run
tech community website. The redesign moves away from a flat "link-tree"
layout toward a conversion-oriented onboarding hub that funnels
visitors into specific roles — attendee, speaker, host, sponsor, or
volunteer.

Specs live in `prd/` (see `prd/PRD.md`); application code lives in
`app/`, with shared pieces in `components/`, `constants/`, and
`public/`. The initial UI scaffold was generated from the PRD via v0 —
[original prompt and generation](https://v0.app/chat/website-generation-from-prd-eLek8w4RJMh).

For developer-facing setup (scripts, directory tree, route map), see
[`README.md`](./README.md).

## Repository layout

```
.
├── CLAUDE.md              # This file
└── prd/
    ├── PRD.md             # Top-level product requirements document
    └── pages/             # One spec per route
        ├── home.md                # /
        ├── about.md               # /about
        ├── events.md              # /events
        ├── press-kit.md           # /press-kit
        ├── get-involved/          # Onboarding hub (shared layout)
        │   ├── index.md           # /get-involved
        │   ├── speaker.md         # /get-involved/speaker
        │   ├── host.md            # /get-involved/host
        │   ├── sponsor.md         # /get-involved/sponsor
        │   └── volunteer.md       # /get-involved/volunteer
        ├── legal/                 # Legal folder (shared layout)
        │   ├── terms-of-service.md
        │   ├── privacy-policy.md
        │   └── code-of-conduct.md
        └── design-system.md       # /design-system (brand guidelines + design token reference)
```

`prd/PRD.md` is the top-level document. Each file in `prd/pages/` fully
describes one route. The file tree under `prd/pages/` mirrors the final
URL structure.

## How the information architecture works

The redesign replaces a flat "link-tree" layout with a
**conversion-oriented onboarding hub**:

- `/` — social-proof-driven home (testimonials, event photos, logo cloud).
- `/about` — values manifesto built on four pillars: **Community,
  Innovation, Teamwork, Respect**.
- `/get-involved` — onboarding hub with four role sub-pages (Speaker,
  Host, Sponsor, Volunteer), each ending in an intake action (email us
  at `techtankto@gmail.com`).
- `/events` — embedded Luma calendar.
- `/press-kit` — standalone brand assets and fast facts for media.
- `/legal` — grouped compliance documents.

The `/get-involved` and `/legal` sections are designed for **Next.js
shared layouts** (sticky sub-nav, persistent CTA, consistent form/
document styling).

## Working conventions

### Editing specs

- Keep the per-page structure consistent: Purpose, Primary audience,
  Key messages, Content sections, CTAs, Functional requirements,
  Acceptance criteria.
- Internal links between PRD documents are relative (e.g.
  `pages/home.md` from `prd/PRD.md`; `../about.md` from a
  `prd/pages/legal/*.md` file).
- When the IA changes, update **both** `prd/PRD.md` §2 (Route map /
  shared layouts / navigation) **and** the affected per-page files.
  Keeping these in sync is the single most important maintenance task.
- Never introduce a URL in a page spec that isn't reflected in the
  Route map in `prd/PRD.md`.

### Tone in specs

- Concrete, not aspirational. If organizers haven't confirmed a number
  (attendance, tier, timing), flag it instead of inventing one.
- Conversion-oriented: every page spec must declare **one dominant
  CTA**, and `/get-involved/*` must end in an intake action (email us).
- Social proof first: testimonials, real event photography, and
  logo clouds are required patterns, not decoration.

### Component conventions

Components follow [shadcn/ui](https://ui.shadcn.com/) patterns with
[CVA](https://cva.style/) (`class-variance-authority`) for variant management:

- Define visual variants (color, size, style) as CVA `variants` — never
  as ad-hoc `className` overrides at the call site.
- Use `cn()` from `lib/utils.ts` (clsx + tailwind-merge) for all
  className composition.
- Expose `asChild` via Radix `Slot` when a component needs to delegate
  rendering to its child (e.g. `<Button asChild><Link …>`).
- Keep layout utilities (`w-full`, `mt-4`, etc.) at the call site via
  `className`; keep visual styles inside the CVA definition.
- New primitives go in `components/ui/`; page-specific compositions
  stay in the relevant `app/` directory.

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

### Semantic colour tokens

- Never use brand-named colour utilities (e.g. `text-teal-dark`, `bg-seafoam`) in components or pages. Use semantic tokens (`text-foreground`, `bg-primary`, `bg-secondary`, `text-muted-foreground`, etc.) so dark mode works without per-component overrides.
- Pair every background token with its matching foreground: `bg-primary → text-primary-foreground`, `bg-secondary → text-secondary-foreground`, `bg-success → text-success-foreground`.
- Gradients are defined as CSS utility classes (`.gradient-brand`, `.gradient-hero`, etc.) with `.dark` overrides in `globals.css`; use the class name in JSX, never inline `background:` values.

### Adding a new page

1. Decide where it belongs in the IA. If it's a role, it goes under
   `/get-involved`; if it's legal, under `/legal`; if it's a resource,
   it's probably a sibling of `/press-kit`.
2. Create `prd/pages/<path>.md` following the existing section
   structure.
3. Add the route to the Route map table in `prd/PRD.md` §2.1.
4. Add a link to it in `prd/PRD.md` §4 (Page-Level Requirements Index).
5. Update the relevant nav (global header or shared layout sub-nav)
   description in `prd/PRD.md` §2.3.

### Removing or renaming a page

- Remove the file, its Route map row, its index entry, and any inbound
  links from other page specs. Use Grep to find references before
  deleting.

## Things to avoid

- Don't let the implementation drift from the PRD. When behaviour or
  IA changes, update both the relevant `prd/pages/*.md` spec and the
  matching code under `app/` in the same change.
- Don't add numbers, quotes, or tier details that organizers haven't
  confirmed. It's better to leave a "finalize with organizers" note
  than to publish fiction.
- Don't re-introduce the old flat structure (separate `/speak`,
  `/host`, `/mentors`, `/donate`, `/terms-conditions` pages) — those
  were intentionally rolled into `/get-involved/*` and `/legal/*`.
- Don't touch settings or hooks without being asked.

## Git workflow

- Feature work happens on the branch specified in the session brief
  (currently `claude/techtank-toronto-prd-kuQxt`).
- Create new commits rather than amending. Use HEREDOC commit messages.
- Never force-push or skip hooks without explicit permission.
- Do not open a pull request unless explicitly asked.
- Do not sign commits or PRs as Claude, and do not include
  `claude.ai/code` session links, `Co-Authored-By: Claude` trailers,
  or any other "Generated with Claude Code" markers in commit messages
  or PR bodies.

### Conventional commits

- Use [Conventional Commits](https://www.conventionalcommits.org/)
  for every commit subject:
  `<type>(<optional scope>): <imperative summary>`
- Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`,
  `test`, `build`, `ci`, `chore`, `revert`.
- Pick a scope that matches the page or area (`about`, `events`,
  `get-involved/sponsor`, `prd`, `legal`, etc.) when one is obvious;
  omit it when the change is global.
- Keep the subject under ~72 characters, lowercase, no trailing
  period; explain the *why* in the body if the diff alone doesn't.
- Use `!` (e.g. `feat(get-involved)!: …`) and a `BREAKING CHANGE:`
  footer for changes that move URLs, rename routes, or alter
  documented behavior.

### Branch naming

- Branches follow `<type>/<short-kebab-summary>` using the same
  type vocabulary as commits — e.g. `feat/sponsor-intake-form`,
  `fix/events-luma-fallback`, `docs/prd-route-map`,
  `refactor/get-involved-layout`.
- Session-managed Claude branches keep the `claude/<slug>` prefix
  given in the session brief; treat the slug as the conventional
  summary and don't rename it.
- Keep slugs short (≤40 chars), lowercase, hyphen-separated, and
  reference the affected area rather than the ticket number.
