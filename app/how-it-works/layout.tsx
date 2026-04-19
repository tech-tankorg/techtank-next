"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const subNav = [
  { name: "Overview", href: "/how-it-works" },
  { name: "Speaker", href: "/how-it-works/speaker" },
  { name: "Host", href: "/how-it-works/host" },
  { name: "Sponsor", href: "/how-it-works/sponsor" },
  { name: "Volunteer", href: "/how-it-works/volunteer" },
];

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      {/* Sticky Sub-Nav */}
      <nav className="sticky top-[65px] z-40 bg-white/70 backdrop-blur-xl shadow-[inset_0_4px_8px_-4px_rgba(0,0,0,0.08)]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center justify-center py-3">
            {/* Sub-navigation */}
            <div className="flex items-center justify-center gap-1 overflow-x-auto -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide">
              {subNav.map((item) => {
                const isActive =
                  item.href === "/how-it-works"
                    ? pathname === "/how-it-works"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      isActive
                        ? "bg-teal text-white"
                        : "text-muted hover:text-foreground hover:bg-muted/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>


          </div>
        </div>
      </nav>

      {/* Page Content */}
      {children}
    </div>
  );
}
