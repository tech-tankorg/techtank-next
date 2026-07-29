# Solution

## Concept

A conversion-oriented onboarding hub in place of the old link-tree: one persistent global
shell (header + footer), a social-proof-driven home page, and a `/get-involved` hub that
routes each visitor type to its own intake page. Two shared layouts (`/get-involved`,
`/legal`) carry consistent sub-navigation and document styling across their child routes.

## Surfaces

Route-level purpose and content requirements, at concept level:

| Path                                                                         | Purpose                                                                                          |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `/`                                                                          | Social-proof-driven overview and primary CTAs                                                    |
| `/about` (+ `/about/faq`, `/about/team`)                                     | Values & community manifesto (the four pillars); FAQ; team roster (board, core team, volunteers) |
| `/get-involved`                                                              | Onboarding hub; routes visitors to a role                                                        |
| `/get-involved/speak-or-facilitate`                                          | Speaker logistics + intake action                                                                |
| `/get-involved/host`                                                         | Venue logistics (40–120 cap, 6–8:30pm) + intake action                                           |
| `/get-involved/sponsor`                                                      | Corporate partner pitch + intake action                                                          |
| `/get-involved/organizer`                                                    | Crew onboarding + intake action                                                                  |
| `/events`                                                                    | Upcoming events (Luma) + past-events timeline                                                    |
| `/resources/media-kit`                                                       | Brand assets, logos, fast facts for press and partners                                           |
| `/resources/design-system`                                                   | Brand guidelines — colours, typography, component reference                                      |
| `/legal/terms-of-service`, `/legal/privacy-policy`, `/legal/code-of-conduct` | Compliance docs                                                                                  |

### Shared layouts

- **Root layout** — global header, footer, theme, SEO defaults.
- **`/get-involved` layout** — sticky sub-nav (Speak or Facilitate / Host / Sponsor /
  Organizer Team), persistent "Join our Slack" CTA, shared "Why get involved" strip,
  consistent intake CTA styling.
- **`/legal` layout** — document-style narrow column, table of contents sidebar,
  last-updated stamp.

### Global navigation

- **Primary nav:** About, Get Involved, Events, Code of Conduct.
- **Header CTA:** "Join our Slack" (secondary: "RSVP on Luma").
- **Footer:** Community links (Luma, Meetup, Slack, LinkedIn, Instagram, GitHub, YouTube) ·
  Get Involved (Speak, Host, Sponsor, Organizer Team) · Resources (Press Kit, Events) ·
  Legal (Terms, Privacy, Code of Conduct) · contact email + Slack link.

### External destinations

Luma (`luma.com/techtank`), Meetup (`meetup.com/techtank-to`), Slack
(`techtankto.com/links/slack`), LinkedIn (`linkedin.com/company/techtank-to`), Instagram
(`instagram.com/techtankto`), YouTube (`youtube.com/@TechTankTo`), GitHub
(`github.com/techtankto`), per-event Google Photos albums, and email intake
(`techtankto@gmail.com`, one inbox for all `/get-involved/*` roles).

### Key user journeys

1. **Curious newcomer** → `/` → `/about` → `/events` (RSVPs on Luma) → joins Slack.
2. **Aspiring speaker** → `/` → `/get-involved/speak-or-facilitate` → emails intake.
3. **Company host** → `/` or `/get-involved` → `/get-involved/host` → intake → receives
   sponsorship package.
4. **Corporate sponsor** → `/resources/media-kit` or `/get-involved/sponsor` → downloads
   assets → sponsor intake.
5. **Organizer** → Slack invite or `/` → `/get-involved/organizer` → intake.
6. **Journalist/partner** → `/resources/media-kit` → downloads logos + fast facts → emails.
7. **Returning member** → `/events` or Slack.

## Systems

- **Conversion orientation.** Every page has exactly one dominant CTA.
- **Social proof patterns** (required on `/` and relevant `/get-involved/*`): the
  LinkedIn/Instagram social feed, numeric facts (40–120 attendees/event, 45+ events hosted,
  monthly cadence since 2023), sponsor/host logo cloud, linked Google Photos/Instagram
  previews, YouTube links to recent talks.
- **Event archive & recap pattern.** `/events` and the home page treat each event as a
  recurring series entry, not a flat Luma embed: an event/date badge, title + one-line
  pitch, venue + time chips, tag chips, host/sponsor attribution, and a status-driven CTA
  (**Upcoming** → "Next Up" + RSVP on Luma; **Past** → "View Recap" linking to the Google
  Photos album + YouTube recording). A past-events timeline sits directly below the
  upcoming event as ongoing social proof. A "recap" is a linked bundle (Google Photos +
  YouTube URL + inline host/sponsor thanks) for v1; a dedicated `/events/<slug>` detail
  route is v2-only.
- **Recurring UI patterns:**
  - _Overline kicker_ — a short, all-caps label above every major section headline.
  - _Role cards with checkmarks_ — the four `/get-involved` role teasers share one shape
    (icon → overline → headline → pitch → three checkmarks), reused verbatim across `/`
    and `/get-involved` so the four paths read as siblings.
  - _Supported-by strip_ — a single-line host/sponsor acknowledgment above the footer on
    `/` and `/events`, and on each past-event card.
  - _Dual end-of-page CTA cards_ — a two-up close on long pages: "stay in the loop"
    (Luma/Slack) + "collaborate with us" (email/`/get-involved`), used on `/` and `/events`.
  - _Direct-email contact card_ — `techtankto@gmail.com` as a prominent, copy-friendly card
    (not just a hyperlink) at the end of `/get-involved`, its role pages, and
    `/resources/media-kit`.
