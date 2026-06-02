const { createClient } = require("@sanity/client");
const fs = require("fs");

// Native .env.local parser to eliminate external package dependencies
if (fs.existsSync(".env.local")) {
  const envContent = fs.readFileSync(".env.local", "utf8");
  envContent.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx > 0) {
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim();
      process.env[key] = val;
    }
  });
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId) {
  console.error("Error: NEXT_PUBLIC_SANITY_PROJECT_ID is not set in .env.local");
  process.exit(1);
}

if (!token) {
  console.error("Error: SANITY_WRITE_TOKEN is not set in .env.local");
  console.error("Please add SANITY_WRITE_TOKEN=your_token to .env.local to write data.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2026-06-02",
  useCdn: false,
});

const projects = [
  {
    company: "Space of Tools",
    name: "PDF & Document Workflow Platform",
    category: "Web design & Web App development",
    tags: ["Web App", "Web Design", "Development", "SEO Optimization"],
    result: "Improved user engagement by 20%",
    image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1780390885/34552185-686e-47e6-9880-1ef6700ed521_s5wlyj.png",
    images: [
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1780382373/2386b2f6-e96c-495e-ac7e-8ff9eddbb574_dunngk.png",
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1780381024/bb9b0ff6-8e42-4921-89bd-99e0f2041f82_z38feh.png",
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1780381472/83db746e-3610-43cc-8de6-37cc851eb698_tomede.png",
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1780381939/8e3fc23b-6529-47fd-b736-7897c1160d07_ogpv4a.png"
    ],
    slug: "space-of-tools",
    country: "India",
    flagCode: "in",
    type: "webapp",
    arrangeNumber: 1,
    client: "Space of Tools",
    liveWebsiteUrl: "https://spaceoftools.com",
    industry: "Productivity Software",
    platform: "Web Application",
    heroTitle: "Building a Modern Utility Platform for Document Productivity",
    heroTagline: "Visual storytelling built around light, raw concrete, and structure",
    abstract: "SpaceOfTools is a browser-native utility platform designed to help users convert, compress, edit, and optimize files without installing software or creating accounts. The project was built to simplify everyday document workflows while prioritizing privacy, performance, and usability. The platform focuses primarily on PDF productivity tools and supporting utilities for images, text, SEO, development, and finance.",
    challenges: {
      problem: "The online tools market is crowded with slow, ad-heavy websites that often require file uploads, registrations, or unnecessary complexity. Most platforms prioritize monetization over user experience, resulting in poor trust and usability.",
      solution: "We designed SpaceOfTools as a privacy-first, browser-native platform where users can complete common document and file tasks quickly and securely. The product architecture prioritizes PDF workflows, intuitive navigation, lightweight performance, and a distraction-free experience without advertisements or mandatory accounts."
    },
    results: {
      intro: "The results section stays conservative and truthful since the platform is new.",
      stats: [
        { value: "30+", label: "Tools available" },
        { value: "100%", label: "Browser-native" },
        { value: "100%", label: "No ads" }
      ]
    },
    extraImages: [
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1780382373/2386b2f6-e96c-495e-ac7e-8ff9eddbb574_dunngk.png",
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1780381024/bb9b0ff6-8e42-4921-89bd-99e0f2041f82_z38feh.png",
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1780381472/83db746e-3610-43cc-8de6-37cc851eb698_tomede.png",
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1780381939/8e3fc23b-6529-47fd-b736-7897c1160d07_ogpv4a.png"
    ]
  },
  {
    company: "Paddock Passion",
    name: "Motorsport Community Platform",
    category: "Web design & development",
    tags: ["Web Design", "Development", "User Experience"],
    result: "100% Mobile Responsive",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop"
    ],
    slug: "paddock-passion",
    country: "United Kingdom",
    flagCode: "gb",
    type: "webapp",
    arrangeNumber: 2,
    client: "Paddock Passion",
    liveWebsiteUrl: "https://example.com",
    heroBgImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2000&auto=format&fit=crop",
    industry: "Motorsport & Automotive",
    platform: "Responsive Website",
    heroTitle: "Building a Digital Home for Motorsport Enthusiasts",
    heroTagline: "Motorsport Community Platform for UK brand focused on audience growth",
    abstract: "Paddock Passion is a UK-based motorsport platform created to connect racing enthusiasts through engaging content, event coverage, and community-driven experiences. The goal was to establish a strong digital presence that reflected the energy and passion of motorsport while creating a scalable foundation for future audience growth.",
    challenges: {
      problem: "The client needed a professional online presence that could effectively communicate their brand, attract motorsport enthusiasts, and create a modern experience that stood apart from generic automotive websites.",
      solution: "We designed and developed a performance-focused website that combines strong visual storytelling, intuitive navigation, and responsive layouts. The experience was crafted to highlight content, improve engagement, and strengthen the brand's credibility within the motorsport community."
    },
    results: {
      intro: "The final platform provided Paddock Passion with a modern digital identity and a scalable foundation for future content growth. The website successfully transformed the brand's online presence while delivering a premium user experience across all devices.",
      stats: [
        { value: "100%", label: "Mobile Responsive" },
        { value: "1", label: "Successful client delivery" },
        { value: "UK", label: "Based client" }
      ]
    },
    extraImages: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605558230459-a52606d507b5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    company: "Cinemax",
    name: "Cinematic Videography Portfolio",
    category: "Web design & development",
    tags: ["Web Design", "Brand Experience", "Digital Presence"],
    result: "4+ Service categories",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478720143033-6a972678f1f4?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop"
    ],
    slug: "cinemax",
    country: "India",
    flagCode: "in",
    type: "website",
    arrangeNumber: 3,
    client: "Cinemax",
    liveWebsiteUrl: "https://example.com",
    heroBgImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2000&auto=format&fit=crop",
    industry: "Videography & Film Production",
    platform: "Responsive Website",
    heroTitle: "Creating a Premium Digital Showcase for Cinematic Storytelling",
    heroTagline: "A premium portfolio platform designed to showcase wedding films, cinematic productions, and reels",
    abstract: "Cinemax is a videography and creative production brand specializing in wedding films, cinematic videos, short films, reels, and commercial content. The project focused on building a premium digital presence that showcases creative work, communicates services clearly, improves local discoverability, and generates qualified inquiries from potential clients.",
    challenges: {
      problem: "The client lacked a dedicated online platform to professionally present their portfolio, explain services, display pricing information, and build trust with potential customers searching online.",
      solution: "We designed a cinematic portfolio experience centered around immersive visuals, project showcases, service packages, and inquiry-focused user journeys. The website was structured to improve credibility, increase online visibility, and provide potential clients with a clear understanding of available services and pricing."
    },
    results: {
      intro: "The platform provides Cinemax with a strong digital foundation for showcasing creative work and attracting future clients. By combining visual storytelling with clear service presentation, the website helps establish a more professional and trustworthy online presence.",
      stats: [
        { value: "4+", label: "Service Categories" },
        { value: "100%", label: "Mobile Responsive" },
        { value: "24/7", label: "Online Presence" }
      ]
    },
    extraImages: [
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478720143033-6a972678f1f4?q=80&w=1000&auto=format&fit=crop"
    ]
  }
];

