"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paddingLeft, setPaddingLeft] = useState("24px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Aligns the text left margin perfectly with the centered 1280px container
        const calculated = Math.max(48, (window.innerWidth - 1280) / 2 + 48);
        setPaddingLeft(`${calculated}px`);
      } else if (window.innerWidth >= 768) {
        setPaddingLeft("48px"); // md:px-12
      } else {
        setPaddingLeft("24px"); // px-6
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const steps = [
    {
      num: "01",
      title: "Discovery call",
      description: "We talk about your business, your goals, and what success looks like. 30 minutes. No sales pitch.",
      deliverables: [
        "30-minute high-alignment conversation",
        "Deconstruction of current website issues",
        "Clarity on business goals & success metrics"
      ],
      image: "/images/process_step1_discovery.png"
    },
    {
      num: "02",
      title: "Strategy & proposal",
      description: "You get a clear scope, timeline, and fixed price. No surprises, no scope creep, no hidden costs.",
      deliverables: [
        "Detailed website strategy map",
        "Fixed-price quote & milestone breakdown",
        "Clear 3-6 week launch schedule"
      ],
      image: "/images/process_step2_strategy.png"
    },
    {
      num: "03",
      title: "Design & build",
      description: "We design, you review. We build, you test. Two rounds of revisions included — you'll love it before it goes live.",
      deliverables: [
        "High-fidelity Figma UI prototypes",
        "Mobile-first responsive development",
        "Buttery smooth animations & transitions"
      ],
      image: "/images/process_step3_design.png"
    },
    {
      num: "04",
      title: "Launch & handoff",
      description: "We launch, you own it. Full handoff with training. Most projects go live in 3–6 weeks.",
      deliverables: [
        "Production-ready website launch",
        "SEO optimization & performance check",
        "Recorded custom video tutorials for updates"
      ],
      image: "/images/process_step4_launch.png"
    }
  ];

  return (
    <section className="py-24 md:py-40 border-t border-[#EAE7DF] relative overflow-clip bg-[#FAF8F5]">
      {/* Background radial glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#C9FE34]/6 blur-[140px] top-[20%] left-[-150px] pointer-events-none" />
      
      <div className="w-full">
        {/* Section Header - Centered */}
        <div className="mb-24 md:mb-36 max-w-4xl mx-auto text-center flex flex-col items-center px-6 md:px-12">
          <p className="label text-[#5A5A55] rounded-lg bg-[#EAE8E3] border border-[#DEDAD0] inline-block px-4 py-1.5 mb-6">
            The process
          </p>
          <h2 className="text-[#1A1A1A] text-[38px] md:text-[54px] lg:text-[80px] leading-[1.1] tracking-tight font-display font-semibold text-center">
            From first message to <span className="text-[#999999]">live site</span> — here's exactly what happens.
          </h2>
        </div>

        {/* Full-Bleed Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start w-full">
          
          {/* Left Column: Scrollable Steps */}
          <div 
            className="lg:col-span-6 flex flex-col pb-[20vh] pr-6 md:pr-12 lg:pr-24"
            style={{ paddingLeft }}
          >
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
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[#5A5A50] text-[14px] font-semibold uppercase tracking-wider">
                    • STEP {step.num}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-[#1A1A1A] text-[28px] md:text-[36px] font-display font-medium tracking-tight mb-6">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[#5C5C57] text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-xl">
                  {step.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-4">
                  <p className="font-ui text-[12px] uppercase tracking-wider text-[#8C8C85] font-semibold mb-2">
                    You'll walk away with:
                  </p>
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
                <div className="mt-12 bg-rayvok-volt lg:hidden -mx-6 md:-mx-12 aspect-[4/3] sm:aspect-[16/9] relative bg-[#F5F3EE] border-t border-b border-[#DEDAD0] flex items-center justify-center p-6 sm:p-12">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#DEDAD0] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.02)]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Sticky Visual Container - Full Viewport Height and Bleeds to the Right Screen Border */}
          <div className="hidden lg:block lg:col-span-6 bg-rayvok-volt sticky top-0 h-screen w-full overflow-hidden border-l border-[#DEDAD0] bg-[#F5F3EE]">
            {/* Visual Panel wrapper */}
            <div className="relative w-full h-full p-16 flex items-center justify-center">
              
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
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="50vw"
                      className="object-cover transition-transform duration-700 ease-out"
                      style={{ transform: isActive ? "scale(1)" : "scale(1.04)" }}
                      priority
                    />
                    
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
