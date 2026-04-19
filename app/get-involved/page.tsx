import type { Metadata } from "next";
import { Megaphone, Users, Building2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { RoleCard, roleCardsData } from "@/components/ui/role-card";
import { ContactCard } from "@/components/ui/contact-card";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Get involved with TechTank TO. Speak, host, sponsor, or volunteer — there are multiple ways to contribute to Toronto's tech community.",
};

const whyGetInvolved = [
  {
    icon: Megaphone,
    title: "Marketing & Brand",
    description:
      "Reach Toronto tech in a genuine, non-salesy way. Your brand gets visibility among developers, designers, and tech leaders who value community.",
  },
  {
    icon: Users,
    title: "Recruiting",
    description:
      "Meet talent at all levels — from junior developers to senior engineers. Build relationships before you need to hire.",
  },
  {
    icon: Building2,
    title: "Karma",
    description:
      "The tech community thrives because people give back. Your contribution helps the next generation of Toronto tech talent.",
  },
];

const faqs = [
  {
    question: "Do I need to be a senior engineer to speak?",
    answer:
      "No! We welcome speakers at all levels. Some of our best talks come from people sharing what they just learned. We also offer coaching for first-time speakers.",
  },
  {
    question: "Is there a cost to host?",
    answer:
      "No fee to TechTank. Hosts provide venue and food (typically pizza and drinks). TechTank handles everything else: speakers, marketing, coordination, recording.",
  },
  {
    question: "Can I volunteer without speaking or hosting?",
    answer:
      "Absolutely! We have event-day roles (check-in, setup), ongoing roles (social media, design), and organizing roles. No public speaking required.",
  },
  {
    question: "How fast will you get back to me?",
    answer:
      "We aim to respond to all inquiries within one week. If you haven't heard back, please email us directly at techtankto@gmail.com.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
              Get involved
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground lg:text-6xl text-balance mb-6">
              Let&apos;s build TechTank together
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              TechTank runs on the Toronto tech community — speakers, hosts,
              sponsors, and volunteers who show up every month. Pick the role
              that fits you right now.
            </p>
          </div>
        </div>
      </section>

      {/* Role Cards */}
      <Section>
        <SectionHeader
          overline="Ways to get involved"
          title="Choose your path"
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roleCardsData.map((role) => (
            <RoleCard key={role.role} {...role} />
          ))}
        </div>
      </Section>

      {/* Why Get Involved */}
      <Section className="gradient-brand-soft">
        <SectionHeader
          overline="Why get involved"
          title="What you get out of it"
          className="mb-12"
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {whyGetInvolved.map((item) => (
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

      {/* FAQ */}
      <Section>
        <SectionHeader
          overline="FAQ"
          title="Common questions"
          className="mb-12"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-border p-6"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {faq.question}
              </h3>
              <p className="text-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Strip */}
      <Section className="bg-background">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
            Ready to connect?
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Drop us a line
          </h2>
          <p className="text-muted">
            We respond to every message — hosts, sponsors, speakers, and
            volunteers. Whichever role fits, we&apos;d love to hear from you.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <ContactCard context="For hosting, sponsorship, speaking, and community inquiries." />
        </div>
      </Section>
    </>
  );
}
