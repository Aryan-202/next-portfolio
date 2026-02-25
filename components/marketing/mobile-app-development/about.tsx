"use client";

import React from "react";
import { motion } from "motion/react";
import {
    ShoppingCart,
    Smartphone,
    CreditCard,
    Link as LinkIcon,
    Zap,
    CheckCircle2
} from "lucide-react";

const features = [
    {
        title: "Marketplace Apps",
        description: "Robust multi-vendor platforms with seamless UX.",
        icon: ShoppingCart,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10"
    },
    {
        title: "Custom Business Apps",
        description: "Tailored solutions to automate and grow your operations.",
        icon: Smartphone,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10"
    },
    {
        title: "Payment Integration",
        description: "Secure, global payment gateways and subscriptions.",
        icon: CreditCard,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10"
    },
    {
        title: "API Integrations",
        description: "Connecting your app with the tools you already use.",
        icon: LinkIcon,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10"
    },
    {
        title: "High-Performance UI/UX",
        description: "Lightning fast interfaces that delight your users.",
        icon: Zap,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10"
    }
];

export const About = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
                            Turning Ideas Into <br />
                            <span className="text-brand-secondary">Scalable Mobile Products</span>
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 text-balance">
                            I&apos;m Aryan, a Mobile App Developer specializing in building fast, scalable, and user-focused applications.
                            From MVP to full-scale marketplace platforms, I help startups, creators, and businesses launch powerful mobile apps that generate real results.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Clean, scalable, and production-ready code",
                                "User-centric design focused on conversion",
                                "Modern tech stack for maximum performance"
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
                                className="p-6 rounded-2xl border border-border bg-card hover:bg-accent/50 transition-colors group"
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
