import type { Metadata } from "next";
import { TeamPageContent } from "./team-client";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the volunteers, organizers, and board members who make TechTank TO happen.",
};

export default function TeamPage() {
  return <TeamPageContent />;
}
