import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = [
    {
      url: 'https://rayvok.com',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1.0,
    },
    {
      url: 'https://rayvok.com/case-studies',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://rayvok.com/about',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: 'https://rayvok.com/start',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    },
  ];

  const caseStudies = [
    'saas-platform',
    'architecture-studio',
    'd2c-brand',
    'b2b-landing-page',
    'creative-branding'
  ].map((slug) => ({
    url: `https://rayvok.com/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...baseRoutes, ...caseStudies];
}
