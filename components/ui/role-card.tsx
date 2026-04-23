import Link from "next/link";
import { Check, Mic, Building, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface RoleCardProps {
  role: "speaker" | "host" | "sponsor" | "volunteer";
  overline: string;
  title: string;
  description: string;
  benefits: string[];
  href: string;
  ctaText?: string;
}

const icons = {
  speaker: Mic,
  host: Building,
  sponsor: Heart,
  volunteer: Users,
};

export function RoleCard({
  role,
  overline,
  title,
  description,
  benefits,
  href,
  ctaText = "Learn more",
}: RoleCardProps) {
  const Icon = icons[role];

  return (
    <div className="group relative flex flex-col glass rounded-2xl p-6 lg:p-8 transition-all duration-300">
      {/* Icon */}
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-seafoam text-teal-dark">
        <Icon className="h-6 w-6" />
      </div>

      {/* Overline */}
      <span className="text-xs font-semibold uppercase tracking-widest text-amber-dark mb-2">
        {overline}
      </span>

      {/* Title */}
      <h3 className="font-display text-xl font-bold text-teal-dark mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{description}</p>

      {/* Benefits */}
      <ul className="space-y-2 mb-6 flex-1">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-foreground">
            <Check className="h-4 w-4 text-mint mt-0.5 shrink-0" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button variant="outline" size="sm" asChild className="w-full">
        <Link href={href}>{ctaText}</Link>
      </Button>
    </div>
  );
}

export const roleCardsData: RoleCardProps[] = [
  {
    role: "speaker",
    overline: "Share what you know",
    title: "Speak at an event",
    description:
      "Share your expertise with the Toronto tech community. We help first-time speakers succeed.",
    benefits: [
      "30-45 min talk + Q&A",
      "Any tech topic welcome",
      "Recorded and published to YouTube",
    ],
    href: "/get-involved/speaker",
    ctaText: "Apply to speak",
  },
  {
    role: "host",
    overline: "Bring us to your space",
    title: "Host an event",
    description:
      "Bring the Toronto tech community to your office. Great for recruiting and brand visibility.",
    benefits: [
      "40-100 attendees",
      "6:00-8:30pm weeknight",
      "Logo on event marketing",
    ],
    href: "/get-involved/host",
    ctaText: "Host an event",
  },
  {
    role: "sponsor",
    overline: "Support the community",
    title: "Become a sponsor",
    description:
      "Support Toronto's most inclusive tech community with tasteful brand visibility.",
    benefits: [
      "Logo on website and marketing",
      "Speaker slot options",
      "Reach Toronto tech talent",
    ],
    href: "/get-involved/sponsor",
    ctaText: "Sponsor TechTank",
  },
  {
    role: "volunteer",
    overline: "Help run the crew",
    title: "Volunteer with us",
    description:
      "Join the team that makes TechTank happen. Multiple roles available.",
    benefits: [
      "Event-day or ongoing roles",
      "No speaking required",
      "Portfolio-quality work",
    ],
    href: "/get-involved/volunteer",
    ctaText: "Join the crew",
  },
];
