export interface LumaEvent {
  slug: string;
  title: string;
  date: string;
  time?: string;
  venue?: string;
  status: "past" | "upcoming";
  url: string;
  imagePath?: string;
}

export const lumaEvents: LumaEvent[] = [
  // --- Upcoming ---
  {
    slug: "supercollider-spring-fling-2026",
    title: "SUPERCOLLIDER Spring Fling ⚛️💐😀 - Toronto Tech Communities Networking Night",
    date: "2026-04-27",
    time: "6:00 PM",
    venue: "Left Field Brewery (Liberty Village)",
    status: "upcoming",
    url: "https://lu.ma/supercollider-spring-fling-2026",
  },
  {
    slug: "3ea6eq1s",
    title: "Code Diversity Monthly Coffee Chats",
    date: "2026-05-02",
    time: "11:00 AM",
    venue: "Prema Coffee and Bar",
    status: "upcoming",
    url: "https://lu.ma/3ea6eq1s",
    imagePath: "/images/luma/bca86cee-3fdb-403a-bb09-ccc095690401.avif",
  },
  // --- Past ---
  {
    slug: "qwpt54ke",
    title: "This ain't my first rodeo 🤠🪩 TECHTANK 3 YEAR ANNIVERSARY",
    date: "2026-04-16",
    time: "8:00 PM",
    venue: "Dina's Tavern",
    status: "past",
    url: "https://lu.ma/qwpt54ke",
    imagePath: "/images/luma/024f2a7f-8df2-47c2-b24d-a7c48aeab793.avif",
  },
  {
    slug: "7h4g008b",
    title: "CI Optimization: Built-In Flags You're Probably Not Using",
    date: "2026-04-13",
    time: "6:30 PM",
    venue: "BrainStation",
    status: "past",
    url: "https://lu.ma/7h4g008b",
    imagePath: "/images/luma/2bbde763-1e1f-429d-8491-c9af40b479ab.avif",
  },
  {
    slug: "cye39lls",
    title: "Code Diversity Monthly Coffee Chats",
    date: "2026-04-11",
    time: "11:00 AM",
    venue: "Prema Coffee and Bar",
    status: "past",
    url: "https://lu.ma/cye39lls",
    imagePath: "/images/luma/bca86cee-3fdb-403a-bb09-ccc095690401.avif",
  },
  {
    slug: "wzaj4vzy",
    title: "Code Diversity × TigerBaby: IWD Pottery Workshop - Clay & Connection",
    date: "2026-03-14",
    time: "11:00 AM",
    venue: "Creeds Coffee Bar",
    status: "past",
    url: "https://lu.ma/wzaj4vzy",
    imagePath: "/images/luma/5d9909f0-ece1-4b30-bdde-b4af7ec8b4da.avif",
  },
];

export const lumaEventsBySlug = Object.fromEntries(
  lumaEvents.map((e) => [e.slug, e])
) as Record<string, LumaEvent>;
