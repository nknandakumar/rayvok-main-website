"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── STEP 1: DISCOVERY CALL VISUAL WIDGET ────────────────────────────────────
function DiscoveryVisual({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full h-full bg-[#FAF9F5] p-5 md:p-6 flex flex-col justify-between select-none">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-[#EAE8E3] pb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9FE34] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9EC726]"></span>
          </span>
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider text-[#5A5A50] font-bold">
            Rayvok Discovery Room
          </span>
        </div>
        <div className="bg-[#EAE8E3] text-[#5A5A50] font-mono text-[9px] md:text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
          30 MINS
        </div>
      </div>

      {/* Main meeting area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow items-center my-4">
        {/* Avatars / Call Block */}
        <div className="border border-[#EAE8E3] rounded-2xl bg-white p-4 flex flex-col items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.01)] relative overflow-hidden h-32 md:h-36">
          <div className="flex items-center -space-x-3 mb-3">
            <div className="w-10 h-10 rounded-full border-2 border-white bg-[#EAE8E3] flex items-center justify-center text-[#5A5A50] font-mono text-[10px] font-bold shadow-sm">
              YOU
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white bg-[#C9FE34] flex items-center justify-center text-black font-mono text-[10px] font-bold shadow-md">
              RV
            </div>
          </div>
          
          {/* Waveform representation */}
          <div className="flex items-center gap-1.5 h-6 justify-center w-full">
            {[0.6, 1.2, 0.8, 1.5, 0.4, 1.0, 0.7, 1.3, 0.5, 0.9].map((delay, i) => (
              <motion.div
                key={i}
                className="w-1 rounded-full bg-[#0E0E0E]"
                style={{ height: "20px", transformOrigin: "center" }}
                animate={isActive ? {
                  scaleY: [0.3, 1, 0.3],
                } : { scaleY: 0.3 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: delay * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        {/* Notes / Agenda Block */}
        <div className="border border-[#EAE8E3] rounded-2xl bg-white p-4 shadow-[0_4px_12px_rgba(0,0,0,0.01)] h-32 md:h-36 flex flex-col justify-center">
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#999999] block mb-2 font-bold">
            Alignment Topics
          </span>
          <div className="space-y-2 flex-grow flex flex-col justify-center">
            {[
              "Understand Business Goals",
              "Deconstruct Website Pain Points",
              "Define Ideal Customer Journey"
            ].map((topic, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex items-center justify-center w-4 h-4 rounded-full bg-[#C9FE34] border border-[#BDEB19] shrink-0">
                  <svg className="w-2.5 h-2.5 text-[#0E0E0E]" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[11px] md:text-[12px] font-medium text-[#1A1A1A] truncate">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer message */}
      <div className="flex items-center justify-between text-[9px] md:text-[10px] font-mono text-[#999999] border-t border-[#EAE8E3] pt-3">
        <span>STATUS: HIGH ALIGNMENT</span>
        <span>NO SALES PITCH</span>
      </div>
    </div>
  );
}

// ─── STEP 2: STRATEGY & PROPOSAL VISUAL WIDGET ───────────────────────────────
function StrategyVisual({ isActive }: { isActive: boolean }) {
  const milestones = [
    { name: "Strategy & Scope Setup", days: "Days 1–3", progress: 100 },
    { name: "High-Fidelity UI Design", days: "Days 4–9", progress: 65 },
    { name: "Development & SEO Build", days: "Days 10–14", progress: 0 }
  ];

  return (
    <div className="w-full h-full bg-[#FAF9F5] p-5 md:p-6 flex flex-col justify-between select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#EAE8E3] pb-4">
        <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider text-[#5A5A50] font-bold">
          Project Scope & Timeline Blueprint
        </span>
        <div className="bg-black text-[#C9FE34] font-mono text-[9px] md:text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold">
          2–3 WEEKS TO LIVE
        </div>
      </div>

      {/* Timeline Milestones */}
      <div className="space-y-3.5 flex-grow flex flex-col justify-center my-4">
        {milestones.map((m, idx) => {
          return (
            <div key={idx} className="border border-[#EAE8E3] rounded-xl bg-white p-3.5 shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${m.progress === 100 ? 'bg-[#9EC726]' : m.progress > 0 ? 'bg-amber-400 animate-pulse' : 'bg-gray-200'}`} />
                  <span className="text-[12px] md:text-[13px] font-bold text-[#1A1A1A]">{m.name}</span>
                </div>
                <span className="font-mono text-[9px] text-[#999999] uppercase font-bold">{m.days}</span>
              </div>
              
              {/* Progress bar container */}
              <div className="w-full h-1.5 bg-[#F5F5F0] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#0E0E0E] rounded-full"
                  initial={{ width: 0 }}
                  animate={isActive ? { width: `${m.progress}%` } : { width: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Guarantees footer */}
      <div className="grid grid-cols-2 gap-3 border-t border-[#EAE8E3] pt-4">
        <div className="flex items-center gap-2 bg-[#F5F5F0] rounded-lg px-3 py-1.5 border border-[#EAE8E3] justify-center">
          <svg className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="font-mono text-[9px] md:text-[10px] uppercase text-[#1A1A1A] font-bold truncate">Scope Locked</span>
        </div>
        <div className="flex items-center gap-2 bg-[#F5F5F0] rounded-lg px-3 py-1.5 border border-[#EAE8E3] justify-center">
          <svg className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="font-mono text-[9px] md:text-[10px] uppercase text-[#1A1A1A] font-bold truncate">Zero Surprises</span>
        </div>
      </div>
    </div>
  );
}

// ─── STEP 3: DESIGN & BUILD VISUAL WIDGET ────────────────────────────────────
function DesignVisual({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full h-full bg-[#FAF9F5] p-5 flex flex-col justify-between select-none overflow-hidden relative">
      {/* Design editor header */}
      <div className="flex items-center justify-between border-b border-[#EAE8E3] pb-3">
        <div className="flex items-center gap-1.5">
          <div className="flex gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
          <span className="font-mono text-[10px] md:text-[11px] text-[#5A5A50] ml-1.5 font-semibold">design_system.fig</span>
        </div>
        
        {/* Figma tools */}
        <div className="flex items-center gap-2 bg-[#EAE8E3] px-2 py-0.5 rounded-md text-[#5A5A50]">
          <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2z" />
          </svg>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" />
          </svg>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M12 19l7-7 3 3-10 10-3-3z" />
          </svg>
        </div>
      </div>

      {/* Editor Main Canvas with Wireframe -> Render transition */}
      <div className="flex-grow flex items-center justify-center relative w-full h-32 md:h-36 my-2">
        <div className="w-full max-w-[280px] border border-[#EAE8E3] rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.02)] relative overflow-hidden h-28 md:h-32 flex flex-col justify-between">
          
          {/* Blueprint vector grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#EAE8E3_1px,transparent_1px)] [background-size:12px_12px] opacity-40 pointer-events-none" />

          {/* Wireframe vs Code Split Render */}
          <div className="relative z-10 flex-grow flex flex-col justify-between h-full">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[8px] md:text-[9px] text-[#999999] uppercase font-bold">Layout Container</span>
              <span className="font-mono text-[8px] md:text-[9px] text-blue-500 font-bold">w: 100%</span>
            </div>
            
            <div className="my-1.5 p-2 border border-dashed border-blue-400 rounded-lg bg-blue-50/10 flex items-center justify-between">
              <div className="space-y-1 w-2/3">
                <div className="h-1.5 w-full bg-blue-200/50 rounded" />
                <div className="h-1.5 w-1/2 bg-blue-200/50 rounded" />
              </div>
              <motion.div 
                className="px-2 py-1 rounded bg-[#C9FE34] text-[8px] md:text-[9px] font-bold text-black border border-black/10 shadow-sm"
                animate={isActive ? {
                  scale: [1, 1.06, 1],
                } : { scale: 1 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                CTA Button
              </motion.div>
            </div>

            <div className="flex items-center justify-between border-t border-[#EAE8E3] pt-1 text-[8px] md:text-[9px] text-[#999999] font-mono">
              <span>padding: 16px</span>
              <span>radius: 12px</span>
            </div>
          </div>

          {/* Figma Cursor Animation */}
          <motion.div
            className="absolute z-20 pointer-events-none"
            animate={isActive ? {
              x: [40, 180, 40],
              y: [70, 30, 70],
            } : { x: 40, y: 70 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg className="w-5 h-5 text-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.5 3v15.3l4.7-4.7 5.8 5.8 2.6-2.6-5.8-5.8 5.8-.1L4.5 3z" />
            </svg>
            <div className="bg-[#00c2ff] text-white font-mono text-[7px] md:text-[8px] font-bold px-1 py-0.5 rounded ml-3 -mt-1 shadow">
              Senior Designer
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer bar */}
      <div className="flex items-center justify-between text-[9px] md:text-[10px] font-mono text-[#999999] border-t border-[#EAE8E3] pt-3">
        <span>FIGMA UI PROTOTYPES</span>
        <span>MOBILE-FIRST CODE</span>
      </div>
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
    <div className="w-full h-full bg-[#FAF9F5] p-5 flex flex-col justify-between select-none overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#EAE8E3] pb-3">
        <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider text-[#5A5A50] font-bold">
          Production Audit & Handoff
        </span>
        <div className="flex items-center gap-1.5 bg-[#E8FF8A] border border-[#BDEB19] text-black font-mono text-[9px] md:text-[10px] px-2 py-0.5 rounded-full font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>LIVE & ACTIVE</span>
        </div>
      </div>

      {/* Scores speedometer grid */}
      <div className="grid grid-cols-3 gap-2 flex-grow items-center justify-center my-2">
        {scores.map((s, idx) => {
          return (
            <div key={idx} className="flex flex-col items-center justify-center bg-white border border-[#EAE8E3] rounded-xl p-2 md:p-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.01)] h-[80px] md:h-[86px]">
              <div className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center mb-1">
                {/* SVG Radial Meter */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="22"
                    cy="22"
                    r="16"
                    className="stroke-[#F5F5F0]"
                    strokeWidth="3"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="22"
                    cy="22"
                    r="16"
                    className="stroke-[#9EC726]"
                    strokeWidth="3.2"
                    fill="transparent"
                    strokeDasharray={101}
                    initial={{ strokeDashoffset: 101 }}
                    animate={isActive ? { strokeDashoffset: 0 } : { strokeDashoffset: 101 }}
                    transition={{ duration: 1, delay: idx * 0.15, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute text-[10px] font-mono font-bold text-black">
                  100
                </div>
              </div>
              <span className="text-[8px] md:text-[9px] font-semibold text-[#5A5A50] text-center tracking-tight leading-tight line-clamp-1 w-full font-mono">
                {s.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Digital Handoff Folder */}
      <div className="border border-[#EAE8E3] bg-white rounded-xl p-2.5 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.01)] mt-1">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="w-7 h-7 rounded-lg bg-[#F5F5F0] border border-[#EAE8E3] flex items-center justify-center shrink-0">
            <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="text-left overflow-hidden">
            <p className="text-[10px] font-bold text-[#1A1A1A] truncate leading-normal">
              How-To-Update-Tutorial.mp4
            </p>
            <p className="text-[8px] font-mono text-[#999999] leading-none">
              TRAINING VIDEO VAULT
            </p>
          </div>
        </div>
        <button className="flex items-center justify-center w-6 h-6 rounded-full bg-[#C9FE34] hover:bg-[#E8FF8A] border border-black/10 transition-colors shadow-sm shrink-0">
          <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
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
    <section className="py-24 md:py-40 border-t border-[#EAE7DF] relative overflow-clip bg-rayvok-offwhite">
      {/* Background radial glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#C9FE34]/6 blur-[140px] top-[20%] left-[-150px] pointer-events-none" />
      
      <div className="w-full">
        {/* Section Header - Centered */}
        <div className="mb-24 md:mb-36 max-w-4xl mx-auto text-center flex flex-col items-center px-6 md:px-12">
          <p className="label text-[#5A5A55] rounded-lg bg-[#EAE8E3] border border-[#DEDAD0] inline-block px-4 py-1.5 mb-6">
            The process
          </p>
          <h2 className="text-[#1A1A1A] text-[38px] md:text-[54px] lg:text-[80px] leading-[1.1] tracking-tight font-display font-semibold text-center">
            From first message to <span className="text-[#999999]">live site</span> here&apos;s exactly what happens.
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
                    className="absolute inset-16 xl:inset-20 rounded-[24px] overflow-hidden border border-[#DEDAD0] bg-white shadow-[0_16px_48px_rgba(0,0,0,0.02)]"
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
