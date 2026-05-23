import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host");

  return {
    title: {
      default: "TechTank TO — Toronto's Tech Community",
      template: "%s — TechTank TO",
    },
    description:
      "Foster a supportive and inclusive environment where people of all skill levels can explore, create, and thrive in technology. Monthly in-person events in Toronto.",
    openGraph: {
      title: "TechTank TO — Toronto's Tech Community",
      description:
        "Foster a supportive and inclusive environment where people of all skill levels can explore, create, and thrive in technology.",
      url: host,
      siteName: "TechTank TO",
      images: [
        {
          url: "/images/logos/light.png",
          width: 1200,
          height: 630,
          alt: "TechTank TO",
        },
      ],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "TechTank TO — Toronto's Tech Community",
      description:
        "Foster a supportive and inclusive environment where people of all skill levels can explore, create, and thrive in technology.",
    },
    robots: {
      index: true,
      follow: true,
    },
    appleWebApp: {
      title: "TechTank TO",
      statusBarStyle: "default",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#1B4B5A",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange themes={["light", "dark"]}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
