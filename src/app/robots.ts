import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'Anthropic-ai',
          'Claude-Web',
          'ClaudeBot',
          'Cohere-ai',
          'PerplexityBot',
          'YouBot',
          'Applebot-Extended'
        ],
        allow: '/',
      }
    ],
    sitemap: 'https://rayvok.com/sitemap.xml',
  }
}
