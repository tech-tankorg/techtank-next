# Plan

| # | Milestone | Kind | Depends on | Status |
| - | --------- | ---- | ---------- | ------ |
| 1 | Foundation: scaffold, design tokens, shared layouts, event content model | System | — | Merged |
| 2 | Home (`/`) — the proving surface | Surface | 1 | Merged |
| 3 | About + FAQ, Events | Surface | 2 | Merged |
| 4 | Get Involved hub + 4 role pages | Surface | 2 | Merged |
| 5 | Resources (Media Kit, Design System), Legal | Surface | 2 | Merged |
| 6 | Launch sweep: SEO, analytics, accessibility, performance | Sweep | 3, 4, 5 | In progress |

## Milestone 1 — Foundation (system)

Scaffold, the color/typography tokens (`04-design.md`), the root layout (header, footer,
theme, SEO defaults), the `/get-involved` and `/legal` shared layouts, and the structured
event-content model (`05-architecture.md` §Data layer) that both `/events` and the home
page's event preview depend on.

## Milestone 2 — Home (proving surface)

Builds the social-proof patterns (social feed, logo cloud, numeric facts) and the recurring
UI patterns (overline kicker, role cards with checkmarks, supported-by strip, dual
end-of-page CTA cards) that every later surface reuses.

## Milestones 3–5 — Remaining surfaces (parallel)

Each surface reuses Milestone 2's shared patterns and layouts:

- **About + FAQ, Events** — the values manifesto and the event archive/recap pattern
  (`03-solution.md` §Systems).
- **Get Involved hub + role pages** — the four role-card teasers plus their individual
  intake pages, sharing the `/get-involved` layout's sticky sub-nav and CTA styling.
- **Resources, Legal** — Media Kit and Design System (independent, static-content-heavy);
  the three `/legal` documents under the shared document layout.

## Milestone 6 — Launch sweep

Cross-cutting pass once all surfaces are built: SEO (sitemap, robots.txt, canonical URLs,
per-page metadata), analytics (Plausible or equivalent), accessibility (WCAG 2.1 AA sweep),
and performance (LCP budget) — the non-functional requirements in `05-architecture.md`.
