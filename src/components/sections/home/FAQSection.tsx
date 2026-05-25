"use client";

import { useState } from "react";

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
    <section className="py-32 px-6 md:px-12 bg-rayvok-deep border-t border-rayvok-surface">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16">
          <p className="label text-rayvok-mid rounded-lg bg-rayvok-surface/20 border border-rayvok-surface inline-block px-4 py-1.5 mb-6">FAQ</p>
          <h2 className="text-rayvok-offwhite text-[38px] md:text-[54px] lg:text-[80px] leading-[1.1] tracking-tight">
            Questions? <span className="text-rayvok-volt">Answered.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-rayvok-surface rounded-lg bg-rayvok-black overflow-hidden transition-colors hover:border-rayvok-surface/80"
            >
              <button 
                className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-rayvok-offwhite font-medium pr-8">{faq.q}</span>
                <span className={`text-rayvok-volt text-xl transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-rayvok-mid text-[15px] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
