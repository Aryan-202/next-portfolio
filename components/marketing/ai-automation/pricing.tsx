"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Check, Zap, Shield, Clock, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const aiPlans = [
    {
        title: "Workflow Automation",
        priceRange: "From $1.5k",
        description: "Zapier/Make/n8n workflows to connect your tools and eliminate manual copy-pasting.",
        features: [
            "Up to 3 interconnected platforms",
            "Logic + conditionals setup",
            "Error handling & alerts",
            "1-hr handover training",
            "30 days bug-fixing support",
        ],
        ctaText: "Save Hours Daily",
        highlighted: false,
    },
    {
        title: "Custom AI Assistant (RAG)",
        priceRange: "From $3.5k",
        description: "A private chatbot trained on your company's PDFs, Notion docs, and websites.",
        features: [
            "Integration with OpenAI/Claude",
            "Vector database setup (Pinecone)",
            "Web UI or Slack/Teams integration",
            "Prompt engineering & fine-tuning",
            "Basic conversation analytics",
        ],
        ctaText: "Build Your AI",
        highlighted: true,
    },
    {
        title: "Autonomous AI Agent",
        priceRange: "From $8k",
        description: "Advanced agentic systems that execute tasks, browse the web, and make decisions.",
        features: [
            "Multi-agent orchestration",
            "Tool-calling (APIs, Web Browsing)",
            "Custom backend infrastructure",
            "High-security data processing",
            "Dedicated Slack channel support",
        ],
        ctaText: "Scale Effectively",
        highlighted: false,
    },
];

export const Pricing = () => {
    return (
        <section id="pricing" className="py-20 px-4 scroll-animate bg-muted/30">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">AI & Automation Pricing</h2>
                    <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Pricing based on the hours of manual labor you'll save every week.
                        Investment that pays for itself in months, not years.
                    </p>
                </motion.div>

                {/* Pricing Tiers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {aiPlans.map((tier, index) => (
                        <motion.div
                            key={tier.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className={`p-8 h-full flex flex-col relative overflow-hidden ${tier.highlighted ? 'border-purple-500 ring-1 ring-purple-500 shadow-lg shadow-purple-500/10' : ''}`}>
                                {tier.highlighted && (
                                    <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider flex items-center gap-1">
                                        <Zap className="w-3 h-3 fill-current" />
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                                    <p className="text-muted-foreground text-sm h-12 mb-4">{tier.description}</p>
                                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                                        {tier.priceRange}
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8 grow">
                                    {tier.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3 text-sm">
                                            <div className="p-0.5 rounded-full bg-purple-500/20 text-purple-500 mt-1">
                                                <Check className="w-4 h-4" />
                                            </div>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button className={`w-full ${tier.highlighted ? 'bg-purple-600 hover:bg-purple-700 text-white' : ''}`} variant={tier.highlighted ? "default" : "outline"}>
                                    {tier.ctaText}
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Maintenance Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="p-8 lg:p-12 border-purple-500/20 bg-purple-500/5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-purple-500/20 rounded-lg">
                                        <BrainCircuit className="w-6 h-6 text-purple-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Monthly Retainer & API Management</h3>
                                </div>
                                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6">From $500 / month</p>
                                <p className="text-muted-foreground mb-8 text-lg">
                                    AI models update monthly. Let me manage the prompts, API costs, tokens, and monitor your workflows so nothing breaks.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Prompt Refinement & Tuning",
                                        "API Key Cost Management",
                                        "Database/Vector Storage Upkeep",
                                        "Quarterly Automation Audits"
                                    ].map((feature) => (
                                        <div key={feature} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-6 text-center lg:border-l lg:border-purple-500/10 lg:pl-12">
                                <div className="space-y-2">
                                    <h4 className="text-xl font-semibold">Ready for an Automation Audit?</h4>
                                    <p className="text-muted-foreground">
                                        Stop wasting hours on manual tasks. Let's build your system today.
                                    </p>
                                </div>
                                <Link href="#contact">
                                    <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg gap-2 cursor-pointer bg-purple-600 hover:bg-purple-700 text-white">
                                        Book a Free Audit
                                    </Button>
                                </Link>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Clock className="w-4 h-4" />
                                    <span>30-minute discovery call</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 text-center text-muted-foreground text-sm"
                >
                    <p>* AI API costs (OpenAI, Anthropic, Make/n8n operations) are generally billed independently and directly to you.</p>
                </motion.div>
            </div>
        </section>
    );
};
