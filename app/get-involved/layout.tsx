"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const subNav = [
  { name: "Overview", href: "/get-involved" },
  { name: "Speaker", href: "/get-involved/speaker" },
  { name: "Host", href: "/get-involved/host" },
  { name: "Sponsor", href: "/get-involved/sponsor" },
  { name: "Volunteer", href: "/get-involved/volunteer" },
];

export default function GetInvolvedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      {/* Sticky Sub-Nav */}
      <nav className="sticky top-[65px] z-40 bg-white/70 backdrop-blur-xl shadow-[inset_0_4px_8px_-4px_rgba(0,0,0,0.08)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-center py-3">
            {/* Sub-navigation */}
            <div className="flex flex-wrap items-center justify-center gap-1">
              {subNav.map((item) => {
                const isActive =
                  item.href === "/get-involved"
                    ? pathname === "/get-involved"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      isActive
                        ? "bg-teal text-white"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
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
