import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { teamGroups, type TeamMember } from "@/constants/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the volunteers, organizers, and board members who make TechTank TO happen.",
};

const AVATAR_PALETTE = { bg: "bg-teal/15 dark:bg-teal/20", text: "text-teal dark:text-seafoam", ring: "ring-teal/20" };

function paletteFor(_name: string) {
  return AVATAR_PALETTE;
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

// ─── Avatar sizes ────────────────────────────────────────────────────────────

function AvatarLg({ name }: { name: string }) {
  const p = paletteFor(name);
  return (
    <div
      className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-full ring-4 ${p.bg} ${p.ring} shadow-soft`}
    >
      <span className={`font-display text-2xl font-bold ${p.text}`}>
        {initials(name)}
      </span>
    </div>
  );
}

function AvatarMd({ name }: { name: string }) {
  const p = paletteFor(name);
  return (
    <div
      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ring-2 ${p.bg} ${p.ring}`}
    >
      <span className={`font-display text-base font-bold ${p.text}`}>
        {initials(name)}
      </span>
    </div>
  );
}

function AvatarSm({ name }: { name: string }) {
  const p = paletteFor(name);
  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${p.bg}`}
    >
      <span className={`font-display text-xs font-bold ${p.text}`}>
        {initials(name)}
      </span>
    </div>
  );
}

// ─── Card variants ───────────────────────────────────────────────────────────

function BoardCard({ name, pronouns, role, bio }: TeamMember) {
  return (
<<<<<<< HEAD
    <div className="poster-card gradient-brand group relative overflow-hidden p-8 flex flex-col gap-6 shadow-soft-lg">
      {/* Decorative circle */}
      <div className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-white/10 dark:bg-white/5" />
      <div className="pointer-events-none absolute -bottom-12 -left-6 h-32 w-32 rounded-full bg-white/10 dark:bg-white/5" />

      <AvatarLg name={name} />

      <div>
        <p className="font-display text-2xl font-bold text-foreground leading-tight">
          {name}
        </p>
        <p className="text-sm text-muted-foreground mt-0.5">{pronouns}</p>
        {role && (
          <span className="mt-3 inline-block tag text-xs">
            {role}
          </span>
        )}
        {bio ? (
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{bio}</p>
        ) : (
          <p className="mt-4 text-sm text-muted-foreground/40 italic">Bio coming soon</p>
        )}
      </div>
    </div>
  );
}

function CoreCard({ name, pronouns, role, bio }: TeamMember) {
  return (
    <div className="flex gap-4 bg-card rounded-2xl border border-border p-5 shadow-soft hover:shadow-soft-lg transition-shadow">
      <AvatarMd name={name} />
      <div className="min-w-0">
        <p className="font-display text-lg font-semibold text-foreground leading-tight">
          {name}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">{pronouns}</p>
        {role && (
          <p className="mt-1 text-xs font-semibold text-ring uppercase tracking-wide">{role}</p>
        )}
        {bio ? (
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{bio}</p>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground/40 italic">Bio coming soon</p>
        )}
      </div>
    </div>
  );
}

function CompactTile({ name, pronouns, role }: TeamMember) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 hover:border-ring/30 hover:bg-accent/30 transition-colors">
      <AvatarSm name={name} />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-foreground truncate">{name}</p>
        <p className="text-xs text-muted-foreground">{pronouns}{role ? ` · ${role}` : ""}</p>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

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
              TechTank TO is powered entirely by volunteers — organizers, designers,
              developers, and community builders who give their time to make
              Toronto&apos;s tech community more inclusive and welcoming.
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

        {/* Co-Chairs */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
            Co-Chairs
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {boardCoChairs.members.map((m) => (
              <BoardCard key={m.name} {...m} />
            ))}
          </div>
        </div>

        {/* Treasurer */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
            Treasurer
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {boardTreasurer.members.map((m) => (
              <BoardCard key={m.name} {...m} />
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
            <CoreCard key={m.name} {...m} />
          ))}
        </div>
      </Section>

      {/* Website + Social side-by-side */}
      <Section background="brand-soft">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              overline="Website team"
              title="Developers & designers"
              className="mb-8"
            />
            <div className="grid gap-3">
              {websiteTeam.members.map((m) => (
                <CompactTile key={m.name} {...m} />
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              overline="Social media"
              title="Content & community"
              className="mb-8"
            />
            <div className="grid gap-3">
              {socialMedia.members.map((m) => (
                <CompactTile key={m.name} {...m} />
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
            <CompactTile key={m.name + (m.role ?? "")} {...m} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="brand-soft">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
            Get involved
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Want to be part of the team?
          </h2>
          <p className="text-muted-foreground mb-8">
            We&apos;re always looking for volunteers who want to help build
            Toronto&apos;s most inclusive tech community.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/get-involved/organizer">Volunteer with us</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
