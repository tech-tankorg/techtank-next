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
    logo: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/isnogxcxunxl8rdlfrov",
    url: "https://www.7shifts.com",
    type: "host",
  },
  {
    id: "rakuten",
    name: "Rakuten",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rakuten_Global_Brand_Logo.svg/320px-Rakuten_Global_Brand_Logo.svg.png",
    url: "https://www.rakuten.ca",
    type: "host",
  },
  {
    id: "cohere",
    name: "Cohere",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bf/Cohere_Logo.png",
    url: "https://cohere.com",
    type: "host",
  },
  {
    id: "vena",
    name: "Vena",
    logo: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1492753737/m4w2shqvpxb20fgqmwb9.png",
    url: "https://venasolutions.com",
    type: "host",
  },
  {
    id: "points",
    name: "Points",
    logo: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1496329992/mlxoqyvsfm4ovsqm8wfb.png",
    url: "https://www.points.com",
    type: "host",
  },
  {
    id: "intuit",
    name: "Intuit",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Intuit_Logo.svg/320px-Intuit_Logo.svg.png",
    url: "https://www.intuit.com/ca",
    type: "host",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/320px-Microsoft_logo_%282012%29.svg.png",
    url: "https://www.microsoft.com/en-ca",
    type: "sponsor",
  },
  {
    id: "prema-coffee",
    name: "Prema Coffee",
    logo: "https://images.squarespace-cdn.com/content/v1/5f3c6f5c9c44fa5c6c617bcd/1597808835273-8UQXQ1LDPQJQJFQJJQJQ/Prema-Logo.png",
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
