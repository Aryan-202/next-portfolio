import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/marketing/ai-automation/hero";
import { About } from "@/components/marketing/ai-automation/about";
import { UseCases } from "@/components/marketing/ai-automation/use-cases";
import { TechStack } from "@/components/marketing/ai-automation/tech-stack";
import { WhyUs } from "@/components/marketing/ai-automation/why-us";
import { ServicesList } from "@/components/marketing/ai-automation/services";
import { Pricing } from "@/components/marketing/ai-automation/pricing";
import { Testimonials } from "@/components/marketing/ai-automation/testimonials";
import { FinalCTA } from "@/components/marketing/ai-automation/final-cta";

export const metadata: Metadata = {
    title: "AI Automation & Consulting | Streamline Your Business",
    description: "I help businesses automate workflows, integrate AI agents, and eliminate manual tasks saving hundreds of hours and boosting ROI.",
    keywords: ["AI Automation", "Process Automation", "ChatGPT integrations", "Make.com Automation", "n8n Workflows", "Business Automation Consulting"],
    openGraph: {
        title: "AI Automation & Consulting | Put Your Business on Autopilot",
        description: "Custom AI agents, intelligent workflows, and strategic automation solutions that save hundreds of hours.",
        type: "website",
    }
};

export default function AIAutomationPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <Hero />
            <About />
            <UseCases />
            <TechStack />
            <WhyUs />
            <ServicesList />
            <Pricing />
            <Testimonials />
            <FinalCTA />
        </main>
    );
}
