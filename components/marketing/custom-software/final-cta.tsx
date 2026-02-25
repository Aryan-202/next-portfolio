"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/base/buttons/button";
import { Code2, Mail, ArrowRight } from "lucide-react";

export const FinalCTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background design */}
            <div className="absolute inset-0 bg-orange-500/5 dark:bg-orange-500/2" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto rounded-[3rem] border border-border bg-background/50 backdrop-blur-xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative overlay */}
                    <div className="absolute -top-24 -right-24 size-64 bg-orange-500/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 size-64 bg-amber-500/5 rounded-full blur-3xl" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tighter">
                            Ready to Build Your <br />
                            <span className="text-orange-500">Proprietary Software?</span>
                        </h2>

                        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                            Stop forcing your operations into rigid third-party tools. Let's engineer a solution that fits your business perfectly.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button
                                size="xl"
                                className="w-full sm:w-auto px-10 rounded-full shadow-lg shadow-orange-500/20 group bg-orange-600 hover:bg-orange-700 text-white"
                                iconLeading={<Code2 className="size-5 group-hover:-translate-y-1 transition-transform" />}
                            >
                                Discuss Your Project
                            </Button>

                            <Button
                                size="xl"
                                color="secondary"
                                className="w-full sm:w-auto px-10 rounded-full group"
                                iconLeading={<Mail className="size-5" />}
                                iconTrailing={<ArrowRight className="size-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />}
                            >
                                Contact For Scope
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
