import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, Users, Video, Mic, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { ContactCard } from "@/components/ui/contact-card";

export const metadata: Metadata = {
  title: "Speak or Facilitate",
  description:
    "Got something to share? We're always looking for speakers, panelists, and workshop facilitators. You don't need to be a senior engineer or a public figure.",
};

const whyParticipate = [
  {
    icon: Mic,
    title: "Any format, any level",
    description:
      "Talk, panel, or workshop — pick what fits. You don't need to be a senior engineer or a public figure. If you have a perspective worth hearing, we want to hear it.",
  },
  {
    icon: Video,
    title: "Your session on record",
    description:
      "Talks and panels are recorded and published to YouTube. Your session becomes a portfolio piece that reaches developers across Canada.",
  },
  {
    icon: Users,
    title: "Give back to the community",
    description:
      "The community runs on people sharing what they know. Your experience — at any level — is valuable to someone else.",
  },
];

const logistics = [
  { label: "Talk", value: "30-45 minutes + Q&A, solo or co-presented" },
  { label: "Panel", value: "45-60 minutes, 3-5 participants with a moderator" },
  { label: "Workshop", value: "60-90 minutes, hands-on and interactive" },
  { label: "Topics", value: "Anything related to tech" },
  { label: "Format", value: "In-person at a host venue in Toronto" },
  { label: "Audience", value: "40-120 attendees per event" },
];

const techTankHandles = [
  "Venue and catering (via a host company)",
  "Marketing (Slack, LinkedIn, Instagram)",
  "Run-of-show coordination and MCing",
  "Recording and post-production",
  "Coaching and prep support for first-timers",
];

const youProvide = [
  "A proposal (title, format, abstract, bio)",
  "Slides or workshop materials (templates available)",
  "Yourself, on event night",
];

const whatYouGet = [
  "Session recorded and published to YouTube",
  "Promotion across TechTank channels",
  "A welcoming, supportive audience",
  "Coaching and prep support if needed",
  "Networking with Toronto tech professionals",
  "The gratitude of an entire tech community",
];

export default function SpeakOrFacilitatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
              Share what you know
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground lg:text-6xl text-balance mb-6">
              Speak or Facilitate
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Got something to share? We&apos;re always looking for speakers, panelists, and workshop facilitators. You
              don&apos;t need to be a senior engineer or a public figure. If you have a perspective worth hearing, we
              want to hear it.
            </p>
            <Button variant="primary" size="lg" asChild>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdtei1QBJb45fF8Fw29yApWCJEiwHROrJEhPhI5X3eXcAnUjQ/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit your proposal
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Participate */}
      <Section>
        <SectionHeader overline="Why speak or facilitate" title="What you get out of it" className="mb-12" />
        <div className="grid gap-8 lg:grid-cols-3">
          {whyParticipate.map((item) => (
            <div key={item.title} className="bg-card rounded-2xl border border-border p-6 lg:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ring/10 text-ring mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Logistics */}
      <Section background="white">
        <SectionHeader overline="Logistics" title="What to expect" className="mb-12" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {logistics.map((item) => (
            <div key={item.label} className="flex items-start gap-4 bg-background rounded-xl p-5">
              <Clock className="h-5 w-5 text-ring shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What TechTank Handles vs What You Provide */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-ring/8 rounded-2xl border border-ring/30 p-6 lg:p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">What TechTank handles</h3>
            <ul className="space-y-3">
              {techTankHandles.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-ring shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber/8 rounded-2xl border border-amber/30 p-6 lg:p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">What you provide</h3>
            <ul className="space-y-3">
              {youProvide.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* What You Get */}
      <Section background="brand-soft">
        <div className="max-w-3xl mx-auto">
          <SectionHeader overline="What you get" title="What you get" align="center" className="mb-12" />
          <div className="grid gap-4 sm:grid-cols-2">
            {whatYouGet.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-card rounded-lg p-4">
                <Check className="h-5 w-5 text-ring shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Speaker Resources */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">Resources</span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">Speaker and facilitator toolkit</h2>
          <p className="text-muted-foreground mb-8">
            Brand assets, slide templates, run-of-show guidance, and tips for first-time speakers and facilitators all
            live in our Media Kit.
          </p>
          <Button variant="outline" asChild>
            <Link href="/resources/media-kit">
              Open the Media Kit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Intake Form CTA */}
      <Section background="brand-soft">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
            Ready to participate?
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">Submit your proposal</h2>
          <p className="text-muted-foreground mb-8">
            Tell us about yourself and your idea — talk, panel, or workshop. We&apos;ll get back to you within a week.
          </p>
          <Button variant="primary" size="lg" asChild>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdtei1QBJb45fF8Fw29yApWCJEiwHROrJEhPhI5X3eXcAnUjQ/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit your proposal
            </a>
          </Button>
        </div>
      </Section>

      {/* Contact */}
      <Section>
        <div className="max-w-xl mx-auto">
          <ContactCard context="Questions about speaking or facilitating? We're here to help." />
        </div>
      </Section>
    </>
  );
}
