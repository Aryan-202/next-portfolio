import React from 'react'
import Pricing from '@/components/layouts/pricing'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing | AI Automation, Mobile Apps, Web & Software Services — Aryan Vishwakarma",
    description:
        "Transparent service pricing by Aryan Vishwakarma — affordable packages for AI Automation, Mobile App Development, Website Development, Custom Software, Data Handling & IT Support. No hidden fees.",
    keywords: [
        "AI Automation Pricing India",
        "Mobile App Development Cost India",
        "Website Development Pricing India",
        "Custom Software Cost India",
        "Freelancer Pricing India",
        "Automation Consultant Rates",
        "Aryan Vishwakarma pricing",
    ],
    alternates: {
        canonical: "/pricing",
    },
    openGraph: {
        title: "Service Pricing | AI, Mobile, Web & Software — Aryan Vishwakarma",
        description:
            "Transparent, affordable pricing for all 6 services. No hidden fees. Start small or go enterprise.",
        url: "https://aryan-vishwakarma.vercel.app/pricing",
        siteName: "Aryan Vishwakarma",
        images: [{ url: "/images/profile/profile.jpeg", width: 1200, height: 630, alt: "Service Pricing by Aryan Vishwakarma" }],
        type: "website",
    },
};

const PricingPage = () => {
    return (
        <div className="pt-20">
            <Pricing />
        </div>
    )
}

export default PricingPage
