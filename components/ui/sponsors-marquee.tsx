import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { getAllSponsors } from "@/constants/sponsors";

const sponsors = getAllSponsors();

export function SponsorsMarquee({ className }: { className?: string }) {
  return (
    <Marquee className={className}>
      {sponsors.map((sponsor) => (
        <a
          key={sponsor.id}
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-8 lg:mx-12 shrink-0"
          title={sponsor.name}
        >
          <Image
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            width={120}
            height={40}
            className="h-8 lg:h-10 object-contain opacity-70 hover:opacity-100 transition-all duration-300"
            style={{ width: "auto", ...(sponsor.scale ? { transform: `scale(${sponsor.scale})` } : {}) }}
          />
        </a>
      ))}
    </Marquee>
  );
}
