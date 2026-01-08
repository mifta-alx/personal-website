import type { frameworkType } from "~/data/project";

export interface Project {
  slug: string;
  name: string;
  title: string;
  idea: string;
  description: string;
  cover: string;
  framework: keyof typeof frameworkType;
  role: string;
  technologies: (keyof typeof frameworkType)[];
  gallery: string[];
}
