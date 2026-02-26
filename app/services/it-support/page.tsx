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

const BASE_URL = "https://aryan-vishwakarma.vercel.app";
const PAGE_URL = `${BASE_URL}/services/it-support`;

export const metadata: Metadata = {
    title: "IT Support & Managed Services | Cloud & Security India — Aryan Vishwakarma",
    description:
        "Hire Aryan Vishwakarma for professional IT Support & Managed Services — proactive IT management, network security, cybersecurity audits, cloud infrastructure setup, and rapid helpdesk support for zero-downtime operations.",
    keywords: [
        "IT Support Services India",
        "Managed IT Services India",
        "MSP India",
        "Cybersecurity Consultant India",
        "Network Security Expert India",
        "Cloud Infrastructure Management",
        "Helpdesk Support India",
        "Disaster Recovery IT",
        "IT Infrastructure Setup India",
        "Remote IT Support India",
        "Hire IT Support India",
        "Aryan Vishwakarma IT Support",
        "IT Services Gorakhpur",
    ],
    alternates: {
        canonical: "/services/it-support",
    },
    openGraph: {
        title: "IT Support & Managed Services | Cloud & Security Expert — Aryan Vishwakarma",
        description:
            "Proactive IT management, ironclad network security, cloud infrastructure, and rapid helpdesk support to keep your business running with zero downtime.",
        url: PAGE_URL,
        siteName: "Aryan Vishwakarma",
        type: "website",
        images: [{ url: "/images/profile/profile.jpeg", width: 1200, height: 630, alt: "IT Support & Managed Services by Aryan Vishwakarma" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "IT Support & Managed Services | Aryan Vishwakarma",
        description: "Proactive IT management, security & cloud infrastructure — zero downtime for your business.",
        creator: "@AryanxSenpai",
        images: ["/images/profile/profile.jpeg"],
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}/#service`,
    name: "IT Support & Managed Services",
    serviceType: "IT Managed Services",
    description:
        "Proactive IT management, network security, cybersecurity audits, cloud infrastructure setup, and rapid helpdesk support designed for zero-downtime operations.",
    provider: { "@id": `${BASE_URL}/#person` },
    url: PAGE_URL,
    areaServed: { "@type": "Country", name: "India" },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/it-support` },
        { "@type": "ListItem", position: 3, name: "IT Support & Managed Services", item: PAGE_URL },
    ],
};

export default function ITSupportPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
        </>
    );
}
