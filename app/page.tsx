import Hero from "@/components/layouts/hero";
import About from "@/components/layouts/about";
import Projects from "@/components/layouts/projects";
import Contact from "@/components/layouts/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}