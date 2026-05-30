"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import ButtonCTA from "@/components/ui/ButtonCTA";

export default function FinalCTASection() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Heading reveal trigger
      gsap.fromTo(".cta-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-heading",
            start: "top 88%",
            toggleActions: "play none none reset"
          }
        }
      );

      // Stagger elements inside CTA details
      gsap.fromTo(".cta-content > *",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".cta-content",
            start: "top 88%",
            toggleActions: "play none none reset"
          }
        }
      );
    }
  }, []);

  return (
    <section className="py-28 md:py-30 px-6 md:px-12  text-center bg-rayvok-offwhite relative md:h-screen overflow-hidden">
      {/* Soft warm background radial accent */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-[#C9FE34]/5 blur-[120px] bottom-[-200px] left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto pt-10 max-w-4xl relative z-10 flex flex-col justify-center items-center">
        <h2 className="cta-heading text-[#1A1A1A] text-[24px] md:text-[56px] lg:text-[46px] leading-[1.1] tracking-tight font-display  mb-6 opacity-0">
          Your business deserves<br />
          a presence that works as hard as you do.<br />
          <span className="text-[#999999]">Let&apos;s build it together</span>
        </h2>
       

        {/* Dynamic primary pill CTA button matching screenshot styling */}
        <div className="cta-content flex flex-col items-center gap-6">
          <div className="opacity-0">
            <ButtonCTA 
              href="/start" 
            >
              Let&apos;s collaborate
            </ButtonCTA>
          </div>
          
          <div className="space-y-1.5 mt-2 opacity-0">
            <p className="caption text-[#8C8C85] tracking-wide uppercase font-semibold">
              Free 30-min discovery call &middot; No commitment
            </p>
            <p className="text-[#8C8C85] text-[13px]">
              Or email directly: <a href="mailto:hello@rayvok.com" className="text-[#1A1A1A] hover:text-[#C9FE34] transition-colors font-medium">hello@rayvok.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}