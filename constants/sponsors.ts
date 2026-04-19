export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url: string;
  type: "host" | "sponsor" | "partner";
  scale?: number; // Logo size multiplier (default 1)
}

export const sponsors: Sponsor[] = [
  {
    id: "intuit",
    name: "Intuit",
    logo: "/images/sponsors/intuit.svg",
    url: "https://www.intuit.com/ca",
    type: "sponsor",
  },
  {
    id: "kobo",
    name: "Kobo",
    logo: "/images/sponsors/kobo.png",
    url: "https://www.kobo.com",
    type: "sponsor",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    logo: "/images/sponsors/microsoft.svg",
    url: "https://www.microsoft.com/en-ca",
    type: "sponsor",
  },
  {
    id: "points",
    name: "Points",
    logo: "/images/sponsors/points.png",
    url: "https://www.points.com",
    type: "sponsor",
    scale: 1.5,
  },
  {
    id: "prema-coffee",
    name: "Prema Coffee",
    logo: "/images/sponsors/prema.png",
    url: "https://www.prematoronto.ca",
    type: "partner",
    scale: 2.2,
  },
  {
    id: "vena",
    name: "Vena",
    logo: "/images/sponsors/vena.svg",
    url: "https://venasolutions.com",
    type: "sponsor",
  },
  {
    id: "7shifts",
    name: "7shifts",
    logo: "/images/sponsors/7shifts.svg",
    url: "https://www.7shifts.com",
    type: "sponsor",
    scale: 0.75,
  },
  {
    id: "cohere",
    name: "Cohere",
    logo: "/images/sponsors/cohere.svg",
    url: "https://cohere.com",
    type: "sponsor",
    scale: 0.75,
  },
  {
    id: "brainstation",
    name: "BrainStation",
    logo: "/images/sponsors/brainstation.svg",
    url: "https://brainstation.io",
    type: "sponsor",
  },
];

export function getAllSponsors(): Sponsor[] {
  return sponsors;
}

export function getHosts(): Sponsor[] {
  return sponsors.filter((s) => s.type === "host");
}

export function getSponsorsOnly(): Sponsor[] {
  return sponsors.filter((s) => s.type === "sponsor");
}

export function getPartners(): Sponsor[] {
  return sponsors.filter((s) => s.type === "partner");
}
