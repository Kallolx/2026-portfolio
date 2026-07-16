"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, Send, MapPin, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECT_TYPES = [
  "Web Development",
  "UI/UX Design",
  "Consulting",
  "General Inquiry"
];

export default function ContactPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const handleSelect = (type: string) => {
    setSelectedType(type);
    setIsDropdownOpen(false);
  };
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-black text-white pt-40 pb-24 relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#5E2BE2]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-[#86E49E]/5 blur-[100px] rounded-full pointer-events-none -z-10" />

        {/* Header Section */}
        <div className="max-w-6xl mx-auto px-4 md:px-12 flex flex-col items-center mb-24">
          <div className="flex items-center justify-center w-full gap-2 md:gap-4 mb-4 relative">
            <svg
              width="200"
              height="60"
              viewBox="0 0 1000 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-500 hidden lg:block shrink-0 opacity-30 translate-y-4"
            >
              <path
                d="M78.9 120.4C80.68 106.16 85.55 92.62 92 79.8C104.48 54.68 125.69 34.89 147.77 18.76L163.73 7C164.03 11.63 164.61 27.52 165.25 32.05C166.92 45.44 170.54 58.75 176.46 70.88C180.26 78.67 185.08 85.72 190.92 91.91L193 94.19C200.03 101.89 207.52 109.33 214.56 117.1C220.36 123.53 225.95 130.18 231.02 137.22C243.24 154.68 251.05 179.36 239.84 199.1C241.09 195.06 241.69 190.91 241.73 186.82C241.8 174.64 236.96 163.01 230.18 153.1C224.56 144.65 217.04 137.8 209.49 131.13C199.3 122.06 188.4 113.7 178.42 104.31C170.7 97.35 164.32 88.8 159.36 79.87C153.67 69.51 149.5 58.4 146.76 46.93C128 63.36 112.33 82.38 104 106.42C92.67 137.12 98.51 173.55 118.49 199.5C137.94 224.6 169.45 238.9 201.03 239.24C199.457 238.227 197.897 237.187 196.35 236.12C180.13 225.11 165.33 211.23 156.03 193.82C146.89 176.85 142.04 157.21 143.76 137.95C145.12 165.81 158.58 192.85 179.76 210.92C215.53 240.37 262.17 253.4 307.8 256.13C422.62 264.01 527.6 207.13 639.47 190.94C733.36 178.29 837.69 190 918.2 242.86C926.14 248.22 933.81 254.01 941.01 260.34C948.2 266.66 954.94 273.46 961 280.79C930.29 251.14 891.04 232.48 850.6 220.36C792.26 203.22 730.41 199.68 670.12 206.29C660.89 207.28 651.65 208.61 642.5 210.21C548.91 226.79 460.59 269.9 364.72 275.12C309.41 278.49 250.92 270.5 203.32 240.7C179.09 245.94 153.03 241.15 131.5 228.93C93.42 207.78 73.37 163.16 78.9 120.4Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="font-agdasima text-6xl md:text-8xl font-bold uppercase tracking-tight text-center">
              LET'S WORK
            </h1>
            <svg
              width="200"
              height="60"
              viewBox="0 0 1000 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-500 hidden lg:block shrink-0 opacity-30 scale-x-[-1] translate-y-4"
            >
              <path
                d="M78.9 120.4C80.68 106.16 85.55 92.62 92 79.8C104.48 54.68 125.69 34.89 147.77 18.76L163.73 7C164.03 11.63 164.61 27.52 165.25 32.05C166.92 45.44 170.54 58.75 176.46 70.88C180.26 78.67 185.08 85.72 190.92 91.91L193 94.19C200.03 101.89 207.52 109.33 214.56 117.1C220.36 123.53 225.95 130.18 231.02 137.22C243.24 154.68 251.05 179.36 239.84 199.1C241.09 195.06 241.69 190.91 241.73 186.82C241.8 174.64 236.96 163.01 230.18 153.1C224.56 144.65 217.04 137.8 209.49 131.13C199.3 122.06 188.4 113.7 178.42 104.31C170.7 97.35 164.32 88.8 159.36 79.87C153.67 69.51 149.5 58.4 146.76 46.93C128 63.36 112.33 82.38 104 106.42C92.67 137.12 98.51 173.55 118.49 199.5C137.94 224.6 169.45 238.9 201.03 239.24C199.457 238.227 197.897 237.187 196.35 236.12C180.13 225.11 165.33 211.23 156.03 193.82C146.89 176.85 142.04 157.21 143.76 137.95C145.12 165.81 158.58 192.85 179.76 210.92C215.53 240.37 262.17 253.4 307.8 256.13C422.62 264.01 527.6 207.13 639.47 190.94C733.36 178.29 837.69 190 918.2 242.86C926.14 248.22 933.81 254.01 941.01 260.34C948.2 266.66 954.94 273.46 961 280.79C930.29 251.14 891.04 232.48 850.6 220.36C792.26 203.22 730.41 199.68 670.12 206.29C660.89 207.28 651.65 208.61 642.5 210.21C548.91 226.79 460.59 269.9 364.72 275.12C309.41 278.49 250.92 270.5 203.32 240.7C179.09 245.94 153.03 241.15 131.5 228.93C93.42 207.78 73.37 163.16 78.9 120.4Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <p className="font-afacad text-neutral-400 text-lg md:text-2xl text-center lowercase italic max-w-2xl px-4">
            Have a project in mind? Reach out to schedule a discovery call or
            just to say hi.
          </p>
        </div>

        <section className="max-w-6xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          {/* Left Column: Contact Info & Socials */}
          <div className="md:col-span-5 flex flex-col justify-between py-2 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="font-agdasima text-4xl md:text-5xl font-bold uppercase mb-8 text-[#86E49E]">
                Get In Touch
              </h2>

            <div className="space-y-8 mb-16 w-full">
              <a
                href="mailto:kallol.business.ds@gmail.com"
                className="group flex flex-col items-center md:items-start gap-2 hover:translate-x-2 transition-transform duration-300"
              >
                <span className="font-afacad text-neutral-400 uppercase tracking-widest text-lg md:text-xl font-bold">
                  Email Address
                </span>
                <span className="font-agdasima text-2xl md:text-4xl text-white group-hover:text-[#5E2BE2] transition-colors">
                  kallol.business.ds@gmail.com
                </span>
              </a>

              <div className="flex flex-col items-center md:items-start gap-2">
                <span className="font-afacad text-neutral-400 uppercase tracking-widest text-lg md:text-xl font-bold">
                  Based in
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#006A4E] flex items-center justify-center shrink-0 shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F42A41]" />
                  </div>
                  <span className="font-agdasima text-2xl md:text-3xl text-white">
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>

            <div className="w-full flex flex-col items-center md:items-start mt-12 md:mt-0">
              <h3 className="font-afacad text-neutral-400 uppercase tracking-widest text-lg md:text-xl mb-6 font-bold">
                Other contacts
              </h3>
              <div className="flex justify-center md:justify-start gap-4 w-full">
                {[
                  { icon: "/images/facebook.svg", label: "Facebook"},
                  { icon: "/images/github.svg", label: "Github"},
                  { icon: "/images/x.svg", label: "Twitter"},
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-20 h-20 bg-[#121212] border-2 border-neutral-800 rounded-2xl flex items-center justify-center text-neutral-400 hover:border-white hover:text-white hover:scale-105 transition-all duration-300 group shadow-lg overflow-hidden p-4"
                  >
                    <img 
                      src={social.icon} 
                      alt={social.label}
                      className="w-full h-full object-contain transition-all"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7">
            <div className="bg-[#121212] border-[4px] border-neutral-800 rounded-3xl p-6 md:p-10 shadow-[15px_15px_0px_0px_rgba(255,255,255,0.05)] relative group hover:border-[#5E2BE2] transition-colors duration-500">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="font-agdasima text-xl uppercase tracking-wider text-neutral-400">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="bg-black border-[3px] border-neutral-800 p-4 rounded-xl text-white font-afacad focus:border-[#5E2BE2] outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="font-agdasima text-xl uppercase tracking-wider text-neutral-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-black border-[3px] border-neutral-800 p-4 rounded-xl text-white font-afacad focus:border-[#5E2BE2] outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Custom Project Type Dropdown */}
                <div className="flex flex-col gap-3 relative">
                  <label className="font-agdasima text-xl uppercase tracking-wider text-neutral-400">
                    Project Type{" "}
                    <span className="text-xs lowercase opacity-50">
                      (Optional)
                    </span>
                  </label>
                  
                  <div 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="bg-black border-[3px] border-neutral-800 p-4 rounded-xl text-white font-afacad cursor-pointer flex items-center justify-between hover:border-[#5E2BE2] transition-colors"
                  >
                    <span className={selectedType ? "text-white" : "text-neutral-500"}>
                      {selectedType || "Select a project category..."}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                  </div>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-[105%] left-0 w-full bg-[#121212] border-[3px] border-[#5E2BE2] rounded-xl overflow-hidden z-50 shadow-2xl overflow-y-auto max-h-[250px]"
                      >
                        {PROJECT_TYPES.map((type) => (
                          <div 
                            key={type}
                            onClick={() => handleSelect(type)}
                            className="p-4 font-afacad text-lg hover:bg-[#5E2BE2] hover:text-white transition-colors cursor-pointer flex items-center justify-between group"
                          >
                            {type}
                            {selectedType === type && <Check className="w-4 h-4 text-white" />}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="font-agdasima text-xl uppercase tracking-wider text-neutral-400">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your vision..."
                    className="bg-black border-[3px] border-neutral-800 p-4 rounded-xl text-white font-afacad focus:border-[#5E2BE2] outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-white border-[3px] border-white text-black px-8 py-5 font-agdasima text-3xl font-bold uppercase transition-all duration-300 hover:bg-transparent hover:text-white shadow-[8px_8px_0px_0px_#5E2BE2] flex items-center justify-center gap-3 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                  Send Message <Send className="w-6 h-6" />
                </button>
              </form>

              {/* Decorative Corner Tag */}
              <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-[#86E49E] text-black border-2 border-black font-agdasima text-lg px-6 py-1 uppercase font-bold shadow-[4px_4px_0px_0px_#000] whitespace-nowrap z-20">
                Available for hire
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function BehanceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8.5 2.8c3.5 1.5 6 4.5 6.5 8.5M1.5 12c4 0 7.5 1.5 10 4.5M6 21c3-2.5 4.5-6 4.5-10" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
