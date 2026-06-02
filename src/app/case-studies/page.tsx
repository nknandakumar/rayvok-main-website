import WorkPageContent from "@/components/sections/work/WorkPageContent";
import FinalCTASection from "@/components/sections/home/FinalCTASection";


export const metadata = {
  title: "Case Studies — Rayvok",
  description: "Projects that convert. Web design and development built for one goal — making your business impossible to ignore online.",
};

import { getProjects } from "@/sanity/client";

export const dynamic = "force-dynamic";

export default async function CaseStudiesPage() {
  const projects = await getProjects();

  return (
    <>
      <WorkPageContent initialProjects={projects} />
      <FinalCTASection />
    </>
  );
}
