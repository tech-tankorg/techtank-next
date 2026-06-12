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
  { name: "teal",       cls: "bg-teal",       label: "Teal",       hex: "#2A6B7C", usage: "Ring / focus, kicker labels" },
  { name: "teal-dark",  cls: "bg-teal-dark",  label: "Teal Dark",  hex: "#1B4B5A", usage: "Primary (light mode)" },
  { name: "amber",      cls: "bg-amber",      label: "Amber",      hex: "#FFBC55", usage: "Warning / secondary CTA" },
  { name: "amber-dark", cls: "bg-amber-dark", label: "Amber Dark", hex: "#EFA020", usage: "Overlines, hover links" },
];

const accentTokens = [
  { name: "coral",   cls: "bg-coral",   label: "Coral",   hex: "#E87C4E", usage: "Destructive / orange accent" },
  { name: "mint",    cls: "bg-mint",    label: "Mint",    hex: "#5B9A8B", usage: "Check icons, accent green" },
  { name: "seafoam", cls: "bg-seafoam", label: "Seafoam", hex: "#A8D5D8", usage: "Secondary (light mode)" },
  { name: "sand",    cls: "bg-sand",    label: "Sand",    hex: "#F7EDE2", usage: "Warm off-white, gradients" },
  { name: "peach",   cls: "bg-peach",   label: "Peach",   hex: "#F5D4C1", usage: "Warm gradient base" },
  { name: "blush",   cls: "bg-blush",   label: "Blush",   hex: "#EABFBF", usage: "Pink accent" },
];

const semanticPairs = [
  { bg: "background",  bgCls: "bg-background",  bgAlias: "#F9F6F2",       darkBgAlias: "#0D2B35",
    fg: "foreground",  fgCls: "bg-[var(--color-foreground)]",  fgAlias: "teal-dark",    darkFgAlias: "#E8F4F5" },
  { bg: "muted",       bgCls: "bg-muted",        bgAlias: "#EBF3F4",       darkBgAlias: "#1A3D4A",
    fg: "muted-foreground",  fgCls: "bg-[var(--color-muted-foreground)]",  fgAlias: "#4A6670",     darkFgAlias: "#8BBEC6" },
  { bg: "card",        bgCls: "bg-card",         bgAlias: "white / 70%",   darkBgAlias: "teal-dark / 50%",
    fg: "card-foreground",   fgCls: "bg-[var(--color-card-foreground)]",   fgAlias: "teal-dark",    darkFgAlias: "#E8F4F5" },
  { bg: "primary",     bgCls: "bg-primary",      bgAlias: "teal-dark",     darkBgAlias: "seafoam",
    fg: "primary-foreground",  fgCls: "bg-[var(--color-primary-foreground)]",  fgAlias: "white",   darkFgAlias: "#0D2B35" },
  { bg: "secondary",   bgCls: "bg-secondary",    bgAlias: "seafoam",       darkBgAlias: "teal-dark",
    fg: "secondary-foreground",  fgCls: "bg-[var(--color-secondary-foreground)]",  fgAlias: "teal-dark",  darkFgAlias: "seafoam" },
  { bg: "accent",      bgCls: "bg-accent",       bgAlias: "seafoam / 20%", darkBgAlias: "#1E4A58",
    fg: "accent-foreground",   fgCls: "bg-[var(--color-accent-foreground)]",   fgAlias: "teal-dark",   darkFgAlias: "seafoam" },
  { bg: "destructive", bgCls: "bg-destructive",  bgAlias: "coral",         darkBgAlias: "coral",
    fg: "destructive-foreground",  fgCls: "bg-[var(--color-destructive-foreground)]",  fgAlias: "white",  darkFgAlias: "white" },
  { bg: "warning",     bgCls: "bg-warning",      bgAlias: "amber",         darkBgAlias: "amber",
    fg: "warning-foreground",  fgCls: "bg-[var(--color-warning-foreground)]",  fgAlias: "teal-dark",   darkFgAlias: "teal-dark" },
];

const semanticUtilities = [
  { token: "border", bgCls: "bg-border", lightAlias: "teal-dark / 12%", darkAlias: "seafoam / 15%" },
  { token: "ring",   bgCls: "bg-ring",   lightAlias: "teal",            darkAlias: "seafoam" },
  { token: "input",  bgCls: "bg-input",  lightAlias: "teal-dark / 18%", darkAlias: "seafoam / 20%" },
];

const gradients = [
  { cls: "gradient-brand texture-grain",          label: ".gradient-brand",          desc: "135° — seafoam → sand → peach" },
  { cls: "gradient-brand-vertical texture-grain", label: ".gradient-brand-vertical", desc: "180° vertical — seafoam → sand → peach" },
  { cls: "gradient-hero texture-grain",           label: ".gradient-hero",           desc: "160° — aqua → warm off-white → peach" },
  { cls: "gradient-hero-soft",                    label: ".gradient-hero-soft",      desc: "Soft brand gradient for CTA sections" },
];

