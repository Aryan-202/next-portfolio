"use client";

import React from "react";
import { motion } from "motion/react";
import { Shield, Zap, TrendingUp, HeartHandshake } from "lucide-react";

const reasons = [
    {
        title: "Clean Architecture",
        description: "Standard practices for maintainable code. Your app won't break when you scale to millions of users or add complex features.",
        icon: Shield,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Fast Development",
        description: "Optimized workflows to get your MVP to market in weeks, not months. I focus on core value propositions first.",
        icon: Zap,
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        title: "Business-Focused",
        description: "I don't just write code — I build revenue-ready products. I prioritize features that drive user engagement and ROI.",
        icon: TrendingUp,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        title: "Long-Term Support",
        description: "Continuous updates, scaling, and proactive optimization. Think of me as your technical partner for the long haul.",
        icon: HeartHandshake,
        color: "text-rose-500",
        bg: "bg-rose-500/10"
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
                            Combining technical excellence with business strategy to deliver mobile products that succeed in the real world.
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
