import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { getAllSponsors } from "@/constants/sponsors";

import { cn } from "@/utils/theme";

const sponsors = getAllSponsors();

export function SponsorsMarquee({ className }: { className?: string }) {
  return (
    <Marquee className={cn("[--marquee-duration:40s]", className)}>
      {sponsors.map((sponsor) => (
        <a
          key={sponsor.id}
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-8 lg:mx-12 shrink-0 min-w-32 flex items-center justify-center"
          title={sponsor.name}
        >
          <Image
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            width={120}
            height={40}
            className="h-8 lg:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 dark:brightness-0 dark:invert"
            style={sponsor.scale ? { transform: `scale(${sponsor.scale})` } : undefined}
          />
        </a>
      ))}
    </Marquee>
  );
}
