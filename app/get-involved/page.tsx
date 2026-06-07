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


export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
              Get involved
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground lg:text-6xl text-balance mb-6">
              Let&apos;s build TechTank together
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              TechTank runs because of people who show up and help make things
              happen. There are a few ways to get involved depending on where
              you&apos;re at and what you want to put in.
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roleCardsData.map((role) => (
            <RoleCard key={role.role} {...role} />
          ))}
        </div>
      </Section>

      {/* Why Get Involved */}
      <Section background="brand-soft">
        <SectionHeader
          overline="Why get involved"
          title="What you get out of it"
          className="mb-12"
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {whyGetInvolved.map((item) => (
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

      {/* Contact Strip */}
      <Section>
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
            Ready to connect?
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Drop us a line
          </h2>
          <p className="text-muted-foreground">
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
