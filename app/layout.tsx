import type { Metadata } from "next";
import { Agdasima, Afacad, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { BottomBlur } from "@/components/layout/BottomBlur";
import {
  DEFAULT_OG_IMAGE,
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kallol | Software Developer & Founder of Softune",
    template: "%s | Kallol",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  category: "portfolio",
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
  creator: SITE_AUTHOR,
  publisher: SITE_AUTHOR,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Kallol | Software Developer & Founder of Softune",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Kallol Portfolio Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kallol | Software Developer & Founder of Softune",
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
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
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome", url: "/favicon/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/favicon/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: SITE_AUTHOR,
      alternateName: "Kamrul Hasan Kallol",
      url: SITE_URL,
      image: `${SITE_URL}/images/pro.png`,
      sameAs: [
        "https://www.facebook.com/developer.kamrulhasan/",
        "https://x.com/khxKallol",
        "https://github.com/Kallolx",
        "https://www.linkedin.com/in/kamrul-hasan-dev/",
      ],
      jobTitle: "Software Developer",
      worksFor: {
        "@type": "Organization",
        name: "Softune",
        url: SITE_URL,
      },
      description: SITE_DESCRIPTION,
      knowsAbout: [
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
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
      publisher: {
        "@type": "Person",
        name: SITE_AUTHOR,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Softune",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      sameAs: [
        "https://www.facebook.com/developer.kamrulhasan/",
        "https://x.com/khxKallol",
        "https://github.com/Kallolx",
        "https://www.linkedin.com/in/kamrul-hasan-dev/",
      ],
    },
  ];

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", agdasima.variable, afacad.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="bg-black text-white min-h-full flex flex-col font-afacad">
        {jsonLd.map((schema) => (
          <script
            key={schema["@type"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
        <BottomBlur />
      </body>
    </html>
  );
}
