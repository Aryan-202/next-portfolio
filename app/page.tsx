import Hero from "@/components/layouts/hero";
import About from "@/components/layouts/about";
import Projects from "@/components/layouts/projects";
import Contact from "@/components/layouts/contact";
import FeedbackPage from "./feedback/page";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <FeedbackPage />
      <Contact />
    </main>
  );
}