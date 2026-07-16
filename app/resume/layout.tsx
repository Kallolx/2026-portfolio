import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume & Credentials",
  description: "View and download the professional resume of Kallol, Software Developer and Founder of Softune.",
  openGraph: {
    title: "Resume & Credentials | Kallol",
    description: "View and download the professional resume of Kallol, Software Developer and Founder of Softune.",
    url: "https://kamrulhasan.site/resume",
  },
  twitter: {
    title: "Resume & Credentials | Kallol",
    description: "View and download the professional resume of Kallol, Software Developer and Founder of Softune.",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
