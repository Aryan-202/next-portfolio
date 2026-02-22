import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aryan-vishwakarma.vercel.app'

    // Static routes
    const routes = [
        '',
        '/about',
        '/projects',
        '/blog',
        '/pricing',
        '/contact',
        '/feedback',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }))

    // Legal/Minor routes
    const legalRoutes = [
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.3,
    }))

    // Specific blog posts or dynamic content if any
    const blogRoutes = [
        '/blog/aryan-vishwakarma-automation-engineer',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...routes, ...legalRoutes, ...blogRoutes]
}
