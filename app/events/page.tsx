import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ExternalLink, Clock, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { EventBrowser } from "@/components/ui/event-browser";
import { DualCTA } from "@/components/ui/dual-cta";
import { ContactCard } from "@/components/ui/contact-card";
import { events } from "@/constants/events";
import { getLumaEvents, getPastLumaEvents } from "./actions";

export const metadata: Metadata = {
  title: "Events",
  description:
    "All TechTank TO events — upcoming meetups and past recaps. Monthly in-person events in Toronto since 2023.",
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
      })
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
  mergedEvents.sort(
    (a, b) => new Date(b.start_at).getTime() - new Date(a.start_at).getTime()
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
                TechTank TO
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground lg:text-6xl text-balance mb-4">
                All Events
              </h1>
              <p className="text-xl text-muted-foreground">
                RSVP to what&apos;s next — and scroll back through the
                talks, photos, and recaps from every meetup we&apos;ve
                hosted since 2023.
              </p>
            </div>
            <div className="shrink-0">
              <p className="text-sm font-semibold text-foreground">
                {mergedEvents.length} EVENTS · SINCE 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Luma Calendar Embed Section */}
      <Section className="bg-[#f7f8f9] dark:bg-[#212325] text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
          Next Up
        </span>
        <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
          Subscribe on Luma
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Subscribe on Luma to get notified when new events are announced.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button variant="primary" asChild>
            <Link href="https://lu.ma/techtank" target="_blank" rel="noopener noreferrer">
              Follow us on Luma
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://meetup.com/techtank-to" target="_blank" rel="noopener noreferrer">
              Follow us on Meetup
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="flex justify-center w-full">
          {/* Light Mode Embed */}
          <iframe
            src="https://lu.ma/embed/calendar/cal-ZopuHimRKxPa5U0/events?lt=light"
            className="w-full md:w-3/4 h-[1200px] sm:h-[1000px] md:h-[900px] lg:h-[800px] block dark:hidden overflow-hidden"
            allowFullScreen
            aria-hidden={false}
            tabIndex={0}
          />
          {/* Dark Mode Embed */}
          <iframe
            src="https://lu.ma/embed/calendar/cal-ZopuHimRKxPa5U0/events?lt=dark"
            className="w-full md:w-3/4 h-[1200px] sm:h-[1000px] md:h-[900px] lg:h-[800px] hidden dark:block overflow-hidden"
            allowFullScreen
            aria-hidden={false}
            tabIndex={0}
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
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
            Get in touch
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Questions about events?
          </h2>
        </div>
        <div className="max-w-xl mx-auto">
          <ContactCard context="For hosting, sponsorship, and media inquiries." />
        </div>
      </Section>
    </>
  );
}
