"use client";

import { getEventStats } from "@/lib/data/events";

export function HeroStatsMarquee() {
  const stats = getEventStats();

  const items = [
    { value: stats.totalEvents, label: "Events hosted" },
    { value: stats.avgAttendance, label: "Attendees per event" },
    { value: stats.cadence, label: "Cadence" },
    { value: `Since ${stats.since}`, label: "Serving Toronto tech" },
  ];

  // Triple the items for seamless loop
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-8 mt-4">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-r from-[#B5DFE0] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-l from-[#F5C9B0] to-transparent z-10 pointer-events-none" />

      {/* Marquee track */}
      <div 
        className="flex w-max animate-marquee"
        style={{ willChange: "transform" }}
      >
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-6 lg:px-10"
          >
            <div className="flex items-center gap-2">
              <span className="font-display text-xl lg:text-2xl font-bold text-teal-dark">
                {item.value}
              </span>
              <span className="text-sm text-teal-dark/60 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
