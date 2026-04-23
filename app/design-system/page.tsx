import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Mail,
  ArrowRight,
  Download,
  ExternalLink,
  Users,
  Star,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Design System",
  description: "TechTank TO design system — colors, typography, components, and patterns.",
  robots: { index: true, follow: true },
};

const brandColors = [
  { name: "teal", hex: "#2A6B7C", label: "Teal", usage: "Secondary headings, accents" },
  { name: "teal-dark", hex: "#1B4B5A", label: "Teal Dark", usage: "Primary headings, footer, CTAs" },
  { name: "amber", hex: "#FFBC55", label: "Amber", usage: "Brand amber" },
  { name: "amber-dark", hex: "#EFA020", label: "Amber Dark", usage: "Brand amber dark" },
];

const accentTokens = [
  { name: "coral", hex: "#E87C4E", label: "Coral", usage: "Orange accent" },
  { name: "mint", hex: "#5B9A8B", label: "Mint", usage: "Accent green" },
  { name: "seafoam", hex: "#A8D5D8", label: "Seafoam", usage: "Light backgrounds, accents" },
  { name: "sand", hex: "#F7EDE2", label: "Sand", usage: "Warm off-white" },
  { name: "peach", hex: "#F5D4C1", label: "Peach", usage: "Warm gradient base" },
  { name: "blush", hex: "#EABFBF", label: "Blush", usage: "Pink accent" },
];

// Paired tokens: bg + foreground rendered as a split swatch
const semanticPairs = [
  { bg: "background", bgHex: "#F9F6F2", fg: "foreground", fgHex: "#1B4B5A", role: "Page background / body text" },
  { bg: "muted", bgHex: "#EBF3F4", fg: "muted-foreground", fgHex: "#4A6670", role: "De-emphasized surface / secondary text" },
  { bg: "card", bgHex: "rgba(255,255,255,0.7)", fg: "card-foreground", fgHex: "#1B4B5A", role: "Glass card surface" },
  { bg: "popover", bgHex: "#FFFFFF", fg: "popover-foreground", fgHex: "#1B4B5A", role: "Dropdowns, tooltips" },
  { bg: "primary", bgHex: "#1B4B5A", fg: "primary-foreground", fgHex: "#FFFFFF", role: "Primary actions, buttons" },
  { bg: "secondary", bgHex: "#A8D5D8", fg: "secondary-foreground", fgHex: "#1B4B5A", role: "Secondary actions, icon fills" },
  { bg: "accent", bgHex: "#D4ECEE", fg: "accent-foreground", fgHex: "#1B4B5A", role: "Hover / active highlight states" },
  { bg: "destructive", bgHex: "#E87C4E", fg: "destructive-foreground", fgHex: "#FFFFFF", role: "Errors, destructive actions" },
  { bg: "warning", bgHex: "#FFBC55", fg: "warning-foreground", fgHex: "#1B4B5A", role: "Upcoming, caution states" },
];

const semanticUtilities = [
  { token: "border", hex: "rgba(27,75,90,0.12)", role: "Dividers, card borders" },
  { token: "input", hex: "rgba(27,75,90,0.18)", role: "Input field borders" },
  { token: "ring", hex: "#2A6B7C", role: "Focus ring (keyboard nav)" },
];

