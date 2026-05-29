"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile full-screen overlay — z-index 150, below the navbar pill */}
      <div
        style={{ zIndex: 150 }}
        className={`fixed inset-0  flex flex-col items-center justify-center gap-10 transition-transform duration-500 ease-in-out md:hidden ${
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
        {/* Commented out About page link for now
        <Link
          href="/about"
          className="font-display text-5xl font-bold text-rayvok-offwhite hover:text-rayvok-volt transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About
        </Link>
        */}
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

      {/* Floating pill navbar — z-index 200, always on top */}
      <header
        className="fixed top-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 transition-all duration-300"
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
              className={`font-ui text-[14px] tracking-wide uppercase transition-colors hover:text-rayvok-offwhite ${
                pathname === "/" ? "text-rayvok-offwhite font-medium" : "text-rayvok-mid"
              }`}
            >
              Home
            </Link>

            <Link
              href="/case-studies"
              className={`font-ui text-[14px] tracking-wide uppercase transition-colors hover:text-rayvok-offwhite ${
                pathname === "/case-studies" ? "text-rayvok-offwhite font-medium" : "text-rayvok-mid"
              }`}
            >
              Case Studies
            </Link>
            {/* Commented out About page link for now
            <Link
              href="/about"
              className={`font-ui text-[14px] tracking-wide uppercase transition-colors hover:text-rayvok-offwhite ${
                pathname === "/about" ? "text-rayvok-offwhite font-medium" : "text-rayvok-mid"
              }`}
            >
              About
            </Link>
            */}
            <Link
              href="/start"
              className={`font-ui text-[13px] tracking-[0.06em] uppercase transition-colors hover:text-rayvok-volt ${
                pathname === "/start" ? "text-rayvok-offwhite font-medium" : "text-rayvok-mid"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-2 pr-1">
            <Link
              href="/start"
              className="hidden md:flex items-center justify-center uppercase bg-rayvok-offwhite text-rayvok-black font-ui  text-[13px] font-semibold px-6 py-2.5 rounded-full transition-all hover:bg-white"
            >
              Start a project
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
    </>
  );
}
