"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── STEP 1: DISCOVERY CALL VISUAL WIDGET ────────────────────────────────────
function DiscoveryVisual({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full h-full bg-[#FAF9F5] p-5 md:p-6 flex flex-col justify-between select-none overflow-hidden relative">
      {/* Grid lines overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#EAE8E3_1px,transparent_1px),linear-gradient(to_bottom,#EAE8E3_1px,transparent_1px)] bg-[size:32px_32px] opacity-25 pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-[#EAE8E3] pb-3.5 relative z-10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider text-[#5A5A50] font-bold">
            Rayvok Discovery Room
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="bg-black/5 text-[#5A5A50] font-mono text-[9px] px-2 py-0.5 rounded uppercase tracking-wider font-semibold">
            REC
          </span>
          <span className="bg-[#C9FE34] border border-[#BDEB19] text-black font-mono text-[9px] px-2 py-0.5 rounded uppercase tracking-wider font-bold">
            30 MIN
          </span>
        </div>
      </div>

      {/* Main meeting area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow items-center my-3 relative z-10">
        {/* Avatars / Call Block */}
        <div className="border border-[#EAE8E3] rounded-2xl bg-white p-4 flex flex-col items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.01)] relative overflow-hidden h-[120px] md:h-[135px]">
          
          {/* Subtle floating glow background */}
          <div className="absolute w-24 h-24 rounded-full bg-[#C9FE34]/10 blur-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          
          {/* Gentle floating avatars */}
          <div className="flex items-center -space-x-3 mb-3 relative z-10">
            <motion.div 
              className="w-10 h-10 rounded-full border-2 border-white bg-[#EAE8E3] flex items-center justify-center text-[#5A5A50] font-mono text-[10px] font-bold shadow-sm"
              animate={isActive ? {
                y: [0, -4, 0],
                x: [0, 1.5, 0]
              } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              YOU
            </motion.div>
            <motion.div 
              className="w-10 h-10 rounded-full border-2 border-white bg-[#C9FE34] flex items-center justify-center text-black font-mono text-[10px] font-bold shadow-md"
              animate={isActive ? {
                y: [-3, 1, -3],
                x: [1, -1.5, 1]
              } : {}}
              transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              RV
            </motion.div>
          </div>
          
          {/* Waveform representation */}
          <div className="flex items-center gap-1.5 h-5 justify-center w-full relative z-10">
            {[0.6, 1.2, 0.8, 1.5, 0.4, 1.0, 0.7, 1.3, 0.5, 0.9].map((delay, i) => (
              <motion.div
                key={i}
                className="w-1 rounded-full bg-[#0E0E0E]"
                style={{ height: "18px", transformOrigin: "center" }}
                animate={isActive ? {
                  scaleY: [0.3, 1.1, 0.3],
                } : { scaleY: 0.3 }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  delay: delay * 0.12,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        {/* Notes / Agenda Block */}
        <div className="border border-[#EAE8E3] rounded-2xl bg-white p-4 shadow-[0_4px_12px_rgba(0,0,0,0.01)] h-[120px] md:h-[135px] flex flex-col justify-center relative overflow-hidden">
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#999999] block mb-2.5 font-bold">
            Alignment Topics
          </span>
          <div className="space-y-2 flex-grow flex flex-col justify-center">
            {[
              "Understand Business Goals",
              "Deconstruct Website Pain Points",
              "Define Ideal Customer Journey"
            ].map((topic, i) => (
              <motion.div 
                key={i} 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                <div className="flex items-center justify-center w-4 h-4 rounded-full bg-[#C9FE34] border border-[#BDEB19] shrink-0 shadow-sm">
                  <svg className="w-2.5 h-2.5 text-[#0E0E0E]" fill="none" stroke="currentColor" strokeWidth="4.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[11px] md:text-[12px] font-semibold text-[#1A1A1A] truncate">{topic}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer message */}
      <div className="flex items-center justify-between text-[9px] md:text-[10px] font-mono text-[#999999] border-t border-[#EAE8E3] pt-3 relative z-10">
        <span>STATUS: HIGH ALIGNMENT</span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C9FE34] animate-pulse" />
          COLLABORATIVE DIALOGUE
        </span>
      </div>
    </div>
  );
}

// ─── STEP 2: STRATEGY & PROPOSAL VISUAL WIDGET ───────────────────────────────
function StrategyVisual({ isActive }: { isActive: boolean }) {
  const [activeSubStep, setActiveSubStep] = useState(0);

  // Auto-cycle through the 3 phases to make it highly interactive and visually alive
  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setActiveSubStep((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(interval);
  }, [isActive]);

  const phases = [
    {
      num: "01",
      name: "Blueprint Setup",
      days: "Days 1–3",
      details: "Locking scope maps & features.",
      deliverables: ["Tech Stack Selection", "UI Wireframing Map", "Competitor Research"]
    },
    {
      num: "02",
      name: "Figma UI Prototyping",
      days: "Days 4–9",
      details: "High-fidelity mockups & review.",
      deliverables: ["Desktop UI Designs", "Mobile UX Prototyping", "Design System Setup"]
    },
    {
      num: "03",
      name: "Development & SEO",
      days: "Days 10–14",
      details: "Fast Next.js build & SEO check.",
      deliverables: ["Mobile-First Development", "SEO Tags Optimizations", "Turbopack Build Audit"]
    }
  ];

  return (
    <div className="w-full h-full bg-[#FAF9F5] p-5 md:p-6 flex flex-col justify-between select-none overflow-hidden relative">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#EAE8E3_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#EAE8E3] pb-3.5 relative z-10">
        <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider text-[#5A5A50] font-bold">
          Accelerated 2–3 Weeks Roadmap
        </span>
        <div className="bg-black text-[#C9FE34] font-mono text-[9px] md:text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold shadow-sm">
          14 DAYS MAX
        </div>
      </div>

      {/* Interactive Connected Pipeline SVG */}
      <div className="h-16 relative flex items-center justify-center my-2.5 z-10">
        {/* SVG Connector Path */}
        <svg className="absolute w-full h-full pointer-events-none left-0 top-0">
          {/* Inactive line */}
          <line x1="15%" y1="50%" x2="85%" y2="50%" stroke="#EAE8E3" strokeWidth="3" strokeDasharray="4 4" />
          
          {/* Active vector path */}
          <motion.line
            x1="15%"
            y1="50%"
            x2={activeSubStep === 0 ? "15%" : activeSubStep === 1 ? "50%" : "85%"}
            y2="50%"
            stroke="#0E0E0E"
            strokeWidth="3"
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          />

          {/* Pulse progress particle */}
          <motion.circle
            r="5"
            fill="#C9FE34"
            stroke="#0E0E0E"
            strokeWidth="2"
            animate={{
              cx: activeSubStep === 0 ? "15%" : activeSubStep === 1 ? "50%" : "85%",
              cy: "50%"
            }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          />
        </svg>

        {/* Floating Interactive Milestone Nodes */}
        <div className="w-full flex justify-between px-[5%] relative z-20">
          {phases.map((p, idx) => {
            const isSubActive = activeSubStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveSubStep(idx)}
                className="flex flex-col items-center focus:outline-none transition-transform duration-300"
                style={{ transform: isSubActive ? "scale(1.08)" : "scale(0.95)" }}
              >
                <div 
                  className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border text-[9px] md:text-[10px] font-mono font-bold transition-all duration-300 shadow-sm ${
                    isSubActive 
                      ? "bg-black text-[#C9FE34] border-black scale-110 ring-4 ring-[#C9FE34]/30" 
                      : idx < activeSubStep 
                        ? "bg-[#C9FE34] text-black border-[#BDEB19]" 
                        : "bg-white text-[#999999] border-[#EAE8E3]"
                  }`}
                >
                  {p.num}
                </div>
                <span className={`text-[8px] md:text-[9px] font-mono mt-1.5 uppercase font-bold tracking-tight ${isSubActive ? "text-black font-extrabold" : "text-[#999999]"}`}>
                  {p.days}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Detail Card with reveal animation */}
      <div className="flex-grow flex items-center justify-center min-h-[90px] z-10">
        <AnimatePresence mode="wait">
          {phases.map((p, idx) => {
            if (activeSubStep !== idx) return null;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full border border-[#EAE8E3] rounded-xl bg-white p-3.5 shadow-[0_4px_16px_rgba(0,0,0,0.015)]"
              >
                <div className="flex justify-between items-center mb-1.5">
                  <h4 className="text-[12px] md:text-[13px] font-bold text-[#1A1A1A]">
                    Phase {p.num}: {p.name}
                  </h4>
                  <span className="font-mono text-[8px] bg-[#FAF8F5] border border-[#EAE8E3] text-[#5A5A50] px-1.5 py-0.5 rounded font-bold uppercase">
                    ACTIVE
                  </span>
                </div>
                <p className="text-[10px] md:text-[11px] text-[#5C5C57] mb-2 font-mono">
                  {p.details}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.deliverables.map((del, dIdx) => (
                    <span 
                      key={dIdx} 
                      className="text-[8px] font-semibold text-black bg-[#FAF9F5] border border-[#EAE8E3] px-2 py-0.5 rounded-full"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Locked Status Indicators */}
      <div className="grid grid-cols-2 gap-3 border-t border-[#EAE8E3] pt-3 mt-1 z-10">
        <div className="flex items-center gap-2 bg-[#F5F5F0] rounded-lg px-3 py-1.5 border border-[#EAE8E3] justify-center">
          <svg className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="font-mono text-[9px] uppercase text-[#1A1A1A] font-bold truncate">Scope Locked</span>
        </div>
        <div className="flex items-center gap-2 bg-[#F5F5F0] rounded-lg px-3 py-1.5 border border-[#EAE8E3] justify-center">
          <svg className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="font-mono text-[9px] uppercase text-[#1A1A1A] font-bold truncate">Zero Surprises</span>
        </div>
      </div>
    </div>
  );
}

// ─── STEP 3: DESIGN & BUILD VISUAL WIDGET ────────────────────────────────────
function DesignVisual({ isActive }: { isActive: boolean }) {
  const [sliderPos, setSliderPos] = useState(50);

  // Smooth sliding sweep between 20% and 80% to showcase interactive before/after
  useEffect(() => {
    if (!isActive) return;
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      const sweep = 50 + Math.sin(elapsed * 1.1) * 32;
      setSliderPos(sweep);
    }, 25);
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="w-full h-full bg-[#FAF9F5] p-3.5 md:p-5 flex flex-col justify-between select-none overflow-hidden relative">
      {/* ── Figma Wireframe Layer (Left side of comparison) ── */}
      <div className="absolute inset-0 bg-[#FAF9F6] p-4 flex flex-col justify-between text-[8px] z-10">
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2DFD8_1px,transparent_1px),linear-gradient(to_bottom,#E2DFD8_1px,transparent_1px)] bg-[size:12px_12px] opacity-35 pointer-events-none" />
        
        {/* Top Assets wireframe row */}
        <div className="grid grid-cols-2 gap-3 mb-2 relative z-10">
          {/* Typography card wireframe */}
          <div className="border border-dashed border-blue-400 rounded-xl bg-blue-50/15 p-2 flex items-center justify-center gap-2 relative h-[50px]">
            <div className="absolute top-0.5 left-1 bg-blue-500 text-white font-mono text-[5px] px-1 rounded-sm leading-none">Typo</div>
            <span className="text-[26px] font-bold text-blue-500/40 select-none font-display">Aa</span>
            <div className="flex flex-col text-[6px] font-mono text-blue-400">
              <span>PP Neue</span>
              <span>w: auto</span>
            </div>
            {/* Corner wireframe dots */}
            <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-blue-500 border border-white" />
            <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-blue-500 border border-white" />
          </div>

          {/* Color swatch wireframe */}
          <div className="border border-dashed border-blue-400 rounded-xl bg-blue-50/15 p-2 flex flex-col justify-center gap-1.5 relative h-[50px]">
            <div className="absolute top-0.5 left-1 bg-blue-500 text-white font-mono text-[5px] px-1 rounded-sm leading-none">Colors</div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full border border-dashed border-blue-400" />
              <span className="font-mono text-[5.5px] text-blue-400">#FAF9F5</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full border border-dashed border-blue-400 bg-blue-400/20" />
              <span className="font-mono text-[5.5px] text-blue-400">#C9FE34</span>
            </div>
          </div>
        </div>

        {/* Mock Browser Wireframe */}
        <div className="flex-grow border border-dashed border-blue-400 rounded-xl bg-blue-50/10 p-2.5 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0.5 left-1.5 bg-blue-500 text-white font-mono text-[5.5px] px-1 rounded-sm leading-none z-10">WebpageBrowser</div>
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-dashed border-blue-200 pb-1.5 mb-1.5">
            <span className="font-mono text-[6.5px] font-bold text-blue-500">Logo</span>
            <div className="flex gap-2 font-mono text-[5.5px] text-blue-300">
              <span>[Work]</span>
              <span>[About]</span>
            </div>
            <div className="w-10 h-3 border border-dashed border-blue-300 rounded-full" />
          </div>

          {/* Hero */}
          <div className="border border-dashed border-blue-400 rounded-xl bg-blue-50/15 flex-grow p-2.5 flex flex-col justify-center items-center text-center">
            <span className="font-mono text-[8px] font-bold text-blue-500 mb-1 border border-dashed border-blue-300 px-1">Headline</span>
            <div className="w-24 h-1 bg-blue-200/40 rounded-full my-0.5" />
            <div className="w-16 h-1 bg-blue-200/40 rounded-full my-0.5" />
            <div className="w-14 h-4 border border-dashed border-blue-400 rounded-full mt-2 bg-blue-50/30" />
          </div>
        </div>
      </div>

      {/* ── Styled Live CSS Render Layer (Right side of comparison) ── */}
      <div 
        className="absolute inset-0 bg-[#FAF9F5] p-4 flex flex-col justify-between text-[8px] z-20 overflow-hidden"
        style={{ clipPath: `polygon(${sliderPos}% 0%, 100% 0%, 100% 100%, ${sliderPos}% 100%)` }}
      >
        {/* Top Assets Row */}
        <div className="grid grid-cols-2 gap-3 mb-2 relative z-10">
          {/* Typography Design block */}
          <div className="border border-[#EAE8E3] rounded-xl bg-white p-2.5 flex items-center justify-center gap-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.015)] h-[50px] relative">
            <span className="text-[28px] font-extrabold text-black font-display tracking-tight leading-none">Aa</span>
            <div className="flex flex-col text-[7px] text-[#888888] font-bold">
              <span className="text-black font-extrabold">PP Neue</span>
              <span className="font-mono text-[6px]">Display font</span>
            </div>
          </div>

          {/* Color swatch blocks */}
          <div className="border border-[#EAE8E3] rounded-xl bg-white p-2 flex flex-col justify-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.015)] h-[50px]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5F5F0] border border-[#EAE7DF] shadow-sm shrink-0" />
              <span className="font-mono text-[6.5px] text-[#5A5A50] font-bold">Cream</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C9FE34] border border-[#BDEB19] shadow-sm shrink-0" />
              <span className="font-mono text-[6.5px] text-black font-extrabold">Volt green</span>
            </div>
          </div>
        </div>

        {/* Mock Browser Live Webpage */}
        <div className="flex-grow border border-[#EAE8E3] rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.02)] relative overflow-hidden flex flex-col justify-between">
          {/* Chrome top bar */}
          <div className="bg-[#FAF8F5] border-b border-[#EAE8E3] px-2.5 py-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <div className="bg-white border border-[#EAE8E3] text-[#999999] text-[5.5px] px-4 py-0.5 rounded-md flex-grow text-center font-mono max-w-[130px] mx-auto select-none">
              rayvok.com/branding
            </div>
          </div>

          {/* Render Area */}
          <div className="p-2.5 flex-grow flex flex-col justify-between h-full select-none">
            {/* Header navbar */}
            <div className="flex items-center justify-between pb-1 border-b border-[#FAF9F5] mb-1">
              <span className="font-extrabold text-[#0E0E0E] text-[8px] tracking-tighter font-display">+ RAYVOK</span>
              <div className="flex items-center gap-2.5 text-[#888888] font-bold text-[6px]">
                <span>Work</span>
                <span>About</span>
              </div>
              <button className="px-2.5 py-0.5 bg-black text-white text-[5.5px] font-bold rounded-full border border-black/10 select-none">
                Start
              </button>
            </div>

            {/* Centered Hero Area with beautiful layout */}
            <div className="rounded-xl bg-[#FAF9F5] border border-[#EAE8E3] p-2.5 flex-grow flex flex-col justify-center items-center text-center">
              <h5 className="font-extrabold text-[12px] md:text-[13px] text-[#0E0E0E] leading-none tracking-tight font-display mb-1.5">
                Headline
              </h5>
              <div className="w-24 md:w-32 h-1 bg-[#888888]/15 rounded-full my-0.5 mx-auto" />
              <div className="w-16 md:w-20 h-1 bg-[#888888]/15 rounded-full my-0.5 mx-auto" />
              
              {/* Perfectly aligned premium CTA Button */}
              <motion.button 
                className="flex items-center justify-center gap-1 bg-[#0E0E0E] text-white px-2.5 py-1 rounded-full text-[6.5px] md:text-[7px] font-bold mt-2.5 shadow-sm border border-black/10 mx-auto"
                animate={isActive ? {
                  scale: [1, 1.05, 1],
                } : { scale: 1 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span>Get started</span>
                <span className="flex items-center justify-center w-3 h-3 rounded-full bg-[#C9FE34] text-black">
                  <svg className="w-1.5 h-1.5" fill="none" stroke="currentColor" strokeWidth="4.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sliding Division Sweeping Bar ── */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-black/60 shadow-lg z-30 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Sweep handle icon indicator */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border border-white flex items-center justify-center shadow">
          <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>

      {/* Figma Resizing Cursor Animation */}
      <motion.div
        className="absolute z-40 pointer-events-none"
        animate={isActive ? {
          x: [35, 175, 230, 35],
          y: [75, 45, 115, 75],
        } : { x: 35, y: 75 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg className="w-5 h-5 text-blue-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.5 3v15.3l4.7-4.7 5.8 5.8 2.6-2.6-5.8-5.8 5.8-.1L4.5 3z" />
        </svg>
        <div className="bg-[#00c2ff] text-white font-mono text-[7px] font-bold px-1.5 py-0.5 rounded-full ml-3.5 -mt-1 shadow tracking-tight">
          Designing...
        </div>
      </motion.div>
    </div>
  );
}

// ─── STEP 4: LAUNCH & HANDOFF VISUAL WIDGET ──────────────────────────────────
function LaunchVisual({ isActive }: { isActive: boolean }) {
  const scores = [
    { name: "Performance", score: 100 },
    { name: "SEO Optimization", score: 100 },
    { name: "Best Practices", score: 100 }
  ];

  return (
    <div className="w-full h-full bg-[#FAF9F5] p-5 flex flex-col justify-between select-none overflow-hidden relative">
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#EAE8E3_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#EAE8E3] pb-3 relative z-10">
        <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider text-[#5A5A50] font-bold">
          Production Audit & Handoff
        </span>
        <div className="flex items-center gap-1.5 bg-[#E8FF8A] border border-[#BDEB19] text-black font-mono text-[9px] md:text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>LIVE & ACTIVE</span>
        </div>
      </div>

      {/* Scores speedometer grid */}
      <div className="grid grid-cols-3 gap-2 flex-grow items-center justify-center my-1.5 relative z-10">
        {scores.map((s, idx) => {
          return (
            <div key={idx} className="flex flex-col items-center justify-center bg-white border border-[#EAE8E3] rounded-xl p-2 md:p-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.01)] h-[76px] md:h-[82px]">
              <div className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center mb-0.5">
                {/* SVG Radial Meter */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    className="stroke-[#F5F5F0]"
                    strokeWidth="3"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="18"
                    cy="18"
                    r="15"
                    className="stroke-[#9EC726]"
                    strokeWidth="3.2"
                    fill="transparent"
                    strokeDasharray={95}
                    initial={{ strokeDashoffset: 95 }}
                    animate={isActive ? { strokeDashoffset: 0 } : { strokeDashoffset: 95 }}
                    transition={{ duration: 1.2, delay: idx * 0.18, ease: "easeOut" }}
                  />
                </svg>
                <motion.div 
                  className="absolute text-[9px] md:text-[10px] font-mono font-bold text-black"
                  animate={isActive ? { scale: [1, 1.08, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                >
                  100
                </motion.div>
              </div>
              <span className="text-[8px] font-semibold text-[#5A5A50] text-center tracking-tight leading-tight line-clamp-1 w-full font-mono">
                {s.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Digital Handoff Folder */}
      <div className="border border-[#EAE8E3] bg-white rounded-xl p-2.5 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.015)] mt-1.5 relative z-10">
        <div className="flex items-center gap-2 overflow-hidden">
          <motion.div 
            className="w-7 h-7 rounded-lg bg-[#F5F5F0] border border-[#EAE8E3] flex items-center justify-center shrink-0"
            animate={isActive ? { y: [0, -3, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </motion.div>
          <div className="text-left overflow-hidden">
            <p className="text-[9px] md:text-[10px] font-bold text-[#1A1A1A] truncate leading-normal">
              How-To-Update-Tutorial.mp4
            </p>
            <p className="text-[7px] md:text-[8px] font-mono text-[#999999] leading-none">
              TRAINING VIDEO VAULT
            </p>
          </div>
        </div>
        <button className="flex items-center justify-center w-6 h-6 rounded-full bg-[#C9FE34] hover:bg-[#E8FF8A] border border-black/10 transition-colors shadow-sm shrink-0">
          <motion.div
            animate={isActive ? { y: [-1, 2, -1] } : {}}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-3.5 h-3.5 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.div>
        </button>
      </div>
    </div>
  );
}

// ─── STEP VISUAL MAIN CONTAINER SWITCH ───────────────────────────────────────
interface StepVisualProps {
  stepNum: string;
  isActive: boolean;
}

function StepVisual({ stepNum, isActive }: StepVisualProps) {
  return (
    <div className="w-full h-full relative">
      <AnimatePresence mode="wait">
        {stepNum === "01" && (
          <motion.div
            key="01"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <DiscoveryVisual isActive={isActive} />
          </motion.div>
        )}
        {stepNum === "02" && (
          <motion.div
            key="02"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <StrategyVisual isActive={isActive} />
          </motion.div>
        )}
        {stepNum === "03" && (
          <motion.div
            key="03"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <DesignVisual isActive={isActive} />
          </motion.div>
        )}
        {stepNum === "04" && (
          <motion.div
            key="04"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LaunchVisual isActive={isActive} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── MAIN HOW IT WORKS SECTION EXPORT ────────────────────────────────────────
export default function HowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Discovery call",
      description: "We talk about your business, your goals, and what success looks like. 30 minutes. No sales pitch.",
      deliverables: [
        "30-minute high-alignment conversation",
        "Deconstruction of current website issues",
        "Clarity on business goals & success metrics"
      ]
    },
    {
      num: "02",
      title: "Strategy & proposal",
      description: "You get a clear scope, timeline, and fixed price. No surprises, no scope creep, no hidden costs.",
      deliverables: [
        "Detailed website strategy map",
        "Fixed-price quote & milestone breakdown",
        "Clear 2-3 week launch schedule"
      ]
    },
    {
      num: "03",
      title: "Design & build",
      description: "We design, you review. We build, you test. Two rounds of revisions included — you'll love it before it goes live.",
      deliverables: [
        "High-fidelity Figma UI prototypes",
        "Mobile-first responsive development",
        "Buttery smooth animations & transitions"
      ]
    },
    {
      num: "04",
      title: "Launch & handoff",
      description: "We launch, you own it. Full handoff with training. Most projects go live in 2–3 weeks.",
      deliverables: [
        "Production-ready website launch",
        "SEO optimization & performance check",
        "Recorded custom video tutorials for updates"
      ]
    }
  ];

  return (
    <section className="py-2 md:py-40  relative overflow-clip bg-rayvok-offwhite">
      {/* Background radial glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#C9FE34]/6 blur-[140px] top-[20%] left-[-150px] pointer-events-none" />
      
      <div className="w-full">
        {/* Section Header - Centered */}
        <div className="mb-12 md:mb-36 max-w-4xl mx-auto text-center flex flex-col items-center px-6 md:px-12">
          <p className="label text-[#5A5A55] rounded-lg bg-[#EAE8E3] border border-[#DEDAD0] inline-block px-4 py-1.5 mb-6">
            The process
          </p>
          <h2 className="text-[#1A1A1A] text-[32px] md:text-[54px] lg:text-[80px] leading-[1.1] tracking-tight text-center">
            From first message to <span className="text-[#999999]">live site </span> here&apos;s exactly what happens.
          </h2>
        </div>

        {/* Full-Bleed Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start justify-between w-full">
          
          {/* Left Column: Scrollable Steps */}
          <div className="lg:col-span-6 flex flex-col pb-[20vh] px-6 md:px-12 lg:pl-12 lg:pr-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                onViewportEnter={() => setActiveIndex(index)}
                className="flex flex-col border-b border-[#E6E2D8] pb-20 md:pb-32 pt-12 first:pt-0 min-h-[45vh] justify-center"
              >
                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[#5A5A50] pl-1 text-[14px] uppercase tracking-wider">
                    STEP {step.num}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-[#1A1A1A] text-[28px] md:text-[36px] lg:text-[62px] font-display font-medium tracking-tight mb-6">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[#5C5C57] text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-xl">
                  {step.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-4">
                  <ul className="space-y-3">
                    {step.deliverables.map((item, dIndex) => (
                      <li key={dIndex} className="flex items-start gap-3.5 text-[#1A1A1A]/90 font-body text-[14px] md:text-[15px]">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#C9FE34] border border-[#BDEB19] shrink-0 mt-0.5 shadow-sm">
                          <svg className="w-3 h-3 text-[#0E0E0E]" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="leading-snug font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inline Mobile Fallback Image - Full Width (Bleeds out of standard padding) */}
                <div
                  className="mt-12 lg:hidden -mx-6 md:-mx-12 aspect-[4/4] sm:aspect-[16/9] relative bg-cover bg-center bg-no-repeat border-t border-b border-[#DEDAD0] flex items-center justify-center p-6 sm:p-12"
                  style={{
                    backgroundImage:
                      "url('https://i.pinimg.com/736x/e4/ec/12/e4ec12f44e8ac845f9df71749d91b4ea.jpg')"
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#DEDAD0] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.02)]">
                    <StepVisual stepNum={step.num} isActive={true} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Sticky Visual Container - Full Viewport Height and Bleeds to the Right Screen Border */}
          <div
            className="hidden lg:block lg:col-span-6 sticky top-0 h-screen w-full overflow-hidden border-l border-[#DEDAD0] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/e4/ec/12/e4ec12f44e8ac845f9df71749d91b4ea.jpg')"
            }}
          >
            {/* Visual Panel wrapper */}
            <div className="relative w-full h-full p-16 xl:p-20 flex items-center justify-center">
              
              {/* Dynamic Image Crossfade Stack */}
              {steps.map((step, index) => {
                const isActive = activeIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.95,
                      z: isActive ? 10 : 0
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[320px] sm:w-[380px] sm:h-[350px] xl:w-[450px] xl:h-[400px] rounded-[24px] overflow-hidden border border-[#DEDAD0] bg-white shadow-[0_16px_48px_rgba(0,0,0,0.02)]"
                    style={{ pointerEvents: isActive ? "auto" : "none" }}
                  >
                    <StepVisual stepNum={step.num} isActive={isActive} />
                    
                    {/* Immersive bottom shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/10 via-transparent to-transparent z-10 pointer-events-none" />
                  </motion.div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
