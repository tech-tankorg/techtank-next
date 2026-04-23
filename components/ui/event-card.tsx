"use client";

import { Camera, Calendar, MapPin, Play, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Event } from "@/constants/events";

interface EventCardProps {
  event: Event;
  variant?: "featured" | "compact";
}

export function EventCard({ event, variant = "compact" }: EventCardProps) {
  const isUpcoming = event.status === "upcoming";

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

  if (variant === "featured") {
    return (
      <div className="group relative overflow-hidden rounded-2xl glass">
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant={isUpcoming ? "warning" : "secondary"}>
              {isUpcoming ? "Upcoming" : "Past"}
            </Badge>
            {primaryTag && (
              <span className="ml-auto text-xs text-muted-foreground">{primaryTag}</span>
            )}
          </div>

          <h3 className="font-display text-xl font-bold text-teal-dark mb-2 line-clamp-2">
            {event.title}
          </h3>

          {event.pitch && (
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{event.pitch}</p>
          )}

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1.5">
            <Calendar className="h-4 w-4 shrink-0" />
            <span>{formattedDate}</span>
            {event.time && <span className="text-muted-foreground/60">· {event.time}</span>}
          </div>

          {locationText && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1.5">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>{locationText}</span>
            </div>
          )}

          {sponsorNames && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Tag className="h-4 w-4 shrink-0" />
              <span>Sponsored by {sponsorNames}</span>
            </div>
          )}

          {(event.photoAlbum || event.youtubeVideo) && (
            <div className="flex flex-wrap items-center gap-2">
              {event.photoAlbum && (
                <Badge variant="secondary" asChild>
                  <a href={event.photoAlbum.url} target="_blank" rel="noopener noreferrer" aria-label="View event photos">
                    <Camera className="h-3 w-3" />
                    Photos
                  </a>
                </Badge>
              )}
              {event.youtubeVideo && (
                <Badge variant="secondary" asChild>
                  <a href={event.youtubeVideo.url} target="_blank" rel="noopener noreferrer" aria-label="Watch recap on YouTube">
                    <Play className="h-3 w-3 fill-current" />
                    Recap
                  </a>
                </Badge>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="group relative flex flex-col glass rounded-xl p-4 transition-all duration-300">
      <div className="flex flex-wrap items-center gap-1.5 mb-2">
        <Badge variant={isUpcoming ? "warning" : "secondary"} size="sm">
          {isUpcoming ? "Upcoming" : "Past"}
        </Badge>
        {primaryTag && (
          <span className="ml-auto text-[10px] text-muted-foreground">{primaryTag}</span>
        )}
      </div>

      <h3 className="font-display text-sm font-bold text-teal-dark mb-2 line-clamp-2">
        {event.title}
      </h3>

      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
        <Calendar className="h-3 w-3 shrink-0" />
        <span>{formattedDate}</span>
      </div>

      {locationText && (
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
          <MapPin className="h-3 w-3 shrink-0" />
          <span className="line-clamp-1">{locationText}</span>
        </div>
      )}

      {sponsorNames && (
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
          <Tag className="h-3 w-3 shrink-0" />
          <span className="line-clamp-1">Sponsored by {sponsorNames}</span>
        </div>
      )}

      {(event.photoAlbum || event.youtubeVideo) && (
        <div className="flex flex-wrap items-center gap-1.5 mt-auto pt-1">
          {event.photoAlbum && (
            <Badge variant="secondary" size="sm" asChild>
              <a href={event.photoAlbum.url} target="_blank" rel="noopener noreferrer" aria-label="View event photos">
                <Camera className="h-2.5 w-2.5" />
                Photos
              </a>
            </Badge>
          )}
          {event.youtubeVideo && (
            <Badge variant="secondary" size="sm" asChild>
              <a href={event.youtubeVideo.url} target="_blank" rel="noopener noreferrer" aria-label="Watch recap on YouTube">
                <Play className="h-2.5 w-2.5 fill-current" />
                Recap
              </a>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}
