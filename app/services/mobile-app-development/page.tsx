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

export const metadata: Metadata = {
    title: "Mobile App Development | Build High-Converting Marketplace Apps",
    description: "I build fast, scalable, and user-focused mobile applications. specializing in multi-vendor marketplaces, eCommerce, and custom business apps for Android & iOS.",
    keywords: ["Mobile App Developer", "Android Development", "iOS Development", "Marketplace App", "Kotlin", "Jetpack Compose", "React Native", "Business Automation"],
    openGraph: {
        title: "Mobile App Development | Build High-Converting Marketplace Apps",
        description: "Transform your ideas into revenue-ready mobile products with clean architecture and expert development.",
        type: "website",
    }
};

export default function MobileAppDevelopmentPage() {
    return (
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
    );
}
