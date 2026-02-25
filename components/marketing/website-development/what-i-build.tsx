"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Building2,
    ShoppingCart,
    LayoutDashboard,
    MousePointerClick,
    Bot
} from "lucide-react";

const buildCategories = [
    {
        title: "Business Websites",
        description: "Professional websites that build credibility and generate leads.",
        icon: Building2,
    },
    {
        title: "eCommerce Stores",
        description: "Secure online stores with payment gateway integration and inventory management.",
        icon: ShoppingCart,
    },
    {
        title: "SaaS & Web Apps",
        description: "Scalable platforms with authentication, dashboards, and API integration.",
        icon: LayoutDashboard,
    },
    {
        title: "High-Converting Landing Pages",
        description: "Optimized pages specifically designed to maximize conversions.",
        icon: MousePointerClick,
    },
    {
        title: "Automation-Integrated Websites",
        description: "Websites connected with CRM, email systems, APIs, and AI automation.",
        icon: Bot,
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
                        What I Can <br />
                        <span className="text-brand-secondary">Build For You</span>
                    </motion.h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        From simple lead-gen sites to complex automated platforms, I bring your digital vision to life.
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
                        >
                            <div className="bg-background border border-border rounded-3xl p-8 shadow-sm h-full hover:shadow-lg hover:border-brand-secondary/30 transition-all duration-300 group">
                                <div className="size-14 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all duration-300 mb-6">
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
