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

const BASE_URL = "https://aryan-vishwakarma.vercel.app";
const PAGE_URL = `${BASE_URL}/services/ai-automation`;

export const metadata: Metadata = {
    title: "AI Automation Services | n8n, Make.com & Python Workflow Expert India",
    description:
        "Hire Aryan Vishwakarma for expert AI Automation services — custom n8n & Make.com workflows, CRM automation, lead generation, ChatGPT integrations & business process automation. Save 100s of hours monthly.",
    keywords: [
        "AI Automation Services India",
        "n8n Workflow Specialist",
        "Make.com Automation Expert",
        "Zapier Automation Developer",
        "Business Process Automation",
        "CRM Automation Consultant",
        "Lead Generation Automation",
        "ChatGPT API Integration",
        "Python Automation Developer",
        "AI Workflow Builder India",
        "Automated Lead Scraping",
        "Email Automation System",
        "Hire Automation Engineer India",
        "Aryan Vishwakarma AI Automation",
    ],
    alternates: {
        canonical: "/services/ai-automation",
    },
    openGraph: {
        title: "AI Automation Services | n8n, Make.com & Python Expert — Aryan Vishwakarma",
        description:
            "Custom AI agents, intelligent n8n/Make.com workflows, and strategic automation solutions that save hundreds of hours monthly and boost ROI.",
        url: PAGE_URL,
        siteName: "Aryan Vishwakarma",
        type: "website",
        images: [{ url: "/images/profile/profile.jpeg", width: 1200, height: 630, alt: "AI Automation Services by Aryan Vishwakarma" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Automation Services | Aryan Vishwakarma",
        description: "n8n, Make.com, Python automation — put your business on autopilot.",
        creator: "@AryanxSenpai",
        images: ["/images/profile/profile.jpeg"],
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}/#service`,
    name: "AI Automation Services",
    serviceType: "Business Process Automation",
    description:
        "Custom AI agents, n8n workflows, Make.com automations, ChatGPT integrations, CRM automation, and lead generation systems designed to eliminate manual work and scale business operations.",
    provider: { "@id": `${BASE_URL}/#person` },
    url: PAGE_URL,
    areaServed: { "@type": "Country", name: "India" },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Automation Packages",
        itemListElement: [
            { "@type": "Offer", name: "Starter Automation", description: "1–2 workflow automations for small business." },
            { "@type": "Offer", name: "Growth Automation", description: "Full lead gen + CRM + reporting automation stack." },
            { "@type": "Offer", name: "Enterprise AI", description: "Custom AI agents, multi-system integrations & ongoing support." },
        ],
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/ai-automation` },
        { "@type": "ListItem", position: 3, name: "AI Automation", item: PAGE_URL },
    ],
};

export default function AIAutomationPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
        </>
    );
}
