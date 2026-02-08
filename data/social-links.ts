import { assets } from "@/public/assets";

export interface SocialLinks {
  name: string;
  url: string;
  icon: any;
}

export const SOCIAL_LINKS: SocialLinks[] = [
  {
    name: "GitHub",
    url: "https://github.com/Aryan-202",
    icon: assets.logos.github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aryanspf",
    icon: assets.logos.linkedin,
  },
  {
    name: "X",
    url: "https://x.com/AryanxSenpai",
    icon: assets.logos.x,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/_aryan._.vishwakarma_/",
    icon: assets.logos.instagram,
  },
];