"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUp, ArrowUpRight } from "lucide-react";

const GetInTouchButton = () => {
  return (
    <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full bg-[#5E2BE2] flex items-center justify-center cursor-pointer hover:scale-95 transition-transform overflow-hidden group">
      {/* Black border circle inside - thicker border */}
      <div className="absolute inset-[4%] rounded-full border border-black z-10 pointer-events-none"></div>
      {/* Rotating text svg */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-full p-2"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <path
            id="textCircle"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="transparent"
          />
          <text
            className="text-[10px] font-afacad font-bold tracking-[0.1em] text-[#d8b4fe]"
            fill="currentColor"
          >
            <textPath href="#textCircle" startOffset="0%" textLength="232" lengthAdjust="spacing">
              get in touch • get in touch • get in touch • 
            </textPath>
          </text>
        </svg>
      </motion.div>
      {/* Center Arrow */}
      <ArrowUpRight
        className="w-12 h-12 md:w-16 md:h-16 text-[#d8b4fe] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
        strokeWidth={1.5}
      />
    </div>
  );
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#080808] border-t border-neutral-900 flex flex-col pt-20 pb-6 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* LET'S WORK + role.svg */}
        <div className="flex flex-col items-center justify-center text-center relative w-full mb-4 md:mb-6">
          <h2 className="font-agdasima text-[100px] sm:text-[140px] md:text-[200px] leading-[0.8] font-bold uppercase tracking-tight text-white z-10 relative select-none">
            LET'S WORK
          </h2>
          <div className="z-20 relative w-[90%] sm:w-[80%] max-w-[600px] flex justify-center pointer-events-none translate-y-[-20px] sm:translate-y-[-30px] md:translate-y-[-40px]">
            <Image
              src="/role.svg"
              alt="Software Developer"
              width={600}
              height={200}
              className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>

        {/* Middle Section with Line, Contacts and Circle */}
        <div className="-mt-12 md:-mt-18 w-full relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0 md:h-[180px] py-16 md:py-0">
          {/* Horizontal Line - Perfectly centered in the row (Desktop only) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-neutral-800 z-0 hidden md:block"></div>

          {/* Socials & Email - sits over the line with matching background */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 z-10 relative bg-[#080808] px-4 md:pr-8 py-4">
            <a
              href="mailto:kallol.business.ds@gmail.com"
              className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl text-neutral-300 font-afacad hover:text-white transition-colors"
            >
              kallol.business.ds@gmail.com
            </a>

            <div className="flex items-center gap-8 md:gap-6">
              <a
                href="#"
                className="text-neutral-500 hover:text-white transition-colors transform hover:scale-110 transition-transform"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 md:w-5 md:h-5"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-white transition-colors transform hover:scale-110 transition-transform"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 md:w-4 md:h-4"
                >
                  <path
                    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-white transition-colors transform hover:scale-110 transition-transform"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 md:w-5 md:h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Circular Button - also centered on the line */}
          <div className="relative z-10 md:pl-8">
            <GetInTouchButton />
          </div>
        </div>

        {/* Bottom Footer Strip */}
        <div className="w-full mt-12 pt-6 border-t border-neutral-800/50 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-0">
          <p className="text-sm md:text-base text-neutral-500 font-afacad">
            Copyright 2026 by Kamrul Hasan
          </p>

          <div className="flex justify-center opacity-100 hover:opacity-40 transition-opacity">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={80}
              height={20}
              className="h-6 w-auto"
            />
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 text-sm md:text-base text-neutral-400 hover:text-white font-afacad group"
          >
            <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </div>
            Back on top
          </button>
        </div>
      </div>
    </footer>
  );
}
