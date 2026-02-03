export interface NavLink {
  name: string;
  href: string;
  description: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  {
    name: 'Home',
    href: '/',
    description: 'Go to homepage'
  },
  {
    name: 'About',
    href: '#about',
    description: 'Learn about me'
  },
  {
    name: 'Projects',
    href: '#projects',
    description: 'View my work'
  },
  {
    name: 'Blog',
    href: '/blog',
    description: 'Read my articles'
  },
  {
    name: 'Contact',
    href: '#contact',
    description: 'Get in touch'
  },
  {
    name: 'Feedback',
    href: '#feedback',
    description: 'Share your thoughts'
  },
] as const;


export const CTA_BUTTON = {
  text: 'Connect with Me',
  href: '/contact',
  description: 'Get in touch for collaborations',
} as const
