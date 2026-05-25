"use client";

import Link from "next/link";
import SocialProofStrip from "./SocialProofStrip";

export default function HeroSection() {
	const images = [
		"https://res.cloudinary.com/dokrpo5fl/image/upload/v1779009693/width_640_uxpskl.jpg",
		"https://res.cloudinary.com/dokrpo5fl/image/upload/v1779009693/width_800_hodfgh.jpg",
		"https://res.cloudinary.com/dokrpo5fl/image/upload/v1779009694/width_799_p4uive.jpg",
		"https://res.cloudinary.com/dokrpo5fl/image/upload/v1779009692/width_735_vfarj7.jpg",
		"https://res.cloudinary.com/dokrpo5fl/image/upload/v1779009695/width_302_aog703.jpg",
	];

	return (
		<>
			{/* ─── Hero content area with background ─────────────────────── */}
			{/* 
        -mt-20 pulls the section up under the fixed navbar so there's NO gap.
        The section itself provides the top padding via pt-32 to push content below the navbar.
      */}
			<section className="relative -mt-20 pt-26 pb-2 flex flex-col justify-center overflow-hidden">
				{/* Background image — full cover, sits behind everything */}
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src="https://res.cloudinary.com/dokrpo5fl/image/upload/v1779016767/hbg_jcxff3.jpg"
					alt=""
					aria-hidden="true"
					className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
					style={{ zIndex: 0 }}
				/>
				{/* Overlay — only covers the content area, fades OUT before the marquee */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						zIndex: 1,
						background:
							"linear-gradient(to bottom, rgba(14,14,14,0.80) 0%, rgba(14,14,14,0.55) 55%, rgba(14,14,14,0.90) 80%, rgba(14,14,14,1) 100%)",
					}}
				/>

				{/* Hero text content */}
				<div
					className="container mx-auto px-6 md:px-12 relative flex flex-col items-start md:items-center text-left md:text-center"
					style={{ zIndex: 2 }}
				>
					<div className="max-w-6xl w-full">
						<p
							className="label text-[10px] md:text-sm text-rayvok-mid rounded-lg bg-rayvok-surface/20 border border-rayvok-surface inline-block px-4 py-1.5 mb-6 animate-fade-in-up"
							style={{ animationDelay: "0.1s", animationFillMode: "both" }}
						>
							Web design &amp; development
						</p>
						<h1
							className="text-rayvok-offwhite mb-6  tracking-[-0.02em] text-[32px] leading-[1] md:text-[64px] lg:text-[88px] animate-fade-in-up"
							style={{ animationDelay: "0.2s", animationFillMode: "both" }}
						>
							Web design that turns visitors into customers
						</h1>
						<p
							className="text-rayvok-mid fontui mb-10 max-w-2xl md:mx-auto text-[14px] md:text-[20px] animate-fade-in-up"
							style={{ animationDelay: "0.3s", animationFillMode: "both" }}
						>
							We design and build websites for SaaS products, businesses, and
							professionals that convert visitors into leads, booked calls, and
							customers.
						</p>
						<div
							className="flex items-center flex-col md:flex-row gap-4 md:justify-center animate-fade-in-up w-full sm:w-auto"
							style={{ animationDelay: "0.4s", animationFillMode: "both" }}
						>
							<Link
								href="/start"
								className="btn-primary order-1 md:order-2 w-full sm:w-auto"
							>
								Let&apos;Start a Project
							</Link>
							<Link
								href="/work"
								className="btn-secondary order-2 md:order-1 w-full sm:w-auto"
							>
								See our work
							</Link>
						</div>
						<SocialProofStrip />
					</div>
				</div>
			</section>

			{/* ─── Marquee Images — fully outside the bg section, so NO dimming ─── */}
			<div className="relative -mt-2 flex overflow-x-hidden w-full bg-rayvok-black pt-2 pb-4">
				<div className="flex whitespace-nowrap w-max animate-marquee">
					{/* Group 1 */}
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
					{/* Group 2 — clone for seamless loop */}
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
				{/* Edge fades */}
				<div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-rayvok-black to-transparent z-10 pointer-events-none" />
				<div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-rayvok-black to-transparent z-10 pointer-events-none" />
			</div>
		</>
	);
}
