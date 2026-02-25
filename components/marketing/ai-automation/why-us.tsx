"use client";

import React from "react";
import { motion } from "motion/react";
import { Handshake, Target, ShieldCheck, HeartHandshake } from "lucide-react";

const reasons = [
    {
        title: "Platform Agnostic",
        description: "I don't force you into one software. I look at your current stack and build workflows using the tools that make the most sense.",
        icon: Handshake,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "ROI-Obsessed",
        description: "If an automation doesn't save you time or make you money, I won't build it. Every project starts with calculating the expected business value.",
        icon: Target,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        title: "Security & Privacy First",
        description: "Your company data is your most valuable asset. I structure AI systems so your confidential information is never used to train public models.",
        icon: ShieldCheck,
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        title: "Ongoing Optimization",
        description: "AI moves fast. I don't just hand you a bot and disappear — I provide continuous support to ensure your systems stay ahead of the curve.",
        icon: HeartHandshake,
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
                            <span className="text-purple-500">AI Services?</span>
                        </motion.h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Because you don't need a researcher—you need a pragmatist who drives real business results.
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
