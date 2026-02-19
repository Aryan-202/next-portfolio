import { assets } from "@/public/assets";
import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    id: 1,
    title: "DAAI — AI Spreadsheet Automation",
    description: "Eliminates manual data entry and reporting by letting businesses control spreadsheets with plain English commands. Reduces reporting time by up to 80% for non-technical teams.",
    category: "AI Automation",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Google Sheets API"],
    githubUrl: "https://github.com/Aryan-202/DAAI",
    liveUrl: "https://daai-sheets.vercel.app",
    featured: true,
    image: assets.projects.daai
  },
  {
    id: 2,
    title: "Lead Generation Automation System",
    description: "Automates lead discovery, enrichment, and CRM storage for B2B businesses. Replaces manual lead research and reduces outreach preparation time by 70%, delivering qualified prospects directly into your pipeline.",
    category: "Lead Generation",
    technologies: ["n8n", "LinkedIn API", "Google Sheets", "Python"],
    githubUrl: "https://github.com/Aryan-202/n8n-scrapper.git",
    liveUrl: "https://github.com/Aryan-202/n8n-scrapper.git",
    featured: true,
    image: assets.projects.lead_scrapper
  },
    {
    id: 3,
    title: "n8n AI-Powered Web Crawler Bot",
    description: "An intelligent web crawler bot built with n8n that extracts all URLs from any webpage and delivers results via Telegram. Features AI-powered URL extraction, anti-bot protection handling, and automatic CSV generation.",
    category: "Web Automation",
    technologies: ["n8n", "OpenRouter AI", "Telegram API", "Google Sheets", "JavaScript"],
    githubUrl: "https://github.com/Aryan-202/n8n-crawler-bot.git",
    liveUrl: "https://github.com/Aryan-202/n8n-crawler-bot.git",
    featured: true,
    image: "assets/projects/n8n_crawler.png"
  }
];