"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MoveRight, Star, ExternalLink, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { SITE_AUTHOR, SITE_NAME, SITE_URL, buildBreadcrumbJsonLd } from "@/lib/seo";

interface SkillItem {
  name: string;
  icon: string;
  customColor?: string;
}

const row1Skills: SkillItem[] = [
  { name: "React", icon: "devicon:react" },
  { name: "Next.js", icon: "devicon:nextjs" },
  { name: "TypeScript", icon: "devicon:typescript" },
  { name: "JavaScript", icon: "devicon:javascript" },
  { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
  { name: "Node.js", icon: "devicon:nodejs" },
  { name: "Express.js", icon: "devicon:express" },
  { name: "Python", icon: "devicon:python" },
  { name: "FastAPI", icon: "devicon:fastapi" },
  { name: "Figma", icon: "devicon:figma" },
];

const row2Skills: SkillItem[] = [
  { name: "PostgreSQL", icon: "devicon:postgresql" },
  { name: "MongoDB", icon: "devicon:mongodb" },
  { name: "MySQL", icon: "devicon:mysql" },
  { name: "Prisma", icon: "devicon:prisma" },
  { name: "Docker", icon: "devicon:docker" },
  { name: "Git", icon: "devicon:git" },
  { name: "AWS", icon: "devicon:amazonwebservices" },
  { name: "Firebase", icon: "devicon:firebase" },
  { name: "With Others", icon: "mdi:dots-horizontal" },
];

const EXPERIENCES = [
  {
    icon: "/images/dcc.svg",
    titlePrefix: "Higher Secondary Certificate HSC at",
    titleBold: "Dhaka City College",
    date: "2017 - 2019",
    desc: "Completed Higher Secondary Certificate (HSC) in Science, building a strong foundation in physics, chemistry, and mathematics.",
    year: "2019",
  },
  {
    icon: "/images/freelancer.svg",
    titlePrefix: "Started journey",
    titleBold: "Freelancer.com",
    date: "2020 - 2021",
    desc: "Worked with clients from different countries, building websites, fixing existing projects, and learning how to communicate, deliver on time, and turn client ideas into real solutions.",
    year: "2021",
  },
    {
    icon: "/images/bubt.png",
    titlePrefix: "B.Sc in Computer Science at",
    titleBold: "Bangladesh University of Business and Technology",
    date: "2020 - 2024",
    desc: "Completed B.Sc. in Computer Science and Engineering (CSE), learning foundational concepts of software development, database systems, data structures, and algorithms.",
    year: "2024",
  },
  {
    icon: "/images/upwork.svg",
    titlePrefix: "Growing through",
    titleBold: "Upwork",
    date: "2022 - 2023",
    desc: "Completed projects for startups and businesses, focusing on modern websites, business applications, and long-term client relationships while improving quality and development speed.",
    year: "2023",
  },
  {
    icon: "/images/fiverr.svg",
    titlePrefix: "Also active on",
    titleBold: "Fiverr",
    date: "2022 - 2023",
    desc: "Delivered web development gigs to international clients, building a strong reputation for fast turnaround, clean code, and consistent communication across diverse project types.",
    year: "2023",
  },
  {
    icon: "/images/webbyte.svg",
    titlePrefix: "Lead Developer at",
    titleBold: "Webbyte Agency",
    date: "2023 - 2024",
    desc: "Worked with a talented team to build scalable web applications, improve user experiences, and deliver high-quality products for clients across different industries.",
    year: "2024",
  },
  {
    icon: "/images/wonder-ai.svg",
    titlePrefix: "Python Developer at",
    titleBold: "Wonder AI",
    date: "2025 - Present",
    desc: "Developed modern AI-powered platforms and web applications, turning complex ideas into simple, user-friendly products while working with the latest technologies.",
    year: "2026",
  },
  {
    icon: "/images/softune.svg",
    titlePrefix: "Founder of",
    titleBold: "Softune",
    date: "2025 - Present",
    desc: "Helping businesses build websites, management systems, and custom software that solve real problems. Leading projects from idea and design to development, deployment, and long-term support.",
    year: "Present",
  },
];

export default function AboutPage() {
  const pageSchema = [
    buildBreadcrumbJsonLd([
      { name: "Home", url: SITE_URL },
      { name: "About", url: `${SITE_URL}/about` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Behind the Code",
      url: `${SITE_URL}/about`,
      description:
        "A look at my journey from freelance projects to building complete digital products for businesses around the world.",
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
      <main className="w-full min-h-screen bg-black text-white pt-40 pb-24 overflow-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />
        {/* Header Section (Replicating Projects Page Vibe) */}
        <div className="max-w-6xl mx-auto px-4 md:px-12 flex flex-col items-center mb-8">
          <div className="flex items-center justify-center w-full gap-2 md:gap-4 mb-8 relative">
            {/* Left Line SVG */}
            <svg
              width="200"
              height="60"
              viewBox="0 0 1000 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-400 hidden lg:block shrink-0 opacity-40 translate-y-4"
            >
              <path
                d="M78.9 120.4C80.68 106.16 85.55 92.62 92 79.8C104.48 54.68 125.69 34.89 147.77 18.76L163.73 7C164.03 11.63 164.61 27.52 165.25 32.05C166.92 45.44 170.54 58.75 176.46 70.88C180.26 78.67 185.08 85.72 190.92 91.91L193 94.19C200.03 101.89 207.52 109.33 214.56 117.1C220.36 123.53 225.95 130.18 231.02 137.22C243.24 154.68 251.05 179.36 239.84 199.1C241.09 195.06 241.69 190.91 241.73 186.82C241.8 174.64 236.96 163.01 230.18 153.1C224.56 144.65 217.04 137.8 209.49 131.13C199.3 122.06 188.4 113.7 178.42 104.31C170.7 97.35 164.32 88.8 159.36 79.87C153.67 69.51 149.5 58.4 146.76 46.93C128 63.36 112.33 82.38 104 106.42C92.67 137.12 98.51 173.55 118.49 199.5C137.94 224.6 169.45 238.9 201.03 239.24C199.457 238.227 197.897 237.187 196.35 236.12C180.13 225.11 165.33 211.23 156.03 193.82C146.89 176.85 142.04 157.21 143.76 137.95C145.12 165.81 158.58 192.85 179.76 210.92C215.53 240.37 262.17 253.4 307.8 256.13C422.62 264.01 527.6 207.13 639.47 190.94C733.36 178.29 837.69 190 918.2 242.86C926.14 248.22 933.81 254.01 941.01 260.34C948.2 266.66 954.94 273.46 961 280.79C930.29 251.14 891.04 232.48 850.6 220.36C792.26 203.22 730.41 199.68 670.12 206.29C660.89 207.28 651.65 208.61 642.5 210.21C548.91 226.79 460.59 269.9 364.72 275.12C309.41 278.49 250.92 270.5 203.32 240.7C179.09 245.94 153.03 241.15 131.5 228.93C93.42 207.78 73.37 163.16 78.9 120.4Z"
                fill="currentColor"
              />
            </svg>

            <div className="flex flex-col items-center">
              <h1 className="font-agdasima text-6xl md:text-8xl font-bold uppercase tracking-tight mb-4 text-center">
                BEHIND THE CODE
              </h1>
              <p className="font-afacad text-neutral-400 text-lg md:text-2xl max-w-2xl text-center lowercase italic">
                A look at my journey from freelance projects to building
                complete digital products for businesses around the world.
              </p>

              {/* Overlapping Avatar Circles (Neo-Brutalist) */}
              <div className="flex items-center -space-x-2 mt-8">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-black bg-[#5E2BE2] shadow-[3px_3px_0px_rgba(0,0,0,1)] relative z-40 transition-transform hover:translate-y-[-4px] cursor-pointer flex items-center justify-center">
                  <div className="w-5 h-5 md:w-6 md:h-6 relative">
                    <Image
                      src="/images/e1.png"
                      alt="Experience item 1"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-black bg-[#FFBD2E] shadow-[3px_3px_0px_rgba(0,0,0,1)] relative z-30 transition-transform hover:translate-y-[-4px] cursor-pointer flex items-center justify-center">
                  <div className="w-5 h-5 md:w-6 md:h-6 relative">
                    <Image
                      src="/images/e2.png"
                      alt="Experience item 2"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-black bg-[#FF5F56] shadow-[3px_3px_0px_rgba(0,0,0,1)] relative z-20 transition-transform hover:translate-y-[-4px] cursor-pointer flex items-center justify-center">
                  <div className="w-5 h-5 md:w-6 md:h-6 relative">
                    <Image
                      src="/images/e3.png"
                      alt="Experience item 3"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Line SVG (Mirrored) */}
            <svg
              width="200"
              height="60"
              viewBox="0 0 1000 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-400 hidden lg:block shrink-0 opacity-40 scale-x-[-1] translate-y-4"
            >
              <path
                d="M78.9 120.4C80.68 106.16 85.55 92.62 92 79.8C104.48 54.68 125.69 34.89 147.77 18.76L163.73 7C164.03 11.63 164.61 27.52 165.25 32.05C166.92 45.44 170.54 58.75 176.46 70.88C180.26 78.67 185.08 85.72 190.92 91.91L193 94.19C200.03 101.89 207.52 109.33 214.56 117.1C220.36 123.53 225.95 130.18 231.02 137.22C243.24 154.68 251.05 179.36 239.84 199.1C241.09 195.06 241.69 190.91 241.73 186.82C241.8 174.64 236.96 163.01 230.18 153.1C224.56 144.65 217.04 137.8 209.49 131.13C199.3 122.06 188.4 113.7 178.42 104.31C170.7 97.35 164.32 88.8 159.36 79.87C153.67 69.51 149.5 58.4 146.76 46.93C128 63.36 112.33 82.38 104 106.42C92.67 137.12 98.51 173.55 118.49 199.5C137.94 224.6 169.45 238.9 201.03 239.24C199.457 238.227 197.897 237.187 196.35 236.12C180.13 225.11 165.33 211.23 156.03 193.82C146.89 176.85 142.04 157.21 143.76 137.95C145.12 165.81 158.58 192.85 179.76 210.92C215.53 240.37 262.17 253.4 307.8 256.13C422.62 264.01 527.6 207.13 639.47 190.94C733.36 178.29 837.69 190 918.2 242.86C926.14 248.22 933.81 254.01 941.01 260.34C948.2 266.66 954.94 273.46 961 280.79C930.29 251.14 891.04 232.48 850.6 220.36C792.26 203.22 730.41 199.68 670.12 206.29C660.89 207.28 651.65 208.61 642.5 210.21C548.91 226.79 460.59 269.9 364.72 275.12C309.41 278.49 250.92 270.5 203.32 240.7C179.09 245.94 153.03 241.15 131.5 228.93C93.42 207.78 73.37 163.16 78.9 120.4Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* Bio Split Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          {/* Left Column - Large Image Container */}
          <div className="md:col-span-5 h-[400px] md:h-[500px] border-[4px] border-neutral-800 bg-[#121212] rounded-3xl relative p-3 shadow-[15px_15px_0px_0px_rgba(255,255,255,0.05)] transform hover:translate-y-[-5px] transition-transform duration-500 group overflow-hidden md:overflow-visible">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <Image
                src="/images/pro.png"
                alt="Kallol - Software Developer and Founder of Softune"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Absolute positioning tags for brutalist flair */}
            <div className="absolute top-8 left-2 md:left-[-20px] bg-[#86E49E] text-black border-2 border-black font-agdasima text-lg px-4 py-1 uppercase translate-rotate-[15deg] font-bold shadow-[2px_2px_0_0_#000] z-10">
              EST. 2020
            </div>
            <div className="absolute bottom-8 right-2 md:right-[-10px] bg-[#5E2BE2] text-white border-2 border-black font-afacad font-bold text-sm px-4 py-2 uppercase shadow-[2px_2px_0_0_#000] z-10">
              DHAKA, BANGLADESH
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="md:col-span-7 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h2 className="font-agdasima text-6xl md:text-7xl font-bold uppercase mb-6 tracking-wide text-white">
              Hi, I'm <span className="text-[#86E49E]">Kallol</span>
            </h2>

            <div className="flex gap-2 md:gap-4 mb-8 flex-wrap justify-center md:justify-start">
              <span className="px-4 py-1 rounded bg-[#2A2A2A] text-neutral-300 font-afacad text-sm md:text-base">
                Software Developer
              </span>
              <span className="px-4 py-1 rounded bg-[#2A2A2A] text-neutral-300 font-afacad text-sm md:text-base">
                Founder of Softune
              </span>
            </div>

            <div className="font-afacad text-lg md:text-xl text-neutral-400 space-y-6 leading-relaxed mb-10">
              <p>
                I am a software developer with more than 3+ years of
                experience building useful digital products for businesses,
                startups, agencies, and international clients.
              </p>
              <p>
                My professional journey started through freelance platforms,
                where I worked directly with clients, understood their problems,
                managed projects, and delivered websites and custom solutions.
                Over time, I moved into agency work, team leadership, backend
                development, AI products, and complete business systems.
              </p>
              <p>
                So far, I have worked on more than 120+ projects for over 40
                clients, including more than 10 international clients. Today, I
                also lead Softune, where I help businesses take ideas from
                planning and design to development, launch, and long-term
                support.
              </p>
            </div>

            <Link
              href="/resume"
              className="w-fit flex items-center justify-center gap-2 border-[3px] border-white text-black bg-white px-8 py-4 mx-auto md:mx-0 font-agdasima text-2xl font-bold uppercase transition-all duration-300 hover:bg-transparent hover:text-white group relative overflow-hidden shadow-[4px_4px_0_0_#5E2BE2]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download CV{" "}
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#5E2BE2] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
            </Link>
          </div>
        </section>

        {/* Divider SVG */}
        <div className="w-full flex justify-center mb-16 -mt-12 opacity-20">
          <svg
            width="400"
            height="20"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="10"
              x2="100"
              y2="10"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        {/* Education & Experience Track */}
        <section className="max-w-4xl mx-auto px-4 md:px-12 mb-32">
          <h2 className="font-agdasima text-5xl md:text-6xl text-white font-bold uppercase text-center mb-16">
            The Timeline
          </h2>

          <div className="relative border-l-2 border-neutral-800 pl-8 space-y-16">
            {EXPERIENCES.map((exp, index) => {
              const dotColors = [
                "bg-[#86E49E]",
                "bg-[#FFBD2E]",
                "bg-[#FF5F56]",
                "bg-[#5E2BE2]",
                "bg-[#0066FF]",
              ];
              const dotColor = dotColors[index % dotColors.length];

              return (
                <div key={index} className="relative group">
                  <div
                    className={`absolute w-4 h-4 rounded-full ${dotColor} border-4 border-black -left-[41px] top-2 transition-transform group-hover:scale-150`}
                  ></div>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                    <div className="md:w-1/4 pt-1">
                      <span className="font-afacad font-bold text-neutral-300 text-xl">
                        {exp.date}
                      </span>
                    </div>
                    <div className="md:w-3/4 bg-[#121212] border-2 border-neutral-800 p-6 rounded-2xl group-hover:border-neutral-600 transition-colors shadow-lg">
                      <div className="flex items-center gap-3 mb-2">
                        {exp.icon && (
                          <div className="w-6 h-6 shrink-0 relative overflow-hidden">
                            <Image
                              src={exp.icon}
                              alt={exp.titleBold}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <h3 className="font-agdasima text-3xl md:text-4xl font-bold text-white leading-none">
                          {exp.titleBold}
                        </h3>
                      </div>
                      <h4 className="font-afacad text-lg text-neutral-400 mb-4">
                        {exp.titlePrefix}
                      </h4>
                      <p className="font-afacad text-neutral-500 leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Divider SVG */}
        <div className="w-full flex justify-center mb-32 opacity-20">
          <svg
            width="400"
            height="20"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="10"
              x2="100"
              y2="10"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        {/* Skills Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-12 mb-32 overflow-hidden w-full">
          <h2 className="font-agdasima text-5xl md:text-6xl text-white font-bold uppercase text-center mb-16">
            Technical Arsenal
          </h2>

          <div className="flex flex-col gap-6 w-full">
            {/* Row 1 - Scrolling Left */}
            <div className="w-full overflow-hidden py-2 mask-fade-edges">
              <motion.div
                className="flex gap-4 w-max"
                animate={{ x: ["0%", "-25%"] }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {[...Array(4)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-4">
                    {row1Skills.map((skill, i) => (
                      <div
                        key={`${setIndex}-${i}`}
                        title={skill.name}
                        aria-label={skill.name}
                        className="w-20 h-20 bg-[#121212] border-2 border-neutral-800 rounded-2xl flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-[#1A1A1A] hover:border-neutral-700 transition-all duration-300 shrink-0"
                      >
                        <Icon
                          icon={skill.icon}
                          className={`w-10 h-10 ${skill.customColor || ""}`}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2 - Scrolling Right */}
            <div className="w-full overflow-hidden py-2 mask-fade-edges">
              <motion.div
                className="flex gap-4 w-max"
                animate={{ x: ["-25%", "0%"] }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {[...Array(4)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-4">
                    {row2Skills.map((skill, i) => (
                      <div
                        key={`${setIndex}-${i}`}
                        title={skill.name}
                        aria-label={skill.name}
                        className="w-20 h-20 bg-[#121212] border-2 border-neutral-800 rounded-2xl flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-[#1A1A1A] hover:border-neutral-700 transition-all duration-300 shrink-0"
                      >
                        <Icon
                          icon={skill.icon}
                          className={`w-10 h-10 ${skill.customColor || ""}`}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Divider SVG */}
        <div className="w-full flex justify-center mb-32 opacity-20">
          <svg
            width="400"
            height="20"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="10"
              x2="100"
              y2="10"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        {/* Gallery / Persona Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-12 mb-16">
          <h2 className="font-agdasima text-5xl md:text-6xl text-white font-bold uppercase mb-12">
            The Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            
            {/* Gallery Item 1 (Tall) */}
            <div className="col-span-2 row-span-2 h-[400px] md:h-[500px] border-2 border-neutral-800 bg-[#121212] rounded-3xl p-2 group hover:border-[#5E2BE2] transition-colors cursor-pointer relative overflow-hidden">
              <div className="w-full h-full rounded-2xl flex flex-col justify-end p-6 border border-neutral-800 group-hover:border-[#5E2BE2] overflow-hidden relative">
                <Image
                  src="/images/digital.webp"
                  alt="Building Digital Products"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105 z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-10" />
                <h3 className="font-agdasima text-3xl font-bold text-white relative z-20 transition-colors group-hover:text-[#5E2BE2]">Building Digital Products</h3>
                <p className="font-afacad text-neutral-400 relative z-20">Dhaka, 2020</p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="col-span-2 md:col-span-1 h-[200px] md:h-[240px] border-2 border-neutral-800 bg-[#121212] rounded-3xl p-2 group hover:border-[#86E49E] transition-colors cursor-pointer relative overflow-hidden">
              <div className="w-full h-full rounded-2xl flex flex-col justify-end p-4 border border-neutral-800 group-hover:border-[#86E49E] overflow-hidden relative">
                <Image
                  src="/images/workspace.webp"
                  alt="My Workspace"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105 z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-10" />
                <h3 className="font-agdasima text-2xl font-bold text-white relative z-20 transition-colors group-hover:text-[#86E49E]">My Workspace</h3>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="col-span-2 md:col-span-1 h-[200px] md:h-[240px] border-2 border-neutral-800 bg-[#121212] rounded-3xl p-2 group hover:border-[#FFBD2E] transition-colors cursor-pointer relative overflow-hidden">
              <div className="w-full h-full rounded-2xl flex flex-col justify-end p-4 border border-neutral-800 group-hover:border-[#FFBD2E] overflow-hidden relative">
                <Image
                  src="/images/planning.webp"
                  alt="Project Planning"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105 z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-10" />
                <h3 className="font-agdasima text-2xl font-bold text-white relative z-20 transition-colors group-hover:text-[#FFBD2E]">Project Planning</h3>
              </div>
            </div>

            {/* Gallery Item 4 (Wide) */}
            <div className="col-span-2 bg-[#121212] border-2 border-neutral-800 h-[200px] md:h-[236px] rounded-3xl p-2 group hover:border-[#FF5F56] transition-colors cursor-pointer relative overflow-hidden">
              <div className="w-full h-full rounded-2xl flex flex-col justify-end p-4 lg:p-6 border border-neutral-800 group-hover:border-[#FF5F56] overflow-hidden relative">
                <Image
                  src="/images/softune.webp"
                  alt="Working with Softune"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105 z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-10" />
                <h3 className="font-agdasima text-2xl md:text-3xl font-bold text-white relative z-20 transition-colors group-hover:text-[#FF5F56]">Working with Softune</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
