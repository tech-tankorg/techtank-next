export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url: string;
  type: "host" | "sponsor" | "partner";
}

export const sponsors: Sponsor[] = [
  {
    id: "7shifts",
    name: "7shifts",
    logo: "/images/sponsors/7shifts.svg",
    url: "https://7shifts.com",
    type: "host",
  },
  {
    id: "rakuten",
    name: "Rakuten",
    logo: "/images/sponsors/rakuten.svg",
    url: "https://rakuten.com",
    type: "host",
  },
  {
    id: "cohere",
    name: "Cohere",
    logo: "/images/sponsors/cohere.svg",
    url: "https://cohere.com",
    type: "host",
  },
  {
    id: "vena",
    name: "Vena",
    logo: "/images/sponsors/vena.svg",
    url: "https://venasolutions.com",
    type: "host",
  },
  {
    id: "points",
    name: "Points",
    logo: "/images/sponsors/points.svg",
    url: "https://points.com",
    type: "host",
  },
  {
    id: "intuit",
    name: "Intuit",
    logo: "/images/sponsors/intuit.svg",
    url: "https://intuit.com",
    type: "host",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    logo: "/images/sponsors/microsoft.svg",
    url: "https://microsoft.com",
    type: "sponsor",
  },
  {
    id: "prema-coffee",
    name: "Prema Coffee",
    logo: "/images/sponsors/prema.svg",
    url: "https://www.prematoronto.ca",
    type: "partner",
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
