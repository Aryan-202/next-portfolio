export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DAAI",
    description: "AI spreadsheet that runs on commands, not code.",
    category: "GenAI",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Aryan-202/DAAI",
    liveUrl: "https://github.com/Aryan-202/DAAI",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with user authentication, payment integration, and admin dashboard.",
    category: "Full Stack",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Prisma"],
    githubUrl: "https://github.com/Aryan-202/ecommerce",
    liveUrl: "https://shop-aryan.vercel.app",
    featured: true
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app for managing tasks with drag & drop functionality and real-time updates.",
    category: "Web App",
    technologies: ["React", "Firebase", "Material UI", "React DnD"],
    githubUrl: "https://github.com/Aryan-202/task-manager",
    liveUrl: "https://tasks-aryan.vercel.app",
    featured: true
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather application with location-based forecasts and interactive charts.",
    category: "Web Development",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS Modules"],
    githubUrl: "https://github.com/Aryan-202/weather-app",
    liveUrl: "https://weather-aryan.vercel.app",
    featured: false
  },
  {
    id: 5,
    title: "Blog CMS",
    description: "Content Management System for blogging with markdown support and SEO optimization.",
    category: "Full Stack",
    technologies: ["Next.js", "Sanity.io", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/Aryan-202/blog-cms",
    featured: false
  },
  {
    id: 6,
    title: "AI Chat Assistant",
    description: "AI-powered chat application with natural language processing and conversation history.",
    category: "AI/ML",
    technologies: ["Python", "FastAPI", "React", "OpenAI API"],
    githubUrl: "https://github.com/Aryan-202/ai-chat",
    featured: false
  }
];