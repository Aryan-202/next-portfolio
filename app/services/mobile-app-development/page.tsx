import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/marketing/mobile-app-development/hero";
import { About } from "@/components/marketing/mobile-app-development/about";
import { Marketplace } from "@/components/marketing/mobile-app-development/marketplace";
import { TechStack } from "@/components/marketing/mobile-app-development/tech-stack";
import { WhyUs } from "@/components/marketing/mobile-app-development/why-us";
import { ServicesList } from "@/components/marketing/mobile-app-development/services";
import { Testimonials } from "@/components/marketing/mobile-app-development/testimonials";
import { Pricing } from "@/components/marketing/mobile-app-development/pricing";
import { FinalCTA } from "@/components/marketing/mobile-app-development/final-cta";

const BASE_URL = "https://aryan-vishwakarma.vercel.app";
const PAGE_URL = `${BASE_URL}/services/mobile-app-development`;

export const metadata: Metadata = {
    title: "Mobile App Development | Android & iOS Apps — Aryan Vishwakarma India",
    description:
        "Hire Aryan Vishwakarma for professional Mobile App Development — native Android (Kotlin/Jetpack Compose), iOS, and React Native cross-platform apps. Marketplace, eCommerce & custom business apps built to scale.",
    keywords: [
        "Mobile App Developer India",
        "Android App Development India",
        "iOS App Development",
        "Kotlin Jetpack Compose Developer",
        "React Native Developer India",
        "Marketplace App Development",
        "eCommerce App Developer",
        "Custom Business Mobile App",
        "Hire Mobile App Developer India",
        "Multi-vendor App Developer",
        "Aryan Vishwakarma Mobile Apps",
        "App Development Gorakhpur",
    ],
    alternates: {
        canonical: "/services/mobile-app-development",
    },
    openGraph: {
        title: "Mobile App Development | Android & iOS Expert — Aryan Vishwakarma",
        description:
            "Transform your idea into a revenue-ready mobile product. Native Android, iOS & React Native apps with clean architecture and expert engineering.",
        url: PAGE_URL,
        siteName: "Aryan Vishwakarma",
        type: "website",
        images: [{ url: "/images/profile/profile.jpeg", width: 1200, height: 630, alt: "Mobile App Development by Aryan Vishwakarma" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobile App Development | Aryan Vishwakarma",
        description: "Android, iOS & React Native apps — built for performance, scale, and conversion.",
        creator: "@AryanxSenpai",
        images: ["/images/profile/profile.jpeg"],
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}/#service`,
    name: "Mobile App Development",
    serviceType: "Mobile Application Development",
    description:
        "Native Android (Kotlin/Jetpack Compose) and cross-platform (React Native) mobile applications for startups and enterprises — marketplace, eCommerce, and custom business apps.",
    provider: { "@id": `${BASE_URL}/#person` },
    url: PAGE_URL,
    areaServed: { "@type": "Country", name: "India" },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/mobile-app-development` },
        { "@type": "ListItem", position: 3, name: "Mobile App Development", item: PAGE_URL },
    ],
};

export default function MobileAppDevelopmentPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <main className="flex flex-col min-h-screen">
                <Hero />
                <About />
                <Marketplace />
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
