import Link from "next/link";
import ButtonCTA from "@/components/ui/ButtonCTA";

export default function FinalCTASection() {
  return (
    <section className="py-28 md:py-30 px-6 md:px-12  text-center bg-rayvok-offwhite relative md:h-screen overflow-hidden">
      {/* Soft warm background radial accent */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-[#C9FE34]/5 blur-[120px] bottom-[-200px] left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto pt-10 max-w-4xl relative z-10 flex flex-col justify-center items-center">
        <h2 className="text-[#1A1A1A] text-[24px] md:text-[56px] lg:text-[46px] leading-[1.1] tracking-tight font-display  mb-6">
          Your business deserves<br />
          a presence that works as hard as you do.<br />
          <span className="text-[#999999]">Let&apos;s build it together</span>
        </h2>
       

        {/* Dynamic primary pill CTA button matching screenshot styling */}
        <div className="flex flex-col items-center gap-6">
          <ButtonCTA 
            href="/start" 
          >
            Let&apos;s collaborate
          </ButtonCTA>
          
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