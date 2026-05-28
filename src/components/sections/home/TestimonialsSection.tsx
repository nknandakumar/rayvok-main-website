"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Testimonial = {
  author: string;
  role: string;
  company: string;
  avatar: string;
  before: string;
  during: string;
  after: string;
};

function FeedbackCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-[#121212] border border-white/5  p-8 md:p-12 shadow-[0_16px_40px_rgba(0,0,0,0.3)] min-h-[340px] md:min-h-[280px] flex flex-col justify-between">
      <div className="flex items-center gap-4 mb-8">
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
          <p className="font-ui text-[#dddbd2] text-[11px] uppercase tracking-wider  mt-1">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>

      <div className="grid gap-5">
        {[
          ["Before", testimonial.before],
          ["During", testimonial.during],
          ["After", testimonial.after]
        ].map(([label, text]) => (
          <div key={label} className="grid gap-2">
            <p className="font-ui text-[#FF4D00] text-[11px] uppercase tracking-wider">
              {label}
            </p>
            <p className="text-[#FAF8F5] text-[18px] lg:text-[22px] leading-[1.4] font-display font-medium tracking-tight">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <section id="testimonials" className="py-32 px-6 md:px-12 bg-rayvok-offwhite  relative overflow-hidden">
      <div className="absolute w-[350px] h-[350px] rounded-full bg-blue-100/20 blur-[100px] bottom-[-100px] right-[-50px] pointer-events-none" />

      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <div className="overflow-hidden mb-6">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="label text-[#8C8A82] rounded-lg bg-[#EAE8E3] border border-[#E1DDD5] inline-block px-4 py-1.5 font-mono"
            >
              What clients say
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#1A1A1A] text-[32px] md:text-[54px] lg:text-[80px] leading-[1.1] tracking-tight"
            >
              Don&apos;t take our <span className="text-[#8C8A82]">word for it.</span>
            </motion.h2>
          </div>
        </div>

        <div className="relative w-full max-w-[850px] mx-auto overflow-hidden">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 350, damping: 30 },
                opacity: { duration: 0.25 }
              }}
            >
              <FeedbackCard testimonial={activeTestimonial} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-12 h-12  border border-[#DEDAD0] bg-white flex items-center justify-center text-[#1A1A1A] hover:bg-[#C9FE34] hover:border-[#BDEB19] hover:text-[#0E0E0E] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] cursor-pointer group"
          >
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="w-12 h-12  border border-[#DEDAD0] bg-white flex items-center justify-center text-[#1A1A1A] hover:bg-[#C9FE34] hover:border-[#BDEB19] hover:text-[#0E0E0E] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] cursor-pointer group"
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
