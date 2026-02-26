import React from 'react';
import { Metadata } from 'next';

const BASE_URL = "https://aryan-vishwakarma.vercel.app";
const PAGE_URL = `${BASE_URL}/blog/aryan-vishwakarma-automation-engineer`;

export const metadata: Metadata = {
    title: "Aryan Vishwakarma — Automation Engineer & Multi-Service Tech Expert India",
    description:
        "Aryan Vishwakarma is an Automation Engineer & full-stack developer from Gorakhpur, India, specializing in AI Automation, Mobile App Development, Website Development, Custom Software, Data Handling & IT Support.",
    keywords: [
        "Aryan Vishwakarma Automation Engineer",
        "Aryan Vishwakarma AI Expert",
        "Aryan Vishwakarma developer India",
        "Aryan-202 GitHub",
        "AI Automation Specialist India",
        "Business Process Automation India",
        "n8n Developer India",
        "Lead Generation Expert India",
        "Full Stack Developer Gorakhpur",
        "Mobile App Developer India",
        "Python Developer India",
    ],
    alternates: {
        canonical: "/blog/aryan-vishwakarma-automation-engineer",
    },
    openGraph: {
        title: "Aryan Vishwakarma — The Tech Expert Scaling Businesses with AI & Code",
        description:
            "Aryan Vishwakarma offers AI Automation, Mobile Apps, Web Development, Custom Software, Data Engineering & IT Support — based in India, working globally.",
        url: PAGE_URL,
        siteName: "Aryan Vishwakarma",
        type: "article",
        images: [{ url: "/images/profile/profile.jpeg", width: 1200, height: 630, alt: "Aryan Vishwakarma — Automation Engineer" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Aryan Vishwakarma | AI, Mobile, Web & Software Expert",
        description: "AI Automation · Mobile Apps · Web Dev · Custom Software · Data Handling · IT Support — all under one roof.",
        creator: "@AryanxSenpai",
        images: ["/images/profile/profile.jpeg"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${PAGE_URL}/#article`,
    headline: "Aryan Vishwakarma — The Tech Expert Scaling Businesses with AI & Code",
    description:
        "Aryan Vishwakarma is a multi-disciplinary tech expert offering AI Automation, Mobile App Development, Website Development, Custom Software, Data Engineering & IT Support.",
    url: PAGE_URL,
    image: `${BASE_URL}/images/profile/profile.jpeg`,
    author: { "@id": `${BASE_URL}/#person` },
    publisher: { "@id": `${BASE_URL}/#person` },
    datePublished: "2025-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    keywords: [
        "Aryan Vishwakarma",
        "AI Automation Engineer",
        "Mobile App Developer",
        "Website Developer",
        "Custom Software Developer",
        "Data Engineer",
        "IT Support",
        "India",
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "Aryan Vishwakarma — Automation Engineer", item: PAGE_URL },
    ],
};

const SEOBlogPage = () => {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="min-h-screen py-24 px-4">
                <div className="container mx-auto max-w-4xl">
                    <article className="prose prose-invert lg:prose-xl mx-auto">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-primary">
                            Aryan Vishwakarma — The Tech Expert Scaling Businesses
                        </h1>

                        <div className="w-24 h-1 bg-primary mb-12"></div>

                        <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                            <p className="text-xl font-medium text-foreground">
                                Aryan Vishwakarma is a dedicated tech expert from Gorakhpur, India, who transforms business
                                challenges into high-efficiency digital solutions across six specialized service areas.
                            </p>

                            <p>
                                With deep expertise in <strong>AI Automation</strong>, <strong>Mobile App Development</strong>,{" "}
                                <strong>Website Development</strong>, <strong>Custom Software Engineering</strong>,{" "}
                                <strong>Data Handling & Engineering</strong>, and <strong>IT Support & Managed Services</strong>,
                                Aryan helps businesses in India and globally save hundreds of hours, reduce costs, and scale
                                operations intelligently.
                            </p>

                            <section className="bg-muted/30 p-8 rounded-2xl border border-primary/10 my-12">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">6 Core Services by Aryan Vishwakarma</h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                                        AI Automation — n8n, Make.com, Python, ChatGPT
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                                        Mobile App Development — Android, iOS, React Native
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                                        Website Development — Next.js, React, SEO
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                                        Custom Software — SaaS platforms & internal tools
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                                        Data Handling — ETL, scraping & analytics
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                                        IT Support — Cloud, security & managed services
                                    </li>
                                </ul>
                            </section>

                            <p>
                                By leveraging modern tools like <strong>Python</strong>, <strong>n8n</strong>, <strong>Zapier</strong>,
                                <strong> Kotlin</strong>, <strong>Next.js</strong>, and custom <strong>API integrations</strong>,
                                Aryan Vishwakarma builds reliable systems that drive measurable ROI for clients across industries.
                            </p>

                            <p>
                                Whether it&apos;s automating cold outreach, building a marketplace mobile app, launching a high-performance
                                website, developing a SaaS product, engineering data pipelines, or providing proactive IT infrastructure
                                support — <strong>Aryan Vishwakarma</strong> ensures that technology works for the business, not the
                                other way around.
                            </p>

                            <p>
                                Based in <strong>Gorakhpur, Uttar Pradesh, India</strong>, Aryan works with clients globally to reduce
                                operational costs and increase revenue through smart, scalable tech solutions.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export default SEOBlogPage;
