import { getEventStats } from "@/constants/events";

export function StatsStrip() {
  const stats = getEventStats();

  const items = [
    { value: stats.totalEvents, label: "Events hosted" },
    { value: stats.avgAttendance, label: "Attendees per event" },
    { value: stats.cadence, label: "Cadence" },
    { value: `Since ${stats.since}`, label: "Serving Toronto tech" },
  ];

  return (
    <div className="relative bg-teal-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8 lg:py-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <p className="font-display text-2xl lg:text-4xl font-bold text-white">
                {item.value}
              </p>
              <p className="mt-1 text-xs lg:text-sm text-seafoam">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
