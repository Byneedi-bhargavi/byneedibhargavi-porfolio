import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { FloatingSocials } from "@/components/FloatingSocials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Byneedi Bhargavi — AI & ML Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Byneedi Bhargavi — AIML engineering student passionate about Machine Learning, data-driven solutions, and intelligent application development.",
      },
      { property: "og:title", content: "Byneedi Bhargavi — AI & ML Engineer" },
      {
        property: "og:description",
        content:
          "AIML student & ML developer building predictive models and modern web applications.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <FloatingSocials />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