export default function DesignSystemPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
              Brand Guidelines
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground lg:text-6xl text-balance mb-6">
              Design System
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Colors, typography, gradients, and components used across the TechTank TO website.
            </p>
          </div>
        </div>
      </section>

      {/* Colors — Brand */}
      <Section>
        <SectionHeader overline="Colors" title="Brand palette" className="mb-12" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brandColors.map((color) => (
            <div key={color.name} className="bg-white rounded-xl border border-border overflow-hidden">
              <div className="h-20" style={{ backgroundColor: color.hex }} />
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-foreground">{color.label}</p>
                  <code className="text-xs text-muted-foreground">{color.hex}</code>
                </div>
                <p className="text-xs text-muted-foreground">{color.usage}</p>
                <code className="text-xs text-teal/70 mt-1 block">bg-{color.name} / text-{color.name}</code>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Colors — Accent */}
      <Section background="white">
        <SectionHeader overline="Colors" title="Accent tokens" className="mb-12" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {accentTokens.map((color) => (
            <div key={color.name} className="bg-background rounded-xl border border-border overflow-hidden">
              <div className="h-20" style={{ backgroundColor: color.hex }} />
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-foreground">{color.label}</p>
                  <code className="text-xs text-muted-foreground">{color.hex}</code>
                </div>
                <p className="text-xs text-muted-foreground">{color.usage}</p>
                <code className="text-xs text-teal/70 mt-1 block">bg-{color.name} / text-{color.name}</code>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Colors — Semantic */}
      <Section>
        <SectionHeader overline="Colors" title="Semantic tokens" className="mb-12" />
        <p className="text-sm text-muted-foreground mb-6 -mt-8 max-w-2xl">
          Every token has a paired foreground — use <code className="text-xs bg-muted px-1 py-0.5 rounded">bg-*</code> for surfaces and <code className="text-xs bg-muted px-1 py-0.5 rounded">text-*-foreground</code> for text on top.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {semanticPairs.map((pair) => (
            <div key={pair.bg} className="rounded-xl border border-border overflow-hidden">
              <div className="flex h-14">
                <div className="flex-1" style={{ backgroundColor: pair.bgHex }} />
                <div className="flex-1" style={{ backgroundColor: pair.fgHex }} />
              </div>
              <div className="bg-white p-3">
                <code className="text-xs font-semibold text-foreground block">bg-{pair.bg}</code>
                <code className="text-xs text-teal/70 block">text-{pair.fg}</code>
                <p className="text-[11px] text-muted-foreground mt-1">{pair.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-3 max-w-xl">
          {semanticUtilities.map((u) => (
            <div key={u.token} className="rounded-xl border border-border overflow-hidden">
              <div className="h-8" style={{ backgroundColor: u.hex }} />
              <div className="bg-white p-3">
                <code className="text-xs font-semibold text-foreground block">{u.token}</code>
                <p className="text-[11px] text-muted-foreground mt-1">{u.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Gradients */}
      <Section background="white">
        <SectionHeader overline="Gradients" title="Gradient utilities" className="mb-12" />
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { cls: "gradient-brand", label: ".gradient-brand", desc: "135° diagonal — seafoam → sand → peach" },
            { cls: "gradient-brand-vertical", label: ".gradient-brand-vertical", desc: "180° vertical — seafoam → sand → peach" },
            { cls: "gradient-hero texture-grain", label: ".gradient-hero + .texture-grain", desc: "160° hero — aqua → warm off-white → peach" },
            { cls: "gradient-brand-soft", label: ".gradient-brand-soft", desc: "Soft brand gradient used for CTA sections" },
          ].map((g) => (
            <div key={g.label} className="rounded-2xl overflow-hidden border border-border">
              <div className={`h-32 ${g.cls}`} />
              <div className="bg-white p-4">
                <code className="text-sm font-semibold text-foreground">{g.label}</code>
                <p className="text-sm text-muted-foreground mt-1">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Typography */}
      <Section>
        <SectionHeader overline="Typography" title="Type scale" className="mb-12" />
        <div className="space-y-8 max-w-3xl">
          <div className="pb-6 border-b border-border">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Display — Space Grotesk (.font-display)</p>
            <p className="font-display text-6xl font-semibold text-foreground leading-tight">Aa Display 6xl</p>
            <p className="font-display text-5xl font-semibold text-foreground leading-tight mt-2">Aa Display 5xl</p>
            <p className="font-display text-4xl font-semibold text-foreground leading-tight mt-2">Aa Display 4xl</p>
            <p className="font-display text-3xl font-semibold text-foreground mt-2">Aa Display 3xl</p>
            <p className="font-display text-2xl font-semibold text-foreground mt-2">Aa Display 2xl</p>
            <p className="font-display text-xl font-semibold text-foreground mt-2">Aa Display xl</p>
          </div>
          <div className="pb-6 border-b border-border">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Body — Inter (.font-sans)</p>
            <p className="text-xl text-foreground">Text xl — lead paragraphs</p>
            <p className="text-base text-foreground mt-2">Text base — body copy, default size</p>
            <p className="text-sm text-muted-foreground mt-2">Text sm — secondary copy, captions</p>
            <p className="text-xs text-muted-foreground mt-2">Text xs — labels, overlines, metadata</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Special — Overlines</p>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal">
              Section overline pattern
            </span>
          </div>
        </div>
      </Section>

      {/* Buttons */}
      <Section background="white">
        <SectionHeader overline="Components" title="Buttons" className="mb-12" />
        <div className="space-y-8">
          <div>
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Variants</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Sizes</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" size="lg">Large</Button>
              <Button variant="primary" size="md">Medium (default)</Button>
              <Button variant="primary" size="sm">Small</Button>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">With icons</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">
                <Mail className="mr-2 h-4 w-4" />
                Email us
              </Button>
              <Button variant="outline">
                Open Media Kit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="secondary">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              <Button variant="ghost">
                Learn more
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">States</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" disabled>Disabled primary</Button>
              <Button variant="outline" disabled>Disabled outline</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Tags */}
      <Section>
        <SectionHeader overline="Components" title="Tags &amp; Badges" className="mb-12" />
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wider">Variants</p>
            <div className="flex flex-wrap gap-3 items-center">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wider">Sizes</p>
            <div className="flex flex-wrap gap-3 items-center">
              <Badge variant="default" size="md">Medium (default)</Badge>
              <Badge variant="default" size="sm">Small</Badge>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wider">CSS tag utilities</p>
            <div className="flex flex-wrap gap-3 items-center">
              <span className="tag">tag filled</span>
              <span className="tag-outline">tag outline</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Cards */}
      <Section background="white">
        <SectionHeader overline="Components" title="Cards" className="mb-12" />
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Icon card */}
          <div className="bg-white rounded-2xl border border-border p-6 lg:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Icon card</h3>
            <p className="text-muted-foreground leading-relaxed">Used for feature lists and benefit sections throughout the site.</p>
          </div>

          {/* Checklist card — teal */}
          <div className="bg-teal/8 rounded-2xl border border-teal/30 p-6 lg:p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">Checklist — teal</h3>
            <ul className="space-y-3">
              {["Speaker sourcing", "Marketing", "Recording"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Checklist card — amber */}
          <div className="bg-amber/8 rounded-2xl border border-amber/30 p-6 lg:p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">Checklist — amber</h3>
            <ul className="space-y-3">
              {["Venue", "Food & drinks", "Optional: your speaker"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-dark shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mt-6">
          {/* Stat card */}
          <div className="bg-white rounded-xl border border-border p-5">
            <p className="text-sm text-muted-foreground mb-1">Stat label</p>
            <p className="font-display text-3xl font-semibold text-teal-dark">40–100</p>
            <p className="text-sm text-muted-foreground mt-1">Attendees per event</p>
          </div>

          {/* Hover-link card */}
          <a href="#" className="group flex items-center gap-4 bg-white rounded-xl border border-border p-5 hover:border-teal/50 transition-all">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal/10">
              <Star className="h-6 w-6 text-teal" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground group-hover:text-teal transition-colors">Hover-link card</p>
              <p className="text-sm text-muted-foreground">Used for downloadable resources and media kit assets.</p>
            </div>
            <Download className="h-5 w-5 text-muted-foreground group-hover:text-teal transition-colors shrink-0" />
          </a>
        </div>
      </Section>

      {/* Surfaces */}
      <Section>
        <SectionHeader overline="Components" title="Surfaces &amp; effects" className="mb-12" />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass rounded-2xl p-8">
            <Zap className="h-8 w-8 text-teal mb-4" />
            <p className="font-semibold text-foreground mb-1">.glass</p>
            <p className="text-sm text-muted-foreground">White 55%, blur 20px, saturate 180%</p>
          </div>
          <div className="glass-subtle rounded-2xl p-8">
            <Zap className="h-8 w-8 text-teal mb-4" />
            <p className="font-semibold text-foreground mb-1">.glass-subtle</p>
            <p className="text-sm text-muted-foreground">White 35%, blur 16px, saturate 150%</p>
          </div>
          <div className="glass-dark rounded-2xl p-8">
            <Zap className="h-8 w-8 text-seafoam mb-4" />
            <p className="font-semibold text-white mb-1">.glass-dark</p>
            <p className="text-sm text-white/70">Teal-dark 80%, blur 20px, saturate 180%</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mt-6">
          <div className="shadow-soft bg-white rounded-2xl p-8">
            <p className="font-semibold text-foreground mb-1">.shadow-soft</p>
            <p className="text-sm text-muted-foreground">Layered teal-dark drop shadows, default cards</p>
          </div>
          <div className="shadow-soft-lg bg-white rounded-2xl p-8">
            <p className="font-semibold text-foreground mb-1">.shadow-soft-lg</p>
            <p className="text-sm text-muted-foreground">Deeper layered shadow for elevated panels</p>
          </div>
        </div>
      </Section>

      {/* Process / Stepper */}
      <Section background="white">
        <SectionHeader overline="Components" title="Process stepper" className="mb-12" />
        <div className="grid gap-6 lg:grid-cols-5">
          {["Initial contact", "Scoping call", "Confirm details", "Marketing kickoff", "Event day"].map(
            (title, i) => (
              <div key={title} className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-white font-semibold mb-4">
                  {i + 1}
                </div>
                <h4 className="font-semibold text-foreground mb-1">{title}</h4>
                <p className="text-sm text-muted-foreground">Step description goes here.</p>
              </div>
            )
          )}
        </div>
      </Section>

      {/* CTA section pattern */}
      <Section background="brand-soft">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
            CTA section pattern
          </span>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Gradient CTA section
          </h2>
          <p className="text-muted-foreground mb-8">
            Used at the bottom of every get-involved sub-page. Always ends with a primary action.
          </p>
          <Button variant="primary" size="lg">
            Primary action
          </Button>
        </div>
      </Section>
    </>
  );
}
