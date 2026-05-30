import WorkPageContent from "@/components/sections/work/WorkPageContent";
import FinalCTASection from "@/components/sections/home/FinalCTASection";


export const metadata = {
  title: "Case Studies — Rayvok",
  description: "Projects that convert. Web design and development built for one goal — making your business impossible to ignore online.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <WorkPageContent />
      <FinalCTASection />
    </>
  );
}
