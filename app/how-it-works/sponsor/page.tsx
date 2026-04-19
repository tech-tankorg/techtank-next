import type { Metadata } from "next";
import Link from "next/link";
import { Check, Heart, Users, Megaphone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { ContactCard } from "@/components/ui/contact-card";

export const metadata: Metadata = {
  title: "Sponsor TechTank",
  description:
    "Support Toronto's most inclusive tech community. Tasteful brand visibility, recruiting pipeline, and community karma.",
};

const whySponsor = [
  {
    icon: Megaphone,
    title: "Brand alignment",
    description:
      "Align with Toronto's most inclusive tech community. Your brand is seen by developers, designers, and tech leaders who value authenticity.",
  },
  {
    icon: Users,
    title: "Recruiting pipeline",
    description:
      "Sustained exposure to Toronto tech talent across all levels. Build relationships and recognition before you need to hire.",
  },
  {
    icon: Heart,
    title: "Community impact",
    description:
      "Your support keeps events accessible and free. Help the next generation of Toronto tech talent thrive.",
  },
];

const whatSponsorshipSupports = [
  "Monthly event operations when no host venue is available",
  "Speaker travel and honoraria where applicable",
  "Community programs: Guppy Talks, Study Tank, Code Diversity",
  "Equipment, recording, and production costs",
  "Slack community and online resources",
];

const sponsorTiers = [
  {
    name: "Friend of the Community",
    description: "Logo on website, mentions in event communications",
    highlight: false,
  },
  {
    name: "Event Sponsor",
    description: "Logo + callouts across a quarter of events",
    highlight: false,
  },
  {
    name: "Annual Partner",
    description: "Year-long placement, speaker slot, attendee list access",
    highlight: true,
  },
];

const basePackage = [
  "Placement on techtankto.com logo cloud",
  "Listed in Press Kit as a supporter",
  "Mentions in event marketing",
  "Social shout-outs (LinkedIn, Instagram)",
  "Option to speak at an event",
];

export default function SponsorPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
              Support the community
            </span>
            <h1 className="font-display text-4xl font-semibold text-foreground lg:text-5xl text-balance mb-6">
              Sponsor the Toronto tech community
            </h1>
            <p className="text-xl text-muted leading-relaxed mb-8">
              Support the monthly events, speakers, and programs that bring the
              community together. Tasteful brand visibility, real impact.
            </p>
            <Button variant="primary" size="lg" asChild>
              <a
                href="https://forms.gle/sponsor-intake"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request sponsorship package
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <Section>
        <SectionHeader
          overline="Why sponsor"
          title="What you get out of it"
          className="mb-12"
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {whySponsor.map((item) => (
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

      {/* What Sponsorship Supports */}
      <Section className="bg-white border-y border-border">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
              Your impact
            </span>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
              What sponsorship supports
            </h2>
            <ul className="space-y-4">
              {whatSponsorshipSupports.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-peach via-lavender to-aqua flex items-center justify-center">
              <p className="text-center text-foreground/60 px-8">
                Community event photography
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Sponsor Tiers */}
      <Section>
        <SectionHeader
          overline="Sponsorship tiers"
          title="Ways to support"
          description="We offer flexible sponsorship options. Request our sponsorship package for full details."
          className="mb-12"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {sponsorTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-6 lg:p-8 ${
                tier.highlight
                  ? "border-teal bg-teal/5"
                  : "border-border bg-white"
              }`}
            >
              {tier.highlight && (
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-teal mb-2">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {tier.name}
              </h3>
              <p className="text-muted">{tier.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted mt-8">
          Exact pricing and benefits in our sponsorship package. Tiers are
          illustrative — we&apos;ll work with your budget.
        </p>
      </Section>

      {/* Base Package */}
      <Section className="gradient-brand-soft">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            overline="All sponsors get"
            title="Base sponsor package"
            align="center"
            className="mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {basePackage.map((item, index) => (
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

      {/* Past Sponsors */}
      <Section className="bg-white border-y border-border">
        <SectionHeader
          overline="Our supporters"
          title="Companies that sponsor TechTank"
          align="center"
          className="mb-8"
        />
        <LogoCloud title="" />
      </Section>

      {/* Hosting vs Sponsoring */}
      <Section className="bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
            Not sure?
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Hosting vs. sponsoring
          </h2>
          <p className="text-muted mb-6">
            <strong className="text-foreground">Hosting</strong> means providing
            your venue and food for one event. <strong className="text-foreground">Sponsoring</strong>{" "}
            means supporting TechTank with funding for ongoing operations,
            programs, or multiple events.
          </p>
          <Button variant="outline" asChild>
            <Link href="/how-it-works/host">Learn about hosting</Link>
          </Button>
        </div>
      </Section>

      {/* Intake Form CTA */}
      <Section className="gradient-brand-soft">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
            Ready to sponsor?
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Get the sponsorship package
          </h2>
          <p className="text-muted mb-8">
            Tell us about your company and goals. We&apos;ll send our full
            sponsorship deck within a week.
          </p>
          <Button variant="primary" size="lg" asChild>
            <a
              href="https://forms.gle/sponsor-intake"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request sponsorship package
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </Section>

      {/* Contact */}
      <Section>
        <div className="max-w-xl mx-auto">
          <ContactCard context="Questions about sponsorship? Let's talk." />
        </div>
      </Section>
    </>
  );
}
