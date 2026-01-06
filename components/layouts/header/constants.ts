
export const NAV_LINKS = [
  { 
    name: 'Home', 
    href: '/', 
    description: 'Go to homepage' 
  },
  { 
    name: 'About', 
    href: '/about', 
    description: 'Learn about me' 
  },
  { 
    name: 'Projects', 
    href: '/projects', 
    description: 'View my work' 
  },
  { 
    name: 'Blog', 
    href: '/blog', 
    description: 'Read my articles' 
  },
  { 
    name: 'Contact', 
    href: '/contact', 
    description: 'Get in touch' 
  },
] as const

export const SOCIAL_LINKS = [
  { 
    name: 'GitHub', 
    href: 'https://github.com/yourusername', 
    icon: 'Github' 
  },
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com/in/yourusername', 
    icon: 'Linkedin' 
  },
  { 
    name: 'Twitter', 
    href: 'https://twitter.com/yourusername', 
    icon: 'Twitter' 
  },
] as const

export const PROFILE_INFO = {
  name: 'Aryan Vishwakarma',
  title: '',
  email: 'hello@yourdomain.com',
  profileImage: '/images/profile/logo.jpg',
} as const

export const CTA_BUTTON = {
  text: 'Connect with Me',
  href: '/contact',
  description: 'Get in touch for collaborations',
} as const
