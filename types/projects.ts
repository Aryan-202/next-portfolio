import type { StaticImageData } from 'next/image';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image: string | StaticImageData;
}