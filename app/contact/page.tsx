import Contact from "@/components/layouts/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Aryan Vishwakarma | Contact for AI, Mobile, Web & Software Services",
  description:
    "Ready to scale your business? Contact Aryan Vishwakarma for AI Automation, Mobile App Development, Website Development, Custom Software, Data Handling & IT Support services. Based in India, available globally.",
  keywords: [
    "Hire Aryan Vishwakarma",
    "Contact Automation Engineer India",
    "Hire AI Developer India",
    "Hire Mobile App Developer India",
    "Hire Web Developer India",
    "Freelancer for hire India",
    "Aryan Vishwakarma contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Aryan Vishwakarma | Hire for AI, Mobile, Web & Software",
    description:
      "Let's build something great. Get in touch for AI automation, mobile apps, websites, custom software, data engineering, or IT support.",
    url: "https://aryan-vishwakarma.vercel.app/contact",
    siteName: "Aryan Vishwakarma",
    images: [{ url: "/images/profile/profile.jpeg", width: 1200, height: 630, alt: "Contact Aryan Vishwakarma" }],
    type: "website",
  },
};

export default function ContactPage() {
  return <Contact />;
}