"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Bot,
    Terminal,
    Database,
    Network,
    Webhook,
    MessageSquareCode,
    Cpu,
    Workflow
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
                        className="mb-4 size-16 rounded-3xl bg-purple-500/10 flex items-center justify-center text-purple-500"
                    >
                        <Bot className="size-8" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-foreground mb-4"
                    >
                        The Future-Ready Stack
                    </motion.h2>
                    <p className="text-muted-foreground text-lg max-w-xl">
                        Agnostic to platforms, I use whatever tool is necessary to execute the fastest, most reliable workflow.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { name: "Language Models", icon: MessageSquareCode, desc: "OpenAI gpt-4o, Anthropic Claude 3.5, Gemini." },
                        { name: "Python & TypeScript", icon: Terminal, desc: "Custom scripts and backend agent logic." },
                        { name: "Workflows (n8n & Make)", icon: Workflow, desc: "Visual automation pipelines." },
                        { name: "Vector Databases", icon: Database, desc: "Pinecone, Qdrant, and Supabase pgvector." },
                        { name: "Agent Frameworks", icon: Cpu, desc: "Langchain, LlamaIndex, and AutoGen." },
                        { name: "APIs & Webhooks", icon: Webhook, desc: "Building bridges between isolated SaaS." },
                        { name: "Scraping & Headless", icon: Network, desc: "Puppeteer, Playwright, and specialized scrapers." },
                        { name: "Chatbot Interfaces", icon: Bot, desc: "Voiceflow, Custom React UI, Telegram/WhatsApp." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl border border-border bg-card/50 hover:bg-card hover:shadow-xl hover:border-purple-500/30 transition-all duration-300 group"
                        >
                            <item.icon className="size-10 text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-lg font-bold text-foreground mb-2">{item.name}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed italic">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
