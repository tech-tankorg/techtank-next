export function BioTeaser({ bio }: { bio?: string }) {
  if (bio) {
    return <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-2">{bio}</p>;
  }
  return <p className="mt-4 text-sm text-muted-foreground/40 italic line-clamp-2">Bio coming soon</p>;
}
