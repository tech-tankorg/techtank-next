import React from "react";
import { cn } from "@/utils/theme";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  itemWidth?: string;
  duration?: string;
  copies?: number;
}

export function Marquee({
  children,
  className,
  itemWidth = "250px",
  duration = "25s",
  copies = 2,
}: MarqueeProps) {
  const childArray = React.Children.toArray(children);

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div
        className="flex w-max marquee-track"
        style={
          {
            "--marquee-duration": duration,
            "--marquee-copies": copies,
          } as React.CSSProperties
        }
      >
        {Array.from({ length: copies }).map((_, copyIndex) => (
          <div
            key={copyIndex}
            className="flex flex-none"
            aria-hidden={copyIndex > 0 || undefined}
          >
            {childArray.map((child, i) => (
              <div
                key={i}
                className="flex-none flex items-center justify-center px-8"
                style={{ width: itemWidth }}
              >
                {child}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
