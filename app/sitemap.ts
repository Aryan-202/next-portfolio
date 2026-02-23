import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aryan-vishwakarma.vercel.app';

    // Base routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/projects',
        '/blog',
        '/pricing',
        '/privacy',
        '/terms',
        '/feedback',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // You can fetch dynamic content here if needed, e.g.:
    // const posts = await getPosts();
    // const postRoutes = posts.map(post => ({ ... }));

    return [
        ...routes,
    ];
}
