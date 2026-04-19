export interface SocialLink {
  id: string;
  name: string;
  url: string;
  type: "primary" | "secondary";
}

export const socialLinks: SocialLink[] = [
  {
    id: "slack",
    name: "Slack",
    url: "https://join.slack.com/t/thetechtank/shared_invite/zt-2oou5qbue-LXNB4M7~C_6CBAImj1kpJA",
    type: "primary",
  },
  {
    id: "luma",
    name: "Luma",
    url: "https://luma.com/techtank?period=past",
    type: "primary",
  },
  {
    id: "meetup",
    name: "Meetup",
    url: "https://www.meetup.com/techtank-to/",
    type: "secondary",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/techtank-to/",
    type: "secondary",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/techtankto/",
    type: "secondary",
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/tech-tankorg",
    type: "secondary",
  },
];

export function getPrimaryLinks() {
  return socialLinks.filter((link) => link.type === "primary");
}

export function getSecondaryLinks() {
  return socialLinks.filter((link) => link.type === "secondary");
}

export function getAllSocialLinks() {
  return socialLinks;
}
