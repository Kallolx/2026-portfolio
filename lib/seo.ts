import type { Metadata } from "next";

export const SITE_URL = "https://kamrulhasan.site";
export const SITE_NAME = "Kallol Portfolio";
export const SITE_AUTHOR = "Kallol";
export const SITE_DESCRIPTION =
  "Software developer building websites, web applications, management systems, AI-powered products, and custom business solutions.";
export const DEFAULT_OG_IMAGE = "/images/og-banner.webp";

const BASE_KEYWORDS = [
  "Kallol",
  "Kamrul Hasan Kallol",
  "Softune",
  "Software Developer",
  "Full-stack Developer",
  "Next.js Developer",
  "React Developer",
  "TypeScript Developer",
  "Dhaka",
  "Bangladesh",
];

type BuildPageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
};

function toAbsoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

function withBrand(title: string) {
  return `${title} | ${SITE_AUTHOR}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
}: BuildPageMetadataOptions): Metadata {
  const absoluteImage = toAbsoluteUrl(ogImage);

  return {
    title,
    description,
    keywords: Array.from(new Set([...BASE_KEYWORDS, ...keywords])),
    authors: [{ name: SITE_AUTHOR }],
    creator: SITE_AUTHOR,
    publisher: SITE_AUTHOR,
    alternates: {
      canonical: toAbsoluteUrl(path),
    },
    openGraph: {
      type: ogType,
      locale: "en_US",
      url: toAbsoluteUrl(path),
      siteName: SITE_NAME,
      title: withBrand(title),
      description,
      images: [
        {
          url: absoluteImage,
          width: 1200,
          height: 630,
          alt: `${title} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: withBrand(title),
      description,
      images: [absoluteImage],
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
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
