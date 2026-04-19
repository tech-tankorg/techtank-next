"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllSocialLinks } from "@/constants/social-links";
import {
  getCoverImage,
  getFeaturedInstagramPosts,
  type InstagramPostWithId,
} from "@/constants/instagram-posts";

const CAPTION_CHAR_LIMIT = 300;

function truncateCaption(caption: string): string {
  if (caption.length <= CAPTION_CHAR_LIMIT) return caption;
  return `${caption.slice(0, CAPTION_CHAR_LIMIT).trimEnd()}…`;
}

function formatDate(date: string | undefined, fallbackRaw: number | undefined): string {
  if (!date && !fallbackRaw) return "";
  const d = date ? new Date(date) : new Date((fallbackRaw ?? 0) * 1000);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

const instagramUrl = getAllSocialLinks().find((l) => l.id === "instagram")?.url;

function InstagramPostCard({ post }: { post: InstagramPostWithId }) {
  const cover = getCoverImage(post);
  const postUrl = post.shortcode
    ? `https://www.instagram.com/p/${post.shortcode}/`
    : instagramUrl ?? "https://www.instagram.com/techtankto/";

  return (
    <article className="group relative glass rounded-2xl overflow-hidden transition-all flex flex-col">
      {cover && (
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
          <Image
            src={cover}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {post.featured && (
            <span className="absolute top-3 left-3 tag bg-coral text-white text-xs">
              Featured
            </span>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[#E4405F]">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </span>
          <span className="text-xs text-muted uppercase tracking-wide font-medium">
            Instagram
          </span>
          <span className="text-xs text-muted/50">·</span>
          <span className="text-xs text-muted">
            {formatDate(post.date, post.createdAtRaw)}
          </span>
        </div>

        <p className="text-foreground leading-relaxed mb-4 line-clamp-3 whitespace-pre-line">
          {truncateCaption(post.caption)}
        </p>

        <a
          href={postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center text-sm text-coral font-medium hover:text-coral/80 transition-colors"
        >
          View on Instagram
          <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </div>
    </article>
  );
}

export function SocialFeed() {
  const posts = getFeaturedInstagramPosts(4);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <InstagramPostCard key={post.id} post={post} />
        ))}
      </div>

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
              <a
                href={link.id === "instagram" ? instagramUrl ?? link.url : link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.id === "slack" ? "Join Slack" : link.name}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          ))}
      </div>
    </div>
  );
}
