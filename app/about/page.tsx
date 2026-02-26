import React from 'react'
import About from '@/components/layouts/about'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Aryan Vishwakarma | AI, Mobile, Web & Software Expert India",
  description:
    "Learn about Aryan Vishwakarma — an Automation Engineer & full-stack developer from Gorakhpur, India, specializing in AI Automation, Mobile App Development, Website Development, Custom Software, Data Handling & IT Support.",
  keywords: [
    "About Aryan Vishwakarma",
    "Aryan Vishwakarma bio",
    "Automation Engineer India",
    "AI Expert India",
    "Full Stack Developer India",
    "Freelancer Gorakhpur",
    "Aryan Vishwakarma portfolio",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Aryan Vishwakarma | AI, Mobile, Web & Software Expert",
    description:
      "2+ years of experience delivering AI automation, mobile apps, websites, custom software, data solutions & IT support to businesses globally.",
    url: "https://aryan-vishwakarma.vercel.app/about",
    siteName: "Aryan Vishwakarma",
    images: [{ url: "/images/profile/profile.jpeg", width: 1200, height: 630, alt: "About Aryan Vishwakarma" }],
    type: "profile",
  },
};

const about = () => {
  return (
    <div>
      <About />
    </div>
  )
}

export default about