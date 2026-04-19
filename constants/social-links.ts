export interface SocialLink {
  id: string;
  name: string;
  url: string;
  type: "primary" | "secondary";
  category: "events" | "social" | "contribute";
}

export const socialLinks: SocialLink[] = [
  {
    id: "luma",
    name: "Luma",
    url: "https://luma.com/techtank",
    type: "primary",
    category: "events",
  },
  {
    id: "slack",
    name: "Slack",
    url: "https://join.slack.com/t/thetechtank/shared_invite/zt-2oou5qbue-LXNB4M7~C_6CBAImj1kpJA",
    type: "primary",
    category: "social",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/techtank-to/",
    type: "secondary",
    category: "social",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/techtankto/",
    type: "secondary",
    category: "social",
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/tech-tankorg",
    type: "secondary",
    category: "contribute",
  },
];

export function getEventLinks() {
  return socialLinks.filter((link) => link.category === "events");
}

export function getSocialLinks() {
  return socialLinks.filter((link) => link.category === "social");
}

export function getContributeLinks() {
  return socialLinks.filter((link) => link.category === "contribute");
}

export function getAllSocialLinks() {
  return socialLinks;
}
