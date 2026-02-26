import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Aryan Vishwakarma — AI, Mobile, Web & Software Services',
        short_name: 'Aryan Vishwakarma',
        description:
            'AI Automation, Mobile App Development, Website Development, Custom Software, Data Handling & IT Support — all under one roof.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        orientation: 'portrait-primary',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/images/profile/profile.jpeg',
                sizes: '512x512',
                type: 'image/jpeg',
                purpose: 'maskable',
            },
        ],
    }
}
