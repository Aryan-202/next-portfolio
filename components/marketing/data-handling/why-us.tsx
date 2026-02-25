"use client";

import React from "react";
import { motion } from "motion/react";
import { Lock, GitMerge, TrendingUp, HandCoins } from "lucide-react";

const reasons = [
    {
        title: "Single Source of Truth",
        description: "I eliminate data silos. Your marketing, sales, and operations will finally look at the exact same numbers without discrepancies.",
        icon: GitMerge,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Bulletproof Security",
        description: "Data leaks destroy companies. I utilize end-to-end encryption and strict VPC isolation so your sensitive datasets are never exposed.",
        icon: Lock,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        title: "Actionable Insights",
        description: "Data for the sake of data is useless. I focus on building dashboards that immediately tell you where you are losing or making money.",
        icon: TrendingUp,
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        title: "Cost Transparency",
        description: "Bad queries cost thousands in cloud fees. I optimize your database architecture so your AWS/Snowflake bills shrink dramatically.",
        icon: HandCoins,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    }
];

export const WhyUs = () => {
    return (
        <section className="py-24 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/3">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
                        >
                            Why Choose My <br />
                            <span className="text-cyan-500">Data Services?</span>
                        </motion.h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Because you don't need raw spreadsheets. You need a structured, scalable engine that drives decision-making.
                        </p>
                    </div>

                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
                        {reasons.map((reason, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col gap-4 p-4"
                            >
                                <div className={`size-14 rounded-2xl ${reason.bg} ${reason.color} flex items-center justify-center`}>
                                    <reason.icon className="size-7" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">{reason.title}</h3>
                                <p className="text-muted-foreground leading-relaxed italic">
                                    {reason.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
