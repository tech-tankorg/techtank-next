"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { THEMES } from "@/constants/theme";

type LumaCalendarEmbedProps = {
  calendarId: string;
  className?: string;
};

export function LumaCalendarEmbed({ calendarId, className }: LumaCalendarEmbedProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={className} />;
  }

  const lt = resolvedTheme === THEMES.DARK ? THEMES.DARK : THEMES.LIGHT;

  return (
    <iframe
      key={lt}
      allowFullScreen
      className={className}
      title="TechTank TO events calendar"
      src={`https://lu.ma/embed/calendar/${calendarId}/events?lt=${lt}`}
    />
  );
}
