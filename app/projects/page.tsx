import Projects from "@/components/layouts/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my latest automation projects, AI tools, and workflow solutions. From n8n crawlers to DAAI AI spreadsheets.",
};

export default function ProjectsPage() {
  return <Projects />;
}