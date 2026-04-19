import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { HeroStatsMarquee } from "@/components/ui/hero-stats-marquee";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { RoleCard, roleCardsData } from "@/components/ui/role-card";
import { EventCard } from "@/components/ui/event-card";
import { DualCTA } from "@/components/ui/dual-cta";
import { SocialFeed } from "@/components/ui/social-feed";
import { getRecentEvents } from "@/constants/events";

const posterImages = [
  {
    src: "/images/events/triple-speaker-poster.png",
    alt: "Lightning Talks at Vena Solutions",
  },
  {
    src: "/images/events/codediversity-meetup-1.png",
    alt: "CodeDiversity Coffee Chat",
  },
  {
    src: "/images/events/mentorship-poster.png",
    alt: "Mentorship Meetup",
  },
  {
    src: "/images/events/brainstation-meetup.png",
    alt: "BrainStation Meetup",
  },
  {
    src: "/images/events/codediversity-meetup-2.png",
    alt: "CodeDiversity Clay Workshop",
  },
];

export default function HomePage() {
  const allRecentEvents = getRecentEvents(8);
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
                  <Link href="/#join-us">Join us</Link>
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

          {/* Stats Marquee */}
          <HeroStatsMarquee />
        </div>
      </section>

      {/* Social Feed */}
      <Section id="community" className="bg-sand/50 texture-grain">
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
          <p className="text-center text-xs text-muted mb-4 uppercase tracking-widest font-medium">
            Hosted and supported by
          </p>
          <LogoCloud />
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
        <div className="glass rounded-2xl p-6 lg:p-10 text-center max-w-2xl mx-auto">
          <span className="tag-outline mb-4 inline-block text-sm">
            What we&apos;re about
          </span>
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-teal-dark mb-4">
            Community first. Always.
          </h2>
          <p className="text-muted mb-6">
            No gatekeeping—just people who genuinely want to learn, share, and lift each other up.
          </p>
          <Button variant="primary" asChild>
            <Link href="/about">More about us</Link>
          </Button>
        </div>
      </Section>

      {/* Dual CTA */}
      <Section id="join-us" className="gradient-brand-vertical texture-grain py-8 lg:py-12">
        <DualCTA />
      </Section>
    </>
  );
}
