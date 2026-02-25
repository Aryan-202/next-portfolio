"use client";

import React from "react";
import { motion } from "motion/react";
import { BriefcaseBusiness, Layers, Zap, Bot } from "lucide-react";

const reasons = [
    {
        title: "Business-First Approach",
        description: "I build websites to generate revenue — not just look good. Everything is aimed at increasing your bottom line.",
        icon: BriefcaseBusiness,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Scalable Architecture",
        description: "Your website will be built with modern practices to seamlessly grow and scale alongside your business.",
        icon: Layers,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        title: "Performance Optimized",
        description: "Speed and SEO matter. I make sure you rank high on search engines and convert your visitors.",
        icon: Zap,
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        title: "Automation Ready",
        description: "Your website can integrate directly with CRMs, email systems, and custom workflows perfectly out of the box.",
        icon: Bot,
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
                            Why Work <br />
                            <span className="text-brand-secondary">With Me?</span>
                        </motion.h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Combining technical excellence with deep business strategy to deliver web products that succeed in the real world.
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
