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
    image: assets.projects.daai // Use the imported image
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with user authentication, payment integration, and admin dashboard.",
    category: "Full Stack",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Prisma"],
    githubUrl: "https://github.com/Aryan-202/ecommerce",
    liveUrl: "https://shop-aryan.vercel.app",
    featured: true,
    image: '/images/projects/ecommerce.jpg' // Example path for other projects
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app for managing tasks with drag & drop functionality and real-time updates.",
    category: "Web App",
    technologies: ["React", "Firebase", "Material UI", "React DnD"],
    githubUrl: "https://github.com/Aryan-202/task-manager",
    liveUrl: "https://tasks-aryan.vercel.app",
    featured: true,
    image: '/images/projects/task-manager.jpg' 
  },
];