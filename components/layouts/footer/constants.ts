import { PROFILE_INFO } from "@/data";

export interface FooterLink {
  name: string;
  href: string;
  description: string;
}

export const FOOTER_LINKS = {
  quickLinks: [
    { name: 'Home', href: '/', description: 'Go to homepage' },
    { name: 'About', href: '/about', description: 'Learn about me' },
    { name: 'Projects', href: '/projects', description: 'View my work' },
    { name: 'Blog', href: '/blog', description: 'Read my articles' },
    { name: 'Contact', href: '/contact', description: 'Get in touch' },
  ] as const,
  
  resources: [
    { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
    { name: 'Tutorials', href: '/tutorials', description: 'Learning resources' },
    { name: 'Case Studies', href: '/case-studies', description: 'Project case studies' },
  ] as const,
  
  legal: [
    { name: 'Privacy Policy', href: '/privacy', description: 'Privacy policy' },
    { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
    { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage policy' },
  ] as const,
} as const;

export const FOOTER_TEXT = {
  brandDescription: 'Building innovative solutions and creating meaningful digital experiences.',
  connectText: 'Have a project in mind? Let\'s work together!',
  ctaButton: 'Get in Touch',
  copyright: '© {year} {name}. All rights reserved.',
  madeWith: 'Made with ❤️ using Next.js & Tailwind CSS',
} as const;

export const CONTACT_INFO = {
  email: PROFILE_INFO.email,
  location: 'India',
  availability: 'Available for freelance work',
} as const;