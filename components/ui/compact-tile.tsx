import { TeamAvatar } from "@/components/ui/team-avatar";
import type { TeamMember } from "@/constants/team";

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
