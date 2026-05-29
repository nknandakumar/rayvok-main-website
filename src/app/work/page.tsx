import WorkPageContent from "@/components/sections/work/WorkPageContent";
import Link from "next/link";

export const metadata = {
  title: "Work — Rayvok",
  description: "Projects that convert. Web design and development built for one goal — making your business impossible to ignore online.",
};

export default function WorkPage() {
  return (
    <>
      <WorkPageContent />
      
      {/* Dark theme Final CTA Section */}
      <section className="py-28 md:py-30 px-6 md:px-12 text-center bg-rayvok-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute w-[450px] h-[450px] rounded-full bg-[#C9FE34]/3 blur-[120px] bottom-[-200px] left-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto pt-10 max-w-4xl relative z-10 flex flex-col justify-center items-center">
          <h2 className="text-rayvok-offwhite text-[24px] md:text-[56px] lg:text-[46px] leading-[1.1] tracking-tight font-display mb-6">
            We treat every project as a joint venture, where our drive for creativity meets our <span className="text-rayvok-mid">clients&apos; pursuit of success</span>, achieving remarkable breakthroughs together.
          </h2>

          <div className="flex flex-col items-center gap-6">
            <Link 
              href="/start" 
              className="inline-flex items-center justify-center bg-rayvok-volt text-rayvok-black font-ui font-semibold text-[18px] tracking-wider uppercase px-9 py-4.5 rounded-full hover:bg-rayvok-volt-light hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_16px_rgba(201,254,52,0.15)] border-none"
            >
              Let&apos;s collaborate
            </Link>
            
            <div className="space-y-1.5 mt-2">
              <p className="caption text-rayvok-mid tracking-wide uppercase font-semibold">
                Free 30-min discovery call &middot; No commitment
              </p>
              <p className="text-rayvok-mid text-[13px]">
                Or email directly: <a href="mailto:hello@rayvok.com" className="text-rayvok-offwhite hover:text-rayvok-volt transition-colors font-medium">hello@rayvok.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
