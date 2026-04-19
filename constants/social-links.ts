export interface SocialLink {
  id: string;
  name: string;
  url: string;
  type: "primary" | "secondary";
  category: "events" | "social" | "contribute";
}

export const socialLinks: Record<string, SocialLink> = {
  luma: {
    id: "luma",
    name: "Luma",
    url: "https://luma.com/techtank",
    type: "primary",
    category: "events",
  },
  slack: {
    id: "slack",
    name: "Slack",
    url: "https://join.slack.com/t/thetechtank/shared_invite/zt-2oou5qbue-LXNB4M7~C_6CBAImj1kpJA",
    type: "primary",
    category: "social",
  },
  linkedin: {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/techtank-to/",
    type: "secondary",
    category: "social",
  },
  instagram: {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/techtankto/",
    type: "secondary",
    category: "social",
  },
  github: {
    id: "github",
    name: "GitHub",
    url: "https://github.com/tech-tankorg",
    type: "secondary",
    category: "contribute",
  },
};

export function getEventLinks(): SocialLink[] {
  return Object.values(socialLinks).filter((link) => link.category === "events");
}

export function getSocialLinks(): SocialLink[] {
  return Object.values(socialLinks).filter((link) => link.category === "social");
}

export function getContributeLinks(): SocialLink[] {
  return Object.values(socialLinks).filter((link) => link.category === "contribute");
}

export function getAllSocialLinks(): SocialLink[] {
  return Object.values(socialLinks);
}
