

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

export const metadata: Metadata = {
  title: {
    default: "Aryan Vishwakarma | Automation Engineer & Lead Generation Expert",
    template: "%s | Aryan Vishwakarma",
  },
  description: "Aryan Vishwakarma is a top-rated Automation Engineer & AI Specialist. Scaling businesses with n8n, Python, and AI-powered lead generation systems.",
  keywords: [
    "Aryan Vishwakarma",
    "Aryan-202",
    "AryanxSenpai",
    "Automation Engineer Gorakhpur",
    "n8n Automation Specialist India",
    "AI Workflow Builder",
    "Lead Generation Automation Expert",
    "Python Automation Developer",
    "DAAI AI Spreadsheet",
    "Business Process Automation",
    "Custom CRM Automation",
    "SaaS Workflow Optimization",
    "AI-Powered Web Crawler",
    "B2B Lead Scrapper n8n",
    "Automation Consultant for Agencies",
    "Next.js SEO Portfolio",
    "Supabase Developer Portfolio",
    "Low-code Automation Expert"
  ],
  authors: [{ name: "Aryan Vishwakarma", url: "https://aryan-vishwakarma.vercel.app" }],
  creator: "Aryan Vishwakarma",
  publisher: "Aryan Vishwakarma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aryan-vishwakarma.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aryan Vishwakarma | Automation Engineer & AI Specialist",
    description: "Helping businesses increase leads, reduce manual work, and scale operations using Python, APIs & AI.",
    url: "https://aryan-vishwakarma.vercel.app",
    siteName: "Aryan Vishwakarma",
    images: [
      {
        url: "/images/profile/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Aryan Vishwakarma - Automation Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Vishwakarma | Automation Engineer",
    description: "Automation Engineer helping businesses scale with AI & Python.",
    creator: "@AryanxSenpai",
    images: ["/images/profile/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google99d3a15437b7b07f",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aryan Vishwakarma",
  "alternateName": ["Aryan-202", "AryanxSenpai"],
  "jobTitle": "Automation Engineer & AI Workflow Specialist",
  "url": "https://aryan-vishwakarma.vercel.app",
  "image": "https://aryan-vishwakarma.vercel.app/images/profile/profile.jpeg",
  "sameAs": [
    "https://github.com/Aryan-202",
    "https://www.linkedin.com/in/aryanspf",
    "https://x.com/AryanxSenpai",
    "https://www.instagram.com/_aryan._.vishwakarma_/"
  ],
  "description": "Automation Engineer helping businesses increase leads, reduce manual work, and scale operations using Python, APIs & AI.",
  "knowsAbout": [
    "n8n",
    "Python",
    "Lead Generation",
    "AI Automation",
    "Next.js",
    "SaaS Development"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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