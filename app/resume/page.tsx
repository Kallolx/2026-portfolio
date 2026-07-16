"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Download, MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SITE_AUTHOR, SITE_NAME, SITE_URL, buildBreadcrumbJsonLd } from "@/lib/seo";

export default function ResumePage() {
  const pageSchema = [
    buildBreadcrumbJsonLd([
      { name: "Home", url: SITE_URL },
      { name: "Resume", url: `${SITE_URL}/resume` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      name: "Resume & Credentials",
      url: `${SITE_URL}/resume`,
      description:
        "View and download the professional resume of Kallol, software developer and founder of Softune.",
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
      mainEntity: {
        "@type": "Person",
        name: SITE_AUTHOR,
        url: SITE_URL,
      },
    },
  ];

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-black text-white pt-40 pb-24 overflow-hidden relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />
        {/* Background Ambient Glows */}
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-[#5E2BE2]/10 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-[#86E49E]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* Header Section (Neo-Brutalist) */}
        <div className="max-w-6xl mx-auto px-4 md:px-12 flex flex-col items-center mb-16">
          <div className="flex items-center justify-center w-full gap-2 md:gap-4 mb-4 relative">
            {/* Left Line SVG */}
            <svg
              width="200"
              height="60"
              viewBox="0 0 1000 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-500 hidden lg:block shrink-0 opacity-30 translate-y-4"
            >
              <path
                d="M78.9 120.4C80.68 106.16 85.55 92.62 92 79.8C104.48 54.68 125.69 34.89 147.77 18.76L163.73 7C164.03 11.63 164.61 27.52 165.25 32.05C166.92 45.44 170.54 58.75 176.46 70.88C180.26 78.67 185.08 85.72 190.92 91.91L193 94.19C200.03 101.89 207.52 109.33 214.56 117.1C220.36 123.53 225.95 130.18 231.02 137.22C243.24 154.68 251.05 179.36 239.84 199.1C241.09 195.06 241.69 190.91 241.73 186.82C241.8 174.64 236.96 163.01 230.18 153.1C224.56 144.65 217.04 137.8 209.49 131.13C199.3 122.06 188.4 113.7 178.42 104.31C170.7 97.35 164.32 88.8 159.36 79.87C153.67 69.51 149.5 58.4 146.76 46.93C128 63.36 112.33 82.38 104 106.42C92.67 137.12 98.51 173.55 118.49 199.5C137.94 224.6 169.45 238.9 201.03 239.24C199.457 238.227 197.897 237.187 196.35 236.12C180.13 225.11 165.33 211.23 156.03 193.82C146.89 176.85 142.04 157.21 143.76 137.95C145.12 165.81 158.58 192.85 179.76 210.92C215.53 240.37 262.17 253.4 307.8 256.13C422.62 264.01 527.6 207.13 639.47 190.94C733.36 178.29 837.69 190 918.2 242.86C926.14 248.22 933.81 254.01 941.01 260.34C948.2 266.66 954.94 273.46 961 280.79C930.29 251.14 891.04 232.48 850.6 220.36C792.26 203.22 730.41 199.68 670.12 206.29C660.89 207.28 651.65 208.61 642.5 210.21C548.91 226.79 460.59 269.9 364.72 275.12C309.41 278.49 250.92 270.5 203.32 240.7C179.09 245.94 153.03 241.15 131.5 228.93C93.42 207.78 73.37 163.16 78.9 120.4Z"
                fill="currentColor"
              />
            </svg>

            <div className="flex flex-col items-center">
              <h1 className="font-agdasima text-6xl md:text-8xl font-bold uppercase tracking-tight mb-4 text-center">
                CURRICULUM VITAE
              </h1>
              <p className="font-afacad text-neutral-400 text-lg md:text-xl max-w-2xl text-center lowercase italic">
                A structured breakdown of my journey across development and
                strategy.
              </p>
            </div>

            {/* Right Line SVG (Mirrored) */}
            <svg
              width="200"
              height="60"
              viewBox="0 0 1000 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-500 hidden lg:block shrink-0 opacity-30 scale-x-[-1] translate-y-4"
            >
              <path
                d="M78.9 120.4C80.68 106.16 85.55 92.62 92 79.8C104.48 54.68 125.69 34.89 147.77 18.76L163.73 7C164.03 11.63 164.61 27.52 165.25 32.05C166.92 45.44 170.54 58.75 176.46 70.88C180.26 78.67 185.08 85.72 190.92 91.91L193 94.19C200.03 101.89 207.52 109.33 214.56 117.1C220.36 123.53 225.95 130.18 231.02 137.22C243.24 154.68 251.05 179.36 239.84 199.1C241.09 195.06 241.69 190.91 241.73 186.82C241.8 174.64 236.96 163.01 230.18 153.1C224.56 144.65 217.04 137.8 209.49 131.13C199.3 122.06 188.4 113.7 178.42 104.31C170.7 97.35 164.32 88.8 159.36 79.87C153.67 69.51 149.5 58.4 146.76 46.93C128 63.36 112.33 82.38 104 106.42C92.67 137.12 98.51 173.55 118.49 199.5C137.94 224.6 169.45 238.9 201.03 239.24C199.457 238.227 197.897 237.187 196.35 236.12C180.13 225.11 165.33 211.23 156.03 193.82C146.89 176.85 142.04 157.21 143.76 137.95C145.12 165.81 158.58 192.85 179.76 210.92C215.53 240.37 262.17 253.4 307.8 256.13C422.62 264.01 527.6 207.13 639.47 190.94C733.36 178.29 837.69 190 918.2 242.86C926.14 248.22 933.81 254.01 941.01 260.34C948.2 266.66 954.94 273.46 961 280.79C930.29 251.14 891.04 232.48 850.6 220.36C792.26 203.22 730.41 199.68 670.12 206.29C660.89 207.28 651.65 208.61 642.5 210.21C548.91 226.79 460.59 269.9 364.72 275.12C309.41 278.49 250.92 270.5 203.32 240.7C179.09 245.94 153.03 241.15 131.5 228.93C93.42 207.78 73.37 163.16 78.9 120.4Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* Action Bar */}
        <div className="max-w-4xl mx-auto px-4 w-full flex justify-center mb-16">
          {/* Premium Download Button (About Page Style) */}
          <Link
            href="/kamrul_hasan_cv.pdf"
            target="_blank"
            download
            className="hover:bg-white hover:text-black bg-[#0066FF] text-white font-agdasima font-bold text-2xl md:text-3xl px-12 py-4 rounded-none transition-transform active:translate-x-[6px] active:translate-y-[6px] shadow-[8px_8px_0px_0px_#02327A] flex items-center justify-center gap-2 uppercase tracking-wide"
          >
            <Download className="w-6 h-6" />
            FREE DOWNLOAD 😅
          </Link>
        </div>

        {/* Document Preview Area */}
        <section className="max-w-4xl mx-auto px-4 w-full flex flex-col items-center relative z-10 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[850px] aspect-[1/1.414] bg-white border-2 border-neutral-800 shadow-[25px_25px_50px_-12px_rgba(0,0,0,0.8)] rounded-xl overflow-hidden relative group"
          >
            {/* HTML LaTeX-Style Resume Preview */}
            <div className="w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-800 text-black">
              <ResumeHTMLView />
            </div>

            {/* Overlay for premium look */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

            {/* Hover Actions */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link
                href="/kamrul_hasan_cv.pdf"
                target="_blank"
                className="bg-black text-white p-3 rounded-full hover:bg-white hover:text-black transition-colors shadow-2xl flex items-center gap-2 font-agdasima uppercase tracking-widest text-sm"
              >
                <MousePointer2 className="w-4 h-4" /> Open Original PDF
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ResumeHTMLView() {
  return (
    <div className="w-full bg-white text-black p-6 sm:p-10 md:p-14 select-text font-serif text-left leading-normal text-[11px] sm:text-xs md:text-sm">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans tracking-tight text-neutral-900 mb-1">
          S.M. Kamrul Hasan Kallol
        </h1>
        <p className="text-[10px] sm:text-xs md:text-sm text-neutral-600 font-sans space-x-1">
          <span>Dhaka, Bangladesh</span>
          <span>|</span>
          <span>+880 1831 624571</span>
          <span>|</span>
          <a href="mailto:kallol.business.ds@gmail.com" className="underline hover:text-blue-600">kallol.business.ds@gmail.com</a>
        </p>
        <p className="text-[10px] sm:text-xs md:text-sm text-neutral-600 font-sans mt-0.5 space-x-1">
          <a href="https://kallol.me" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">kallol.me</a>
          <span>|</span>
          <a href="https://linkedin.com/in/kamrul-hasan-dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">linkedin.com/in/kamrul-hasan-dev</a>
          <span>|</span>
          <a href="https://github.com/kallolx" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">github.com/kallolx</a>
        </p>
      </div>

      {/* Summary */}
      <div className="mb-5">
        <h2 className="text-xs sm:text-sm md:text-md font-bold font-sans uppercase tracking-wider text-neutral-800 border-b border-neutral-300 pb-0.5 mb-1.5">
          Summary
        </h2>
        <p className="text-neutral-700 leading-relaxed">
          Full-stack developer with 5+ years of experience building high-performance web and mobile applications. Skilled in
          React, Next.js, Node.js, and React Native, with a focus on clean code, UI/UX excellence, and business-driven results.
          Passionate about solving real-world problems through technology.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mb-5">
        <h2 className="text-xs sm:text-sm md:text-md font-bold font-sans uppercase tracking-wider text-neutral-800 border-b border-neutral-300 pb-0.5 mb-1.5">
          Technical Skills
        </h2>
        <ul className="space-y-1 text-neutral-700 list-disc list-outside pl-4">
          <li>
            <span className="font-sans font-semibold">Languages & Frameworks:</span> JavaScript, TypeScript, Next.js, React.js, React Native, Flutter, Node.js, Express.js.
          </li>
          <li>
            <span className="font-sans font-semibold">Databases & State Mgmt:</span> MongoDB, PostgreSQL, MySQL, Redis, Firebase, Supabase, Redux Toolkit, Zustand.
          </li>
          <li>
            <span className="font-sans font-semibold">DevOps & Tools:</span> Docker, AWS (S3, EC2), GraphQL, Prisma, TailwindCSS, Git.
          </li>
        </ul>
      </div>

      {/* Experience */}
      <div className="mb-5">
        <h2 className="text-xs sm:text-sm md:text-md font-bold font-sans uppercase tracking-wider text-neutral-800 border-b border-neutral-300 pb-0.5 mb-2.5">
          Experience
        </h2>
        <div className="space-y-3.5">
          {/* Job 1 */}
          <div>
            <div className="flex justify-between items-baseline mb-0.5">
              <div>
                <span className="font-bold text-neutral-900">Lead Developer</span>
                <span className="text-neutral-600 italic text-[10px] sm:text-xs"> — Jamil Ifat Production</span>
              </div>
              <span className="text-[10px] sm:text-xs text-neutral-500 font-sans whitespace-nowrap">Remote, UK | Jan 2024 – Present</span>
            </div>
            <ul className="space-y-0.5 text-neutral-700 list-disc list-outside pl-4">
              <li>Architected a high-traffic restaurant reservation ecosystem, achieving sub-100ms latency for real-time data sync between web and mobile clients.</li>
              <li>Engineered a custom React Native app used by 50+ restaurant owners, increasing administrative efficiency by 30% through live analytics dashboards.</li>
              <li>Constructed a scalable Node.js/MongoDB backend capable of handling 500+ concurrent connections, ensuring 99.9% uptime for community interactions.</li>
              <li>Orchestrated automated deployment pipelines on AWS, reducing release cycles by 40% while maintaining strict security protocols.</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div>
            <div className="flex justify-between items-baseline mb-0.5">
              <div>
                <span className="font-bold text-neutral-900">Full Stack Web & Mobile App Developer</span>
                <span className="text-neutral-600 italic text-[10px] sm:text-xs"> — Webbyte Studios</span>
              </div>
              <span className="text-[10px] sm:text-xs text-neutral-500 font-sans whitespace-nowrap">Remote | 2023 – 2025</span>
            </div>
            <ul className="space-y-0.5 text-neutral-700 list-disc list-outside pl-4">
              <li>Delivered 30+ full-scale MERN projects and 10+ mobile apps, consistently meeting strict performance targets and driving a 20% increase in client retention.</li>
              <li>Directed development of 10+ cross-platform apps, cutting development time by 50% by implementing shared React Native & Flutter component libraries.</li>
              <li>Managed cloud infrastructure on VPS/AWS for international clients, ensuring zero downtime during high-traffic promotional events.</li>
            </ul>
          </div>

          {/* Job 3 */}
          <div>
            <div className="flex justify-between items-baseline mb-0.5">
              <div>
                <span className="font-bold text-neutral-900">Freelance Full Stack Developer</span>
                <span className="text-neutral-600 italic text-[10px] sm:text-xs"> — Independent Projects</span>
              </div>
              <span className="text-[10px] sm:text-xs text-neutral-500 font-sans whitespace-nowrap">Global & Local | 2020 – Present</span>
            </div>
            <ul className="space-y-0.5 text-neutral-700 list-disc list-outside pl-4">
              <li>Launched 50+ production-grade web solutions, optimizing page load speeds by 35% via Next.js server-side rendering and efficient caching.</li>
              <li>Designed and maintained mobile applications with active user bases, providing long-term support that reduced bug reports by 60% post-launch.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Projects */}
      <div className="mb-5">
        <h2 className="text-xs sm:text-sm md:text-md font-bold font-sans uppercase tracking-wider text-neutral-800 border-b border-neutral-300 pb-0.5 mb-2.5">
          Key Projects
        </h2>
        <div className="space-y-2.5">
          {/* Project 1 */}
          <div>
            <div className="flex justify-between items-baseline mb-0.5">
              <div>
                <span className="font-bold text-neutral-900">Aprtiv</span>
                <span className="text-neutral-500 text-[10px] sm:text-xs"> (Jamil Ifat Production) | Next.js, React Native, Node.js, MongoDB</span>
              </div>
              <a href="https://kallol.me" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs whitespace-nowrap">Live Link</a>
            </div>
            <ul className="space-y-0.5 text-neutral-700 list-disc list-outside pl-4">
              <li>A social web and mobile platform for exploring and reviewing local restaurants.</li>
              <li><span className="font-sans font-semibold">Highlights:</span> Location-based recommendations, social feed with media sharing, user authentication.</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div>
            <div className="flex justify-between items-baseline mb-0.5">
              <div>
                <span className="font-bold text-neutral-900">Music Distribution Dashboard</span>
                <span className="text-neutral-500 text-[10px] sm:text-xs"> | Next.js, Node.js, MongoDB, AWS S3</span>
              </div>
              <a href="https://kallol.me" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs whitespace-nowrap">Live Link</a>
            </div>
            <ul className="space-y-0.5 text-neutral-700 list-disc list-outside pl-4">
              <li>A creator-focused dashboard for uploading, managing, and monetizing music.</li>
              <li><span className="font-sans font-semibold">Highlights:</span> Track analytics, automated royalty reporting, secure AWS S3 storage.</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div>
            <div className="flex justify-between items-baseline mb-0.5">
              <div>
                <span className="font-bold text-neutral-900">Dubai Pest & Services Management</span>
                <span className="text-neutral-500 text-[10px] sm:text-xs"> | React, Node.js, MySQL, Stripe</span>
              </div>
              <a href="https://kallol.me" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs whitespace-nowrap">Live Link</a>
            </div>
            <ul className="space-y-0.5 text-neutral-700 list-disc list-outside pl-4">
              <li>A scheduling and management solution for businesses offering multiple on-demand services.</li>
              <li><span className="font-sans font-semibold">Highlights:</span> Real-time booking, automated reminders, role-based access for staff and clients.</li>
            </ul>
          </div>

          {/* Project 4 */}
          <div>
            <div className="flex justify-between items-baseline mb-0.5">
              <div>
                <span className="font-bold text-neutral-900">Webify - Multi-Tenant SaaS Platform</span>
                <span className="text-neutral-500 text-[10px] sm:text-xs"> | Microservices, Node.js, AI/LLM</span>
              </div>
              <a href="https://kallol.me" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs whitespace-nowrap">Live Link</a>
            </div>
            <ul className="space-y-0.5 text-neutral-700 list-disc list-outside pl-4">
              <li>A multi-tenant SaaS e-commerce platform supporting unlimited stores per tenant.</li>
              <li><span className="font-sans font-semibold">Highlights:</span> Isolated database schemas, AI-powered analytics, real-time inventory management.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-xs sm:text-sm md:text-md font-bold font-sans uppercase tracking-wider text-neutral-800 border-b border-neutral-300 pb-0.5 mb-1.5">
          Education
        </h2>
        <div className="flex justify-between items-baseline">
          <div>
            <h3 className="font-bold text-neutral-900">B.Sc in Computer Science and Engineering</h3>
            <p className="text-neutral-600 italic text-[10px] sm:text-xs">Bangladesh University of Business and Technology (BUBT)</p>
          </div>
          <span className="text-[10px] sm:text-xs text-neutral-500 font-sans whitespace-nowrap">2022 – 2026</span>
        </div>
      </div>
    </div>
  );
}
