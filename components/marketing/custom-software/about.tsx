"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Puzzle,
    Workflow,
    TrendingUp,
    Zap,
    Scale,
    CheckCircle2
} from "lucide-react";

export const About = () => {
    return (
        <section className="py-24 bg-primary/5 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
                            Off-The-Shelf Products <br />
                            <span className="text-orange-500">Only Take You So Far.</span>
                        </h2>

                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                            I build proprietary software that perfectly mirrors your operations. No more paying thousands a month for features you don't use, or awkwardly hacking together five different SaaS tools.
                        </p>

                        <p className="text-lg text-muted-foreground mb-8 text-balance font-medium">
                            Whether you're looking to automate internal logistics, launch a customer-facing portal, or build a scalable SaaS MVP from scratch, I engineer the exact solution you need—and nothing you don't.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Full IP Ownership and Code Control",
                                "Zero per-user monthly SaaS fees",
                                "Perfectly mapped to your unique workflows"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="size-5 text-orange-500" />
                                    <span className="text-foreground/80 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Perfect Fit",
                                description: "Designed entirely around your business, not the other way around.",
                                icon: Puzzle,
                                color: "text-blue-500",
                                bgColor: "bg-blue-500/10"
                            },
                            {
                                title: "Workflow Harmony",
                                description: "Connect all your existing departments into one central truth.",
                                icon: Workflow,
                                color: "text-emerald-500",
                                bgColor: "bg-emerald-500/10"
                            },
                            {
                                title: "Infinite Scalability",
                                description: "Built on AWS/GCP to handle millions of requests simultaneously.",
                                icon: Scale,
                                color: "text-orange-500",
                                bgColor: "bg-orange-500/10"
                            },
                            {
                                title: "Lightning Fast",
                                description: "Optimized React and Node architectures for instant load times.",
                                icon: Zap,
                                color: "text-rose-500",
                                bgColor: "bg-rose-500/10"
                            },
                            {
                                title: "Competitive Edge",
                                description: "Software your competitors literally cannot buy or replicate.",
                                icon: TrendingUp,
                                color: "text-yellow-500",
                                bgColor: "bg-yellow-500/10"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`p-6 rounded-2xl border border-border bg-background hover:bg-accent/50 transition-colors group ${index === 4 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto' : ''}`}
                            >
                                <div className={`size-12 rounded-xl ${feature.bgColor} ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <feature.icon className="size-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
