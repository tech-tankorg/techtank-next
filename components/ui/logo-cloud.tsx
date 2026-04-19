"use client";

import Image from "next/image";
import { getAllSponsors } from "@/lib/data/sponsors";

export function LogoCloud() {
  const sponsors = getAllSponsors();

  // Triple the sponsors for seamless loop
  const marqueeItems = [...sponsors, ...sponsors, ...sponsors];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Marquee track */}
      <div className="flex w-max animate-marquee items-center">
        {marqueeItems.map((sponsor, index) => (
          <a
            key={`${sponsor.id}-${index}`}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-8 lg:mx-12 flex-shrink-0"
            title={sponsor.name}
          >
            <Image
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              width={120}
              height={40}
              className="h-8 lg:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300"
              style={sponsor.scale ? { transform: `scale(${sponsor.scale})` } : undefined}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
