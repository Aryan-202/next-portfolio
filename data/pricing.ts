export interface PricingTier {
    title: string;
    priceRange: string;
    description: string;
    features: string[];
    ctaText: string;
    highlighted?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
    {
        title: "Starter Automations",
        priceRange: "₹5,000 – ₹15,000",
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
        priceRange: "₹15,000 – ₹40,000",
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
        priceRange: "₹40,000+",
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
    price: "₹2,000 – ₹5,000 / month",
    description: "Ongoing monitoring, fixes, and small improvements to keep your business running smoothly.",
    features: [
        "24/7 Monitoring",
        "Bug fixes & API updates",
        "Minor workflow adjustments",
        "Monthly performance report"
    ]
};
