"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Database,
    Binary,
    ChartColumn,
    ArrowRightLeft,
    ShieldCheck
} from "lucide-react";

const dataCapabilities = [
    {
        title: "Database Architecture",
        description: "Designing structured SQL (Postgres, MySQL) and NoSQL (MongoDB, DynamoDB) environments tailored perfectly to your application queries.",
        icon: Database,
    },
    {
        title: "ETL & Pipeline Engineering",
        description: "Extracting, transforming, and loading massive datasets automatically using Python scripts, Apache Airflow, or dbt.",
        icon: ArrowRightLeft,
    },
    {
        title: "Data Warehousing",
        description: "Centralizing your company data in Snowflake, BigQuery, or Amazon Redshift to serve as a single immutable source of truth.",
        icon: Binary,
    },
    {
        title: "Analytics & Visulization",
        description: "Building powerful Tableau, PowerBI, or custom React dashboards so non-technical stakeholders can read the data easily.",
        icon: ChartColumn,
    },
    {
        title: "Governance & Security",
        description: "Implementing strict Role-Based Access Controls (RBAC), anonymization, and encryption for GDPR/CCPA compliance.",
        icon: ShieldCheck,
    }
];

export const WhatIHandle = () => {
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
                        What I Can <br />
                        <span className="text-cyan-500">Handle For You</span>
                    </motion.h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        From raw ingestion to boardroom-ready dashboards, I build the systems that make your data work for you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dataCapabilities.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`${idx === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
                        >
                            <div className="bg-background border border-border rounded-3xl p-8 shadow-sm h-full hover:shadow-lg hover:border-cyan-500/30 transition-all duration-300 group">
                                <div className="size-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 mb-6">
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
