"use client";

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Activity, Brain, Clock } from "lucide-react";

const reasons = [
    {
        title: "Zero-Downtime Mentality",
        description: "I don't just fix things when they break. I proactively monitor your network to ensure components are updated before they ever fail.",
        icon: Activity,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Enterprise Grade Security",
        description: "Your business might be small-to-medium, but your security shouldn't be. I implement the exact same frameworks used by Fortune 500s.",
        icon: ShieldCheck,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        title: "Strategic Consulting",
        description: "IT shouldn't just be an expense. I help you choose software and hardware that actively increases your team's productivity and bottom line.",
        icon: Brain,
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        title: "Rapid Response Times",
        description: "When an emergency happens, every minute counts. I guarantee strict SLAs so your team is never left waiting for critical support.",
        icon: Clock,
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
                            Why Trust Me Build <br />
                            <span className="text-emerald-500">Your Infrastructure?</span>
                        </motion.h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Because hope is not a strategy. You need guaranteed, proven systems that protect your business automatically.
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
