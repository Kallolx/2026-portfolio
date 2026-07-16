"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const EXPERIENCES = [
  {
    icon: "/images/freelancer.svg",
    titlePrefix: "Started journey",
    titleBold: "Freelancer.com",
    date: "2020 - 2021",
    desc: "Worked with clients from different countries, building websites, fixing existing projects, and learning how to communicate, deliver on time, and turn client ideas into real solutions.",
    year: "2021",
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
    date: "2025 - 2026",
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

export function Experience() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-45%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-auto md:h-[400vh] bg-black text-white"
    >
      {/* Sticky Container - Relative on mobile, Sticky on Desktop */}
      <div className="relative md:sticky md:top-20 md:h-screen md:overflow-hidden flex flex-col md:justify-center pt-24 md:pt-24 pb-20 md:pb-0">
        {/* Quote Header */}
        <div className="md:absolute md:top-20 md:left-0 w-full px-6 flex justify-center z-20 mb-16 md:mb-0">
          <h2 className="font-afacad italic text-neutral-400 text-lg md:text-2xl text-center max-w-3xl tracking-wide font-light opacity-80">
            "Every experience in my life is important and has taught me a lot"
          </h2>
        </div>

        {/* --- DESKTOP VIEW (Horizontal Scroll) --- */}
        <div className="hidden md:flex w-full overflow-visible absolute top-[45%] -translate-y-1/2 h-[520px]">
          <motion.div
            style={{ x }}
            className="flex relative items-start h-full pl-[10vw]"
          >
            {/* The infinite horizontal baseline */}
            <div className="absolute left-0 -right-[100vw] bottom-0 h-[1px] bg-neutral-700" />

            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="flex h-full shrink-0">
                {/* Content Block */}
                <div className="w-[460px] pt-[130px] pr-12 flex flex-col pb-8 relative">
                  <div className="relative w-12 h-12 mb-4 shrink-0">
                    <Image
                      src={exp.icon}
                      alt={exp.titleBold}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <h3 className="font-agdasima text-4xl text-neutral-500 mb-1 tracking-wide leading-tight">
                    {exp.titlePrefix}{" "}
                    <span className="text-white font-bold">
                      {exp.titleBold}
                    </span>
                  </h3>
                  <span className="text-neutral-500 font-afacad text-base mb-4 block opacity-80 font-medium">
                    {exp.date}
                  </span>
                  <p className="text-neutral-400 font-afacad leading-relaxed text-xl">
                    {exp.desc}
                  </p>

                  {/* White Baseline Dot */}
                  <div className="absolute bottom-0 left-[40%] -translate-x-1/2 w-3 h-3 bg-white rounded-full translate-y-1/2 z-10 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                </div>

                {/* Vertical Divider */}
                {index < EXPERIENCES.length - 1 && (
                  <div className="w-24 relative flex flex-col items-center shrink-0 h-full pt-20">
                    <span className="text-white font-afacad font-bold mb-4 text-lg tracking-widest text-center">
                      {exp.year}
                    </span>
                    <div className="w-3 h-3 bg-white rounded-full z-10 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                    <div className="w-[1px] flex-1 bg-neutral-700 mt-0" />
                  </div>
                )}
              </div>
            ))}
            <div className="w-32 shrink-0" />
          </motion.div>
        </div>

        {/* --- MOBILE VIEW (Vertical Timeline) --- */}
        <div className="md:hidden flex flex-col px-6 relative">
          {/* Vertical Baseline */}
          <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-neutral-800" />

          <div className="flex flex-col gap-16">
            {EXPERIENCES.map((exp, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                className="relative pl-12 flex flex-col"
              >
                {/* Connector Dot & Year Alignment */}
                <div className="absolute left-1 top-[2px] flex flex-col items-center">
                  <div className="w-[22px] h-[22px] rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  </div>
                </div>

                <div className="mb-4 flex items-center justify-between">
                  <div className="relative w-10 h-10 shrink-0">
                    <Image
                      src={exp.icon}
                      alt={exp.titleBold}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="text-white font-afacad font-bold text-sm tracking-widest leading-none">
                    {exp.year}
                  </span>
                </div>

                <h3 className="font-agdasima text-2xl text-neutral-500 mb-1 tracking-wide leading-tight">
                  {exp.titlePrefix}{" "}
                  <span className="text-white font-bold">{exp.titleBold}</span>
                </h3>

                <span className="text-neutral-500 font-afacad text-xs mb-3 block opacity-80 font-medium">
                  {exp.date}
                </span>

                <p className="text-neutral-400 font-afacad leading-relaxed text-sm">
                  {exp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
