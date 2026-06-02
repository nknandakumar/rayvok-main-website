import HeroSection from "@/components/sections/home/HeroSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import SelectedWorkSection from "@/components/sections/home/SelectedWorkSection";
import HowItWorksSection from "@/components/sections/home/HowItWorksSection";
import WhyRayvokSection from "@/components/sections/home/WhyRayvokSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import FAQSection from "@/components/sections/home/FAQSection";
import FinalCTASection from "@/components/sections/home/FinalCTASection";

import { getProjects } from "@/sanity/client";

export const dynamic = "force-dynamic";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <div id="home"><HeroSection /></div>
      <div id="services"><ServicesSection /></div>
      <div id="work"><SelectedWorkSection initialProjects={projects} /></div>
      <div id="process"><HowItWorksSection /></div>
      <div id="why-us"><WhyRayvokSection /></div>
      <div id="testimonials"><TestimonialsSection /></div>
      <div id="faq"><FAQSection /></div>
      <div id="cta"><FinalCTASection /></div>
    </>
  );
}
