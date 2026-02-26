import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | AI Automation, Mobile Apps & Business Tech Insights — Aryan Vishwakarma",
  description:
    "Read expert insights on AI automation, mobile app development, website development, custom software, data engineering & IT support by Aryan Vishwakarma — helping businesses scale smarter.",
  keywords: [
    "AI Automation Blog India",
    "n8n Tutorials",
    "Mobile App Development Blog",
    "Web Development Tips India",
    "Business Automation Insights",
    "Aryan Vishwakarma Blog",
    "Tech Blog India",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | AI, Mobile & Business Tech Insights — Aryan Vishwakarma",
    description:
      "Expert articles on automation, mobile apps, web dev & business technology by Aryan Vishwakarma.",
    url: "https://aryan-vishwakarma.vercel.app/blog",
    siteName: "Aryan Vishwakarma",
    images: [{ url: "/images/profile/profile.jpeg", width: 1200, height: 630, alt: "Aryan Vishwakarma Blog" }],
    type: "website",
  },
};

const BlogPage = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8">Blog</h1>
        <div className="w-24 h-1 bg-primary mb-6"></div>
        <p className="text-xl text-muted-foreground">
          Blog content coming soon...
        </p>
      </div>
    </div>
  )
}

export default BlogPage