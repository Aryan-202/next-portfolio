"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Code2,
    Database,
    Globe,
    Server,
    Rocket,
    Cloud,
    Search,
    Gauge
} from "lucide-react";

const techItems = [
    { name: "React / Next.js", icon: Code2, desc: "Modern, reactive, and SEO-friendly UIs." },
    { name: "HTML5, CSS3, JS", icon: Globe, desc: "The core foundations of the web." },
    { name: "Node.js & REST APIs", icon: Server, desc: "Robust and scalable backend systems." },
    { name: "Firebase / Supabase", icon: Rocket, desc: "Rapid backend-as-a-service." },
    { name: "SQL / NoSQL Databases", icon: Database, desc: "PostgreSQL, MongoDB, and more." },
    { name: "Cloud Deployment", icon: Cloud, desc: "Vercel, AWS, and DigitalOcean." },
    { name: "SEO Optimization", icon: Search, desc: "Structured data, meta tags, index-ready." },
    { name: "Performance Eval", icon: Gauge, desc: "Lighthouse optimization & caching." }
];

export const TechStack = () => {
    return (
        <section className="py-24 bg-background border-t border-border/50">
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
                        I use the latest industry-standard tools to build powerful, future-proof web experiences.
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