export default function DesignSystemPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero texture-grain">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
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

      {/* Color palette */}
      <Section>
        <SectionHeader overline="Colors" title="Color palette" className="mb-8" />

        <div className="space-y-6">
          {/* Brand */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Brand</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
              {brandColors.map((color) => (
                <div key={color.name} className="bg-background">
                  <div className={`h-14 ${color.cls}`} />
                  <div className="px-3 py-2.5">
                    <p className="text-xs font-medium text-foreground">{color.label}</p>
                    <code className="text-[10px] text-muted-foreground">{color.hex}</code>
                    <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accent */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Accent</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-px bg-border rounded-xl overflow-hidden border border-border">
              {accentTokens.map((color) => (
                <div key={color.name} className="bg-background">
                  <div className={`h-14 ${color.cls}`} />
                  <div className="px-3 py-2.5">
                    <p className="text-xs font-medium text-foreground">{color.label}</p>
                    <code className="text-[10px] text-muted-foreground">{color.hex}</code>
                    <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Semantic tokens */}
      <Section background="muted">
        <SectionHeader overline="Theming" title="Semantic tokens" className="mb-4" />
        <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
          Every token resolves differently in light and dark mode. Never use raw brand hex values for text, surfaces, or borders in components — always use the semantic name.
        </p>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Light panel */}
          <div className="light rounded-xl overflow-hidden border border-border bg-background">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="h-2.5 w-2.5 rounded-full bg-background border border-foreground/30" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Light mode</span>
            </div>
            {semanticPairs.map((pair) => (
              <div key={pair.bg} className="px-4 py-2.5 border-b border-border/60">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className={`h-4 w-4 rounded-[3px] border border-foreground/20 shrink-0 ${pair.bgCls}`} />
                  <code className="text-[11px] font-semibold flex-1 text-foreground">bg-{pair.bg}</code>
                  <span className="text-[10px] font-mono text-muted-foreground">{pair.bgAlias}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className={`h-4 w-4 rounded-[3px] border border-foreground/20 shrink-0 ${pair.fgCls}`} />
                  <code className="text-[11px] flex-1 text-muted-foreground">text-{pair.fg}</code>
                  <span className="text-[10px] font-mono text-muted-foreground">{pair.fgAlias}</span>
                </div>
              </div>
            ))}
            <div className="px-4 pt-3 pb-1 border-t border-border">
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-2 text-muted-foreground">Utilities</p>
            </div>
            {semanticUtilities.map((u, i) => (
              <div key={u.token} className={`flex items-center gap-2.5 px-4 py-2${i === semanticUtilities.length - 1 ? " pb-4" : ""}`}>
                <div className={`h-4 w-4 rounded-[3px] border border-foreground/20 shrink-0 ${u.bgCls}`} />
                <code className="text-[11px] font-semibold flex-1 text-foreground">{u.token}</code>
                <span className="text-[10px] font-mono text-muted-foreground">{u.lightAlias}</span>
              </div>
            ))}
          </div>

          {/* Dark panel */}
          <div className="dark rounded-xl overflow-hidden border border-border bg-background">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="h-2.5 w-2.5 rounded-full bg-background border border-foreground/30" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Dark mode</span>
            </div>
            {semanticPairs.map((pair) => (
              <div key={pair.bg} className="px-4 py-2.5 border-b border-border/60">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className={`h-4 w-4 rounded-[3px] border border-foreground/20 shrink-0 ${pair.bgCls}`} />
                  <code className="text-[11px] font-semibold flex-1 text-foreground">bg-{pair.bg}</code>
                  <span className="text-[10px] font-mono text-muted-foreground">{pair.darkBgAlias}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className={`h-4 w-4 rounded-[3px] border border-foreground/20 shrink-0 ${pair.fgCls}`} />
                  <code className="text-[11px] flex-1 text-muted-foreground">text-{pair.fg}</code>
                  <span className="text-[10px] font-mono text-muted-foreground">{pair.darkFgAlias}</span>
                </div>
              </div>
            ))}
            <div className="px-4 pt-3 pb-1 border-t border-border">
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-2 text-muted-foreground">Utilities</p>
            </div>
            {semanticUtilities.map((u, i) => (
              <div key={u.token} className={`flex items-center gap-2.5 px-4 py-2${i === semanticUtilities.length - 1 ? " pb-4" : ""}`}>
                <div className={`h-4 w-4 rounded-[3px] border border-foreground/20 shrink-0 ${u.bgCls}`} />
                <code className="text-[11px] font-semibold flex-1 text-foreground">{u.token}</code>
                <span className="text-[10px] font-mono text-muted-foreground">{u.darkAlias}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Gradient utilities */}
      <Section>
        <SectionHeader overline="Theming" title="Gradient utilities" className="mb-4" />
        <p className="text-sm text-muted-foreground mb-8 max-w-xl">
          Each gradient has a paired dark variant in CSS — same class name, palette flips automatically.
        </p>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Light panel */}
          <div className="light rounded-xl overflow-hidden border border-border">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background">
              <div className="h-2.5 w-2.5 rounded-full bg-background border border-foreground/30" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Light mode</span>
            </div>
            <div className="grid grid-cols-2">
              {gradients.map((g, i) => (
                <div key={g.label} className={`bg-background${i % 2 === 0 ? " border-r border-border" : ""}${i < 2 ? " border-b border-border" : ""}`}>
                  <div className={`h-28 w-full ${g.cls}`} />
                  <div className="px-3 py-2.5">
                    <code className="text-[11px] font-semibold block text-foreground">{g.label}</code>
                    <p className="text-[10px] mt-0.5 leading-tight text-muted-foreground">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dark panel */}
          <div className="dark rounded-xl overflow-hidden border border-border">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background">
              <div className="h-2.5 w-2.5 rounded-full bg-background border border-foreground/30" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Dark mode</span>
            </div>
            <div className="grid grid-cols-2">
              {gradients.map((g, i) => (
                <div key={g.label} className={`bg-background${i % 2 === 0 ? " border-r border-border" : ""}${i < 2 ? " border-b border-border" : ""}`}>
                  <div className={`h-28 w-full ${g.cls}`} />
                  <div className="px-3 py-2.5">
                    <code className="text-[11px] font-semibold block text-foreground">{g.label}</code>
                    <p className="text-[10px] mt-0.5 leading-tight text-muted-foreground">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Typography */}
      <Section background="muted">
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
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring">
              Section overline pattern
            </span>
          </div>
        </div>
      </Section>

      {/* Buttons */}
      <Section>
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
              <Button variant="primary" size="icon"><Star className="h-4 w-4" /></Button>
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
      <Section background="muted">
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
      <Section>
        <SectionHeader overline="Components" title="Cards" className="mb-12" />
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Icon card */}
          <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ring/10 text-ring mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Icon card</h3>
            <p className="text-muted-foreground leading-relaxed">Used for feature lists and benefit sections throughout the site.</p>
          </div>

          {/* Checklist card — ring tint */}
          <div className="bg-ring/8 rounded-2xl border border-ring/30 p-6 lg:p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">Checklist — ring tint</h3>
            <ul className="space-y-3">
              {["Speaker sourcing", "Marketing", "Recording"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-ring shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Checklist card — amber */}
          <div className="bg-amber/8 rounded-2xl border border-amber/30 p-6 lg:p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">Checklist — amber tint</h3>
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
          <div className="bg-card rounded-xl border border-border p-5">
            <p className="text-sm text-muted-foreground mb-1">Stat label</p>
            <p className="font-display text-3xl font-semibold text-foreground">40–100</p>
            <p className="text-sm text-muted-foreground mt-1">Attendees per event</p>
          </div>

          {/* Hover-link card */}
          <a href="#" className="group flex items-center gap-4 bg-card rounded-xl border border-border p-5 hover:border-ring/50 transition-all">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ring/10">
              <Star className="h-6 w-6 text-ring" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground group-hover:text-ring transition-colors">Hover-link card</p>
              <p className="text-sm text-muted-foreground">Used for downloadable resources and media kit assets.</p>
            </div>
            <Download className="h-5 w-5 text-muted-foreground group-hover:text-ring transition-colors shrink-0" />
          </a>
        </div>
      </Section>

      {/* Surfaces */}
      <Section background="muted">
        <SectionHeader overline="Components" title="Surfaces &amp; effects" className="mb-12" />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass rounded-2xl p-8">
            <Zap className="h-8 w-8 text-ring mb-4" />
            <p className="font-semibold text-foreground mb-1">.glass</p>
            <p className="text-sm text-muted-foreground">White 55%, blur 20px, saturate 180%</p>
          </div>
          <div className="glass-subtle rounded-2xl p-8">
            <Zap className="h-8 w-8 text-ring mb-4" />
            <p className="font-semibold text-foreground mb-1">.glass-subtle</p>
            <p className="text-sm text-muted-foreground">White 35%, blur 16px, saturate 150%</p>
          </div>
          <div className="glass-dark rounded-2xl p-8">
            <Zap className="h-8 w-8 text-seafoam mb-4" />
            <p className="font-semibold text-white mb-1">.glass-dark</p>
            <p className="text-sm text-seafoam/70">Teal-dark 80%, blur 20px, saturate 180%</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mt-6">
          <div className="shadow-soft bg-card rounded-2xl p-8">
            <p className="font-semibold text-foreground mb-1">.shadow-soft</p>
            <p className="text-sm text-muted-foreground">Layered drop shadows, default cards</p>
          </div>
          <div className="shadow-soft-lg bg-card rounded-2xl p-8">
            <p className="font-semibold text-foreground mb-1">.shadow-soft-lg</p>
            <p className="text-sm text-muted-foreground">Deeper layered shadow for elevated panels</p>
          </div>
        </div>
      </Section>

      {/* Process / Stepper */}
      <Section>
        <SectionHeader overline="Components" title="Process stepper" className="mb-12" />
        <div className="grid gap-6 lg:grid-cols-5">
          {["Initial contact", "Scoping call", "Confirm details", "Marketing kickoff", "Event day"].map(
            (title, i) => (
              <div key={title} className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ring text-primary-foreground font-semibold mb-4">
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
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-4">
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
