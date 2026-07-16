"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const techStack = [
  { name: "Next.js", icon: "devicon:nextjs" },
  { name: "React", icon: "devicon:react" },
  { name: "TypeScript", icon: "devicon:typescript" },
  { name: "JavaScript", icon: "devicon:javascript" },
  { name: "Python", icon: "devicon:python" },
  { name: "Node.js", icon: "devicon:nodejs" },
  { name: "Express.js", icon: "devicon:express" },
  { name: "FastAPI", icon: "devicon:fastapi" },
  { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
  { name: "HTML5", icon: "devicon:html5" },
  { name: "CSS3", icon: "devicon:css3" },
  { name: "PostgreSQL", icon: "devicon:postgresql" },
  { name: "MongoDB", icon: "devicon:mongodb" },
  { name: "MySQL", icon: "devicon:mysql" },
  { name: "Prisma", icon: "devicon:prisma" },
  { name: "Docker", icon: "devicon:docker" },
  { name: "Git", icon: "devicon:git" },
  { name: "GitHub", icon: "devicon:github" },
  { name: "AWS", icon: "devicon:amazonwebservices" },
  { name: "Firebase", icon: "devicon:firebase" },
  { name: "Linux", icon: "devicon:linux" },
  { name: "Figma", icon: "devicon:figma" },
  { name: "Vercel", icon: "devicon:vercel" },
  { name: "OpenAI", icon: "simple-icons:openai" },
];

