import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { ContactCard } from "@/components/ui/contact-card";

export const metadata: Metadata = {
  title: "Join the Organizer Team",
  description:
    "Help shape what TechTank becomes. We're building a structured volunteer leadership team with defined roles and a 6-month commitment.",
};

const whyOrganize = [
  {
    icon: Star,
    title: "Shape the direction",
    description:
      "Organizers make the calls that determine what TechTank becomes — what we build, who we serve, and how we grow.",
  },
  {
    icon: Users,
    title: "Build with a team",
    description:
      "Work alongside a small, committed group of people who care about Toronto's tech community as much as you do.",
  },
  {
    icon: Clock,
    title: "Real responsibility",
    description:
      "This isn't a casual role. You'll own something meaningful — a function, a relationship, or a program — for 6 months.",
  },
];

const whatYouGet = [
  "Defined role with real ownership",
  "Direct input on TechTank's strategy and programming",
  "Access to our speaker, host, and sponsor network",
  "Organizer credits on the website and at events",
  "Letters of recommendation for dedicated organizers",
  "Networking with Toronto tech leaders",
];

export default function OrganizerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
              Shape what TechTank becomes
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground lg:text-6xl text-balance mb-6">
              Join the Organizer Team
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We&apos;re building out a more structured volunteer leadership
              team with defined roles and a 6-month commitment. If you want to
              help shape what TechTank becomes, this is the path.
            </p>
            <Button variant="primary" size="lg" asChild>
              <a href="mailto:techtankto@gmail.com?subject=Organizer%20Team%20Inquiry%20-%20TechTank">
                Get in touch
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Organize */}
      <Section>
        <SectionHeader
          overline="Why organize"
          title="What this role is about"
          className="mb-12"
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {whyOrganize.map((item) => (
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

      {/* What You Get */}
      <Section background="brand-soft">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            overline="What you get"
            title="Organizer perks"
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
      <Section>
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
            Get started
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Ready to get involved?
          </h2>
          <p className="text-muted-foreground mb-8">
            Send us a note introducing yourself. Tell us what you&apos;d want
            to own and why TechTank matters to you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" size="sm" asChild>
              <a href="mailto:techtankto@gmail.com?subject=Organizer%20Team%20Inquiry%20-%20TechTank">
                Get in touch
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/events">Attend an event first</Link>
            </Button>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <ContactCard context="Interested in joining the organizer team? Tell us about yourself." />
        </div>
      </Section>
    </>
  );
}
