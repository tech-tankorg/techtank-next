import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, Users, Building, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { SponsorsMarquee } from "@/components/ui/sponsors-marquee";
import { ContactCard } from "@/components/ui/contact-card";

export const metadata: Metadata = {
  title: "Host a TechTank Event",
  description:
    "Bring Toronto's tech community to your office. Great for recruiting, brand visibility, and giving back.",
};

const whyHost = [
  {
    icon: Users,
    title: "Recruiting",
    description:
      "Meet Toronto tech talent in a genuine, non-salesy environment. Build relationships before you need to hire.",
  },
  {
    icon: Building,
    title: "Back to the office",
    description:
      "Give your team a reason to come in. Hosting an event creates energy and shows off your space.",
  },
  {
    icon: Users,
    title: "Karma",
    description:
      "The tech community is interrelated. Supporting it means supporting your future colleagues, partners, and hires.",
  },
];

const logistics = [
  { label: "Capacity", value: "40-100 attendees", icon: Users },
  { label: "Timing", value: "6:00pm - 8:30pm weeknight", icon: Clock },
  { label: "Location", value: "TTC accessible (subway or streetcar)", icon: MapPin },
  { label: "AV", value: "Projector + screen required; microphone nice-to-have", icon: Building },
  { label: "Food", value: "Pizza + non-alcoholic drinks (baseline)", icon: Building },
  { label: "Recording", value: "TechTank records and posts to YouTube", icon: Building },
];

const techTankHandles = [
  "Speaker sourcing (unless you want to bring your own)",
  "Marketing (Slack, LinkedIn, Instagram)",
  "Registration and attendee tracking",
  "Event coordination and MCing",
  "Recording and publishing to YouTube",
];

const youProvide = [
  "Venue with seating and AV",
  "Food and drinks",
  "Optional: your own speaker",
  "Optional: your marketing materials",
];

const whatYouGet = [
  "Logo on event marketing across all channels",
  "Attendee list (post-event)",
  "Brand visibility on YouTube and social",
  "Photos from the event (for your channels)",
  "A memorable team experience",
  "Karma in the Toronto tech community",
];

const process = [
  { step: 1, title: "Initial contact", description: "Fill out the form or email us" },
  { step: 2, title: "Scoping call", description: "We'll discuss venue, capacity, and timing" },
  { step: 3, title: "Confirm details", description: "Date, speaker, and logistics locked in" },
  { step: 4, title: "Marketing kickoff", description: "We promote the event across channels" },
  { step: 5, title: "Event day", description: "We run the show; you enjoy the night" },
];

export default function HostPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
              Bring us to your space
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground lg:text-6xl text-balance mb-6">
              Host a TechTank event
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Bring the Toronto tech community to your office. Great for
              recruiting, brand visibility, and giving back to the community.
            </p>
            <Button variant="primary" size="lg" asChild>
              <a href="mailto:techtankto@gmail.com?subject=Host%20Inquiry%20-%20TechTank">
                Contact us to host
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Host */}
      <Section>
        <SectionHeader
          overline="Why host"
          title="What you get out of it"
          className="mb-12"
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {whyHost.map((item) => (
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

      {/* Event Logistics */}
      <Section background="white">
        <SectionHeader
          overline="Event logistics"
          title="What we need from your space"
          className="mb-12"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {logistics.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 bg-background rounded-xl p-5"
            >
              <item.icon className="h-5 w-5 text-ring shrink-0 mt-0.5" />
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
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              What TechTank handles
            </h3>
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
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              What you provide
            </h3>
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
          <SectionHeader
            overline="What you get"
            title="Host perks"
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

      {/* Process */}
      <Section>
        <SectionHeader
          overline="The process"
          title="How it works"
          className="mb-12"
        />
        <div className="grid gap-6 lg:grid-cols-5">
          {process.map((item) => (
            <div key={item.step} className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ring text-white font-semibold mb-4">
                {item.step}
              </div>
              <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Past Hosts Logo Cloud */}
      <Section background="white">
        <SectionHeader
          overline="Past hosts"
          title="Companies that have hosted"
          align="center"
          className="mb-8"
        />
        <SponsorsMarquee className="py-4" />
      </Section>

      {/* Host Resources */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
            Resources
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Host toolkit in the Media Kit
          </h2>
          <p className="text-muted-foreground mb-8">
            Run-of-show guides, host checklists, brand assets, and event templates all live in our Media Kit.
          </p>
          <Button variant="outline" asChild>
            <Link href="/media-kit">
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
            Ready to host?
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Let&apos;s bring TechTank to your space
          </h2>
          <p className="text-muted-foreground mb-8">
            Tell us about your venue and when you&apos;d like to host. We&apos;ll
            get back to you within a week.
          </p>
          <Button variant="primary" size="lg" asChild>
            <a href="mailto:techtankto@gmail.com?subject=Host%20Inquiry%20-%20TechTank">
              Contact us to host
            </a>
          </Button>
        </div>
      </Section>

      {/* Contact */}
      <Section>
        <div className="max-w-xl mx-auto">
          <ContactCard context="Questions about hosting? We're here to help." />
        </div>
      </Section>
    </>
  );
}
