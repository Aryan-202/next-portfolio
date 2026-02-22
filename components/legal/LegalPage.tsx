
"use client";

import { motion } from "motion/react";
import React from "react";

interface LegalPageProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
}

const LegalPage = ({ title, lastUpdated, children }: LegalPageProps) => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <div className="space-y-2 border-b pb-8">
                        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                            {title}
                        </h1>
                        <p className="text-muted-foreground">
                            Last Updated: {lastUpdated}
                        </p>
                    </div>

                    <div className="max-w-none">
                        <div className="space-y-12 text-foreground/80 leading-relaxed text-lg">
                            {children}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LegalPage;
