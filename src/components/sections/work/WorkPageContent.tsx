"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getProjects, SanityProject, fallbackProjects } from "@/sanity/client";

function getCardLayout(idx: number) {
  const group = Math.floor(idx / 3);
  const position = idx % 3;
  const isOddGroup = group % 2 === 1;

  if (position === 2) {
    return {
      colSpan: "md:col-span-12",
      offset: "mt-10",
      aspect: "md:aspect-[21/9] aspect-[16/9]"
    };
  }

  if (position === 0) {
    if (isOddGroup) {
      return {
        colSpan: "md:col-span-7",
        offset: "",
        aspect: "md:aspect-[1.5/1] aspect-[4/3]"
      };
    } else {
      return {
        colSpan: "md:col-span-5",
        offset: "",
        aspect: "aspect-[1/1]"
      };
    }
  }

  // position === 1
  if (isOddGroup) {
    return {
      colSpan: "md:col-span-5",
      offset: "md:mt-24",
      aspect: "aspect-[1/1]"
    };
  } else {
    return {
      colSpan: "md:col-span-7",
      offset: "md:mt-24",
      aspect: "md:aspect-[1.5/1] aspect-[4/3]"
    };
  }
}

export default function WorkPageContent() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<"ALL" | "WEBSITES" | "WEB APPS">("ALL");
  const [projects, setProjects] = useState<SanityProject[]>(fallbackProjects);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    let active = true;
    getProjects().then((data) => {
      if (active) {
        setProjects(data);
      }
    });
    return () => {
      active = false;
    };
  }, []);


  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "WEBSITES") return project.type === "website";
    if (activeFilter === "WEB APPS") return project.type === "webapp";
    return true;
  });

  return (
    <>
      {/* ── Custom Rectangle Cursor ────────────────────────────── */}
      <AnimatePresence>
        {hoveredCard !== null && (
          <motion.div
            className="fixed z-[9999] pointer-events-none hidden md:flex items-center justify-center"
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <div className="bg-rayvok-volt text-rayvok-black px-5 py-2.5 flex items-center gap-2.5 shadow-xl font-semibold">
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11L11 1M11 1H3M11 1V9"
                  stroke="#0E0E0E"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-ui font-bold text-[11px] uppercase tracking-[0.1em] whitespace-nowrap">
                View Project
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="work-page"
        ref={sectionRef}
        className="pt-32 pb-12 px-6 md:px-12 bg-rayvok-black relative overflow-hidden min-h-screen"
        onMouseMove={handleMouseMove}
      >
        {/* Subtle tonal accents */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-rayvok-volt/5 blur-[180px] bottom-[-200px] right-[-200px] -z-10 pointer-events-none" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[150px] top-[-100px] left-[-100px] -z-10 pointer-events-none" />

        <div className="container mx-auto">
          {/* ── Section Header ─────────────────────────────── */}
          <div className="flex flex-col items-center mb-18 text-left">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-rayvok-offwhite text-[48px] sm:text-[80px] md:text-[120px] lg:text-[128px] font-black  "
              >
                OUR WORKS
              </motion.h1>
            </div>

            {/* ── Dynamic Filter Buttons ──────────────────────── */}
            <div className="flex flex-wrap items-center justify-start gap-4 mt-12">
              {(["ALL", "WEBSITES", "WEB APPS"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`font-ui text-[12px] tracking-[0.08em] uppercase px-6 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                    activeFilter === filter
                      ? "bg-rayvok-volt border-rayvok-volt text-rayvok-black font-semibold shadow-[0_4px_12px_rgba(201,254,52,0.2)]"
                      : "border-white/10 text-rayvok-mid hover:border-white/30 hover:text-rayvok-offwhite"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* ── Dynamic Layout Grid ────────────────────── */}
          {activeFilter === "ALL" ? (
            /* Asymmetric staggered grid (optimized for 5 projects layout) */
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-16 items-start">
              {filteredProjects.map((project, idx) => {
                const layout = getCardLayout(idx);
                const isLarge = idx % 3 === 2;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`${layout.colSpan} ${layout.offset} group block md:cursor-none cursor-pointer`}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <Link
                      href={`/case-studies/${project.slug}`}
                      className={
                        isLarge ? "block w-full max-w-[1300px] mx-auto" : "block"
                      }
                    >
                      <div
                        className={`relative ${isLarge ? "w-full md:h-[720px] h-[400px]" : layout.aspect} overflow-hidden mb-6 border border-white/10 bg-[#121212]`}
                      >
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover scale-[1.05] transition-transform duration-600 ease-out group-hover:scale-[1.00]"
                        />

                        <div
                          className="absolute inset-0 z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
                          style={{
                            boxShadow: "inset 0 0 80px 24px rgba(0,0,0,0.48)",
                          }}
                        />

                        <div className="absolute bottom-4 right-4 z-20 bg-rayvok-black/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`https://flagcdn.com/w40/${project.flagCode}.png`}
                            alt={project.country}
                            width={20}
                            height={15}
                            className="rounded-[2px] rounded-full object-cover"
                            style={{ width: 20, height: 20 }}
                          />
                          <span className="font-ui font-semibold text-[11px] text-rayvok-offwhite tracking-wider uppercase leading-none">
                            {project.country}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2 text-rayvok-mid font-ui text-[13px] tracking-wider uppercase">
                          <span>{project.company}</span>
                        </div>

                        <h3 className="text-rayvok-offwhite text-[24px] lg:text-[28px] font-display font-medium tracking-tight leading-tight group-hover:text-rayvok-volt transition-colors duration-300">
                          {project.name}
                        </h3>

                        <div className="flex items-center gap-2">
                          <span className="font-ui text-[11px] text-rayvok-volt tracking-wider uppercase">
                            {project.result}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {(project.tags || []).map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="font-ui text-[11px] tracking-[0.06em] uppercase px-3 py-1 rounded-full border border-white/10 text-rayvok-offwhite/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            /* Symmetric 2-column grid when filters are active (prevents weird gaps) */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group block md:cursor-none cursor-pointer"
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Link href={`/case-studies/${project.slug}`} className="block">
                    <div
                      className="relative aspect-[16/10] overflow-hidden mb-6 border border-white/10 bg-[#121212]"
                    >
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover scale-[1.05] transition-transform duration-600 ease-out group-hover:scale-[1.00]"
                      />

                      <div
                        className="absolute inset-0 z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
                        style={{
                          boxShadow: "inset 0 0 80px 24px rgba(0,0,0,0.48)",
                        }}
                      />

                      <div className="absolute bottom-4 right-4 z-20 bg-rayvok-black/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://flagcdn.com/w40/${project.flagCode}.png`}
                          alt={project.country}
                          width={20}
                          height={15}
                          className="rounded-[2px] rounded-full object-cover"
                          style={{ width: 20, height: 20 }}
                        />
                        <span className="font-ui font-semibold text-[11px] text-rayvok-offwhite tracking-wider uppercase leading-none">
                          {project.country}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-rayvok-mid font-ui text-[13px] tracking-wider uppercase">
                        <span>{project.company}</span>
                      </div>

                      <h3 className="text-rayvok-offwhite text-[24px] lg:text-[28px] font-display font-medium tracking-tight leading-tight group-hover:text-rayvok-volt transition-colors duration-300">
                        {project.name}
                      </h3>

                      <div className="flex items-center gap-2">
                        <span className="font-ui text-[11px] text-rayvok-volt tracking-wider uppercase">
                          {project.result}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {(project.tags || []).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-ui text-[11px] tracking-[0.06em] uppercase px-3 py-1 rounded-full border border-white/10 text-rayvok-offwhite/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
