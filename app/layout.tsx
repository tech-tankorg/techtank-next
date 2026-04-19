import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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

export const metadata: Metadata = {
  title: {
    default: "TechTank TO — Toronto's Tech Community",
    template: "%s — TechTank TO",
  },
  description:
    "Foster a supportive and inclusive environment where people of all skill levels can explore, create, and thrive in technology. Monthly in-person events in Toronto.",
  metadataBase: new URL("https://techtankto.com"),
  openGraph: {
    title: "TechTank TO — Toronto's Tech Community",
    description:
      "Foster a supportive and inclusive environment where people of all skill levels can explore, create, and thrive in technology.",
    url: "https://techtankto.com",
    siteName: "TechTank TO",
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
};

export const viewport: Viewport = {
  themeColor: "#1B4B5A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
