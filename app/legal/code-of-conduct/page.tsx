import type { Metadata } from "next";
import { AlertTriangle, Mail, ThumbsUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description:
    "TechTank TO Code of Conduct — our commitment to a safe, inclusive community.",
};

export default function CodeOfConductPage() {
  return (
    <div className="bg-white rounded-2xl border border-border p-6 lg:p-10">
      {/* Header */}
      <div className="mb-8 pb-8 border-b border-border">
        <p className="text-sm text-muted-foreground mb-2">Last updated: April 18, 2026</p>
        <h1 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">
          Code of Conduct
        </h1>
      </div>

      {/* Quick Report */}
      <div className="bg-teal/5 border border-teal/20 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <Mail className="h-6 w-6 text-teal shrink-0 mt-0.5" />
          <div>
            <h2 className="font-semibold text-foreground mb-1">
              Need to report something?
            </h2>
            <p className="text-muted-foreground text-sm mb-2">
              At events: speak to any TechTank organizer. Any time: email us.
            </p>
            <a
              href="mailto:techtankto@gmail.com"
              className="text-teal font-medium hover:underline"
            >
              techtankto@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-8 text-foreground leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            Our Commitment
          </h2>
          <p className="text-muted-foreground">
            TechTank TO is dedicated to providing a harassment-free experience
            for everyone, regardless of gender, gender identity and expression,
            sexual orientation, disability, physical appearance, body size,
            race, age, religion, nationality, or technical experience level.
            This Code of Conduct applies to all TechTank spaces — online and
            in-person — and to anyone representing TechTank.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <ThumbsUp className="h-5 w-5 text-teal shrink-0" />
            Expected Behavior
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Be respectful and considerate.</strong> Treat others as
              you would like to be treated.
            </li>
            <li>
              <strong>Assume good intent.</strong> When conflicts arise,
              de-escalate when possible.
            </li>
            <li>
              <strong>Use inclusive language.</strong> Be mindful of the words
              you choose.
            </li>
            <li>
              <strong>Respect privacy.</strong> Do not share photos or quotes of
              others without their consent.
            </li>
            <li>
              <strong>Give credit and attribution.</strong>{' '}Acknowledge others&apos;
              contributions.
            </li>
            <li>
              <strong>Be welcoming to newcomers.</strong> Help people feel
              included.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber" />
            Unacceptable Behavior
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Harassment</strong> in any form — verbal, physical,
              visual, or digital
            </li>
            <li>
              <strong>Discrimination</strong> based on race, gender identity,
              sexual orientation, disability, age, religion, nationality, or
              any other protected attribute
            </li>
            <li>
              <strong>Intimidation, stalking, or following</strong>
            </li>
            <li>
              <strong>Unwelcome sexual attention or advances</strong>
            </li>
            <li>
              <strong>Disruption</strong> of talks, events, or online discussions
            </li>
            <li>
              <strong>Retaliation</strong> against someone who reports a
              violation
            </li>
            <li>
              <strong>Sustained trolling</strong> or deliberate intimidation
            </li>
            <li>
              <strong>Publishing others&apos; private information</strong> without
              permission
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            Scope
          </h2>
          <p className="text-muted-foreground">
            This Code of Conduct applies at TechTank events, in our Slack
            community, on associated social media channels, and anywhere else
            TechTank operates. It applies equally to attendees, speakers, hosts,
            sponsors, volunteers, and organizers. No one is exempt.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            Reporting
          </h2>
          <p className="text-muted-foreground mb-4">
            If you experience or witness unacceptable behavior, please report
            it:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>At events:</strong> Speak to any TechTank organizer
              on-site. They will be identified at the start of each event.
            </li>
            <li>
              <strong>Any time:</strong> Email{" "}
              <a
                href="mailto:techtankto@gmail.com"
                className="text-teal hover:underline"
              >
                techtankto@gmail.com
              </a>
            </li>
          </ul>
          <p className="text-muted-foreground mt-4">
            All reports are handled confidentially. We will respond as quickly
            as reasonably possible. You will not be retaliated against for
            making a report in good faith.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            Response and Consequences
          </h2>
          <p className="text-muted-foreground mb-4">
            TechTank organizers will investigate all reports and determine an
            appropriate response. Possible responses include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>A private conversation with the individual</li>
            <li>A formal warning</li>
            <li>Removal from an event</li>
            <li>Removal from community channels (Slack, etc.)</li>
            <li>Permanent ban from TechTank spaces</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            Consequences are proportional to the behavior and its impact on the
            community. We err on the side of protecting those who report issues.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            Acknowledgments
          </h2>
          <p className="text-muted-foreground">
            This Code of Conduct draws on widely-used community codes including
            the{" "}
            <a
              href="https://www.contributor-covenant.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              Contributor Covenant
            </a>{" "}
            and the{" "}
            <a
              href="https://berlincodeofconduct.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              Berlin Code of Conduct
            </a>
            . We are grateful to these communities for their work.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            Contact
          </h2>
          <p className="text-muted-foreground">
            For questions about this Code of Conduct or to report an issue,
            email{" "}
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
