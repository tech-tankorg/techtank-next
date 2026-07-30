# Observations

## The Problem

The old site was a flat "link-tree": every visitor saw the same undifferentiated list of
links regardless of why they came. There was no path that turned a curious visitor into a
speaker, host, sponsor, or organizer — the site described the community but didn't convert
anyone into it.

## The Hardest Failure Mode

A generic-feeling onboarding funnel that reads as corporate rather than community-run. The
site's entire premise rests on social trust — a sponsor's marketing team and a first-time
attendee both need to believe this is real, warm, and Toronto-local, not a template. This is
why social proof (real event photography, embedded social posts, numeric facts, logo cloud)
is a required pattern on `/` and `/get-involved/*`, not decoration — and why the four
`/get-involved/*` role pages are built from one shared card/CTA shape so they read as
siblings of the same trustworthy funnel rather than four disconnected forms.

## Key Design Decisions

- **One dominant CTA per page.** Secondary CTAs are fine; tertiary links belong in the
  footer. Every `/get-involved/*` page ends in an intake action (`mailto:` with a
  role-specific subject line).
- **Social feed over testimonials.** Embedded LinkedIn and Instagram posts from organizers
  showing real, organic community moments — no curated quotes.
- **Events are structured content, not just a Luma embed.** Each event record carries date,
  venue, title, tags, host/sponsor attribution, status (upcoming/past), RSVP URL, Google
  Photos album URL, and YouTube recording URL — powering both `/events` and the home-page
  preview. A dedicated `/events/<slug>` detail route is an explicit v2-only option, not v1
  scope.
- **Shared layouts carry the funnel's consistency.** `/get-involved` gets a sticky sub-nav +
  persistent "Join our Slack" CTA + shared "Why get involved" strip; `/legal` gets a
  document-style narrow column + table of contents + last-updated stamp.
- **No accounts, no ticketing.** The site remains content-driven marketing that funnels to
  external platforms; RSVPs stay on Luma.

## What to Prototype First

The **Home page** (`/`) is the proving surface: it carries the social-proof patterns
(testimonials-as-social-feed, logo cloud, numeric facts), the recurring UI patterns
(overline kickers, role cards with checkmarks, supported-by strip, dual end-of-page CTA
cards) that every other surface reuses, and the event-preview slice of the structured event
content model that `/events` depends on fully.

## Open risks

- Whether individual donation is still a funded path, or fully replaced by corporate
  sponsorship via `/get-involved/sponsor` — undecided.
