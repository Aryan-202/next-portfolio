"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Code2,
    Palette,
    Layers,
    Database,
    Globe,
    CreditCard,
    Cloud,
    Cpu
} from "lucide-react";

const techItems = [
    { name: "Kotlin / Java (Android)", icon: Code2, desc: "Native power and performance." },
    { name: "Jetpack Compose", icon: Palette, desc: "Modern declarative UI toolkit." },
    { name: "MVVM / Clean Architecture", icon: Layers, desc: "Maintainable, testable, and scalable code." },
    { name: "Firebase / Supabase", icon: Database, desc: "Real-time databases and authentication." },
    { name: "REST APIs", icon: Globe, desc: "Seamless communication with your backend." },
    { name: "Payment Gateways", icon: CreditCard, desc: "Stripe, Razorpay, and global solutions." },
    { name: "Cloud Deployment", icon: Cloud, desc: "AWS, GCP, or specialized mobile hosts." },
    { name: "Scalable Backend Integration", icon: Cpu, desc: "High-performance server-side logic." }
];

export const TechStack = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-4 size-16 rounded-3xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary"
                    >
                        <Code2 className="size-8" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-foreground mb-4"
                    >
                        My Tech Stack
                    </motion.h2>
                    <p className="text-muted-foreground text-lg max-w-xl">
                        I use the latest industry-standard tools and frameworks to build robust mobile experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl border border-border bg-card/50 hover:bg-card hover:shadow-xl hover:border-brand-secondary/30 transition-all duration-300 group"
                        >
                            <item.icon className="size-10 text-brand-secondary mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-lg font-bold text-foreground mb-2">{item.name}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed italic">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
