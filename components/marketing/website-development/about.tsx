"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Zap,
    Smartphone,
    ShieldCheck,
    Target,
    TrendingUp,
    CheckCircle2
} from "lucide-react";

const features = [
    {
        title: "Load Fast",
        description: "Optimized for speed and core web vitals.",
        icon: Zap,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10"
    },
    {
        title: "Responsive on All Devices",
        description: "Flawless experience on mobile, tablet, and desktop.",
        icon: Smartphone,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10"
    },
    {
        title: "Secure & Scalable",
        description: "Built on resilient, modern infrastructure.",
        icon: ShieldCheck,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10"
    },
    {
        title: "Optimized for Conversions",
        description: "Designed to turn your visitors into customers.",
        icon: Target,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10"
    },
    {
        title: "Support Business Growth",
        description: "Scalable solutions that grow alongside you.",
        icon: TrendingUp,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10"
    }
];

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
                            Your Website Should Work <br />
                            <span className="text-brand-secondary">Like a Sales Machine</span>
                        </h2>

                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                            I&apos;m a Web Developer specializing in building fast, secure, and conversion-optimized websites for businesses that want more leads, more sales, and stronger online authority.
                        </p>

                        <p className="text-lg text-muted-foreground mb-8 text-balance font-medium">
                            From landing pages to full-scale web platforms, I build websites that solve real business problems. Your website isn&apos;t just design — it&apos;s your digital infrastructure.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Clean, semantic code for SEO",
                                "Revenue-driven layout and design",
                                "Zero-friction user experience"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="size-5 text-brand-secondary" />
                                    <span className="text-foreground/80 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`p-6 rounded-2xl border border-border bg-background hover:bg-accent/50 transition-colors group ${index === features.length - 1 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto' : ''}`}
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
