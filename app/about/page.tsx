import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, Lightbulb, Handshake, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import {
  getCoverImage,
  getCoverVideo,
  getInstagramPostsByIds,
} from "@/constants/instagram-posts";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about TechTank TO's mission, values, and the four pillars that guide our inclusive tech community in Toronto.",
};

const pillars = [
  {
    icon: Users,
    title: "Community",
    description:
      "A place to belong, for all levels. We believe technology is better when everyone has a seat at the table. From first-time attendees to seasoned engineers, TechTank is your community.",
    color: "teal",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Curiosity, learning in public, experimentation. We embrace the joy of building and the courage to try new things. Every question is valid, every experiment is progress.",
    color: "amber",
  },
  {
    icon: Handshake,
    title: "Teamwork",
    description:
      "Collaboration over competition. The best ideas emerge when people work together. We lift each other up and celebrate collective wins over individual glory.",
    color: "teal",
  },
  {
    icon: Heart,
    title: "Respect",
    description:
      "Inclusive by default, enforced by our Code of Conduct. Every interaction at TechTank is grounded in mutual respect. We do not tolerate harassment or discrimination.",
    color: "amber",
  },
];

const timeline = [
  {
    year: "2022",
    title: "TechTank is founded",
    description:
      "A small group of Toronto developers started monthly meetups with a simple goal: create the tech community they wished they had.",
  },
  {
    year: "2023",
    title: "Growing momentum",
    description:
      "Word spread. Attendance grew from 30 to over 100 per event. Companies started reaching out to host and sponsor.",
  },
  {
    year: "2024",
    title: "Community programs launch",
    description:
      "Code Diversity for underrepresented voices. The volunteer crew expanded to support larger events.",
  },
  {
    year: "2025",
    title: "Toronto's tech home",
    description:
      "Monthly events, active Slack community, YouTube talks, and a growing reputation as Toronto's most inclusive tech meetup.",
  },
  {
    year: "2026",
    title: "Building the future",
    description:
      "Expanding programs, welcoming new hosts, and continuing to serve Toronto tech with events that matter.",
  },
];

export default function AboutPage() {
  const featuredPost = getInstagramPostsByIds(["2025-07-07-DLz4I7KOww6"])[0];
  const featuredVideo = featuredPost ? getCoverVideo(featuredPost) : undefined;
  const featuredImage = featuredPost ? getCoverImage(featuredPost) : undefined;

  return (
    <>
      {/* Hero / Manifesto */}
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
              TechTank TO is a volunteer-run, Toronto-based tech community
              founded in 2022. We host monthly in-person events where
              developers, designers, PMs, and tech-curious people gather to
              learn, share, and connect. No gatekeeping—just people
              helping people grow in tech.
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

      {/* Four Pillars */}
      <Section>
        <SectionHeader
          overline="Our values"
          title="The four pillars of TechTank"
          description="These principles guide everything we do — from how we run events to how we treat each other."
          className="mb-12"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="relative flex gap-6 bg-card rounded-2xl border border-border p-6 lg:p-8"
            >
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${
                  pillar.color === "teal"
                    ? "bg-ring/10 text-ring"
                    : "bg-amber/10 text-amber"
                }`}
              >
                <pillar.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Code of Conduct Teaser */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
            Safety first
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
            Our commitment to a safe community
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            TechTank is committed to providing a harassment-free experience for
            everyone. Our Code of Conduct applies to all community spaces,
            online and in-person.
          </p>
          <Button variant="outline" asChild>
            <Link href="/legal/code-of-conduct">Read our Code of Conduct</Link>
          </Button>
        </div>
      </Section>

      {/* What We Do */}
      <Section background="brand-soft">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
              What we do
            </span>
            <h2 className="font-display text-3xl font-semibold text-foreground lg:text-4xl mb-6">
              Monthly events and an active community
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Monthly meetups:</strong>{" "}
                In-person events featuring technical talks and networking.
                40-100 attendees, hosted at companies across Toronto.
              </p>
              <p>
                <strong className="text-foreground">Slack community:</strong>{" "}
                Ongoing discussion, job posts, and mutual support between
                events.
              </p>
              <p>
                <strong className="text-foreground">YouTube talks:</strong>{" "}
                Every talk is recorded and published. Learn from the Toronto
                tech community anytime.
              </p>
              <p>
                <strong className="text-foreground">Community programs:</strong>{" "}
                Code Diversity for underrepresented voices in tech.
              </p>
            </div>
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
                    Event photography placeholder
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* How We Fund It */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
            How we fund it
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground lg:text-4xl mb-6">
            Volunteer-run, company-supported
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            TechTank is 100% volunteer-run. Companies provide venue and food for
            events; TechTank handles speakers, marketing, and coordination.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" asChild>
              <Link href="/get-involved/host">Host an event</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/get-involved/sponsor">Become a sponsor</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section background="white">
        <SectionHeader
          overline="Our story"
          title="Building Toronto's tech community"
          className="mb-12"
        />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full bg-ring -translate-x-1/2 mt-1.5 ring-4 ring-background" />

                {/* Content */}
                <div
                  className={`flex-1 pl-12 lg:pl-0 ${
                    index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                  }`}
                >
                  <span className="inline-block text-sm font-semibold text-ring mb-1">
                    {item.year}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section background="brand-soft">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
            Join us
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Ready to be part of TechTank?
          </h2>
          <p className="text-muted-foreground mb-8">
            Whether you want to attend, speak, host, or volunteer — there&apos;s
            a place for you here.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/events">See upcoming events</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/get-involved">Get involved</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
