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

const BASE_URL = "https://aryan-vishwakarma.vercel.app";
const PAGE_URL = `${BASE_URL}/services/data-handling`;

export const metadata: Metadata = {
    title: "Data Handling & Engineering | ETL, Scraping & Analytics — Aryan Vishwakarma",
    description:
        "Hire Aryan Vishwakarma for Data Handling & Engineering services — web scraping, ETL pipelines, data warehousing, cloud data migration, and business intelligence dashboards that turn raw data into actionable insights.",
    keywords: [
        "Data Engineer India",
        "Web Scraping Expert India",
        "ETL Pipeline Developer",
        "Data Warehousing India",
        "Business Intelligence Developer",
        "Data Analytics Consultant",
        "Python Data Engineering",
        "Cloud Data Migration",
        "Database Architecture India",
        "Big Data Solutions India",
        "Hire Data Engineer India",
        "Aryan Vishwakarma Data Engineering",
        "Data Scraping Services India",
    ],
    alternates: {
        canonical: "/services/data-handling",
    },
    openGraph: {
        title: "Data Handling & Engineering | ETL & Analytics Expert — Aryan Vishwakarma",
        description:
            "Scalable ETL pipelines, secure data migrations, web scraping, and intelligent analytics dashboards that unlock your data's full potential.",
        url: PAGE_URL,
        siteName: "Aryan Vishwakarma",
        type: "website",
        images: [{ url: "/images/profile/profile.jpeg", width: 1200, height: 630, alt: "Data Handling & Engineering by Aryan Vishwakarma" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Data Handling & Engineering | Aryan Vishwakarma",
        description: "ETL pipelines, web scraping & BI dashboards — data-driven decisions made easy.",
        creator: "@AryanxSenpai",
        images: ["/images/profile/profile.jpeg"],
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}/#service`,
    name: "Data Handling & Engineering",
    serviceType: "Data Engineering",
    description:
        "Web scraping, ETL pipelines, cloud data warehouses, database architecture, and business intelligence dashboards for data-driven business decisions.",
    provider: { "@id": `${BASE_URL}/#person` },
    url: PAGE_URL,
    areaServed: { "@type": "Country", name: "India" },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/data-handling` },
        { "@type": "ListItem", position: 3, name: "Data Handling & Engineering", item: PAGE_URL },
    ],
};

export default function DataHandlingPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
        </>
    );
}
