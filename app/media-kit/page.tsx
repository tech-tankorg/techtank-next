import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Download, FileText, Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { ContactCard } from "@/components/ui/contact-card";

export const metadata: Metadata = {
  title: "Media Kit",
  description:
    "TechTank TO media kit — logos, brand guidelines, and fast facts for press, sponsors, and partners.",
};

const fastFacts = [
  { label: "Founded", value: "2022" },
  { label: "Location", value: "Toronto, Canada" },
  { label: "Cadence", value: "Monthly in-person events via Luma + ongoing Slack community" },
  { label: "Typical attendance", value: "40-100 per event" },
  { label: "Structure", value: "Volunteer-run, non-commercial" },
  { label: "Contact", value: "techtankto@gmail.com" },
];

const brandColors = [
  { name: "Teal", hex: "#2A6B7C", usage: "Secondary headings, accents" },
  { name: "Teal Dark", hex: "#1B4B5A", usage: "Primary headings, footer, CTAs" },
  { name: "Amber", hex: "#FFBC55", usage: "Brand amber" },
  { name: "Amber Dark", hex: "#EFA020", usage: "Brand amber dark" },
  { name: "Coral", hex: "#E87C4E", usage: "Orange accent" },
  { name: "Mint", hex: "#5B9A8B", usage: "Accent green" },
  { name: "Seafoam", hex: "#A8D5D8", usage: "Light backgrounds, accents" },
  { name: "Sand", hex: "#F7EDE2", usage: "Warm off-white" },
  { name: "Peach", hex: "#F5D4C1", usage: "Warm gradient base" },
  { name: "Blush", hex: "#EABFBF", usage: "Pink accent" },
];

const logoDownload = {
  name: "TechTank Logos",
  href: "/downloads/techtank-logos.zip",
  description: "SVG + PNG — light and dark variants",
};

const resources = [
  { name: "Brand Guidelines", href: "/design-system", description: "Colors, typography, usage rules", internal: true },
  { name: "Speaker Slide Template", href: "/downloads/coming-soon.txt", description: "Google Slides / PPTX template", internal: false },
  { name: "Speaker Checklist", href: "/downloads/coming-soon.txt", description: "Preparation guide for first-time speakers", internal: false },
  { name: "Host Checklist", href: "/downloads/coming-soon.txt", description: "Event-day preparation guide", internal: false },
];

