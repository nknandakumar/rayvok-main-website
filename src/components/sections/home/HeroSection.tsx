"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import SocialProofStrip from "./SocialProofStrip";
import ButtonCTA from "@/components/ui/ButtonCTA";

export default function HeroSection() {
	const images = [
		"https://res.cloudinary.com/dokrpo5fl/image/upload/v1779009693/width_640_uxpskl.jpg",
		"https://res.cloudinary.com/dokrpo5fl/image/upload/v1779009693/width_800_hodfgh.jpg",
		"https://res.cloudinary.com/dokrpo5fl/image/upload/v1779009694/width_799_p4uive.jpg",
		"https://res.cloudinary.com/dokrpo5fl/image/upload/v1779009692/width_735_vfarj7.jpg",
		"https://res.cloudinary.com/dokrpo5fl/image/upload/v1779009695/width_302_aog703.jpg",
	];

	const eyebrowRef = useRef<HTMLParagraphElement>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);
	const ctaRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Prevent any flash by locking initial states
		gsap.set([eyebrowRef.current, headingRef.current, descriptionRef.current, ctaRef.current], {
			opacity: 0,
			y: 35
		});

		const playIntro = () => {
			gsap.to([eyebrowRef.current, headingRef.current, descriptionRef.current, ctaRef.current], {
				opacity: 1,
				y: 0,
				duration: 0.9,
				stagger: 0.12,
				ease: "power3.out",
				delay: 0
			});
		};

		// Check if preloader is already finished, else listen for completion
		if ((window as any).__rayvokPreloaderComplete) {
			playIntro();
		} else {
			const handlePreloaderComplete = () => {
				playIntro();
			};
			window.addEventListener("preloaderComplete", handlePreloaderComplete);
			return () => {
				window.removeEventListener("preloaderComplete", handlePreloaderComplete);
			};
		}
	}, []);

	return (
		<>
			<section className="relative pt-32 pb-2 flex flex-col justify-center overflow-hidden bg-rayvok-black">
				<div
					className="container mx-auto px-6 md:px-12 relative flex flex-col items-start md:items-center text-left md:text-center"
					style={{ zIndex: 1 }}
				>
					<div className="max-w-6xl w-full">
						<p
							ref={eyebrowRef}
							className="label text-[10px] md:text-sm text-white rounded-lg bg-rayvok-surface/20 border border-rayvok-mid inline-block px-4 py-1.5 mb-6 opacity-0"
						>
							Web design &amp; development
						</p>
						<h1
							ref={headingRef}
							className="text-rayvok-offwhite mb-6 tracking-[-0.02em] text-[46px] leading-[1] md:text-[64px] lg:text-[88px] opacity-0"
						>
							Web design that turns visitors into customers
						</h1>
						<p
							ref={descriptionRef}
							className="text-rayvok-mid fontui mb-10 max-w-2xl md:mx-auto text-[16px] md:text-[20px] opacity-0"
						>
							We design and build websites for businesses, SaaS products, and
							professionals that convert visitors into leads, booked calls, and
							customers.
						</p>
						<div
							ref={ctaRef}
							className="flex items-center flex-col md:flex-row gap-4 md:justify-center w-full sm:w-auto opacity-0"
						>
							<ButtonCTA
								href="/start"
								className="order-1 md:order-2 w-full sm:w-auto"
								showArrow={false}
							>
								Let&apos;s Start a Project
							</ButtonCTA>
							<Link
								href="/case-studies"
								className="group btn-secondary order-2 md:order-1 w-full sm:w-auto"
							>
								<span className="relative block overflow-hidden">
									<span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
										See case studies
									</span>
									<span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
										See case studies
									</span>
								</span>
							</Link>
						</div>
						<SocialProofStrip />
					</div>
				</div>
			</section>

			<div className="relative -mt-2 flex overflow-x-hidden w-full bg-rayvok-black pt-2 pb-4">
				<div className="flex whitespace-nowrap w-max animate-marquee">
					<div className="flex shrink-0 gap-4 pr-4 items-start">
						{images.map((img, idx) => (
							<div
								key={`img1-${idx}`}
								className="relative h-[260px] md:h-[400px] w-auto shrink-0 overflow-hidden"
							>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src={img}
									alt={`Work showcase ${idx + 1}`}
									className="h-full w-auto object-cover"
								/>
							</div>
						))}
					</div>
					<div className="flex shrink-0 gap-4 pr-4 items-start">
						{images.map((img, idx) => (
							<div
								key={`img2-${idx}`}
								className="relative h-[260px] md:h-[400px] w-auto shrink-0 overflow-hidden"
							>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src={img}
									alt={`Work showcase ${idx + 1} clone`}
									className="h-full w-auto object-cover"
								/>
							</div>
						))}
					</div>
				</div>
				<div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-rayvok-black to-transparent z-10 pointer-events-none" />
				<div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-rayvok-black to-transparent z-10 pointer-events-none" />
			</div>
		</>
	);
}
