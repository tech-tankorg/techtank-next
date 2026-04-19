# TechTank TO — v0 / Stitch prompt

Drop-in prompt for v0.dev or Google Stitch. Covers the full redesign
spec at enough fidelity for the tool to generate a coherent first
pass. Full spec lives in `../PRD.md` and `../pages/`.

---

Design a marketing website for **TechTank TO**, Toronto's volunteer-run
tech community (monthly in-person meetups, founded 2022). The redesign
replaces a flat link-tree with a conversion-oriented onboarding hub.
The site funnels visitors to external platforms — it does not own
accounts or ticketing.

## Stack & delivery

- Next.js 14 App Router, TypeScript, Tailwind CSS.
- Shared layouts for `/how-it-works/*` (sticky sub-nav) and `/legal/*`
  (document column + ToC).
- Mobile-first. Breakpoints 640 / 1024 / 1280.
- WCAG 2.1 AA: visible focus, alt text, semantic headings,
  keyboard-reachable forms, reduced-motion support.
- Core Web Vitals "Good"; LCP < 2.5s on 4G mobile.

## Brand & tone

- **Voice:** welcoming and inclusive to everyone in the tech space —
  students, career-changers, senior engineers, and corporate sponsors
  alike. Concrete, not aspirational. Confident without being
  exclusionary. Avoid anything that reads as playful, youthful, or
  the tone should be credible enough that a
  sponsor's marketing team feels comfortable associating their brand
  here.
- **Palette (use these exactly — do not invent colours):**
  - Gradient: three-stop background motif — warm peach/coral
    (`#F5C4A8`) → soft lavender (`#D8CEED`) → pale aqua teal
    (`#B5E0D9`). Used for hero and section banding. Not pink.
  - Logo teal: `#3DC4C0` — primary brand colour, fish mark.
  - Logo amber: `#F0AA00` — lightning bolt highlight; use sparingly.
  - Surface dark / CTA: `#141926` — pill buttons, footer background.
  - Body text: near-black on light surfaces.
  - Do not introduce hot pink, true blue, or colours outside this
    family.
  - Professional and welcoming, not corporate. Generous whitespace.
    Clean, structured rhythm.
- **Typography:** a strong, neutral display typeface (geometric or
  grotesque sans preferred — avoid decorative serifs, script faces, or
  anything that reads as playful). A legible humanist sans for body.
  The pairing should feel industry-conference-grade.
- **Imagery:** real event photography first. No stock illustration.
- **Motif:** fish/"Tank" mark is a subtle detail, not a dominant motif.

## Information architecture

```
/
├── about
├── how-it-works            (onboarding hub — shared layout)
│   ├── speaker
│   ├── host
│   ├── sponsor
│   └── volunteer
├── events                  (Luma calendar + event archive)
├── press-kit
└── legal                   (shared layout)
    ├── terms-of-service
    ├── privacy-policy
    └── code-of-conduct
```

**Global nav:** About · How it Works · Events · Press Kit.
**Header CTAs:** primary "Join our Slack", secondary "RSVP on Luma".
**Footer columns:** Community (Meetup, Luma, Slack, LinkedIn,
Instagram, GitHub, YouTube) · Get Involved (Speak, Host, Sponsor,
Volunteer) · Resources (Press Kit, Events) · Legal. Contact:
`techtankto@gmail.com`.

## Recurring UI primitives (use consistently across pages)

1. **Overline kicker** — short all-caps label above every major
   section headline (e.g. `WAYS TO GET INVOLVED`, `NEXT UP`, `RECENT
   EVENTS`, `LATEST HIGHLIGHTS`, `GET IN TOUCH`, `READY TO CONNECT?`).
2. **Role card** — icon → overline → headline → one-paragraph pitch →
   three checkmark bullets → primary CTA. Reused identically for the
   four roles (Speak / Host / Sponsor / Volunteer) on `/` and
   `/how-it-works`.
