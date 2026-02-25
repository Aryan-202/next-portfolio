import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/marketing/it-support/hero";
import { About } from "@/components/marketing/it-support/about";
import { WhatIManage } from "@/components/marketing/it-support/what-i-manage";
import { TechStack } from "@/components/marketing/it-support/tech-stack";
import { WhyUs } from "@/components/marketing/it-support/why-us";
import { ServicesList } from "@/components/marketing/it-support/services";
import { Pricing } from "@/components/marketing/it-support/pricing";
import { Testimonials } from "@/components/marketing/it-support/testimonials";
import { FinalCTA } from "@/components/marketing/it-support/final-cta";

export const metadata: Metadata = {
    title: "IT Support & Managed Services | Enterprise Cloud & Security",
    description: "I provide proactive IT management, network security, helpdesk support, and cloud infrastructure for businesses that require zero downtime.",
    keywords: ["IT Support", "Managed IT Services (MSP)", "Cybersecurity Audit", "Disaster Recovery", "Network Infrastructure", "Cloud Management", "Helpdesk Support"],
    openGraph: {
        title: "IT Support & Infrastructure Expert | Zero Downtime Allowed",
        description: "Proactive IT management, ironclad security, and rapid technical support to keep your business running smoothly.",
        type: "website",
    }
};

export default function ITSupportPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <Hero />
            <About />
            <WhatIManage />
            <TechStack />
            <WhyUs />
            <ServicesList />
            <Pricing />
            <Testimonials />
            <FinalCTA />
        </main>
    );
}
