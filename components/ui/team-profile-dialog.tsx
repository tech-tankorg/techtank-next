"use client";

import { Dialog } from "@/components/ui/dialog";
import { TeamAvatar } from "@/components/ui/team-avatar";
import type { TeamMember } from "@/constants/team";

interface TeamProfileDialogProps {
  member: TeamMember;
  open: boolean;
  onClose: () => void;
  titleId: string;
}

export function TeamProfileDialog({ member, open, onClose, titleId }: TeamProfileDialogProps) {
  const { name, pronouns, role, bio, avatar } = member;

  return (
    <Dialog open={open} onClose={onClose} labelledBy={titleId}>
      <div className="flex shrink-0 flex-col items-center text-center gap-4">
        <TeamAvatar name={name} avatar={avatar} size="xl" />
        <div>
          <p id={titleId} className="font-display text-2xl font-bold text-foreground leading-tight">
            {name}
          </p>
          <p className="text-sm text-muted-foreground mt-1">{pronouns}</p>
          {role && <span className="mt-3 inline-block tag text-xs">{role}</span>}
        </div>
      </div>

      <div className="shrink-0 border-t border-border" />
      <div className="flex-1 min-h-0 overflow-y-auto pb-4">
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
