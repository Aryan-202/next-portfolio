"use client";

import React from "react";
import { motion } from "motion/react";
import {
    ShieldCheck,
    HardDrive,
    ServerCrash,
    ActivitySquare,
    Lock,
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
                            Your Tech Should Solve Problems <br />
                            <span className="text-emerald-500">Not Create Them</span>
                        </h2>

                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                            I am a Dedicated IT Consultant specializing in proactive system management, cybersecurity networking, and technical support that eliminates business friction.
                        </p>

                        <p className="text-lg text-muted-foreground mb-8 text-balance font-medium">
                            When servers fail, data is lost, or networks go down, your business loses money. My job is an invisible one: making sure those crises never happen in the first place through robust, enterprise-grade architecture.
                        </p>

                        <div className="space-y-4">
                            {[
                                "24/7 Proactive Monitoring & Patching",
                                "Zero-Trust Security & Access Control",
                                "Rapid Disaster Recovery Planning"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="size-5 text-emerald-500" />
                                    <span className="text-foreground/80 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Prevent Downtime",
                                description: "Stop chasing outages and start preventing them entirely.",
                                icon: ServerCrash,
                                color: "text-blue-500",
                                bgColor: "bg-blue-500/10"
                            },
                            {
                                title: "Ironclad Security",
                                description: "End-to-end encryption, firewalls, and strict compliance standards.",
                                icon: ShieldCheck,
                                color: "text-emerald-500",
                                bgColor: "bg-emerald-500/10"
                            },
                            {
                                title: "Data Protection",
                                description: "Military-grade daily backups with fail-over redundancy.",
                                icon: HardDrive,
                                color: "text-purple-500",
                                bgColor: "bg-purple-500/10"
                            },
                            {
                                title: "Access Management",
                                description: "Identity verification so only approved eyes see your data.",
                                icon: Lock,
                                color: "text-rose-500",
                                bgColor: "bg-rose-500/10"
                            },
                            {
                                title: "Network Performance",
                                description: "Optimizing bandwidth and infrastructure speed.",
                                icon: ActivitySquare,
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
