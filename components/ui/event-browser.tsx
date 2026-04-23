"use client";

import { useState, useMemo, useEffect } from "react";
import { LayoutGrid, List, Columns2, Calendar, Tag, MapPin, Camera, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/ui/event-card";
import { cn } from "@/utils/theme";
import type { Event } from "@/constants/events";

type CategoryFilter = "all" | "tech-talks" | "code-diversity" | "socials" | "sports" | "other";
type TimeFilter = "all" | "upcoming" | "past";
type DisplayMode = "cards" | "grid" | "list";
type SortBy = "date" | "title";

const CATEGORY_TAGS: Record<Exclude<CategoryFilter, "all" | "other">, string[]> = {
  "tech-talks": ["Tech Talk", "Panel", "Workshop"],
  "code-diversity": ["CodeDiversity"],
  "socials": ["Social"],
  "sports": ["Sports"],
};

function matchesCategory(event: Event, cat: CategoryFilter): boolean {
  if (cat === "all") return true;
  if (cat === "other") {
    return !Object.values(CATEGORY_TAGS).flat().some((t) => event.tags.includes(t));
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
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("all");
  const [displayMode, setDisplayMode] = useState<DisplayMode>("cards");
  const [sortBy, setSortBy] = useState<SortBy>("date");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    let result = events.filter((e) => {
      if (!matchesCategory(e, category)) return false;
      if (timeFilter === "upcoming") return e.status === "upcoming";
      if (timeFilter === "past") return e.status === "past";
      return true;
    });

    if (sortBy === "date") {
      result = result.sort((a, b) => {
        if (a.status !== b.status) return a.status === "upcoming" ? -1 : 1;
        const diff = new Date(a.date).getTime() - new Date(b.date).getTime();
        return a.status === "upcoming" ? diff : -diff;
      });
    } else {
      result = result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [events, category, timeFilter, sortBy]);

  useEffect(() => { setVisibleCount(PAGE_SIZE); }, [category, timeFilter, sortBy]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;


  const categories: { id: CategoryFilter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "tech-talks", label: "Tech Talks" },
    { id: "code-diversity", label: "Code Diversity" },
    { id: "socials", label: "Socials" },
    { id: "sports", label: "Sports" },
    { id: "other", label: "Other" },
  ];

  const timeFilters: { id: TimeFilter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "upcoming", label: "Upcoming" },
    { id: "past", label: "Past" },
  ];

  return (
    <div>
      {/* Controls */}
      <div className="rounded-xl bg-card border border-border p-4 flex flex-col gap-4 mb-8">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                category === c.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Time filter + display mode + sort */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-1.5">
            {timeFilters.map((t) => (
              <button
                key={t.id}
                onClick={() => setTimeFilter(t.id)}
                className={cn(
                  "px-3 py-1 rounded-md text-xs font-medium transition-colors",
                  timeFilter === t.id
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Sort */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <button
                onClick={() => setSortBy("date")}
                className={cn(
                  "px-3 py-1 rounded-md text-xs font-medium transition-colors",
                  sortBy === "date" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                Date
              </button>
              <button
                onClick={() => setSortBy("title")}
                className={cn(
                  "px-3 py-1 rounded-md text-xs font-medium transition-colors",
                  sortBy === "title" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                Title
              </button>
            </div>

            {/* Display mode */}
            <div className="flex items-center gap-0.5 rounded-lg bg-muted p-0.5">
              <button
                onClick={() => setDisplayMode("cards")}
                className={cn(
                  "p-1.5 rounded-md transition-colors",
                  displayMode === "cards" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="Cards view"
              >
                <Columns2 className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setDisplayMode("grid")}
                className={cn(
                  "p-1.5 rounded-md transition-colors",
                  displayMode === "grid" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="Grid view"
              >
                <LayoutGrid className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setDisplayMode("list")}
                className={cn(
                  "p-1.5 rounded-md transition-colors",
                  displayMode === "list" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="List view"
              >
                <List className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Result count */}
      <p className="text-xs text-muted-foreground mb-6 text-center">
        {filtered.length} event{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Events */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          No events match the current filters.
        </div>
      ) : displayMode === "cards" ? (
        <CardsView events={visible} />
      ) : displayMode === "grid" ? (
        <GridView events={visible} />
      ) : (
        <ListView events={visible} />
      )}

      {hasMore && (
        <div className="mt-8 text-center">
          <Button variant="outline" onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}>
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
    <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {events.map((event) => {
        const img = event.imagePath;
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

        return (
          <div key={event.id} className="group relative overflow-hidden rounded-xl aspect-square bg-muted">
            {img ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={img}
                alt={event.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="h-full w-full gradient-brand" />
            )}

            {/* Always-visible overlay */}
            <div className="absolute inset-0 gradient-overlay-brand flex flex-col justify-end p-3 gap-1">
              <Badge variant={isUpcoming ? "warning" : "secondary"} size="sm" className="self-start">
                {isUpcoming ? "Upcoming" : "Past"}
              </Badge>
              {event.tags[0] && (
                <span className="text-[10px] text-white">{event.tags[0]}</span>
              )}

              <p className="text-white text-xs font-semibold line-clamp-2 leading-snug">
                {event.eventUrl ? (
                  <a href={event.eventUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {event.title}
                  </a>
                ) : event.title}
              </p>

              <div className="flex items-center gap-1 text-[10px] text-white/70">
                <Calendar className="h-2.5 w-2.5 shrink-0" />
                <span>{formattedDate}</span>
              </div>

              {locationText && (
                <div className="flex items-center gap-1 text-[10px] text-white/70">
                  <MapPin className="h-2.5 w-2.5 shrink-0" />
                  {locationUrl ? (
                    <a href={locationUrl} target="_blank" rel="noopener noreferrer" className="hover:underline truncate">
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
        const dateObj = new Date(event.date + "T12:00:00");
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
                ) : event.title}
              </p>
              {location && (
                <p className="text-xs text-muted-foreground truncate">
                  <MapPin className="h-2.5 w-2.5 inline mr-0.5" />
                  {event.host ? (
                    <a href={event.host.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {location}
                    </a>
                  ) : location}
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
                <a href={event.albumUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Camera className="h-3.5 w-3.5" />
                </a>
              )}
              {event.youtubeUrl && (
                <a href={event.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
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
