"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Testimonial = {
  author: string;
  role: string;
  company: string;
  avatar: string;
  before: string;
  during: string;
  after: string;
};

function FeedbackCard({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) {
  const combinedText = `${testimonial.before} ${testimonial.during} ${testimonial.after}`;
  return (
    <div className={`bg-[#121212] border border-white/5 rounded-2xl p-8 md:p-12 min-h-[320px] flex flex-col justify-between h-full select-none transition-all duration-500
      ${isActive 
        ? "shadow-[0_40px_80px_-20px_rgba(0,0,0,0.38)]" 
        : "shadow-none"
      }
    `}>
      <div>
        {/* Elegant Quotation Mark Icon */}
        <div className="text-[#C9FE34] text-[64px] font-serif leading-none h-6 select-none pointer-events-none opacity-40">
          &ldquo;
        </div>
        <p className="text-[#FAF8F5] text-[16px] md:text-[20px] lg:text-[22px] leading-[1.6] font-display font-medium tracking-tight mb-8">
          {combinedText}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-[12px] overflow-hidden shrink-0 border border-white/10">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-[#FAF8F5] text-[18px] font-display font-medium leading-tight">
            {testimonial.author}
          </h4>
          <p className="font-ui text-[#dddbd2] text-[11px] uppercase tracking-wider mt-1">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Start at index 1 (cloned last item is index 0)
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleResize = () => {
      setContainerWidth(containerRef.current?.offsetWidth || 0);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    }
  }, []);

  const testimonials: Testimonial[] = [
    {
      author: "Arjun",
      role: "Founder",
      company: "SaaS Platform",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120",
      before: "Our old website looked like a side project and serious visitors were not turning into booked calls.",
      during: "Rayvok rebuilt the site around the offer, clarified the message, and kept every review round focused.",
      after: "Within two weeks of launch, three qualified leads reached out, more than the entire previous quarter."
    },
    {
      author: "Meera",
      role: "Creative Director",
      company: "Architecture Studio",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120",
      before: "The studio portfolio had strong work, but the website did not explain our process or build trust quickly.",
      during: "The new pages were shaped around our best projects, client questions, and a cleaner consultation flow.",
      after: "We now send prospects to the site with confidence, and enquiries come in with much better context."
    },
    {
      author: "Kiran",
      role: "CEO",
      company: "Consulting Firm",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120",
      before: "We had been disappointed by agencies before and our website was not creating enough sales conversations.",
      during: "The process was direct, transparent, and focused on what our buyers needed to understand before contacting us.",
      after: "The website finally explains our value clearly and brings in enquiries that are easier to qualify."
    }
  ];

  // Extend the testimonials array to support infinite scrolling
  const extendedTestimonials = [
    testimonials[testimonials.length - 1], // Cloned last item at index 0
    ...testimonials,                       // Real items at index 1 to N
    testimonials[0]                        // Cloned first item at index N + 1
  ];

  const handleNext = () => {
    if (!shouldAnimate) return;
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!shouldAnimate) return;
    setActiveIndex((prev) => prev - 1);
  };

  const handleAnimationComplete = () => {
    if (activeIndex === testimonials.length + 1) {
      setShouldAnimate(false);
      setActiveIndex(1);
    } else if (activeIndex === 0) {
      setShouldAnimate(false);
      setActiveIndex(testimonials.length);
    }
  };

  useEffect(() => {
    if (!shouldAnimate) {
      const raf = requestAnimationFrame(() => {
        setShouldAnimate(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [shouldAnimate]);

  const isMobile = containerWidth < 768;
  const cardWidth = isMobile ? Math.min(containerWidth - 60, 320) : 650;
  const gap = isMobile ? 16 : 32;

  // Track offset to center the active card
  const xOffset = containerWidth > 0 
    ? (containerWidth / 2) - (cardWidth / 2) - activeIndex * (cardWidth + gap)
    : 0;

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrev();
    }
  };

  return (
    <section id="testimonials" className="py-32 px-6 md:px-12 bg-rayvok-offwhite relative overflow-hidden">
      <div className="absolute w-[350px] h-[350px] rounded-full bg-blue-100/20 blur-[100px] bottom-[-100px] right-[-50px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <div className="overflow-hidden mb-6">
            <p
              className="testimonials-eyebrow label text-[#8C8A82] rounded-lg bg-[#FFFFFF] border border-[#E1DDD5] inline-block px-4 py-1.5 font-mono opacity-0"
            >
              What clients say
            </p>
          </div>
          <div className="overflow-hidden">
            <h2
              className="testimonials-heading text-[#1A1A1A] text-[32px] md:text-[54px] lg:text-[80px] leading-[1.1] tracking-tight opacity-0"
            >
              Don&apos;t take our <span className="text-[#8C8A82]">word for it.</span>
            </h2>
          </div>
        </div>

        {/* Slider Viewport Container */}
        <div 
          ref={containerRef} 
          className="relative w-full overflow-hidden py-4 select-none"
        >
          {/* Gradient Overlay Masks for seamless fading on left & right */}
          <div className="absolute top-0 bottom-0 left-0 w-8 md:w-48 bg-gradient-to-r from-[#F5F5F0] via-[#F5F5F0]/80 to-transparent pointer-events-none z-20" />
          <div className="absolute top-0 bottom-0 right-0 w-8 md:w-48 bg-gradient-to-l from-[#F5F5F0] via-[#F5F5F0]/80 to-transparent pointer-events-none z-20" />

          <motion.div
            className="flex items-stretch cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            animate={{ x: xOffset }}
            transition={shouldAnimate ? { type: "spring", stiffness: 300, damping: 30 } : { duration: 0 }}
            onAnimationComplete={handleAnimationComplete}
            style={{ 
              gap: `${gap}px`, 
              width: `${extendedTestimonials.length * cardWidth + (extendedTestimonials.length - 1) * gap}px` 
            }}
          >
            {extendedTestimonials.map((testimonial, idx) => {
              const isActive = idx === activeIndex;
              return (
                <motion.div
                  key={idx}
                  className="shrink-0 transition-all duration-500 ease-out"
                  style={{ 
                    width: `${cardWidth}px`,
                  }}
                  animate={{
                    scale: isActive ? 1 : 0.92,
                    opacity: isActive ? 1 : 0.35,
                    filter: isActive ? "blur(0px)" : "blur(1px)",
                  }}
                  onClick={() => {
                    if (!shouldAnimate) return;
                    if (!isActive) {
                      setActiveIndex(idx);
                    }
                  }}
                >
                  <FeedbackCard testimonial={testimonial} isActive={isActive} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-16">
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-12 h-12 border border-[#DEDAD0] bg-white flex items-center justify-center text-[#1A1A1A] hover:bg-[#C9FE34] hover:border-[#BDEB19] hover:text-[#0E0E0E] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] cursor-pointer group"
          >
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="w-12 h-12 border border-[#DEDAD0] bg-white flex items-center justify-center text-[#1A1A1A] hover:bg-[#C9FE34] hover:border-[#BDEB19] hover:text-[#0E0E0E] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] cursor-pointer group"
          >
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
