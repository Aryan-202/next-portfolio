import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://portfolio-leads.onrender.com'

    const routes = [
        '',
        '/about',
        '/projects',
        '/blog',
        '/pricing',
        '/contact',
        '/feedback',
        '/privacy',
        '/terms',
        '/blog/aryan-vishwakarma-automation-engineer',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }))
}
