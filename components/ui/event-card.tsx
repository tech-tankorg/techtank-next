"use client";

import Image from "next/image";
import { Calendar, Clock, MapPin, Users, ExternalLink, Camera, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Event } from "@/lib/data/events";

interface EventCardProps {
  event: Event;
  variant?: "featured" | "compact" | "poster";
}

export function EventCard({ event, variant = "poster" }: EventCardProps) {
  const hasRecap = event.photosUrl || event.youtubeUrl;
  const isUpcoming = event.status === "upcoming";

  // Format date consistently to avoid hydration mismatch
  const dateObj = new Date(event.date + "T12:00:00");
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Toronto",
  });

  // New poster variant - photo-forward design
  if (variant === "poster" && event.posterImage) {
    return (
      <div className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300">
        {/* Poster Image */}
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={event.posterImage}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/90 via-teal-dark/20 to-transparent" />
          
          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm ${
                isUpcoming
                  ? "bg-coral/90 text-white"
                  : "bg-white/90 text-teal-dark"
              }`}
            >
              {isUpcoming ? "Upcoming" : hasRecap ? "Recap Available" : "Past"}
            </span>
          </div>
          
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h4 className="font-display text-xl font-bold text-white mb-2 line-clamp-2">
              {event.title}
            </h4>
            
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/90 mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {event.venue}
              </span>
            </div>
            
            {/* CTA */}
            {isUpcoming && event.rsvpUrl ? (
              <Button variant="primary" size="sm" className="bg-white text-teal-dark hover:bg-white/90" asChild>
                <a href={event.rsvpUrl} target="_blank" rel="noopener noreferrer">
                  RSVP Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            ) : hasRecap ? (
              <div className="flex gap-2">
                {event.photosUrl && (
                  <Button variant="outline" size="sm" className="border-white/50 text-white hover:bg-white/20" asChild>
                    <a href={event.photosUrl} target="_blank" rel="noopener noreferrer">
                      <Camera className="mr-1.5 h-4 w-4" />
                      Photos
                    </a>
                  </Button>
                )}
                {event.youtubeUrl && (
                  <Button variant="outline" size="sm" className="border-white/50 text-white hover:bg-white/20" asChild>
                    <a href={event.youtubeUrl} target="_blank" rel="noopener noreferrer">
                      <Play className="mr-1.5 h-4 w-4" />
                      Watch
                    </a>
                  </Button>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "featured") {
    return (
      <div className="relative overflow-hidden rounded-2xl glass shadow-soft">
        <div className="p-6 lg:p-8">
          {/* Status Badge */}
          <div className="flex items-center justify-between mb-4">
            <span
              className={`tag ${isUpcoming ? "bg-coral" : "bg-teal-dark"}`}
            >
              {isUpcoming ? "Upcoming" : "Recap Available"}
            </span>
            <span className="text-sm font-medium text-muted">
              Event {event.eventNumber}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-teal-dark mb-2">
            {event.title}
          </h3>
          <p className="text-muted mb-6">{event.pitch}</p>

          {/* Event Details */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Calendar className="h-4 w-4 text-coral" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Clock className="h-4 w-4 text-coral" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <MapPin className="h-4 w-4 text-coral" />
              <span>{event.venue}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Users className="h-4 w-4 text-coral" />
              <span>{event.capacity} seats</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="tag-outline text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Host/Sponsor Attribution */}
          {(event.host || event.sponsor) && (
            <div className="flex items-center gap-2 text-sm text-muted mb-6">
              <span>{event.host ? "Hosted by" : "Sponsored by"}</span>
              <span className="font-semibold text-foreground">
                {event.host?.name || event.sponsor?.name}
              </span>
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            {isUpcoming && event.rsvpUrl ? (
              <Button variant="primary" asChild>
                <a
                  href={event.rsvpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RSVP on Luma
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            ) : (
              <>
                {event.photosUrl && (
                  <Button variant="outline" asChild>
                    <a
                      href={event.photosUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Camera className="mr-2 h-4 w-4" />
                      View Photos
                    </a>
                  </Button>
                )}
                {event.youtubeUrl && (
                  <Button variant="outline" asChild>
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
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Compact variant - glass card style
  return (
    <div className="group relative flex flex-col glass rounded-xl p-5 hover:shadow-soft-lg transition-all duration-300">
      {/* Poster thumbnail if available */}
      {event.posterImage && (
        <div className="relative h-32 w-full rounded-lg overflow-hidden mb-4">
          <Image
            src={event.posterImage}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
            isUpcoming
              ? "bg-coral/10 text-coral"
              : hasRecap
              ? "bg-mint/10 text-mint"
              : "bg-muted/10 text-muted"
          }`}
        >
          {isUpcoming ? "Upcoming" : hasRecap ? "Recap" : "Past"}
        </span>
        <span className="text-xs font-medium text-muted">
          {formattedDate}
        </span>
      </div>

      {/* Title */}
      <h4 className="font-display text-lg font-bold text-teal-dark mb-2">
        {event.title}
      </h4>

      {/* Details */}
      <div className="flex flex-wrap gap-3 text-sm text-muted mb-4">
        <span className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" />
          {event.venue}
        </span>
      </div>

      {/* Host Attribution */}
      {(event.host || event.sponsor) && (
        <p className="text-xs text-muted mb-4">
          {event.host ? "Hosted by" : "Sponsored by"}{" "}
          <span className="font-medium text-foreground">{event.host?.name || event.sponsor?.name}</span>
        </p>
      )}

      {/* CTA */}
      <div className="mt-auto pt-4">
        {isUpcoming && event.rsvpUrl ? (
          <Button variant="primary" size="sm" className="w-full" asChild>
            <a href={event.rsvpUrl} target="_blank" rel="noopener noreferrer">
              RSVP on Luma
            </a>
          </Button>
        ) : hasRecap ? (
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a
              href={event.photosUrl || event.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Recap
            </a>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
