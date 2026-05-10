import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yassa Nazeer — Flutter Developer & Data Scientist" },
      {
        name: "description",
        content:
          "Portfolio of Yassa Nazeer Gadelrabb — Flutter developer and data scientist building cross-platform mobile apps and production-grade ML models.",
      },
      { property: "og:title", content: "Yassa Nazeer — Flutter Developer & Data Scientist" },
      {
        property: "og:description",
        content:
          "Cross-platform mobile apps with Flutter and production-grade ML models. Selected projects, experience and contact.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
