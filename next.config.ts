import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.crunchbase.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "images.lumacdn.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/links/slack",
        destination: "https://join.slack.com/t/thetechtank/shared_invite/zt-3zhdtiavp-afxTnTcQdXEdfx~0mjXGtA",
        permanent: false,
      },
      {
        source: "/join-us",
        destination: "/get-involved",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
