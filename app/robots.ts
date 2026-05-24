import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = BASE_URL

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/static/'],
            },
            {
                // Allow major crawlers explicit access
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/api/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    }
}
