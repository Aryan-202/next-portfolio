"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Check, Code2, Cpu, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const softwarePlans = [
    {
        title: "Internal Tool MVP",
        priceRange: "From $5k",
        description: "A lean, fast web application built to solve a single operational bottleneck for your team.",
        features: [
            "1-2 core workflows automated",
            "Secure staff login & roles (RBAC)",
            "Basic admin reporting dashboard",
            "Deployed on scalable fast cloud architecture",
            "2 weeks post-launch bug support",
        ],
        ctaText: "Build Internal Tool",
        highlighted: false,
    },
    {
        title: "SaaS / Product MVP",
        priceRange: "From $12k+",
        description: "A market-ready product architected to handle public users, subscriptions, and scale.",
        features: [
            "Customer-facing portals & UI",
            "Stripe Payments implementation",
            "Robust multi-tenant database layer",
            "Automated transactional email workflows",
            "Full source-code IP ownership",
        ],
        ctaText: "Launch My SaaS",
        highlighted: true,
    },
    {
        title: "Enterprise Application",
        priceRange: "Custom Quote",
        description: "Complex software requiring extensive 3rd-party API integrations and high-level security.",
        features: [
            "Custom API & Middleware engineering",
            "Migration from legacy systems",
            "Intricate multi-department scaling",
            "Dedicated staging & testing servers",
            "Long-term SLA retention planning",
        ],
        ctaText: "Get Enterprise Quote",
        highlighted: false,
    },
];

export const Pricing = () => {
    return (
        <section id="pricing" className="py-20 px-4 scroll-animate bg-muted/30">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">Software Engineering Pricing</h2>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Transparent project roadmaps. Build an asset that increases the valuation and efficiency of your business permanently.
                    </p>
                </motion.div>

                {/* Pricing Tiers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {softwarePlans.map((tier, index) => (
                        <motion.div
                            key={tier.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className={`p-8 h-full flex flex-col relative overflow-hidden ${tier.highlighted ? 'border-orange-500 ring-1 ring-orange-500 shadow-lg shadow-orange-500/10' : ''}`}>
                                {tier.highlighted && (
                                    <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider flex items-center gap-1">
                                        <Code2 className="w-3 h-3 fill-current" />
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                                    <p className="text-muted-foreground text-sm h-12 mb-4">{tier.description}</p>
                                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                                        {tier.priceRange}
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8 grow">
                                    {tier.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3 text-sm">
                                            <div className="p-0.5 rounded-full bg-orange-500/20 text-orange-500 mt-1">
                                                <Check className="w-4 h-4" />
                                            </div>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button className={`w-full ${tier.highlighted ? 'bg-orange-600 hover:bg-orange-700 text-white' : ''}`} variant={tier.highlighted ? "default" : "outline"}>
                                    {tier.ctaText}
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Maintenance Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="p-8 lg:p-12 border-orange-500/20 bg-orange-500/5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-orange-500/20 rounded-lg">
                                        <Wrench className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Post-Launch Maintenance & Scaling</h3>
                                </div>
                                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6">From $1k / month</p>
                                <p className="text-muted-foreground mb-8 text-lg">
                                    Software is a living organism. When APIs update, usage spikes, or you want new features added smoothly, I remain your dedicated lead engineer.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Guaranteed bug fixing SLA",
                                        "Server & Database scaling",
                                        "Monthly new feature hours",
                                        "Security & package updates"
                                    ].map((feature) => (
                                        <div key={feature} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-6 text-center lg:border-l lg:border-orange-500/10 lg:pl-12">
                                <div className="space-y-2">
                                    <h4 className="text-xl font-semibold">Have a complex idea?</h4>
                                    <p className="text-muted-foreground">
                                        Let's discuss the architecture, database models, and roadmap.
                                    </p>
                                </div>
                                <Link href="#contact">
                                    <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg gap-2 cursor-pointer bg-orange-600 hover:bg-orange-700 text-white">
                                        Schedule Architecture Call
                                    </Button>
                                </Link>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Cpu className="w-4 h-4" />
                                    <span>30-minute technical scope</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};
