# Contributing

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

## Pull requests

- One focused concern per PR — avoid mixing features with refactors
- Link the relevant `prd/pages/*.md` spec if the change affects IA or content
- When adding or renaming a route, update both `prd/PRD.md` §2.1 and the matching spec in `prd/pages/`

## Reviews and merging

- **Anyone on the team can review and approve** another contributor's PR — you do not need to wait for an organizer.
- Aim for at least **one approval** before merging. For larger changes (new pages, IA shifts, breaking routes), two approvals are preferred.
- Once your PR has the required approvals, **the PR author merges** — this keeps the git attribution correct.
- Actually review: read the diff, check it against the relevant `prd/pages/*.md` spec, and leave a comment if something is unclear. Trust comes with responsibility.

## Discussions and questions

Join **#website-team** in the TechTank Slack for async discussions, design questions, and coordination.

When opening an issue, include:

- **What** the problem or feature is
- **Steps to reproduce** (for bugs) or **context** (for features)
- **Acceptance criteria** — a checklist of what done looks like

Clear issues mean anyone on the team can pick them up and ship without needing to track down the original author.

## Before you start

Read [`AGENTS.md`](./AGENTS.md) and [`prd/PRD.md`](./prd/PRD.md) — they define the information architecture, brand conventions, and content rules that all contributions must follow. (`CLAUDE.md` is a stub that includes `AGENTS.md`.)
