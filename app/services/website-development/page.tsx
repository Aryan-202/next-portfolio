import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/marketing/website-development/hero";
import { About } from "@/components/marketing/website-development/about";
import { WhatIBuild } from "@/components/marketing/website-development/what-i-build";
import { TechStack } from "@/components/marketing/website-development/tech-stack";
import { WhyUs } from "@/components/marketing/website-development/why-us";
import { ServicesList } from "@/components/marketing/website-development/services";
import { Pricing } from "@/components/marketing/website-development/pricing";
import { Testimonials } from "@/components/marketing/website-development/testimonials";
import { FinalCTA } from "@/components/marketing/website-development/final-cta";

export const metadata: Metadata = {
    title: "Website Development | Build High-Performance Web Apps & Sites",
    description: "I build fast, secure, and conversion-optimized websites for businesses that want more leads, more sales, and stronger online authority.",
    keywords: ["Web Developer", "React", "Next.js", "eCommerce", "SaaS Development", "Business Websites", "SEO Optimization"],
    openGraph: {
        title: "Website Development | High-Performance Web Solutions",
        description: "Modern, scalable, and revenue-focused web solutions for startups and businesses.",
        type: "website",
    }
};

export default function WebsiteDevelopmentPage() {
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
