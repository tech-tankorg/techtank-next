import type { Metadata } from "next";
import Link from "next/link";
import { Check, Users, Palette, Camera, MessageSquare, Calendar, Settings } from "lucide-react";
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
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
              Help run the crew
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground lg:text-6xl text-balance mb-6">
              Volunteer with TechTank
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Join the crew that makes Toronto&apos;s tech community happen
              every month. Multiple roles available — no speaking required.
            </p>
            <Button variant="primary" size="lg" asChild>
              <a href="mailto:techtankto@gmail.com?subject=Volunteer%20Inquiry%20-%20TechTank">
                Sign up to volunteer
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
              className="bg-card rounded-2xl border border-border p-6 lg:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ring/10 text-ring mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Volunteer Roles */}
      <Section background="white">
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
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ring/10 text-ring mb-4">
                <role.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{role.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{role.description}</p>
              <p className="text-xs text-muted-foreground/80 border-t border-border pt-3">
                <strong>Time:</strong> {role.commitment}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* What You Get */}
      <Section background="brand-soft">
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
                className="flex items-center gap-3 bg-card rounded-lg p-4"
              >
                <Check className="h-5 w-5 text-ring shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Get Started */}
      <Section background="brand-soft">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
            Get started
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Ready to join the crew?
          </h2>
          <p className="text-muted-foreground mb-8">
            Sign up to volunteer, or come to an event first to meet the team in
            person.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" size="sm" asChild>
              <a href="mailto:techtankto@gmail.com?subject=Volunteer%20Inquiry%20-%20TechTank">
                Sign up to volunteer
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/events">Meet the team</Link>
            </Button>
          </div>
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
