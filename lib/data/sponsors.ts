export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url: string;
  type: "host" | "sponsor" | "partner";
}

export const sponsors: Sponsor[] = [
  {
    id: "intuit",
    name: "Intuit",
    logo: "/images/sponsors/intuit.svg",
    url: "https://www.intuit.com/ca",
    type: "host",
  },
  {
    id: "kobo",
    name: "Kobo",
    logo: "/images/sponsors/kobo.png",
    url: "https://www.kobo.com",
    type: "host",
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
    type: "host",
  },
  {
    id: "prema-coffee",
    name: "Prema Coffee",
    logo: "/images/sponsors/prema.png",
    url: "https://www.prematoronto.ca",
    type: "partner",
  },
  {
    id: "vena",
    name: "Vena",
    logo: "/images/sponsors/vena.svg",
    url: "https://venasolutions.com",
    type: "host",
  },
  {
    id: "7shifts",
    name: "7shifts",
    logo: "",
    url: "https://www.7shifts.com",
    type: "host",
  },
  {
    id: "cohere",
    name: "Cohere",
    logo: "",
    url: "https://cohere.com",
    type: "host",
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
