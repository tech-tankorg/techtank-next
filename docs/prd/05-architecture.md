# Architecture

## Stack

Next.js (App Router, Turbopack) + React + TypeScript, Tailwind CSS, shadcn/ui component
pattern with CVA for variants, Radix UI primitives, lucide-react icons, pnpm. Shared
layouts for `/get-involved` and `/legal`.

## Repo structure

```text
.
├── docs/
│   └── prd/            # this pipeline
├── app/                 # Next.js App Router routes
│   ├── layout.tsx       # Root layout (header, footer, fonts, SEO)
│   ├── get-involved/    # shared sub-nav layout
│   └── legal/           # shared document layout
├── components/
│   ├── layout/          # Header, Footer
│   └── ui/              # Reusable UI (buttons, cards, sections, etc.)
├── constants/            # Structured content (events, sponsors, social links)
└── public/               # Static assets (images, downloads)
```

## Data layer

**Events are modeled as structured content** (MDX or JSON), not a flat Luma embed. Each
record carries: date, venue, title, tags, host/sponsor attribution, status
(`upcoming` | `past`), RSVP URL, Google Photos album URL, YouTube recording URL. This one
content model powers both `/events` and the home-page event preview.

## Functional requirements

### Must-have

- Next.js App Router with shared layouts for `/get-involved` and `/legal`.
- Global header + footer on every route.
- `/events` renders an embedded Luma calendar (or API-backed list) **and** a hand-curated
  "Next Up" + "Past Events" timeline driven by the structured event content above.
- Prominent intake action on each `/get-involved/*` page — a `mailto:techtankto@gmail.com`
  CTA with a role-specific subject line and a copy-to-clipboard-friendly details scaffold.
- Press Kit exposes a downloadable ZIP of logos + a brand-guidelines PDF.
- Social share / Open Graph metadata on every page.
- Privacy-respecting analytics (Plausible or equivalent).
- SEO: sitemap, robots.txt, canonical URLs, per-page metadata.

### Should-have

- Event `schema.org/Event` structured data (when eventing server-side).
- Newsletter / Slack invite capture block in footer.
- Google Photos album preview cards (Home and event detail).
- Branded slide deck template linked from `/get-involved/speak-or-facilitate` and
  `/resources/media-kit`.
- Speaker run-of-show and host checklist (linked PDFs).
- Per-event recap surface (Google Photos + YouTube + host/sponsor thanks), reached via
  "View Recap" from the past-events timeline.

### Nice-to-have

`.ics` calendar export, embedded Instagram/LinkedIn feeds (light, cached, non-blocking),
dark mode, i18n scaffold (EN default, FR optional).

## Non-functional requirements

- **Performance:** LCP < 2.5s on 4G mobile; Core Web Vitals "Good".
- **SEO:** per-page metadata, structured data, sitemap, clean slugs.
- **Reliability:** static or ISR hosting with CDN (Vercel/Cloudflare).
- **Privacy:** no PII collected beyond intake emails to `techtankto@gmail.com`; a cookie
  banner only if analytics or embeds require one.
- **Jurisdiction:** governed by the laws of Ontario, Canada.
- **Security:** external links use `rel="noopener noreferrer"`; third-party embeds
  sandboxed where possible.

## Event support (organizer tooling, not user-facing pages)

Assets produced and surfaced via `/resources/media-kit` and
`/get-involved/speak-or-facilitate`: branded slide templates (speaker + title card), host
checklist PDF, speaker run-of-show PDF, social post templates, sponsor-outreach email
templates.

## Out of scope

Member accounts/login, paid ticketing (RSVPs stay on Luma), merchandise store, native
mobile app, on-site donation processing (corporate support happens via
`/get-involved/sponsor`).
