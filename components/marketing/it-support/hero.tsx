"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/base/buttons/button";
import { LifeBuoy, Mail } from "lucide-react";
import LightRays from "@/components/LightRays";
import SplitText from "@/components/SplitText";
import Image from "next/image";
import { assets } from "@/public/assets";

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-30 bg-background">
            <div className="absolute inset-0 z-0">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#10b981"
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
                        className="mb-4 inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-500"
                    >
                        IT Support & Infrastructure Expert
                    </motion.span>

                    <div className="mb-6 flex flex-col items-center">
                        <SplitText
                            text="Reliable IT Infrastructure."
                            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground block"
                            tag="h1"
                            delay={30}
                        />
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight bg-linear-to-r from-emerald-800 to-emerald-400 bg-clip-text text-transparent block mt-2"
                        >
                            Zero Downtime Allowed.
                        </motion.h1>
                    </div>

                    <p className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-muted-foreground">
                        Proactive IT management, ironclad security, and rapid technical support to keep your business running smoothly without frustrating interruptions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            size="xl"
                            iconLeading={<LifeBuoy className="size-5" />}
                            className="w-full sm:w-auto px-8 bg-emerald-600 hover:bg-emerald-700 text-white"
                        >
                            Get IT Support Now
                        </Button>
                        <Button
                            size="xl"
                            color="secondary"
                            iconLeading={<Mail className="size-5" />}
                            className="w-full sm:w-auto px-8"
                        >
                            Request Free IT Audit
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                    className="mt-16 mx-auto max-w-5xl relative"
                >
                    <div className="relative z-10 rounded-2xl border border-border bg-card/50 p-2 shadow-2xl backdrop-blur-sm overflow-hidden">
                        <div className="aspect-video w-full relative rounded-xl overflow-hidden bg-emerald-950 flex items-center justify-center">
                            <div className="text-emerald-500/20 text-6xl font-bold italic select-none">SYSTEM SHOWCASE</div>
                        </div>
                    </div>
                    {/* Decorative glows */}
                    <div className="absolute -top-10 -left-10 size-40 bg-emerald-500/20 blur-[100px] rounded-full" />
                    <div className="absolute -bottom-10 -right-10 size-40 bg-green-500/20 blur-[100px] rounded-full" />
                </motion.div>
            </div>
        </section>
    );
};
