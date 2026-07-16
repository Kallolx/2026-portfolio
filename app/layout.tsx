import type { Metadata } from "next";
import { Agdasima, Afacad, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { BottomBlur } from "@/components/layout/BottomBlur";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const agdasima = Agdasima({
  variable: "--font-agdasima",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kamrulhasan.site"),
  title: {
    default: "Kallol | Software Developer & Founder of Softune",
    template: "%s | Kallol",
  },
  description: "Software developer with 5+ years of experience building websites, web applications, management systems, AI-powered products, and custom business solutions.",
  keywords: [
    "Kallol",
    "Kamrul Hasan Kallol",
    "Softune",
    "Software Developer",
    "Full-stack Developer",
    "Dhaka",
    "Bangladesh",
    "Next.js Developer",
    "React Developer",
    "AI Products",
    "Web Application Developer",
    "Custom Business Software",
  ],
  authors: [{ name: "Kallol" }],
  creator: "Kallol",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kamrulhasan.site",
    siteName: "Kallol Portfolio",
    title: "Kallol | Software Developer & Founder of Softune",
    description: "Software developer with 5+ years of experience building websites, web applications, management systems, AI-powered products, and custom business solutions.",
    images: [
      {
        url: "/images/og-banner.webp",
        width: 1200,
        height: 630,
        alt: "Kallol Portfolio Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kallol | Software Developer & Founder of Softune",
    description: "Software developer with 5+ years of experience building websites, web applications, management systems, AI-powered products, and custom business solutions.",
    images: ["/images/og-banner.webp"],
    creator: "@khxKallol",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kallol",
    "alternateName": "Kamrul Hasan Kallol",
    "url": "https://kamrulhasan.site",
    "image": "https://kamrulhasan.site/images/pro.png",
    "sameAs": [
      "https://www.facebook.com/developer.kamrulhasan/",
      "https://x.com/khxKallol",
      "https://github.com/Kallolx",
      "https://www.linkedin.com/in/kamrul-hasan-dev/",
    ],
    "jobTitle": "Software Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Softune",
      "url": "https://kamrulhasan.site",
    },
    "description": "Software developer with 5+ years of experience building websites, web applications, management systems, AI-powered products, and custom business solutions.",
    "knowsAbout": [
      "Software Engineering",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "AWS",
      "Product Design",
    ],
  };

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", agdasima.variable, afacad.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="bg-black text-white min-h-full flex flex-col font-afacad">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <BottomBlur />
      </body>
    </html>
  );
}
