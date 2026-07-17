import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LumaIcon, MeetupIcon } from "@/components/ui/icons";
import { Section, SectionHeader } from "@/components/ui/section";
import { EventBrowser } from "@/components/ui/event-browser";
import { DualCTA } from "@/components/ui/dual-cta";
import { ContactCard } from "@/components/ui/contact-card";
import { events } from "@/constants/events";
import { getLumaEvents, getPastLumaEvents } from "./actions";

export const metadata: Metadata = {
  title: "Events",
  description:
    "All TechTank TO events — upcoming meetups and past recaps. Year-round in-person events in Toronto since 2023.",
};

export default async function EventsPage() {
  const lumaEvents = await getLumaEvents();
  const pastLumaEvents = await getPastLumaEvents();
  const allLumaEvents = [...lumaEvents, ...pastLumaEvents];

  const staticLumaSlugs = new Set(
    events
      .filter((e) => e.eventUrl?.includes("lu.ma/") || e.eventUrl?.includes("luma.com/"))
      .map((e) => {
        const url = e.eventUrl!;
        const parts = url.split("/");
        return parts[parts.length - 1].split("?")[0];
      }),
  );

  const mergedEvents = [...events];
  for (const lumaEvent of allLumaEvents) {
    if (!lumaEvent.eventUrl) continue;
    const parts = lumaEvent.eventUrl.split("/");
    const slug = parts[parts.length - 1].split("?")[0];

    if (!staticLumaSlugs.has(slug)) {
      mergedEvents.push(lumaEvent);
    }
  }

  // Sort descending by date
  mergedEvents.sort((a, b) => new Date(b.start_at).getTime() - new Date(a.start_at).getTime());

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero texture-grain relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="mb-4 inline-block text-xs font-semibold tracking-widest text-ring uppercase">
                TechTank TO
              </span>
              <h1 className="mb-4 font-display text-4xl font-semibold text-balance text-foreground md:text-5xl lg:text-6xl">
                All Events
              </h1>
              <p className="text-xl text-muted-foreground">
                RSVP to what&apos;s next — and scroll back through the talks, photos, and recaps from every meetup
                we&apos;ve hosted since 2023.
              </p>
            </div>
            <div className="shrink-0">
              <p className="text-sm font-semibold text-foreground">{mergedEvents.length} EVENTS · SINCE 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Luma Calendar Embed Section */}
      <Section className="bg-[#f7f8f9] text-center dark:bg-[#212325]">
        <span className="mb-4 inline-block text-xs font-semibold tracking-widest text-ring uppercase">Next Up</span>
        <h2 className="mb-6 font-display text-3xl font-semibold text-foreground">Subscribe on Luma</h2>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          Subscribe on Luma to get notified when new events are announced.
        </p>
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <Button variant="primary" asChild>
            <Link href="https://lu.ma/techtank" target="_blank" rel="noopener noreferrer">
              <LumaIcon className="mr-2 size-4" />
              Follow us on Luma
              <ExternalLink className="ml-2 size-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://meetup.com/techtank-to" target="_blank" rel="noopener noreferrer">
              <MeetupIcon className="mr-2 size-4" />
              Follow us on Meetup
              <ExternalLink className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
        <div className="flex w-full justify-center">
          {/* Light Mode Embed */}
          <iframe
            title="TechTank TO events calendar"
            src="https://lu.ma/embed/calendar/cal-ZopuHimRKxPa5U0/events?lt=light"
            className="block h-300 w-full overflow-hidden sm:h-250 md:h-225 md:w-3/4 lg:h-200 dark:hidden"
            allowFullScreen
          />
          {/* Dark Mode Embed */}
          <iframe
            title="TechTank TO events calendar"
            src="https://lu.ma/embed/calendar/cal-ZopuHimRKxPa5U0/events?lt=dark"
            className="hidden h-300 w-full overflow-hidden sm:h-250 md:h-225 md:w-3/4 lg:h-200 dark:block"
            allowFullScreen
          />
        </div>
      </Section>

      {/* All Events */}
      <Section>
        <SectionHeader
          overline="All events"
          title="Event archive"
          description="Browse, filter, and search all TechTank meetups."
          className="mb-12"
        />
        <EventBrowser events={mergedEvents} />
      </Section>

      {/* Dual CTA */}
      <Section background="brand-soft">
        <DualCTA />
      </Section>

      {/* Contact */}
      <Section>
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="mb-4 inline-block text-xs font-semibold tracking-widest text-ring uppercase">
            Get in touch
          </span>
          <h2 className="mb-4 font-display text-3xl font-semibold text-foreground">Questions about events?</h2>
        </div>
        <div className="mx-auto max-w-xl">
          <ContactCard context="For hosting, sponsorship, and media inquiries." />
        </div>
      </Section>
    </>
  );
}
