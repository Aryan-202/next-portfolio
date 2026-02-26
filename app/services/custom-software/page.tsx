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

const BASE_URL = "https://aryan-vishwakarma.vercel.app";
const PAGE_URL = `${BASE_URL}/services/custom-software`;

export const metadata: Metadata = {
    title: "Custom Software Development | SaaS & Internal Tools — Aryan Vishwakarma India",
    description:
        "Hire Aryan Vishwakarma for bespoke Custom Software Development — SaaS platforms, internal business tools, admin dashboards, and enterprise applications engineered precisely for your business workflow.",
    keywords: [
        "Custom Software Developer India",
        "SaaS Development India",
        "Internal Tools Developer",
        "Admin Dashboard Developer",
        "Enterprise Application Developer",
        "API Integration Expert",
        "Full Stack Software Engineer India",
        "Legacy Software Modernization",
        "Business Tool Development",
        "Hire Software Developer India",
        "Aryan Vishwakarma Custom Software",
        "Software Development Gorakhpur",
    ],
    alternates: {
        canonical: "/services/custom-software",
    },
    openGraph: {
        title: "Custom Software Development | SaaS & Tools — Aryan Vishwakarma",
        description:
            "Stop adapting to off-the-shelf software. Get bespoke SaaS platforms and internal tools engineered precisely for your business.",
        url: PAGE_URL,
        siteName: "Aryan Vishwakarma",
        type: "website",
        images: [{ url: "/images/profile/profile.jpeg", width: 1200, height: 630, alt: "Custom Software Development by Aryan Vishwakarma" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Software Development | Aryan Vishwakarma",
        description: "SaaS platforms, internal tools & enterprise apps — built exactly for your workflow.",
        creator: "@AryanxSenpai",
        images: ["/images/profile/profile.jpeg"],
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}/#service`,
    name: "Custom Software Development",
    serviceType: "Software Engineering",
    description:
        "Bespoke SaaS platforms, internal business tools, admin dashboards, and enterprise applications engineered precisely for unique business logic and workflows.",
    provider: { "@id": `${BASE_URL}/#person` },
    url: PAGE_URL,
    areaServed: { "@type": "Country", name: "India" },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/custom-software` },
        { "@type": "ListItem", position: 3, name: "Custom Software Development", item: PAGE_URL },
    ],
};

export default function CustomSoftwarePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
        </>
    );
}
