"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Server,
    Wifi,
    Fingerprint,
    FolderLock,
    Headset
} from "lucide-react";

const managedCategories = [
    {
        title: "Server & Cloud Architecture",
        description: "Deploying and managing AWS, Azure, Google Cloud, and on-site physical servers securely.",
        icon: Server,
    },
    {
        title: "Network & Infrastructure",
        description: "Establishing fast, reliable, and secure VPNs, SD-WAN, and enterprise networking hardware.",
        icon: Wifi,
    },
    {
        title: "Cybersecurity & Firewalls",
        description: "Intrusion detection, endpoint protection, and rigorous compliance implementation (SOC2, HIPAA).",
        icon: Fingerprint,
    },
    {
        title: "Data Backup & Recovery",
        description: "Immutable backups and automated recovery protocols in the event of ransomware or critical failure.",
        icon: FolderLock,
    },
    {
        title: "Helpdesk & Employee Support",
        description: "Remote technical support for your staff, managing software licenses, hardware rollouts, and troubleshooting.",
        icon: Headset,
    }
];

export const WhatIManage = () => {
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
                        What I Manage <br />
                        <span className="text-emerald-500">For Your Business</span>
                    </motion.h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        From the physical wires to your encrypted cloud assets, I ensure the complete integrity of your technology sandbox.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {managedCategories.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`${idx === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
                        >
                            <div className="bg-background border border-border rounded-3xl p-8 shadow-sm h-full hover:shadow-lg hover:border-emerald-500/30 transition-all duration-300 group">
                                <div className="size-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 mb-6">
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
