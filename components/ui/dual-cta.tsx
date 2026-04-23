import Link from "next/link";
import { Calendar, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getEventLinks, getSocialLinks, getContributeLinks } from "@/constants/social-links";

export function DualCTA() {
  const eventLinks = getEventLinks();
  const socialLinks = getSocialLinks();
  const contributeLinks = getContributeLinks();

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {/* Never miss an event */}
      <div className="relative overflow-hidden rounded-xl glass p-5 lg:p-6">
        <Calendar className="absolute top-4 right-4 h-16 w-16 text-teal-dark/10" />
        <div className="relative">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-dark mb-2">
            Stay in the loop
          </span>
          <h3 className="font-display text-lg lg:text-xl font-bold text-teal-dark mb-2">
            Never miss an event
          </h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-sm">
            Subscribe to our Luma calendar and follow us on socials.
          </p>
          <div className="flex flex-wrap gap-2">
            {eventLinks.map((link) => (
              <Button
                key={link.id}
                variant="primary"
                size="sm"
                asChild
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                  <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </a>
              </Button>
            ))}
            {socialLinks.map((link) => (
              <Button
                key={link.id}
                variant={link.type === "primary" ? "primary" : "outline"}
                size="sm"
                asChild
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                  <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Want to contribute? */}
      <div className="relative overflow-hidden rounded-xl glass p-5 lg:p-6">
        <Users className="absolute top-4 right-4 h-16 w-16 text-amber-dark/10" />
        <div className="relative">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-dark mb-2">
            Get involved
          </span>
          <h3 className="font-display text-lg lg:text-xl font-bold text-teal-dark mb-2">
            Want to contribute?
          </h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-sm">
            Speak, host, sponsor, or volunteer.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button variant="primary" size="sm" asChild>
              <Link href="/get-involved">Get involved</Link>
            </Button>
            {contributeLinks.map((link) => (
              <Button
                key={link.id}
                variant="outline"
                size="sm"
                asChild
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                  <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
