import Hero from "@/components/layouts/hero";
import About from "@/components/layouts/about";
import Projects from "@/components/layouts/projects";
import Pricing from "@/components/layouts/pricing";
import Contact from "@/components/layouts/contact";
import FeedbackPage from "./feedback/page";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Pricing />
      <FeedbackPage />
      <Contact />
    </main>
  );
}