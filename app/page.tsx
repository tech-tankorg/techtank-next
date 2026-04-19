import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { StatsStrip } from "@/components/ui/stats-strip";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { RoleCard, roleCardsData } from "@/components/ui/role-card";
import { EventCard } from "@/components/ui/event-card";
import { DualCTA } from "@/components/ui/dual-cta";
import { SocialFeed } from "@/components/ui/social-feed";
import { getRecentEvents, getUpcomingEvents } from "@/lib/data/events";

const posterImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Triple%20Speaker%20Poster-pO82lupTezdeLbnG8w0LSc1oubWhSE.png",
    alt: "Lightning Talks at Vena Solutions",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CodeDiversity%20-%20Meetup%20%281%29-M8pGbZSyN18hxvThJEYVprUcgcB5xr.png",
    alt: "CodeDiversity Coffee Chat",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mentorship%20Poster-dFmJatCn5QvqEOVDiIdlSRyBPFAFsq.png",
    alt: "Mentorship Meetup",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brainstation%20-%20Meetup-biF1zd6uLklCH2G07z4bhHDaOaO5KE.png",
    alt: "BrainStation Meetup",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CodeDiversity%20-%20Meetup-0XO3CsPUKalKcJtMdlBSdcyJncN402.png",
    alt: "CodeDiversity Clay Workshop",
  },
];

export default function HomePage() {
  const recentEvents = getRecentEvents(4);
  const upcomingEvents = getUpcomingEvents();
  const featuredEvent = upcomingEvents[0] || recentEvents[0];

  return (
    <>
      {/* Hero Section - Left aligned text, stacked overlapping photos right */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[70vh]">
            {/* Left: Text content */}
            <div className="max-w-xl">
              <span className="tag mb-4">
                Toronto &middot; Monthly &middot; Since 2022
              </span>
              <h1 className="font-display text-4xl font-bold text-teal-dark lg:text-6xl text-balance mb-4 leading-[1.1]">
                Where Toronto tech actually hangs out
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-6 max-w-md">
                Real conversations, genuine connections, zero pretense. Pull up a chair.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="lg" asChild>
                  <a
                    href="https://lu.ma/techtankto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See what&apos;s next
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/how-it-works">Get involved</Link>
                </Button>
              </div>
            </div>

            {/* Right: Stacked overlapping photo collage */}
            <div className="relative h-[420px] lg:h-[520px] hidden md:block">
              {/* Back layer - largest */}
              <div className="absolute top-0 right-0 w-72 lg:w-80 photo-frame rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
                <Image
                  src={posterImages[0].src}
                  alt={posterImages[0].alt}
                  width={320}
                  height={200}
                  className="w-full h-auto"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              {/* Middle layer - offset left */}
              <div className="absolute top-16 right-20 lg:right-28 w-64 lg:w-72 photo-frame -rotate-4 hover:rotate-0 hover:scale-105 transition-all duration-500 z-20">
                <Image
                  src={posterImages[1].src}
                  alt={posterImages[1].alt}
                  width={288}
                  height={180}
                  className="w-full h-auto"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              {/* Front layer - smallest, bottom */}
              <div className="absolute bottom-4 right-4 lg:right-8 w-56 lg:w-64 photo-frame rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 z-30">
                <Image
                  src={posterImages[2].src}
                  alt={posterImages[2].alt}
                  width={256}
                  height={160}
                  className="w-full h-auto"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              {/* Extra accent - peeking from back */}
              <div className="absolute top-28 right-52 lg:right-64 w-48 lg:w-52 photo-frame -rotate-6 opacity-80 z-0">
                <Image
                  src={posterImages[3].src}
                  alt={posterImages[3].alt}
                  width={208}
                  height={130}
                  className="w-full h-auto"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>

            {/* Mobile: Horizontal scroll of posters */}
            <div className="md:hidden -mx-4 px-4">
              <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
                {posterImages.slice(0, 4).map((poster, i) => (
                  <div key={i} className="flex-shrink-0 w-56 snap-center photo-frame">
                    <Image
                      src={poster.src}
                      alt={poster.alt}
                      width={224}
                      height={140}
                      className="w-full h-auto"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip - Compact */}
      <StatsStrip />

      {/* Featured Upcoming Event */}
      {featuredEvent && (
        <Section>
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              overline="Next up"
              title="Don&apos;t miss this one"
              className="mb-6 text-center"
            />
            <EventCard event={featuredEvent} variant="featured" />
          </div>
        </Section>
      )}

      {/* Recent Events Grid */}
      <Section>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-8">
          <SectionHeader
            overline="From the community"
            title="Recent happenings"
            description="A peek at what we&apos;ve been up to."
          />
          <Link
            href="/events"
            className="inline-flex items-center text-sm font-semibold text-coral hover:text-coral/80 transition-colors"
          >
            View all events
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {recentEvents.map((event) => (
            <EventCard key={event.id} event={event} variant="poster" />
          ))}
        </div>
      </Section>

      {/* Social Feed */}
      <Section className="bg-sand/50 texture-grain">
        <SectionHeader
          overline="Follow along"
          title="See what&apos;s happening"
          className="mb-8"
        />
        <SocialFeed />
      </Section>

      {/* Logo Cloud - More compact */}
      <Section className="py-8 lg:py-10">
        <p className="text-center text-xs text-muted mb-6 uppercase tracking-widest font-medium">
          Hosted and supported by
        </p>
        <LogoCloud />
      </Section>

      {/* Ways to Get Involved */}
      <Section className="gradient-brand texture-grain">
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
        <div className="glass rounded-2xl p-6 lg:p-10 text-center max-w-2xl mx-auto shadow-soft-lg">
          <span className="tag-outline mb-4 inline-block text-sm">
            What we&apos;re about
          </span>
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-teal-dark mb-4">
            Community first. Always.
          </h2>
          <p className="text-muted mb-6">
            No gatekeeping, no cliques—just people who genuinely want to learn, share, and lift each other up.
          </p>
          <Button variant="primary" asChild>
            <Link href="/about">More about us</Link>
          </Button>
        </div>
      </Section>

      {/* Dual CTA */}
      <Section className="gradient-brand-vertical texture-grain py-8 lg:py-12">
        <DualCTA />
      </Section>
    </>
  );
}
