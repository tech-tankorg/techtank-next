"use client";

import { Camera, Calendar, MapPin, Play, Tag } from "lucide-react";
import type { Event } from "@/constants/events";

interface EventCardProps {
  event: Event;
  variant?: "featured" | "compact";
}

function RecapPill({
  href,
  size = "md",
}: {
  href: string;
  size?: "sm" | "md";
}) {
  const base =
    "inline-flex items-center gap-1 rounded-full bg-green-600/10 text-green-600 font-semibold uppercase tracking-wider hover:bg-green-600/20 transition-colors";
  const sizeClass =
    size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizeClass}`}
      aria-label="Watch recap on YouTube"
    >
      <Play className={size === "sm" ? "h-2.5 w-2.5 fill-current" : "h-3 w-3 fill-current"} />
      Recap
    </a>
  );
}

function PhotosPill({
  href,
  size = "md",
}: {
  href: string;
  size?: "sm" | "md";
}) {
  const base =
    "inline-flex items-center gap-1 rounded-full bg-blue-600/10 text-blue-600 font-semibold uppercase tracking-wider hover:bg-blue-600/20 transition-colors";
  const sizeClass =
    size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizeClass}`}
      aria-label="View event photos"
    >
      <Camera className={size === "sm" ? "h-2.5 w-2.5" : "h-3 w-3"} />
      Photos
    </a>
  );
}

export function EventCard({ event, variant = "compact" }: EventCardProps) {
  const isUpcoming = event.status === "upcoming";

  // Format date consistently to avoid hydration mismatch
  const dateObj = new Date(event.date + "T12:00:00");
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Toronto",
  });

  const locationText = event.host
    ? `Hosted at ${event.host.name}`
    : event.venue ?? null;

  const sponsorNames = event.sponsors?.map((s) => s.name).join(", ") ?? null;
  const primaryTag = event.tags?.[0] || null;

  // Featured variant - larger card
  if (variant === "featured") {
    return (
      <div className="group relative overflow-hidden rounded-2xl glass">
        <div className="p-6">
          {/* Header: Status badge + Tag */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
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
              <span className="ml-auto text-xs text-muted">{primaryTag}</span>
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
            <div className="flex items-center gap-2 text-sm text-muted mb-1.5">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>{locationText}</span>
            </div>
          )}

          {/* Sponsors */}
          {sponsorNames && (
            <div className="flex items-center gap-2 text-sm text-muted mb-3">
              <Tag className="h-4 w-4 shrink-0" />
              <span>Sponsored by {sponsorNames}</span>
            </div>
          )}

          {/* Pills: Photos + Recap — ordered last */}
          {(event.photoAlbum || event.youtubeVideo) && (
            <div className="flex flex-wrap items-center gap-2">
              {event.photoAlbum && <PhotosPill href={event.photoAlbum.url} />}
              {event.youtubeVideo && <RecapPill href={event.youtubeVideo.url} />}
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
      <div className="flex flex-wrap items-center gap-1.5 mb-2">
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
            isUpcoming ? "bg-coral/10 text-coral" : "bg-muted/10 text-muted"
          }`}
        >
          {isUpcoming ? "Upcoming" : "Past"}
        </span>
        {primaryTag && (
          <span className="ml-auto text-[10px] text-muted">{primaryTag}</span>
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
        <div className="flex items-center gap-1.5 text-xs text-muted mb-1">
          <MapPin className="h-3 w-3 shrink-0" />
          <span className="line-clamp-1">{locationText}</span>
        </div>
      )}

      {/* Sponsors */}
      {sponsorNames && (
        <div className="flex items-center gap-1.5 text-xs text-muted mb-2">
          <Tag className="h-3 w-3 shrink-0" />
          <span className="line-clamp-1">Sponsored by {sponsorNames}</span>
        </div>
      )}

      {/* Pills: Photos + Recap — ordered last */}
      {(event.photoAlbum || event.youtubeVideo) && (
        <div className="flex flex-wrap items-center gap-1.5 mt-auto pt-1">
          {event.photoAlbum && <PhotosPill href={event.photoAlbum.url} size="sm" />}
          {event.youtubeVideo && <RecapPill href={event.youtubeVideo.url} size="sm" />}
        </div>
      )}
    </div>
  );
}
