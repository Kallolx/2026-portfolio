"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IPhoneMockup } from "./IPhoneMockup";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  slug: string;
  title: string;
  year: string;
  image?: string;
  color?: string;
  logo?: string;
}

export function ProjectCard({
  slug,
  title,
  year,
  image,
  color,
  logo,
}: ProjectCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <Link
      href={`/projects/${slug}`}
      id={slug}
      className="bg-[#121212] border border-neutral-800 rounded-2xl p-4 md:p-5 flex flex-col gap-5 group/card cursor-pointer md:hover:border-[#86E49E]/50 transition-all duration-500 shadow-lg relative overflow-hidden scroll-mt-32"
    >
      <motion.div
        className="relative w-full aspect-square bg-transparent rounded-xl overflow-hidden"
        initial="initial"
        whileHover={isMobile ? undefined : "hover"}
      >
        {/* Animated Background - Shrinks on hover, shows solid color */}
        <motion.div
          className="absolute bottom-0 left-0 w-full z-0 overflow-hidden rounded-xl"
          style={{ backgroundColor: color || "#1A1A1A" }}
          variants={{
            initial: { height: "100%" },
            hover: { height: "70%" },
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Sliding Device Mockup - Enlarged and 'Zoomed' */}
        <div className="absolute inset-0 flex items-end justify-center px-6 z-10 pointer-events-none pb-0">
          <motion.div
            className="w-full max-w-[240px] md:max-w-[300px] drop-shadow-[0_40px_80px_rgba(0,0,0,1)]"
            variants={{
              initial: { y: "45%", scale: 1, opacity: 1 },
              hover: { y: "36%", scale: 1, opacity: 1 },
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 25,
              mass: 1,
            }}
          >
            <IPhoneMockup image={image} />
          </motion.div>
        </div>
        {/* Project logo circle — top left */}
        {logo && (
          <div className="absolute top-3 left-3 z-20 w-10 h-10 rounded-full bg-neutral-900/90 border border-neutral-700 flex items-center justify-center overflow-hidden shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} alt={`${title} logo`} className="w-7 h-7 object-contain" />
          </div>
        )}
      </motion.div>

      <div className="flex items-center justify-between w-full px-1">
        <span className="font-agdasima font-bold text-white text-md md:text-2xl md:group-hover/card:text-[#86E49E] transition-colors uppercase tracking-wider">
          {title}
        </span>
        <span className="px-4 py-1 rounded-md border border-neutral-800 bg-neutral-800 text-neutral-500 text-lg font-agdasima uppercase shadow-sm md:group-hover/card:border-neutral-700 transition-colors">
          {year}
        </span>
      </div>
    </Link>
  );
}
