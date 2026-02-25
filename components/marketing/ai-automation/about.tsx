"use client";

import React from "react";
import { motion } from "motion/react";
import {
    BrainCircuit,
    Cpu,
    Workflow,
    TrendingUp,
    ShieldAlert,
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
                            Your Business Needs to Adapt to <br />
                            <span className="text-purple-500">The Intelligence Era</span>
                        </h2>

                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                            I&apos;m an AI Automation Consultant dedicated to helping businesses stop wasting time on repetitive tasks and start leveraging Large Language Models to do the heavy lifting.
                        </p>

                        <p className="text-lg text-muted-foreground mb-8 text-balance font-medium">
                            If your team is spending hours copy-pasting data, answering the same repetitive emails, or losing leads because you can&apos;t follow up fast enough — you have an automation problem. I solve that.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Bespoke AI Agents tailored to your data",
                                "Zero-human-intervention workflows",
                                "Maximized ROI through operational efficiency"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="size-5 text-purple-500" />
                                    <span className="text-foreground/80 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Save 100+ Hours",
                                description: "Automate low-value, repetitive data entry tasks instantly.",
                                icon: Cpu,
                                color: "text-blue-500",
                                bgColor: "bg-blue-500/10"
                            },
                            {
                                title: "24/7 AI Availability",
                                description: "Agents that answer client questions 24/7 without delays.",
                                icon: BrainCircuit,
                                color: "text-purple-500",
                                bgColor: "bg-purple-500/10"
                            },
                            {
                                title: "Complex Workflows",
                                description: "Connecting 5+ apps to work harmoniously behind the scenes.",
                                icon: Workflow,
                                color: "text-emerald-500",
                                bgColor: "bg-emerald-500/10"
                            },
                            {
                                title: "Eliminate Human Error",
                                description: "Strictly programmed algorithms process logic perfectly.",
                                icon: ShieldAlert,
                                color: "text-rose-500",
                                bgColor: "bg-rose-500/10"
                            },
                            {
                                title: "Scale Revenue",
                                description: "Handle 10x the client volume with the same size team.",
                                icon: TrendingUp,
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
