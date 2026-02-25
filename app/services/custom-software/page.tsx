import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/marketing/custom-software/hero";
import { About } from "@/components/marketing/custom-software/about";
import { WhatIBuild } from "@/components/marketing/custom-software/what-i-build";
import { TechStack } from "@/components/marketing/custom-software/tech-stack";
import { WhyUs } from "@/components/marketing/custom-software/why-us";
import { ServicesList } from "@/components/marketing/custom-software/services";
import { Pricing } from "@/components/marketing/custom-software/pricing";
import { Testimonials } from "@/components/marketing/custom-software/testimonials";
import { FinalCTA } from "@/components/marketing/custom-software/final-cta";

export const metadata: Metadata = {
    title: "Custom Software Engineering | SaaS & Internal Tools",
    description: "I build proprietary software, SaaS platforms, and internal operational tools engineered perfectly for your unique business logic and workflows.",
    keywords: ["Custom Software", "SaaS Development", "Internal Tools", "Web Application Development", "API Integrations", "Legacy Modernization", "Full-Stack Engineering"],
    openGraph: {
        title: "Custom Software Architect | Stop Adapting to Software",
        description: "Bespoke internal tools, SaaS platforms, and enterprise applications engineered perfectly for your business.",
        type: "website",
    }
};

export default function CustomSoftwarePage() {
    return (
        <main className="flex flex-col min-h-screen">
            <Hero />
            <About />
            <WhatIBuild />
            <TechStack />
            <WhyUs />
            <ServicesList />
            <Pricing />
            <Testimonials />
            <FinalCTA />
        </main>
    );
}
