"use client";

import { useId, useState } from "react";
import { BioTeaser } from "@/components/ui/bio-teaser";
import { TeamAvatar } from "@/components/ui/team-avatar";
import { TeamProfileDialog } from "@/components/ui/team-profile-dialog";
import { TeamProfileHint } from "@/components/ui/team-profile-hint";
import type { TeamMember } from "@/constants/team";

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
          <TeamProfileHint />
        </div>
      </button>
      <TeamProfileDialog member={member} open={open} onClose={() => setOpen(false)} titleId={titleId} />
    </>
  );
}
