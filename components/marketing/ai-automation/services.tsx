"use client";

import React from "react";
import { motion } from "motion/react";
import {
    LineChart,
    BotMessageSquare,
    Zap,
    UsersRound,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/base/buttons/button";

const services = [
    {
        number: "01",
        title: "AI Strategy Consulting",
        description: "A deep dive into your business operations to identify the highest ROI opportunities for automation and AI integration.",
        icon: LineChart,
        tag: "Step One"
    },
    {
        number: "02",
        title: "Custom AI Chatbots (RAG)",
        description: "Bots trained specifically on your company's data, capable of handling customer support, internal queries, and lead qualification.",
        icon: BotMessageSquare,
        tag: "Most Popular"
    },
    {
        number: "03",
        title: "Workflow Automation",
        description: "Connecting apps like HubSpot, Slack, Gmail, and Airtable to eliminate manual data entry and human error entirely.",
        icon: Zap,
        tag: "Time Saver"
    },
    {
        number: "04",
        title: "AI Agent Development",
        description: "Advanced autonomous systems that don't just answer questions, but take actions (book meetings, send invoices, browse the web).",
        icon: UsersRound,
        tag: "Cutting Edge"
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
                        Professional Services
                    </motion.h2>
                    <p className="text-muted-foreground text-lg italic uppercase tracking-widest font-medium">
                        Tangible solutions to modern business bottlenecks
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
                            <div className="absolute top-0 right-0 p-8 text-6xl font-black text-foreground/5 pointer-events-none group-hover:text-purple-500/10 transition-colors">
                                {service.number}
                            </div>

                            <div className="flex flex-col h-full">
                                <span className="mb-6 inline-block w-fit scale-90 origin-left border border-purple-500/30 bg-purple-500/10 px-3 py-1 rounded-full text-xs font-bold text-purple-500 uppercase tracking-tighter">
                                    {service.tag}
                                </span>

                                <div className="size-16 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                                    <service.icon className="size-8" />
                                </div>

                                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                                <p className="text-muted-foreground text-lg mb-8 grow leading-relaxed">
                                    {service.description}
                                </p>

                                <Button
                                    color="tertiary"
                                    className="w-fit p-0 hover:text-purple-500 group/btn"
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
