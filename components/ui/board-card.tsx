"use client";

import { useId, useState } from "react";
import { BioTeaser } from "@/components/ui/bio-teaser";
import { TeamAvatar } from "@/components/ui/team-avatar";
import { TeamProfileDialog } from "@/components/ui/team-profile-dialog";
import { TeamProfileHint } from "@/components/ui/team-profile-hint";
import type { TeamMember } from "@/constants/team";

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
          <TeamProfileHint />
        </div>
      </button>
      <TeamProfileDialog member={member} open={open} onClose={() => setOpen(false)} titleId={titleId} />
    </>
  );
}
