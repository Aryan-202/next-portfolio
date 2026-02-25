"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Check, ShieldAlert, Shield, Clock, ServerCog } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const itPlans = [
    {
        title: "Network Security Audit",
        priceRange: "One-Time $2.5k",
        description: "A comprehensive deep dive to find vulnerabilities in your current network setup.",
        features: [
            "Full penetration testing",
            "Hardware & software inventory check",
            "Firewall & Router configuration review",
            "Detailed executive action report",
            "Post-audit strategy call",
        ],
        ctaText: "Secure My Network",
        highlighted: false,
    },
    {
        title: "Managed IT Services (MSP)",
        priceRange: "From $150/user/mo",
        description: "Complete outsourcing of your IT needs. I handle everything so your team can actually work.",
        features: [
            "24/7 Endpoint monitoring & patching",
            "Unlimited remote helpdesk support",
            "Next-Gen Antivirus (EDR) included",
            "Automated daily cloud backups",
            "Quarterly IT Strategy Review (vCIO)",
        ],
        ctaText: "Outsource IT",
        highlighted: true,
    },
    {
        title: "Infrastructure Setup",
        priceRange: "Custom Quote",
        description: "For office moves, cloud migrations, or building an enterprise network from scratch.",
        features: [
            "Physical cabling & server racks",
            "Cloud migration (AWS/Local to M365)",
            "Enterprise WiFi deployment",
            "Access control & camera systems",
            "Compliance setups (HIPAA/SOC2)",
        ],
        ctaText: "Get a Quote",
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
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">IT Services & Support Pricing</h2>
                    <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Transparent pricing for peace of mind. Fixing an issue is expensive.
                        Preventing it is an investment.
                    </p>
                </motion.div>

                {/* Pricing Tiers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {itPlans.map((tier, index) => (
                        <motion.div
                            key={tier.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className={`p-8 h-full flex flex-col relative overflow-hidden ${tier.highlighted ? 'border-emerald-500 ring-1 ring-emerald-500 shadow-lg shadow-emerald-500/10' : ''}`}>
                                {tier.highlighted && (
                                    <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider flex items-center gap-1">
                                        <ShieldAlert className="w-3 h-3 fill-current" />
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                                    <p className="text-muted-foreground text-sm h-12 mb-4">{tier.description}</p>
                                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                                        {tier.priceRange}
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8 grow">
                                    {tier.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3 text-sm">
                                            <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-500 mt-1">
                                                <Check className="w-4 h-4" />
                                            </div>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button className={`w-full ${tier.highlighted ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : ''}`} variant={tier.highlighted ? "default" : "outline"}>
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
                    <Card className="p-8 lg:p-12 border-emerald-500/20 bg-emerald-500/5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                                        <ServerCog className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Disaster Recovery Retainer</h3>
                                </div>
                                <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-6">From $800 / month</p>
                                <p className="text-muted-foreground mb-8 text-lg">
                                    For high-risk environments. Guaranteed 1-hour SLA response for critical system failures, data backups, and ransomware remediation.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Immutable Cloud Backups",
                                        "1-Hour SLA Emergency Response",
                                        "Quarterly Disaster Drills",
                                        "Direct access via PagerDuty"
                                    ].map((feature) => (
                                        <div key={feature} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-6 text-center lg:border-l lg:border-emerald-500/10 lg:pl-12">
                                <div className="space-y-2">
                                    <h4 className="text-xl font-semibold">Not sure where your security stands?</h4>
                                    <p className="text-muted-foreground">
                                        Let's discuss your infrastructure before a disaster happens.
                                    </p>
                                </div>
                                <Link href="#contact">
                                    <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg gap-2 cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white">
                                        Book a Free Consultation
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
            </div>
        </section>
    );
};
