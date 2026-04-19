import type { Metadata } from "next";
import Link from "next/link";
import { Check, Users, Palette, Camera, MessageSquare, Calendar, Settings, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { ContactCard } from "@/components/ui/contact-card";

export const metadata: Metadata = {
  title: "Volunteer with TechTank",
  description:
    "Join the crew that makes TechTank happen. Multiple roles available — no speaking required.",
};

const whyVolunteer = [
  {
    icon: Users,
    title: "Community",
    description:
      "Meet people who care about the same things you do. Build genuine friendships in Toronto tech.",
  },
  {
    icon: Palette,
    title: "Skills & portfolio",
    description:
      "Organize real events. Create real designs. Build portfolio-quality work while giving back.",
  },
  {
    icon: Calendar,
    title: "Karma",
    description:
      "The community runs on people showing up. Your time makes Toronto tech better for everyone.",
  },
];

const volunteerRoles = [
  {
    icon: Users,
    title: "Event-day crew",
    description: "Check-in, setup, teardown, greeting attendees",
    commitment: "3-4 hours on event night, once a month or less",
  },
  {
    icon: Camera,
    title: "Photography & video",
    description: "Capture events for social media and YouTube",
    commitment: "Event night + light editing after",
  },
  {
    icon: MessageSquare,
    title: "Social media",
    description: "Draft posts, repost speaker slides, manage Instagram",
    commitment: "1-3 hours/week, flexible",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Event graphics, social assets, slide templates",
    commitment: "Project-based, 2-5 hours/project",
  },
  {
    icon: MessageSquare,
    title: "Community moderation",
    description: "Keep Slack welcoming and on-topic",
    commitment: "A few minutes daily, flexible",
  },
  {
    icon: Settings,
    title: "Organizing",
    description: "Help plan events, outreach, speaker sourcing",
    commitment: "Variable; onboarding conversation first",
  },
  {
    icon: Code,
    title: "Code & open source",
    description: "Contribute to our website, tools, and open source projects on GitHub",
    commitment: "Project-based, flexible async work",
  },
];

const whatYouGet = [
  "A front-row seat in Toronto's tech community",
  "Shout-outs in credits where it makes sense",
  "Portfolio-quality work (especially for photographers/designers)",
  "Letters of recommendation for dedicated volunteers",
  "Networking with speakers, hosts, and sponsors",
  "The gratitude of an entire tech community",
];

export default function VolunteerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
              Help run the crew
            </span>
            <h1 className="font-display text-4xl font-semibold text-foreground lg:text-5xl text-balance mb-6">
              Volunteer with TechTank
            </h1>
            <p className="text-xl text-muted leading-relaxed mb-8">
              Join the crew that makes Toronto&apos;s tech community happen
              every month. Multiple roles available — no speaking required.
            </p>
            <Button variant="primary" size="lg" asChild>
              <a
                href="https://forms.gle/volunteer-intake"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign up to volunteer
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <Section>
        <SectionHeader
          overline="Why volunteer"
          title="What you get out of it"
          className="mb-12"
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {whyVolunteer.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-border p-6 lg:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Volunteer Roles */}
      <Section className="bg-white border-y border-border">
        <SectionHeader
          overline="Volunteer roles"
          title="Ways to help"
          description="Pick the role that fits your skills and schedule. You can always change later."
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {volunteerRoles.map((role) => (
            <div
              key={role.title}
              className="bg-background rounded-xl border border-border p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal mb-4">
                <role.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{role.title}</h3>
              <p className="text-sm text-muted mb-3">{role.description}</p>
              <p className="text-xs text-muted/80 border-t border-border pt-3">
                <strong>Time:</strong> {role.commitment}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* What You Get */}
      <Section className="gradient-brand-soft">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            overline="What you get"
            title="Volunteer perks"
            align="center"
            className="mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {whatYouGet.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-lg p-4"
              >
                <Check className="h-5 w-5 text-teal shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Code Contributors */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
            Developers welcome
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Contribute on GitHub
          </h2>
          <p className="text-muted mb-6">
            We build in the open. Help us improve the TechTank website, create
            tools for the community, or start your own open source project with us.
          </p>
          <Button variant="primary" asChild>
            <a
              href="https://github.com/tech-tankorg"
              target="_blank"
              rel="noopener noreferrer"
            >
              View our GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </Section>

      {/* Not Ready? */}
      <Section className="bg-white border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
            Not ready to commit?
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Come to an event first
          </h2>
          <p className="text-muted mb-6">
            No pressure. Attend an event, meet the crew, and see what TechTank
            is about. We&apos;d love to meet you either way.
          </p>
          <Button variant="outline" asChild>
            <Link href="/events">See upcoming events</Link>
          </Button>
        </div>
      </Section>

      {/* Intake Form CTA */}
      <Section className="gradient-brand-soft">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
            Ready to join?
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Sign up to volunteer
          </h2>
          <p className="text-muted mb-8">
            Tell us about yourself and which roles interest you. We&apos;ll be
            in touch within a week.
          </p>
          <Button variant="primary" size="lg" asChild>
            <a
              href="https://forms.gle/volunteer-intake"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up to volunteer
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </Section>

      {/* Contact */}
      <Section>
        <div className="max-w-xl mx-auto">
          <ContactCard context="Questions about volunteering? We're here to help." />
        </div>
      </Section>
    </>
  );
}
