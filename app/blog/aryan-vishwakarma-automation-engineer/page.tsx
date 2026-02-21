import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Aryan Vishwakarma | Automation Engineer & Lead Generation Expert",
    description: "Aryan Vishwakarma is an Automation Engineer specializing in business process automation, lead generation systems, and workflow automation using Python, APIs, and AI.",
};

const SEOBlogPage = () => {
    return (
        <div className="min-h-screen py-24 px-4">
            <div className="container mx-auto max-w-4xl">
                <article className="prose prose-invert lg:prose-xl mx-auto">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-primary">
                        Aryan Vishwakarma — The Automation Engineer Scaling Businesses
                    </h1>

                    <div className="w-24 h-1 bg-primary mb-12"></div>

                    <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                        <p className="text-xl font-medium text-foreground">
                            Aryan Vishwakarma is a dedicated Automation Engineer who specializes in transforming manual business operations into high-efficiency automated systems.
                        </p>

                        <p>
                            With a deep focus on <strong>Lead Generation Automation</strong>, <strong>Workflow Optimization</strong>, and <strong>AI Integration</strong>, Aryan helps businesses save hundreds of hours every month. By leveraging modern tools like Python, n8n, Zapier, and custom API integrations, he builds reliable systems that drive ROI.
                        </p>

                        <section className="bg-muted/30 p-8 rounded-2xl border border-primary/10 my-12">
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Core Expertise of Aryan Vishwakarma</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                    Business Process Automation
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                    Lead Generation Pipelines
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                    CRM & API Integrations
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                    AI-Assisted Workflows
                                </li>
                            </ul>
                        </section>

                        <p>
                            Whether it's automating cold outreach, setting up automated reporting systems, or building custom bots to handle repetitive data tasks,
                            <strong> Aryan Vishwakarma</strong> ensures that technology works for the business, not the other way around.
                        </p>

                        <p>
                            Based in India, Aryan works with clients globally to reduce operational costs and increase revenue through smart automation engineering.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default SEOBlogPage;
