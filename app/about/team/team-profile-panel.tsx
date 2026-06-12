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
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TeamAvatar } from "@/components/ui/team-avatar";
import { cn } from "@/utils/theme";
import type { TeamMember } from "@/constants/team";

type TeamProfileContextValue = {
  onSelect: (member: TeamMember) => void;
};

const TeamProfileContext = createContext<TeamProfileContextValue | null>(null);

function useTeamProfile() {
  const ctx = useContext(TeamProfileContext);
  if (!ctx) {
    throw new Error("Team profile components must be used within TeamProfileProvider");
  }
  return ctx;
}

function BioTeaser({ bio }: { bio?: string }) {
  if (bio) {
    return (
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-2">{bio}</p>
    );
  }
  return (
    <p className="mt-4 text-sm text-muted-foreground/40 italic line-clamp-2">Bio coming soon</p>
  );
}

function ViewProfileHint() {
  return (
    <p className="mt-3 text-xs font-semibold text-ring group-hover:text-ring/80 transition-colors">
      View profile →
    </p>
  );
}

export function BoardCard({ member }: { member: TeamMember }) {
  const { onSelect } = useTeamProfile();
  const { name, pronouns, role, bio, avatar } = member;

  return (
    <button
      type="button"
      onClick={() => onSelect(member)}
      className="poster-card group relative overflow-hidden p-8 flex flex-col gap-6 shadow-soft-lg text-left w-full cursor-pointer transition-shadow hover:shadow-soft-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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

export function CoreCard({ member }: { member: TeamMember }) {
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

      <div className="flex flex-1 flex-col gap-5 overflow-y-auto px-6 md:px-8 lg:px-10 pb-8 min-h-0">
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

        <div className="border-t border-border pt-5">
          {bio ? (
            <div className="space-y-4">
              {bio
                .split(/\n+/)
                .filter(Boolean)
                .map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm md:text-base text-muted-foreground leading-relaxed"
                  >
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

export function TeamProfileProvider({ children }: { children: ReactNode }) {
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
              className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm cursor-default"
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
