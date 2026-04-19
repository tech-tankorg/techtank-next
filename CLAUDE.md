# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this repo is

This is a **PRD / specification repository** for the TechTank TO website
redesign. It contains no application code yet — only Markdown planning
documents that describe the intended information architecture, page
content, and design direction for the future Next.js implementation.

The source site being redesigned: https://www.techtankto.com/

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
        ├── how-it-works/          # Onboarding hub (shared layout)
        │   ├── index.md           # /how-it-works
        │   ├── speaker.md         # /how-it-works/speaker
        │   ├── host.md            # /how-it-works/host
        │   ├── sponsor.md         # /how-it-works/sponsor
        │   └── volunteer.md       # /how-it-works/volunteer
        └── legal/                 # Legal folder (shared layout)
            ├── terms-of-service.md
            ├── privacy-policy.md
            └── code-of-conduct.md
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
- `/how-it-works` — onboarding hub with four role sub-pages (Speaker,
  Host, Sponsor, Volunteer), each ending in a Google Form intake.
- `/events` — embedded Luma calendar.
- `/press-kit` — standalone brand assets and fast facts for media.
- `/legal` — grouped compliance documents.

The `/how-it-works` and `/legal` sections are designed for **Next.js
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
  CTA**, and `/how-it-works/*` must end in an intake form.
- Social proof first: testimonials, real event photography, and
  logo clouds are required patterns, not decoration.

### Adding a new page

1. Decide where it belongs in the IA. If it's a role, it goes under
   `/how-it-works`; if it's legal, under `/legal`; if it's a resource,
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

- Don't create scaffolding or application code in this repo yet — it's
  spec-only. When implementation begins, it will likely live alongside
  these docs (e.g. a Next.js app in `app/`).
- Don't add numbers, quotes, or tier details that organizers haven't
  confirmed. It's better to leave a "finalize with organizers" note
  than to publish fiction.
- Don't re-introduce the old flat structure (separate `/speak`,
  `/host`, `/mentors`, `/donate`, `/terms-conditions` pages) — those
  were intentionally rolled into `/how-it-works/*` and `/legal/*`.
- Don't touch settings or hooks without being asked.

## External platforms the site funnels to

- Meetup: https://www.meetup.com/techtank-to/
- Luma (event RSVPs)
- Slack (invite via Google Form or direct link)
- LinkedIn: https://ca.linkedin.com/company/techtank-to
- Instagram: https://www.instagram.com/techtankto/
- YouTube: https://www.youtube.com/@TechTankTo
- GitHub: https://github.com/tech-tankorg
- Google Forms — one per `/how-it-works/*` intake
- Google Photos — per-event albums

## Git workflow

- Feature work happens on the branch specified in the session brief
  (currently `claude/techtank-toronto-prd-kuQxt`).
- Create new commits rather than amending. Use HEREDOC commit messages.
- Never force-push or skip hooks without explicit permission.
- Do not open a pull request unless explicitly asked.

## Contact

`techtankto@gmail.com`
