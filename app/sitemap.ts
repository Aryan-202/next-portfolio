import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aryan-vishwakarma.vercel.app'

  return [
    {
      url: baseUrl,
      lastModified: '2026-02-22',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: '2026-02-22',
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: '2026-02-22',
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]
}