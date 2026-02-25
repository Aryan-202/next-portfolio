"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Flame,
    Layers,
    Activity,
    Server,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/base/buttons/button";

const services = [
    {
        number: "01",
        title: "MVP Development",
        description: "Turn your core idea into a launch-ready product. We focus on the essential features that prove your concept and attract early users.",
        icon: Flame,
        tag: "Founder's Favorite"
    },
    {
        number: "02",
        title: "Full Marketplace Development",
        description: "End-to-end marketplace solution including user apps, vendor panels, and comprehensive admin dashboards for global scale.",
        icon: Layers,
        tag: "Premium Solution"
    },
    {
        number: "03",
        title: "App Optimization",
        description: "Breathe new life into existing apps. I improve performance, fix architecture issues, and modernize the UI/UX for better retention.",
        icon: Activity,
        tag: "Performance First"
    },
    {
        number: "04",
        title: "API & Backend Integration",
        description: "Seamlessly connect your mobile app with secure payments, complex databases, and third-party automation tools.",
        icon: Server,
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
                        Professional Services
                    </motion.h2>
                    <p className="text-muted-foreground text-lg italic uppercase tracking-widest font-medium">
                        Tailored solutions for every stage of your growth
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
                            <div className="absolute top-0 right-0 p-8 text-6xl font-black text-foreground/5 pointer-events-none group-hover:text-brand-secondary/10 transition-colors">
                                {service.number}
                            </div>

                            <div className="flex flex-col h-full">
                                <span className="mb-6 inline-block w-fit scale-90 origin-left border border-brand-secondary/30 bg-brand-secondary/10 px-3 py-1 rounded-full text-xs font-bold text-brand-secondary uppercase tracking-tighter">
                                    {service.tag}
                                </span>

                                <div className="size-16 rounded-2xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                                    <service.icon className="size-8" />
                                </div>

                                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                                <p className="text-muted-foreground text-lg mb-8 grow leading-relaxed">
                                    {service.description}
                                </p>

                                <Button
                                    color="tertiary"
                                    className="w-fit p-0 hover:text-brand-secondary group/btn"
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
