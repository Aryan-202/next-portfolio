

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { Background } from "@/components/background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://aryan-vishwakarma.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Aryan Vishwakarma | AI Automation, Mobile Apps, Web & Software Development",
    template: "%s | Aryan Vishwakarma",
  },
  description:
    "Aryan Vishwakarma offers 6 expert services: AI Automation, Mobile App Development, Website Development, Custom Software, Data Handling & IT Support — helping businesses in India & globally scale smarter.",
  keywords: [
    // Personal brand
    "Aryan Vishwakarma",
    "Aryan-202",
    "AryanxSenpai",
    "Aryan Vishwakarma portfolio",
    "Aryan Vishwakarma freelancer",
    "Aryan Vishwakarma India",
    "hire Aryan Vishwakarma",
    // AI Automation
    "AI Automation Engineer",
    "AI Automation Consultant India",
    "n8n Automation Specialist",
    "Make.com Automation Expert",
    "Zapier Automation Developer",
    "AI Workflow Builder",
    "Business Process Automation",
    "Lead Generation Automation",
    "CRM Automation",
    "Python Automation Developer",
    "ChatGPT Integration Expert",
    // Mobile Apps
    "Mobile App Developer India",
    "Android App Development",
    "iOS App Development",
    "Kotlin Jetpack Compose Developer",
    "React Native Developer",
    "Marketplace App Development",
    "Custom Business App Developer",
    // Website Development
    "Website Developer India",
    "Next.js Developer",
    "React Developer",
    "Full Stack Web Developer",
    "SEO Optimized Website",
    "eCommerce Website Development",
    "SaaS Website Developer",
    // Custom Software
    "Custom Software Developer",
    "SaaS Development India",
    "Internal Tools Developer",
    "API Integration Expert",
    "Full Stack Software Engineer",
    // Data Handling
    "Data Engineer India",
    "Web Scraping Expert",
    "ETL Pipeline Developer",
    "Data Analytics Consultant",
    "Business Intelligence Developer",
    // IT Support
    "IT Support Services",
    "Managed IT Services India",
    "Cloud Infrastructure Management",
    "Cybersecurity Consultant",
    "Network Infrastructure Expert",
    // Location
    "Freelancer Gorakhpur",
    "Tech Services Gorakhpur",
    "Software Developer Uttar Pradesh",
  ],
  authors: [{ name: "Aryan Vishwakarma", url: BASE_URL }],
  creator: "Aryan Vishwakarma",
  publisher: "Aryan Vishwakarma",
  category: "Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aryan Vishwakarma | AI · Mobile · Web · Software · Data · IT",
    description:
      "6 expert tech services under one roof: AI Automation, Mobile App Dev, Website Dev, Custom Software, Data Handling & IT Support. Based in India, serving clients globally.",
    url: BASE_URL,
    siteName: "Aryan Vishwakarma",
    images: [
      {
        url: "/images/profile/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Aryan Vishwakarma — AI Automation, Mobile Apps, Web & Software Expert",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Vishwakarma | AI · Mobile · Web · Software · Data · IT",
    description:
      "6 expert tech services: AI Automation, Mobile Apps, Web Dev, Custom Software, Data Engineering & IT Support. Let's scale your business.",
    creator: "@AryanxSenpai",
    site: "@AryanxSenpai",
    images: ["/images/profile/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google99d3a15437b7b07f",
  },
};

// ─── Structured Data (JSON-LD) ────────────────────────────────────────────────

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Aryan Vishwakarma",
  alternateName: ["Aryan-202", "AryanxSenpai"],
  jobTitle: "AI Automation Engineer & Full-Stack Developer",
  url: BASE_URL,
  image: `${BASE_URL}/images/profile/profile.jpeg`,
  email: "mailto:aryanvishwakarma275@gmail.com",
  telephone: "+919455289155",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gorakhpur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/Aryan-202",
    "https://www.linkedin.com/in/aryanspf",
    "https://x.com/AryanxSenpai",
    "https://www.instagram.com/_aryan._.vishwakarma_/",
  ],
  description:
    "Aryan Vishwakarma is a freelance tech expert providing AI Automation, Mobile App Development, Website Development, Custom Software, Data Handling, and IT Support services to businesses worldwide.",
  knowsAbout: [
    "AI Automation",
    "n8n",
    "Python",
    "Lead Generation",
    "Mobile App Development",
    "Android Development",
    "Kotlin",
    "React Native",
    "Website Development",
    "Next.js",
    "React",
    "Custom Software",
    "SaaS Development",
    "Data Engineering",
    "ETL Pipelines",
    "IT Support",
    "API Integration",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Aryan Vishwakarma — Service Catalog",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Automation Services",
          description:
            "Custom AI agents, n8n/Make.com workflows, CRM automation, and lead generation systems that save hundreds of hours monthly.",
          url: `${BASE_URL}/services/ai-automation`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description:
            "Native Android (Kotlin/Jetpack Compose) and cross-platform (React Native) mobile applications for startups and enterprises.",
          url: `${BASE_URL}/services/mobile-app-development`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Development",
          description:
            "Fast, SEO-optimized, conversion-focused websites and web apps built with Next.js and React.",
          url: `${BASE_URL}/services/website-development`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
          description:
            "Bespoke SaaS platforms, internal business tools, and enterprise applications engineered for your exact workflow.",
          url: `${BASE_URL}/services/custom-software`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Handling & Engineering",
          description:
            "Web scraping, ETL pipelines, data warehouses, and business intelligence dashboards for data-driven decisions.",
          url: `${BASE_URL}/services/data-handling`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "IT Support & Managed Services",
          description:
            "Proactive IT management, network security, cloud infrastructure, and helpdesk support for zero-downtime operations.",
          url: `${BASE_URL}/services/it-support`,
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Aryan Vishwakarma",
  url: BASE_URL,
  description:
    "Official portfolio of Aryan Vishwakarma — AI Automation, Mobile Apps, Web Dev, Custom Software, Data Handling & IT Support.",
  author: { "@id": `${BASE_URL}/#person` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${BASE_URL}/about` },
    { "@type": "ListItem", position: 3, name: "Services", item: `${BASE_URL}/services/ai-automation` },
    { "@type": "ListItem", position: 4, name: "Projects", item: `${BASE_URL}/projects` },
    { "@type": "ListItem", position: 5, name: "Blog", item: `${BASE_URL}/blog` },
    { "@type": "ListItem", position: 6, name: "Contact", item: `${BASE_URL}/contact` },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Gorakhpur, Uttar Pradesh, India" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <ThemeProvider>
          <div className="relative">
            {/* Background with lower opacity */}
            <div className="fixed inset-0 -z-10">
              <Background />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}