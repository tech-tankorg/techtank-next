# Events — `/events`

**URL:** https://www.techtankto.com/events
**Page title:** Events — TechTank TO
**Role:** Single source of truth for upcoming TechTank events and a
scrollable archive of everything we've run before. Powered by the
TechTank Luma calendar plus hand-curated event records.

---

## 1. Purpose

Make it effortless for a visitor to see what's coming up and RSVP —
and, just as importantly, prove the community's cadence is real by
giving them a full past-events timeline with recaps.

## 2. Primary audience

- Returning members checking what's next
- Newcomers deciding whether to attend
- Sponsors / speakers verifying the cadence is real and scoping past
  events before reaching out

## 3. Key messages

- "Stay up to date with everything happening at TechTank."
- Monthly in-person events; occasional socials and virtual talks.
- Every past event has photos, speakers, and often a recording — this
  is an active, ongoing community, not a dormant page.

## 4. Content sections

1. **Hero**
   - Overline kicker: `TECHTANK TO`.
   - Headline: "All Events".
   - Sub-headline: "Every TechTank meetup — most recent first."
   - Right-aligned counter strip: "<N> EVENTS · SINCE 2022" (counts
     pulled from the structured event content; no hardcoded numbers).

2. **Next Up (featured upcoming event)**
   - Overline kicker: `NEXT UP`.
   - Full-width card for the next scheduled event:
     - Status badge: `UPCOMING`
     - Event number or month badge (e.g. `EVENT 14` or `APR 2026`)
     - Title and one-line pitch
     - Date + time chip, venue chip
     - Tag chips (e.g. "Beginner-friendly", "Recording planned",
       "100 seats")
     - Primary CTA: **"RSVP on Luma"** → Luma event URL
     - Secondary CTA: "View details" → Luma event URL (anchor)
     - Right-rail "Supported by" block with host/sponsor logo; if
       none confirmed, shows "Looking for a host" with a link to
       `/how-it-works/host`.
   - If no event is scheduled yet, the card degrades to a "Next event
     announcing soon — join Slack to be first to hear" state.

3. **Luma calendar embed**
   - Full-width Luma calendar for the TechTank handle, under the
     featured card.
   - Fallback: if the embed fails, render the next 5 events from the
     structured event content with date, title, venue, and RSVP
     button.

4. **Past Events timeline**
   - Overline kicker: `PAST EVENTS`.
   - Vertical timeline, most recent first. Each past-event card
     carries:
     - Event number + date badge
     - `RECAP AVAILABLE` status chip when a recap bundle exists
     - Title and host/sponsor attribution line (e.g. "Hosted at
       Shopify Toronto")
     - Date + time chip, venue chip
     - Tag chips (topic, track, participant note)
     - Host/sponsor logo, right-aligned
     - CTA: **"View Recap"** — opens an anchored recap block that
       surfaces:
       - Linked Google Photos album
       - Linked YouTube recording (Guppy Talks / talk)
       - Speaker list (name + talk title)
       - One-line host/sponsor thank-you
   - A dedicated `/events/<slug>` detail route is explicitly out of
     scope for v1; recaps are an inline expansion plus external
     links. Revisit only if organizers want editorial write-ups.

5. **Dual end-of-page CTA**
   - Two side-by-side cards:
     - **Never miss an event.** "Subscribe to our Luma calendar to be
       notified when the next event goes live." — CTA: "Follow on
       Luma".
     - **Want to contribute?** "Speak, host, sponsor, or volunteer
       for the next one." — CTA: "Get involved" → `/how-it-works`.

6. **Contact strip**
   - Overline kicker: `GET IN TOUCH`.
   - Direct-email contact card: `techtankto@gmail.com` with one
     line — "For hosting, sponsorship, and media inquiries."

## 5. Calls to action (priority order)

1. RSVP to the next event (Luma)
2. View a past recap (builds trust → pushes them into Slack / CTAs)
3. Subscribe on Luma / Meetup
4. Get involved → `/how-it-works`

## 6. Functional requirements

- Events are read from structured content (MDX or JSON) shared with
  the home page. See PRD §6.1.
- Luma embed loaded lazily; page must render above-the-fold content
  (hero + Next Up card) before the embed resolves.
- `.ics` / Google Calendar / Luma subscription links functional.
- `schema.org/Event` structured data on surfaced events when the
  fallback list is active.
- Embed and timeline must not break keyboard navigation or
  screen-reader access — each card is a single reachable landmark
  with clear labeled CTAs.
- Past-event cards render server-side; the "View Recap" expansion
  uses progressive disclosure (no layout shift on open).
- If Google Photos or YouTube URLs are missing for a past event, the
  card renders without the `RECAP AVAILABLE` chip rather than
  broken links.

## 7. Acceptance criteria

- A visitor can RSVP to the next event in under three taps from this
  page on mobile.
- A visitor who has never heard of TechTank can scroll the Past
  Events timeline and see at least 3 prior events with recap
  evidence (photos or recording) before reaching the footer.
- The Next Up card always carries an explicit host/sponsor
  attribution or a "Looking for a host" link — never blank space.
- If Luma's embed is down, the page still communicates the next
  event and offers an RSVP path (Meetup fallback).
- Every number on the page (event count, capacity, etc.) comes from
  structured content, not hardcoded copy.
