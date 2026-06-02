import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectMetadataGrid from "@/components/ui/ProjectMetadataGrid";
import CountUpText from "@/components/ui/CountUpText";

import { getProjects, SanityProject } from "@/sanity/client";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) return { title: "Project Not Found — Rayvok" };
  
  return {
    title: `${project.client} — ${project.heroTitle} · Rayvok`,
    description: project.heroTagline,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Cyclically select exactly 2 related projects following the current project's index in the array
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  
  const relatedProjects = [
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length]
  ];

  // Safely guarantee 4 showcase images by falling back to the main card image
  const showcaseImages = [
    ...(project.images || [])
  ];
  while (showcaseImages.length < 4) {
    showcaseImages.push(project.image);
  }

  return (
    <article className="w-full relative overflow-x-hidden bg-rayvok-black">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Dark theme - bg-rayvok-black)                            */}
      {/* ========================================================================= */}
      <section 
        className={`pt-36 relative overflow-hidden flex flex-col items-center ${project.heroBgImage ? '' : 'bg-rayvok-black'}`}
        style={
          project.heroBgImage 
            ? {
                backgroundImage: `url('${project.heroBgImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }
            : undefined
        }
      >
        {project.heroBgImage && (
          <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
        )}
        {/* Subtle tonal glow accent */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-rayvok-volt/5 blur-[180px] -top-96 left-1/2 -translate-x-1/2 pointer-events-none -z-10" />

        <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center relative z-10">
          <div className="flex flex-col items-center mb-8">
            
            <h1 className="text-rayvok-offwhite text-[42px] md:text-[76px] lg:text-[84px] font-black leading-[1.05] tracking-tight max-w-4xl font-display mb-10 font-medium animate-fade-in-up">
              {project.heroTitle}
            </h1>
            
            {/* Tag Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 animate-fade-in-up" style={{ animationDelay: "0.15s", animationFillMode: "both" }}>
              {(project.tags || []).map((tag, i) => (
                <span 
                  key={i} 
                  className="font-ui text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-full border border-white/10 text-rayvok-offwhite"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Hero Showcase Frame (FULL WIDTH, NO PADDING) */}
        <div 
          className="w-full aspect-[16/9] relative overflow-hidden border-y border-white/10 bg-[#121212] shadow-2xl mt-16 animate-fade-in-up"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          <Image 
            src={showcaseImages[0]} 
            alt={`${project.client} main mockup`}
            fill
            className="object-cover scale-[1.02] hover:scale-[1.00] transition-transform duration-700 ease-out"
            priority
            sizes="100vw"
          />
        </div>

      
      </section>

      {/* ========================================================================= */}
      {/* 2. INFO BAR & ABSTRACT SECTION (Light theme - bg-rayvok-offwhite)           */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-rayvok-offwhite text-rayvok-black relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          {/* Metadata Row */}
          <ProjectMetadataGrid 
            client={project.client} 
            industry={project.industry} 
            country={project.country} 
            platform={project.platform} 
          />

          {/* Abstract Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-3">
              <p className="font-mono text-[#8C8C85] text-[11px] md:text-[16px] tracking-wider uppercase">Abstract</p>
            </div>
            <div className="md:col-span-9">
              <p className="font-body text-[18px] md:text-[26px] text-rayvok-black leading-relaxed max-w-3xl">
                {/* Dynamically format bold/italic key phrases manually for the layout style */}
                {project.abstract.includes(project.client) ? (
                  <>
                    <span className="font-semibold italic">{project.abstract.slice(0, project.abstract.indexOf(project.client) + project.client.length)}</span>
                    {project.abstract.slice(project.abstract.indexOf(project.client) + project.client.length)}
                  </>
                ) : project.abstract}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. IMAGERY GRID SECTION (Dark theme - bg-rayvok-black)                      */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-rayvok-black relative overflow-hidden">
        <div className="container mx-auto max-w-9xl">
          {/* Main Large Showcase Mockup */}
          <div className="w-full aspect-[16/10] relative overflow-hidden border border-white/10 bg-[#121212] shadow-2xl mb-8">
            <Image 
              src={showcaseImages[1]} 
              alt={`${project.client} desktop preview`}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>

          {/* Staggered Double Device Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full aspect-[1/1] relative overflow-hidden border border-white/10 bg-[#121212] shadow-2xl">
              <Image 
                src={showcaseImages[2]} 
                alt={`${project.client} device preview mobile 1`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>
            <div className="w-full aspect-[1/1] relative overflow-hidden border border-white/10 bg-[#121212] shadow-2xl">
              <Image 
                src={showcaseImages[3]} 
                alt={`${project.client} device preview mobile 2`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CHALLENGES & SOLUTIONS SECTION (Light theme - bg-rayvok-offwhite)        */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-rayvok-offwhite text-rayvok-black relative overflow-hidden">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display font-medium text-[36px] md:text-[56px] text-rayvok-black text-center mb-16 tracking-tight leading-none">
            Challenges &amp; Solutions
          </h2>

          <div className="flex flex-col gap-6 w-full">
            {/* Problem card */}
            <div className="bg-white p-8 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.015)] border border-[#ECEAE4] flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="md:w-1/4">
                <span className="font-display font-semibold text-[20px] text-rayvok-black uppercase tracking-wide block">Problem</span>
              </div>
              <div className="md:w-3/4">
                <p className="font-body text-[#4A4A45] text-[16px] md:text-[18px] leading-relaxed">
                  {project.challenges.problem}
                </p>
              </div>
            </div>

            {/* Solution card */}
            <div className="bg-white p-8 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.015)] border border-[#ECEAE4] rounded-lg flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="md:w-1/4">
                <span className="font-display font-semibold text-[20px] text-rayvok-black uppercase tracking-wide block">Solution</span>
              </div>
              <div className="md:w-3/4">
                <p className="font-body text-[#4A4A45] text-[16px] md:text-[18px] leading-relaxed">
                  {project.challenges.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4.5 EXTRA IMAGERY GRID SECTION (Dark theme - bg-rayvok-black)              */}
      {/* ========================================================================= */}
      {project.extraImages && project.extraImages.length === 4 && (
        <section className="py-24 px-6 md:px-12 bg-rayvok-black relative overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.extraImages.map((img, i) => (
                <div key={i} className="w-full aspect-[4/3] relative overflow-hidden border border-white/10 bg-[#121212] shadow-2xl">
                  <Image 
                    src={img} 
                    alt={`${project.client} extra grid image ${i + 1}`}
                    fill
                    className="object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 5. RESULTS SECTION (Dark theme - bg-[#121212])                              */}
      {/* ========================================================================= */}
      <section className="py-28 px-6 md:px-12 bg-[#121212] text-rayvok-offwhite relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          {/* Split Row Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
            <div className="lg:col-span-4">
              <span className="font-display font-semibold text-[32px] md:text-[40px] text-white/30 tracking-tight">
                Results.
              </span>
            </div>
            <div className="lg:col-span-8">
              <p className="font-display text-[20px] md:text-[28px] text-rayvok-offwhite font-light leading-relaxed">
                {project.results.intro}
              </p>
            </div>
          </div>

          {/* Metric Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-white/5 pt-16">
            {(project.results?.stats || []).map((stat, i) => (
              <div key={i} className="flex flex-col items-start">
                <p className="text-rayvok-volt font-display font-medium text-[56px] md:text-[76px] lg:text-[88px] font-black leading-none tracking-tighter mb-2">
                  <CountUpText value={stat.value} />
                </p>
                <p className="text-rayvok-mid font-ui text-[12px] uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Live Website Button */}
          {project.liveWebsiteUrl && (
            <div className="mt-20 flex justify-center md:justify-start">
              <a 
                href={project.liveWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-rayvok-volt text-rayvok-black hover:bg-rayvok-offwhite transition-all duration-300 rounded-full font-ui text-[13px] font-semibold uppercase tracking-widest"
              >
                <span>Live Website</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19L19 5M19 5V14M19 5H10" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. RELATED CASE STUDIES SECTION (Dark theme - bg-rayvok-black)            */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-rayvok-black text-rayvok-offwhite relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-14">
            <h3 className="font-display font-medium text-[32px] md:text-[48px] tracking-tight leading-none text-rayvok-offwhite">
              Related case studies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {relatedProjects.map((relProj, index) => (
              <Link 
                key={index}
                href={`/case-studies/${relProj.slug}`}
                className="group block w-full cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden mb-6 border border-white/10 bg-[#121212]">
                  <Image 
                    src={relProj.image} 
                    alt={relProj.name}
                    fill
                    className="object-cover scale-[1.05] transition-transform duration-600 ease-out group-hover:scale-[1.00]"
                    sizes="(max-width: 768px) 100vw, 640px"
                  />
                  <div 
                    className="absolute inset-0 z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{ boxShadow: "inset 0 0 80px 24px rgba(0,0,0,0.48)" }}
                  />

                  <div className="absolute bottom-4 right-4 z-20 bg-rayvok-black/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://flagcdn.com/w40/${relProj.flagCode}.png`}
                      alt={relProj.country}
                      width={20}
                      height={15}
                      className="rounded-[2px] rounded-full object-cover"
                      style={{ width: 20, height: 20 }}
                    />
                    <span className="font-ui font-semibold text-[11px] text-rayvok-offwhite tracking-wider uppercase leading-none">
                      {relProj.country}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-rayvok-mid font-ui text-[12px] tracking-wider uppercase">
                    <span>{relProj.company}</span>
                  </div>
                  <h4 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-display font-medium tracking-tight leading-tight group-hover:text-rayvok-volt transition-colors duration-300">
                    {relProj.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="font-ui text-[11px] text-rayvok-volt tracking-wider uppercase">
                      {relProj.result}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </article>
  );
}
