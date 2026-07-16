import {
  MAIN_PROJECTS,
  ARCHIVE_PROJECTS,
  Project,
  ProjectFeature,
} from "@/data/projects";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, ExternalLink, Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TechIcon } from "@/components/ui/TechIcon";
import type { Metadata } from "next";
import {
  buildBreadcrumbJsonLd,
  SITE_AUTHOR,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BASE_URL = "https://kamrulhasan.site";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const allProjects = [...MAIN_PROJECTS, ...ARCHIVE_PROJECTS];
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found | Kallol" };
  }

  const url = `${BASE_URL}/projects/${slug}`;
  const ogImage = project.bannerImage || project.heroImage || "/images/og-banner.webp";
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`;

  return {
    title: `${project.title} Case Study`,
    description: project.description,
    keywords: [
      project.title,
      "Kallol",
      "Kamrul Hasan",
      "Softune",
      "Case Study",
      ...project.techStack,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: `${project.title} Case Study | Kallol`,
      description: project.description,
      siteName: SITE_NAME,
      authors: [SITE_AUTHOR],
      tags: [project.title, ...project.techStack.slice(0, 6)],
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study | Kallol`,
      description: project.description,
      images: [ogImageUrl],
      creator: "@khxKallol",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  const allProjects = [...MAIN_PROJECTS, ...ARCHIVE_PROJECTS];
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const allProjects = [
    ...MAIN_PROJECTS,
    ...ARCHIVE_PROJECTS,
  ] as Partial<Project>[];
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-black text-white pt-32 pb-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              buildBreadcrumbJsonLd([
                { name: "Home", url: SITE_URL },
                { name: "Projects", url: `${SITE_URL}/projects` },
                {
                  name: project.title || "Project",
                  url: `${SITE_URL}/projects/${project.slug}`,
                },
              ]),
              {
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                name: project.title,
                description: project.description,
                url: `${SITE_URL}/projects/${project.slug}`,
                image: [
                  project.bannerImage ||
                    project.heroImage ||
                    `${SITE_URL}/images/og-banner.webp`,
                ],
                author: {
                  "@type": "Person",
                  name: SITE_AUTHOR,
                },
                creator: {
                  "@type": "Person",
                  name: SITE_AUTHOR,
                },
                inLanguage: "en",
                about: project.techStack,
              },
            ]),
          }}
        />
        <div className="max-w-6xl mx-auto px-4 md:px-12 flex flex-col items-center">
          {/* Top Back Link */}
          <div className="w-full mb-12">
            <Link
              href={`/projects#${project.slug}`}
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white font-afacad tracking-wide group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to all projects
            </Link>
          </div>

          {/* Hero Section */}
          <div className="w-full flex flex-col gap-10 mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full">
              <h1 className="font-agdasima text-6xl md:text-8xl lg:text-[120px] leading-[0.85] font-bold uppercase tracking-tight">
                {project.title}
              </h1>

              <div className="flex gap-4 mb-2 md:mb-4 shrink-0">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#5E2BE2] hover:bg-[#7245ED] text-white font-bold font-afacad transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Preview
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-800 bg-[#121212] hover:border-white transition-all hover:scale-105 active:scale-95 group"
                    title="View Source on GitHub"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 group-hover:text-white text-neutral-400"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                )}
                {!project.liveUrl && !project.githubUrl && (
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#5E2BE2] hover:bg-[#7245ED] text-white font-bold font-afacad transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20"
                  >
                    Contact
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Main Hero Image */}
          <div className="w-full aspect-video bg-[#1A1A1A] border border-neutral-800 rounded-2xl mb-24 overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)] group/banner">
            {project.bannerImage ? (
              <Image
                src={project.bannerImage}
                alt={`${project.title} Banner`}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-afacad text-2xl border-4 border-dashed border-neutral-800 m-8 rounded-xl">
                [ High Fidelity Preview Image Space ]
              </div>
            )}
          </div>

          {/* Details Split Layout */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
            {/* Left Col - Overview & Challenge */}
            <div className="md:col-span-8 flex flex-col gap-16">
              <section>
                <h2 className="font-agdasima text-3xl md:text-5xl border-b border-neutral-800 pb-4 mb-6 text-neutral-300">
                  THE OVERVIEW
                </h2>
                <p className="font-afacad text-lg md:text-xl text-neutral-400 leading-relaxed">
                  {project.overview || "In-depth overview coming soon."}
                </p>
              </section>

              {/* Challenges Section */}
              <section>
                <h2 className="font-agdasima text-3xl md:text-5xl border-b border-neutral-800 pb-4 mb-6 text-neutral-300">
                  THE CHALLENGE
                </h2>
                <p className="font-afacad text-lg md:text-xl text-neutral-400 leading-relaxed">
                  {project.challenges || "Details on routing, performance, and UI construction coming soon."}
                </p>
              </section>

              {/* Achievements Section */}
              {project.achievements && (
                <section>
                  <h2 className="font-agdasima text-3xl md:text-5xl border-b border-neutral-800 pb-4 mb-6 text-neutral-300 uppercase">
                    ACHIEVEMENTS
                  </h2>
                  <p className="font-afacad text-lg md:text-xl text-neutral-400 leading-relaxed">
                    {project.achievements}
                  </p>
                </section>
              )}

              {/* Optional Code Snippet */}
              {project.codeSnippet && (
                <section>
                  <div className="w-full bg-[#111] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
                    <div className="flex items-center px-4 py-3 bg-[#1A1A1A] border-b border-neutral-800 gap-2">
                      <Terminal className="w-4 h-4 text-neutral-500" />
                      <span className="font-mono text-xs text-neutral-500">
                        core_logic.ts
                      </span>
                    </div>
                    <div className="p-6 overflow-x-auto">
                      <pre className="font-mono text-sm text-[#86E49E] leading-loose">
                        <code>{project.codeSnippet}</code>
                      </pre>
                    </div>
                  </div>
                </section>
              )}
            </div>

            {/* Right Col - Meta Details */}
            <div className="md:col-span-4 flex flex-col gap-12">
              <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-8">
                <h3 className="font-agdasima text-2xl text-white mb-6">
                  TECH STACK
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack?.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded border border-neutral-800 bg-black text-neutral-300 font-afacad text-sm flex items-center gap-2"
                    >
                      <TechIcon
                        name={tech}
                        className="w-4 h-4 text-neutral-400"
                      />
                      {tech}
                    </span>
                  )) || <span className="text-neutral-500">N/A</span>}
                </div>
              </div>

              <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-8">
                <h3 className="font-agdasima text-2xl text-white mb-6">
                  METADATA
                </h3>
                <ul className="flex flex-col gap-4 font-afacad text-lg">
                  <li className="flex justify-between border-b border-neutral-800 pb-2">
                    <span className="text-neutral-500">Role</span>
                    <span className="text-white">Lead Developer</span>
                  </li>
                  <li className="flex justify-between border-b border-neutral-800 pb-2">
                    <span className="text-neutral-500">Year</span>
                    <span className="text-white">{project.year}</span>
                  </li>
                  <li className="flex justify-between border-b border-neutral-800 pb-2">
                    <span className="text-neutral-500">Platform</span>
                    <span className="text-white">Web Platform</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Features Grid if available */}
          {"features" in project && project.features && (
            <div className="w-full pt-16 border-t border-neutral-900">
              <h2 className="font-agdasima text-4xl md:text-6xl mb-12 text-center text-white">
                CORE FEATURES
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-4xl mx-auto">
                {project.features.map((f: ProjectFeature, i: number) => (
                  <div
                    key={i}
                    className="flex flex-col gap-4 bg-[#121212] p-8 border border-neutral-800 rounded-2xl"
                  >
                    <div className="text-5xl">{f.icon}</div>
                    <h4 className="font-bold text-[#86E49E] text-2xl font-agdasima">
                      {f.title}
                    </h4>
                    <p className="font-afacad text-neutral-400 text-lg leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}


