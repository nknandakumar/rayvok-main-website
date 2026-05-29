"use client";

export default function WhyRayvokSection() {
	return (
		<section
			id="why-us"
			className="py-12 px-6 md:px-12 bg-rayvok-offwhite relative"
		>
			<div className="container mx-auto text-center max-w-6xl">
				<div className="mb-8">
					<p className="label text-[#1A1A1A] inline-block mb-6 bg-[#FAF8F5] border border-[#EAE7DF] px-4 py-1.5 font-mono rounded-lg">
						WHY US
					</p>
					<h2 className="text-[#1A1A1A] text-[32px] md:text-[54px] lg:text-[80px] leading-[1.1] tracking-tight max-w-[980px] mx-auto">
						Get a premium website with {" "}
						<span className="text-[#999999]">in 2 weeks</span>, not months
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 text-left">
					{/* ── Rayvok column ────────────────────────────── */}
					<div>
						<h4 className="text-[#1A1A1A] font-display font-medium mb-6 text-[20px]">
							Rayvok
						</h4>
						<ul className="divide-y divide-[#EAE7DF] bg-transparent rounded">
							<li className="flex items-center gap-4 py-6">
								<span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#C9FE34] border border-black/10">
									<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 5L4 8L11 1" stroke="#0E0E0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</span>
								<span className="text-[#1A1A1A] text-[24px] leading-[36px] font-normal">Beskop Design</span>
							</li>
							<li className="flex items-center gap-4 py-6">
								<span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#C9FE34] border border-black/10">
									<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 5L4 8L11 1" stroke="#0E0E0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</span>
								<span className="text-[#1A1A1A] text-[24px] leading-[36px] font-normal">2 weeks to launch</span>
							</li>
							<li className="flex items-center gap-4 py-6">
								<span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#C9FE34] border border-black/10">
									<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 5L4 8L11 1" stroke="#0E0E0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</span>
								<span className="text-[#1A1A1A] text-[24px] leading-[36px] font-normal">1 project at a time</span>
							</li>
							<li className="flex items-center gap-4 py-6">
								<span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#C9FE34] border border-black/10">
									<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 5L4 8L11 1" stroke="#0E0E0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</span>
								<span className="text-[#1A1A1A] text-[24px] leading-[36px] font-normal">Every detail is intentional</span>
							</li>
						</ul>
					</div>

					{/* ── Typical Agency column ─────────────────────── */}
					<div>
						<h4 className="text-[#1A1A1A] font-display font-medium mb-6 text-[20px]">
							Typical Agency
						</h4>
						<ul className="divide-y divide-[#EAE7DF] bg-transparent rounded">
							<li className="flex items-center gap-4 py-6">
								<span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#EAE7DF]">
									<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 1L9 9M9 1L1 9" stroke="#8C8A82" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</span>
								<span className="text-[#1A1A1A] text-[24px] leading-[36px] font-normal">Template adapted to fit your name</span>
							</li>
							<li className="flex items-center gap-4 py-6">
								<span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#EAE7DF]">
									<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 1L9 9M9 1L1 9" stroke="#8C8A82" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</span>
								<span className="text-[#1A1A1A] text-[24px] leading-[36px] font-normal">2 months or more</span>
							</li>
							<li className="flex items-center gap-4 py-6">
								<span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#EAE7DF]">
									<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 1L9 9M9 1L1 9" stroke="#8C8A82" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</span>
								<span className="text-[#1A1A1A] text-[24px] leading-[36px] font-normal">Many projects at a time</span>
							</li>
							<li className="flex items-center gap-4 py-6">
								<span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#EAE7DF]">
									<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 1L9 9M9 1L1 9" stroke="#8C8A82" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</span>
								<span className="text-[#1A1A1A] text-[24px] leading-[36px] font-normal">Good enough to ship, not to last</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
