

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
  title: "Aryan Vishwakarma | Automation Engineer & Lead Generation Systems",
  description: "Aryan Vishwakarma is an Automation Engineer helping businesses increase leads, reduce manual work, and scale operations using Python, APIs & AI.",
  keywords: [
    "Aryan Vishwakarma",
    "Automation Engineer",
    "Business Automation",
    "Lead Generation Automation",
    "n8n Automation",
    "Python Automation",
    "Workflow Automation Specialist"
  ],
  authors: [{ name: "Aryan Vishwakarma" }],
  openGraph: {
    title: "Aryan Vishwakarma | Automation Engineer",
    description: "Automation Engineer helping businesses increase leads, reduce manual work, and scale operations.",
    url: "https://portfolio-leads.onrender.com",
    siteName: "Aryan Vishwakarma Portfolio",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aryan Vishwakarma",
  "jobTitle": "Automation Engineer",
  "url": "https://portfolio-leads.onrender.com",
  "sameAs": [
    "https://github.com/Aryan-202",
    "https://www.linkedin.com/in/aryanspf",
    "https://x.com/AryanxSenpai",
    "https://www.instagram.com/_aryan._.vishwakarma_/"
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