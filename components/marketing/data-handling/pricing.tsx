"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Check, DatabaseZap, Clock, ChartColumn } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const dataPlans = [
    {
        title: "ETL / API Pipeline",
        priceRange: "From $2k",
        description: "Automate data transfer from your operational tools into a single spreadsheet or simple database.",
        features: [
            "Extraction from 2-3 specific sources",
            "Basic data cleaning & formatting",
            "Scheduled daily or hourly loads",
            "Error logging & webhook alerts",
            "1 month bug-fixing warranty",
        ],
        ctaText: "Automate Transfers",
        highlighted: false,
    },
    {
        title: "Data Warehouse & BI",
        priceRange: "From $5k+",
        description: "The complete setup. Centralized cloud data storage hooked into a live interactive dashboard.",
        features: [
            "Snowflake / BigQuery initial setup",
            "Complex dimensional modeling (Star Schema)",
            "Automated dbt transformation paths",
            "Custom Tableau/PowerBI Dashboard (3 pages)",
            "Executive training hand-off",
        ],
        ctaText: "Build the Ecosystem",
        highlighted: true,
    },
    {
        title: "Legacy Migration",
        priceRange: "Custom Quote",
        description: "Safely moving years of unorganized data from old on-premise servers into the modern cloud.",
        features: [
            "Complete schema redesign",
            "Historical data cleansing & mapping",
            "Zero-downtime cutover planning",
            "Data parity validation scripts",
            "Post-migration observation period",
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
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">Data Handling Pricing</h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Transparent engineering costs.
                        Stop using data as a rearview mirror and start using it as a headlights.
                    </p>
                </motion.div>

                {/* Pricing Tiers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {dataPlans.map((tier, index) => (
                        <motion.div
                            key={tier.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className={`p-8 h-full flex flex-col relative overflow-hidden ${tier.highlighted ? 'border-cyan-500 ring-1 ring-cyan-500 shadow-lg shadow-cyan-500/10' : ''}`}>
                                {tier.highlighted && (
                                    <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider flex items-center gap-1">
                                        <DatabaseZap className="w-3 h-3 fill-current" />
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                                    <p className="text-muted-foreground text-sm h-12 mb-4">{tier.description}</p>
                                    <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                                        {tier.priceRange}
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8 grow">
                                    {tier.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3 text-sm">
                                            <div className="p-0.5 rounded-full bg-cyan-500/20 text-cyan-500 mt-1">
                                                <Check className="w-4 h-4" />
                                            </div>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button className={`w-full ${tier.highlighted ? 'bg-cyan-600 hover:bg-cyan-700 text-white' : ''}`} variant={tier.highlighted ? "default" : "outline"}>
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
                    <Card className="p-8 lg:p-12 border-cyan-500/20 bg-cyan-500/5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-cyan-500/20 rounded-lg">
                                        <ChartColumn className="w-6 h-6 text-cyan-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Monthly Data Ops Retainer</h3>
                                </div>
                                <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-6">From $600 / month</p>
                                <p className="text-muted-foreground mb-8 text-lg">
                                    Pipelines break when APIs change. Allow me to actively monitor your data ingestion, fix failed ETL jobs, and build new dashboard views as requested.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Proactive ETL failure fixing",
                                        "Query cost reduction audits",
                                        "Monthly Dashboard additions",
                                        "Database performance tuning"
                                    ].map((feature) => (
                                        <div key={feature} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-6 text-center lg:border-l lg:border-cyan-500/10 lg:pl-12">
                                <div className="space-y-2">
                                    <h4 className="text-xl font-semibold">Ready to scale your analytics?</h4>
                                    <p className="text-muted-foreground">
                                        Let's discuss drawing actual value from the data you already own.
                                    </p>
                                </div>
                                <Link href="#contact">
                                    <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg gap-2 cursor-pointer bg-cyan-600 hover:bg-cyan-700 text-white">
                                        Book a Strategy Call
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
