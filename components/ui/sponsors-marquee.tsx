import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { getAllSponsors } from "@/constants/sponsors";

const sponsors = getAllSponsors();

export function SponsorsMarquee({ className }: { className?: string }) {
  return (
    <Marquee duration="40s" itemWidth="200px" className={className}>
      {sponsors.map((sponsor) => (
        <a
          key={sponsor.id}
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center h-8 lg:h-10"
          title={sponsor.name}
        >
          <Image
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            width={120}
            height={40}
            className="w-auto h-full object-contain opacity-70 hover:opacity-100 transition-all duration-300 dark:brightness-0 dark:invert"
            style={{
              width: "auto",
              height: "100%",
              ...(sponsor.scale ? { transform: `scale(${sponsor.scale})` } : {}),
            }}
          />
        </a>
      ))}
    </Marquee>
  );
}
