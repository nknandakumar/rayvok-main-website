import Link from "next/link";
import Image from "next/image";
import FinalCTASection from "@/components/sections/home/FinalCTASection";

export const metadata = {
  title: "Work — Rayvok",
  description: "Projects that convert. Web design and development built for one goal — making your business impossible to ignore online.",
};

export default function WorkPage() {
  const projects = [
    {
      name: "SaaS Platform Redesign",
      category: "SaaS · Web design & development",
      result: "Launched in 3 weeks · 60% increase in demo requests",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      slug: "saas-platform"
    },
    {
      name: "Architecture Studio Portfolio",
      category: "Professional · Web design & development",
      result: "Launched in 4 weeks · 3x more inbound leads",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
      slug: "architecture-studio"
    },
    {
      name: "D2C E-commerce Experience",
      category: "E-commerce · Web design & development",
      result: "Conversion rate increased by 2.4%",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2670&auto=format&fit=crop",
      slug: "d2c-brand"
    },
    {
      name: "B2B Tech Landing Page",
      category: "Landing Page · Web design",
      result: "Cost per acquisition dropped 40%",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop",
      slug: "b2b-landing-page"
    }
  ];

  return (
    <>
      <section className="pt-32 pb-20 px-6 md:px-12 bg-rayvok-black border-b border-rayvok-surface">
        <div className="container mx-auto">
          <p className="label text-rayvok-mid mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
            Selected work
          </p>
          <h1 className="text-rayvok-offwhite mb-6 max-w-4xl animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            Projects that <span className="text-rayvok-volt">convert.</span>
          </h1>
          <p className="text-rayvok-mid text-body-lg max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
            Web design and development built for one goal —
            making your business impossible to ignore online.
          </p>

          {/* Filter Labels */}
          <div className="flex flex-wrap gap-4 mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            {["All", "Web Design", "Web Development", "Landing Pages"].map((filter, i) => (
              <button 
                key={i} 
                className={`font-ui text-[13px] tracking-[0.06em] uppercase px-4 py-2 rounded-full border transition-colors ${
                  i === 0 
                    ? "border-rayvok-volt text-rayvok-volt bg-rayvok-volt/10" 
                    : "border-rayvok-surface text-rayvok-mid hover:border-rayvok-mid"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-rayvok-deep">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((project, index) => (
              <Link href={`/work/${project.slug}`} key={index} className={`group block ${index % 2 !== 0 ? 'md:mt-24' : ''}`}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6 border-[0.5px] border-rayvok-surface">
                  <div className="absolute inset-0 bg-rayvok-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <Image 
                    src={project.image} 
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <p className="caption text-rayvok-mid">{project.category}</p>
                  <h3 className="text-rayvok-offwhite group-hover:text-rayvok-volt transition-colors">{project.name}</h3>
                  <p className="text-rayvok-mid font-ui text-[14px] bg-rayvok-surface/50 inline-block px-3 py-1 rounded-sm">
                    {project.result}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
