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
not product copy.

## 2. Primary audience

- First-time visitors evaluating the community
- Toronto-based junior / early-career developers
- Potential speakers, hosts, sponsors, volunteers sizing us up

## 3. Key messages

- A lively, inclusive tech community that welcomes all walks of life.
- Volunteer-run, Toronto-based, founded 2022.
- Monthly in-person events: technical talks + networking.
- Built by and for the Toronto tech community.

## 4. Content sections (top to bottom)

1. **Hero**
   - Brand lockup + one-sentence mission.
   - Primary CTA: **"RSVP on Luma"** → `/events`.
   - Secondary CTA: "Join our Slack".
   - Hero visual: a curated collage of real event photos (retain the
     collage motif from the current site, treated more elegantly).

2. **Trust strip / fast facts**
   - "100–120 attendees per event", "50+ talks", "X companies hosted",
     "Monthly since 2022" (confirm numbers with organizers).
   - Renders as a thin band of large numerals under the hero.

3. **Testimonials**
   - 3–6 quotes from attendees, speakers, and hosts with name, role,
     company, and a small photo.
   - Each quote links to the person's LinkedIn where available.

4. **Sponsor / host logo cloud**
   - Grayscale logos of companies that have hosted or sponsored.
   - Caption: "Companies that have supported TechTank".

5. **How to get involved**
   - Four role cards linking into the onboarding hub:
     - **Speak** → `/how-it-works/speaker`
     - **Host** → `/how-it-works/host`
     - **Sponsor** → `/how-it-works/sponsor`
     - **Volunteer** → `/how-it-works/volunteer`
   - Overline: "Become part of it" / Caption under: "Every TechTank event
     runs on the time of community members like you."

6. **Upcoming events preview**
   - Next 2–3 events pulled from Luma.
   - CTA: "See all events" → `/events`.

7. **From the community (social previews)**
   - Preview tiles linking to:
     - Recent Google Photos album(s)
     - Instagram grid (last 6 posts)
     - YouTube: latest Guppy Talks / recorded talks
   - Goal: prove the community is alive and active.

8. **Values teaser**
   - Four-pillar strip (Community, Innovation, Teamwork, Respect) with a
     link to `/about`.

9. **Footer** (global)

## 5. Calls to action (priority order)

1. RSVP to the next event (Luma)
2. Join our Slack
3. Pick a role → `/how-it-works`
4. View Press Kit (for press/partners)

## 6. Functional requirements

- Upcoming-events module refreshes from Luma (API or scheduled build).
- Testimonials and logos live in structured content (MDX / JSON), not
  hard-coded in components.
- Google Photos and Instagram previews degrade gracefully if embeds fail.
- All external links open in a new tab with `rel="noopener noreferrer"`.
- Mobile-first layout; hero collage remains legible at 375px.
- Open Graph / Twitter card metadata with TechTank branding.

## 7. Acceptance criteria

- A visitor can, within one scroll on desktop, see: who TechTank is,
  proof it is active, the next event, and where to join.
- Every "role" card is reachable within one tap from the hero on mobile.
- Social-proof section (testimonials + logos) is visible before the
  visitor reaches the footer on mobile.
