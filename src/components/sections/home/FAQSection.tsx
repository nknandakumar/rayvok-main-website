"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function FAQSection() {
  const faqs = [
    {
      q: "How long does a project take?",
      a: "Most projects go from kickoff to launch in 3–6 weeks. Landing pages are typically 1–2 weeks. Timeline depends on your feedback speed as much as ours."
    },
    {
      q: "What does it cost?",
      a: "Projects start from ₹20,000. Final pricing depends on scope — you'll get a fixed quote before we start. No hourly billing. No surprise invoices."
    },
    {
      q: "Do you work with early-stage businesses?",
      a: "Yes. Some of our best work has been for businesses in their first year. A strong web presence from day one is an advantage, not a luxury."
    },
    {
      q: "What do I need to provide?",
      a: "Your goals, your brand assets (logo, colors if you have them), and your content (text and images). Don't have everything? We'll guide you through what we need."
    },
    {
      q: "What platform do you build on?",
      a: "We work with Next.js, Framer, and custom HTML/CSS/JS depending on what suits your project best. Every build is fast, responsive, and easy for you to manage after handoff."
    },
    {
      q: "What happens after launch?",
      a: "You get a full handoff — files, access, and a walkthrough so you can manage the site yourself. Optional support packages available for ongoing updates."
    },
    {
      q: "Do you only do websites?",
      a: "For now, yes — web design and development is our focus and we do it exceptionally well. More services coming as Rayvok grows."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-36 px-6 md:px-12 bg-rayvok-deep border-t border-rayvok-surface relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-rayvok-volt/2 blur-[120px] bottom-[-150px] left-[-150px] pointer-events-none" />

      <div className="container mx-auto max-w-[1300px]">
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start justify-start ">
          
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky -mt-10">
            <p className="label text-rayvok-mid rounded-lg bg-rayvok-surface/20 border border-rayvok-surface inline-block px-4 py-1.5 mb-6">
              FAQ
            </p>
            <h2 className="text-rayvok-offwhite text-[38px] md:text-[54px] lg:text-[64px] xl:text-[80px] leading-[1.1] tracking-tight font-display font-semibold mb-6">
              Questions? <span className="text-rayvok-volt">Answered.</span>
            </h2>
            <p className="text-rayvok-mid text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-md">
              We're here for you ⚡ Have a specific question not covered here? Reach out to us.
            </p>
            <Link href="/start" className="btn-primary">
              Book a Call
            </Link>
          </div>

          {/* Right Column: Accordion stack separated by thin border dividers */}
          <div className="lg:col-span-7 border-t border-rayvok-surface">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="border-b border-rayvok-surface transition-all duration-300 group"
                >
                  <button 
                    className="w-full text-left py-6 flex justify-between items-center focus:outline-none bg-transparent cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-rayvok-offwhite font-display font-medium text-[16px] md:text-[20px] pr-8 group-hover:text-rayvok-volt transition-colors duration-300 leading-snug">
                      {faq.q}
                    </span>
                    
                    {/* Immersive circular button toggle */}
                    <div 
                      className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen 
                          ? "bg-rayvok-volt border-rayvok-volt text-rayvok-black" 
                          : "border-rayvok-surface text-rayvok-mid group-hover:border-rayvok-volt group-hover:text-rayvok-volt"
                      }`}
                    >
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </button>

                  {/* Dynamic smooth slide animation for Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-rayvok-mid text-[15px] leading-relaxed pb-6 max-w-2xl">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
