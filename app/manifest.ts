import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TechTank TO - Toronto's Tech Community",
    short_name: "TechTank TO",
    description: "Foster a supportive and inclusive environment where people of all skill levels can explore, create, and thrive in technology. Monthly in-person events in Toronto.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1B4B5A",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
