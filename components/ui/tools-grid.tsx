import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { LumaIcon } from "@/components/ui/icons";
import { getAllTools, type Tool } from "@/constants/tools";

const tools = getAllTools();

function ToolLogo({ tool }: { tool: Tool }) {
  if (tool.logo && tool.width && tool.height) {
    return (
      <Image
        src={tool.logo}
        alt={`${tool.name} logo`}
        width={tool.width}
        height={tool.height}
        className="object-contain opacity-80 transition-opacity group-hover:opacity-100 dark:brightness-0 dark:invert"
        style={{
          width: "auto",
          height: `calc(var(--logo-height) * ${tool.scale ?? 1})`,
        }}
      />
    );
  }
  // No wordmark file — fall back to icon (where the ui/icons set has one) + name
  return (
    <span className="flex items-center gap-2 text-foreground opacity-80 transition-opacity group-hover:opacity-100">
      {tool.id === "luma" && <LumaIcon className="size-[var(--logo-height)]" />}
      <span className="font-display text-lg font-semibold" style={{ fontSize: "calc(var(--logo-height) * 0.75)" }}>
        {tool.name}
      </span>
    </span>
  );
}

/** Detailed grid for the sponsor page — each tool with what the company provides. */
export function ToolsGrid({ className }: { className?: string }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className ?? ""}`}>
      {tools.map((tool) => (
        <a
          key={tool.id}
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-ring/50 [--logo-height:1.75rem]"
        >
          <div className="mb-3 flex h-8 items-center justify-between gap-2">
            <ToolLogo tool={tool} />
            <ExternalLink className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{tool.contribution}</p>
        </a>
      ))}
    </div>
  );
}

/** Compact logo strip for the homepage. */
export function ToolsStrip({ className }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-10 gap-y-6 ${className ?? ""}`}>
      {tools.map((tool) => (
        <a
          key={tool.id}
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex shrink-0 items-center justify-center [--logo-height:1.5rem] lg:[--logo-height:1.75rem]"
          title={tool.name}
        >
          <ToolLogo tool={tool} />
        </a>
      ))}
    </div>
  );
}
