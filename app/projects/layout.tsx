import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hall of Fame",
  description: "Explore my full collection of digital experiments and professional client work.",
  openGraph: {
    title: "Hall of Fame | Kallol",
    description: "Explore my full collection of digital experiments and professional client work.",
    url: "https://kamrulhasan.site/projects",
  },
  twitter: {
    title: "Hall of Fame | Kallol",
    description: "Explore my full collection of digital experiments and professional client work.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
