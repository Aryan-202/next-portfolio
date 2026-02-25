"use client";

import React from "react";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

export const Testimonials = () => {
    return (
        <section className="py-24 bg-primary/5 text-foreground relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-orange-500/50 to-transparent" />
            <div className="absolute -top-32 -left-32 size-96 bg-orange-500/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-32 -right-32 size-96 bg-amber-500/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-8 flex justify-center text-orange-500"
                    >
                        <Quote className="size-16" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex justify-center gap-1 mb-6">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="size-5 fill-orange-500 text-orange-500" />
                            ))}
                        </div>

                        <h2 className="text-2xl md:text-4xl font-medium mb-10 leading-relaxed italic">
                            &ldquo;We tried customizing Salesforce and Pipedrive to fit our unique logistic operations, but it was just a clunky mess. Aryan came in and built us a proprietary web tool from the ground up. It does exactly what we need, is incredibly fast, and we actually own the IP.&rdquo;
                        </h2>

                        <div className="flex flex-col items-center">
                            <div className="size-16 rounded-full bg-linear-to-br from-orange-500 to-amber-600 mb-4 p-0.5">
                                <div className="w-full h-full rounded-full bg-background flex items-center justify-center font-bold text-xl uppercase tracking-wider">
                                    AL
                                </div>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-foreground uppercase">Operations Director</span>
                            <span className="text-orange-500/80 text-sm font-medium">Logistics Provider</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
