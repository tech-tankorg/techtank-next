import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

const footerLinks = {
  community: {
    title: "Community",
    links: [
      { name: "Luma", href: "https://luma.com/techtank", external: true },
      { name: "Slack", href: "https://join.slack.com/t/thetechtank/shared_invite/zt-2oou5qbue-LXNB4M7~C_6CBAImj1kpJA", external: true },
      { name: "LinkedIn", href: "https://ca.linkedin.com/company/techtank-to", external: true },
      { name: "Instagram", href: "https://www.instagram.com/techtankto/", external: true },
      { name: "GitHub", href: "https://github.com/tech-tankorg", external: true },
      { name: "YouTube", href: "https://www.youtube.com/@TechTankTo", external: true },
    ],
  },
  getInvolved: {
    title: "Get Involved",
    links: [
      { name: "Speak", href: "/get-involved/speaker", external: false },
      { name: "Host", href: "/get-involved/host", external: false },
      { name: "Sponsor", href: "/get-involved/sponsor", external: false },
      { name: "Volunteer", href: "/get-involved/volunteer", external: false },
      { name: "Events", href: "/events", external: false },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Media Kit", href: "/media-kit", external: false },
      { name: "Design System", href: "/design-system", external: false },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Terms of Service", href: "/legal/terms-of-service", external: false },
      { name: "Privacy Policy", href: "/legal/privacy-policy", external: false },
      { name: "Code of Conduct", href: "/legal/code-of-conduct", external: false },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-teal-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Top section */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/dark.svg"
                alt="TechTank TO"
                width={128}
                height={56}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Toronto&apos;s inclusive tech community. Monthly events since 2022.
            </p>
          </div>

          {/* Links columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} TechTank TO. All rights reserved.
            </p>
            <a
              href="mailto:techtankto@gmail.com"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              techtankto@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
