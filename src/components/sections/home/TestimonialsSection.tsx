"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { getTestimonials, fallbackTestimonials, SanityTestimonial as Testimonial } from "@/sanity/client";

function FeedbackCard({ testimonial }: { testimonial: Testimonial }) {
  const combinedText = `"${testimonial.before} ${testimonial.during} ${testimonial.after}"`;
  return (
    <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8 md:p-10 min-h-[320px] flex flex-col h-full transition-all duration-300 hover:border-white/10">
      {/* Top: Stars */}
      <div className="flex items-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Middle: Testimonial Text */}
      <div className="mb-8 flex-grow">
        <p className="text-[#E5E5E5] text-[16px] md:text-[17px] leading-[1.7] font-medium tracking-tight">
          {combinedText}
        </p>
      </div>

      {/* Bottom: Avatar and Info */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="relative w-10 h-10 rounded-md overflow-hidden shrink-0 border border-white/10 bg-white/5 flex items-center justify-center p-1">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            fill
            sizes="40px"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-[#F5F5F0] text-[15px] font-semibold leading-tight">
            {testimonial.author}
          </h4>
          <p className="text-[#A3A3A3] text-[13px] mt-0.5">
            {testimonial.company || testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Eyebrow reveal trigger
      gsap.fromTo(".testimonials-eyebrow",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonials-eyebrow",
            start: "top 88%",
            toggleActions: "play none none reset"
          }
        }
      );

      // Heading reveal trigger
      gsap.fromTo(".testimonials-heading",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonials-heading",
            start: "top 88%",
            toggleActions: "play none none reset"
          }
        }
      );

      // Cards reveal trigger
      gsap.fromTo(".testimonial-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonials-grid",
            start: "top 85%",
            toggleActions: "play none none reset"
          }
        }
      );
    }
  }, []);

  useEffect(() => {
    let active = true;
    getTestimonials().then((data) => {
      if (active && data && data.length > 0) {
        setTestimonials(data);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="testimonials" className="py-32 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <div className="overflow-hidden mb-6">
            <p
              className="testimonials-eyebrow label text-[#A3A3A3] rounded-lg bg-[#1A1A1A] border border-white/10 inline-block px-4 py-1.5 font-mono opacity-0"
            >
              What clients say
            </p>
          </div>
          <div className="overflow-hidden">
            <h2
              className="testimonials-heading text-white text-[32px] md:text-[54px] lg:text-[80px] leading-[1.1] tracking-tight opacity-0"
            >
              Don&apos;t take our <span className="text-[#8C8A82]">word for it.</span>
            </h2>
          </div>
        </div>

        {/* Static Grid Layout for Testimonials */}
        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, idx) => (
            <div key={idx} className="testimonial-card opacity-0">
              <FeedbackCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
