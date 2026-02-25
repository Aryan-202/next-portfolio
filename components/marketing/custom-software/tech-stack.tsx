"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Code2,
    Database,
    Server,
    Layers,
    LayoutTemplate,
    Cpu,
    Webhook,
    Shield
} from "lucide-react";

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
                        className="mb-4 size-16 rounded-3xl bg-orange-500/10 flex items-center justify-center text-orange-500"
                    >
                        <Layers className="size-8" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-foreground mb-4"
                    >
                        Enterprise Grade Stack
                    </motion.h2>
                    <p className="text-muted-foreground text-lg max-w-xl">
                        I utilize modern, battle-tested frameworks to ensure your software is maintainable, fast, and bug-free.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { name: "Frontend / UI", icon: LayoutTemplate, desc: "React, Next.js, and modern TailwindCSS." },
                        { name: "Backend / API", icon: Server, desc: "Node.js, Express, Go, and GraphQL." },
                        { name: "Databases", icon: Database, desc: "PostgreSQL, MongoDB, and Redis." },
                        { name: "Cloud Infrastructure", icon: Cpu, desc: "AWS, Docker, Vercel, and Serverless." },
                        { name: "Authentication", icon: Shield, desc: "OAuth 2.0, JWT, Auth0, and Supabase." },
                        { name: "Payments & APIs", icon: Webhook, desc: "Stripe integration, Twilio, and REST APIs." },
                        { name: "State Management", icon: Code2, desc: "Redux, Zustand, and React Query." },
                        { name: "Architecture", icon: Layers, desc: "Microservices and Event-Driven systems." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl border border-border bg-card/50 hover:bg-card hover:shadow-xl hover:border-orange-500/30 transition-all duration-300 group"
                        >
                            <item.icon className="size-10 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-lg font-bold text-foreground mb-2">{item.name}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed italic">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
