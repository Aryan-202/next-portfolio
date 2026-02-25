"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Users,
    Briefcase,
    Calendar,
    GraduationCap,
    Package,
    ShieldCheck,
    Bell,
    Settings,
    Clock,
    LayoutDashboard,
    CreditCard
} from "lucide-react";

const marketplaceTypes = [
    { name: "Multi-vendor Apps", icon: Users },
    { name: "Service Platforms", icon: Briefcase },
    { name: "Rental / Booking", icon: Calendar },
    { name: "Course Selling", icon: GraduationCap },
    { name: "Product eCommerce", icon: Package }
];

const builtWith = [
    { title: "Secure Auth", icon: ShieldCheck },
    { title: "Payment Gateways", icon: CreditCard },
    { title: "Admin Dashboards", icon: LayoutDashboard },
    { title: "Vendor Management", icon: Settings },
    { title: "Push Notifications", icon: Bell },
    { title: "Real-time Updates", icon: Clock }
];

export const Marketplace = () => {
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
                        Want to Build Your Own <br />
                        <span className="text-brand-secondary">Marketplace App?</span>
                    </motion.h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        I specialize in complex multi-party platforms that scale with your business growth.
                        Launch your marketplace with confidence.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-background border border-border rounded-3xl p-8 shadow-sm"
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            I can help you launch:
                        </h3>
                        <div className="space-y-6">
                            {marketplaceTypes.map((type, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="size-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all duration-300">
                                        <type.icon className="size-6" />
                                    </div>
                                    <span className="text-xl font-medium text-foreground">{type.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-8">
                            High-Ticket Features Included:
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {builtWith.map((item, idx) => (
                                <div key={idx} className="flex flex-col gap-3 p-6 rounded-2xl border border-border bg-background hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                                    <item.icon className="size-8 text-brand-secondary/80 group-hover:text-brand-secondary transition-colors" />
                                    <span className="font-semibold text-foreground">{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 p-6 rounded-2xl border-2 border-dashed border-brand-secondary/30 bg-brand-secondary/5">
                            <p className="text-center font-medium text-foreground">
                                All platforms built with <span className="text-brand-secondary">Clean Architecture</span> to ensure they don&apos;t break when you scale to thousands of users.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
