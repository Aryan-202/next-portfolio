import { PROFILE_INFO } from "@/data";

export const HERO_CONTENT = {
  title: "Aryan Vishwakarma",
  subtitle: "Entrepreneur & Digital Innovator",
  description: "Building the future of digital experiences through innovative solutions and strategic thinking. I transform ideas into impactful digital products that solve real-world problems.",
  cta: {
    primary: {
      text: "View My Work",
      href: "/projects",
      description: "Explore my projects and case studies"
    },
    secondary: {
      text: "Get in Touch",
      href: "/contact",
      description: "Let's discuss your project"
    }
  },
  stats: [
    { value: "50+", label: "Projects Completed" },
    { value: "3+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "∞", label: "Passion" }
  ],
  profileImage: PROFILE_INFO.profileImage,
  badges: ["Entrepreneur", "Full-Stack Developer", "Digital Strategist"]
} as const;

export const HERO_TECH_STACK = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL",
  "GraphQL", "AWS", "Docker", "Figma", "React Native"
] as const;