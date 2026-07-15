"use client";

import { useState, useMemo, useEffect } from "react";
import { LayoutGrid, List, Columns2, Calendar, MapPin, Camera, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/ui/event-card";
import { cn } from "@/utils/theme";
import type { Event } from "@/app/events/actions";
import Image from "next/image";

type CategoryFilter = "all" | "tech-talks" | "coffee-chats" | "socials" | "sports" | "other";
type DisplayMode = "cards" | "grid" | "list";

const CATEGORY_TAGS: Record<Exclude<CategoryFilter, "all" | "other">, string[]> = {
  "tech-talks": ["Tech Talk", "Panel", "Workshop"],
  "coffee-chats": ["Coffee Chat"],
  socials: ["Social"],
  sports: ["Sports"],
};

function matchesCategory(event: Event, cat: CategoryFilter): boolean {
  if (cat === "all") return true;
  if (cat === "other") {
    return !Object.values(CATEGORY_TAGS)
      .flat()
      .some((t) => event.tags.includes(t));
  }
  const required = CATEGORY_TAGS[cat];
  if (cat === "socials") {
    return event.tags.includes("Social") && !event.tags.includes("CodeDiversity") && !event.tags.includes("Sports");
  }
  return required.some((t) => event.tags.includes(t));
}

interface EventBrowserProps {
  events: Event[];
}

const PAGE_SIZE = 20;

export function EventBrowser({ events }: EventBrowserProps) {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [displayMode, setDisplayMode] = useState<DisplayMode>("cards");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    let result = events.filter((e) => {
      if (!matchesCategory(e, category)) return false;
      return true;
    });

    result = result.sort((a, b) => {
      if (a.status !== b.status) return a.status === "upcoming" ? -1 : 1;
      const diff = new Date(a.start_at).getTime() - new Date(b.start_at).getTime();
      return a.status === "upcoming" ? diff : -diff;
    });

    return result;
  }, [events, category]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [category]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const categories: { id: CategoryFilter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "tech-talks", label: "Tech Talks" },
    { id: "coffee-chats", label: "Coffee Chats" },
    { id: "socials", label: "Socials" },
    { id: "sports", label: "Sports" },
    { id: "other", label: "Other" },
  ];

  return (
    <div>
      {/* Controls */}
      <div className="rounded-2xl md:rounded-full bg-card border border-border p-4 md:p-3 flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-1">
          {categories.map((c) => (
            <Button
              key={c.id}
              variant="nav"
              size="sm"
              isActive={category === c.id}
              onClick={() => setCategory(c.id)}
              className="cursor-pointer"
            >
              {c.label}
            </Button>
          ))}
        </div>

        {/* Display mode */}
        <div className="flex items-center gap-0.5 rounded-full bg-muted p-1 shrink-0">
          <button
            onClick={() => setDisplayMode("cards")}
            className={cn(
              "p-1.5 rounded-full transition-colors cursor-pointer",
              displayMode === "cards"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
            aria-label="Cards view"
          >
            <Columns2 className="h-4 w-4" />
          </button>
          <button
            onClick={() => setDisplayMode("grid")}
            className={cn(
              "p-1.5 rounded-full transition-colors cursor-pointer",
              displayMode === "grid"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
            aria-label="Grid view"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            onClick={() => setDisplayMode("list")}
            className={cn(
              "p-1.5 rounded-full transition-colors cursor-pointer",
              displayMode === "list"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
            aria-label="List view"
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Result count */}
      <p className="text-xs text-muted-foreground mb-6 text-center">
        {filtered.length} event{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Events */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">No events match the current filters.</div>
      ) : displayMode === "cards" ? (
        <CardsView events={visible} />
      ) : displayMode === "grid" ? (
        <GridView events={visible} />
      ) : (
        <ListView events={visible} />
      )}

      {hasMore && (
        <div className="mt-8 text-center">
          <Button variant="outline" onClick={() => setVisibleCount((n) => n + PAGE_SIZE)} className="cursor-pointer">
            Load more ({filtered.length - visibleCount} remaining)
          </Button>
        </div>
      )}
    </div>
  );
}

function CardsView({ events }: { events: Event[] }) {
  return (
    <>
      <div className="grid gap-4 lg:grid-cols-2 mb-4">
        {events.slice(0, 2).map((e) => (
          <EventCard key={e.id} event={e} variant="featured" />
        ))}
      </div>
      {events.length > 2 && (
        <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
          {events.slice(2).map((e) => (
            <EventCard key={e.id} event={e} variant="compact" />
          ))}
        </div>
      )}
    </>
  );
}

function GridView({ events }: { events: Event[] }) {
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {events.map((event) => {
        const img = event.imagePath;
        const isUpcoming = event.status === "upcoming";
        const dateObj = new Date(event.start_at);
        const formattedDate = dateObj.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          timeZone: "America/Toronto",
        });
        const locationText = event.host ? event.host.name : (event.venue ?? null);
        const locationUrl = event.host?.url ?? null;

        return (
          <div key={event.id} className="group relative overflow-hidden rounded-xl aspect-square bg-muted">
            {img ? (
              <Image
                src={img}
                alt={event.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="h-full w-full gradient-brand" />
            )}

            {/* Always-visible overlay */}
            <div className="absolute inset-0 gradient-overlay-brand flex flex-col justify-end p-3 gap-1">
              <Badge variant={isUpcoming ? "warning" : "secondary"} size="sm" className="self-start">
                {isUpcoming ? "Upcoming" : "Past"}
              </Badge>
              {event.tags[0] && <span className="text-[10px] text-white">{event.tags[0]}</span>}

              <p className="text-white text-xs font-semibold line-clamp-2 leading-snug">
                {event.eventUrl ? (
                  <a href={event.eventUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {event.title}
                  </a>
                ) : (
                  event.title
                )}
              </p>

              <div className="flex items-center gap-1 text-[10px] text-white/70">
                <Calendar className="h-2.5 w-2.5 shrink-0" />
                <span>{formattedDate}</span>
              </div>

              {locationText && (
                <div className="flex items-center gap-1 text-[10px] text-white/70">
                  <MapPin className="h-2.5 w-2.5 shrink-0" />
                  {locationUrl ? (
                    <a
                      href={locationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline truncate"
                    >
                      {locationText}
                    </a>
                  ) : (
                    <span className="truncate">{locationText}</span>
                  )}
                </div>
              )}

              {(event.albumUrl || event.youtubeUrl) && (
                <div className="flex flex-wrap gap-1 pt-0.5">
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
                      <a href={event.youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="Watch recap">
                        <Play className="h-2.5 w-2.5 fill-current" />
                        Recap
                      </a>
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ListView({ events }: { events: Event[] }) {
  return (
    <div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
      {events.map((event) => {
        const dateObj = new Date(event.start_at);
        const formattedDate = dateObj.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          timeZone: "America/Toronto",
        });
        const location = event.host ? event.host.name : event.venue;

        return (
          <div key={event.id} className="flex items-center gap-4 px-4 py-3 bg-card hover:bg-muted/50 transition-colors">
            <div className="shrink-0 w-20 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 inline mr-1" />
              {formattedDate}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {event.eventUrl ? (
                  <a href={event.eventUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {event.title}
                  </a>
                ) : (
                  event.title
                )}
              </p>
              {location && (
                <p className="text-xs text-muted-foreground truncate">
                  <MapPin className="h-2.5 w-2.5 inline mr-0.5" />
                  {event.host ? (
                    <a href={event.host.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {location}
                    </a>
                  ) : (
                    location
                  )}
                </p>
              )}
            </div>

            <div className="shrink-0 flex items-center gap-2">
              {event.tags[0] && (
                <span className="hidden sm:inline text-[10px] text-muted-foreground">{event.tags[0]}</span>
              )}
              <Badge variant={event.status === "upcoming" ? "warning" : "secondary"} size="sm">
                {event.status === "upcoming" ? "Upcoming" : "Past"}
              </Badge>
              {event.albumUrl && (
                <a
                  href={event.albumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Camera className="h-3.5 w-3.5" />
                </a>
              )}
              {event.youtubeUrl && (
                <a
                  href={event.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Play className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
