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
    <Marquee
      speed="normal"
      pauseLabel="Pause scrolling TechTank stats"
      resumeLabel="Resume scrolling TechTank stats"
      className={className}
      gap="xl"
      copies={4}
    >
      {items.map((item) => (
        <div key={item.label} className="flex shrink-0 flex-col items-center text-center">
          <span className="font-display text-xl lg:text-2xl font-bold text-foreground">{item.value}</span>
          <span className="text-xs text-foreground/60 whitespace-nowrap">{item.label}</span>
        </div>
      ))}
    </Marquee>
  );
}
