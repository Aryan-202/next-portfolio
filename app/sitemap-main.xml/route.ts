import { NextResponse } from 'next/server';
import sitemap from '../sitemap';

export async function GET() {
    try {
        const sitemapData = await sitemap();
        
        let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
        
        for (const entry of sitemapData) {
            xml += `  <url>\n`;
            xml += `    <loc>${entry.url}</loc>\n`;
            if (entry.lastModified) {
                const dateStr = entry.lastModified instanceof Date 
                    ? entry.lastModified.toISOString() 
                    : new Date(entry.lastModified).toISOString();
                xml += `    <lastmod>${dateStr}</lastmod>\n`;
            }
            if (entry.changeFrequency) {
                xml += `    <changefreq>${entry.changeFrequency}</changefreq>\n`;
            }
            if (entry.priority !== undefined) {
                xml += `    <priority>${entry.priority}</priority>\n`;
            }
            xml += `  </url>\n`;
        }
        
        xml += `</urlset>`;
        
        return new NextResponse(xml, {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
            },
        });
    } catch (error) {
        console.error("Error generating dynamic sitemap:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
export const dynamic = 'force-static';
export const revalidate = 86400; // Cache for 24 hours
