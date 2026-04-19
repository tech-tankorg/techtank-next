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
- Consistent intake CTA card style (email us) reused across all four sub-pages.

## 5. Content sections (on `/how-it-works` itself)

1. **Hero**
   - Overline kicker: `GET INVOLVED`.
   - Headline: "Let's build TechTank together."
   - Sub-headline: "TechTank runs on the Toronto tech community —
     speakers, hosts, sponsors, and volunteers who show up every
     month. Pick the role that fits you right now."

2. **Ways to get involved (four role cards)**
   - Overline kicker: `WAYS TO GET INVOLVED`.
   - Four equal-weight cards rendered with the shared role-card
     component (see PRD §5.7). Each card follows the same shape:
     - Icon
     - Overline (role kicker — e.g. `SHARE WHAT YOU KNOW`)
     - Headline (e.g. "Speak at an event")
     - One-paragraph pitch
     - Three checkmark bullets of what you get / what's required
     - Primary CTA linking into the sub-page
   - Card content:
     - **Speak** → `/how-it-works/speaker`
       - Overline: `SHARE WHAT YOU KNOW`
       - Checkmarks: 30–45 min talk + Q&A · Any tech topic · Recorded
         and published to YouTube
     - **Host** → `/how-it-works/host`
       - Overline: `BRING US TO YOUR SPACE`
       - Checkmarks: 40–100 attendees · 6:00–8:30pm weeknight · Logo
         on event marketing
     - **Sponsor** → `/how-it-works/sponsor`
       - Overline: `SUPPORT THE COMMUNITY`
       - Checkmarks: Logo on website and marketing · Speaker slot
         options · Tasteful brand visibility
     - **Volunteer** → `/how-it-works/volunteer`
       - Overline: `HELP RUN THE CREW`
       - Checkmarks: Event-day or ongoing · No speaking required ·
         Portfolio-quality work for creatives

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

5. **Contact strip (end of page)**
   - Overline kicker: `READY TO CONNECT?`
   - Headline: "Drop us a line."
   - Copy: "We respond to every message — hosts, sponsors, speakers,
     and volunteers. Whichever role fits, we'd love to hear from you."
   - Direct-email contact card: `techtankto@gmail.com` with a one-line
     caption ("For hosting, sponsorship, speaking, and community
     inquiries.").

## 6. Calls to action (priority order)

1. Pick a role (Speak / Host / Sponsor / Volunteer)
2. Email `techtankto@gmail.com`
3. Join our Slack

## 7. Functional requirements

- Shared layout renders in all `/how-it-works/*` routes.
- Sub-nav highlights the active sub-page.
- Each role card has a stable anchor for deep-linking.
- The role-card component is shared with the home page (see
  `pages/home.md` section 5) so the four paths stay visually and
  structurally identical.
- The direct-email contact card offers copy-to-clipboard as well as a
  `mailto:` link.

## 8. Acceptance criteria

- Every role in the community has a clearly-labeled path within one
  click of `/how-it-works`.
- A visitor understands the difference between Host and Sponsor without
  having to read both sub-pages.
- All four role cards are reachable without horizontal scroll on
  mobile and render identically (same height, same bullet count).
- The contact email is visible and interactive without scrolling past
  the footer.
