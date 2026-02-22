import Hero from "@/components/layouts/hero";
import About from "@/components/layouts/about";
import Projects from "@/components/layouts/projects";
import Pricing from "@/components/layouts/pricing";
import Contact from "@/components/layouts/contact";
import FeedbackPage from "./feedback/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Aryan Vishwakarma | Automation Engineer & Lead Generation Expert",
  },
  description: "Aryan Vishwakarma is a top-rated Automation Engineer & AI Specialist. Scaling businesses with n8n, Python, and AI-powered lead generation systems.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Pricing />
      <FeedbackPage />
      <Contact />
    </main>
  );
}