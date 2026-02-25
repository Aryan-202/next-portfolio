"use client";

import React from "react";
import { motion } from "motion/react";
import {
    MessageSquareText,
    MailOpen,
    DatabaseZap,
    FileSearch,
    Network
} from "lucide-react";

const useCases = [
    {
        title: "Intelligent Customer Support",
        description: "AI Chatbots that know your internal company data and provide instant, accurate answers to customer questions.",
        icon: MessageSquareText,
    },
    {
        title: "Lead Nurturing & Email Automation",
        description: "Systems that categorize incoming leads and instantly draft hyper-personalized follow-up emails.",
        icon: MailOpen,
    },
    {
        title: "Web Scraping & Data Extraction",
        description: "Automated scripts that extract vital information from specific websites and databases on a schedule.",
        icon: DatabaseZap,
    },
    {
        title: "Internal AI Knowledge Bases",
        description: "A private ChatGPT for your company, loaded with your SOPs, policies, and documents using RAG.",
        icon: FileSearch,
    },
    {
        title: "Multi-Platform Sync (Make/n8n)",
        description: "Connecting Slack, Gmail, Airtable, CRM, and OpenAI to trigger complex logic across your entire software stack.",
        icon: Network,
    }
];

export const UseCases = () => {
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
                        What Can AI <br />
                        <span className="text-purple-500">Automate For You?</span>
                    </motion.h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We don't just prompt ChatGPT. We build resilient, autonomous systems that do real business work.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {useCases.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`${idx === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
                        >
                            <div className="bg-background border border-border rounded-3xl p-8 shadow-sm h-full hover:shadow-lg hover:border-purple-500/30 transition-all duration-300 group">
                                <div className="size-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 mb-6">
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
