"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import GradualBlur from "@/components/GradualBlur";

const HIDDEN_PATHS = ["/projects", "/contact", "/about", "/resume"];

export function BottomBlur() {
  const pathname = usePathname();
  const [atBottom, setAtBottom] = useState(false);

  const isHidden = HIDDEN_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  useEffect(() => {
    if (isHidden) return;
    const handleScroll = () => {
      const distanceFromBottom =
        document.documentElement.scrollHeight -
        window.scrollY -
        window.innerHeight;
      setAtBottom(distanceFromBottom < 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHidden]);

  if (isHidden) return null;

  return (
    <div
      style={{
        transition: "opacity 0.4s ease",
        opacity: atBottom ? 0 : 1,
        pointerEvents: "none",
      }}
    >
      <GradualBlur
        preset="page-footer"
        strength={2.5}
        height="11rem"
        divCount={8}
        curve="ease-in-out"
        zIndex={50}
      />
    </div>
  );
}
