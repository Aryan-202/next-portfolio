import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/marketing/data-handling/hero";
import { About } from "@/components/marketing/data-handling/about";
import { WhatIHandle } from "@/components/marketing/data-handling/what-i-handle";
import { TechStack } from "@/components/marketing/data-handling/tech-stack";
import { WhyUs } from "@/components/marketing/data-handling/why-us";
import { ServicesList } from "@/components/marketing/data-handling/services";
import { Pricing } from "@/components/marketing/data-handling/pricing";
import { Testimonials } from "@/components/marketing/data-handling/testimonials";
import { FinalCTA } from "@/components/marketing/data-handling/final-cta";

export const metadata: Metadata = {
    title: "Data Handling & Engineering | Analytics & Architecture",
    description: "I construct scalable data pipelines, secure cloud data warehouses, and automated business intelligence dashboards.",
    keywords: ["Data Engineering", "Data Analytics", "ETL Pipelines", "Data Warehouseing", "Snowflake", "Business Intelligence", "Database Architecture"],
    openGraph: {
        title: "Data Handling & Engineering Expert | Unlock Your Data",
        description: "Scalable pipelines, secure migrations, and intelligent analytics that turn chaotic information into actionable insights.",
        type: "website",
    }
};

export default function DataHandlingPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <Hero />
            <About />
            <WhatIHandle />
            <TechStack />
            <WhyUs />
            <ServicesList />
            <Pricing />
            <Testimonials />
            <FinalCTA />
        </main>
    );
}
