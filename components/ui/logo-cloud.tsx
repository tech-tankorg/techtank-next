"use client";

import { getAllSponsors } from "@/lib/data/sponsors";

export function LogoCloud() {
  const sponsors = getAllSponsors();

  // Triple the sponsors for seamless loop
  const marqueeItems = [...sponsors, ...sponsors, ...sponsors];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Marquee track */}
      <div className="flex w-max animate-marquee">
        {marqueeItems.map((sponsor, index) => (
          <a
            key={`${sponsor.id}-${index}`}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-6 lg:mx-10"
            title={sponsor.name}
          >
            <span className="text-base font-semibold text-teal-dark/40 hover:text-teal-dark transition-all duration-300 whitespace-nowrap">
              {sponsor.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
