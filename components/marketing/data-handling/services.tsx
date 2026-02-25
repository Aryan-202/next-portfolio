"use client";

import React from "react";
import { motion } from "motion/react";
import {
    HardDriveDownload,
    Database,
    LineChart,
    Settings2,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/base/buttons/button";

const services = [
    {
        number: "01",
        title: "Legacy Infrastructure Migrations",
        description: "Moving from on-premise servers or outdated databases (like Access) to modern cloud warehouses (Snowflake, BigQuery) with zero data loss.",
        icon: HardDriveDownload,
        tag: "Digital Transformation"
    },
    {
        number: "02",
        title: "Data Warehouse Architecture",
        description: "Designing the schematics of your central database to handle millions of rows and return complex analytical queries in milliseconds.",
        icon: Database,
        tag: "Core Engineering"
    },
    {
        number: "03",
        title: "Automated ETL Pipelines",
        description: "Scripts that automatically extract data from your CRM, marketing channels, and payment gateways into one unified dashboard daily.",
        icon: Settings2,
        tag: "Flow Automation"
    },
    {
        number: "04",
        title: "Business Intelligence Custom Dashboards",
        description: "Clean, visual representations of your KPIs using Tableau, PowerBI, or Next.js so you can see exactly how your business is performing.",
        icon: LineChart,
        tag: "Executive View"
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
                        End-to-end data lifecycle management
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
                            <div className="absolute top-0 right-0 p-8 text-6xl font-black text-foreground/5 pointer-events-none group-hover:text-cyan-500/10 transition-colors">
                                {service.number}
                            </div>

                            <div className="flex flex-col h-full">
                                <span className="mb-6 inline-block w-fit scale-90 origin-left border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 rounded-full text-xs font-bold text-cyan-500 uppercase tracking-tighter">
                                    {service.tag}
                                </span>

                                <div className="size-16 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                                    <service.icon className="size-8" />
                                </div>

                                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                                <p className="text-muted-foreground text-lg mb-8 grow leading-relaxed">
                                    {service.description}
                                </p>

                                <Button
                                    color="tertiary"
                                    className="w-fit p-0 hover:text-cyan-500 group/btn"
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
