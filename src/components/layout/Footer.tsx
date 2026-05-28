"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from './Navigation';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  // GSAP ScrollTrigger Scroll Transition setup
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.to(footerRef.current, {
          "--footer-bg": "#000000",
          "--footer-text-primary": "#FFFFFF",
          "--footer-text-hover": "#FFFFFF",
          "--footer-border": "rgba(255, 255, 255, 0.05)",
          "--footer-btn-bg": "#FFFFFF",
          "--footer-btn-text": "#000000",
          "--footer-social-border": "rgba(255, 255, 255, 0.1)",
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            end: "top 45%",
            scrub: true,
          }
        });
      }, footerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="pt-20 pb-12 relative overflow-hidden w-full border-t transition-colors duration-150"
      style={{
        backgroundColor: "var(--footer-bg)",
        color: "var(--footer-text-primary)",
        borderColor: "var(--footer-border)",
        "--footer-bg": "#FAF8F5",
        "--footer-text-primary": "#1A1A1A",
        "--footer-text-hover": "#1A1A1A",
        "--footer-border": "#EAE7DF",
        "--footer-btn-bg": "#000000",
        "--footer-btn-text": "#FFFFFF",
        "--footer-social-border": "rgba(0, 0, 0, 0.1)",
      } as React.CSSProperties}
    >
      <div className="container mx-auto px-6 md:px-12">
        
        {/* ========================================================================= */}
        {/* DESKTOP & TABLET LAYOUT (>= 768px)                                        */}
        {/* ========================================================================= */}
        <div className="hidden md:block">
          {/* Top Part: split columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-24 items-start">
            {/* Brand Tagline & CTA Button (Left Side) */}
            <div className="md:col-span-6 lg:col-span-7 flex flex-col items-start">
              {/* Favicon Icon above wordmark */}
              <div className="flex flex-row gap-2" >
                <Image
                  src="https://res.cloudinary.com/dokrpo5fl/image/upload/w_128,h_128,c_fill,r_24/RaccentLogo_hadt1o.png"
                  alt="Rayvok Favicon"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-cover rounded-full mb-4"
                />
                {/* Wordmark Logo */}
                <span 
                  className="font-display font-bold text-4xl tracking-tight mb-6 transition-colors duration-150"
                  style={{ color: "var(--footer-text-primary)" }}
                >
                  Rayvok
                </span>
              </div>
            
              <p className="text-[#8C8C85] font-body text-[16px] md:text-[18px] leading-relaxed max-w-md">
                Web design & development for B2B SaaS, products, and professionals.
                Shipped in weeks, not months.
              </p>
              <Link 
                href="/start" 
                className="inline-flex items-center justify-center font-ui font-semibold text-[13px] tracking-wide uppercase px-7 py-3 rounded-full hover:opacity-90 active:scale-[0.98] transition-all duration-300 shadow mt-8 border-none"
                style={{
                  backgroundColor: "var(--footer-btn-bg)",
                  color: "var(--footer-btn-text)",
                }}
              >
                Book a Call
              </Link>
            </div>

            {/* Nav Categories Links (Right Side) */}
            <div className="md:col-span-6 lg:col-span-5 grid grid-cols-2 gap-8 w-full md:justify-items-end">
              {/* Work Links Column */}
              <div className="flex flex-col gap-5">
                <h4 
                  className="font-display font-bold text-[16px] tracking-wide transition-colors duration-150"
                  style={{ color: "var(--footer-text-primary)" }}
                >
                  Navigation
                </h4>
                <nav className="flex flex-col gap-3 font-ui text-[14px] text-[#8C8C85]">
                  <Link href="/#services" className="hover:text-[var(--footer-text-hover)] transition-colors">
                    Services
                  </Link>
                  <Link href="/#testimonials" className="hover:text-[var(--footer-text-hover)] transition-colors">
                    Testimonials
                  </Link>
                  <Link href="/#faq" className="hover:text-[var(--footer-text-hover)] transition-colors">
                    FAQs
                  </Link>
                  <Link href="/#work" className="hover:text-[var(--footer-text-hover)] transition-colors">
                    Featured Work
                  </Link>
                </nav>
              </div>

              {/* Social Links Column */}
              <div className="flex flex-col gap-5 lg:pr-8">
                <h4 
                  className="font-display font-bold text-[16px] tracking-wide transition-colors duration-150"
                  style={{ color: "var(--footer-text-primary)" }}
                >
                  Social
                </h4>
                <nav className="flex flex-col gap-3 font-ui text-[14px] text-[#8C8C85]">
                  <a 
                    href="https://twitter.com/rayvokHQ" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[var(--footer-text-hover)] transition-colors"
                  >
                    Twitter / X
                  </a>
                
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[var(--footer-text-hover)] transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[var(--footer-text-hover)] transition-colors"
                  >
                    Instagram
                  </a>
                </nav>
              </div>
            </div>
          </div>

          {/* Bottom Part: Copyright and Legal */}
          <div 
            className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t gap-6 md:gap-0 mb-2 transition-colors duration-150"
            style={{ borderColor: "var(--footer-border)" }}
          >
            <p className="text-[#8C8C85] text-[12px] tracking-wide uppercase font-mono">
              &copy; {currentYear} RAYVOK. ALL RIGHTS RESERVED.
            </p>

            <nav className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[12px] text-[#8C8C85] font-mono">
              <Link href="/legal" className="hover:text-[var(--footer-text-hover)] transition-colors uppercase">
                Legal Notice
              </Link>
              <Link href="/privacy" className="hover:text-[var(--footer-text-hover)] transition-colors uppercase">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[var(--footer-text-hover)] transition-colors uppercase">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-[var(--footer-text-hover)] transition-colors uppercase">
                Cookie Settings
              </Link>
            </nav>
          </div>

          
        </div>

        {/* ========================================================================= */}
        {/* MOBILE LAYOUT (< 768px)                                                   */}
        {/* ========================================================================= */}
        <div className="block md:hidden flex flex-col gap-10">
          {/* Collapsible Accordion Navigation Categories */}
          <div 
            className="flex flex-col border-t transition-colors duration-150"
            style={{ borderColor: "var(--footer-border)" }}
          >
            {/* Work Accordion */}
            <div 
              className="border-b transition-colors duration-150"
              style={{ borderColor: "var(--footer-border)" }}
            >
              <button
                type="button"
                onClick={() => setIsWorkOpen(!isWorkOpen)}
                className="flex items-center justify-between w-full py-5 text-left font-display text-[20px] tracking-wide transition-colors duration-150 hover:text-[#C9FE34]"
                style={{ color: "var(--footer-text-primary)" }}
              >
                <span>Navigation</span>
                <ChevronDown
                  size={18}
                  className={`text-[#8C8C85] transition-transform duration-300 ${
                    isWorkOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isWorkOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <nav className="flex flex-col gap-4 pb-6 pl-2 text-[15px] text-[#8C8C85] font-ui">
                      <Link href="/#services" className="hover:text-[var(--footer-text-hover)] transition-colors">
                        Services
                      </Link>
                      <Link href="/#testimonials" className="hover:text-[var(--footer-text-hover)] transition-colors">
                        Testimonials
                      </Link>
                      <Link href="/#faq" className="hover:text-[var(--footer-text-hover)] transition-colors">
                        FAQs
                      </Link>
                      <Link href="/#work" className="hover:text-[var(--footer-text-hover)] transition-colors">
                        Featured Work
                      </Link>
                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Social Accordion */}
            <div 
              className="border-b transition-colors duration-150"
              style={{ borderColor: "var(--footer-border)" }}
            >
              <button
                type="button"
                onClick={() => setIsSocialOpen(!isSocialOpen)}
                className="flex items-center justify-between w-full py-5 text-left font-display text-[20px] tracking-wide transition-colors duration-150 hover:text-[#C9FE34]"
                style={{ color: "var(--footer-text-primary)" }}
              >
                <span>Social</span>
                <ChevronDown
                  size={18}
                  className={`text-[#8C8C85] transition-transform duration-300 ${
                    isSocialOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isSocialOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <nav className="flex flex-col gap-4 pb-6 pl-2 text-[15px] text-[#8C8C85] font-ui">
                      <a
                        href="https://twitter.com/rayvokHQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--footer-text-hover)] transition-colors"
                      >
                        Twitter / X
                      </a>
                   
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--footer-text-hover)] transition-colors"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--footer-text-hover)] transition-colors"
                      >
                        Instagram
                      </a>
                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Centered Brand Stack */}
          <div className="flex flex-col items-center gap-4 text-center mt-2">
            {/* Favicon Logo Centered */}
            <Image
              src="https://res.cloudinary.com/dokrpo5fl/image/upload/w_128,h_128,c_fill,r_24/RaccentLogo_hadt1o.png"
              alt="Rayvok Icon"
              width={48}
              height={48}
              className="w-12 h-12 object-cover rounded-full"
            />
            {/* Wordmark Logo Centered */}
            <span 
              className="font-display font-bold text-4xl tracking-wide transition-colors duration-150"
              style={{ color: "var(--footer-text-primary)" }}
            >
              Rayvok
            </span>
            <p className="text-[#8C8C85] text-[12px] mt-2 tracking-wide font-mono uppercase">
              &copy; {currentYear} RAYVOK. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Centered Inline Legal Links with persistent underline decorations */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-1 text-center font-mono">
            <Link 
              href="/legal" 
              className="text-[#8C8C85] hover:text-[var(--footer-text-hover)] text-[12px] transition-colors underline underline-offset-4 uppercase transition-colors duration-150"
              style={{ textDecorationColor: "var(--footer-border)" }}
            >
              Legal Notice
            </Link>
            <Link 
              href="/privacy" 
              className="text-[#8C8C85] hover:text-[var(--footer-text-hover)] text-[12px] transition-colors underline underline-offset-4 uppercase transition-colors duration-150"
              style={{ textDecorationColor: "var(--footer-border)" }}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-[#8C8C85] hover:text-[var(--footer-text-hover)] text-[12px] transition-colors underline underline-offset-4 uppercase transition-colors duration-150"
              style={{ textDecorationColor: "var(--footer-border)" }}
            >
              Terms of Service
            </Link>
            <Link 
              href="/cookies" 
              className="text-[#8C8C85] hover:text-[var(--footer-text-hover)] text-[12px] transition-colors underline underline-offset-4 uppercase transition-colors duration-150"
              style={{ textDecorationColor: "var(--footer-border)" }}
            >
              Cookie Settings
            </Link>
          </div>

          {/* Centered Circular Social Icons ending with the Accent Favicon */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 hover:bg-[var(--footer-text-primary)] hover:text-[var(--footer-bg)]"
              style={{ borderColor: "var(--footer-social-border)", color: "var(--footer-text-primary)" }}
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://twitter.com/rayvokHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 hover:bg-[var(--footer-text-primary)] hover:text-[var(--footer-bg)]"
              style={{ borderColor: "var(--footer-social-border)", color: "var(--footer-text-primary)" }}
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 hover:bg-[var(--footer-text-primary)] hover:text-[var(--footer-bg)]"
              style={{ borderColor: "var(--footer-social-border)", color: "var(--footer-text-primary)" }}
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
