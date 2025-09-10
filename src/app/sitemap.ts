import { MetadataRoute } from 'next'
import { PORTFOLIO_CONTENT } from '@/content/portfolio'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bedirhanugurlu.com'
  
  // Ana sayfalar
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/full-version`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Portfolio sayfaları
  const portfolioPages = PORTFOLIO_CONTENT.map((project) => ({
    url: `${baseUrl}${project.url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...portfolioPages]
}
