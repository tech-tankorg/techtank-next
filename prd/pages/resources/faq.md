# FAQ — `/resources/faq`

## Purpose

A single-page reference for the most common questions about TechTank TO.
Reduces repetitive intake emails and gives new visitors quick answers
about membership, events, sponsorship, volunteering, and policies.

## Primary audience

- Curious newcomers deciding whether to attend
- Companies evaluating sponsorship or hosting
- Potential volunteers and organizers
- Anyone wondering about policies (RSVP, photos, conduct)

## Key messages

- TechTank is free to join and most events are free or low cost.
- TechTank is a registered nonprofit — all funds go back into programming.
- There are multiple ways to get involved: attend, volunteer, host, or sponsor.
- Concerns and conduct reports are handled confidentially.

## Content sections

### Hero

- Overline: `FAQ`
- Headline: **Frequently asked questions**
- Subtext: short intro pointing to email for unanswered questions

### FAQ groups (accordion per group)

| Group                 | Questions                                                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| General               | Is TechTank free? / Where are you based? / Who are these events for? / How do I find out about events? / Do I need to be a member to attend? |
| Sponsorship & Hosting | Can my company sponsor or host? / Where does donation and sponsorship money go? / What does sponsoring include? / Is TechTank a nonprofit?   |
| Getting Involved      | I have an idea for an event — can I bring it? / Can I volunteer?                                                                             |
| Events & Policies     | RSVP and cancellation policy / Photos and video at events / What to do if something made me uncomfortable                                    |

### Closing CTA

- Overline: `Still have questions?`
- Headline: **We're happy to help**
- CTA: `techtankto@gmail.com` mailto link

## CTAs

- **Dominant:** Email `techtankto@gmail.com`
- **Secondary:** Internal links to `/get-involved/sponsor`, `/get-involved/volunteer`, `/legal/code-of-conduct`

## Functional requirements

- Accordion UI — one question open at a time per group; all collapsed on load.
- Inline links in answers point to relevant internal pages (no new tabs for internal links).
- No form capture — all intake is via existing email and intake pages.

## Acceptance criteria

- [ ] All 15 questions and answers from the content brief are present.
- [ ] Grouped into four categories matching the table above.
- [ ] Accordion works — each item expands/collapses independently.
- [ ] Links in answers resolve correctly (sponsor, volunteer, code-of-conduct, mailto).
- [ ] Page metadata (`<title>`, `<meta description>`) is set.
- [ ] Linked from footer resources column.
- [ ] Route added to PRD route map.
