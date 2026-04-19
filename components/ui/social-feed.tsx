"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllSocialLinks } from "@/constants/social-links";

export interface SocialPost {
  id: string;
  platform: "linkedin" | "instagram";
  embedUrl?: string;
  fallbackImage?: string;
  caption: string;
  date: string;
}

export const socialPosts: SocialPost[] = [
  {
    id: "post-1",
    platform: "instagram",
    caption: "What a night at Code Diversity! The energy was incredible — thank you to everyone who came out, shared stories, and made new connections. This is what community looks like.",
    date: "April 2026",
  },
  {
    id: "post-2",
    platform: "linkedin",
    caption: "We asked our community what TechTank means to them. The responses reminded us why we do this — real connections, real growth, real support. No gatekeeping, just good people helping each other.",
    date: "March 2026",
  },
  {
    id: "post-3",
    platform: "instagram",
    caption: "First-time speaker nerves? We get it. That's why we pair every new speaker with a mentor. Your story matters, and we're here to help you share it.",
    date: "March 2026",
  },
  {
    id: "post-4",
    platform: "linkedin",
    caption: "Another month, another room full of people who showed up for each other. Whether you're job hunting, switching careers, or just curious — you belong here.",
    date: "February 2026",
  },
];

function SocialPostCard({ post }: { post: SocialPost }) {
  const platformIcon = post.platform === "linkedin" ? (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ) : (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  return (
    <article className="group relative glass rounded-2xl p-6 transition-all">
      {/* Platform badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className={post.platform === "linkedin" ? "text-[#0077B5]" : "text-[#E4405F]"}>
          {platformIcon}
        </span>
        <span className="text-xs text-muted uppercase tracking-wide font-medium">
          {post.platform}
        </span>
        <span className="text-xs text-muted/50">·</span>
        <span className="text-xs text-muted">{post.date}</span>
      </div>

      {/* Post content */}
      <p className="text-foreground leading-relaxed mb-4">
        {post.caption}
      </p>

      {/* Link to original */}
      <a
        href={post.platform === "linkedin" 
          ? getAllSocialLinks().find(l => l.id === "linkedin")?.url 
          : getAllSocialLinks().find(l => l.id === "instagram")?.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm text-coral font-medium hover:text-coral/80 transition-colors"
      >
        View on {post.platform === "linkedin" ? "LinkedIn" : "Instagram"}
        <ExternalLink className="ml-1 h-3 w-3" />
      </a>
    </article>
  );
}

export function SocialFeed() {
  const [activeFilter, setActiveFilter] = useState<"all" | "linkedin" | "instagram">("all");

  const filteredPosts = activeFilter === "all" 
    ? socialPosts 
    : socialPosts.filter(p => p.platform === activeFilter);

  return (
    <div className="space-y-8">
      {/* Filter tabs */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
            activeFilter === "all"
              ? "bg-teal-dark text-white"
              : "text-muted hover:text-foreground glass"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveFilter("linkedin")}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
            activeFilter === "linkedin"
              ? "bg-teal-dark text-white"
              : "text-muted hover:text-foreground glass"
          }`}
        >
          LinkedIn
        </button>
        <button
          onClick={() => setActiveFilter("instagram")}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
            activeFilter === "instagram"
              ? "bg-teal-dark text-white"
              : "text-muted hover:text-foreground glass"
          }`}
        >
          Instagram
        </button>
      </div>

      {/* Posts grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <SocialPostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Community CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
        {getAllSocialLinks()
          .filter((link) => ["slack", "linkedin", "instagram"].includes(link.id))
          .map((link) => (
            <Button
              key={link.id}
              variant={link.type === "primary" ? "primary" : "outline"}
              size="sm"
              asChild
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.id === "slack" ? "Join Slack" : link.name}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          ))}
      </div>
    </div>
  );
}
