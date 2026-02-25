"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Cpu,
    Cloud,
    Shield,
    TerminalSquare,
    Globe,
    LockKeyhole,
    Cable,
    Search
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
                        className="mb-4 size-16 rounded-3xl bg-emerald-500/10 flex items-center justify-center text-emerald-500"
                    >
                        <TerminalSquare className="size-8" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-foreground mb-4"
                    >
                        Enterprise Tools & Security
                    </motion.h2>
                    <p className="text-muted-foreground text-lg max-w-xl">
                        I utilize a rigorous suite of monitoring, networking, and cloud tools adopted by Fortune 500 tech teams.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { name: "Cloud Platforms", icon: Cloud, desc: "AWS, Azure AD, Microsoft 365, & Google Workspace." },
                        { name: "Endpoint Security", icon: Shield, desc: "CrowdStrike, SentinelOne, & Malwarebytes EDR." },
                        { name: "Network Hardware", icon: Cable, desc: "Cisco, Ubiquiti UniFi, Fortinet, & Meraki." },
                        { name: "Identity Auth", icon: LockKeyhole, desc: "Okta, Duo Security, IAM & Zero-Trust Policies." },
                        { name: "Virtualization", icon: Cpu, desc: "VMware vSphere, Proxmox, and Docker Containers." },
                        { name: "Web Defenses", icon: Globe, desc: "Cloudflare, WAF configurations, & DNS zoning." },
                        { name: "Log Monitoring", icon: Search, desc: "Splunk, Datadog & Centralized SIEM tracing." },
                        { name: "Remote Support", icon: TerminalSquare, desc: "AnyDesk, TeamViewer & specialized Intune MDM." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl border border-border bg-card/50 hover:bg-card hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 group"
                        >
                            <item.icon className="size-10 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-lg font-bold text-foreground mb-2">{item.name}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed italic">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
