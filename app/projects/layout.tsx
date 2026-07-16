import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Hall of Fame",
  description:
    "Explore my full collection of digital experiments, featured case studies, and professional client work.",
  path: "/projects",
  keywords: [
    "portfolio projects",
    "case studies",
    "featured work",
    "client projects",
  ],
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