export default function PressKitPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
              Media Kit
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground lg:text-6xl text-balance mb-6">
              TechTank Media Kit
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Logos, guidelines, and fast facts for press, sponsors, and
              partners. All assets are free to use with attribution.
            </p>
            <Button variant="primary" size="lg" asChild>
              <a href="/downloads/techtank-logos.zip" download>
                <Download className="mr-2 h-5 w-5" />
                Download all assets (ZIP)
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Fast Facts */}
      <Section>
        <SectionHeader
          overline="Fast facts"
          title="About TechTank TO"
          className="mb-12"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fastFacts.map((fact) => (
            <div
              key={fact.label}
              className="bg-card rounded-xl border border-border p-5"
            >
              <p className="text-sm text-muted-foreground mb-1">{fact.label}</p>
              <p className="font-semibold text-foreground">{fact.value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Boilerplate */}
      <Section background="white">
        <SectionHeader
          overline="Boilerplate"
          title="About TechTank (for press)"
          className="mb-8"
        />
        <div className="max-w-3xl">
          <div className="bg-background rounded-xl border border-border p-6 mb-6">
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Full paragraph:</strong> TechTank TO is Toronto&apos;s
              volunteer-run tech community, hosting monthly in-person events
              since 2022. Each event brings together 40-100 attendees,
              including developers, designers, and tech professionals for
              technical talks and networking. TechTank is committed to
              fostering a supportive and inclusive environment where people of
              all skill levels can explore, create, and thrive in technology.
            </p>
            <Button variant="ghost" size="sm">
              <Copy className="mr-2 h-4 w-4" />
              Copy to clipboard
            </Button>
          </div>
          <div className="bg-background rounded-xl border border-border p-6">
            <p className="text-foreground leading-relaxed mb-4">
              <strong>One-liner:</strong> TechTank TO is Toronto&apos;s
              volunteer-run tech community, hosting monthly events for
              developers, designers, and tech professionals since 2022.
            </p>
            <Button variant="ghost" size="sm">
              <Copy className="mr-2 h-4 w-4" />
              Copy to clipboard
            </Button>
          </div>
        </div>
      </Section>

      {/* Logos */}
      <Section>
        <SectionHeader
          overline="Logos"
          title="Logo downloads"
          description="Download our logos in various formats. Please maintain clear space and minimum size as outlined in the brand guidelines."
          className="mb-12"
        />

        {/* Logo Preview */}
        <div className="grid gap-6 lg:grid-cols-2 mb-12">
          <div className="bg-card rounded-xl border border-border p-8 flex items-center justify-center">
            <Image
              src="/images/logos/light.svg"
              alt="TechTank TO Logo (light)"
              width={240}
              height={80}
              className="h-16 w-auto"
              style={{ width: "auto" }}
            />
          </div>
          <div className="glass-dark rounded-xl p-8 flex items-center justify-center">
            <Image
              src="/images/logos/dark.svg"
              alt="TechTank TO Logo (dark)"
              width={240}
              height={80}
              className="h-16 w-auto"
              style={{ width: "auto" }}
            />
          </div>
        </div>

        {/* Logo Download */}
        <a
          href={logoDownload.href}
          download
          className="group flex items-center gap-4 bg-card rounded-xl border border-border p-5 hover:border-ring/50 transition-all"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-background">
            <FileText className="h-6 w-6 text-ring" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground group-hover:text-ring transition-colors">
              {logoDownload.name}
            </p>
            <p className="text-sm text-muted-foreground">{logoDownload.description}</p>
          </div>
          <Download className="h-5 w-5 text-muted-foreground group-hover:text-ring transition-colors shrink-0" />
        </a>
      </Section>

      {/* Brand Colors */}
      <Section background="white">
        <SectionHeader
          overline="Brand colors"
          title="Color palette"
          className="mb-12"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brandColors.map((color) => (
            <div
              key={color.name}
              className="bg-background rounded-xl border border-border overflow-hidden"
            >
              <div
                className="h-20"
                style={{ backgroundColor: color.hex }}
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-foreground">{color.name}</p>
                  <code className="text-sm text-muted-foreground">{color.hex}</code>
                </div>
                <p className="text-sm text-muted-foreground">{color.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Typography */}
      <Section>
        <SectionHeader
          overline="Typography"
          title="Font pairing"
          className="mb-12"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-card rounded-xl border border-border p-6">
            <p className="text-sm text-muted-foreground mb-2">Display / Headlines</p>
            <p className="font-display text-4xl font-semibold text-foreground mb-4">
              Space Grotesk
            </p>
            <p className="text-muted-foreground">
              Used for headings, titles, and display text. Geometric sans-serif
              with a modern, technical feel.
            </p>
          </div>
          <div className="bg-card rounded-xl border border-border p-6">
            <p className="text-sm text-muted-foreground mb-2">Body / UI</p>
            <p className="font-sans text-4xl font-semibold text-foreground mb-4">
              Inter
            </p>
            <p className="text-muted-foreground">
              Used for body text, UI elements, and long-form content. Humanist
              sans-serif optimized for screens.
            </p>
          </div>
        </div>
      </Section>

      {/* Resources */}
      <Section>
        <SectionHeader
          overline="Resources"
          title="Additional assets"
          className="mb-12"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {resources.map((resource) => {
            const Wrapper = resource.internal ? Link : "a";
            const wrapperProps = resource.internal
              ? { href: resource.href }
              : { href: resource.href };
            return (
              <Wrapper
                key={resource.name}
                {...wrapperProps}
                className="group flex items-center gap-4 bg-card rounded-xl border border-border p-5 hover:border-ring/50 transition-all"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ring/10">
                  <FileText className="h-6 w-6 text-ring" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground group-hover:text-ring transition-colors">
                    {resource.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </div>
                {resource.internal
                  ? <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-ring transition-colors shrink-0" />
                  : <Download className="h-5 w-5 text-muted-foreground group-hover:text-ring transition-colors shrink-0" />
                }
              </Wrapper>
            );
          })}
        </div>
      </Section>

      {/* Social Links */}
      <Section background="brand-soft">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
            Connect with us
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-8">
            Official channels
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" asChild>
              <a
                href="https://ca.linkedin.com/company/techtank-to"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://www.instagram.com/techtankto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://www.youtube.com/@TechTankTo"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/tech-tankorg"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Usage Terms */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            overline="Usage terms"
            title="How to use our assets"
            className="mb-8"
          />
          <div className="bg-card rounded-xl border border-border p-6 space-y-4">
            <p className="text-foreground">
              <strong>Permitted:</strong> Use our logos and assets to reference
              TechTank TO in press coverage, event listings, partnership
              announcements, and sponsor materials with proper attribution.
            </p>
            <p className="text-foreground">
              <strong>Not permitted:</strong>{' '}Modifying logo colors, proportions,
              or elements; using assets to imply endorsement without written
              permission; using assets in ways that could damage TechTank&apos;s
              reputation.
            </p>
            <p className="text-muted-foreground text-sm">
              For questions about asset usage or to request permission for
              special use cases, please contact us at techtankto@gmail.com.
            </p>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section>
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
            Media contact
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Get in touch
          </h2>
          <p className="text-muted-foreground">
            For press inquiries, interviews, and partnership discussions.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <ContactCard context="For press inquiries, interviews, and partnership requests." />
        </div>
      </Section>
    </>
  );
}
