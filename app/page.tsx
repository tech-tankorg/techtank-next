import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, ExternalLink, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { StatsMarquee } from "@/components/ui/stats-marquee";
import { SponsorsMarquee } from "@/components/ui/sponsors-marquee";
import { RoleCard, roleCardsData } from "@/components/ui/role-card";
import { EventCard } from "@/components/ui/event-card";
import { SocialFeed } from "@/components/ui/social-feed";
import { getRecentEvents } from "@/constants/events";
import {
  getCoverImage,
  getCoverVideo,
  getInstagramPostsByIds,
} from "@/constants/instagram-posts";

function captionToAlt(caption: string): string {
  const firstLine = caption.split("\n")[0] ?? "";
  const stripped = firstLine.replace(/#[^\s]+/g, "").trim();
  return stripped.length > 0 ? stripped : "TechTank Instagram post";
}

export default function HomePage() {
  const allRecentEvents = getRecentEvents(8);
  const featuredEvents = allRecentEvents.slice(0, 2);
  const smallerEvents = allRecentEvents.slice(2, 6);

  const heroPosts = getInstagramPostsByIds([
    "2025-07-07-DLz4I7KOww6", // BBQ season
    "2026-04-10-DW9vcgiPHx",  // Code diversity (Apr 2026)
  ]).map((post) => ({
    id: post.id,
    imageSrc: getCoverImage(post),
    videoSrc: getCoverVideo(post),
    alt: captionToAlt(post.caption),
  }));

  return (
    <>
      {/* Hero Section - Left aligned text, stacked overlapping photos right */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 items-center justify-center lg:justify-start text-center lg:text-left">
            {/* Left: Text content */}
            <div className="lg:max-w-xl py-8 lg:py-12">
              <span className="tag mb-4">
                Toronto &middot; Monthly &middot; Inclusive
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground lg:text-6xl text-balance mb-6">
                Toronto&apos;s home for tech community
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 lg:max-w-md">
                Tech talks, panels, socials, sports, and more—hosted at companies across the city.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/events">See events</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/get-involved">Get involved</Link>
                </Button>
              </div>
            </div>

            {/* Staggered overlapping portrait cards (inline, transform-based) */}
            <div className="flex items-start justify-center pb-8">
              {/* First card — tilted CCW, nudged down */}
              {heroPosts[0] && (
                <div className="relative w-[45%] lg:w-[55%] aspect-[4/5] photo-frame overflow-hidden shadow-xl transition-transform duration-300 -rotate-2 translate-y-6 hover:scale-[1.02]">
                  {heroPosts[0].videoSrc ? (
                    <video
                      src={heroPosts[0].videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : heroPosts[0].imageSrc ? (
                    <Image
                      src={heroPosts[0].imageSrc}
                      alt={heroPosts[0].alt}
                      fill
                      sizes="(min-width: 1024px) 28vw, (min-width: 640px) 44vw, 50vw"
                      className="object-cover"
                    />
                  ) : null}
                </div>
              )}
              {/* Second card — overlaps via negative margin, tilted CW */}
              {heroPosts[1] && (
                <div className="relative w-[45%] lg:w-[55%] aspect-[4/5] -ml-[10%] z-10 photo-frame overflow-hidden shadow-xl transition-transform duration-300 rotate-2 hover:scale-[1.02]">
                  {heroPosts[1].videoSrc ? (
                    <video
                      src={heroPosts[1].videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : heroPosts[1].imageSrc ? (
                    <Image
                      src={heroPosts[1].imageSrc}
                      alt={heroPosts[1].alt}
                      fill
                      sizes="(min-width: 1024px) 28vw, (min-width: 640px) 44vw, 50vw"
                      className="object-cover"
                    />
                  ) : null}
                </div>
              )}
            </div>
          </div>

          {/* Stats Marquee */}
          <StatsMarquee className="py-8 mt-8" />
        </div>
      </section>

      {/* Social Feed */}
      <Section id="community" background="muted">
        <SectionHeader
          overline="From the community"
          title="Real people, real moments"
          className="mb-8"
        />
        <SocialFeed />
      </Section>

      {/* Events Section - Upcoming (large) + Past (small) */}
      <Section>
        <SectionHeader
          overline="Events"
          title="Recent happenings"
          className="mb-6"
        />

        {/* Recent Events - Large featured + smaller cards */}
        <div className="grid gap-4 lg:grid-cols-2 mb-4">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} variant="featured" />
          ))}
        </div>
        <div className="grid gap-3 grid-cols-2 lg:grid-cols-4 mb-8">
          {smallerEvents.map((event) => (
            <EventCard key={event.id} event={event} variant="compact" />
          ))}
        </div>

        {/* Sponsors */}
        <div className="mb-6">
          <p className="text-center text-xs text-muted-foreground mb-4 uppercase tracking-widest font-medium">
            Hosted and supported by
          </p>
          <SponsorsMarquee className="py-4" />
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="primary" size="sm" asChild>
            <a
              href="https://luma.com/techtank"
              target="_blank"
              rel="noopener noreferrer"
            >
              Luma
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/events">
              View all
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Ways to Get Involved */}
      <Section background="brand">
        <SectionHeader
          overline="There&apos;s a spot for you"
          title="Jump in"
          description="TechTank runs on people who show up."
          className="mb-8"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roleCardsData.map((role) => (
            <RoleCard key={role.role} {...role} />
          ))}
        </div>
      </Section>

      {/* Values Teaser */}
      <Section>
        <div className="glass rounded-2xl p-6 lg:p-10 text-center max-w-2xl mx-auto">
          <span className="tag-outline mb-4 inline-block text-sm">
            What we&apos;re about
          </span>
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-teal-dark mb-4">
            Community first. Always.
          </h2>
          <p className="text-muted-foreground mb-6">
            No gatekeeping—just people who genuinely want to learn, share, and lift each other up.
          </p>
          <Button variant="primary" asChild>
            <Link href="/about">More about us</Link>
          </Button>
        </div>
      </Section>

      {/* Two-flow CTA */}
      <Section id="join-us" background="brand-vertical" className="py-8 lg:py-12">
        <SectionHeader
          overline="Take the next step"
          title="Where to next?"
          description="Two ways to plug in right now."
          className="mb-8"
        />
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/events"
            className="group relative overflow-hidden rounded-xl glass p-5 lg:p-6 transition-all hover:scale-[1.01]"
          >
            <Calendar className="absolute top-4 right-4 h-14 w-14 text-teal-dark/10" />
            <div className="relative">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-dark mb-2">
                Show up
              </span>
              <h3 className="font-display text-lg lg:text-xl font-bold text-teal-dark mb-2">
                Upcoming events
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                See what&apos;s coming up and RSVP to the next meetup.
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-teal-dark group-hover:text-amber-dark transition-colors">
                See events
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </div>
          </Link>

          <Link
            href="/get-involved"
            className="group relative overflow-hidden rounded-xl glass p-5 lg:p-6 transition-all hover:scale-[1.01]"
          >
            <Users className="absolute top-4 right-4 h-14 w-14 text-amber-dark/10" />
            <div className="relative">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-dark mb-2">
                Contribute
              </span>
              <h3 className="font-display text-lg lg:text-xl font-bold text-teal-dark mb-2">
                Get involved
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Speak, host, sponsor, or volunteer with the crew.
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-teal-dark group-hover:text-amber-dark transition-colors">
                Pick your path
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </div>
          </Link>
        </div>
      </Section>
    </>
  );
}
