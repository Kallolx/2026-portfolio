"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);

  const links = [
    { name: "about", href: "/about" },
    { name: "resume", href: "/resume" },
    { name: "projects", href: "/projects" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 mx-auto w-full max-w-6xl px-4 md:px-6"
    >
      <nav className="flex items-start justify-between gap-4">
        {/* Left Pill - Logo and Desktop Links */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex h-16 items-center rounded-2xl bg-[#111]/80 border border-white/10 px-4 md:px-6 shadow-xl backdrop-blur-md"
        >
          {/* Logo Icon */}
          <Link href="/" className="flex items-center md:mr-8 mr-0">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={80}
              height={20}
              className="h-8 w-auto mt-2"
            />
          </Link>

          {/* Desktop Links with Separators */}
          <motion.div layout className="hidden items-center md:flex">
            {links.map((link, index) => (
              <div key={link.name} className="flex items-center">
                <Link
                  href={link.href}
                  onMouseEnter={() =>
                    link.name === "projects" && setIsProjectsHovered(true)
                  }
                  onMouseLeave={() => setIsProjectsHovered(false)}
                  className="font-agdasima text-base text-xl tracking-wide text-neutral-400 transition-colors hover:text-white uppercase flex items-center gap-3"
                >
                  {link.name === "projects" && (
                    <motion.svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <defs>
                        <linearGradient
                          id="floating-banner-gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop stopColor="#22D3EE" offset="0%" />
                          <stop stopColor="#10B981" offset="50%" />
                          <stop stopColor="#67E8F9" offset="100%" />
                        </linearGradient>
                        <linearGradient
                          id="blue-gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop stopColor="#60A5FA" offset="0%" />
                          <stop stopColor="#3B82F6" offset="50%" />
                          <stop stopColor="#2563EB" offset="100%" />
                        </linearGradient>
                      </defs>
                      <motion.path
                        initial={{
                          d: "M12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24Z",
                        }}
                        animate={{
                          fill: isProjectsHovered
                            ? "url(#blue-gradient)"
                            : "url(#floating-banner-gradient)",
                        }}
                        transition={{
                          fill: { duration: 0.3 },
                        }}
                      />
                    </motion.svg>
                  )}
                  {link.name}
                </Link>
                {index < links.length - 1 && (
                  <span className="mx-4 h-4 w-px bg-neutral-700/50" />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Pill / Mobile Menu CTA container */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 64 }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
          className="flex flex-col rounded-2xl bg-[#111]/80 border border-white/10 p-1.5 shadow-xl backdrop-blur-md overflow-hidden min-w-[120px]"
        >
          {/* Top row - Stays fixed and stable */}
          <div className="flex h-[52px] items-center gap-2 shrink-0">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hidden min-[350px]:flex h-full items-center justify-center rounded-xl bg-white px-8 font-bold font-agdasima text-base uppercase tracking-widest text-black transition-transform hover:scale-95"
            >
              HIRE ME
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                flex h-full items-center justify-center rounded-xl px-4 text-white transition-colors md:hidden
                ${isOpen ? "bg-white/20" : "bg-white/10 hover:bg-white/20"}
              `}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Content - Just expands height downwards */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden flex flex-col gap-1 px-1 pb-1 mt-2 w-full"
              >
                <div className="h-px w-full bg-white/10 mb-2" />
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-agdasima text-lg tracking-[0.15em] text-neutral-300 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors uppercase flex items-center justify-center gap-3"
                  >
                    {link.name === "projects" && (
                      <motion.svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 14,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <defs>
                          <linearGradient
                            id="floating-banner-gradient-mobile"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop stopColor="#22D3EE" offset="0%" />
                            <stop stopColor="#10B981" offset="50%" />
                            <stop stopColor="#67E8F9" offset="100%" />
                          </linearGradient>
                        </defs>
                        <motion.path
                          initial={{
                            d: "M12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24Z",
                          }}
                          fill="url(#floating-banner-gradient-mobile)"
                          animate={{
                            d: [
                              "M12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24Z",
                              "M12 21.5C12 16.253 16.253 12 21.5 12C16.253 12 12 7.747 12 2.5C12 7.747 7.747 12 2.5 12C7.747 12 12 16.253 12 21.5Z",
                              "M12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24Z",
                            ],
                          }}
                          transition={{
                            duration: 3.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.svg>
                    )}
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>
    </motion.header>
  );
}
