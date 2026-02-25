"use client";

import React from "react";
import { motion } from "motion/react";
import {
    DatabaseZap,
    HardDriveDownload,
    Network,
    FileSpreadsheet,
    LineChart,
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
                            Stop Guessing. <br />
                            <span className="text-cyan-500">Start Knowing.</span>
                        </h2>

                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                            I am a Data Engineer and Systems Architect who specializes in untangling complex databases, migrating legacy systems, and building completely automated data pipelines.
                        </p>

                        <p className="text-lg text-muted-foreground mb-8 text-balance font-medium">
                            Whether you're struggling with siloed CSV files across multiple departments or you need a real-time analytics warehouse built from scratch—I structure your information so your business can scale infinitely.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Clean, accessible, and structured data lakes",
                                "Zero-loss cross-protocol migrations",
                                "Automated ETL/ELT pipelines"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="size-5 text-cyan-500" />
                                    <span className="text-foreground/80 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Data Migration",
                                description: "Securely move terabytes of data between servers without downtime.",
                                icon: HardDriveDownload,
                                color: "text-blue-500",
                                bgColor: "bg-blue-500/10"
                            },
                            {
                                title: "Storage Architecture",
                                description: "Designing SQL & NoSQL schemas for massive horizontal scaling.",
                                icon: DatabaseZap,
                                color: "text-cyan-500",
                                bgColor: "bg-cyan-500/10"
                            },
                            {
                                title: "API Integrations",
                                description: "Connecting disjointed CRMs, ERPs, and marketing endpoints.",
                                icon: Network,
                                color: "text-emerald-500",
                                bgColor: "bg-emerald-500/10"
                            },
                            {
                                title: "Data Cleansing",
                                description: "Deduplicating and formatting raw datasets into usable insight.",
                                icon: FileSpreadsheet,
                                color: "text-rose-500",
                                bgColor: "bg-rose-500/10"
                            },
                            {
                                title: "Business Intelligence",
                                description: "Dashboards that give executives real-time KPIs and reporting.",
                                icon: LineChart,
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
