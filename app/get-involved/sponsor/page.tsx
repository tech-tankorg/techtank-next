import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Heart, Users, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { SponsorsMarquee } from "@/components/ui/sponsors-marquee";
import { ContactCard } from "@/components/ui/contact-card";
import {
  getCoverImage,
  getCoverVideo,
  getInstagramPostsByIds,
} from "@/constants/instagram-posts";

export const metadata: Metadata = {
  title: "Sponsor TechTank",
  description:
    "Support Toronto's most inclusive tech community. Request sponsorship info and see how you can help the community thrive.",
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
  "Community programs like Code Diversity for underrepresented voices",
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
    description: "Logo + callouts tied to sponsored events",
    highlight: false,
  },
  {
    name: "Annual Partner",
    description: "Year-long placement and a speaker slot",
    highlight: true,
  },
];

const basePackage = [
  "Placement on techtankto.com logo cloud",
  "Mentions in event marketing",
  "Social shout-outs (LinkedIn, Instagram)",
  "Option to speak at an event",
];

export default function SponsorPage() {
  const featuredPost = getInstagramPostsByIds(["2026-04-10-DW9vcgiPHx"])[0];
  const featuredVideo = featuredPost ? getCoverVideo(featuredPost) : undefined;
  const featuredImage = featuredPost ? getCoverImage(featuredPost) : undefined;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
              Support the community
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground lg:text-6xl text-balance mb-6">
              Sponsor the Toronto tech community
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Support the monthly events, speakers, and programs that bring the
              community together. Tasteful brand visibility, real impact.
            </p>
            <Button variant="primary" size="lg" asChild>
              <a href="mailto:techtankto@gmail.com?subject=Sponsorship%20Inquiry%20-%20TechTank">
                Request sponsorship info
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
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What Sponsorship Supports */}
      <Section background="white">
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
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-peach via-lavender to-aqua">
              {featuredVideo ? (
                <video
                  src={featuredVideo}
                  poster={featuredImage}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : featuredImage ? (
                <Image
                  src={featuredImage}
                  alt="TechTank community moment"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-center text-foreground/60 px-8">
                    Community event photography
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Sponsor Tiers */}
      <Section>
        <SectionHeader
          overline="Sponsorship tiers"
          title="Ways to support"
          description="We offer flexible sponsorship options. Request our sponsorship info for full details."
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
              <p className="text-muted-foreground">{tier.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          Exact pricing and benefits in our sponsorship info. Tiers are
          illustrative — we&apos;ll work with your budget.
        </p>
      </Section>

      {/* Base Package */}
      <Section background="brand-soft">
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
      <Section background="white">
        <SectionHeader
          overline="Our supporters"
          title="Companies that sponsor TechTank"
          align="center"
          className="mb-8"
        />
        <SponsorsMarquee className="py-4" />
      </Section>

      {/* Hosting vs Sponsoring */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
            Not sure?
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Hosting vs. sponsoring
          </h2>
          <p className="text-muted-foreground mb-6">
            <strong className="text-foreground">Hosting</strong> means providing
            your venue and food for one event. <strong className="text-foreground">Sponsoring</strong>{" "}
            means supporting TechTank with funding for ongoing operations,
            programs, or multiple events.
          </p>
          <Button variant="outline" asChild>
            <Link href="/get-involved/host">Learn about hosting</Link>
          </Button>
        </div>
      </Section>

      {/* Intake Form CTA */}
      <Section background="brand-soft">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
            Ready to sponsor?
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Get the sponsorship info
          </h2>
          <p className="text-muted-foreground mb-8">
            Tell us about your company and goals. We&apos;ll send our full
            sponsorship details within a week.
          </p>
          <Button variant="primary" size="lg" asChild>
            <a href="mailto:techtankto@gmail.com?subject=Sponsorship%20Inquiry%20-%20TechTank">
              Request sponsorship package
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
