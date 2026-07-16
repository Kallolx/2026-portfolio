import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Behind the Code",
  description:
    "A look at my journey from freelance projects to building complete digital products for businesses around the world.",
  path: "/about",
  keywords: ["about Kallol", "freelance journey", "software developer story"],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
