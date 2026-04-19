interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className = "h-8 w-auto", variant = "default" }: LogoProps) {
  const fillColor = variant === "light" ? "#FFFFFF" : "#3DC4C0";
  const accentColor = "#F0AA00";

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="TechTank TO Logo"
    >
      {/* Fish body */}
      <ellipse cx="20" cy="22" rx="14" ry="10" fill={fillColor} />
      {/* Fish tail */}
      <path
        d="M6 22C6 22 2 17 4 14C6 11 10 16 10 16"
        fill={fillColor}
      />
      <path
        d="M6 22C6 22 2 27 4 30C6 33 10 28 10 28"
        fill={fillColor}
      />
      {/* Fish eye */}
      <circle cx="28" cy="20" r="2.5" fill={variant === "light" ? "#141926" : "#141926"} />
      <circle cx="28.5" cy="19.5" r="0.75" fill="#FFFFFF" />
      {/* Lightning bolt accent */}
      <path
        d="M18 8L14 18H19L16 28L24 16H18L22 8H18Z"
        fill={accentColor}
      />
    </svg>
  );
}
