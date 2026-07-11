import { Section, SectionHeader } from "@/components/ui/section";
import Image from "next/image";

export default function JoinUsPage() {
  const links = [
    {
      name: "Luma",
      href: "https://luma.com/techtank",
      icon: "/platforms/Luma_Logo.png",
    },
    {
      name: "Meetup",
      href: "https://meetup.com/techtank-to",
      icon: "/platforms/Meetup_Logo.png",
    },
    {
      name: "Slack",
      href: "/links/slack",
      icon: "/platforms/slack-cropped.png",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/techtank-to",
      icon: "/platforms/LinkedIn.png",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/techtankto",
      icon: "/platforms/Instagram.svg",
    },
    {
      name: "GitHub",
      href: "https://github.com/tech-tankorg",
      icon: "/platforms/GitHub_Invertocat_Logo.svg",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@TechTankTo",
      icon: "/platforms/youtube-logo.png",
    },
  ];
  return (
    <main className="mx-auto max-w-7xl px-8 py-12 lg:px-8 lg:py-16 min-h-dvh">
      <Section>
        <SectionHeader
          overline="No Hype, Just Tech"
          title="Join The Tech Tank Community!"
          description="A straightforward space for technical minds. Grab a drink, talk code, and exchange practical knowledge without the corporate overhead."
          className="mb-8"
        />
        <div className="flex items-center w-full gap-8">
          {links.map((link) => {
            return (
              <div key={link.name} className="group relative overflow-hidden rounded-2xl glass">
                <a href={link.href} target="_blank">
                  <div className="p-6 flex flex-col items-center justify-center">
                    <div className="relative w-12 h-12 flex flex-col items-center justify-center">
                      <Image src={link.icon} alt="" width={64} height={64} className="" />
                    </div>
                    <h2 className="text-xl mt-1">{link.name}</h2>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </Section>
    </main>
  );
}
