import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ExternalLink, Camera, Play, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { EventCard } from "@/components/ui/event-card";
import { DualCTA } from "@/components/ui/dual-cta";
import { ContactCard } from "@/components/ui/contact-card";
import { getUpcomingEvents, getPastEvents, events } from "@/lib/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "All TechTank TO events — upcoming meetups and past recaps. Monthly in-person events in Toronto since 2022.",
};

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();
  const nextEvent = upcomingEvents[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
                TechTank TO
              </span>
              <h1 className="font-display text-4xl font-semibold text-foreground lg:text-5xl text-balance mb-4">
                All Events
              </h1>
              <p className="text-xl text-muted">
                Every TechTank meetup — most recent first.
              </p>
            </div>
            <div className="shrink-0">
              <p className="text-sm font-semibold text-foreground">
                {events.length} EVENTS · SINCE 2022
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Up */}
      {nextEvent && (
        <Section className="pt-0">
          <SectionHeader overline="Next up" title="" className="mb-8" />
          <div className="rounded-2xl bg-white border border-border overflow-hidden">
            <div className="p-6 lg:p-8">
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Main content */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-semibold uppercase tracking-wider">
                      Upcoming
                    </span>
                    <span className="text-sm font-medium text-muted">
                      Event {nextEvent.eventNumber}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-3">
                    {nextEvent.title}
                  </h2>
                  <p className="text-muted mb-6">{nextEvent.pitch}</p>

                  {/* Event details */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Calendar className="h-4 w-4 text-teal" />
                      <span>
                        {new Date(nextEvent.date).toLocaleDateString("en-CA", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Clock className="h-4 w-4 text-teal" />
                      <span>{nextEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <MapPin className="h-4 w-4 text-teal" />
                      <span>{nextEvent.venue}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Users className="h-4 w-4 text-teal" />
                      <span>{nextEvent.capacity} seats</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {nextEvent.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-background text-xs font-medium text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  {nextEvent.rsvpUrl && (
                    <Button variant="primary" size="lg" asChild>
                      <a
                        href={nextEvent.rsvpUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        RSVP on Luma
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>

                {/* Supported by */}
                <div className="lg:border-l lg:border-border lg:pl-8">
                  {nextEvent.host ? (
                    <div>
                      <p className="text-sm text-muted mb-3">Supported by</p>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-lg bg-background flex items-center justify-center text-lg font-semibold text-muted">
                          {nextEvent.host.name[0]}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {nextEvent.host.name}
                          </p>
                          <p className="text-sm text-muted">Host venue</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-amber/5 rounded-xl border border-amber/20 p-4">
                      <p className="text-sm font-medium text-foreground mb-2">
                        Looking for a host
                      </p>
                      <p className="text-sm text-muted mb-3">
                        Want to bring TechTank to your space?
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/how-it-works/host">Learn about hosting</Link>
                      </Button>
                    </div>
                  )}

                  {/* Speaker */}
                  {nextEvent.speakers && nextEvent.speakers.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-sm text-muted mb-3">Speaker</p>
                      {nextEvent.speakers.map((speaker, index) => (
                        <div key={index}>
                          <p className="font-semibold text-foreground">
                            {speaker.name}
                          </p>
                          <p className="text-sm text-muted">{speaker.title}</p>
                          <p className="text-sm text-teal mt-1">
                            {speaker.talkTitle}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Luma Calendar Embed */}
      <Section className="bg-white border-y border-border">
        <SectionHeader
          overline="Calendar"
          title="Subscribe to stay updated"
          className="mb-8"
        />
        <div className="rounded-xl border border-border bg-background p-8 text-center">
          <Calendar className="h-12 w-12 text-teal mx-auto mb-4" />
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
            Luma Calendar
          </h3>
          <p className="text-muted mb-6 max-w-md mx-auto">
            Subscribe to our Luma calendar to get notified when new events are
            announced.
          </p>
          <Button variant="primary" asChild>
            <a
              href="https://luma.com/techtank"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Luma
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </Section>

      {/* Past Events */}
      <Section>
        <SectionHeader
          overline="Past events"
          title="Event archive"
          description="Explore recaps from previous TechTank meetups."
          className="mb-12"
        />

        <div className="space-y-6">
          {pastEvents.map((event) => {
            const hasRecap = event.photosUrl || event.youtubeUrl;
            const formattedDate = new Date(event.date).toLocaleDateString(
              "en-CA",
              {
                month: "short",
                day: "numeric",
                year: "numeric",
              }
            );

            return (
              <div
                key={event.id}
                className="bg-white rounded-xl border border-border p-6 lg:p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Event info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-muted/10 text-muted"
                      >
                        Past
                      </span>
                      <span className="text-sm text-muted">
                        Event {event.eventNumber} · {formattedDate}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted mb-4">{event.pitch}</p>

                    {/* Details */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {event.venue}
                      </span>
                      {event.host && (
                        <span>
                          Hosted by{" "}
                          <span className="text-foreground font-medium">
                            {event.host.name}
                          </span>
                        </span>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-background text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recap CTAs */}
                  {hasRecap && (
                    <div className="flex flex-wrap gap-3 shrink-0">
                      {event.photosUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={event.photosUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Camera className="mr-2 h-4 w-4" />
                            Photos
                          </a>
                        </Button>
                      )}
                      {event.youtubeUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={event.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Play className="mr-2 h-4 w-4" />
                            Watch Talk
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Dual CTA */}
      <Section className="gradient-brand-soft">
        <DualCTA />
      </Section>

      {/* Contact */}
      <Section>
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
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
