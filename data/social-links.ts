import { assets } from "@/public/assets";
import React from "react";

export interface SocialLinks {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const SOCIAL_LINKS: SocialLinks[] = [
  {
    name: "GitHub",
    href: "https://github.com/Aryan-202",
    icon: assets.logos.github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aryanspf",
    icon: assets.logos.linkedin,
  },
  {
    name: "X",
    href: "https://x.com/AryanxSenpai",
    icon: assets.logos.x,
  },
] as const;
