import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Behind the Code",
  description: "A look at my journey from freelance projects to building complete digital products for businesses around the world.",
  openGraph: {
    title: "Behind the Code | Kallol",
    description: "A look at my journey from freelance projects to building complete digital products for businesses around the world.",
    url: "https://kamrulhasan.site/about",
  },
  twitter: {
    title: "Behind the Code | Kallol",
    description: "A look at my journey from freelance projects to building complete digital products for businesses around the world.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
