# Contributing

Welcome — this is the TechTank TO website, built and maintained by volunteers. Anyone on the team can pick up an issue, open a PR, and ship it.

## Digital Team resources

- **Onboarding:** [techtankto/techtank-planning](https://github.com/techtankto/techtank-planning) — start here if you're new to the team.
- **Roadmap:** [techtank-planning roadmap](https://github.com/orgs/techtankto/projects/5/views/2?reload=1) — what's planned, in progress, and shipped.
- **Issues:** [techtank-site issues](https://github.com/techtankto/techtank-site/issues) — where website work is tracked and picked up.

## Before you start

1. Get the app running locally — see [`README.md`](./README.md) for setup and scripts.
2. Skim [`docs/prd/`](./docs/prd/). It defines the information architecture, brand
   conventions, and content rules that all contributions must follow — read it before
   making any structural change.
3. Skim [`AGENTS.md`](./AGENTS.md) if you're using an AI coding agent; it holds the
   agent-specific working conventions. (`CLAUDE.md` is a stub that includes it.)

Two content rules worth knowing up front:

- Keep one dominant CTA per page. Role pages under `/get-involved/*` must end in an intake
  action (email us).
- Don't invent numbers, quotes, or sponsor tiers organizers haven't confirmed — leave a
  note instead.

## Editor setup

This repo uses [oxfmt](https://www.npmjs.com/package/oxfmt) for formatting. In VS Code, install the [Oxc extension](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode), set it as the default formatter, and enable format-on-save:

```jsonc
// .vscode/settings.json
{
  "editor.defaultFormatter": "oxc.oxc-vscode",
  "editor.formatOnSave": true,
}
```

You can also run `pnpm format` from the CLI at any time.

## Branches

```text
<type>/<short-kebab-summary>
```

Uses the same type vocabulary as commits.

```text
feat/sponsor-tier-cards
fix/events-luma-fallback
docs/prd-route-map
refactor/get-involved-layout
chore/upgrade-tailwind
```

- Lowercase, hyphen-separated, ≤40 characters
- Reference the affected area, not a ticket number

## Commits

This repo uses [Conventional Commits](https://www.conventionalcommits.org/).

```text
<type>(<scope>): <imperative summary>
```

**Types:** `feat` · `fix` · `docs` · `style` · `refactor` · `perf` · `test` · `build` · `ci` · `chore` · `revert`

**Scope:** match the affected page or area — `home`, `about`, `events`, `get-involved/sponsor`, `legal`, `design-system`, `prd`, etc. Omit when the change is global.

**Subject:** lowercase, no trailing period, ≤72 characters. Put the _why_ in the commit body if the diff alone doesn't explain it.

**Breaking changes:** append `!` to the type+scope and add a `BREAKING CHANGE:` footer for anything that moves a URL, renames a route, or alters documented behaviour.

```text
feat(get-involved)!: split sponsor page into tiers

BREAKING CHANGE: /get-involved/sponsor now expects a `tier` query param
```

## Pull requests

- One focused concern per PR — avoid mixing features with refactors
- Link the relevant section of `docs/prd/03-solution.md` if the change affects IA or content

## Reviews and merging

- **Anyone on the team can review and approve** another contributor's PR — you do not need to wait for an organizer.
- Aim for at least **one approval** before merging. For larger changes (new pages, IA shifts, breaking routes), two approvals are preferred.
- Once your PR has the required approvals, **the PR author merges** — this keeps the git attribution correct.
- Actually review: read the diff, check it against `docs/prd/03-solution.md`, and leave a comment if something is unclear. Trust comes with responsibility.

## Opening issues

File website issues in [this repo's issue tracker](https://github.com/techtankto/techtank-site/issues). Include:

- **What** the problem or feature is
- **Steps to reproduce** (for bugs) or **context** (for features)
- **Acceptance criteria** — a checklist of what done looks like

Clear issues mean anyone on the team can pick them up and ship without needing to track down the original author.
