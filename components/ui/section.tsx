interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-10 lg:py-14 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  overline?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  overline,
  title,
  description,
  className = "",
  align = "left",
}: SectionHeaderProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl ${alignClasses} ${className}`}>
      {overline && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-coral mb-2">
          {overline}
        </span>
      )}
      <h2 className="font-display text-2xl font-bold text-teal-dark lg:text-3xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
