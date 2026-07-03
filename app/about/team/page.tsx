import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { TeamCard } from "@/components/ui/team-card";
import { teamGroups } from "@/constants/team";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the volunteers, organizers, and board members who make TechTank TO happen.",
};

export default function TeamPage() {
  const boardCoChairs = teamGroups[0];
  const boardTreasurer = teamGroups[1];
  const coreTeam = teamGroups[2];
  const websiteTeam = teamGroups[3];
  const socialMedia = teamGroups[4];
  const volunteers = teamGroups[5];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
              Our team
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground lg:text-6xl text-balance mb-6">
              The people behind TechTank
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              TechTank TO is powered entirely by volunteers — organizers, designers, developers, and community builders
              who give their time to make Toronto&apos;s tech community more inclusive and welcoming.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/get-involved/organizer">Join the team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <Section>
        <SectionHeader
          overline="Leadership"
          title="Board of Directors"
          description="The organizers who set the direction and keep TechTank running."
          className="mb-12"
        />

        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Co-Chairs</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {boardCoChairs.members.map((m) => (
              <TeamCard key={m.name} variant="board" member={m} />
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Treasurer</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {boardTreasurer.members.map((m) => (
              <TeamCard key={m.name} variant="board" member={m} />
            ))}
          </div>
        </div>
      </Section>

      {/* Core Team */}
      <Section background="white">
        <SectionHeader
          overline="Core team"
          title="Organizers"
          description="The people who keep events running, the community thriving, and the details polished."
          className="mb-10"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {coreTeam.members.map((m) => (
            <TeamCard key={m.name} variant="core" member={m} />
          ))}
        </div>
      </Section>

      {/* Website + Social side-by-side */}
      <Section background="brand-soft">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader overline="Website team" title="Developers & designers" className="mb-8" />
            <div className="grid gap-3">
              {websiteTeam.members.map((m) => (
                <TeamCard key={m.name} variant="compact" member={m} />
              ))}
            </div>
          </div>
          <div>
            <SectionHeader overline="Social media" title="Content & community" className="mb-8" />
            <div className="grid gap-3">
              {socialMedia.members.map((m) => (
                <TeamCard key={m.name} variant="compact" member={m} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Community Volunteers */}
      <Section background="white">
        <SectionHeader
          overline="Community"
          title="Volunteers"
          description="Our community volunteers show up at every event to make sure everyone feels welcome."
          className="mb-10"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {volunteers.members.map((m) => (
            <TeamCard key={m.name + (m.role ?? "")} variant="compact" member={m} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="brand-soft">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
            Get involved
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">Want to be part of the team?</h2>
          <p className="text-muted-foreground mb-8">
            We&apos;re always looking for volunteers who want to help build Toronto&apos;s most inclusive tech
            community.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/get-involved/organizer">Volunteer with us</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
