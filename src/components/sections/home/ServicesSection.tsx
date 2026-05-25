"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ServicesSection() {
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

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-[#0E0E0E]  relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#C9FE34]/5 blur-[140px] top-[-100px] right-[-100px] -z-10 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-900/10 blur-[120px] bottom-[-50px] left-[-100px] -z-10 pointer-events-none" />

      <div className="container flex flex-col items-center justify-center mx-auto">
        {/* Eyebrow & Headline with entrance reveals */}
        <div className="mb-24 text-center max-w-4xl">
          <div className="overflow-hidden mb-6">
            <motion.p 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="label text-[#A19E95] bg-white/5 border border-white/10 inline-block px-4 py-1.5 font-mono rounded-lg"
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
              className="text-[#F5F5F0] text-[38px] md:text-[54px] lg:text-[80px] leading-[1.1] tracking-tight"
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
              className="group bg-[#121212] border border-white/5 hover:border-white/10 rounded-[32px] overflow-hidden transition-all duration-500 shadow-[0_24px_60px_rgba(0,0,0,0.3)] relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-stretch">
                {/* Left Column: Visual/Graphic Showcase (Real Images) */}
                <div className="lg:col-span-6 relative overflow-hidden bg-[#181818] min-h-[380px] sm:min-h-[450px] lg:min-h-[550px] border-b lg:border-b-0 lg:border-r border-white/5">
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
             

                    <h3 className="text-[#F5F5F0] text-[32px] lg:text-[40px] font-display font-medium tracking-tight mb-6 leading-tight group-hover:text-[#C9FE34] transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-[#8C8A82] text-[16px] lg:text-[17px] leading-relaxed mb-10 max-w-xl">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    {/* Divider with hover reveal animation */}
                    <div className="w-full h-[1px] bg-white/5 mb-8 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-[#C9FE34] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </div>

                    {/* Features List */}
                    <ul className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-4 mb-4">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3 text-[#B0AFAB] text-[14px] font-ui">
                          <div className="flex items-center justify-center w-4 h-4 rounded-full bg-[#C9FE34] shrink-0">
                            <svg className="w-2.5 h-2.5 text-[#0E0E0E]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>{feature}</span>
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
