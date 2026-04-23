import { Marquee } from "@/components/ui/marquee";
import { stats } from "@/constants/stats";

const items = [
  { value: stats.events, label: "TechTank events" },
  { value: stats.codeDiversityEvents, label: "CodeDiversity events" },
  { value: stats.avgAttendance, label: "Attendees per event" },
  { value: stats.cadence, label: "Cadence" },
  { value: `Since ${stats.since}`, label: "Serving Toronto tech" },
];

export function StatsMarquee({ className }: { className?: string }) {
  return (
    <Marquee className={className}>
      {items.map((item) => (
        <div key={item.label} className="shrink-0 px-10 lg:px-16">
          <div className="flex flex-col items-center text-center">
            <span className="font-display text-xl lg:text-2xl font-bold text-foreground">
              {item.value}
            </span>
            <span className="text-xs text-foreground/60 whitespace-nowrap">
              {item.label}
            </span>
          </div>
        </div>
      ))}
    </Marquee>
  );
}
