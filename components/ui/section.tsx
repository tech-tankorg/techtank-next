import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/theme";

const sectionVariants = cva("py-10 lg:py-14", {
  variants: {
    background: {
      default: "",
      muted: "bg-muted texture-grain",
      white: "bg-card border-y border-border",
      brand: "gradient-brand texture-grain",
      "brand-soft": "gradient-brand-soft",
      "brand-vertical": "gradient-brand-vertical texture-grain",
    },
  },
  defaultVariants: {
    background: "default",
  },
});

interface SectionProps extends VariantProps<typeof sectionVariants> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, background, className, id }: SectionProps) {
  return (
    <section id={id} className={cn(sectionVariants({ background }), className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

const sectionHeaderVariants = cva("max-w-3xl", {
  variants: {
    align: {
      left: "",
      center: "text-center mx-auto",
    },
  },
  defaultVariants: {
    align: "left",
  },
});

interface SectionHeaderProps extends VariantProps<typeof sectionHeaderVariants> {
  overline?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  overline,
  title,
  description,
  align,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(sectionHeaderVariants({ align }), className)}>
      {overline && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-dark mb-2">
          {overline}
        </span>
      )}
      <h2 className="font-display text-2xl font-bold text-foreground lg:text-3xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
