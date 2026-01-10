import { assets } from "@/public/assets";
import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image: string | StaticImageData; 
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DAAI",
    description: "AI spreadsheet that runs on commands, not code.",
    category: "GenAI",
    technologies: ["Next.js", "TypeScript", "Jupyter", "Framer Motion"],
    githubUrl: "https://github.com/Aryan-202/DAAI",
    liveUrl: "https://github.com/Aryan-202/DAAI",
    featured: true,
    image: assets.projects.daai
  },
  {
    id: 2,
    title: "Leades Scrapper",
    description: "scrapp leads for your business ideas",
    category: "n8n services",
    technologies: ["linkedin api", "google sheets",],
    githubUrl: "https://github.com/Aryan-202/ecommerce",
    liveUrl: "https://shop-aryan.vercel.app",
    featured: true,
    image: assets.projects.lead_scrapper
  },
  {
    id: 3,
    title: "My Portfolio",
    description: "A productivity app for managing tasks with drag & drop functionality and real-time updates.",
    category: "Web App",
    technologies: ["React", "Firebase", "Material UI", "React DnD"],
    githubUrl: "https://github.com/Aryan-202/task-manager",
    liveUrl: "https://tasks-aryan.vercel.app",
    featured: true,
    image: assets.projects.portfolio
  },
];