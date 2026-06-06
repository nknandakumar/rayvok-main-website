"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function StairsPreloader() {
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock body scroll on mount
    document.documentElement.classList.add("lenis-stopped");
    document.body.style.overflow = "hidden";

    const counterObj = { value: 0 };
    const timeline = gsap.timeline({
      onComplete: () => {
        // Unlock scroll on preloader completion
        document.documentElement.classList.remove("lenis-stopped");
        document.body.style.overflow = "";
        setIsComplete(true);
        
        // Set global flag and dispatch event
        (window as any).__rayvokPreloaderComplete = true;
        window.dispatchEvent(new Event("preloaderComplete"));
      }
    });

    // 1. Initial fade-in and slide-up of text & percentage
    timeline.fromTo(
      [textRef.current, percentRef.current],
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: "power4.out" }
    );

    // 2. Count up percentage from 0 to 100
    timeline.to(counterObj, {
      value: 100,
      duration: 1.1,
      ease: "power2.out",
      onUpdate: () => {
        if (percentRef.current) {
          percentRef.current.innerText = `${Math.floor(counterObj.value)}%`;
        }
      }
    }, "-=0.45");

    // 3. Fade out text and percentage
    timeline.to([textRef.current, percentRef.current], {
      opacity: 0,
      y: -30,
      duration: 0.45,
      ease: "power3.in"
    });

    // 4. Slide up the stair columns
    timeline.to(".stair-col", {
      yPercent: -100,
      duration: 0.85,
      stagger: 0.08,
      ease: "power4.inOut"
    }, "-=0.15");

    // 5. De-allocate container from rendering/interacting
    timeline.to(containerRef.current, {
      display: "none",
      duration: 0
    });

    return () => {
      // Safety unlock on unmount
      document.documentElement.classList.remove("lenis-stopped");
      document.body.style.overflow = "";
    };
  }, []);

  if (isComplete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col justify-between"
    >
      {/* 5 Vertical Stair Columns */}
      <div className="absolute inset-0 flex flex-row pointer-events-none z-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="stair-col w-[20vw] h-full bg-rayvok-volt border-r border-black/[0.03]"
          />
        ))}
      </div>

      {/* Intro Text & Counter */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
        <div className="overflow-hidden mb-3">
          <div
            ref={textRef}
            className="font-display font-semibold text-[44px] md:text-[64px] lg:text-[80px] uppercase tracking-[0.2em] text-[#0E0E0E]  leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            RAYVOK
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            ref={percentRef}
            className="font-mono text-[#0E0E0E]  text-[26px] md:text-[46px] tracking-[0.25em] font-medium uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            0%
          </div>
        </div>
      </div>
    </div>
  );
}
