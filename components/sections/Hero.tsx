"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";

// Count-up hook — animates from 0 → target when element enters viewport
function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  const animate = useCallback(() => {
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return { count, ref };
}

// Stat block with count-up animation
function StatBlock({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(target);
  return (
    <div className="flex flex-col items-center lg:items-start">
      <h2 className="text-5xl font-agdasima sm:text-6xl text-white tracking-wide font-bold">
        <span ref={ref}>{count}</span>{suffix}
      </h2>
      <p className="font-agdasima text-neutral-400 text-2xl">{label}</p>
    </div>
  );
}

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 0.2;
      videoRef.current.currentTime = 0;
      playPromiseRef.current = videoRef.current.play();
      playPromiseRef.current.catch((err) => {
        console.log("Video play request was interrupted or failed: ", err);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      if (playPromiseRef.current) {
        playPromiseRef.current
          .then(() => {
            videoRef.current?.pause();
          })
          .catch(() => {
            // Play failed, safe to ignore pause error
          });
      } else {
        videoRef.current.pause();
      }
    }
  };
  return (
    <section className="relative w-full max-w-6xl mx-auto px-10 lg:px-4 md:lg:px-6 pt-32 lg:pt-52 pb-16 min-h-screen flex flex-col items-center lg:items-start">
      {/* Left Content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-[50%] flex flex-col relative z-20 pb-4 lg:pb-12 items-center lg:items-start text-center lg:text-left"
      >
        <h1 className="font-agdasima text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold uppercase tracking-tight leading-[0.85] text-white whitespace-nowrap">
          HEY, I’M KAMRUL
          <br />
          HASAN KALLOL
        </h1>

        <div className="mt-[-10px] sm:mt-[-20px] lg:mt-[-40px] relative z-30 w-full flex justify-center lg:justify-start">
          <Image
            src="/role.svg"
            alt="a Software Developer"
            width={700}
            height={200}
            className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[115%] h-auto drop-shadow-lg lg:scale-110 origin-center lg:origin-left"
          />
        </div>

        {/* Stats */}
        <div className="flex items-center gap-12 sm:gap-16 mt-12 lg:mt-12 justify-center lg:justify-start">
          <StatBlock target={120} suffix="+" label="Projects" />
          <StatBlock target={3} suffix="+ years" label="Experience" />
        </div>
      </motion.div>

      {/* Right Content - Shape (Floating Layer on Desktop) */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative lg:absolute lg:right-0 lg:top-[26%] lg:mr-8 z-30 flex justify-center lg:justify-end mt-16 lg:mt-0 w-full lg:w-[520px] flex-shrink-0 lg:pointer-events-none"
      >
        <div 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-[480px] lg:max-w-none aspect-[682/535] lg:pointer-events-auto"
        >
          {/* Location Badge (Top Right) */}
          <div className="absolute top-6 right-6 z-40 flex items-center gap-1 px-3 py-1.5 bg-black/45 border border-white/10 rounded-full backdrop-blur-md shadow-lg select-none">
            <MapPin className="w-3.5 h-3.5 text-green-500 animate-pulse" />
            <span className="font-afacad text-xs md:text-sm font-medium text-white tracking-wide">
              Cox's Bazar, Bangladesh
            </span>
          </div>

          {/* Stairs SVG Mask with Background Image & Video Hover */}
          <div className="absolute inset-0 z-0">
            <svg viewBox="0 0 682 535" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <clipPath id="stairs-clip">
                  <path d="M302.199 317.625V25C302.199 11.1929 313.392 0 327.199 0H656.598C670.405 0 681.598 11.1929 681.598 25V510C681.598 523.807 670.405 535 656.598 535H25C11.1929 535 0 523.807 0 510V363.875C0 349.922 11.421 338.67 25.3722 338.878L276.826 342.622C290.778 342.83 302.199 331.578 302.199 317.625Z" />
                  <path d="M160 185C160 171.193 171.193 160 185 160H405V391H160V185Z" />
                </clipPath>
              </defs>
              <image
                href="/images/kallol3.webp"
                width="682"
                height="535"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#stairs-clip)"
                className={`transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
              />
              <foreignObject
                width="682"
                height="535"
                clipPath="url(#stairs-clip)"
                className={`transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
              >
                <video
                  ref={videoRef}
                  src="/images/vid.mp4"
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </foreignObject>
            </svg>
          </div>
          {/* Vibe Sticker */}
          <div className="absolute left-[30%] top-[78%] sm:left-[35%] sm:top-[80%] -translate-x-1/2 -translate-y-1/2 z-20 hover:scale-105 transition-transform cursor-pointer drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]">
            <Image
              src="/vibe.svg"
              alt="Giving Good Vibes"
              width={250}
              height={250}
              priority
              className="w-[180px] sm:w-[220px] lg:w-[260px] h-auto drop-shadow-2xl"
            />
          </div>

          {/* Bottom Right Circle Button */}
          <div className="absolute -right-4 bottom-0 translate-y-[10%] z-30">
            <button className="flex h-20 w-20 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-white border-[6px] sm:border-[8px] border-black shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:bg-neutral-200 transition-colors">
              <ArrowDown
                className="w-8 h-8 sm:w-12 sm:h-12 text-black"
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
