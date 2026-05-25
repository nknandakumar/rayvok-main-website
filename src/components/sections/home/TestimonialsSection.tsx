"use client";

import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Before Rayvok, our website looked like we were a side project. Within two weeks of the new site going live, we had three qualified leads reach out — more than the entire previous quarter.",
      author: "Arjun",
      role: "Founder",
      company: "SaaS Platform",
      featured: true
    },
    {
      quote: "Nanda doesn't just build what you ask for — he tells you what you actually need. The process was clear, fast, and the result was better than I imagined.",
      author: "Meera",
      role: "Creative Director",
      company: "Architecture Studio",
      featured: false
    },
    {
      quote: "I was hesitant because I'd been disappointed by agencies before. Rayvok was completely different — transparent, direct, and the website actually gets us enquiries now.",
      author: "Kiran",
      role: "CEO",
      company: "Consulting Firm",
      featured: false
    }
  ];

  return (
    <section id="testimonials" className="py-32 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#EAE7DF] relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-blue-100/30 blur-[100px] bottom-[-100px] right-[-50px] pointer-events-none" />

      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="overflow-hidden mb-6">
            <motion.p 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
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
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#1A1A1A] text-[38px] md:text-[54px] lg:text-[80px] leading-[1.1] tracking-tight"
            >
              Don't take our <span className="text-[#8C8A82]">word for it.</span>
            </motion.h2>
          </div>
        </div>

        {/* Testimonials Layout: Staggered/Bento grids */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          
          {/* Main Featured Testimonial (spans 6 cols on top) */}
          {testimonials.filter(t => t.featured).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-6 bg-white border border-[#EAE7DF] rounded-[28px] p-8 md:p-14 shadow-[0_15px_45px_rgba(0,0,0,0.015)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-10"
            >
              <div className="md:w-2/3">
                <span className="font-mono text-rayvok-volt bg-rayvok-black px-3 py-1 rounded-md text-[18px] font-bold inline-block mb-6 shadow">
                  “
                </span>
                <p className="text-[#1A1A1A] text-[20px] md:text-[25px] font-display font-medium leading-[1.25] tracking-tight mb-4">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author Badge Details */}
              <div className="md:w-1/3 md:border-l border-[#EAE7DF] md:pl-12 flex flex-col justify-center">
                <h4 className="text-[#1A1A1A] text-[18px] font-display font-semibold mb-1 text-reveal-hover">
                  <span className="text-reveal-inner flex flex-col">
                    <span>{testimonial.author}</span>
                    <span className="text-rayvok-volt bg-rayvok-black px-1.5 py-0.5 rounded text-[15px] font-mono">{testimonial.author}</span>
                  </span>
                </h4>
                <p className="font-mono text-[#8C8A82] text-[12px] uppercase tracking-wider font-semibold">
                  {testimonial.role} &middot; {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Sub Testimonials (spans 3 cols each below) */}
          {testimonials.filter(t => !t.featured).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 * (index + 1), ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-3 bg-white border border-[#EAE7DF] rounded-[28px] p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.012)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.035)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-rayvok-volt bg-rayvok-black px-2.5 py-0.5 rounded text-[15px] font-bold inline-block mb-6 shadow-sm">
                  “
                </span>
                <p className="text-[#3A3A35] text-[15px] lg:text-[16px] leading-relaxed mb-8">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author details */}
              <div className="border-t border-[#FAF8F5] pt-6">
                <h4 className="text-[#1A1A1A] text-[16px] font-display font-semibold mb-0.5 text-reveal-hover">
                  <span className="text-reveal-inner flex flex-col">
                    <span>{testimonial.author}</span>
                    <span className="text-rayvok-volt bg-rayvok-black px-1.5 py-0.5 rounded text-[13px] font-mono">{testimonial.author}</span>
                  </span>
                </h4>
                <p className="font-mono text-[#8C8A82] text-[11px] uppercase tracking-wider font-semibold">
                  {testimonial.role} &middot; {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
