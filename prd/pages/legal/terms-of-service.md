# Terms of Service — `/legal/terms-of-service`

**URL:** https://www.techtankto.com/legal/terms-of-service
**Page title:** Terms of Service — TechTank TO
**Role:** Legal terms covering use of the TechTank website and
participation in TechTank-run events and community channels.

---

## 1. Purpose

Set expectations about how the website may be used, how event
participation works, and the limits of TechTank's liability. Replaces
the old standalone `/terms-conditions` page and lives in the shared
`/legal` layout.

## 2. Primary audience

- Website visitors
- Event attendees
- Sponsors / hosts reviewing compliance

## 3. Structure

Standard legal document, rendered in the `/legal` shared layout with a
narrow column, table of contents sidebar, and a last-updated stamp.

## 4. Content sections

1. **Preamble**
   - Effective date, last-updated date.
   - "TechTank TO" defined as the volunteer-run community operating
     `techtankto.com`.

2. **Acceptance of terms**
   - By using the site or attending events, you agree to these terms.

3. **Website use**
   - Permitted use (informational / community purposes).
   - Prohibited use (scraping at harmful volume, re-posting content
     without attribution, impersonation, etc.).

4. **External platforms**
   - Meetup, Luma, Slack, GitHub, YouTube, Instagram are third parties
     with their own terms; attending / joining binds you to theirs as
     well.

5. **Events**
   - Participation at in-person events implies agreement with the
     Code of Conduct (link).
   - Photography and recording disclosure — attendees may appear in
     photos / recordings; opt-out process described.

6. **Intellectual property**
   - TechTank branding is property of TechTank; usage governed by the
     Press Kit terms.
   - User-submitted content (talk proposals, etc.) retained by the
     submitter; granting TechTank a limited license to use for
     promotion of their talk / event.

7. **Disclaimers**
   - Information provided as-is.
   - No guarantees on event availability, venue, or speaker line-up.

8. **Limitation of liability**
   - Standard liability carve-outs subject to Ontario law.

9. **Indemnification**
   - Standard indemnification clause.

10. **Changes to terms**
    - TechTank may update these terms; material changes announced via
      the site and Slack.

11. **Governing law**
    - Laws of the Province of Ontario, Canada.

12. **Contact**
    - `techtankto@gmail.com`.

## 5. Functional requirements

- Shared `/legal` layout with table of contents.
- Last-updated timestamp rendered from source metadata.
- Every internal reference (Code of Conduct, Privacy Policy) is
  hyperlinked.
- Page is readable and keyboard-navigable with no layout shift.

## 6. Acceptance criteria

- The document compiles the current donation-era terms (where still
  applicable) into a broader site-wide ToS.
- Reviewed by a volunteer organizer with legal familiarity before
  publication.
- No placeholder copy ships to production.
