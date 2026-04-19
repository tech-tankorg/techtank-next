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
import { getRecentEvents } from "@/lib/data/events";

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
  const allRecentEvents = getRecentEvents(6);
  const featuredEvents = allRecentEvents.slice(0, 2);
  const smallerEvents = allRecentEvents.slice(2, 6);

  return (
    <>
      {/* Hero Section - Left aligned text, stacked overlapping photos right */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 items-center">
            {/* Left: Text content */}
            <div className="max-w-xl py-8 lg:py-12">
              <span className="tag mb-4">
                Toronto &middot; Monthly &middot; Inclusive
              </span>
              <h1 className="font-display text-4xl font-bold text-teal-dark lg:text-6xl text-balance mb-4 leading-[1.1]">
                Toronto&apos;s home for tech community
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-6 max-w-md">
                Tech talks, panels, socials, sports, and more—hosted at companies across the city.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="lg" asChild>
                  <a
                    href="https://luma.com/techtank"
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

            {/* Right: Masonry photo grid */}
            <div className="hidden md:block">
              <div className="columns-2 gap-3 lg:gap-4">
                {posterImages.slice(0, 5).map((poster, i) => (
                  <div
                    key={i}
                    className="mb-3 lg:mb-4 break-inside-avoid photo-frame hover:scale-[1.02] transition-transform duration-300"
                  >
                    <Image
                      src={poster.src}
                      alt={poster.alt}
                      width={300}
                      height={188}
                      className="w-full h-auto"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                ))}
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

      {/* Events Section - Upcoming (large) + Past (small) */}
      <Section>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-6">
          <SectionHeader
            overline="Events"
            title="Recent happenings"
          />
          <Link
            href="/events"
            className="inline-flex items-center text-sm font-semibold text-coral hover:text-coral/80 transition-colors"
          >
            View all events
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Recent Events - Large featured + smaller cards */}
        <div className="grid gap-4 lg:grid-cols-2 mb-4">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} variant="featured" />
          ))}
        </div>
        <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
          {smallerEvents.map((event) => (
            <EventCard key={event.id} event={event} variant="compact" />
          ))}
        </div>
      </Section>

      {/* Social Feed */}
      <Section className="bg-sand/50 texture-grain">
        <SectionHeader
          overline="From the community"
          title="Real people, real moments"
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