const testimonials = [
  {
    author: "Arjun",
    role: "Founder",
    company: "SaaS Platform",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120",
    before: "Our old website looked like a side project and serious visitors were not turning into booked calls.",
    during: "Rayvok rebuilt the site around the offer, clarified the message, and kept every review round focused.",
    after: "Within two weeks of launch, three qualified leads reached out, more than the entire previous quarter.",
    arrangeNumber: 1
  },
  {
    author: "Meera",
    role: "Creative Director",
    company: "Architecture Studio",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120",
    before: "The studio portfolio had strong work, but the website did not explain our process or build trust quickly.",
    during: "The new pages were shaped around our best projects, client questions, and a cleaner consultation flow.",
    after: "We now send prospects to the site with confidence, and enquiries come in with much better context.",
    arrangeNumber: 2
  },
  {
    author: "Kiran",
    role: "CEO",
    company: "Consulting Firm",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120",
    before: "We had been disappointed by agencies before and our website was not creating enough sales conversations.",
    during: "The process was direct, transparent, and focused on what our buyers needed to understand before contacting us.",
    after: "The website finally explains our value clearly and brings in enquiries that are easier to qualify.",
    arrangeNumber: 3
  }
];

async function seed() {
  console.log("Starting seeding process...");

  // Seed projects
  for (const project of projects) {
    const doc = {
      _type: "project",
      _id: `project-${project.slug}`,
      company: project.company,
      name: project.name,
      slug: {
        _type: "slug",
        current: project.slug,
      },
      category: project.category,
      type: project.type,
      arrangeNumber: project.arrangeNumber,
      result: project.result,
      imageUrl: project.image,
      imageUrls: project.images, // Fallback fields in schemas
      country: project.country,
      flagCode: project.flagCode,
      client: project.client,
      liveWebsiteUrl: project.liveWebsiteUrl,
      heroBgImageUrl: project.heroBgImage,
      industry: project.industry,
      platform: project.platform,
      heroTitle: project.heroTitle,
      heroTagline: project.heroTagline,
      abstract: project.abstract,
      challenges: project.challenges,
      results: project.results,
      extraImageUrls: project.extraImages, // Extra fallback
    };
    
    console.log(`Writing project document: ${project.company}`);
    await client.createOrReplace(doc);
  }

  // Seed testimonials
  for (const testimonial of testimonials) {
    const doc = {
      _type: "testimonial",
      _id: `testimonial-${testimonial.author.toLowerCase()}`,
      author: testimonial.author,
      role: testimonial.role,
      company: testimonial.company,
      avatarUrl: testimonial.avatar,
      before: testimonial.before,
      during: testimonial.during,
      after: testimonial.after,
      arrangeNumber: testimonial.arrangeNumber,
    };

    console.log(`Writing testimonial document: ${testimonial.author}`);
    await client.createOrReplace(doc);
  }

  console.log("Seeding completed successfully!");
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
