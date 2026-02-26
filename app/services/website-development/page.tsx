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

const BASE_URL = "https://aryan-vishwakarma.vercel.app";
const PAGE_URL = `${BASE_URL}/services/website-development`;

export const metadata: Metadata = {
    title: "Website Development | Next.js & React Expert India — Aryan Vishwakarma",
    description:
        "Hire Aryan Vishwakarma for professional Website Development — fast, SEO-optimized, conversion-focused websites & web apps built with Next.js & React. Business sites, SaaS, portfolios & eCommerce.",
    keywords: [
        "Website Development India",
        "Next.js Developer India",
        "React Developer India",
        "Full Stack Web Developer",
        "SEO Optimized Website Developer",
        "eCommerce Website Development",
        "SaaS Website Developer",
        "Business Website India",
        "Landing Page Developer",
        "Portfolio Website Developer",
        "Hire Web Developer India",
        "Web Developer Gorakhpur",
        "Aryan Vishwakarma Website Development",
    ],
    alternates: {
        canonical: "/services/website-development",
    },
    openGraph: {
        title: "Website Development | Next.js & React Expert — Aryan Vishwakarma",
        description:
            "Fast, secure, and conversion-optimized websites for businesses that want more leads, more sales, and stronger online authority.",
        url: PAGE_URL,
        siteName: "Aryan Vishwakarma",
        type: "website",
        images: [{ url: "/images/profile/profile.jpeg", width: 1200, height: 630, alt: "Website Development by Aryan Vishwakarma" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Website Development | Aryan Vishwakarma",
        description: "Next.js & React websites — fast, SEO-ready, and built to convert.",
        creator: "@AryanxSenpai",
        images: ["/images/profile/profile.jpeg"],
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}/#service`,
    name: "Website Development",
    serviceType: "Web Development",
    description:
        "Fast, SEO-optimized, and conversion-focused websites and web applications built with Next.js and React for businesses, startups, SaaS platforms, and eCommerce.",
    provider: { "@id": `${BASE_URL}/#person` },
    url: PAGE_URL,
    areaServed: { "@type": "Country", name: "India" },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/website-development` },
        { "@type": "ListItem", position: 3, name: "Website Development", item: PAGE_URL },
    ],
};

export default function WebsiteDevelopmentPage() {
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
