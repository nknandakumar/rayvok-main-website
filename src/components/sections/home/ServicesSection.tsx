"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      num: "01",
      title: "Website Design",
      description: "A website that makes your ideal client stop, trust you instantly, and reach out — designed from strategy, not templates.",
      features: [
        "UI/UX design",
        "Responsive layout",
        "Brand-aligned visuals",
        "CTA architecture",
      ],
      image: "https://i.pinimg.com/736x/1d/43/35/1d4335e99b360da547b69887a8c22fff.jpg",
      objectPosition: "object-top",
      objectFit: "object-cover",
      imagePadding: ""
    },
    {
      num: "02",
      title: "Web Development",
      description: "Fast, clean, and built to perform — not just look good. Every site we build is optimised for speed, SEO, and conversion from the first line of code.",
      features: [
        "Custom build",
        "CMS integration",
        "Mobile-first",
        "Core Web Vitals optimised",
      ],
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1779550626/4e8e9846-d7fc-4a0f-a287-b7cf5dd11b92_fqlysj.png",
      objectPosition: "object-center",
      objectFit: "object-cover",
      imagePadding: ""
    },
    {
      num: "03",
      title: "Landing Pages",
      description: "One page. One goal. Maximum conversions. Built for product launches, campaigns, and lead generation that need to perform from day one.",
      features: [
        "Single-goal architecture",
        "A/B test ready",
        "Fast turnaround (1–2 weeks)",
        "Analytics-ready",
      ],
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1779550784/ee4d380f-9de6-466e-8759-8b06ef8393a2.png",
      objectPosition: "object-top",
      objectFit: "object-cover",
      imagePadding: ""
    }
  ];

  // GSAP ScrollTrigger Scroll Transition setup
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.to(sectionRef.current, {
          "--sec-bg": "#FAF9F5",
          "--card-bg": "#FFFFFF",
          "--card-border": "#EAE7DF",
          "--text-primary": "#1A1A1A",
          "--text-secondary": "#5C5C57",
          "--text-accent": "#3A3A3A",
          "--label-bg": "#EAE8E3",
          "--label-border": "#DEDAD0",
          "--label-text": "#5A5A55",
          "--divider": "#E6E2D8",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 25%",
            scrub: true,
          }
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-32 px-6 md:px-12 relative bg-rayvok-offwhite overflow-hidden"
      style={{
        backgroundColor: "var(--sec-bg)",
        // Set initial dark theme styles on render to prevent layout flash before GSAP loads
        "--sec-bg": "#0E0E0E",
        "--card-bg": "#121212",
        "--card-border": "rgba(255, 255, 255, 0.05)",
        "--text-primary": "#F5F5F0",
        "--text-secondary": "#8C8A82",
        "--text-accent": "#B0AFAB",
        "--label-bg": "rgba(255, 255, 255, 0.05)",
        "--label-border": "rgba(255, 255, 255, 0.1)",
        "--label-text": "#A19E95",
        "--divider": "rgba(255, 255, 255, 0.05)"
      } as React.CSSProperties}
    >
      {/* Background Accents */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#C9FE34]/5 blur-[140px] top-[-100px] right-[-100px] -z-10 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-900/10 blur-[120px] bottom-[-50px] left-[-100px] -z-10 pointer-events-none" />

      <div className="container flex flex-col items-center justify-center mx-auto relative z-10">
        {/* Eyebrow & Headline with entrance reveals */}
        <div className="mb-24 text-center max-w-4xl">
          <div className="overflow-hidden mb-6 flex justify-center">
            <motion.p 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="label inline-block px-4 py-1.5 font-mono rounded-lg border"
              style={{
                color: "var(--label-text)",
                backgroundColor: "var(--label-bg)",
                borderColor: "var(--label-border)"
              }}
            >
              What we build
            </motion.p>
          </div>
          
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[38px] md:text-[54px] lg:text-[80px] leading-[1.1] tracking-tight font-display font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Everything your business needs to show up and convert.
            </motion.h2>
          </div>
        </div>

        {/* Large Vertical Stack of Premium Services */}
        <div className="flex flex-col gap-12 w-full max-w-[1300px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-[32px] overflow-hidden transition-all duration-500 shadow-[0_24px_60px_rgba(0,0,0,0.15)] relative border"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)"
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-stretch">
                {/* Left Column: Visual/Graphic Showcase (Real Images) */}
                <div 
                  className="lg:col-span-6 relative overflow-hidden bg-[#181818] min-h-[240px] sm:min-h-[350px] lg:min-h-[550px] border-b lg:border-b-0 lg:border-r"
                  style={{ borderColor: "var(--card-border)" }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`${service.objectFit} ${service.objectPosition} ${service.imagePadding} transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105`}
                  />
                  {/* Premium overlay gradient for dark blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent mix-blend-multiply opacity-90 transition-opacity duration-500 group-hover:opacity-75 z-10 pointer-events-none" />
                </div>

                {/* Right Column: Clean Content */}
                <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                  <div>
                    <h3 
                      className="text-[32px] lg:text-[40px] font-display font-medium tracking-tight mb-6 leading-tight group-hover:text-[#C9FE34] transition-colors duration-300"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p 
                      className="text-[16px] lg:text-[17px] leading-relaxed mb-10 max-w-xl font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div>
                    {/* Divider with hover reveal animation */}
                    <div 
                      className="w-full h-[1px] mb-8 relative overflow-hidden"
                      style={{ backgroundColor: "var(--divider)" }}
                    >
                      <div className="absolute top-0 left-0 w-full h-full bg-[#C9FE34] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </div>

                    {/* Features List (Removed green bullet check circles) */}
                    <ul className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-4">
                      {service.features.map((feature, fIndex) => (
                        <li 
                          key={fIndex} 
                          className="text-[14px] font-ui font-medium"
                          style={{ color: "var(--text-accent)" }}
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
