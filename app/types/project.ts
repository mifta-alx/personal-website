import type { frameworkType } from "~/data/project";

export interface ProjectItem {
  slug: string;
  name: string;
  title: string;
  type: string;
  idea: string;
  description: string;
  cover: string;
  likes: number;
  framework: keyof typeof frameworkType;
  role: string;
  technologies: (keyof typeof frameworkType)[];
  gallery: string[];
}

export interface Project {
  title: string
  description: string
  projects: ProjectItem[]
}
