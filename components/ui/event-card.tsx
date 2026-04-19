"use client";

import { Calendar, MapPin } from "lucide-react";
import type { Event } from "@/lib/data/events";
import { getAllSponsors } from "@/lib/data/sponsors";

interface EventCardProps {
  event: Event;
  variant?: "featured" | "compact";
}

export function EventCard({ event, variant = "compact" }: EventCardProps) {
  const isUpcoming = event.status === "upcoming";
  const sponsors = getAllSponsors();

  // Format date consistently to avoid hydration mismatch
  const dateObj = new Date(event.date + "T12:00:00");
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Toronto",
  });

  // Determine location text based on sponsor vs host vs venue
  // Check if the host/sponsor is a "sponsor" type in sponsors list
  const getLocationText = () => {
    if (event.sponsor) {
      return `Sponsored by ${event.sponsor.name}`;
    }
    if (event.host) {
      // Check if this host is a "sponsor" type in our sponsors list
      const sponsorMatch = sponsors.find(
        (s) => s.name.toLowerCase() === event.host?.name.toLowerCase()
      );
      if (sponsorMatch?.type === "sponsor") {
        return `Sponsored by ${event.host.name}`;
      }
      return `Hosted at ${event.host.name}`;
    }
    if (event.venue) {
      return event.venue;
    }
    return null;
  };

  const locationText = getLocationText();
  const primaryTag = event.tags?.[0] || null;

  // Featured variant - larger card
  if (variant === "featured") {
    return (
      <div className="group relative overflow-hidden rounded-2xl glass">
        <div className="p-6">
          {/* Header: Status badge + Tag */}
          <div className="flex items-center justify-between mb-3">
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                isUpcoming
                  ? "bg-coral/10 text-coral"
                  : "bg-muted/10 text-muted"
              }`}
            >
              {isUpcoming ? "Upcoming" : "Past"}
            </span>
            {primaryTag && (
              <span className="text-xs text-muted">{primaryTag}</span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-display text-xl font-bold text-teal-dark mb-2 line-clamp-2">
            {event.title}
          </h3>

          {/* Description */}
          {event.pitch && (
            <p className="text-sm text-muted mb-3 line-clamp-2">
              {event.pitch}
            </p>
          )}

          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-muted mb-1.5">
            <Calendar className="h-4 w-4 shrink-0" />
            <span>{formattedDate}</span>
            {event.time && (
              <span className="text-muted/60">· {event.time}</span>
            )}
          </div>

          {/* Location */}
          {locationText && (
            <div className="flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>{locationText}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Compact variant - smaller card
  return (
    <div className="group relative flex flex-col glass rounded-xl p-4 transition-all duration-300">
      {/* Header: Status badge + Tag */}
      <div className="flex items-center justify-between mb-2">
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
            isUpcoming ? "bg-coral/10 text-coral" : "bg-muted/10 text-muted"
          }`}
        >
          {isUpcoming ? "Upcoming" : "Past"}
        </span>
        {primaryTag && (
          <span className="text-[10px] text-muted">{primaryTag}</span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-display text-sm font-bold text-teal-dark mb-2 line-clamp-2">
        {event.title}
      </h3>

      {/* Date */}
      <div className="flex items-center gap-1.5 text-xs text-muted mb-1">
        <Calendar className="h-3 w-3 shrink-0" />
        <span>{formattedDate}</span>
      </div>

      {/* Location */}
      {locationText && (
        <div className="flex items-center gap-1.5 text-xs text-muted">
          <MapPin className="h-3 w-3 shrink-0" />
          <span className="line-clamp-1">{locationText}</span>
        </div>
      )}
    </div>
  );
}
