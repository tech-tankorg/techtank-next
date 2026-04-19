import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for TechTank TO website and community events.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white rounded-2xl border border-border p-6 lg:p-10">
      {/* Header */}
      <div className="mb-8 pb-8 border-b border-border">
        <p className="text-sm text-muted mb-2">Last updated: April 18, 2026</p>
        <h1 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">
          Terms of Service
        </h1>
      </div>

      {/* Content */}
      <div className="space-y-8 text-foreground leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-muted">
            By accessing and using the TechTank TO website (techtankto.com) or
            attending TechTank events, you agree to be bound by these Terms of
            Service. &quot;TechTank TO&quot; refers to the volunteer-run community
            operating the website and organizing events.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            2. Website Use
          </h2>
          <p className="text-muted mb-4">
            The TechTank TO website is provided for informational and community
            purposes. You may use the site to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted">
            <li>Learn about TechTank events and programs</li>
            <li>Submit intake forms to speak, host, sponsor, or volunteer</li>
            <li>Access community resources and event information</li>
            <li>Download brand assets from the Press Kit</li>
          </ul>
          <p className="text-muted mt-4">
            You may not use the site for harmful purposes, including scraping at
            harmful volume, re-posting content without attribution, or
            impersonation.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            3. External Platforms
          </h2>
          <p className="text-muted">
            TechTank uses third-party platforms for event registration
            (Meetup, Luma), community discussion (Slack), and content hosting
            (YouTube, GitHub). Use of these platforms is subject to their
            respective terms of service. TechTank is not responsible for the
            policies or practices of these third parties.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            4. Events
          </h2>
          <p className="text-muted mb-4">
            Participation at TechTank in-person events implies agreement with
            our{" "}
            <Link
              href="/legal/code-of-conduct"
              className="text-teal hover:underline"
            >
              Code of Conduct
            </Link>
            . All attendees, speakers, hosts, sponsors, and volunteers are
            expected to follow these guidelines.
          </p>
          <p className="text-muted">
            <strong>Photography and Recording:</strong> TechTank events may be
            photographed and recorded. Attendees may appear in photos or
            recordings that are published on TechTank channels. If you prefer
            not to be photographed, please inform an organizer at the event.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            5. Intellectual Property
          </h2>
          <p className="text-muted mb-4">
            TechTank branding, logos, and website content are property of
            TechTank TO. Usage is governed by the{" "}
            <Link href="/press-kit" className="text-teal hover:underline">
              Press Kit terms
            </Link>
            .
          </p>
          <p className="text-muted">
            User-submitted content (talk proposals, intake form submissions)
            remains the property of the submitter. By submitting content, you
            grant TechTank a limited license to use it for promotion of your
            talk or event participation.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            6. Disclaimers
          </h2>
          <p className="text-muted">
            Information on this website is provided &quot;as is&quot; without warranty.
            TechTank makes no guarantees regarding event availability, venue,
            speaker lineup, or timing. Events may be cancelled, postponed, or
            modified at any time.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            7. Limitation of Liability
          </h2>
          <p className="text-muted">
            TechTank TO and its organizers shall not be liable for any direct,
            indirect, incidental, special, or consequential damages arising
            from your use of this website or participation in TechTank events,
            to the fullest extent permitted by the laws of Ontario, Canada.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            8. Indemnification
          </h2>
          <p className="text-muted">
            You agree to indemnify and hold harmless TechTank TO and its
            organizers from any claims, damages, or expenses arising from your
            use of the website or participation in events, or your violation
            of these terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            9. Changes to Terms
          </h2>
          <p className="text-muted">
            TechTank may update these Terms of Service at any time. Material
            changes will be announced via the website and Slack community. Your
            continued use of the website after changes constitutes acceptance of
            the new terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            10. Governing Law
          </h2>
          <p className="text-muted">
            These Terms of Service are governed by and construed in accordance
            with the laws of the Province of Ontario, Canada.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            11. Contact
          </h2>
          <p className="text-muted">
            For questions about these Terms of Service, please contact us at{" "}
            <a
              href="mailto:techtankto@gmail.com"
              className="text-teal hover:underline"
            >
              techtankto@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
