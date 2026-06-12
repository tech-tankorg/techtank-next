"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { TeamAvatar } from "@/components/ui/team-avatar";
import { cn } from "@/utils/theme";
import { teamGroups, type TeamMember } from "@/constants/team";

// ─── Profile dialog context ───────────────────────────────────────────────────

type TeamProfileContextValue = {
  onSelect: (member: TeamMember) => void;
};

const TeamProfileContext = createContext<TeamProfileContextValue | null>(null);

function useTeamProfile() {
  const ctx = useContext(TeamProfileContext);
  if (!ctx) throw new Error("Team profile components must be used within TeamProfileProvider");
  return ctx;
}

// ─── Card sub-components ──────────────────────────────────────────────────────

function BioTeaser({ bio }: { bio?: string }) {
  if (bio) {
    return <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-2">{bio}</p>;
  }
  return <p className="mt-4 text-sm text-muted-foreground/40 italic line-clamp-2">Bio coming soon</p>;
}

function ViewProfileHint() {
  return (
    <p className="mt-3 text-xs font-semibold text-ring group-hover:text-ring/80 transition-colors">
      View profile →
    </p>
  );
}

// ─── Card variants ────────────────────────────────────────────────────────────

function BoardCard({ member }: { member: TeamMember }) {
  const { onSelect } = useTeamProfile();
  const { name, pronouns, role, bio, avatar } = member;

  return (
    <button
      type="button"
      onClick={() => onSelect(member)}
      className="poster-card gradient-brand group relative overflow-hidden p-8 flex flex-col gap-6 shadow-soft-lg text-left w-full cursor-pointer transition-shadow hover:shadow-soft-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-white/10 dark:bg-white/5" />
      <div className="pointer-events-none absolute -bottom-12 -left-6 h-32 w-32 rounded-full bg-white/10 dark:bg-white/5" />
      <TeamAvatar name={name} avatar={avatar} size="lg" />
      <div>
        <p className="font-display text-2xl font-bold text-foreground leading-tight">{name}</p>
        <p className="text-sm text-muted-foreground mt-0.5">{pronouns}</p>
        {role && <span className="mt-3 inline-block tag text-xs">{role}</span>}
        <BioTeaser bio={bio} />
        <ViewProfileHint />
      </div>
    </button>
  );
}

function CoreCard({ member }: { member: TeamMember }) {
  const { onSelect } = useTeamProfile();
  const { name, pronouns, role, bio, avatar } = member;

  return (
    <button
      type="button"
      onClick={() => onSelect(member)}
      className="group flex gap-4 bg-card rounded-2xl border border-border p-5 shadow-soft hover:shadow-soft-lg transition-shadow text-left w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <TeamAvatar name={name} avatar={avatar} size="md" />
      <div className="min-w-0 flex-1">
        <p className="font-display text-lg font-semibold text-foreground leading-tight">{name}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{pronouns}</p>
        {role && (
          <p className="mt-1 text-xs font-semibold text-ring uppercase tracking-wide">{role}</p>
        )}
        <BioTeaser bio={bio} />
        <ViewProfileHint />
      </div>
    </button>
  );
}

function CompactTile({ name, pronouns, role, avatar }: TeamMember) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 hover:border-ring/30 hover:bg-accent/30 transition-colors">
      <TeamAvatar name={name} avatar={avatar} size="sm" />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-foreground truncate">{name}</p>
        <p className="text-xs text-muted-foreground">
          {pronouns}
          {role ? ` · ${role}` : ""}
        </p>
      </div>
    </div>
  );
}

// ─── Profile dialog ───────────────────────────────────────────────────────────

function TeamProfileDialog({
  member,
  onClose,
  titleId,
}: {
  member: TeamMember;
  onClose: () => void;
  titleId: string;
}) {
  const { name, pronouns, role, bio, avatar } = member;

  return (
    <div
      className={cn(
        "fixed z-50 flex flex-col overflow-hidden bg-card border border-border shadow-soft-lg",
        "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "w-[calc(100%-2rem)] max-w-md max-h-[85dvh] rounded-2xl",
        "md:max-w-xl md:max-h-[80dvh]",
        "lg:max-w-2xl"
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex shrink-0 items-center justify-end px-4 pt-4">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Close profile"
          className="h-11 w-11"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex flex-1 flex-col gap-5 overflow-y-auto px-6 md:px-8 lg:px-10 pb-10 min-h-0">
        <div className="flex flex-col items-center text-center gap-4">
          <TeamAvatar name={name} avatar={avatar} size="xl" />
          <div>
            <p id={titleId} className="font-display text-2xl font-bold text-foreground leading-tight">
              {name}
            </p>
            <p className="text-sm text-muted-foreground mt-1">{pronouns}</p>
            {role && <span className="mt-3 inline-block tag text-xs">{role}</span>}
          </div>
        </div>

        <div className="border-t border-border pt-5 pb-4">
          {bio ? (
            <div className="space-y-4">
              {bio
                .split(/\n+/)
                .filter(Boolean)
                .map((paragraph, i) => (
                  <p key={i} className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground/40 italic">Bio coming soon</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Provider ─────────────────────────────────────────────────────────────────

function TeamProfileProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

  const close = useCallback(() => setSelected(null), []);
  const onSelect = useCallback((member: TeamMember) => setSelected(member), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!selected) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [selected, close]);

  const dialog =
    selected && mounted
      ? createPortal(
          <>
            <button
              type="button"
              className="fixed inset-0 z-50 bg-black/70 cursor-default"
              aria-label="Close profile"
              onClick={close}
            />
            <TeamProfileDialog member={selected} onClose={close} titleId={titleId} />
          </>,
          document.body
        )
      : null;

  return (
    <TeamProfileContext.Provider value={{ onSelect }}>
      {children}
      {dialog}
    </TeamProfileContext.Provider>
  );
}

// ─── Page content ─────────────────────────────────────────────────────────────

export function TeamPageContent() {
  const boardCoChairs = teamGroups[0];
  const boardTreasurer = teamGroups[1];
  const coreTeam = teamGroups[2];
  const websiteTeam = teamGroups[3];
  const socialMedia = teamGroups[4];
  const volunteers = teamGroups[5];

  return (
    <TeamProfileProvider>
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

        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
            Co-Chairs
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {boardCoChairs.members.map((m) => (
              <BoardCard key={m.name} member={m} />
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
            Treasurer
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {boardTreasurer.members.map((m) => (
              <BoardCard key={m.name} member={m} />
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
            <CoreCard key={m.name} member={m} />
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
    </TeamProfileProvider>
  );
}
