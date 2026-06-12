"use client";

import { useId, useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { TeamAvatar } from "@/components/ui/team-avatar";
import type { TeamMember } from "@/constants/team";

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

function TeamProfileDialog({
  member,
  open,
  onClose,
  titleId,
}: {
  member: TeamMember;
  open: boolean;
  onClose: () => void;
  titleId: string;
}) {
  const { name, pronouns, role, bio, avatar } = member;

  return (
    <Dialog open={open} onClose={onClose} labelledBy={titleId}>
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
    </Dialog>
  );
}

export function BoardCard({ member }: { member: TeamMember }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const { name, pronouns, role, bio, avatar } = member;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
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
      <TeamProfileDialog member={member} open={open} onClose={() => setOpen(false)} titleId={titleId} />
    </>
  );
}

export function CoreCard({ member }: { member: TeamMember }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const { name, pronouns, role, bio, avatar } = member;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
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
      <TeamProfileDialog member={member} open={open} onClose={() => setOpen(false)} titleId={titleId} />
    </>
  );
}

export function CompactTile({ name, pronouns, role, avatar }: TeamMember) {
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
