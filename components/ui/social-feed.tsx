"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/ui/custom-icons";
import { getAllSocialLinks } from "@/constants/social-links";
import {
  getCoverImage,
  getCoverVideo,
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
  const video = getCoverVideo(post);
  const postUrl = post.shortcode
    ? `https://www.instagram.com/p/${post.shortcode}/`
    : instagramUrl ?? "https://www.instagram.com/techtankto/";

  return (
    <article className="group relative glass rounded-2xl overflow-hidden transition-all flex flex-col">
      {(video || cover) && (
        <div className="relative aspect-4/5 w-full overflow-hidden bg-muted">
          {video ? (
            <video
              src={video}
              poster={cover}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : cover ? (
            <Image
              src={cover}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : null}
          {post.featured && (
            <span className="absolute top-3 left-3 tag bg-warning text-warning-foreground text-xs">
              Featured
            </span>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[#E4405F]">
            <InstagramIcon className="h-5 w-5" />
          </span>
          <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
            Instagram
          </span>
          <span className="text-xs text-muted-foreground/50">·</span>
          <span className="text-xs text-muted-foreground">
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
          className="mt-auto inline-flex items-center text-sm text-amber-dark font-medium hover:text-amber-dark/80 transition-colors"
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
