import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Resume & Credentials",
  description:
    "View and download the professional resume of Kallol, software developer and founder of Softune.",
  path: "/resume",
  keywords: ["resume", "cv", "software developer resume"],
});

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
