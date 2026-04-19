# Events — `/events`

**URL:** https://www.techtankto.com/events
**Page title:** Events — TechTank TO
**Role:** Single source of truth for upcoming TechTank events, powered
by the TechTank Luma calendar.

---

## 1. Purpose

Make it effortless for a visitor to see what's coming up and RSVP. The
page is primarily a **calendar embed**, not a bespoke events system.

## 2. Primary audience

- Returning members checking what's next
- Newcomers deciding whether to attend
- Sponsors / speakers verifying the cadence is real

## 3. Key messages

- "Stay up to date with everything happening at TechTank."
- Browse and RSVP directly from the Luma calendar.
- Monthly in-person events; occasional socials and virtual talks.

## 4. Content sections

1. **Hero**
   - Headline: "Our Upcoming Events".
   - Sub-headline: "Stay up to date with everything happening at
     TechTank."
   - One line: "Don't miss our next event. Browse and RSVP directly
     through our Luma calendar below."

2. **Luma calendar embed**
   - Full-width Luma calendar for `techtankto` (or equivalent handle).
   - Fallback: if the embed fails, render a server-fetched list of the
     next 5 events with date, title, venue, and RSVP button.

3. **Subscribe**
   - Buttons: "Subscribe on Luma", "Add to Google Calendar (.ics)",
     "Follow on Meetup".

4. **Past events (optional)**
   - Small grid linking to past event albums (Google Photos) and
     recorded talks (YouTube).
   - Serves as additional social proof.

5. **"Can't make it?" block**
   - Link to Slack ("stay in the loop") and YouTube ("watch past talks").

## 5. Calls to action (priority order)

1. RSVP to the next event (Luma)
2. Subscribe on Luma / Meetup
3. Watch past talks on YouTube

## 6. Functional requirements

- Luma embed loaded lazily; page must render above-the-fold content
  before the embed resolves.
- `.ics` / Google Calendar subscription link functional.
- `schema.org/Event` structured data on each surfaced event (when the
  fallback list is active).
- Embed must not break keyboard navigation or screen-reader access.

## 7. Acceptance criteria

- A visitor can RSVP to the next event in under three taps from this
  page on mobile.
- If Luma's embed is down, the page still communicates the next event
  and offers an RSVP path (Meetup fallback).
