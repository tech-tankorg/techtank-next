import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  DoorOpen,
  Users,
  Sprout,
  MapPin,
  Smile,
  Mic,
  PartyPopper,
  Coffee,
  Trophy,
  MessageSquare,
  ExternalLink,
  Hammer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { SponsorsMarquee } from "@/components/ui/sponsors-marquee";
import { getCoverImage, getCoverVideo, getInstagramPostsByIds } from "@/constants/instagram-posts";
import { socialLinks } from "@/constants/social-links";
import { BRAND_ICONS } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about TechTank's mission, values, story, and the programs we run in Toronto's tech community.",
};

const values = [
  {
    icon: DoorOpen,
    title: "Welcoming by design",
    description:
      "We intentionally create spaces that feel approachable, inclusive, and easy to enter, especially for those who don't feel at home in traditional tech environments.",
    color: "teal",
  },
  {
    icon: Users,
    title: "Connection over networking",
    description: "We prioritize genuine relationships over transactional interactions or surface-level networking.",
    color: "amber",
  },
  {
    icon: Sprout,
    title: "Growth through community",
    description:
      "We support learning, curiosity, and personal development through shared experiences, not pressure or performance.",
    color: "teal",
  },
  {
    icon: MapPin,
    title: "Local impact",
    description: "We are committed to strengthening Toronto's tech ecosystem by supporting the people within it.",
    color: "teal",
  },
  {
    icon: Smile,
    title: "Make it fun!",
    description:
      "We believe social, enjoyable experiences are not a distraction from growth, but a key driver of engagement, confidence, and community.",
    color: "amber",
  },
];

const currentPrograms = [
  {
    icon: Mic,
    title: "Tech Talks",
    description:
      "Speaker events hosted at venues across Toronto. We've partnered with companies like BrainStation, 7shifts, Rakuten Kobo, Posthog, Cohere, Vena Solutions, Docebo, Plusgrade, Intuit, and Microsoft, and we're always looking for new hosts and sponsors to join us.",
    cta: { label: "Host or sponsor an event", href: "/get-involved/host" },
  },
  {
    icon: Hammer,
    title: "Build Nights",
    description:
      "Hands-on evenings where people bring a project and build alongside each other. Partnered with companies like PostHog.",
    cta: { label: "See upcoming build nights", href: "/events" },
  },
  {
    icon: PartyPopper,
    title: "Socials",
    description:
      "Fun events built around actually meeting people and making genuine connections. No agenda, no pitch, just a good room.",
  },
  {
    icon: Coffee,
    title: "Code Diversity Monthly Coffee Chats",
    description:
      "A recurring monthly series for women and gender-diverse folks in tech. Casual, intentional, and community-led.",
  },
  {
    icon: Trophy,
    title: "Sports Leagues (Sashimis)",
    description:
      "TechTank's sports leagues and run clubs are about more than just the game. It's a chance to get moving, have fun, and build the kind of friendships that don't start with a LinkedIn connection request.",
  },
  {
    icon: MessageSquare,
    title: "The Slack Channel",
    description: "Join the conversation between events. Where the community lives day-to-day.",
    cta: { label: "Join on Slack", href: socialLinks.slack.url, brand: "slack" },
  },
];

const pastPrograms = [
  {
    title: "Guppy Talks",
    label: "on pause",
    description: "Community podcast",
  },
  {
    title: "StudyTank",
    label: "on pause",
    description: "Study group",
  },
];

