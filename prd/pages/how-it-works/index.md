# How It Works — `/how-it-works`

**URL:** https://www.techtankto.com/how-it-works
**Page title:** How It Works — TechTank TO
**Role:** Onboarding hub. Primary entry point for anyone who wants to
contribute to TechTank, routing them to the role that fits.

---

## 1. Purpose

Replace the old flat "link-tree" of Host / Speak / Mentor / Donate with
a **single hub** that frames contributing as a decision: which role fits
you right now? From here, each sub-page handles the logistics and
intake.

## 2. Primary audience

- Community members curious about getting involved
- Professionals deciding between speaking, hosting, sponsoring, or
  volunteering

## 3. Key messages

- TechTank runs entirely on contributions from the community.
- There are four ways to plug in. Pick one.
- Each path is explicit about what you provide and what TechTank
  provides in return.

## 4. Shared layout (Next.js)

- Sticky sub-nav: **Overview / Speaker / Host / Sponsor / Volunteer**.
  - On mobile, renders as a segmented control.
- Persistent "Join our Slack" CTA in the header or side rail.
- Shared "Why get involved" strip rendered under the sub-nav on every
  sub-page (karma, community, marketing, skills).
- Consistent intake-form card style reused across all four sub-pages.

## 5. Content sections (on `/how-it-works` itself)

1. **Hero**
   - Headline: "Get Involved".
   - Sub-headline: "TechTank runs on the Toronto tech community. Here's
     how you can be part of it."

2. **The four roles**
   - Four large cards, each linking to its sub-page:
     - **Speak** — share what you know at a meetup.
     - **Host** — provide a venue and food for an event.
     - **Sponsor** — support the community as a corporate partner.
     - **Volunteer** — help run the community behind the scenes.
   - Each card shows: one-line pitch, time commitment, primary CTA.

3. **Why get involved**
   - Three columns reused across sub-pages:
     - **Marketing & Brand** — reach Toronto tech in a non-salesy way.
     - **Recruiting** — meet talent at all levels.
     - **Karma** — the community thrives because people give back.

4. **FAQ**
   - "Do I need to be a senior engineer to speak?" (No.)
   - "Is there a cost to host?" (No — you provide venue + food.)
   - "Can I volunteer without speaking / hosting?" (Yes.)
   - "How fast will you get back to me?" (Target: within one week.)

## 6. Calls to action (priority order)

1. Pick a role (Speak / Host / Sponsor / Volunteer)
2. Join our Slack

## 7. Functional requirements

- Shared layout renders in all `/how-it-works/*` routes.
- Sub-nav highlights the active sub-page.
- Each role card has a stable anchor for deep-linking.

## 8. Acceptance criteria

- Every role in the community has a clearly-labeled path within one
  click of `/how-it-works`.
- A visitor understands the difference between Host and Sponsor without
  having to read both sub-pages.
