import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectMetadataGrid from "@/components/ui/ProjectMetadataGrid";
import CountUpText from "@/components/ui/CountUpText";

// Comprehensive premium mockup dataset for all 5 existing cases
const projectsData: Record<string, {
  client: string;
  industry: string;
  country: string;
  platform: string;
  heroTitle: string;
  heroTagline: string;
  abstract: string;
  tags: string[];
  images: string[];
  challenges: { problem: string; solution: string };
  results: { intro: string; stats: { value: string; label: string }[] };
  heroBgImage?: string;
  liveWebsiteUrl?: string;
  extraImages?: string[];
}> = {
  "saas-platform": {
    client: "Nexlify Inc.",
    liveWebsiteUrl: "https://example.com",
    heroBgImage: "https://i.pinimg.com/1200x/13/ac/a8/13aca8182c28ea7fedf03704760781d0.jpg",
    industry: "AI Analytics",
    country: "USA",
    platform: "Web & Mobile",
    heroTitle: "UI/UX Design for an AI Analytics Platform",
    heroTagline: "Design that makes AI insights explainable and trustworthy",
    abstract: "Nexlify is an AI-powered copilot that delivers actionable insights with intelligent analysis, licensed expert knowledge, and long-term pattern tracking. The request was to design the mobile app UI/UX and admin panel in a natural and user-centric style.",
    tags: ["SaaS", "AI Analytics", "Dashboard", "Framer Motion"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop", // main mockup laptop
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop", // laptop detail view
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop", // mobile UI closeup
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop"  // mobile detail view
    ],
    challenges: {
      problem: "The core challenge was making automated insights explainable and trustworthy. The design team needed to build a visual system that communicates intelligence hierarchy, supports long-term pattern tracking, and balances technical depth with minimalism.",
      solution: "We built a layered information architecture with high-level summaries that expand into deep dives, and transparency at every level. The visual system separates AI-generated insights from expert-reviewed guidance with clear, structured design language that communicates trust."
    },
    extraImages: [
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1780388850/ChatGPT_Image_Jun_2_2026_01_57_12_PM_stss9k.png",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop"
    ],
    results: {
      intro: "Nexlify's platform now reflects their deep technical expertise — helping them stand out in a highly competitive market and convert more enterprise visitors.",
      stats: [
        { value: "3x", label: "More clicks" },
        { value: "2x", label: "Longer session time" },
        { value: "4", label: "New inquiries in 30 days" }
      ]
    }
  },
  "space-of-tools": {
    client: "Space of Tools",
    liveWebsiteUrl: "https://spaceoftools.com",
    industry: "Productivity Software",
    country: "India",
    platform: "Web Application",
    heroTitle: "Building a Modern Utility Platform for Document Productivity",
    heroTagline: "Visual storytelling built around light, raw concrete, and structure",
    abstract: "SpaceOfTools is a browser-native utility platform designed to help users convert, compress, edit, and optimize files without installing software or creating accounts. The project was built to simplify everyday document workflows while prioritizing privacy, performance, and usability. The platform focuses primarily on PDF productivity tools and supporting utilities for images, text, SEO, development, and finance.",
    tags: ["Product Design", "Web Design", "Development","SEO Strategy"],
    images: [
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1780382373/2386b2f6-e96c-495e-ac7e-8ff9eddbb574_dunngk.png",
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1780381024/bb9b0ff6-8e42-4921-89bd-99e0f2041f82_z38feh.png",
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1780381472/83db746e-3610-43cc-8de6-37cc851eb698_tomede.png",
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1780381939/8e3fc23b-6529-47fd-b736-7897c1160d07_ogpv4a.png"
    ],
    challenges: {
      problem: "The online tools market is crowded with slow, ad-heavy websites that often require file uploads, registrations, or unnecessary complexity. Most platforms prioritize monetization over user experience, resulting in poor trust and usability.",
      solution: "We designed SpaceOfTools as a privacy-first, browser-native platform where users can complete common document and file tasks quickly and securely. The product architecture prioritizes PDF workflows, intuitive navigation, lightweight performance, and a distraction-free experience without advertisements or mandatory accounts."
    },
   
    results: {
      intro: "The results section should stay conservative and truthful since the platform is new.",
      stats: [
        { value: "30+", label: "Tools available" },
        { value: "100%", label: "Browser-native" },
        { value: "100%", label: "No ads" }
      ]
    }
  },
  "d2c-brand": {
    client: "Orion Commerce",
    liveWebsiteUrl: "https://example.com",
    industry: "E-commerce",
    country: "UK",
    platform: "Web App",
    heroTitle: "D2C E-commerce Shopping Experience",
    heroTagline: "Frictionless checkout meets editorial design for apparel",
    abstract: "Orion Commerce represents the next wave of apparel brands, focusing on sustainable fabrics and modern fit. We developed their digital flagship experience, merging editorial fashion layouts with high-speed headless checkout capabilities.",
    tags: ["E-commerce", "Web Design", "Development"],
    images: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop"
    ],
    challenges: {
      problem: "Most e-commerce systems are templates that look identical and lose brand personality in order to convert. Orion's previous platform suffered from a 78% cart abandonment rate due to complex checkouts and slow mobile speeds.",
      solution: "We separated content and commerce. The catalog uses editorial-style asymmetrical grids that showcase high-end details. The checkout was rebuilt into a single-step progressive form that loads in less than 200ms."
    },
    extraImages: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop"
    ],
    results: {
      intro: "Orion's digital flagship set new performance standards, successfully dropping shopping friction while increasing average order value.",
      stats: [
        { value: "2.4%", label: "Conversion increase" },
        { value: "-45%", label: "Cart abandonment" },
        { value: "1.4s", label: "Mobile load time" }
      ]
    }
  },
  "b2b-landing-page": {
    client: "Apex Tech",
    liveWebsiteUrl: "https://example.com",
    industry: "B2B Tech",
    country: "GER",
    platform: "Responsive Web",
    heroTitle: "B2B Tech Landing Page Experience",
    heroTagline: "Converting enterprise traffic through data visualization",
    abstract: "Apex Tech designs infrastructure systems for modern logistics companies. We built an enterprise landing page designed to explain technical network architectures and funnel operations teams into executive demos.",
    tags: ["Landing Page", "Web Design", "Development"],
    images: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop"
    ],
    challenges: {
      problem: "Apex's product was highly technical and abstract, making it difficult for landing page visitors to understand the value proposition quickly. Their bounce rate was over 65%, and inbound demos had stalled.",
      solution: "We designed interactive data diagrams and interactive code tabs that demonstrate real-time server telemetry. By animating key system benefits, we made concrete value understandable within the first 10 seconds of load."
    },
    extraImages: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop"
    ],
    results: {
      intro: "Apex Tech converted their landing page into their most active lead generation asset, significantly reducing sales cycle friction.",
      stats: [
        { value: "40%", label: "Acquisition drop cost" },
        { value: "+85%", label: "Demo sign-ups" },
        { value: "0", label: "Complex templates used" }
      ]
    }
  },
  "creative-branding": {
    client: "Lumina Agency",
    liveWebsiteUrl: "https://example.com",
    industry: "Creative Agency",
    country: "FRA",
    platform: "Web & Mobile",
    heroTitle: "Branding Showcase & Immersive Portfolio",
    heroTagline: "A playful, vibrant digital experience for a boutique agency",
    abstract: "Lumina Agency is an award-winning design agency in Paris. They needed a digital presence that acts as an extension of their creative thinking, using fluid layouts, custom interactive cursor systems, and high-fidelity typography.",
    tags: ["Branding", "Creative", "Web Design"],
    images: [
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561070791-26c113006238?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop"
    ],
    challenges: {
      problem: "Creative agency websites frequently overcomplicate usability, loading massive, slow video backgrounds and heavy elements that frustrate potential clients on mobile devices, leading to lost inquiries.",
      solution: "We focused on micro-interactions. The site utilizes light SVGs and smooth HTML5 canvas animations. Creative brand showcase cards expand dynamically into fullscreen case studies, achieving performance without sacrificing design soul."
    },
    extraImages: [
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561070791-26c113006238?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop"
    ],
    results: {
      intro: "Lumina's website has set a benchmark for creative showcases, proving that cutting-edge visual design and perfect load times can exist in harmony.",
      stats: [
        { value: "95", label: "Lighthouse mobile score" },
        { value: "1.2s", label: "First Contentful Paint" },
        { value: "2.5x", label: "Inbound client deal size" }
      ]
    }
  }
};

