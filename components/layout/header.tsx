"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "About", href: "/about" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Events", href: "/events" },
  { name: "Press Kit", href: "/press-kit" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-white/20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-auto" />
          <span className="font-display text-xl font-bold text-teal-dark">
            TechTank TO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-teal-dark/70 hover:text-teal-dark transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Button variant="secondary" size="sm" asChild>
            <a
              href="https://lu.ma/techtank"
              target="_blank"
              rel="noopener noreferrer"
            >
              RSVP on Luma
            </a>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <a
              href="https://forms.gle/slack-invite"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our Slack
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 -m-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/30 glass">
          <div className="px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-teal-dark hover:text-coral transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-border">
              <Button variant="secondary" size="sm" className="w-full" asChild>
                <a
                  href="https://lu.ma/techtank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RSVP on Luma
                </a>
              </Button>
              <Button variant="primary" size="sm" className="w-full" asChild>
                <a
                  href="https://forms.gle/slack-invite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join our Slack
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
