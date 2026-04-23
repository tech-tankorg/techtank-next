"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useAppStore } from "@/stores/app-state";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Events", href: "/events" },
  { name: "Code of Conduct", href: "/legal/code-of-conduct" },
];

export function Header() {
  const { mobileMenuOpen, setMobileMenuOpen, toggleMobileMenu } = useAppStore();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/light.svg"
            alt="TechTank TO"
            width={192}
            height={56}
            className="h-10 w-auto dark:hidden"
            priority
          />
          <Image
            src="/images/logos/dark.svg"
            alt="TechTank TO"
            width={192}
            height={56}
            className="h-10 w-auto hidden dark:block"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + theme toggle */}
        <div className="hidden lg:flex lg:items-center lg:gap-2">
          <ThemeToggle />
          <Button variant="primary" size="sm" asChild>
            <Link href="/#join-us">
              Join us
            </Link>
          </Button>
        </div>

        {/* Mobile: theme toggle + menu button */}
        <div className="flex lg:hidden items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            className="p-2 -m-2 text-foreground"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <div className="px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-foreground hover:text-ring transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Button variant="primary" size="sm" className="w-full" asChild>
                <Link href="/#join-us">
                  Join us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
