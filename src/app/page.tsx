import HeroSection from "@/components/sections/home/HeroSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import SelectedWorkSection from "@/components/sections/home/SelectedWorkSection";
import HowItWorksSection from "@/components/sections/home/HowItWorksSection";
import WhyRayvokSection from "@/components/sections/home/WhyRayvokSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import FAQSection from "@/components/sections/home/FAQSection";
import FinalCTASection from "@/components/sections/home/FinalCTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      {/* Dark to Light Theme Transition Bridge */}
      <div className="h-32 bg-gradient-to-b from-[#0E0E0E] to-[#FAF8F5] relative z-10 -mt-1 -mb-1" />
      <SelectedWorkSection />
      <HowItWorksSection />
      <WhyRayvokSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
