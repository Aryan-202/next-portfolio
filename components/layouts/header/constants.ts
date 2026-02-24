import { NavLink } from "@/types/navlinks";
import {
  Smartphone,
  Globe,
  Bot,
  Database,
  LifeBuoy,
  Code2
} from "lucide-react";

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Pricing", href: "/pricing" },
  {
    name: "Services",
    href: "/services",
    sublinks: [
      {
        name: "Mobile app development",
        href: "/services/mobile-app-development",
        description: "Build high-performance native and cross-platform mobile applications.",
        icon: Smartphone
      },
      {
        name: "Website development",
        href: "/services/website-development",
        description: "Responsive and modern websites tailored to your business needs.",
        icon: Globe
      },
      {
        name: "AI automation & consultant",
        href: "/services/ai-automation",
        description: "Leverage AI to automate your workflows and business processes.",
        icon: Bot
      },
      {
        name: "Data handling",
        href: "/services/data-handling",
        description: "Secure and efficient data management and analysis solutions.",
        icon: Database
      },
      {
        name: "IT support",
        href: "/services/it-support",
        description: "Reliable IT support and maintenance for your infrastructure.",
        icon: LifeBuoy
      },
      {
        name: "Custom Software",
        href: "/services/custom-software",
        description: "Bespoke software solutions designed for your specific challenges.",
        icon: Code2
      }
    ]
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Feedback", href: "/feedback" },
];