3. **Event card** — status badge (`UPCOMING` / `RECAP AVAILABLE`),
   event number + date badge, title, one-line pitch, chips for date/
   time/venue, tag chips (topic, beginner-friendly, capacity),
   host/sponsor attribution ("Supported by <logo>"), CTA ("RSVP on
   Luma" or "View Recap"). Reused on `/` and `/events`.
4. **Supported-by strip** — single-line host/sponsor logo
   acknowledgment directly above the footer on `/` and `/events`.
5. **Dual end-of-page CTA** — two side-by-side cards closing long
   pages: "Never miss an event" (Luma subscribe) + "Want to
   contribute?" (→ `/how-it-works`).
6. **Direct-email contact card** — prominent, copy-friendly card
   showing `techtankto@gmail.com` + one-line context. Appears at the
   end of `/how-it-works`, `/how-it-works/*`, and `/press-kit`.
7. **Testimonial** — quote, name, role, company, small photo, linked
   to LinkedIn where available.
8. **Logo cloud** — grayscale, evenly-spaced, with caption "Companies
   that have supported TechTank". Distinct from the "Supported by"
   strip.

## Page-by-page

### `/` (Home)

Hero with overline kicker `TORONTO · MONTHLY · SINCE 2022`, brand
lockup, one-sentence mission, primary CTA "RSVP on Luma", secondary
"Join our Slack". Hero visual: curated real-event photo collage.

Sections below the hero, in order:
1. Trust strip — large numerals (attendees per event, talks, events
   hosted, cadence). Numbers sourced from structured content; never
   invented.
2. Testimonials — 3–6 quotes.
3. Logo cloud of past hosts/sponsors.
4. **Ways to get involved** — overline + headline "Become part of it"
   + four role cards (Speak / Host / Sponsor / Volunteer).
5. **Recent Events** — overline `RECENT EVENTS`, right-aligned "View
   all events →". Shows the next upcoming event plus the two most
   recent past events using the event-card component.
6. **Latest Highlights** — overline + two-up: left is an embedded
   Instagram reel or Google Photos preview from the most recent
   event; right is short copy + "Follow on Instagram" and "Join our
   Slack" links.
7. Four-pillar values teaser (Community, Innovation, Teamwork,
   Respect) linking to `/about`.
8. Dual end-of-page CTA cards.
9. Supported-by strip.
10. Footer.

### `/about`

Values manifesto built on four pillars (Community, Innovation,
Teamwork, Respect). Each pillar gets an overline, headline,
paragraph, and supporting photo or quote. Mission statement block.
Timeline of the community since 2022. Link out to Code of Conduct.

### `/how-it-works` (onboarding hub)

Shared layout: sticky sub-nav (Overview / Speaker / Host / Sponsor /
Volunteer) that collapses to a segmented control on mobile; persistent
"Join our Slack" CTA; shared "Why get involved" strip.

Overview page content:
1. Hero — overline `GET INVOLVED`, headline "Let's build TechTank
   together."
2. Four role cards (same shape as `/`):
   - **Speak** — `SHARE WHAT YOU KNOW` · 30–45 min talk + Q&A · Any
     tech topic · Recorded & published to YouTube.
   - **Host** — `BRING US TO YOUR SPACE` · 40–100 attendees ·
     6:00–8:30pm weeknight · Logo on event marketing.
   - **Sponsor** — `SUPPORT THE COMMUNITY` · Logo on website &
     marketing · Speaker slot options · Tasteful brand visibility.
   - **Volunteer** — `HELP RUN THE CREW` · Event-day or ongoing · No
     speaking required · Portfolio-quality work for creatives.
3. "Why get involved" — three columns (Marketing & Brand, Recruiting,
   Karma).
4. FAQ (speaker seniority, host cost, volunteer gating, response time).
5. Contact strip — overline `READY TO CONNECT?`, headline "Drop us a
   line.", direct-email contact card.

### `/how-it-works/<role>` (Speaker, Host, Sponsor, Volunteer)

Each sub-page follows the same structure:
- Hero with overline, headline, sub-headline, primary CTA to intake
  form.
- "Why <role>" three-column.
- Logistics (Speaker: talk length, format, audience, recording;
  Host: capacity 100–120, timing 6:00–8:30pm, AV, food, TTC access;
  Sponsor: what sponsorship supports, soft tier hints; Volunteer:
  roles + time commitment).
- "What TechTank handles" vs. "What you provide" two-up.
- "What you get" checklist.
- Social proof (testimonials + logo cloud or current crew photos).
- Embedded Google Form intake (one per role).
- Direct-email contact card at the bottom.

### `/events`

1. Hero — overline `TECHTANK TO`, headline "All Events", sub-headline
   "Every TechTank meetup — most recent first." Right-aligned counter
   "<N> EVENTS · SINCE 2022" from structured content.
2. **Next Up** — featured full-width event card (`UPCOMING` badge,
   date, title, tag chips, supported-by right rail). Primary CTA
   "RSVP on Luma", secondary "View details". If no sponsor confirmed,
   right rail shows "Looking for a host" linking to
   `/how-it-works/host`.
3. Full-width Luma calendar embed. Fallback: next-5-events list if the
   embed fails.
4. **Past Events** — vertical timeline of past-event cards, most
   recent first. Each card: event number + date badge, `RECAP
   AVAILABLE` chip, title + host attribution, chips, host/sponsor
   logo, "View Recap" CTA that expands inline to Google Photos
   album + YouTube recording + speaker list + host/sponsor thank-you.
5. Dual end-of-page CTA (subscribe / get involved).
6. Contact strip with direct-email card.

### `/press-kit`

Standalone single-page brand kit. Logo downloads (SVG + PNG in ZIP),
brand guidelines PDF, fast facts, leadership bios (if provided),
media contact (`techtankto@gmail.com`), past press mentions, social
handles, embed of the latest Guppy Talks YouTube video. Direct-email
contact card at the bottom.

### `/legal/*`

Shared layout: narrow document column with editorial typography, a
sticky table-of-contents sidebar on desktop, "Last updated"
timestamp at top. Three docs: Terms of Service, Privacy Policy, Code
of Conduct. Inline links between them. Consistent heading rhythm.

## External destinations (all links open in a new tab, rel="noopener
noreferrer")

Meetup · Luma · Slack (invite) · LinkedIn · Instagram · YouTube ·
GitHub · Google Photos (per-event albums) · Google Forms (one per
`/how-it-works/*` intake).

## Must-not

- Don't invent numbers (attendance, tiers, talk counts). Leave a
  visible "finalize with organizers" placeholder instead.
- Don't re-introduce standalone `/speak`, `/host`, `/mentors`,
  `/donate` pages — those are consolidated under `/how-it-works/*`.
- Don't use stock illustration in place of real event photography.
- Don't dilute the "one dominant CTA per page" rule.
