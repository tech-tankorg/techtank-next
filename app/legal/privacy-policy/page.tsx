import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for TechTank TO — what data we collect and how we use it.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white rounded-2xl border border-border p-6 lg:p-10">
      {/* Header */}
      <div className="mb-8 pb-8 border-b border-border">
        <p className="text-sm text-muted-foreground mb-2">Last updated: April 18, 2026</p>
        <h1 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">
          Privacy Policy
        </h1>
      </div>

      {/* Content */}
      <div className="space-y-8 text-foreground leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            1. Overview
          </h2>
          <p className="text-muted-foreground">
            This Privacy Policy explains what personal information TechTank TO
            collects, how it&apos;s used, and who it&apos;s shared with. This policy
            applies to techtankto.com and TechTank-operated community channels.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            2. Data We Collect Directly
          </h2>
          <p className="text-muted-foreground mb-4">
            TechTank collects minimal personal information directly:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Intake form submissions</strong> (via Google Forms): name,
              email, optional profile links, and role-specific information (talk
              abstract, company, venue details, etc.)
            </li>
            <li>
              <strong>Contact emails</strong> you send to techtankto@gmail.com
            </li>
            <li>
              <strong>Basic analytics</strong> (see Analytics section below)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            3. Data We Don&apos;t Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>No user accounts or passwords on this website</li>
            <li>No payment or financial data</li>
            <li>No tracking cookies beyond essential analytics</li>
            <li>No cross-site tracking</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            4. Third-Party Platforms
          </h2>
          <p className="text-muted-foreground mb-4">
            TechTank uses third-party platforms that have their own privacy
            policies:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Luma:</strong> Event RSVPs and attendee lists
            </li>
            <li>
              <strong>Google Forms:</strong> Intake submissions (speaker, host,
              sponsor, volunteer)
            </li>
            <li>
              <strong>Slack:</strong> Community messages and discussions
            </li>
            <li>
              <strong>YouTube, Instagram, LinkedIn, GitHub:</strong> Embedded
              content and community channels
            </li>
          </ul>
          <p className="text-muted-foreground mt-4">
            Each platform has its own privacy policy. Please review them for
            details on how they handle your data.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            5. Analytics
          </h2>
          <p className="text-muted-foreground">
            TechTank uses privacy-respecting analytics to understand how
            visitors use the website. We collect aggregate data only (page
            views, referrers, general geographic region). We do not track
            individual users across sites or collect personal identifiers
            through analytics.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            6. How We Use Your Data
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Respond to intake form submissions and inquiries</li>
            <li>Coordinate events with speakers, hosts, and sponsors</li>
            <li>Send event-related follow-ups when relevant</li>
            <li>Improve the website and community programs</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            7. Data Sharing
          </h2>
          <p className="text-muted-foreground mb-4">
            TechTank does not sell personal data. Limited sharing may occur:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Host companies:</strong> Event host companies may request
              attendee lists for their hosted events
            </li>
            <li>
              <strong>Speaker/sponsor coordination:</strong> Your contact
              information may be shared with event partners to coordinate
              logistics
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            8. Data Retention
          </h2>
          <p className="text-muted-foreground">
            Intake form submissions are retained while the conversation is
            active and for a reasonable archival period. Analytics data is
            aggregated and retained per our analytics provider&apos;s policy. You
            may request deletion of your data at any time.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            9. Your Rights
          </h2>
          <p className="text-muted-foreground mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Request access to your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            To exercise these rights, email{" "}
            <a
              href="mailto:techtankto@gmail.com"
              className="text-teal hover:underline"
            >
              techtankto@gmail.com
            </a>
            . These rights are available under PIPEDA (Canada) and, where
            applicable, GDPR.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            10. Cookies
          </h2>
          <p className="text-muted-foreground">
            This website uses minimal cookies for essential functionality and
            analytics. No advertising or cross-site tracking cookies are used.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            11. Changes to This Policy
          </h2>
          <p className="text-muted-foreground">
            TechTank may update this Privacy Policy from time to time. Material
            changes will be announced via the website. The &quot;Last updated&quot; date
            at the top indicates when the policy was last revised.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            12. Contact
          </h2>
          <p className="text-muted-foreground">
            For privacy-related questions or to exercise your data rights,
            contact us at{" "}
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