export function Bento() {
  return (
    <section className="relative w-full bg-black text-white pt-28 pb-12 min-h-[50vh] flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12">
        {/* Bento Grid Container */}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {/* Left Column - Image Box */}
          <div className="w-full lg:w-[32%] bg-[#131313] border border-neutral-800 rounded-2xl p-2.5 flex flex-col relative overflow-hidden">
            <div className="w-full h-[350px] lg:h-auto lg:flex-1 relative rounded-xl overflow-hidden">
              {/* Replace with your image eventually */}
              <div className="absolute inset-0 bg-neutral-800" />
              <Image
                src="/images/kallol.webp"
                alt="Profile photo"
                fill
                sizes="(max-w-768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-center py-3 px-4">
              <div className="relative h-6 w-[80%]">
                <Image
                  src="/proff.svg"
                  alt="Proof that I am not AI"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Columns Container */}
          <div className="w-full lg:w-[68%] flex flex-col gap-2">
            {/* Top Row */}
            <div className="flex flex-col md:flex-row gap-2">
              {/* Middle Column (Role, Socials, Location) */}
              <div className="w-full md:w-[50%] flex flex-col gap-2">
                {/* Role Box */}
                <div className="bg-[#131313] border border-neutral-800 rounded-2xl p-4 flex flex-col justify-center">
                  <span className="text-neutral-500 font-afacad text-xs mb-1 uppercase tracking-wider">
                    my role
                  </span>
                  <h3 className="text-white font-agdasima text-2xl md:text-3xl tracking-wide">
                    Ld. Software Developer
                  </h3>
                </div>

                {/* Socials Row */}
                <div className="flex gap-2 h-[60px] md:h-[70px]">
                  <a
                    href="https://www.facebook.com/developer.kamrulhasan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 bg-[#131313] border border-neutral-800 rounded-xl flex items-center justify-center hover:bg-neutral-800 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 md:w-6 md:h-6 text-neutral-400 group-hover:text-white transition-colors"
                    >
                      <path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073c0-6.627,5.373-12,12-12S24,5.445,24,12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/khxKallol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 bg-[#131313] border border-neutral-800 rounded-xl flex items-center justify-center hover:bg-neutral-800 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 md:w-5 md:h-5 text-neutral-400 group-hover:text-white transition-colors"
                    >
                      <path d="m18.9,1.153h3.682l-8.042,9.189,9.46,12.506h-7.405l-5.804-7.583-6.634,7.583H.469l8.6-9.831L0,1.153h7.593l5.241,6.931,6.065-6.931Zm-1.293,19.494h2.039L6.482,3.239h-2.19l13.314,17.408Z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Kallolx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 bg-[#131313] border border-neutral-800 rounded-xl flex items-center justify-center hover:bg-neutral-800 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 md:w-6 md:h-6 text-neutral-400 group-hover:text-white transition-colors"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kamrul-hasan-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 bg-[#131313] border border-neutral-800 rounded-xl flex items-center justify-center hover:bg-neutral-800 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 md:w-6 md:h-6 text-neutral-400 group-hover:text-white transition-colors"
                    >
                      <g>
                        <path
                          id="Path_2525"
                          d="M23.002,21.584h0.227l-0.435-0.658l0,0c0.266,0,0.407-0.169,0.409-0.376c0-0.008,0-0.017-0.001-0.025c0-0.282-0.17-0.417-0.519-0.417h-0.564v1.476h0.212v-0.643h0.261L23.002,21.584z M22.577,20.774h-0.246v-0.499h0.312c0.161,0,0.345,0.026,0.345,0.237c0,0.242-0.186,0.262-0.412,0.262"
                        />
                        <path
                          id="Path_2520"
                          d="M17.291,19.073h-3.007v-4.709c0-1.123-0.02-2.568-1.564-2.568c-1.566,0-1.806,1.223-1.806,2.487v4.79H7.908V9.389h2.887v1.323h0.04c0.589-1.006,1.683-1.607,2.848-1.564c3.048,0,3.609,2.005,3.609,4.612L17.291,19.073z M4.515,8.065c-0.964,0-1.745-0.781-1.745-1.745c0-0.964,0.781-1.745,1.745-1.745c0.964,0,1.745,0.781,1.745,1.745C6.26,7.284,5.479,8.065,4.515,8.065L4.515,8.065 M6.018,19.073h-3.01V9.389h3.01V19.073z M18.79,1.783H1.497C0.68,1.774,0.01,2.429,0,3.246V20.61c0.01,0.818,0.68,1.473,1.497,1.464H18.79c0.819,0.01,1.492-0.645,1.503-1.464V3.245c-0.012-0.819-0.685-1.474-1.503-1.463"
                        />
                        <path
                          id="Path_2526"
                          d="M22.603,19.451c-0.764,0.007-1.378,0.633-1.37,1.397c0.007,0.764,0.633,1.378,1.397,1.37c0.764-0.007,1.378-0.633,1.37-1.397c-0.007-0.754-0.617-1.363-1.37-1.37H22.603 M22.635,22.059c-0.67,0.011-1.254-0.522-1.265-1.192c-0.011-0.67,0.523-1.222,1.193-1.233c0.67-0.011,1.222,0.523,1.233,1.193c0,0.007,0,0.013,0,0.02C23.81,21.502,23.29,22.045,22.635,22.059h-0.031"
                        />
                      </g>
                    </svg>
                  </a>
                </div>

                {/* Location Box */}
                <div className="bg-[#131313] border border-neutral-800 rounded-2xl p-4 flex flex-col justify-center">
                  <span className="text-neutral-500 font-afacad text-xs mb-1 uppercase tracking-wider">
                    located at
                  </span>
                  <h3 className="text-white font-agdasima text-2xl md:text-3xl tracking-wide flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#006A4E] flex items-center justify-center shrink-0 shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#F42A41]" />
                    </div>
                    Dhaka, Bangladesh
                  </h3>
                </div>
              </div>

              {/* Right Column (Resume Box) */}
              <div className="w-full md:w-[50%] bg-[#131313] border border-neutral-800 rounded-2xl p-5 flex flex-col items-center justify-center relative">
                {/* Embedded Sparkles Bleeding Out */}
                <div className="absolute -top-7 right-4 z-10 w-16 h-16 pointer-events-none">
                  <Image
                    src="/sparkle.svg"
                    alt="Sparkle"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2 className="font-agdasima text-5xl font-bold uppercase tracking-tight leading-tighter mb-2 text-center mt-1">
                  WANNA WORK
                  <br />
                  TOGETHER
                </h2>
                <p className="text-neutral-400 font-afacad text-md mb-4 text-center">
                  My resume is one click away
                </p>
                <div className="w-full relative px-2">
                  <Link href="/resume" className="w-full">
                    <button className="cursor-pointer w-full bg-[#0066FF] text-white font-agdasima font-bold text-2xl md:text-3xl py-3 rounded-none transition-all duration-200 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_#02327A] active:translate-x-[8px] active:translate-y-[8px] active:shadow-none shadow-[8px_8px_0px_0px_#02327A] flex items-center justify-center gap-2">
                      FREE DOWNLOAD 😅
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Row (Tools Loop) */}
            <div className="w-full bg-[#131313] border border-neutral-800 rounded-2xl overflow-hidden flex flex-col">
              {/* Distinct Header Strip */}
              <div className="w-full bg-[#1A1A1A] border-b border-neutral-800 py-2 text-center">
                <span className="text-neutral-400 font-afacad text-xs md:text-sm tracking-wide">
                  Tools that pay my bills
                </span>
              </div>

              {/* Animated Tool Loop */}
              <div className="w-full overflow-hidden py-4 mask-fade-edges">
                <motion.div
                  className="flex gap-4 w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {/* Duplicate sets of icons for seamless loop */}
                  {[...Array(2)].map((_, setIndex) => (
                    <div key={setIndex} className="flex gap-4">
                      {techStack.map((tech, i) => (
                        <div
                          key={`${setIndex}-${i}`}
                          title={tech.name}
                          aria-label={tech.name}
                          className="w-14 h-14 bg-[#0A0A0A] border border-neutral-800 rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-[#111111] hover:border-neutral-700 transition-all duration-300 shrink-0"
                        >
                          <Icon icon={tech.icon} className="w-8 h-8" />
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
