"use client";

import React from "react";
import { motion } from "motion/react";
import { HandCoins, Code, Cpu, Target } from "lucide-react";

const reasons = [
    {
        title: "Total Technical Ownership",
        description: "Once the code is built, it's yours. No vendor lock-in, no licensing fees, and no per-user subscriptions draining your monthly budget.",
        icon: Code,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Exact Feature Matching",
        description: "If your business requires a highly specific workflow, we build it exactly to that spec. You won't have to alter your process to fit the software ever again.",
        icon: Target,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        title: "API Portability",
        description: "Your custom software will effortlessly communicate with everything. We build custom API hooks to sync your new platform directly to your existing tools.",
        icon: Cpu,
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        title: "Long-Term Cost Savings",
        description: "SaaS tools cost an average company over $12,000 per year in subscriptions. A custom internal tool pays for itself rapidly by eliminating those fees forever.",
        icon: HandCoins,
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
                            Why Choose <br />
                            <span className="text-orange-500">Custom Code?</span>
                        </motion.h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Because having proprietary technology gives you a massive operational advantage over competitors who rely on generic tools.
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
