"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const legalDocs = [
  { name: "Code of Conduct", href: "/legal/code-of-conduct" },
  { name: "Privacy Policy", href: "/legal/privacy-policy" },
  { name: "Terms of Service", href: "/legal/terms-of-service" },
];

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Sidebar - Table of Contents */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Legal Documents
              </h2>
              <nav className="space-y-1">
                {legalDocs.map((doc) => {
                  const isActive = pathname === doc.href;
                  return (
                    <Button key={doc.href} variant="nav" size="sm" isActive={isActive} asChild>
                      <Link href={doc.href}>{doc.name}</Link>
                    </Button>
                  );
                })}
              </nav>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Questions about these documents?
                </p>
                <a
                  href="mailto:techtankto@gmail.com"
                  className="text-sm font-medium text-ring hover:text-ring/80 transition-colors"
                >
                  Contact us
                </a>
              </div>
            </div>
          </aside>

          {/* Mobile Navigation */}
          <div className="lg:hidden mb-8">
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
              {legalDocs.map((doc) => {
                const isActive = pathname === doc.href;
                return (
                  <Button key={doc.href} variant="nav" size="sm" isActive={isActive} className="shrink-0" asChild>
                    <Link href={doc.href}>{doc.name}</Link>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Main Content */}
          <main className="lg:col-span-9">
            <article className="prose prose-slate max-w-none">
              {children}
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
