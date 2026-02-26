import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aryan-vishwakarma.vercel.app';
    const lastModified = new Date();

    // Core pages
    const coreRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.75,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/feedback`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    // All 6 service landing pages (high priority — revenue pages)
    const serviceRoutes: MetadataRoute.Sitemap = [
        'ai-automation',
        'mobile-app-development',
        'website-development',
        'custom-software',
        'data-handling',
        'it-support',
    ].map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Blog articles
    const blogRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/blog/aryan-vishwakarma-automation-engineer`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.65,
        },
    ];

    return [...coreRoutes, ...serviceRoutes, ...blogRoutes];
}
