import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Let's Build Together",
  description:
    "Get in touch with Kallol for websites, web applications, management systems, and custom software development.",
  path: "/contact",
  keywords: ["contact Kallol", "hire software developer", "project inquiry"],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
