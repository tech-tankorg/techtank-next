import type { Metadata } from "next";
import { Check, Clock, Users, Video, Mic, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { ContactCard } from "@/components/ui/contact-card";

export const metadata: Metadata = {
  title: "Speak at TechTank",
  description:
    "Share your knowledge with Toronto's tech community. We help first-time speakers succeed with coaching and support.",
};

const whySpeak = [
  {
    icon: Mic,
    title: "Improve your speaking skills",
    description:
      "Public speaking is a career accelerator. We help first-time speakers prepare with feedback and rehearsal sessions.",
  },
  {
    icon: Video,
    title: "Market your skills",
    description:
      "Every talk is recorded and published to YouTube. Your talk becomes a portfolio piece that reaches developers across Canada.",
  },
  {
    icon: Users,
    title: "Give back to the community",
    description:
      "The community runs on people sharing what they know. Your experience — at any level — is valuable to someone else.",
  },
];

const logistics = [
  { label: "Talk duration", value: "30-45 minutes + Q&A" },
  { label: "Topics", value: "Anything related to tech" },
  { label: "Format", value: "In-person at a host venue in Toronto" },
  { label: "Audience", value: "40-100 attendees per event" },
  { label: "Recording", value: "Published to TechTank's YouTube channel" },
];

const techTankHandles = [
  "Venue and catering (via a host company)",
  "Marketing (Meetup, Slack, LinkedIn, Instagram)",
  "Run-of-show coordination and MCing",
  "Recording and post-production",
  "Feedback and rehearsal sessions for first-time speakers",
];

const youProvide = [
  "A talk proposal (title, abstract, bio)",
  "Slides using our template (optional but recommended)",
  "Yourself, on event night",
];

const whatYouGet = [
  "Your talk recorded and published to YouTube",
  "Promotion across TechTank channels",
  "A welcoming, supportive audience",
  "Speaker coaching if needed",
  "Networking with Toronto tech professionals",
  "The gratitude of an entire tech community",
];

export default function SpeakerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
              Share what you know
            </span>
            <h1 className="font-display text-4xl font-semibold text-foreground lg:text-5xl text-balance mb-6">
              Speak at a TechTank event
            </h1>
            <p className="text-xl text-muted leading-relaxed mb-8">
              Share your expertise with the Toronto tech community. We help
              first-time speakers succeed with coaching and support.
            </p>
            <Button variant="primary" size="lg" asChild>
              <a
                href="https://forms.gle/speaker-intake"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign up to speak
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Speak */}
      <Section>
        <SectionHeader
          overline="Why speak"
          title="What you get out of it"
          className="mb-12"
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {whySpeak.map((item) => (
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

      {/* Logistics */}
      <Section className="bg-white border-y border-border">
        <SectionHeader
          overline="Logistics"
          title="What to expect"
          className="mb-12"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {logistics.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 bg-background rounded-xl p-5"
            >
              <Clock className="h-5 w-5 text-teal shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">{item.label}</p>
                <p className="text-sm text-muted">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What TechTank Handles vs What You Provide */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-teal/5 rounded-2xl border border-teal/20 p-6 lg:p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              What TechTank handles
            </h3>
            <ul className="space-y-3">
              {techTankHandles.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber/5 rounded-2xl border border-amber/20 p-6 lg:p-8">
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
      <Section className="gradient-brand-soft">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            overline="What you get"
            title="Speaker perks"
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

      {/* Speaker Resources */}
      <Section>
        <SectionHeader
          overline="Resources"
          title="Speaker toolkit"
          className="mb-12"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <a
            href="#"
            className="group bg-white rounded-xl border border-border p-6 hover:border-teal/50 transition-all"
          >
            <FileText className="h-8 w-8 text-teal mb-4" />
            <h4 className="font-semibold text-foreground group-hover:text-teal transition-colors mb-2">
              Slide deck template
            </h4>
            <p className="text-sm text-muted">
              Branded Google Slides template to get you started.
            </p>
          </a>
          <a
            href="#"
            className="group bg-white rounded-xl border border-border p-6 hover:border-teal/50 transition-all"
          >
            <FileText className="h-8 w-8 text-teal mb-4" />
            <h4 className="font-semibold text-foreground group-hover:text-teal transition-colors mb-2">
              Run-of-show PDF
            </h4>
            <p className="text-sm text-muted">
              What to expect on event night, minute by minute.
            </p>
          </a>
          <a
            href="#"
            className="group bg-white rounded-xl border border-border p-6 hover:border-teal/50 transition-all"
          >
            <FileText className="h-8 w-8 text-teal mb-4" />
            <h4 className="font-semibold text-foreground group-hover:text-teal transition-colors mb-2">
              First-time speaker tips
            </h4>
            <p className="text-sm text-muted">
              Practical advice from speakers who started at TechTank.
            </p>
          </a>
        </div>
      </Section>

      {/* Intake Form CTA */}
      <Section className="gradient-brand-soft">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
            Ready to speak?
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Submit your talk proposal
          </h2>
          <p className="text-muted mb-8">
            Tell us about yourself and your talk idea. We&apos;ll get back to
            you within a week.
          </p>
          <Button variant="primary" size="lg" asChild>
            <a
              href="https://forms.gle/speaker-intake"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up to speak
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </Section>

      {/* Contact */}
      <Section>
        <div className="max-w-xl mx-auto">
          <ContactCard context="Questions about speaking? We're here to help." />
        </div>
      </Section>
    </>
  );
}
