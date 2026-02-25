"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Database,
    HardDrive,
    Server,
    LineChart,
    Workflow,
    Table,
    CloudCog,
    FileCode
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
                        className="mb-4 size-16 rounded-3xl bg-cyan-500/10 flex items-center justify-center text-cyan-500"
                    >
                        <HardDrive className="size-8" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-foreground mb-4"
                    >
                        Modern Data Infrastructure
                    </motion.h2>
                    <p className="text-muted-foreground text-lg max-w-xl">
                        I architect logic using the most scalable and resilient enterprise tools available in the industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { name: "SQL Databases", icon: Database, desc: "PostgreSQL, MySQL, Microsoft SQL Server." },
                        { name: "NoSQL & Document", icon: FileCode, desc: "MongoDB, DynamoDB, Redis, & Elasticsearch." },
                        { name: "Data Warehouses", icon: Server, desc: "Snowflake, Google BigQuery, & Amazon Redshift." },
                        { name: "Orchestration", icon: Workflow, desc: "Apache Airflow, Prefect, & Dagster pipelines." },
                        { name: "Cloud Engineering", icon: CloudCog, desc: "AWS (S3, Glue), Azure Data Factory, GCP." },
                        { name: "Data Transformation", icon: Table, desc: "dbt (Data Build Tool), Pandas, & PySpark." },
                        { name: "BI & Visualization", icon: LineChart, desc: "Tableau, PowerBI, Looker, & Metabase." },
                        { name: "Languages", icon: HardDrive, desc: "Python, SQL, R, Go, and TypeScript." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl border border-border bg-card/50 hover:bg-card hover:shadow-xl hover:border-cyan-500/30 transition-all duration-300 group"
                        >
                            <item.icon className="size-10 text-cyan-500 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-lg font-bold text-foreground mb-2">{item.name}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed italic">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
