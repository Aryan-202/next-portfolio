

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on automation, AI, and business process optimization by Aryan Vishwakarma.",
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