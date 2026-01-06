export interface SocialLinks {
    name :string,
    href: string,
    icon: string
}

export const SOCIAL_LINKS: SocialLinks[] = [
    {
        name: 'GitHub',
        href: 'https://github.com/Aryan-202',
        icon: 'github'
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/aryanspf/',
        icon: 'linkedin'
    },
    {
        name: 'X',
        href: 'https://x.com/AryanxSenpai',
        icon: 'x'
    },
] as const