// Global metadata lookup for Related studies catalog mapping
const catalogProjects = [
  {
    company: "Nexlify Inc.",
    name: "SaaS Platform Redesign",
    result: "60% increase in demo requests",
    image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1779617908/093bcda213e0b719adce00c8a1c8292a_kaqbvt.jpg",
    slug: "saas-platform",
    tags: ["SaaS", "Web Design", "Development"],
    flagCode: "us",
    country: "USA"
  },
  {
    company: "Space of Tools",
    name: "PDF & Document Workflow Platform",
    result: "Improved user engagement by 20%",
    image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1780390885/34552185-686e-47e6-9880-1ef6700ed521_s5wlyj.png",
    slug: "space-of-tools",
    tags: ["Web App", "Web Design", "Development", "SEO Optimization"],
    flagCode: "in",
    country: "India"
  },
  {
    company: "Orion Commerce",
    name: "D2C E-commerce Experience",
    result: "2.4% conversion increase",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2670&auto=format&fit=crop",
    slug: "d2c-brand",
    tags: ["E-commerce", "Web Design", "Development"],
    flagCode: "gb",
    country: "UK"
  },
  {
    company: "Apex Tech",
    name: "B2B Tech Landing Page",
    result: "40% acquisition drop",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop",
    slug: "b2b-landing-page",
    tags: ["Landing Page", "Web Design", "Development"],
    flagCode: "de",
    country: "GER"
  },
  {
    company: "Lumina Agency",
    name: "Creative Branding Experience",
    result: "95 Lighthouse score",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    slug: "creative-branding",
    tags: ["Branding", "Creative", "Web Design"],
    flagCode: "fr",
    country: "FRA"
  }
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData[slug];
  
  if (!project) return { title: "Project Not Found — Rayvok" };
  
  return {
    title: `${project.client} — ${project.heroTitle} &middot; Rayvok`,
    description: project.heroTagline,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  // Cyclically select exactly 2 related projects following the current project's index in the array
  const allSlugs = Object.keys(projectsData);
  const currentIndex = allSlugs.indexOf(slug);
  
  const relatedProjects = [
    catalogProjects[(currentIndex + 1) % allSlugs.length],
    catalogProjects[(currentIndex + 2) % allSlugs.length]
  ];

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
              {project.tags.map((tag, i) => (
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
            src={project.images[0]} 
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
              src={project.images[1]} 
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
                src={project.images[2]} 
                alt={`${project.client} device preview mobile 1`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>
            <div className="w-full aspect-[1/1] relative overflow-hidden border border-white/10 bg-[#121212] shadow-2xl">
              <Image 
                src={project.images[3]} 
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
            {project.results.stats.map((stat, i) => (
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
