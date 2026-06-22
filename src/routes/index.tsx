import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { PageLoader } from "@/components/portfolio/PageLoader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmet Asllanaj — CS Graduate & Digital Marketing" },
      {
        name: "description",
        content:
          "Ahmet Asllanaj — Computer Science graduate finishing an MSc in Marketing Management, building brand and digital marketing work. Open to marketing, support, and entry-level roles.",
      },
      { property: "og:title", content: "Ahmet Asllanaj — CS Graduate & Digital Marketing" },
      {
        property: "og:description",
        content:
          "Computer Science graduate finishing an MSc in Marketing Management, building brand and digital marketing work.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ahmet Asllanaj",
          jobTitle: "Digital Marketing",
          description:
            "Computer Science graduate finishing an MSc in Marketing Management, building brand and digital marketing work.",
          alumniOf: [
            { "@type": "CollegeOrUniversity", name: "Computer Science (BSc)" },
            { "@type": "CollegeOrUniversity", name: "Marketing Management (MSc)" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <PageLoader />
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
