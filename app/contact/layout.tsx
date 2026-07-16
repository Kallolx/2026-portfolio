import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Let's Build Together",
  description: "Get in touch with Kallol for websites, web applications, management systems, and custom software development.",
  openGraph: {
    title: "Let's Build Together | Kallol",
    description: "Get in touch with Kallol for websites, web applications, management systems, and custom software development.",
    url: "https://kamrulhasan.site/contact",
  },
  twitter: {
    title: "Let's Build Together | Kallol",
    description: "Get in touch with Kallol for websites, web applications, management systems, and custom software development.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
