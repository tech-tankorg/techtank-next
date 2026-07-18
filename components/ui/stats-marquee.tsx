import { Marquee } from "@/components/ui/marquee";
import { stats } from "@/constants/stats";

const items = [
  { value: stats.events, label: "TechTank events" },
  { value: stats.avgAttendance, label: "Attendees per event" },
  { value: stats.cadence, label: "Cadence" },
  { value: `Since ${stats.since}`, label: "Serving Toronto tech" },
];

export function StatsMarquee({ className }: { className?: string }) {
  return (
    <Marquee duration="25s" itemWidth="300px" copies={5} className={className}>
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center text-center">
          <span className="font-display text-xl font-bold text-foreground lg:text-2xl">{item.value}</span>
          <span className="text-xs whitespace-nowrap text-foreground/60">{item.label}</span>
        </div>
      ))}
    </Marquee>
  );
}
