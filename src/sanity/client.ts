import { createClient } from "@sanity/client";

export interface SanityProject {
  company: string;
  name: string;
  category: string;
  cardEyebrow?: string;
  tags: string[];
  result: string;
  image: string;
  images: string[];
  slug: string;
  country: string;
  flagCode: string;
  type: "website" | "webapp";
  arrangeNumber: number;
  client: string;
  liveWebsiteUrl?: string;
  heroBgImage?: string;
  industry: string;
  platform: string;
  heroTitle: string;
  heroTagline: string;
  abstract: string;
  challenges: {
    problem: string;
    solution: string;
  };
  results: {
    intro: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  extraImages?: string[];
}

export interface SanityTestimonial {
  author: string;
  role: string;
  company: string;
  avatar: string;
  before: string;
  during: string;
  after: string;
  arrangeNumber: number;
}

// Fallback Mock Projects (Space of Tools, Paddock Passion, Cinemax)
export const fallbackProjects: SanityProject[] = [
  {
    company: "Space of Tools",
    name: "PDF & Document Workflow Platform",
    category: "Web design & Web App development",
    cardEyebrow: "Document Productivity Tool",
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
    cardEyebrow: "Motorsport Community Platform",
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
    cardEyebrow: "Cinematic Videography Portfolio",
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

// Fallback Mock Testimonials
export const fallbackTestimonials: SanityTestimonial[] = [
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

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId && typeof window === "undefined") {
  console.warn("⚠️ [Rayvok] NEXT_PUBLIC_SANITY_PROJECT_ID is not configured in environment variables. Website is running in fallbacks-only mode.");
}

// Create client conditionally (suppress warn if not configured)
export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2026-06-02",
      useCdn: true,
    })
  : null;

/**
 * Fetches all projects from Sanity ordered by arrangeNumber, falling back gracefully to mock data.
 */
export async function getProjects(): Promise<SanityProject[]> {
  if (!client) {
    return fallbackProjects;
  }
  try {
    const query = `*[_type == "project" && !(_id in path("drafts.**")) && defined(company)] | order(arrangeNumber asc) {
      company,
      name,
      category,
      tags,
      result,
      "image": coalesce(image.asset->url, imageUrl, "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"),
      "images": images[].asset->url,
      "slug": slug.current,
      country,
      flagCode,
      type,
      arrangeNumber,
      client,
      liveWebsiteUrl,
      "heroBgImage": coalesce(heroBgImage.asset->url, heroBgImageUrl),
      cardEyebrow,
      industry,
      platform,
      heroTitle,
      heroTagline,
      abstract,
      challenges {
        problem,
        solution
      },
      results {
        intro,
        stats[] {
          value,
          label
        }
      },
      "extraImages": extraImages[].asset->url
    }`;
    const data = await client.fetch<any[]>(query);
    if (data && data.length > 0) {
      return data.map((item) => {
        const company = item.company || "Client Brand";
        const name = item.name || "Web Design & Development";
        const mainImage = item.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop";
        return {
          ...item,
          company,
          name,
          category: item.category || "Web design & development",
          cardEyebrow: item.cardEyebrow || item.category || "Web Design & Development",
          tags: item.category ? item.category.split(/[&%]/).map((c: string) => c.trim()).filter(Boolean) : ["Web Design", "Development"],
          result: item.result || "100% Mobile Responsive",
          image: mainImage,
          images: (item.images && item.images.length > 0) ? item.images : undefined,
          slug: item.slug || "case-study",
          country: item.country || "Global",
          flagCode: item.flagCode ? item.flagCode.toLowerCase() : "un",
          type: item.type || "website",
          arrangeNumber: typeof item.arrangeNumber === "number" ? item.arrangeNumber : 99,
          client: item.client || company,
          industry: item.industry || "Digital Technology",
          platform: item.platform || "Responsive Website",
          heroTitle: item.heroTitle || `Building a Digital Experience for ${company}`,
          heroTagline: item.heroTagline || `Premium custom digital solution crafted for brand growth`,
          abstract: item.abstract || `A comprehensive overview of our custom solution designed to address specific digital needs, optimize performance, and streamline workflows.`,
          challenges: {
            problem: item.challenges?.problem || "The client required a modern digital presence to communicate value effectively, build audience trust, and provide a seamless mobile experience.",
            solution: item.challenges?.solution || "We designed and developed a custom, high-performance web solution utilizing modern typography, dynamic animations, and fully responsive layouts."
          },
          results: {
            intro: item.results?.intro || "The final launch successfully established a premium brand identity, optimized loading speed across devices, and received positive user feedback.",
            stats: (item.results?.stats && item.results.stats.length > 0) ? item.results.stats : [
              { value: "100%", label: "Mobile Responsive" },
              { value: "Premium", label: "UI Design" }
            ]
          },
          extraImages: (item.extraImages && item.extraImages.length > 0) ? item.extraImages : undefined
        } as SanityProject;
      });
    }
    if (typeof window === "undefined") {
      console.warn("⚠️ [Rayvok] getProjects fetched empty results from Sanity. Returning fallbackProjects.");
    }
    return fallbackProjects;
  } catch (error) {
    console.warn("Failed to fetch projects from Sanity, falling back:", error);
    return fallbackProjects;
  }
}

/**
 * Fetches testimonials ordered by arrangeNumber, falling back gracefully to mock data.
 */
export async function getTestimonials(): Promise<SanityTestimonial[]> {
  if (!client) {
    return fallbackTestimonials;
  }
  try {
    const query = `*[_type == "testimonial" && !(_id in path("drafts.**")) && defined(author)] | order(arrangeNumber asc) {
      author,
      role,
      company,
      "avatar": coalesce(avatar.asset->url, avatarUrl),
      before,
      during,
      after,
      arrangeNumber
    }`;
    const data = await client.fetch<SanityTestimonial[]>(query);
    if (data && data.length > 0) {
      return data;
    }
    return fallbackTestimonials;
  } catch (error) {
    console.warn("Failed to fetch testimonials from Sanity, falling back:", error);
    return fallbackTestimonials;
  }
}
