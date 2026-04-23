"use client";

import { Camera, Calendar, MapPin, Play } from "lucide-react";
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

  const locationText = event.host ? event.host.name : (event.venue ?? null);
  const locationUrl = event.host?.url ?? null;

  const TitleWrapper = event.eventUrl
    ? ({ children }: { children: React.ReactNode }) => (
        <a href={event.eventUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {children}
        </a>
      )
    : ({ children }: { children: React.ReactNode }) => <>{children}</>;

  if (variant === "featured") {
    return (
      <div className="group relative overflow-hidden rounded-2xl glass">
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant={isUpcoming ? "warning" : "secondary"}>
              {isUpcoming ? "Upcoming" : "Past"}
            </Badge>
            {event.tags[0] && (
              <span className="ml-auto text-xs text-muted-foreground">{event.tags[0]}</span>
            )}
          </div>

          <h3 className="font-display text-xl font-bold text-foreground mb-2 line-clamp-2">
            <TitleWrapper>{event.title}</TitleWrapper>
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
              {locationUrl ? (
                <a href={locationUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {locationText}
                </a>
              ) : (
                <span>{locationText}</span>
              )}
            </div>
          )}

          {event.sponsors && event.sponsors.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground mb-3">
              {event.sponsors.map((s) => (
                <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {s.name}
                </a>
              ))}
            </div>
          )}

          {(event.albumUrl || event.youtubeUrl) && (
            <div className="flex flex-wrap items-center gap-2">
              {event.albumUrl && (
                <Badge variant="secondary" asChild>
                  <a href={event.albumUrl} target="_blank" rel="noopener noreferrer" aria-label="View event photos">
                    <Camera className="h-3 w-3" />
                    Photos
                  </a>
                </Badge>
              )}
              {event.youtubeUrl && (
                <Badge variant="secondary" asChild>
                  <a href={event.youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="Watch recap on YouTube">
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
        {event.tags[0] && (
          <span className="ml-auto text-[10px] text-muted-foreground">{event.tags[0]}</span>
        )}
      </div>

      <h3 className="font-display text-sm font-bold text-foreground mb-2 line-clamp-2">
        <TitleWrapper>{event.title}</TitleWrapper>
      </h3>

      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
        <Calendar className="h-3 w-3 shrink-0" />
        <span>{formattedDate}</span>
      </div>

      {locationText && (
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
          <MapPin className="h-3 w-3 shrink-0" />
          {locationUrl ? (
            <a href={locationUrl} target="_blank" rel="noopener noreferrer" className="hover:underline line-clamp-1">
              {locationText}
            </a>
          ) : (
            <span className="line-clamp-1">{locationText}</span>
          )}
        </div>
      )}

      {event.sponsors && event.sponsors.length > 0 && (
        <div className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground mb-2">
          {event.sponsors.map((s) => (
            <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline line-clamp-1">
              {s.name}
            </a>
          ))}
        </div>
      )}

      {(event.albumUrl || event.youtubeUrl) && (
        <div className="flex flex-wrap items-center gap-1.5 mt-auto pt-1">
          {event.albumUrl && (
            <Badge variant="secondary" size="sm" asChild>
              <a href={event.albumUrl} target="_blank" rel="noopener noreferrer" aria-label="View event photos">
                <Camera className="h-2.5 w-2.5" />
                Photos
              </a>
            </Badge>
          )}
          {event.youtubeUrl && (
            <Badge variant="secondary" size="sm" asChild>
              <a href={event.youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="Watch recap on YouTube">
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