export default function AboutPage() {
  const featuredPost = getInstagramPostsByIds(["2025-07-07-DLz4I7KOww6"])[0];
  const featuredVideo = featuredPost ? getCoverVideo(featuredPost) : undefined;
  const featuredImage = featuredPost ? getCoverImage(featuredPost) : undefined;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
              About TechTank
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground lg:text-6xl text-balance mb-6">
              We build the community we wanted to find
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              TechTank TO is a volunteer-run, Toronto-based tech community founded in 2023. We host year-round in-person
              events where developers, designers, PMs, and tech-curious people gather to learn, share, and connect. No
              gatekeeping—just people helping people grow in tech.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="lg" asChild>
                <Link href="/events">See upcoming events</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/get-involved">Get involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <Section background="white">
        <SectionHeader
          overline="Why we exist"
          title="Mission"
          description="TechTank strengthens Toronto's tech ecosystem by creating engaging, community-driven spaces that bring people together through social events and career-focused programming, helping them build meaningful connections and grow in their careers."
        />
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader
          overline="What guides everything we do"
          title="Values"
          description="These principles shape how we run events, build programs, and show up for the community."
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col gap-4 bg-card rounded-2xl border border-border p-6">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                  value.color === "teal" ? "bg-ring/10 text-ring" : "bg-amber/10 text-amber"
                }`}
              >
                <value.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Story */}
      <Section background="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
              From a simple idea to a registered nonprofit
            </span>
            <h2 className="font-display text-3xl font-semibold text-foreground lg:text-4xl mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                TechTank TO was founded in January 2023 with a simple idea: build a community for early-stage engineers
                in Toronto. Free (or low cost) events, real connections, no pressure. A place where people just starting
                out could learn, meet others, and feel like they belonged somewhere in this industry.
              </p>
              <p>
                Since then, TechTank has grown beyond that original vision. The community expanded to include people at
                all stages of their careers, the programming diversified, and a team of volunteer organizers stepped up
                to help keep things running.
              </p>
              <p>
                In April 2026, TechTank became a{" "}
                <strong className="text-foreground">registered nonprofit corporation in Ontario</strong>.
              </p>
              <p>
                At a time when the industry is shifting faster than most people can keep up with, we believe having a
                community behind you matters more than it used to.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-linear-to-br from-peach via-lavender to-aqua">
              {featuredVideo ? (
                <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
                  <source src={featuredVideo.replace(/\.mp4$/, ".webm")} type="video/webm" />
                  <source src={featuredVideo} type="video/mp4" />
                </video>
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
                  <p className="text-center text-foreground/60 px-8">Event photography placeholder</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* What We Run */}
      <Section background="brand-soft">
        <SectionHeader
          overline="Programs and events"
          title="What We Run"
          description="A mix of formats built around the same goal: bringing people together."
          className="mb-12"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentPrograms.map((program) => {
            const BrandIcon = program.cta?.brand ? BRAND_ICONS[program.cta.brand] : null;
            return (
              <div key={program.title} className="flex flex-col gap-4 bg-card rounded-2xl border border-border p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ring/10 text-ring">
                  <program.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{program.description}</p>
                </div>
                {program.cta && (
                  <Button variant="outline" size="sm" className="self-start" asChild>
                    <Link href={program.cta.href}>
                      {BrandIcon && <BrandIcon className="mr-2 h-4 w-4" />}
                      {program.cta.label}
                    </Link>
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* What We've Run Before */}
      <Section background="brand-vertical">
        <SectionHeader
          overline="On pause"
          title="What We've Run Before"
          description="We'd love to see these come back under the right organizer."
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pastPrograms.map((p) => (
            <div key={p.title} className="flex flex-col gap-4 bg-card rounded-2xl border border-border p-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                  <span className="rounded-full bg-warning/40 dark:bg-warning/60 text-warning-foreground px-2 py-0.5 text-xs font-medium">
                    {p.label}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Get Involved */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
            Help shape what TechTank becomes
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">Get Involved</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Whether you want to pitch a new idea or get involved in an existing initiative, we want to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/events">See upcoming events</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/get-involved">Get involved</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about/team">Meet the team</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Technology Sponsors */}
      <Section background="brand-soft">
        <SectionHeader
          overline="Great tools for our community"
          title="Technology Sponsors"
          description="We love putting great tools in the hands of our community. If you build something our tech community would love, we want to hear from you. Our volunteers test, use, and talk about the products we believe in."
          className="mb-6"
        />
        <Button variant="outline" className="mb-10" asChild>
          <a href="mailto:techtankto@gmail.com">Interested in becoming a technology sponsor? Get in touch.</a>
        </Button>
        <SponsorsMarquee />
      </Section>

      {/* Affiliations */}
      <Section background="white">
        <SectionHeader overline="Part of something bigger" title="Affiliations" className="mb-10" />
        <div className="max-w-2xl">
          <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Supercollider</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              TechTank is a proud member of the Supercollider network, a community of communities bringing together
              Toronto&apos;s tech scene. Our events are listed on their Luma calendar so you can discover everything
              happening across the ecosystem.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://www.supercollider.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Supercollider website
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://luma.com/supercollider-tech-community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Supercollider events calendar
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
