"use client";

export function About() {
  return (
    <section className="relative w-full bg-black text-white pt-10 pb-12 min-h-screen/2">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-24 relative">
        {/* Left Side - Fixed in Middle on Desktop, Top-Middle on Mobile */}
        <div className="w-full md:w-[35%] md:sticky md:top-1/2 md:-translate-y-1/2 flex items-center justify-center md:justify-start gap-4 md:gap-6 z-20 mb-8 md:mb-0">
          <h2 className="font-agdasima text-6xl md:text-8xl font-bold tracking-wide uppercase">
            MYSELF
          </h2>
          {/* Arrow SVG */}
          <svg
            width="48"
            height="16"
            viewBox="0 0 48 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 md:w-16 text-white"
          >
            <path
              d="M47.7071 8.70711C48.0976 8.31658 48.0976 7.68342 47.7071 7.29289L41.3431 0.928932C40.9526 0.538408 40.3195 0.538408 39.9289 0.928932C39.5384 1.31946 39.5384 1.95262 39.9289 2.34315L45.5858 8L39.9289 13.6569C39.5384 14.0474 39.5384 14.6805 39.9289 15.0711C40.3195 15.4616 40.9526 15.4616 41.3431 15.0711L47.7071 8.70711ZM0 9H47V7H0V9Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Right Side - Normal Scrolling Text */}
        <div className="w-full md:w-[60%] flex flex-col gap-12 font-afacad font-light text-[1.35rem] md:text-2xl leading-relaxed text-gray-400">
          <p>
            My journey in tech started with a simple love for creating things.
            What began as trying new tools, designing small projects, and
            building websites slowly became something much bigger. I discovered{" "}
            <span className="font-semibold text-white">
              I love turning ideas into products that solve real problems. 🚀
            </span>
          </p>

          <p>
            Today, I help businesses bring their ideas to life by building
            websites, web applications, and digital solutions that are simple,
            modern, and easy to use. I enjoy understanding each business,
            finding the right solution, and creating products that save time,
            improve daily work, and help them grow.{" "}
            <span className="font-semibold text-white">
              For me, great software is not about fancy technology—it's about
              making life easier for the people who use it.
            </span>{" "}
            💡
          </p>
        </div>
      </div>
    </section>
  );
}
