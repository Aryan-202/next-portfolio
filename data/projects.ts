import { assets } from "@/public/assets";
import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    id: 1,
    title: "DAAI",
    description: "AI spreadsheet that runs on commands, not code.",
    category: "GenAI",
    technologies: ["Next.js", "TypeScript", "Jupyter", "Framer Motion"],
    githubUrl: "https://github.com/Aryan-202/DAAI",
    liveUrl: "daai-sheets.vercel.app ",
    featured: true,
    image: assets.projects.daai
  },
  {
    id: 2,
    title: "Leades Scrapper",
    description: "scrapp leads for your business ideas",
    category: "n8n services",
    technologies: ["linkedin api", "google sheets",],
    githubUrl: "https://github.com/Aryan-202/n8n-scrapper.git",
    liveUrl: "https://github.com/Aryan-202/n8n-scrapper.git",
    featured: true,
    image: assets.projects.lead_scrapper
  },
  {
    id: 3,
    title: "My Portfolio",
    description: "A productivity app for managing tasks with drag & drop functionality and real-time updates.",
    category: "Web App",
    technologies: ["Next.js", "SupaBase", "Motion", "TypeScript"],
    githubUrl: "https://github.com/Aryan-202/next-portfolio.git",
    liveUrl: "aryan-vishwakarma.vercel.app ",
    featured: true,
    image: assets.projects.portfolio
  },
];