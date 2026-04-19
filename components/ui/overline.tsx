interface OverlineProps {
  children: React.ReactNode;
  className?: string;
}

export function Overline({ children, className = "" }: OverlineProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold uppercase tracking-widest text-teal ${className}`}
    >
      {children}
    </span>
  );
}
