"use client";

import { MAIN_PROJECTS, ARCHIVE_PROJECTS } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Icon } from "@iconify/react";
import {
  ArrowLeft,
  RotateCw,
  Globe,
  Share,
  Star,
  Link as LinkIcon,
  X,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-black text-white pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-4 md:px-12 flex flex-col items-center">
          <div className="flex items-center justify-center w-full gap-2 md:gap-8 mb-10 relative">
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
                Hall of Fame
              </h1>
              <p className="font-afacad text-neutral-400 text-md md:text-xl max-w-2xl text-center lowercase italic">
                Explore my full collection of {ARCHIVE_PROJECTS.length} digital
                experiments and professional client work from 2022 to present.
              </p>

              {/* Overlapping Client Avatars */}
              <div className="flex items-center -space-x-3 mt-8">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-black bg-[#2D124D] shadow-[3px_3px_0px_rgba(0,0,0,1)] relative z-40 transition-transform hover:translate-y-[-4px] cursor-pointer flex items-center justify-center">
                  <Icon icon="devicon:react" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-black bg-[#0D382B] shadow-[3px_3px_0px_rgba(0,0,0,1)] relative z-30 transition-transform hover:translate-y-[-4px] cursor-pointer flex items-center justify-center">
                  <Icon icon="devicon:python" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-black bg-[#59220F] shadow-[3px_3px_0px_rgba(0,0,0,1)] relative z-20 transition-transform hover:translate-y-[-4px] cursor-pointer flex items-center justify-center">
                  <Icon icon="devicon:docker" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-black bg-[#470B14] shadow-[3px_3px_0px_rgba(0,0,0,1)] relative z-10 transition-transform hover:translate-y-[-4px] cursor-pointer flex items-center justify-center">
                  <Icon icon="devicon:postgresql" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-black bg-[#2A2A2A] flex font-agdasima items-center justify-center text-xs md:text-sm font-bold text-white shadow-[3px_3px_0px_rgba(0,0,0,1)] relative z-0">
                  +{ARCHIVE_PROJECTS.length - 4}
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

          {/* Featured Projects Grid - Stacked Browser Components */}
          <div className="flex flex-col gap-16 w-full mb-24">
            <h2 className="font-agdasima text-4xl text-white border-b border-neutral-800 pb-4 text-center w-full">
              Featured Case Studies
            </h2>

            {MAIN_PROJECTS.map((activeProject, mainIndex) => (
              <div
                key={activeProject.slug}
                id={activeProject.slug}
                className="w-full rounded-xl overflow-hidden border -mt-4 border-neutral-800 bg-[#121212] shadow-2xl flex flex-col scroll-mt-32"
              >
                {/* Browser Chrome Top (Tabs) */}
                <div className="hidden md:flex items-end px-4 pt-2 bg-[#1A1A1A] gap-2 overflow-x-auto hide-scrollbar border-b border-neutral-800/20">
                  <div className="flex items-center gap-2 shrink-0 mb-3 mr-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>

                  <div className="flex items-end h-full gap-1 ml-2">
                    {MAIN_PROJECTS.map((tab, idx) => {
                      const isActive = mainIndex === idx;
                      return (
                        <div
                          key={tab.slug}
                          className={`group flex items-center text-xs px-5 py-2.5 gap-2.5 min-w-[160px] max-w-[220px] shrink-0 transition-all duration-300 relative rounded-t-lg
                            ${isActive ? "text-neutral-100" : "text-neutral-500"}
                          `}
                        >
                          {isActive && (
                            <div className="absolute inset-0 bg-[#2A2A2A] rounded-t-lg z-0" />
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
                                className="opacity-40 shrink-0 hover:opacity-100 transition-opacity cursor-pointer"
                              />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Browser Header */}
                <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#1A1A1A] border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neutral-600" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                      Project {mainIndex + 1} / {MAIN_PROJECTS.length}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-500">
                    <ArrowLeft size={14} />
                    <RotateCw size={12} />
                  </div>
                </div>

                {/* Browser Chrome Bottom (URL Bar) */}
                <div className="flex items-center px-4 py-2 bg-[#2A2A2A] border-b border-neutral-800 gap-3 md:gap-4">
                  <div className="hidden md:flex items-center gap-3 text-neutral-400">
                    <ArrowLeft
                      size={16}
                      className="cursor-pointer hover:text-white transition-colors"
                    />
                    <ArrowLeft size={16} className="opacity-50 rotate-180" />
                    <RotateCw
                      size={14}
                      className="cursor-pointer hover:text-white transition-colors"
                    />
                  </div>
                  <div className="grow bg-[#1A1A1A] rounded-full md:rounded-md px-4 py-1.5 flex items-center gap-2 border border-neutral-800 shadow-inner">
                    <Globe size={12} className="text-neutral-500 shrink-0" />
                    <span className="text-neutral-300 text-[10px] md:text-xs font-medium tracking-wide truncate">
                      https://{activeProject.domain}
                    </span>
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

                {/* Browser Content */}
                <div className="flex flex-col lg:flex-row p-4 md:p-6 gap-6 lg:gap-10 bg-[#141414] overflow-hidden min-h-[320px] md:min-h-[450px]">
                  <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-8">
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
                      <div className="flex flex-wrap items-center justify-between mb-4 gap-3">
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-neutral-300 shrink-0 shadow-lg"></div>
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
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Archived Projects */}
          <div className="flex flex-col gap-8 w-full">
            <h2 className="font-agdasima text-4xl text-white border-b border-neutral-800 pb-4 text-center">
              Archive & Experiments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {ARCHIVE_PROJECTS.map((project) => (
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
