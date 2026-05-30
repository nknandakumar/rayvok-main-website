"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Progressive scroll-down navbar states
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Legacy scroll state
      setIsScrolled(currentScrollY > 20);

      // Track scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScrollY / totalHeight) * 100);
      }

      // Track scroll direction with threshold
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["home", "services", "work", "process", "why-us", "testimonials", "faq", "cta"];
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-25% 0px -55% 0px", // Trigger when section is prominent in viewport
        }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.disconnect();
      });
    };
  }, [pathname]);

  const getSectionName = (id: string) => {
    switch (id) {
      case "home": return "Home";
      case "services": return "Services";
      case "work": return "Works";
      case "process": return "Process";
      case "why-us": return "Why Us";
      case "testimonials": return "Testimonials";
      case "faq": return "FAQ";
      case "cta": return "Start Project";
      default: return "Home";
    }
  };

  const isHomePage = pathname === "/";
  const isMainNavbarVisible = isMobileMenuOpen || !isHomePage || scrollDirection === "up" || !isScrolled;
  const isProgressNavbarVisible = !isMobileMenuOpen && isHomePage && scrollDirection === "down" && isScrolled;

  return (
    <>
      {/* Mobile full-screen overlay — z-index 150, below the navbar pill */}
      <div
        style={{ zIndex: 150 }}
        className={`fixed inset-0 bg-rayvok-black flex flex-col items-center justify-center gap-10 transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
         <Link
          href="/"
          className="font-display text-5xl font-bold text-rayvok-offwhite hover:text-rayvok-volt transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/case-studies"
          className="font-display text-5xl font-bold text-rayvok-offwhite hover:text-rayvok-volt transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Case Studies
        </Link>
        <Link
          href="/start"
          className="font-display text-5xl font-bold text-rayvok-offwhite hover:text-rayvok-volt transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact
        </Link>
        <Link
          href="/start"
          className="btn-primary mt-6"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Start a project
        </Link>
      </div>

      {/* Floating pill navbar — z-index 200, always on top. Hidden on scroll-down on Home. */}
      <header
        className={`fixed top-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 transition-all duration-500 ease-in-out ${
          isMainNavbarVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-16 pointer-events-none"
        }`}
        style={{ zIndex: 200 }}
      >
        <div
          className={`flex items-center justify-between w-full md:w-max gap-4 md:gap-12 px-2 py-2 rounded-full border transition-all duration-300 ${
            isScrolled
              ? "bg-rayvok-black/95 backdrop-blur-md shadow-lg shadow-black/50 border-rayvok-surface"
              : "bg-rayvok-black border-rayvok-surface/60"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center shrink-0 pl-1">
            <Image
              src="https://res.cloudinary.com/dokrpo5fl/image/upload/w_128,h_128,c_fill,r_24/RaccentLogo_hadt1o.png"
              alt="Rayvok"
              width={40}
              height={40}
              className="w-10 h-10 object-cover rounded-xl"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 px-4">
             <Link
              href="/"
              className={`group font-ui text-[14px] tracking-wide uppercase transition-colors hover:text-rayvok-offwhite ${
                pathname === "/" ? "text-rayvok-offwhite font-medium" : "text-rayvok-mid"
              }`}
            >
              <span className="relative block overflow-hidden">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Home
                </span>
                <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                  Home
                </span>
              </span>
            </Link>

            <Link
              href="/case-studies"
              className={`group font-ui text-[14px] tracking-wide uppercase transition-colors hover:text-rayvok-offwhite ${
                pathname === "/case-studies" ? "text-rayvok-offwhite font-medium" : "text-rayvok-mid"
              }`}
            >
              <span className="relative block overflow-hidden">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Case Studies
                </span>
                <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                  Case Studies
                </span>
              </span>
            </Link>
            <Link
              href="/start"
              className={`group font-ui text-[13px] tracking-[0.06em] uppercase transition-colors hover:text-rayvok-volt ${
                pathname === "/start" ? "text-rayvok-offwhite font-medium" : "text-rayvok-mid"
              }`}
            >
              <span className="relative block overflow-hidden">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Contact
                </span>
                <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                  Contact
                </span>
              </span>
            </Link>
          </nav>

          {/* Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-2 pr-1">
            <Link
              href="/start"
              className="group hidden md:flex items-center justify-center uppercase bg-rayvok-offwhite text-rayvok-black font-ui  text-[13px] font-semibold px-6 py-2.5 rounded-full transition-all hover:bg-white"
            >
              <span className="relative block overflow-hidden">
                <span className="block transition-transform duration-300 font-medium ease-out group-hover:-translate-y-full">
                  Start a project
                </span>
                <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                  Start a project
                </span>
              </span>
            </Link>

            {/* Hamburger — always above overlay because it's inside z-200 header */}
            <button
              type="button"
              className="md:hidden flex items-center justify-center w-10 h-10 bg-rayvok-surface rounded-full text-rayvok-offwhite hover:text-rayvok-volt transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Progress Floating Pill Navbar — visible when scrolling down on Home at the bottom */}
      <header
        className={`fixed bottom-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 transition-all duration-500 ease-in-out ${
          isProgressNavbarVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-16 pointer-events-none"
        }`}
        style={{ zIndex: 200 }}
      >
        <div className="relative flex items-center justify-between w-full md:w-[460px] gap-6 px-2 py-2 rounded-lg border border-rayvok-surface/80 bg-rayvok-black/95 backdrop-blur-md shadow-lg shadow-black/50">
          
          {/* Left Side: Active Section Name in a Square Border Tag */}
          <div className="w-1/3 shrink-0 flex justify-start items-center pl-1">
            <span className="font-ui text-[12px] md:text-[13px] tracking-[0.08em] uppercase text-rayvok-mid border border-rayvok-surface/70 px-2 py-2 md:px-2.5 md:py-2 rounded-[8px] bg-rayvok-black/20">
              {getSectionName(activeSection)}
            </span>
          </div>

          {/* Center: Scroll Progress Circular Ring (Absolutely Centered) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 pointer-events-none">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <svg className="w-9 h-9 transform -rotate-90">
                <circle
                  className="text-rayvok-surface/40"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="transparent"
                  r="14"
                  cx="18"
                  cy="18"
                />
                <circle
                  className="text-rayvok-volt transition-all duration-150 ease-out"
                  strokeWidth="3.5"
                  strokeDasharray="87.96"
                  strokeDashoffset={87.96 - (scrollProgress / 100) * 87.96}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="14"
                  cx="18"
                  cy="18"
                />
              </svg>
            </div>
          </div>

          {/* Right Side: Let's Start CTA button with square rounded-lg styling */}
          <div className="w-1/3 shrink-0 flex justify-end items-center">
            <Link
              href="/start"
              className="group inline-flex p-[2px] rounded-sm border border-rayvok-volt/30 hover:border-rayvok-volt transition-colors duration-300"
            >
              <span className="flex items-center gap-2 bg-rayvok-volt text-rayvok-black font-ui font-medium text-[12px] tracking-[0.04em] uppercase  px-2 py-2 rounded-sm transition-all duration-300 group-hover:bg-rayvok-black group-hover:text-rayvok-volt">
                <span className="relative block overflow-hidden">
                  <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                    Let's Start
                  </span>
                  <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                    Let's Start
                  </span>
                </span>
               
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
