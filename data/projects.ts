import { assets } from "@/public/assets";
import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    id: 1,
    title: "DAAI — AI Spreadsheet Automation",
    description:
      "Eliminates manual data entry and reporting by letting businesses control spreadsheets with plain English commands. Reduces reporting time by up to 80% for non-technical teams.",
    category: "AI Automation",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Google Sheets API"],
    githubUrl: "https://github.com/Aryan-202/DAAI",
    liveUrl: "https://daai-sheets.vercel.app",
    featured: true,
    image: assets.projects.daai,
  },
  {
    id: 2,
    title: "AI Lead Capture & Email Automation System",
    description:
      "An AI-powered webhook-based lead capture system that automatically processes incoming inquiries, extracts structured data using Gemini AI, stores leads in Google Sheets, and triggers personalized email responses. Eliminates manual follow-ups and ensures instant response to every prospect.",
    category: "AI Automation",
    technologies: [
      "n8n",
      "Google Gemini",
      "Google Sheets API",
      "Gmail API",
      "Webhooks",
    ],
    githubUrl: "https://github.com/Aryan-202/n8n-scrapper.git",
    liveUrl: "https://github.com/Aryan-202/n8n-scrapper.git",
    featured: true,
    image: assets.projects.n8n_crawler,
  },
  {
    id: 3,
    title: "AI Web Crawler & Telegram CSV Bot",
    description:
      "A fully automated AI web crawling system built in n8n that extracts structured data and URLs from any webpage, processes it using OpenRouter AI, stores results in Google Sheets, generates CSV files dynamically, and delivers them instantly via Telegram bot.",
    category: "Web Automation",
    technologies: [
      "n8n",
      "OpenRouter AI",
      "Telegram Bot API",
      "Google Sheets",
      "JavaScript",
    ],
    githubUrl: "https://github.com/Aryan-202/n8n-crawler-bot.git",
    liveUrl: "https://github.com/Aryan-202/n8n-crawler-bot.git",
    featured: true,
    image: assets.projects.portfolio_leads,
  },
];
