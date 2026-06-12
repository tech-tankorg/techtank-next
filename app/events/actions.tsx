"use server";

import type { Sponsor } from "@/constants/sponsors";
import { z } from "zod";

export interface Event {
  id: string;
  title: string;
  pitch?: string;
  start_at: string;
  venue?: string;
  capacity?: number;
  tags: string[];
  status: "upcoming" | "past";
  /** Event URL — prefers Luma when available, falls back to Meetup */
  eventUrl?: string;
  imagePath?: string;
  albumUrl?: string;
  youtubeUrl?: string;
  host?: Sponsor;
  sponsors?: Sponsor[];
  speakers?: {
    name: string;
    title: string;
    company?: string;
    talkTitle?: string;
    image?: string;
  }[];
}

const CALENDAR_ID = "cal-ZopuHimRKxPa5U0";

const LUMA_EVENT_API = `https://api2.luma.com/calendar/get?api_id=${CALENDAR_ID}`;

const LUMA_EVENT_API_PAST = `https://api2.luma.com/calendar/get-items?calendar_api_id=${CALENDAR_ID}&pagination_limit=20&period=past`;

const SIX_HOURS_IN_SECONDS = 6 * 60 * 60;

const EventSchema = z.object({
  api_id: z.string(),
  event: z.object({
    api_id: z.string(),
    name: z.string(),
    start_at: z.string(),
    end_at: z.string(),
    timezone: z.string(),
    url: z.string(),
    cover_url: z.string().optional(),
  }),
});

const LumaEventApiResponseSchema = z.object({
  featured_items: EventSchema.array(),
});

const LumaPastEventApiResponseSchema = z.object({
  entries: EventSchema.array(),
});

type LumaEventResponse = z.infer<typeof EventSchema>;

function lumaCalendarResponseToEvents(parsed: LumaEventResponse[]): Event[] {
  return parsed.map(({ event }) => ({
    id: event.api_id,
    title: event.name,
    start_at: event.start_at,
    tags: [],
    status:
      Date.now() > new Date(event.start_at).valueOf() ? "past" : "upcoming",
    eventUrl: `https://luma.com/${event.url}`,
    imagePath: event.cover_url,
  }));
}

export async function getLumaEvents(): Promise<Event[]> {
  const res = await fetch(LUMA_EVENT_API, {
    next: {
      // @ts-expect-error this is next cache policy
      cache: "force-cache",
      revalidate: SIX_HOURS_IN_SECONDS,
    },
  });
  const json = await res.json();
  const parsed = LumaEventApiResponseSchema.parse(json);
  return lumaCalendarResponseToEvents(parsed.featured_items);
}

export async function getPastLumaEvents(): Promise<Event[]> {
  const res = await fetch(LUMA_EVENT_API_PAST, {
    next: {
      // @ts-expect-error this is next cache policy
      cache: "force-cache",
      revalidate: SIX_HOURS_IN_SECONDS,
    },
  });
  const json = await res.json();
  const parsed = LumaPastEventApiResponseSchema.parse(json);
  return lumaCalendarResponseToEvents(parsed.entries);
}
