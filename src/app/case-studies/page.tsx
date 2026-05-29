import WorkPageContent from "@/components/sections/work/WorkPageContent";
import Link from "next/link";

export const metadata = {
  title: "Case Studies — Rayvok",
  description: "Projects that convert. Web design and development built for one goal — making your business impossible to ignore online.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <WorkPageContent />
      
      {/* Light theme Final CTA Section */}
      <section className="py-28 md:py-30 px-6 md:px-12 text-center bg-rayvok-offwhite relative overflow-hidden border-t border-[#E1DDD5]">
        <div className="absolute w-[450px] h-[450px] rounded-full bg-[#C9FE34]/5 blur-[120px] bottom-[-200px] left-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto pt-10 max-w-4xl relative z-10 flex flex-col justify-center items-center">
          <h2 className="text-[#1A1A1A] text-[24px] md:text-[56px] lg:text-[46px] leading-[1.1] tracking-tight font-display mb-6">
            Your business deserves<br />
            a presence that works as hard as you do.<br />
            <span className="text-[#999999]">Let&apos;s build it together</span>
          </h2>

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
    </>
  );
}
