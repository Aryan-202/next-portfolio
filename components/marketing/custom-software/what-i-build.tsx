"use client";

import React from "react";
import { motion } from "motion/react";
import {
    AppWindow,
    Users,
    LineChart,
    Blocks,
    Network
} from "lucide-react";

const buildCategories = [
    {
        title: "Internal Operations Tools",
        description: "Dashboards to manage inventory, staff schedules, and complex logistics that off-the-shelf software can't handle.",
        icon: AppWindow,
    },
    {
        title: "SaaS Platforms (MVPs & Beyond)",
        description: "Architecting multitenant software-as-a-service applications with Stripe billing, authentications, and scalable databases.",
        icon: Blocks,
    },
    {
        title: "Customer & B2B Portals",
        description: "Secure environments where your clients can log in, view their data, upload documents, and interact with your business.",
        icon: Users,
    },
    {
        title: "Custom CRM / ERP Systems",
        description: "Replacing disjointed processes with a single, unified system that tracks your entire business pipeline.",
        icon: LineChart,
    },
    {
        title: "API & Microservice Architectures",
        description: "Building the invisible backend bridges that securely pass data between all of your existing business tools.",
        icon: Network,
    }
];

export const WhatIBuild = () => {
    return (
        <section className="py-24 bg-muted/30 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 text-foreground"
                    >
                        What I Engineer <br />
                        <span className="text-orange-500">For Your Business</span>
                    </motion.h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        From complex backend infrastructure to beautiful front-end portals, I bring full-stack capabilities to your biggest problems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {buildCategories.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`${idx === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
                        >
                            <div className="bg-background border border-border rounded-3xl p-8 shadow-sm h-full hover:shadow-lg hover:border-orange-500/30 transition-all duration-300 group">
                                <div className="size-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 mb-6">
                                    <item.icon className="size-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
