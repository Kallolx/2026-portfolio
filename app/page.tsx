import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Bento } from "@/components/sections/Bento";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { buildPageMetadata } from "@/lib/seo";

export const generateMetadata = (): Metadata =>
  buildPageMetadata({
    title: "Software Developer & Founder of Softune",
    description:
      "Portfolio of Kallol, a software developer building websites, web applications, management systems, AI-powered products, and custom business solutions.",
    path: "/",
    keywords: ["portfolio", "software developer portfolio", "full-stack portfolio"],
  });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col bg-black">
        <Hero />
        <About />
        <Bento />
        <Experience />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
