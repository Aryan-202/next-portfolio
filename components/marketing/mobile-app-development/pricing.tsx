"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Check, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const mobilePlans = [
    {
        title: "MVP App",
        priceRange: "From $5k",
        description: "Perfect for validating your idea and getting to market quickly.",
        features: [
            "Core functionality & UX",
            "iOS & Android (Cross-platform)",
            "Basic admin dashboard",
            "Firebase integration",
            "1 month post-launch support",
        ],
        ctaText: "Validate Idea",
        highlighted: false,
    },
    {
        title: "Scale App",
        priceRange: "From $15k",
        description: "For growing businesses needing a robust, feature-rich application.",
        features: [
            "Advanced UI/UX with smooth animations",
            "Custom backend API",
            "Payment gateway integrations",
            "Push notifications & analytics",
            "3 months support & maintenance",
        ],
        ctaText: "Scale Your App",
        highlighted: true,
    },
    {
        title: "Enterprise Platform",
        priceRange: "Custom Pricing",
        description: "Complex, scalable solutions for large organizations.",
        features: [
            "Multi-platform (Mobile & Web & API)",
            "Highly scalable custom architecture",
            "Enterprise-grade security",
            "Complex third-party integrations",
            "Ongoing dedicated SLA support",
        ],
        ctaText: "Contact Sales",
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
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">Mobile App Pricing</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Transparent pricing based on app complexity and business value.
                        Choose the tier that fits your stage of growth.
                    </p>
                </motion.div>

                {/* Pricing Tiers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {mobilePlans.map((tier, index) => (
                        <motion.div
                            key={tier.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className={`p-8 h-full flex flex-col relative overflow-hidden ${tier.highlighted ? 'border-primary ring-1 ring-primary shadow-lg shadow-primary/10' : ''}`}>
                                {tier.highlighted && (
                                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider flex items-center gap-1">
                                        <Zap className="w-3 h-3 fill-current" />
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                                    <p className="text-muted-foreground text-sm h-12 mb-4">{tier.description}</p>
                                    <div className="text-3xl font-bold text-primary">
                                        {tier.priceRange}
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8 grow">
                                    {tier.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3 text-sm">
                                            <div className="p-0.5 rounded-full bg-primary/20 text-primary mt-1">
                                                <Check className="w-4 h-4" />
                                            </div>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button className="w-full" variant={tier.highlighted ? "default" : "outline"}>
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
                    <Card className="p-8 lg:p-12 border-primary/20 bg-primary/5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-primary/20 rounded-lg">
                                        <Shield className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Monthly Maintenance & Support</h3>
                                </div>
                                <p className="text-3xl font-bold text-primary mb-6">From $500 / month</p>
                                <p className="text-muted-foreground mb-8 text-lg">
                                    Keep your mobile app updated, secure, and running smoothly across all devices.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "OS Updates & Compatibility",
                                        "Bug fixes & API updates",
                                        "App Store Submission Management",
                                        "Monthly performance report"
                                    ].map((feature) => (
                                        <div key={feature} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-6 text-center lg:border-l lg:border-primary/10 lg:pl-12">
                                <div className="space-y-2">
                                    <h4 className="text-xl font-semibold">Ready to Build Your App?</h4>
                                    <p className="text-muted-foreground">
                                        Let&apos;s discuss your vision and create a roadmap to launch.
                                    </p>
                                </div>
                                <Link href="#contact">
                                    <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg gap-2 cursor-pointer">
                                        Book a Free Strategy Call
                                    </Button>
                                </Link>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Clock className="w-4 h-4" />
                                    <span>30-minute discovery call</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                {/* Pricing Footer Disclaimer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 text-center text-muted-foreground text-sm"
                >
                    <p>* Every app is unique. Pricing may vary based on specific complexity, features, and integrations required.</p>
                </motion.div>
            </div>
        </section>
    );
};
