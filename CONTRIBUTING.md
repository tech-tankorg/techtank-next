# Contributing

## Commits

This repo uses [Conventional Commits](https://www.conventionalcommits.org/).

```
<type>(<scope>): <imperative summary>
```

**Types:** `feat` · `fix` · `docs` · `style` · `refactor` · `perf` · `test` · `build` · `ci` · `chore` · `revert`

**Scope:** match the affected page or area — `home`, `about`, `events`, `get-involved/sponsor`, `legal`, `design-system`, `prd`, etc. Omit when the change is global.

**Subject:** lowercase, no trailing period, ≤72 characters. Put the *why* in the commit body if the diff alone doesn't explain it.

**Breaking changes:** append `!` to the type+scope and add a `BREAKING CHANGE:` footer for anything that moves a URL, renames a route, or alters documented behaviour.

```
feat(get-involved)!: split sponsor page into tiers

BREAKING CHANGE: /get-involved/sponsor now expects a `tier` query param
```

## Branches

```
<type>/<short-kebab-summary>
```

Uses the same type vocabulary as commits.

```
feat/sponsor-tier-cards
fix/events-luma-fallback
docs/prd-route-map
refactor/get-involved-layout
chore/upgrade-tailwind
```

- Lowercase, hyphen-separated, ≤40 characters
- Reference the affected area, not a ticket number

## Pull requests

- One focused concern per PR — avoid mixing features with refactors
- Link the relevant `prd/pages/*.md` spec if the change affects IA or content
- When adding or renaming a route, update both `prd/PRD.md` §2.1 and the matching spec in `prd/pages/`

## Before you start

Read [`CLAUDE.md`](./CLAUDE.md) and [`prd/PRD.md`](./prd/PRD.md) — they define the information architecture, brand conventions, and content rules that all contributions must follow.
