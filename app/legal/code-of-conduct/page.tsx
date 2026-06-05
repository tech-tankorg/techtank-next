import type { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description:
    "TechTank TO Code of Conduct — our commitment to a safe, inclusive community.",
};

export default function CodeOfConductPage() {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 lg:p-10">
      {/* Header */}
      <div className="mb-8 pb-8 border-b border-border">
        <p className="text-sm text-muted-foreground mb-2">Last updated: June 5, 2026</p>
        <h1 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">
          Code of Conduct
        </h1>
      </div>

      {/* Quick Report */}
      <div className="bg-ring/5 border border-ring/20 rounded-xl p-6 mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Mail className="h-6 w-6 text-ring shrink-0 sm:mt-0.5" />
          <div>
            <h2 className="font-semibold text-foreground mb-1">
              Need to report something?
            </h2>
            <p className="text-muted-foreground text-sm mb-2">
              At events: speak to any TechTank organizer. Any time: email us.
            </p>
            <a
              href="mailto:techtankto@gmail.com"
              className="text-ring font-medium hover:underline"
            >
              techtankto@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-10 text-foreground leading-relaxed">

        {/* Scope */}
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">Scope</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This code of conduct applies to everyone in the TechTank community: attendees,
              volunteers, speakers, sponsors, organizers, and board members in all TechTank
              spaces. This includes our Slack workspace, in-person and virtual events, social
              gatherings, direct messages, and any other community channel.
            </p>
            <p>
              TechTank is committed to providing a safe, inclusive, and welcoming experience
              for everyone, regardless of age, race, ethnicity, gender identity or expression,
              sexual orientation, disability, physical appearance, religion, nationality, or
              level of experience. These standards are not optional.
            </p>
          </div>
        </section>

        {/* Our Commitment to a Safe Space */}
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            Our Commitment to a Safe Space
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              TechTank is committed to being a safe and affirming space for 2SLGBTQ+ people.
              We use and respect people&apos;s correct pronouns and chosen names. If you aren&apos;t
              sure what pronouns someone uses, ask. If you make a mistake, apologize, correct
              yourself, and move on.
            </p>
            <p>
              We acknowledge that racism, sexism, homophobia, transphobia, ableism, and other
              forms of discrimination are real and present. TechTank is not a neutral space.
              We actively work to create an environment where marginalized people feel safe,
              and belonging is not something anyone has to earn.
            </p>
          </div>
        </section>

        {/* A. Members and Attendees */}
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            A. Members and Attendees
          </h2>
          <p className="text-muted-foreground mb-6">
            Everyone who attends a TechTank event, joins our Slack, or participates in any
            community space agrees to the following.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Expected behaviour</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Be friendly, patient, and kind</li>
                <li>Be welcoming to people of all backgrounds and identities</li>
                <li>
                  Take responsibility for your impact — if someone tells you they&apos;ve been
                  harmed by your words or actions, listen, apologize, and correct the behaviour
                </li>
                <li>Respect physical and digital boundaries</li>
                <li>Ask before recording or photographing anyone</li>
                <li>Respect delays in responses</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Unacceptable behaviour</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Harassment and Discrimination</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      Hate speech or discriminatory language of any kind, including racist, sexist,
                      homophobic, transphobic, or ableist remarks
                    </li>
                    <li>Unwelcome sexual attention, advances, or comments</li>
                    <li>
                      Harassment in any form — verbal, written, physical, or visual — including
                      offensive jokes, derogatory comments, or persistent unwelcome communication
                    </li>
                    <li>Deliberate misgendering or deadnaming</li>
                    <li>Bullying, intimidation, or behaviour intended to belittle or demean others</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Respect and Boundaries</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      Don&apos;t talk over people or shut down questions — everyone is at a different
                      stage and that&apos;s the point
                    </li>
                    <li>
                      Don&apos;t solicit referrals from people you haven&apos;t built a real relationship with
                    </li>
                    <li>Don&apos;t share private information about other members without their consent</li>
                    <li>
                      Don&apos;t record, photograph, or share content featuring others without their
                      explicit permission
                    </li>
                    <li>No spamming, unsolicited self-promotion, or solicitation without organizer approval</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Referral Policy</h3>
              <p className="text-muted-foreground">
                Referrals carry real professional weight for the person giving them. Members
                should not request referrals from someone they have not built a genuine
                relationship with. A single interaction is not enough. Be thoughtful about
                what you&apos;re asking someone to put their reputation behind.
              </p>
            </div>
          </div>
        </section>

        {/* B. Organizers and Volunteers */}
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            B. Organizers and Volunteers
          </h2>
          <p className="text-muted-foreground mb-6">
            Organizers and volunteers are held to the same standards as all community members,
            and carry additional responsibilities as representatives of TechTank.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Additional Expectations</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Model the behaviour and values in this code of conduct at all times</li>
                <li>
                  Create a welcoming environment at every event — greet newcomers, make
                  introductions, and make sure no one is left on the sidelines
                </li>
                <li>
                  If you witness a potential code of conduct violation, report it to the board
                  promptly
                </li>
                <li>Handle attendee information and internal communications with confidentiality</li>
                <li>
                  Disclose any conflicts of interest that could affect your ability to act
                  impartially
                </li>
                <li>
                  Don&apos;t use your organizer role to give yourself or your business unfair
                  advantages, like access to member data or using TechTank&apos;s platforms to
                  solicit clients or customers
                </li>
                <li>
                  If you disagree with a board decision, bring it to the team directly rather
                  than publicly
                </li>
                <li>
                  Do not make commitments on behalf of TechTank — financial, partnership, or
                  otherwise — without board approval
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">
                If an Organizer or Volunteer Violates This Code
              </h3>
              <p className="text-muted-foreground">
                Reports involving an organizer or volunteer should be sent to the board at{" "}
                <a href="mailto:techtankto@gmail.com" className="text-ring hover:underline">
                  techtankto@gmail.com
                </a>
                . The implicated person will be recused from any discussion or decision
                related to the report. Depending on the severity, consequences may include
                removal from their role, temporary suspension, or permanent removal from the
                community.
              </p>
            </div>
          </div>
        </section>

        {/* C. Sponsors and Hosts */}
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            C. Sponsors and Hosts
          </h2>
          <p className="text-muted-foreground mb-6">
            TechTank welcomes sponsors and venue hosts as partners in building community. By
            sponsoring or hosting a TechTank event, you agree to the following.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Expected behaviour</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Treat all TechTank community members with respect and dignity</li>
                <li>
                  Abide by TechTank&apos;s code of conduct in all interactions with attendees,
                  organizers, and volunteers
                </li>
                <li>
                  Use TechTank&apos;s name, logo, and branding only as agreed upon and within brand
                  guidelines
                </li>
                <li>
                  Coordinate all event communications, announcements, and promotional content
                  with the TechTank team before publishing
                </li>
                <li>
                  All TechTank events must be listed and managed through TechTank&apos;s official
                  Luma or Meetup page. TechTank manages RSVPs and check-in for all events to
                  ensure attendee safety and a consistent experience. Sponsors and hosts are
                  welcome to promote and advertise the event through their own channels, but
                  may not host a separate registration page or manage RSVPs independently.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">
                What Sponsors and Hosts Should Not Do
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Recruiting and hiring outreach is welcome with prior agreement from TechTank
                  organizers. Collecting attendee contact information or pitching attendees
                  without their explicit consent is not permitted.
                </li>
                <li>
                  Use TechTank events as a primary sales or recruitment channel — attendees are
                  community members, not leads
                </li>
                <li>
                  Make public statements on behalf of TechTank or imply endorsement beyond the
                  agreed partnership
                </li>
                <li>
                  Engage in discriminatory hiring practices or hold values that conflict with
                  TechTank&apos;s commitment to inclusion
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Attendee Data</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TechTank does not share attendee contact information or registration data
                  with sponsors for marketing or recruitment purposes. Attendees can opt in to
                  sponsor communications when registering through Luma, and opt-in methods at
                  events are welcome, like a QR code linking to a giveaway or sign-up form.
                </p>
                <p>
                  For venue partners, we are happy to provide attendee information where
                  required for legal, safety, or operational purposes, such as building access,
                  capacity management, or emergency protocols.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Sponsor Violations</h3>
              <p className="text-muted-foreground">
                TechTank reserves the right to end a sponsorship or hosting relationship at
                any time if a sponsor or host violates this code of conduct, acts in a way
                that conflicts with TechTank&apos;s values, or creates an unsafe environment for
                community members. This applies during and outside of events.
              </p>
            </div>
          </div>
        </section>

        {/* Report a Concern */}
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            Report a Concern
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">General Reports</h3>
              <p className="text-muted-foreground mb-3">
                If you experience or witness behaviour that violates this code of conduct,
                please reach out at:
              </p>
              <p className="text-muted-foreground mb-3">
                <a href="mailto:techtankto@gmail.com" className="text-ring hover:underline">
                  techtankto@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                You can also report directly to any organizer or board member you feel
                comfortable approaching. All reports are handled confidentially. We will not
                share your identity without your consent.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">
                Reports Involving an Organizer or Board Member
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If your report involves an organizer or board member, please contact the
                  board directly at{" "}
                  <a href="mailto:techtankto@gmail.com" className="text-ring hover:underline">
                    techtankto@gmail.com
                  </a>
                  . The implicated person will be recused from any discussion or decision
                  related to the report. The remaining board members will handle the matter.
                </p>
                <p>
                  We recognize this process is imperfect for a small team. As TechTank grows,
                  we are committed to building more independent reporting infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enforcement */}
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            Enforcement
          </h2>
          <p className="text-muted-foreground mb-6">
            TechTank reserves the right to take corrective action in response to any behaviour
            deemed inappropriate, threatening, offensive, or harmful. This applies to all
            community members, including organizers and board members.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">1. Notice of Correction</h3>
              <p className="text-muted-foreground">
                You will be contacted directly regarding the behaviour in question and asked
                to correct it. This may happen via Slack, email, or in person depending on
                the situation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">2. Temporary Ban</h3>
              <p className="text-muted-foreground">
                A temporary ban from TechTank community spaces for up to two weeks. This
                includes all in-person and virtual events, Slack, and direct messages.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">3. Permanent Ban</h3>
              <p className="text-muted-foreground">
                Permanent removal from all TechTank spaces and events. Reserved for severe
                violations or repeated behaviour after prior enforcement.
              </p>
            </div>

            <p className="text-muted-foreground text-sm">
              Note: some behaviours may warrant skipping directly to a temporary or permanent
              ban without a prior notice of correction, at the board&apos;s discretion.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
