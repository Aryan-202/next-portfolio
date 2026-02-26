"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/base/buttons/button";
import { Rocket, Mail } from "lucide-react";
import LightRays from "@/components/LightRays";
import SplitText from "@/components/SplitText";
import Image from "next/image";
import { assets } from "@/public/assets";

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-30">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#3b82f6"
                    raysSpeed={0.5}
                    lightSpread={1.2}
                    rayLength={1.5}
                    className="opacity-40"
                    followMouse={true}
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-4 inline-block rounded-full border border-brand-secondary/20 bg-brand-secondary/10 px-4 py-1.5 text-sm font-medium text-brand-secondary"
                    >
                        Mobile App Development Expert
                    </motion.span>

                    <div className="mb-6 flex flex-col items-center">
                        <SplitText
                            text="I Build Mobile Apps That"
                            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground block"
                            tag="h1"
                            delay={30}
                        />
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight bg-linear-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent block mt-2"
                        >
                            Turn Ideas Into Revenue
                        </motion.h1>
                    </div>

                    <p className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-muted-foreground">
                        Custom Android & iOS apps designed to scale, engage users, and grow your business.
                        Professional solutions for startups and enterprises.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            size="xl"
                            iconLeading={<Rocket className="size-5" />}
                            className="w-full sm:w-auto px-8"
                        >
                            Launch Your App
                        </Button>
                        <Button
                            size="xl"
                            color="secondary"
                            iconLeading={<Mail className="size-5" />}
                            className="w-full sm:w-auto px-8"
                        >
                            Get Free Consultation
                        </Button>
                    </div>
                </motion.div>

                {/* Visual element (placeholder for app mockup) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                    className="mt-16 mx-auto max-w-4xl relative"
                >
                    <div className="relative z-10 rounded-2xl border border-border bg-card/50 p-2 shadow-2xl backdrop-blur-sm overflow-hidden">
                        <div className="aspect-video w-full relative rounded-xl overflow-hidden bg-muted">
                            <Image
                                src={assets.showcase.mobile_showcase_1}
                                alt="Mobile App Showcase"
                                fill
                                className="object-cover object-top opacity-90"
                            />
                        </div>
                    </div>
                    {/* Decorative glows */}
                    <div className="absolute -top-10 -left-10 size-40 bg-blue-500/20 blur-[100px] rounded-full" />
                    <div className="absolute -bottom-10 -right-10 size-40 bg-brand-secondary/20 blur-[100px] rounded-full" />
                </motion.div>
            </div>
        </section>
    );
};
