import { PROFILE_INFO, SOCIAL_LINKS } from "@/data";

export interface FooterLink {
  name: string;
  href: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  availability: string;
}

export interface FooterText {
  brandDescription: string;
  connectText: string;
  ctaButton: string;
  copyright: string;
  madeWith: string;
}

export const FOOTER_LINKS = {
  quickLinks: [
    { name: 'Home', href: '/', description: 'Go to homepage' },
    { name: 'About', href: '/about', description: 'Learn about me' },
    { name: 'Projects', href: '/projects', description: 'View my work' },
    { name: 'Pricing', href: '/pricing', description: 'View pricing plans' },
    { name: 'Blog', href: '/blog', description: 'Read my articles' },
    { name: 'Contact', href: '/contact', description: 'Get in touch' },
  ] as const,

  legal: [
    { name: 'Privacy Policy', href: '/privacy', description: 'Privacy policy' },
    { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
  ] as const,
} as const;

export const FOOTER_TEXT: FooterText = {
  brandDescription: 'Building innovative solutions and creating meaningful digital experiences.',
  connectText: 'Have a project in mind? Let\'s work together!',
  ctaButton: 'Get in Touch',
  copyright: '© {year} {name}. All rights reserved.',
  madeWith: 'Made with ❤️ using Next.js & Tailwind CSS',
} as const;

export const CONTACT_INFO: ContactInfo = {
  email: PROFILE_INFO.email,
  location: 'India',
  availability: 'Available for freelance work',
} as const;


export { SOCIAL_LINKS, PROFILE_INFO };