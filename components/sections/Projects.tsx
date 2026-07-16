"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  RotateCw,
  Share,
  Star,
  Plus,
  X,
  Globe,
  Link as LinkIcon,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { MAIN_PROJECTS, SECONDARY_PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll over the height of the browser container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Subscribe to scroll position to update the active tab
  useEffect(() => {
    if (isMobile) return;
    return scrollYProgress.on("change", (latest) => {
      // Divide the scroll progress evenly among the 3 tabs
      let index = Math.floor(latest * MAIN_PROJECTS.length);
      // Ensure index doesn't exceed bounds at exactly 1.0 progress
      if (index >= MAIN_PROJECTS.length) index = MAIN_PROJECTS.length - 1;
      setActiveIndex(index);
    });
  }, [scrollYProgress, isMobile]);

  // Auto-scroll active tab into view on mobile
  useEffect(() => {
    if (!isMobile || !tabsContainerRef.current) return;
    const activeTabEl = tabsContainerRef.current.children[activeIndex] as HTMLElement;
    if (activeTabEl) {
      activeTabEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeIndex, isMobile]);

  const activeProject = MAIN_PROJECTS[activeIndex];

  // Calculate scrolling when clicking a tab directly
  const handleTabClick = (index: number) => {
    if (isMobile) {
      setActiveIndex(index);
      return;
    }
    if (!containerRef.current) return;

    const segment = 1 / MAIN_PROJECTS.length;
    const targetProgress = index * segment + segment / 2;

    // Calculate position relative to document
    const rect = containerRef.current.getBoundingClientRect();
    const scrollHeight = containerRef.current.scrollHeight - window.innerHeight;
    const targetScroll =
      rect.top + window.scrollY + scrollHeight * targetProgress;

    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-black text-white pt-24 pb-12 flex flex-col items-center">
      {/* Section Title */}
      <h2 className="font-agdasima text-5xl md:text-6xl text-white font-bold mb-16 tracking-wide z-10 relative">
        PROJECTS
      </h2>

      {/* Mobile Stacked Cards - Visible on mobile, hidden on desktop */}
      <div className="md:hidden w-full flex flex-col gap-6 px-4 py-4">
        {MAIN_PROJECTS.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="w-full rounded-2xl border border-neutral-800 bg-[#121212] shadow-2xl flex flex-col p-4 cursor-pointer"
          >
            {/* Image Container - 16:9 ratio for mobile */}
            <div className="w-full aspect-video rounded-xl bg-[#222222] border border-neutral-800/50 shadow-inner relative overflow-hidden mb-4">
              {(project.bannerImage || project.heroImage) ? (
                <Image
                  src={project.bannerImage || project.heroImage || ""}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="85vw"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-500 font-afacad tracking-widest text-sm uppercase">
                  Image Coming Soon
                </div>
              )}
            </div>

            {/* Title & Logo */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-700 shrink-0 shadow-lg flex items-center justify-center overflow-hidden">
                {project.logo ? (
                  <Image src={project.logo} alt={project.title} width={26} height={26} className="object-contain" />
                ) : (
                  <div className="w-full h-full bg-neutral-300 rounded-full" />
                )}
              </div>
              <h3 className="font-agdasima text-3xl font-bold tracking-wide">
                {project.title.split(" - ")[0]}
              </h3>
            </div>

            {/* Description */}
            <p className="font-afacad text-neutral-400 text-sm leading-snug">
              {project.description}
            </p>

            {/* Footer - Badge and View Case Study Option Together */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-800/60">
              <span className="px-2 py-0.5 rounded border border-neutral-800 bg-neutral-800 text-neutral-400 text-xs font-afacad shrink-0">
                {project.badge}
              </span>
              <div className="flex items-center gap-1.5 text-white font-medium hover:text-neutral-300 transition-colors group">
                <LinkIcon size={12} className="opacity-80" />
                <span className="text-xs font-bold font-afacad tracking-wider uppercase">
                  View Case Study
                </span>
                <span className="ml-0.5 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop Mockup - Hidden on mobile, visible on desktop */}
      <div
        ref={containerRef}
        className="hidden md:block relative w-full h-[300vh]"
      >
        {/* Sticky Container - locks the browser in view while scrolling down */}
        <div className="sticky top-40 md:top-32 w-full max-w-6xl mx-auto px-4 md:px-12 flex flex-col shadow-2xl z-20">
          {/* Browser Mockup */}
          <div className="w-full rounded-xl overflow-hidden border border-neutral-800 bg-[#121212] shadow-2xl flex flex-col">
            {/* Browser Chrome Top (Tabs) */}
            <div className="flex items-end px-4 pt-4 bg-[#1A1A1A] gap-2 border-b border-neutral-800/20">
              {/* Mac OS Dots */}
              <div className="flex items-center gap-2 shrink-0 mb-3 mr-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>

              <div className="flex items-end h-full gap-1 ml-2">
                {MAIN_PROJECTS.map((tab, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <div
                      key={tab.slug}
                      onClick={() => handleTabClick(idx)}
                      className={`group flex items-center text-xs px-5 py-2.5 gap-2.5 min-w-[160px] max-w-[220px] shrink-0 cursor-pointer transition-all duration-300 relative rounded-t-lg
                        ${isActive ? "text-neutral-100" : "text-neutral-500 hover:text-neutral-300"}
                      `}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-[#2A2A2A] rounded-t-lg z-0"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}

                      <div className="relative z-10 flex items-center gap-2.5 w-full">
                        <div
                          className={`w-3.5 h-3.5 rounded-full shrink-0 ${isActive ? "bg-white opacity-80" : "bg-white/10 opacity-30 shadow-inner"}`}
                        />
                        <span
                          className={`truncate grow font-afacad tracking-widest text-[10px] uppercase font-bold ${isActive ? "opacity-100" : "opacity-60"}`}
                        >
                          {tab.tabName}
                        </span>
                        {isActive && (
                          <X
                            size={16}
                            className="opacity-40 shrink-0 hover:opacity-100 transition-opacity"
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Browser Chrome Bottom (URL Bar) */}
            <div className="flex items-center px-4 py-2 bg-[#2A2A2A] border-b border-neutral-800 gap-3 md:gap-4">
              <div className="hidden md:flex items-center gap-3 text-neutral-400">
                <ArrowLeft
                  size={16}
                  className="cursor-pointer hover:text-white transition-colors"
                />
                <ArrowRight size={16} className="opacity-50" />
                <RotateCw
                  size={14}
                  className="cursor-pointer hover:text-white transition-colors"
                />
              </div>
              <div className="grow bg-[#1A1A1A] rounded-full md:rounded-md px-4 py-1.5 flex items-center gap-2 border border-neutral-800 shadow-inner">
                <Globe size={12} className="text-neutral-500 shrink-0" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeProject.domain}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 5 }}
                    transition={{ duration: 0.15 }}
                    className="text-neutral-300 text-[10px] md:text-xs font-medium tracking-wide truncate"
                  >
                    https://{activeProject.domain}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="flex items-center gap-3 text-neutral-400 shrink-0">
                <Share
                  size={14}
                  className="cursor-pointer hover:text-white transition-colors hidden sm:block"
                />
                <Star
                  size={14}
                  className="cursor-pointer hover:text-yellow-500 transition-colors"
                />
              </div>
            </div>

            {/* Browser Content (Featured Project) */}
            <div className="flex flex-col lg:flex-row p-4 md:p-6 gap-6 lg:gap-10 bg-[#141414] overflow-hidden min-h-[320px] md:min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.slug}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col lg:flex-row w-full gap-6 lg:gap-8"
                >
                  {/* Left Box (Image Placeholder) - Balanced width */}
                  <div className="w-full lg:w-[40%] aspect-video md:aspect-[1.4/1] rounded-lg bg-[#222222] border border-neutral-800 shadow-inner flex items-center justify-center shrink-0 relative overflow-hidden group/img">
                    {activeProject.heroImage ? (
                      <Image
                        src={activeProject.heroImage}
                        alt={activeProject.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                        sizes="(max-width: 1024px) 100vw, 450px"
                        priority
                      />
                    ) : (
                      <span className="text-neutral-500 font-afacad tracking-widest text-sm uppercase">
                        Image Coming Soon
                      </span>
                    )}
                  </div>

                  {/* Right Details */}
                  <div className="flex flex-col flex-1 w-full justify-center">
                    <div className="flex flex-wrap items-center justify-between mb-4  gap-3">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-neutral-900 border border-neutral-700 shrink-0 shadow-lg flex items-center justify-center overflow-hidden">
                          {activeProject.logo ? (
                            <Image src={activeProject.logo} alt={activeProject.title} width={28} height={28} className="object-contain" />
                          ) : (
                            <div className="w-full h-full bg-neutral-300 rounded-full" />
                          )}
                        </div>
                        <h3 className="font-agdasima text-3xl md:text-5xl font-bold tracking-wide">
                          {activeProject.title}
                        </h3>
                      </div>
                      <span className="px-2 py-0.5 rounded border border-neutral-800 bg-neutral-800 text-neutral-400 text-[15px] font-afacad shrink-0">
                        {activeProject.badge}
                      </span>
                    </div>

                    <p className="font-afacad text-neutral-400 text-md md:text-lg leading-tight mb-4 max-w-lg">
                      {activeProject.description}
                    </p>

                    <div className="w-full h-px bg-neutral-800 mb-6" />

                    {/* Grid Features */}
                    <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10 text-md">
                      {activeProject.features
                        .slice(0, 2)
                        .map((feature, idx) => (
                          <div key={idx} className="flex flex-col">
                            <span className="text-3xl md:text-4xl mb-1.5">
                              {feature.icon}
                            </span>
                            <h4 className="font-bold text-[#86E49E] text-lg md:text-2xl mb-1.5">
                              {feature.title}
                            </h4>
                            <p className="font-afacad text-neutral-500 leading-tight text-md hidden md:block">
                              {feature.desc}
                            </p>
                          </div>
                        ))}
                    </div>

                    <Link
                      href={`/projects/${activeProject.slug}`}
                      className="flex cursor-pointer items-center gap-2 text-white font-medium hover:text-neutral-300 transition-colors w-fit group border-b border-transparent hover:border-neutral-300"
                    >
                      <LinkIcon size={14} className="md:size-4" />
                      <span className="text-md md:text-xl font-afacad tracking-wide">
                        View Case Study
                      </span>
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* 
        Below the 300vh Scroll Container.
        Normal static page flow resumes here. 
      */}
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 mt-12 relative z-30">
        {/* Transition Text - Hidden on mobile */}
        <div className="hidden md:flex w-full justify-center py-16">
          <p className="font-afacad italic text-neutral-400 text-lg md:text-2xl tracking-wide flex items-center gap-3">
            Three case study now, more soon{" "}
            <span className="not-italic text-lg">⛏️</span> — till then, enjoy
            some of my past work.
          </p>
        </div>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {SECONDARY_PROJECTS.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              year={project.year}
              image={project.heroImage}
              color={project.color}
            />
          ))}
        </div>

        {/* Footer Link */}
        <div className="w-full flex justify-center mt-16">
          <Link
            href="/projects"
            className="flex items-center text-neutral-400 hover:text-white transition-colors group"
          >
            <span className="flex items-center gap-2 font-agdasima font-medium tracking-widest text-lg">
              view all projects{" "}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
