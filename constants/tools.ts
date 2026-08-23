export interface Tool {
  id: string;
  name: string;
  url: string;
  /** What the company provides TechTank — shown on the sponsor page */
  contribution: string;
  /** Wordmark in public/images/tools/. Tools without one render their name (plus an icon where the ui/icons set has one). */
  logo?: string;
  /** Intrinsic pixel dimensions of the logo file, used to preserve aspect ratio */
  width?: number;
  height?: number;
  scale?: number; // Multiplier on the base row height, to even out logos with lots of built-in padding (default 1)
}

export const tools: Record<string, Tool> = {
  canva: {
    id: "canva",
    name: "Canva",
    url: "https://canva.com",
    contribution: "Canva Pro through the Canva for Nonprofits program",
    logo: "/images/tools/canva.svg",
    width: 80,
    height: 30,
  },
  slack: {
    id: "slack",
    name: "Slack",
    url: "https://slack.com",
    contribution: "Sponsors our community with a free Slack Pro workspace",
    logo: "/images/tools/slack.svg",
    width: 498,
    height: 127,
  },
  tightknit: {
    id: "tightknit",
    name: "Tightknit",
    url: "https://tightknit.ai",
    contribution: "Free access to their Slack-native community platform",
    logo: "/images/tools/tightknit.webp",
    width: 600,
    height: 120,
  },
  ideogram: {
    id: "ideogram",
    name: "Ideogram",
    url: "https://ideogram.ai",
    contribution: "Free access for event and community graphics",
    logo: "/images/tools/ideogram.svg",
    width: 119,
    height: 24,
  },
  luma: {
    id: "luma",
    name: "Luma",
    url: "https://luma.com",
    contribution: "Discounted event management for our calendar and RSVPs",
  },
};

export function getAllTools(): Tool[] {
  return Object.values(tools);
}
