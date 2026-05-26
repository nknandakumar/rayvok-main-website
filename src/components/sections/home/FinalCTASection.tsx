import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="py-28 md:py-30 px-6 md:px-12 border-t border-[#EAE7DF] text-center bg-[#FAF8F5] relative md:h-screen overflow-hidden">
      {/* Soft warm background radial accent */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-[#C9FE34]/5 blur-[120px] bottom-[-200px] left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto pt-10 max-w-4xl relative z-10 flex flex-col justify-center items-center">
        {/* Typographical Heading matching the uploaded screenshot */}
        <h2 className="text-[#1A1A1A] text-[24px] md:text-[56px] lg:text-[46px] leading-[1.1] tracking-tight font-display font-semibold mb-6">
          We treat every project as a joint venture, where our drive for creativity meets our <span className="text-[#999999]" > clients&apos; pursuit of success</span>, achieving remarkable breakthroughs together.
        </h2>
       

        {/* Dynamic primary pill CTA button matching screenshot styling */}
        <div className="flex flex-col items-center gap-6">
          <Link 
            href="/start" 
            className="inline-flex items-center justify-center bg-[#C9FE34] text-rayvok-black font-ui font-semibold text-[18px] tracking-wider uppercase px-9 py-4.5 rounded-full hover:bg-rayvok-volt-light hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_16px_rgba(201,254,52,0.15)] border-none"
          >
            Let&apos;s collaborate
          </Link>
          
          <div className="space-y-1.5 mt-2">
            <p className="caption text-[#8C8C85] tracking-wide uppercase font-semibold">
              Free 30-min discovery call &middot; No commitment
            </p>
            <p className="text-[#8C8C85] text-[13px]">
              Or email directly: <a href="mailto:hello@rayvok.com" className="text-[#1A1A1A] hover:text-[#C9FE34] transition-colors font-medium">hello@rayvok.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
