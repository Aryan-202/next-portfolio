import Hero from "@/components/layouts/hero";
import About from "@/components/layouts/about";
import Projects from "@/components/layouts/projects";
import Pricing from "@/components/layouts/pricing";
import Contact from "@/components/layouts/contact";
import FeedbackPage from "./feedback/page";
import { Metadata } from "next";

const BASE_URL = "https://aryan-vishwakarma.vercel.app";

export const metadata: Metadata = {
  title: {
    absolute:
      "Aryan Vishwakarma | AI Automation, Mobile Apps, Web & Software Development",
  },
  description:
    "Aryan Vishwakarma offers 6 expert tech services: AI Automation, Mobile App Development, Website Development, Custom Software, Data Handling & IT Support. Based in Gorakhpur, India — serving clients globally.",
  keywords: [
    "Aryan Vishwakarma",
    "AI Automation Engineer India",
    "Mobile App Developer",
    "Website Developer India",
    "Custom Software Developer",
    "Data Engineering Services",
    "IT Support India",
    "Freelancer Gorakhpur",
    "n8n Specialist",
    "Python Developer India",
    "Full Stack Developer India",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aryan Vishwakarma | 6 Expert Tech Services",
    description:
      "AI Automation · Mobile Apps · Website Dev · Custom Software · Data Handling · IT Support. Helping businesses scale smarter — India & globally.",
    url: BASE_URL,
    siteName: "Aryan Vishwakarma",
    images: [
      {
        url: "/images/profile/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Aryan Vishwakarma — AI, Mobile, Web & Software Expert",
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
      "6 expert tech services under one roof. Helping businesses automate, build & scale.",
    creator: "@AryanxSenpai",
    images: ["/images/profile/profile.jpeg"],
  },
};

// Home page LocalBusiness structured data
const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${BASE_URL}/#homepage`,
  name: "Aryan Vishwakarma — Portfolio",
  description:
    "Official portfolio of Aryan Vishwakarma offering AI Automation, Mobile App Development, Website Development, Custom Software, Data Handling & IT Support.",
  url: BASE_URL,
  mainEntity: { "@id": `${BASE_URL}/#person` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Pricing />
        <FeedbackPage />
        <Contact />
      </main>
    </>
  );
}