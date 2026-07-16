import Image from "next/image";
import { Star } from "lucide-react";

// Review Mock Data
const REVIEWS = [
  {
    id: 1,
    name: "Jamil Ifat",
    title: "CEO, Wonder AI",
    text: "Working with Kamrul was an absolute pleasure! His creativity knows no bounds, and he consistently delivered outputs that exceeded our expectations. His attention to detail and ability to capture our brand essence truly set them apart.",
    avatar: "/images/c1.webp",
  },
  {
    id: 2,
    name: "Rejowan Ahmed",
    title: "Founder, Bright Youth Academy",
    text: "He took our messy wireframes and turned them into a deeply intuitive, stunning interface. Fast communication and incredible delivery speed. Would hire again in a heartbeat.",
    avatar: "/images/c2.webp",
  },
  {
    id: 3,
    name: "Mahiyan Mahin",
    title: "Backend Developer, HishabX",
    text: "Absolutely phenomenal work on our latest project. The animations are so smooth and the code is extremely clean. A true professional through and through.",
    avatar: "/images/c3.webp",
  },
];

export function Testimonials() {
  return (
    <section className="w-full bg-black pt-20 pb-24 px-4 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center mb-24 relative">
        <h2 className="font-agdasima text-5xl md:text-6xl text-white font-bold tracking-wide mb-4 text-center">
          KIND WORDS, REAL HUMANS
        </h2>
        <div className="flex items-center justify-center w-full gap-4 max-w-5xl">
          {/* Left Line SVG */}
          <svg
            width="200"
            height="60"
            viewBox="0 0 1000 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-neutral-400 hidden md:block shrink-0 opacity-40"
          >
            <path
              d="M78.9 120.4C80.68 106.16 85.55 92.62 92 79.8C104.48 54.68 125.69 34.89 147.77 18.76L163.73 7C164.03 11.63 164.61 27.52 165.25 32.05C166.92 45.44 170.54 58.75 176.46 70.88C180.26 78.67 185.08 85.72 190.92 91.91L193 94.19C200.03 101.89 207.52 109.33 214.56 117.1C220.36 123.53 225.95 130.18 231.02 137.22C243.24 154.68 251.05 179.36 239.84 199.1C241.09 195.06 241.69 190.91 241.73 186.82C241.8 174.64 236.96 163.01 230.18 153.1C224.56 144.65 217.04 137.8 209.49 131.13C199.3 122.06 188.4 113.7 178.42 104.31C170.7 97.35 164.32 88.8 159.36 79.87C153.67 69.51 149.5 58.4 146.76 46.93C128 63.36 112.33 82.38 104 106.42C92.67 137.12 98.51 173.55 118.49 199.5C137.94 224.6 169.45 238.9 201.03 239.24C199.457 238.227 197.897 237.187 196.35 236.12C180.13 225.11 165.33 211.23 156.03 193.82C146.89 176.85 142.04 157.21 143.76 137.95C145.12 165.81 158.58 192.85 179.76 210.92C215.53 240.37 262.17 253.4 307.8 256.13C422.62 264.01 527.6 207.13 639.47 190.94C733.36 178.29 837.69 190 918.2 242.86C926.14 248.22 933.81 254.01 941.01 260.34C948.2 266.66 954.94 273.46 961 280.79C930.29 251.14 891.04 232.48 850.6 220.36C792.26 203.22 730.41 199.68 670.12 206.29C660.89 207.28 651.65 208.61 642.5 210.21C548.91 226.79 460.59 269.9 364.72 275.12C309.41 278.49 250.92 270.5 203.32 240.7C179.09 245.94 153.03 241.15 131.5 228.93C93.42 207.78 73.37 163.16 78.9 120.4Z"
              fill="currentColor"
            />
          </svg>

          <div className="flex flex-col items-center">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#EAB308" stroke="none" />
              ))}
            </div>
            <span className="font-afacad text-lg md:text-xl text-neutral-400 whitespace-nowrap px-4">
              5-Star Reviews That Aren't From My Mom
            </span>
          </div>

          {/* Right Line SVG (Mirrored) */}
          <svg
            width="200"
            height="60"
            viewBox="0 0 1000 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-neutral-400 hidden md:block shrink-0 opacity-40 scale-x-[-1]"
          >
            <path
              d="M78.9 120.4C80.68 106.16 85.55 92.62 92 79.8C104.48 54.68 125.69 34.89 147.77 18.76L163.73 7C164.03 11.63 164.61 27.52 165.25 32.05C166.92 45.44 170.54 58.75 176.46 70.88C180.26 78.67 185.08 85.72 190.92 91.91L193 94.19C200.03 101.89 207.52 109.33 214.56 117.1C220.36 123.53 225.95 130.18 231.02 137.22C243.24 154.68 251.05 179.36 239.84 199.1C241.09 195.06 241.69 190.91 241.73 186.82C241.8 174.64 236.96 163.01 230.18 153.1C224.56 144.65 217.04 137.8 209.49 131.13C199.3 122.06 188.4 113.7 178.42 104.31C170.7 97.35 164.32 88.8 159.36 79.87C153.67 69.51 149.5 58.4 146.76 46.93C128 63.36 112.33 82.38 104 106.42C92.67 137.12 98.51 173.55 118.49 199.5C137.94 224.6 169.45 238.9 201.03 239.24C199.457 238.227 197.897 237.187 196.35 236.12C180.13 225.11 165.33 211.23 156.03 193.82C146.89 176.85 142.04 157.21 143.76 137.95C145.12 165.81 158.58 192.85 179.76 210.92C215.53 240.37 262.17 253.4 307.8 256.13C422.62 264.01 527.6 207.13 639.47 190.94C733.36 178.29 837.69 190 918.2 242.86C926.14 248.22 933.81 254.01 941.01 260.34C948.2 266.66 954.94 273.46 961 280.79C930.29 251.14 891.04 232.48 850.6 220.36C792.26 203.22 730.41 199.68 670.12 206.29C660.89 207.28 651.65 208.61 642.5 210.21C548.91 226.79 460.59 269.9 364.72 275.12C309.41 278.49 250.92 270.5 203.32 240.7C179.09 245.94 153.03 241.15 131.5 228.93C93.42 207.78 73.37 163.16 78.9 120.4Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
        {/* Message 1: Host Intro */}
        <div className="flex items-start justify-end gap-4 self-end max-w-[80%]">
          <div className="bg-[#1a1a1a] border border-neutral-800 rounded-2xl rounded-tr-sm p-4 md:p-5 shadow-xl">
            <p className="font-afacad text-neutral-300 text-lg">
              Hey guys! How was your experience working with me?
            </p>
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0 border border-neutral-700 bg-neutral-800 p-0.5 relative">
            <div className="w-full h-full rounded-full bg-neutral-700 overflow-hidden relative">
              <Image
                src="/images/kallol-sq.webp"
                alt="Kamrul Hasan Kallol"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Message 2: Client 1 */}
        <div className="flex items-start justify-start gap-4 self-start w-[90%] md:max-w-[75%] mt-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0 border border-neutral-700 bg-neutral-800 p-0.5 relative">
            <div className="w-full h-full rounded-full bg-neutral-700 overflow-hidden relative">
              <Image
                src={REVIEWS[0].avatar}
                alt={REVIEWS[0].name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-[#121212] border border-neutral-800 rounded-2xl rounded-tl-sm p-6 md:p-8 shadow-xl flex flex-col gap-6 w-full">
            <p className="font-afacad text-neutral-300 text-lg md:text-xl leading-relaxed">
              {REVIEWS[0].text}
            </p>
            <div className="w-full h-px bg-neutral-800" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-white font-agdasima text-lg md:text-xl">
                {REVIEWS[0].name}
              </span>
              <span className="text-neutral-600">|</span>
              <span className="font-afacad text-neutral-400 text-sm">
                {REVIEWS[0].title}
              </span>
            </div>
          </div>
        </div>

        {/* Message 3: Client 2 */}
        <div className="flex items-start justify-start gap-4 self-start w-[90%] md:max-w-[75%] mt-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0 border border-neutral-700 bg-neutral-800 p-0.5 relative">
            <div className="w-full h-full rounded-full bg-neutral-700 overflow-hidden relative">
              <Image
                src={REVIEWS[1].avatar}
                alt={REVIEWS[1].name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-[#121212] border border-neutral-800 rounded-2xl rounded-tl-sm p-6 md:p-8 shadow-xl flex flex-col gap-6 w-full">
            <p className="font-afacad text-neutral-300 text-lg md:text-xl leading-relaxed">
              {REVIEWS[1].text}
            </p>
            <div className="w-full h-px bg-neutral-800" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-white font-agdasima text-lg md:text-xl">
                {REVIEWS[1].name}
              </span>
              <span className="text-neutral-600">|</span>
              <span className="font-afacad text-neutral-400 text-sm">
                {REVIEWS[1].title}
              </span>
            </div>
          </div>
        </div>

        {/* Message 4: Host Follow-up */}
        <div className="flex items-start justify-end gap-4 self-end max-w-[80%] mt-4">
          <div className="bg-[#1a1a1a] border border-neutral-800 rounded-2xl rounded-tr-sm p-4 md:p-5 shadow-xl">
            <p className="font-afacad text-neutral-300 text-lg">
              That's so kind of you! Anyone else have thoughts?
            </p>
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0 border border-neutral-700 bg-neutral-800 p-0.5 relative">
            <div className="w-full h-full rounded-full bg-neutral-700 overflow-hidden relative">
              <Image
                src="/images/kallol-sq.webp"
                alt="Kamrul Hasan Kallol"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Message 5: Client 3 */}
        <div className="flex items-start justify-start gap-4 self-start w-[90%] md:max-w-[75%] mt-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0 border border-neutral-700 bg-neutral-800 p-0.5 relative">
            <div className="w-full h-full rounded-full bg-neutral-700 overflow-hidden relative">
              <Image
                src={REVIEWS[2].avatar}
                alt={REVIEWS[2].name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-[#121212] border border-neutral-800 rounded-2xl rounded-tl-sm p-6 md:p-8 shadow-xl flex flex-col gap-6 w-full">
            <p className="font-afacad text-neutral-300 text-lg md:text-xl leading-relaxed">
              {REVIEWS[2].text}
            </p>
            <div className="w-full h-px bg-neutral-800" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-white font-agdasima text-lg md:text-xl">
                {REVIEWS[2].name}
              </span>
              <span className="text-neutral-600">|</span>
              <span className="font-afacad text-neutral-400 text-sm">
                {REVIEWS[2].title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
