# Home — `/`

**URL:** https://www.techtankto.com/
**Page title:** TechTank TO — Toronto's tech community
**Role:** Primary entry point. Builds social trust through the "Power of
the Crowd" — testimonials, real event photography, and logo clouds — and
routes visitors to a role or the next event.

---

## 1. Purpose

Within 10 seconds, answer:

1. What is TechTank?
2. Is this community legit / active / for people like me?
3. What do I do next?

The redesign leans on **social proof** as the primary persuasion lever,
not product copy. Content tone is organic and welcoming—inspired by the
genuine warmth of events like the Code Diversity meetup—while remaining
professional and credible.

## 2. Primary audience

- First-time visitors evaluating the community
- Toronto-based tech professionals at all career levels
- Potential speakers, hosts, sponsors, volunteers sizing us up

## 3. Key messages

- A lively, inclusive tech community that welcomes all walks of life.
- Volunteer-run, Toronto-based, founded 2022.
- Monthly in-person events: technical talks + networking.
- Built by and for the Toronto tech community.

## 4. Content sections (top to bottom)

1. **Hero**
   - Overline kicker: `TORONTO · MONTHLY · SINCE 2022`.
   - Brand lockup + one-sentence mission.
   - Primary CTA: **"RSVP on Luma"** → `/events`.
   - Secondary CTA: "Join our Slack".
   - Hero visual: a curated collage of real event photos (retain the
     collage motif from the current site, treated with more intentional
     composition and whitespace).

2. **Trust strip / fast facts**
   - Fast facts pulled from the structured events content — for
     example attendees per event, talks delivered, events hosted,
     monthly cadence. Any number that organizers haven't confirmed
     is flagged "finalize with organizers", not invented.
   - Renders as a thin band of large numerals under the hero.

3. **Social Feed (replaces testimonials)**
   - Embedded posts from TechTank's LinkedIn and Instagram accounts.
   - LinkedIn: https://www.linkedin.com/company/techtank-to/
   - Instagram: https://www.instagram.com/techtankto/
   - Shows real, organic content from organizers and community members.
   - Content tone: genuine reactions, welcoming energy—inspired by the
     organic warmth of the Code Diversity meetup. Professional yet
     approachable, never corporate or childish.
   - Fallback: if embeds fail, display curated social cards with links
     to follow on each platform.

4. **Sponsor / host logo cloud**
   - Grayscale logos of companies that have hosted or sponsored.
   - Caption: "Companies that have supported TechTank".

5. **Ways to get involved (role cards)**
   - Overline kicker: `WAYS TO GET INVOLVED`.
   - Headline: "Become part of it."
   - Sub-headline: "Every TechTank event runs on the time of
     community members like you."
   - Four role cards sharing one shape (see PRD §5.7):
     - **Speak** — `Share what you know` → `/how-it-works/speaker`
     - **Host** — `Bring us to your space` → `/how-it-works/host`
     - **Sponsor** — `Support the community` → `/how-it-works/sponsor`
     - **Volunteer** — `Help run the crew` → `/how-it-works/volunteer`
   - Each card: icon → overline → headline → one-paragraph pitch →
     three checkmark bullets of what the contributor gets.

6. **Recent Events (preview of the archive)**
   - Overline kicker: `RECENT EVENTS`.
   - Right-aligned link: "View all events →" → `/events`.
   - The next upcoming event (if any) plus the two most recent past
     events, rendered with the same event-card shape used on
     `/events` (status badge, date, title, tag chips, host/sponsor
     attribution, CTA).
   - CTAs per card:
     - Upcoming → "RSVP on Luma"
     - Past with recap → "View Recap"
     - Past without recap → "Photos" / "Watch talk" as available

7. **Latest Highlights (social proof)**
   - Overline kicker: `LATEST HIGHLIGHTS`.
   - Two-up layout:
     - Left: an embedded Instagram reel or Google Photos preview from
       the most recent event.
     - Right: short copy — e.g. "See what we built at <event name>." —
       plus "Follow on Instagram" and "Join our Slack" links.
   - Goal: prove the community is alive and active this month.

8. **Values teaser**
   - Four-pillar strip (Community, Innovation, Teamwork, Respect) with a
     link to `/about`.

9. **Dual end-of-page CTA**
   - Two side-by-side cards above the footer:
     - **Never miss an event.** Subscribe to the Luma calendar — CTA
       "Follow on Luma".
     - **Want to contribute?** Speak, host, sponsor, or volunteer —
       CTA "Get involved" → `/how-it-works`.

10. **Supported-by strip**
    - Single-line "Supported by <host/sponsor logos>" acknowledgment
      directly above the footer. Distinct from the logo cloud in
      section 4.

11. **Footer** (global)

## 5. Calls to action (priority order)

1. RSVP to the next event (Luma)
2. Join our Slack
3. Pick a role → `/how-it-works`
4. View Press Kit (for press/partners)

## 6. Functional requirements

- Recent Events module reads from the shared structured event content
  (see PRD §6.1) — same source as `/events`. The home preview is a
  filtered slice, not a duplicate list.
- Testimonials and logos live in structured content (MDX / JSON), not
  hard-coded in components.
- Google Photos and Instagram previews degrade gracefully if embeds fail.
- All external links open in a new tab with `rel="noopener noreferrer"`.
- Mobile-first layout; hero collage remains legible at 375px.
- Open Graph / Twitter card metadata with TechTank branding.
- Role cards and event cards share their component with
  `/how-it-works` and `/events` respectively — no bespoke variants.

## 7. Acceptance criteria

- A visitor can, within one scroll on desktop, see: who TechTank is,
  proof it is active, the next event, and where to join.
- Every "role" card is reachable within one tap from the hero on mobile.
- Social-proof section (testimonials + logos + recent events) is
  visible before the visitor reaches the footer on mobile.
- The "Recent Events" preview is never empty: if no events are
  scheduled, it falls back to the two most recent past events with
  recap links.
- Numbers in the trust strip are traceable back to structured content
  or explicitly flagged as organizer-confirmed. No invented figures.
