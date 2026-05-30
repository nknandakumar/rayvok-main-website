"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonCTA from "@/components/ui/ButtonCTA";

export default function SelectedWorkSection() {
	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);
	const [ctaHovered, setCtaHovered] = useState(false);
	const [sectionVisible, setSectionVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	const handleMouseMove = useCallback((e: React.MouseEvent) => {
		setCursorPos({ x: e.clientX, y: e.clientY });
	}, []);

	useEffect(() => {
		const el = sectionRef.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => setSectionVisible(entry.isIntersecting),
			{ threshold: 0.08 },
		);
		observer.observe(el);

		if (typeof window !== "undefined") {
			gsap.registerPlugin(ScrollTrigger);

			// Eyebrow reveal trigger
			gsap.fromTo(".work-eyebrow",
				{ opacity: 0, y: 25 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power3.out",
					scrollTrigger: {
						trigger: ".work-eyebrow",
						start: "top 88%",
						toggleActions: "play none none reset"
					}
				}
			);

			// Heading reveal trigger
			gsap.fromTo(".work-heading",
				{ opacity: 0, y: 35 },
				{
					opacity: 1,
					y: 0,
					duration: 0.9,
					ease: "power3.out",
					scrollTrigger: {
						trigger: ".work-heading",
						start: "top 88%",
						toggleActions: "play none none reset"
					}
				}
			);

			// Individual project card reveals
			gsap.utils.toArray<HTMLElement>(".work-project-card").forEach((card) => {
				gsap.fromTo(card,
					{ opacity: 0, y: 55 },
					{
						opacity: 1,
						y: 0,
						duration: 0.9,
						ease: "power3.out",
						scrollTrigger: {
							trigger: card,
							start: "top 88%",
							toggleActions: "play none none reset"
						}
					}
				);
			});

			// CTA card reveal trigger
			gsap.fromTo(".work-cta-card",
				{ opacity: 0, y: 60 },
				{
					opacity: 1,
					y: 0,
					duration: 1.0,
					ease: "power3.out",
					scrollTrigger: {
						trigger: ".work-cta-card",
						start: "top 88%",
						toggleActions: "play none none reset"
					}
				}
			);
		}

		return () => observer.disconnect();
	}, []);

	const projects = [
		{
			company: "Nexlify Inc.",
			name: "SaaS Platform Redesign",
			category: "Web design & development",
			tags: ["SaaS", "Web Design", "Development", "Framer Motion"],
			result: "60% increase in demo requests",
			image:
				"https://res.cloudinary.com/dokrpo5fl/image/upload/v1779617908/093bcda213e0b719adce00c8a1c8292a_kaqbvt.jpg",
			slug: "saas-platform",
			aspect: "aspect-[1/1]",
			colSpan: "md:col-span-5",
			offset: "",
			country: "USA",
			flagCode: "us",
		},
		{
			company: "Forma Studio",
			name: "Architecture Studio Portfolio",
			category: "Web design & development",
			tags: ["Creative Portfolio", "Web Design", "Development"],
			result: "3x more inbound leads",
			image:
				"https://res.cloudinary.com/dokrpo5fl/image/upload/v1779617745/c3b8b15d1cf1e40dcc5f0df62dc6037c_etqlzb.jpg",
			slug: "architecture-studio",
			aspect: "md:aspect-[1.5/1] aspect-[4/3]",
			colSpan: "md:col-span-7",
			offset: "md:mt-24",
			country: "UAE",
			flagCode: "ae",
		},
		{
			company: "Orion Commerce",
			name: "D2C E-commerce Experience",
			category: "Web design & development",
			tags: ["E-commerce", "Web Design", "Development"],
			result: "2.4% conversion increase",
			image:
				"https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2670&auto=format&fit=crop",
			slug: "d2c-brand",
			aspect: "md:aspect-[21/9] aspect-[16/9]",
			colSpan: "md:col-span-12",
			offset: "mt-10",
			country: "UK",
			flagCode: "gb",
		},
		{
			company: "Apex Tech",
			name: "B2B Tech Landing Page",
			category: "Web design & development",
			tags: ["Landing Page", "Web Design", "Development"],
			result: "40% acquisition drop",
			image:
				"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop",
			slug: "b2b-landing-page",
			aspect: "md:aspect-[1.5/1] aspect-[4/3]",
			colSpan: "md:col-span-7",
			offset: "",
			country: "GER",
			flagCode: "de",
		},
		{
			company: "Lumina Agency",
			name: "Creative Branding Experience",
			category: "Web design & development",
			tags: ["Branding", "Creative", "Web Design"],
			result: "95 Lighthouse score",
			image:
				"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
			slug: "creative-branding",
			aspect: "aspect-[1/1]",
			colSpan: "md:col-span-5",
			offset: "md:mt-24",
			country: "FRA",
			flagCode: "fr",
		},
	];

	return (
		<>
			{/* ── Custom Rectangle Cursor ────────────────────────────── */}
			<AnimatePresence>
				{hoveredCard !== null && (
					<motion.div
						className="fixed z-[9999] pointer-events-none hidden md:flex items-center justify-center"
						style={{
							left: cursorPos.x,
							top: cursorPos.y,
							translateX: "-50%",
							translateY: "-50%",
						}}
						initial={{ opacity: 0, scale: 0.7 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.7 }}
						transition={{ type: "spring", stiffness: 500, damping: 30 }}
					>
						<div className="bg-[#1A1A1A] text-[#F5F5F0] px-5 py-2.5 flex items-center gap-2.5 shadow-xl">
							<svg
								width="11"
								height="11"
								viewBox="0 0 12 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 11L11 1M11 1H3M11 1V9"
									stroke="#C9FE34"
									strokeWidth="1.8"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span className="font-ui font-bold text-[11px] uppercase tracking-[0.1em] whitespace-nowrap">
								View Project
							</span>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* ── CTA Custom Cursor (Start Project) ───────────────────── */}
			<AnimatePresence>
				{ctaHovered && (
					<motion.div
						className="fixed z-[9999] pointer-events-none hidden md:flex items-center justify-center"
						style={{
							left: cursorPos.x,
							top: cursorPos.y,
							translateX: "-50%",
							translateY: "-50%",
						}}
						initial={{ opacity: 0, scale: 0.7 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.7 }}
						transition={{ type: "spring", stiffness: 500, damping: 30 }}
					>
						<div className="bg-[#C9FE34] text-[#1A1A1A] px-5 py-2.5 flex items-center gap-2.5 shadow-xl">
							<svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 11L11 1M11 1H3M11 1V9" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							<span className="font-ui font-bold text-[11px] uppercase tracking-[0.1em] whitespace-nowrap">
								Start Project
							</span>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* ── Sticky "See all work" button — fixed while section is in view ── */}
			<AnimatePresence>
				{sectionVisible && (
					<motion.div
						className="fixed bottom-24 left-1/2 z-[998] pointer-events-none"
						style={{ translateX: "-50%" }}
						initial={{ y: 32, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 32, opacity: 0 }}
						transition={{ type: "spring", stiffness: 400, damping: 30 }}
					>
						<Link
							href="/case-studies"
							className="pointer-events-auto flex items-center gap-3 bg-[#1A1A1A] text-[#F5F5F0] font-ui  text-[12px] uppercase tracking-[0.1em] px-7 py-3.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.22)] hover:bg-rayvok-volt hover:text-rayvok-black transition-all duration-300 whitespace-nowrap"
						>
							<span className="w-2 h-2 rounded-full bg-rayvok-volt group-hover:bg-rayvok-black transition-colors" />
							See all work
							<svg
								className=""
								width="11"
								height="11"
								viewBox="0 0 12 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 11L11 1M11 1H3M11 1V9"
									stroke="currentColor"
									strokeWidth="1.8"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</Link>
					</motion.div>
				)}
			</AnimatePresence>

			<section
				id="work"
				ref={sectionRef}
				className="py-32 px-6 md:px-12 bg-rayvok-offwhite relative overflow-hidden"
				onMouseMove={handleMouseMove}
			>
				{/* Subtle tonal accent */}
				<div className="absolute w-[600px] h-[600px] rounded-full bg-rayvok-volt/4 blur-[180px] bottom-[-200px] right-[-200px] -z-10" />

				<div className="container mx-auto">
					{/* ── Section Header ─────────────────────────────── */}
					<div className="flex flex-col md:flex-row md:items-center justify-center mb-24 gap-8">
						<div className="max-w-2xl flex flex-col gap-6 justify-center items-center text-center">
							<div className="overflow-hidden mb-6">
								<p
									className="work-eyebrow label text-[#20201e] bg-[#FFFFFF] border border-[#E1DDD5] inline-block px-4 py-1.5 font-mono rounded-lg opacity-0"
								>
									Selected work
								</p>
							</div>

							<div className="overflow-hidden">
								<h2
									className="work-heading text-[#1A1A1A] text-[32px] md:text-[54px] lg:text-[80px] leading-[1.1] tracking-tight opacity-0"
								>
									Work that <span className="text-[#999999]">converts</span>,
									not just impresses.
								</h2>
							</div>
						</div>
					</div>

					{/* ── Asymmetric Staggered Grid ────────────────────── */}
					<div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-16 items-start">
						{projects.map((project, idx) => (
							<div
								key={idx}
								className={`${project.colSpan} ${project.offset} work-project-card group block md:cursor-none cursor-pointer opacity-0`}
								onMouseEnter={() => setHoveredCard(idx)}
								onMouseLeave={() => setHoveredCard(null)}
							>
								<Link
									href={`/case-studies/${project.slug}`}
									className={
										idx === 2 ? "block w-full max-w-[1300px] mx-auto" : "block"
									}
								>
									{/* Image wrapper — zoomed-in default, returns to normal on hover (visual shrink, no bg exposed) */}
									<div
										className={`relative ${idx === 2 ? "w-full md:h-[720px] h-[400px]" : project.aspect} overflow-hidden mb-6 border border-[#E1DDD5] bg-[#F0EDE8]`}
									>
										<Image
											src={project.image}
											alt={project.name}
											fill
											className="object-cover scale-[1.05] transition-transform duration-600 ease-out group-hover:scale-[1.00]"
										/>

										{/* Inner vignette — darkens around edges on hover, stays inside */}
										<div
											className="absolute inset-0 z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
											style={{
												boxShadow: "inset 0 0 80px 24px rgba(0,0,0,0.28)",
											}}
										/>

										{/* Country badge — bottom right */}
										<div className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-md border border-black/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
											{/* eslint-disable-next-line @next/next/no-img-element */}
											<img
												src={`https://flagcdn.com/w40/${project.flagCode}.png`}
												alt={project.country}
												width={20}
												height={15}
												className="rounded-[2px] rounded-full object-cover"
												style={{ width: 20, height: 20 }}
											/>
											<span className="font-ui font-semibold text-[11px] text-[#1A1A1A] tracking-wider uppercase leading-none">
												{project.country}
											</span>
										</div>
									</div>

									{/* Card meta */}
									<div className="space-y-2.5">
										{/* Eyebrow: company */}
										<div className="flex items-center gap-2 text-[#3A3A3A] font-ui text-[13px] tracking-wider uppercase">
											<span>{project.company}</span>
										</div>

										{/* Title */}
										<h3 className="text-[#1A1A1A] text-[24px] lg:text-[28px] font-display font-medium tracking-tight leading-tight">
											{project.name}
										</h3>

										{/* Result — above eyebrow */}
										<div className="flex items-center gap-2">
											<span className="font-ui text-[11px] text-[#3A3A3A] tracking-wider uppercase ">
												{project.result}
											</span>
										</div>

										{/* Tags */}
										<div className="flex flex-wrap gap-2 pt-1">
											{project.tags.map((tag, tIdx) => (
												<span
													key={tIdx}
													className="font-ui text-[11px] tracking-[0.06em] uppercase px-3 py-1 rounded-full border border-[#D5D2CB] text-[#1A1A1A]"
												>
													{tag}
												</span>
											))}
										</div>
									</div>
								</Link>
							</div>
						))}

						{/* ─ Row 2 : CTA Card (col-span-12) ─ */}
						<div
							className="work-cta-card md:col-span-12 w-full mt-10 opacity-0"
							onMouseEnter={() => setCtaHovered(true)}
							onMouseLeave={() => setCtaHovered(false)}
						>
							<div
								className="relative overflow-hidden border border-[#E1DDD5] w-full max-w-[1300px] mx-auto md:h-[720px] aspect-square md:aspect-auto flex flex-col items-center justify-center gap-8 group shadow-[0_20px_50px_rgba(0,0,0,0.06)] bg-transparent md:cursor-none cursor-pointer"
							>
								{/* Image component for CTA Card */}
								<Image
									src="https://res.cloudinary.com/dokrpo5fl/image/upload/v1779797893/da4d07b9-ebd2-4ca6-8a64-a2bd31deb008_pqun0i.png"
									alt="Let's build your card"
									fill
									className="object-cover scale-[1.05] transition-transform duration-600 ease-out group-hover:scale-[1.00]"
									priority
								/>

								{/* Inner vignette — darkens around edges on hover */}
								<div
									className="absolute inset-0 z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
									style={{
										boxShadow: "inset 0 0 80px 24px rgba(0,0,0,0.28)",
									}}
								/>

								{/* Desktop: entire card is clickable via Link overlay */}
								<Link href="/start" className="absolute inset-0 z-20 hidden md:block" aria-label="Start a project" />
							</div>
						</div>
            
						{/* CTA Button — hidden on desktop (cursor replaces it), visible + centered at bottom on mobile */}
						<div className="relative z-10 mb-40 md:hidden flex items-end justify-center block">
							<ButtonCTA href="/start" className="order-1 sm:w-auto">
								Start a Project
							</ButtonCTA>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
