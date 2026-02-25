"use client";

import React from "react";
import { motion } from "motion/react";
import {
    ActivitySquare,
    UsersRound,
    Lock,
    ServerCrash,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/base/buttons/button";

const services = [
    {
        number: "01",
        title: "Managed IT Services (MSP)",
        description: "Complete outsourcing of your IT needs. We handle your network, updates, licensing, and daily monitoring for a flat monthly fee.",
        icon: ActivitySquare,
        tag: "Full Coverage"
    },
    {
        number: "02",
        title: "Cybersecurity Audits",
        description: "A comprehensive penetration test and vulnerability assessment to find where hackers could breach your system before they do.",
        icon: Lock,
        tag: "Critical Assessment"
    },
    {
        number: "03",
        title: "Disaster Recovery Planning",
        description: "Building resilient backup systems so your business can restore data within minutes of a ransomware attack, fire, or hardware crash.",
        icon: ServerCrash,
        tag: "Business Continuity"
    },
    {
        number: "04",
        title: "Helpdesk & Team Support",
        description: "On-call remote assistance for your employees. We fix printer issues, email lockouts, and software glitches instantly.",
        icon: UsersRound,
        tag: "Rapid Response"
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
                        Securing operations from top to bottom
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
                            <div className="absolute top-0 right-0 p-8 text-6xl font-black text-foreground/5 pointer-events-none group-hover:text-emerald-500/10 transition-colors">
                                {service.number}
                            </div>

                            <div className="flex flex-col h-full">
                                <span className="mb-6 inline-block w-fit scale-90 origin-left border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 rounded-full text-xs font-bold text-emerald-500 uppercase tracking-tighter">
                                    {service.tag}
                                </span>

                                <div className="size-16 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                                    <service.icon className="size-8" />
                                </div>

                                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                                <p className="text-muted-foreground text-lg mb-8 grow leading-relaxed">
                                    {service.description}
                                </p>

                                <Button
                                    color="tertiary"
                                    className="w-fit p-0 hover:text-emerald-500 group/btn"
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
