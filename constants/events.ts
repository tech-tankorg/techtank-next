import { sponsors, type Sponsor } from "./sponsors";
import { youtubeVideos, type YoutubeVideo } from "./youtube-videos";
import { photoAlbums, type PhotoAlbum } from "./photo-albums";

export type { Sponsor, YoutubeVideo, PhotoAlbum };

export interface Event {
  id: string;
  title: string;
  pitch?: string;
  date: string;
  time?: string;
  venue?: string;
  capacity?: number;
  tags: string[];
  status: "upcoming" | "past";
  rsvpUrl?: string;
  photoAlbum?: PhotoAlbum;
  youtubeVideo?: YoutubeVideo;
  host?: Sponsor;
  sponsors?: Sponsor[];
  speakers?: {
    name: string;
    title: string;
    company?: string;
    talkTitle?: string;
    image?: string;
  }[];
}

export const events: Event[] = [
  // 2026
  {
    id: "techtank-turns-3",
    title: "TECHTANK Turns 3",
    pitch: "Celebrating three years of Toronto tech community",
    date: "2026-04-20",
    time: "6:00 PM - 10:00 PM",
    venue: "Dina's Tavern",
    tags: ["Anniversary", "Social"],
    status: "past",
    photoAlbum: photoAlbums["AF1QipM-VmIz5kOG18HrCZIcQyfVLgKKsCQSS_SWIo2ODM5DME1Z7BEoQOoMD5JbBujfkA"],
  },
  {
    id: "ci-optimization-brainstation",
    title: "CI Optimization @ Brainstation",
    pitch: "Native Caching for Faster, Smarter Builds",
    date: "2026-04-13",
    time: "6:30 PM - 9:00 PM",
    venue: "BrainStation",
    capacity: 100,
    tags: ["Tech Talk", "DevOps", "CI/CD"],
    status: "past",
    sponsors: [sponsors.brainstation],
    photoAlbum: photoAlbums["AF1QipN3f4J0Ya2sv76VCQXhdkKipehavLCc3v4kcdfwqqosjY2jN-KWfT3X4wrqCiRy4w"],
    speakers: [
      {
        name: "Emily Xiong",
        title: "Software Developer",
        company: "Stackadapt",
        talkTitle: "Save CI Time with Built-In Flags",
      },
    ],
  },
  // 2025
  {
    id: "battle-frameworks-underdog",
    title: "Battle of the Frameworks: Underdog Edition",
    pitch: "Framework showdown with a twist",
    date: "2025-10-15",
    time: "6:00 PM - 9:00 PM",
    tags: ["Tech Talk", "Panel", "Frameworks"],
    status: "past",
    photoAlbum: photoAlbums["AF1QipPPmVC7Jg5of2zIp8CgLxyavCSvyu-3ekKf_nEVwqqNA3lX4VBuVijVBSvZ62dNng"],
  },
  {
    id: "agentic-programming-7shifts",
    title: "Agentic Programming 101 @ 7Shifts",
    pitch: "Introduction to AI agents and autonomous programming",
    date: "2025-09-18",
    time: "6:00 PM - 9:00 PM",
    venue: "7shifts",
    tags: ["Tech Talk", "AI", "Beginner-friendly"],
    status: "past",
    host: sponsors["7shifts"],
    photoAlbum: photoAlbums["AF1QipNHIuIQ3GEwyuE7hRn3rrREKk2jRULCv3DkSatNFoAVgNYpQrzOd3VHmpsbT5L15w"],
  },
  {
    id: "softball-sashimis-2025",
    title: "Softball Sashimis",
    pitch: "TechTank's summer softball game",
    date: "2025-06-21",
    tags: ["Sports", "Social"],
    status: "past",
    photoAlbum: photoAlbums["AF1QipMpnt5xDbFhqPFjq-d3e6NNoGiRUMTXxxbCQ-jTbOPnEE1tx6RMZEDt6s0ILEOetA"],
  },
  {
    id: "techweek-codediversity",
    title: "TechWeek CodeDiversity",
    pitch: "Special CodeDiversity event during Toronto Tech Week",
    date: "2025-06-12",
    tags: ["CodeDiversity", "Tech Week"],
    status: "past",
    photoAlbum: photoAlbums["AF1QipMingUvuBFdNA4ES6wYi3UCHzRT3k9Il3wlWnFoUu_-5X8jztaoTjtAloU7TLIMJg"],
  },
  {
    id: "anniversary-spinco",
    title: "2nd Anniversary @ SpinCo",
    pitch: "Celebrating two years with spin and socializing",
    date: "2025-04-26",
    venue: "SpinCo",
    tags: ["Anniversary", "Sports", "Social"],
    status: "past",
    photoAlbum: photoAlbums["AF1QipNsmSeqY9wxLMtqnFkDoPaj4X5T-cmuUkYkVHYHPUopyT4-b_IYhiPajDguMT-CSQ"],
  },
  {
    id: "saas-cloud-migration",
    title: "Migrating a SaaS Product across Cloud Providers",
    pitch: "Lightning talks from senior engineers on cloud migration",
    date: "2025-04-10",
    time: "6:00 PM - 9:00 PM",
    venue: "Vena Solutions",
    tags: ["Tech Talk", "Cloud", "Architecture"],
    status: "past",
    sponsors: [sponsors.vena],
    speakers: [
      { name: "Saiid Douaihy", title: "Senior Software Manager", talkTitle: "Cloud Migration Strategies" },
      { name: "Pawan Keer", title: "Senior Software Development Manager", talkTitle: "Infrastructure at Scale" },
      { name: "Lucas Tran", title: "Senior Software Developer", talkTitle: "Lessons from the Trenches" },
    ],
    youtubeVideo: youtubeVideos["4MSJq2GBsIc"],
    photoAlbum: photoAlbums["AF1QipOb1lKTP_ktVaptdlB6GndudP3YQ77pW6BR3IxcDA2YV86ZNaHZe3M0Hp2iD6UoLA"],
  },
  {
    id: "cross-browser-extensions-cohere",
    title: "Cross Browser Extensions at Cohere",
    pitch: "Building extensions that work everywhere",
    date: "2025-01-23",
    time: "6:00 PM - 9:00 PM",
    venue: "Cohere",
    tags: ["Tech Talk", "Browser Extensions"],
    status: "past",
    host: sponsors.cohere,
    youtubeVideo: youtubeVideos["f8ONw6O_rco"],
    photoAlbum: photoAlbums["AF1QipMrTfiNbI7_NSGioh-DLR6Slvp51pBjf1cShVzeToyKNr982BbkOEPmrqFYhd7vMg"],
  },
  // 2024
  {
    id: "bits-bytes-bowties",
    title: "Bits, Bytes, and Bowties",
    pitch: "Holiday party celebrating two years of TechTank",
    date: "2024-12-14",
    tags: ["Anniversary", "Social", "Holiday"],
    status: "past",
    photoAlbum: photoAlbums["AF1QipNaxy4wPaRA3EwJOduVBxlFXvGGqBsDmYRoAFw7_ChOrWGOjRo8Kk1TKYA5tiaE6g"],
  },
  {
    id: "wreck-the-rack",
    title: "Wreck the Rack: TechTank's Pool Hall Battle",
    pitch: "Competitive pool night for the tech community",
    date: "2024-11-16",
    tags: ["Sports", "Social"],
    status: "past",
    photoAlbum: photoAlbums["AF1QipOXFVlljbwPWfZ2MVv5rhWpTIaWzLb6Jdfp9aqRvtYP241OIvn3cbVMN-qooI1Fmg"],
  },
  {
    id: "gen-ai-rag-fpa",
    title: "Fueling Growth: Generative AI & RAG Applications in FP&A",
    pitch: "How AI is transforming financial planning and analysis",
    date: "2024-10-24",
    tags: ["Tech Talk", "AI", "FinTech"],
    status: "past",
    youtubeVideo: youtubeVideos["2UTsy-Lbulk"],
    photoAlbum: photoAlbums["AF1QipMfuV2mdrwgETwmivv4zQUu8pSRAzOG0D9J6j4nCpnNDKPMAgWL5ru6sYqMaMOOQg"],
  },
  {
    id: "edtech-ai-accessibility",
    title: "EdTech at the Crossroads: AI, Accessibility, and the Evolving Classroom",
    pitch: "Panel discussion on the future of education technology",
    date: "2024-10-10",
    tags: ["Panel", "EdTech", "AI", "Accessibility"],
    status: "past",
    youtubeVideo: youtubeVideos["N50r7eIEIS0"],
    photoAlbum: photoAlbums["AF1QipMwzeGDJqNkRSSagw_D8v3F73XeaPR9kmpQcpYjHCCuMx7nZ94feDaTGMA55whrLg"],
  },
  {
    id: "forensics-rsc",
    title: "The Forensics of React Server Components",
    pitch: "Deep dive into how RSC actually works",
    date: "2024-09-19",
    tags: ["Tech Talk", "React", "Web Dev"],
    status: "past",
    youtubeVideo: youtubeVideos["NOlSKs5PLpM"],
    photoAlbum: photoAlbums["AF1QipMPoK9UuL4g8MKPP8Tk8tI2FTppYtQQ-Nf0ga6DZXjFmqXT5SHTYikca8rhmltqhg"],
  },
  {
    id: "fyre-festival",
    title: "Fyre Festival",
    pitch: "TechTank's infamous summer social",
    date: "2024-09-07",
    tags: ["Social"],
    status: "past",
    photoAlbum: photoAlbums["AF1QipMgtyV8CNEuz-qajiP1CHJXhOThudbAQwu8JRpN_OSpPnjsb1H8PBPNI1old3yukQ"],
  },
  {
    id: "ai-insights-experts",
    title: "Unlocking AI In-Depth Insights from Leading Experts",
    pitch: "Panel with AI industry leaders",
    date: "2024-08-22",
    tags: ["Panel", "AI"],
    status: "past",
    youtubeVideo: youtubeVideos["RUco7XrbMqk"],
    photoAlbum: photoAlbums["AF1QipMlGtrOSia0VXZaDqAcjItENfxwXFdxJO2A9QCKGwXcRPn46nY5e_DB9puMgfky9Q"],
  },
  {
    id: "tank-sports-2024",
    title: "Tank Sports",
    pitch: "Multi-sport summer event",
    date: "2024-08-10",
    tags: ["Sports", "Social"],
    status: "past",
    photoAlbum: photoAlbums["AF1QipNm1fut4HKxSRTpQ-6RkNQDkXsrzHhYfCaQwkoZAOWpw6b64L3iLU1yA3MHl_r8aQ"],
  },
  {
    id: "tankolympics",
    title: "TankOlympics",
    pitch: "Olympic-themed games and competitions",
    date: "2024-07-27",
    tags: ["Sports", "Social"],
    status: "past",
    photoAlbum: photoAlbums["AF1QipMaV0hBrR-eYX20MmtDBemZSZGUE3Y_kvO0JF9Cfm4crS27KpoU9tuY2u1aGNXWAA"],
  },
  {
    id: "softball-sashimis-2024",
    title: "Softball Sashimi's",
    pitch: "Summer softball game",
    date: "2024-07-13",
    tags: ["Sports", "Social"],
    status: "past",
    photoAlbum: photoAlbums["AF1QipMmBy4aNt0rNAsHwMagst6jvo93awXW5yyWd4yCw9g5u0vdHpN7BRRHedJ8ofNEpQ"],
  },
  {
    id: "sausages-cause-bbq",
    title: "Sausages for a Cause BBQ",
    pitch: "Charity BBQ event",
    date: "2024-06-15",
    tags: ["Social", "Charity"],
    status: "past",
    photoAlbum: photoAlbums["AF1QipNM9FBTNWpRR8DWT99MItot1HtgKiLEccHtwjYZIXBqPyQa8s4-ATrTlPNbCjf1gA"],
  },
  {
    id: "anniversary-social-2024",
    title: "Anniversary Social",
    pitch: "Celebrating one year of TechTank",
    date: "2024-04-20",
    tags: ["Anniversary", "Social"],
    status: "past",
    photoAlbum: photoAlbums["AF1QipN5YllsNHTVeUJKlSnd8bD4jyTo6muTTiMdHifF3DhT0olsYLxMbHynTtJ8jHJ7Uw"],
  },
  {
    id: "cottage-trip",
    title: "Cottage Trip",
    pitch: "Winter getaway for the community",
    date: "2024-02-17",
    tags: ["Social", "Trip"],
    status: "past",
    photoAlbum: photoAlbums["AF1QipOdL17zISJwXuA-sOQpNz71wSZ5plWDiQ112VjuKLxMFMX3hLObJUJ6v5J_c-asHA"],
  },
  // 2023
  {
    id: "niagara-glen-hike",
    title: "Niagara Glen Hike",
    pitch: "Fall hike at Niagara Glen",
    date: "2023-10-28",
    tags: ["Social", "Outdoors"],
    status: "past",
    photoAlbum: photoAlbums["AF1QipOg2itOXIvPeeQKFEFScI2UCeOojdcuGpMGoJXJftFFaKlCVDhzhdkk2PNfrICpzA"],
  },
  {
    id: "halloween-2023",
    title: "Halloween",
    pitch: "Spooky season social",
    date: "2023-10-31",
    tags: ["Social", "Holiday"],
    status: "past",
    photoAlbum: photoAlbums["AF1QipMbVRHwXl8qR8eWRaxk0jqxbUxRBD4ic1arOmYFPQQNPaFonrTiGJU4pf_rfFFMxg"],
  },
  {
    id: "bowling-2023",
    title: "Bowling",
    pitch: "Where it all began",
    date: "2023-09-16",
    tags: ["Sports", "Social"],
    status: "past",
    photoAlbum: photoAlbums["AF1QipNJf7YltaKvL5Cq_bX4O8Nt0heaFeetF1UuqVj54JoxVEzjPm4F85nQPHj_LDKpdw"],
  },
];

// CodeDiversity events (20+ monthly meetups)
export const codeDiversityCount = 20;

export function getUpcomingEvents(): Event[] {
  return events
    .filter((e) => e.status === "upcoming")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getPastEvents(): Event[] {
  return events
    .filter((e) => e.status === "past")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRecentEvents(count: number = 4): Event[] {
  return getPastEvents().slice(0, count);
}

export function getEventStats() {
  const totalMainEvents = events.length;
  const totalWithCodeDiversity = totalMainEvents + codeDiversityCount;

  return {
    totalEvents: `${totalWithCodeDiversity}+`,
    avgAttendance: "40-100",
    cadence: "Monthly",
    since: 2023,
  };
}
