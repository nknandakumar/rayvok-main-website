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
      
      <SelectedWorkSection />
      <HowItWorksSection />
      <WhyRayvokSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
