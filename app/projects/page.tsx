import Projects from "@/components/layouts/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | AI Automation, Mobile Apps & Web Dev Portfolio — Aryan Vishwakarma",
  description:
    "Explore Aryan Vishwakarma's portfolio projects — AI automation workflows, n8n crawlers, DAAI AI spreadsheets, mobile apps, websites & custom software solutions built for real business impact.",
  keywords: [
    "Aryan Vishwakarma projects",
    "AI Automation Projects India",
    "n8n Project Examples",
    "DAAI AI Spreadsheet",
    "Mobile App Portfolio",
    "Web Development Portfolio India",
    "Automation Engineer Portfolio",
    "Full Stack Developer Portfolio",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Portfolio Projects | AI Automation, Mobile & Web — Aryan Vishwakarma",
    description:
      "Real-world automation, mobile app, and web development projects that save time, generate leads, and scale businesses.",
    url: "https://aryan-vishwakarma.vercel.app/projects",
    siteName: "Aryan Vishwakarma",
    images: [{ url: "/images/profile/profile.jpeg", width: 1200, height: 630, alt: "Projects by Aryan Vishwakarma" }],
    type: "website",
  },
};

export default function ProjectsPage() {
  return <Projects />;
}