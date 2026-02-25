"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Blocks,
    Cpu,
    Workflow,
    ArrowUpRight,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/base/buttons/button";

const services = [
    {
        number: "01",
        title: "Internal Tool Engineering",
        description: "Bespoke operations dashboards, inventory trackers, and staff management systems that replace your messy Google Sheets and save hundreds of manual work hours.",
        icon: Workflow,
        tag: "Operational Efficiency"
    },
    {
        number: "02",
        title: "SaaS Platform Development",
        description: "Want to launch a software product? I build complete Software-as-a-Service MVPs from the database schemas to the Stripe subscription portals.",
        icon: Blocks,
        tag: "Product Launch"
    },
    {
        number: "03",
        title: "Legacy Application Modernization",
        description: "Re-coding and migrating outdated, slow, or unsupported legacy software into fast, secure, modern web languages like React and Node.",
        icon: ArrowUpRight,
        tag: "Tech Debt Removal"
    },
    {
        number: "04",
        title: "API & System Integrations",
        description: "I write the custom middleware and GraphQL endpoints necessary to make your disparate CRMs, apps, and third-party tools communicate perfectly.",
        icon: Cpu,
        tag: "Seamless Connectivity"
    }
];

export const ServicesList = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                    >
                        Engineering Services
                    </motion.h2>
                    <p className="text-muted-foreground text-lg italic uppercase tracking-widest font-medium">
                        Translating business logic into unbreakable code
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-3xl border border-border bg-card relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 text-6xl font-black text-foreground/5 pointer-events-none group-hover:text-orange-500/10 transition-colors">
                                {service.number}
                            </div>

                            <div className="flex flex-col h-full">
                                <span className="mb-6 inline-block w-fit scale-90 origin-left border border-orange-500/30 bg-orange-500/10 px-3 py-1 rounded-full text-xs font-bold text-orange-500 uppercase tracking-tighter">
                                    {service.tag}
                                </span>

                                <div className="size-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                                    <service.icon className="size-8" />
                                </div>

                                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                                <p className="text-muted-foreground text-lg mb-8 grow leading-relaxed">
                                    {service.description}
                                </p>

                                <Button
                                    color="tertiary"
                                    className="w-fit p-0 hover:text-orange-500 group/btn"
                                    iconTrailing={<ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />}
                                >
                                    Learn More
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
