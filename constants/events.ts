export interface Event {
  id: string;
  title: string;
  pitch?: string;
  date: string;
  time?: string;
  venue?: string;
  venueAddress?: string;
  capacity?: number;
  tags: string[];
  status: "upcoming" | "past";
  rsvpUrl?: string;
  photosUrl?: string;
  youtubeUrl?: string;
  posterImage?: string;
  host?: {
    name: string;
    logo?: string;
    url?: string;
  };
  sponsor?: {
    name: string;
    logo?: string;
    url?: string;
  };
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
  },
  {
    id: "ci-optimization-brainstation",
    title: "CI Optimization @ Brainstation",
    pitch: "Native Caching for Faster, Smarter Builds",
    date: "2026-04-13",
    time: "6:30 PM - 9:00 PM",
    venue: "BrainStation",
    venueAddress: "460 King St W, Toronto",
    capacity: 100,
    tags: ["Tech Talk", "DevOps", "CI/CD"],
    status: "past",
    posterImage: "/images/events/brainstation-meetup.png",
    sponsor: {
      name: "BrainStation",
      url: "https://brainstation.io",
    },
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
    host: {
      name: "7shifts",
      url: "https://www.7shifts.com",
    },
  },
  {
    id: "softball-sashimis-2025",
    title: "Softball Sashimis",
    pitch: "TechTank's summer softball game",
    date: "2025-06-21",
    tags: ["Sports", "Social"],
    status: "past",
  },
  {
    id: "techweek-codediversity",
    title: "TechWeek CodeDiversity",
    pitch: "Special CodeDiversity event during Toronto Tech Week",
    date: "2025-06-12",
    tags: ["CodeDiversity", "Tech Week"],
    status: "past",
  },
  {
    id: "anniversary-spinco",
    title: "2nd Anniversary @ SpinCo",
    pitch: "Celebrating two years with spin and socializing",
    date: "2025-04-26",
    venue: "SpinCo",
    tags: ["Anniversary", "Sports", "Social"],
    status: "past",
  },
  {
    id: "saas-cloud-migration",
    title: "Migrating a SaaS Product across Cloud Providers",
    pitch: "Lightning talks from senior engineers on cloud migration",
    date: "2025-04-10",
    time: "6:00 PM - 9:00 PM",
    venue: "Vena Solutions",
    venueAddress: "2 Fraser Ave Suite 200",
    tags: ["Tech Talk", "Cloud", "Architecture"],
    status: "past",
    posterImage: "/images/events/triple-speaker-poster.png",
    sponsor: {
      name: "Vena",
      url: "https://venasolutions.com",
    },
    speakers: [
      { name: "Saiid Douaihy", title: "Senior Software Manager", talkTitle: "Cloud Migration Strategies" },
      { name: "Pawan Keer", title: "Senior Software Development Manager", talkTitle: "Infrastructure at Scale" },
      { name: "Lucas Tran", title: "Senior Software Developer", talkTitle: "Lessons from the Trenches" },
    ],
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
    host: {
      name: "Cohere",
      url: "https://cohere.com",
    },
  },
  // 2024
  {
    id: "bits-bytes-bowties",
    title: "Bits, Bytes, and Bowties",
    pitch: "Holiday party celebrating two years of TechTank",
    date: "2024-12-14",
    tags: ["Anniversary", "Social", "Holiday"],
    status: "past",
  },
  {
    id: "wreck-the-rack",
    title: "Wreck the Rack: TechTank's Pool Hall Battle",
    pitch: "Competitive pool night for the tech community",
    date: "2024-11-16",
    tags: ["Sports", "Social"],
    status: "past",
  },
  {
    id: "gen-ai-rag-fpa",
    title: "Fueling Growth: Generative AI & RAG Applications in FP&A",
    pitch: "How AI is transforming financial planning and analysis",
    date: "2024-10-24",
    tags: ["Tech Talk", "AI", "FinTech"],
    status: "past",
  },
  {
    id: "edtech-ai-accessibility",
    title: "EdTech at the Crossroads: AI, Accessibility, and the Evolving Classroom",
    pitch: "Panel discussion on the future of education technology",
    date: "2024-10-10",
    tags: ["Panel", "EdTech", "AI", "Accessibility"],
    status: "past",
  },
  {
    id: "forensics-rsc",
    title: "The Forensics of React Server Components",
    pitch: "Deep dive into how RSC actually works",
    date: "2024-09-19",
    tags: ["Tech Talk", "React", "Web Dev"],
    status: "past",
  },
  {
    id: "fyre-festival",
    title: "Fyre Festival",
    pitch: "TechTank's infamous summer social",
    date: "2024-09-07",
    tags: ["Social"],
    status: "past",
  },
  {
    id: "ai-insights-experts",
    title: "Unlocking AI In-Depth Insights from Leading Experts",
    pitch: "Panel with AI industry leaders",
    date: "2024-08-22",
    tags: ["Panel", "AI"],
    status: "past",
  },
  {
    id: "tank-sports-2024",
    title: "Tank Sports",
    pitch: "Multi-sport summer event",
    date: "2024-08-10",
    tags: ["Sports", "Social"],
    status: "past",
  },
  {
    id: "tankolympics",
    title: "TankOlympics",
    pitch: "Olympic-themed games and competitions",
    date: "2024-07-27",
    tags: ["Sports", "Social"],
    status: "past",
  },
  {
    id: "softball-sashimis-2024",
    title: "Softball Sashimi's",
    pitch: "Summer softball game",
    date: "2024-07-13",
    tags: ["Sports", "Social"],
    status: "past",
  },
  {
    id: "sausages-cause-bbq",
    title: "Sausages for a Cause BBQ",
    pitch: "Charity BBQ event",
    date: "2024-06-15",
    tags: ["Social", "Charity"],
    status: "past",
  },
  {
    id: "anniversary-social-2024",
    title: "Anniversary Social",
    pitch: "Celebrating one year of TechTank",
    date: "2024-04-20",
    tags: ["Anniversary", "Social"],
    status: "past",
  },
  {
    id: "cottage-trip",
    title: "Cottage Trip",
    pitch: "Winter getaway for the community",
    date: "2024-02-17",
    tags: ["Social", "Trip"],
    status: "past",
  },
  // 2023
  {
    id: "niagara-glen-hike",
    title: "Niagara Glen Hike",
    pitch: "Fall hike at Niagara Glen",
    date: "2023-10-28",
    tags: ["Social", "Outdoors"],
    status: "past",
  },
  {
    id: "halloween-2023",
    title: "Halloween",
    pitch: "Spooky season social",
    date: "2023-10-31",
    tags: ["Social", "Holiday"],
    status: "past",
  },
  {
    id: "bowling-2023",
    title: "Bowling",
    pitch: "Where it all began",
    date: "2023-09-16",
    tags: ["Sports", "Social"],
    status: "past",
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
