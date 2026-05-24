export interface PricingTier {
    title: string;
    priceRangeINR: string;
    priceRangeUSD: string;
    description: string;
    features: string[];
    ctaText: string;
    highlighted?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
    {
        title: "Starter Automations",
        priceRangeINR: "₹5,000 – ₹15,000",
        priceRangeUSD: "$75 – $200",
        description: "Simple workflows that eliminate repetitive manual tasks.",
        features: [
            "Form → Sheets → Email automations",
            "Excel/Data cleanup scripts",
            "Basic follow-up sequences",
            "Single platform integration"
        ],
        ctaText: "Get Started"
    },
    {
        title: "Business Workflow Automation",
        priceRangeINR: "₹15,000 – ₹40,000",
        priceRangeUSD: "$200 – $500",
        description: "Multi-step automations for lead management, reporting, and operations.",
        features: [
            "Lead generation pipelines",
            "Multi-step reporting systems",
            "Invoice & payment reminders",
            "Multi-platform synchronization",
            "Error handling & notifications"
        ],
        ctaText: "Optimize Now",
        highlighted: true
    },
    {
        title: "Advanced Automation & AI Workflows",
        priceRangeINR: "₹40,000+",
        priceRangeUSD: "$500+",
        description: "Custom automation systems designed for scaling businesses.",
        features: [
            "CRM full automation suite",
            "AI-assisted business processes",
            "Custom API integrations",
            "Sales operations automation",
            "Scalable infrastructure design"
        ],
        ctaText: "Talk to Expert"
    }
];

export const MAINTENANCE_PLAN = {
    title: "Monthly Maintenance & Support",
    priceINR: "₹2,000 – ₹5,000 / month",
    priceUSD: "$25 – $75 / month",
    description: "Ongoing monitoring, fixes, and small improvements to keep your business running smoothly.",
    features: [
        "24/7 Monitoring",
        "Bug fixes & API updates",
        "Minor workflow adjustments",
        "Monthly performance report"
    ]
};
