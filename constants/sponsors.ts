export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url: string;
  type: "host" | "sponsor" | "partner";
  scale?: number; // Logo size multiplier (default 1)
}

export const sponsors: Record<string, Sponsor> = {
  intuit: {
    id: "intuit",
    name: "Intuit",
    logo: "/images/sponsors/intuit.svg",
    url: "https://intuit.com",
    type: "sponsor",
  },
  kobo: {
    id: "rakuten-kobo",
    name: "Rakuten Kobo",
    logo: "/images/sponsors/rakuten-kobo.svg",
    url: "https://kobo.com",
    type: "sponsor",
  },
  docebo: {
    id: "docebo",
    name: "Docebo",
    logo: "/images/sponsors/docebo.svg",
    url: "https://docebo.com",
    type: "sponsor",
    scale: 0.8,
  },
  microsoft: {
    id: "microsoft",
    name: "Microsoft",
    logo: "/images/sponsors/microsoft.svg",
    url: "https://microsoft.com",
    type: "sponsor",
    scale: 1.25,
  },
  points: {
    id: "points",
    name: "Points",
    logo: "/images/sponsors/points.png",
    url: "https://points.com",
    type: "sponsor",
    scale: 1.75,
  },
  "prema-coffee": {
    id: "prema-coffee",
    name: "Prema Coffee",
    logo: "/images/sponsors/prema.png",
    url: "https://prematoronto.ca",
    type: "partner",
    scale: 1.75,
  },
  vena: {
    id: "vena",
    name: "Vena",
    logo: "/images/sponsors/vena.svg",
    url: "https://venasolutions.com",
    type: "sponsor",
    scale: 1.25,
  },
  "7shifts": {
    id: "7shifts",
    name: "7shifts",
    logo: "/images/sponsors/7shifts.svg",
    url: "https://7shifts.com",
    type: "sponsor",
    scale: 1.25,
  },
  cohere: {
    id: "cohere",
    name: "Cohere",
    logo: "/images/sponsors/cohere.svg",
    url: "https://cohere.com",
    type: "sponsor",
  },
  brainstation: {
    id: "brainstation",
    name: "BrainStation",
    logo: "/images/sponsors/brainstation.svg",
    url: "https://brainstation.io",
    type: "sponsor",
  },
  posthog: {
    id: "posthog",
    name: "PostHog",
    logo: "/images/sponsors/posthog.svg",
    url: "https://posthog.com",
    type: "sponsor",
  },
};

export function getAllSponsors(): Sponsor[] {
  return Object.values(sponsors);
}
