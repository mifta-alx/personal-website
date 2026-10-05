export type ProjectStoryBlock =
  | { type: 'text'; text: string }
  | { type: 'image'; file: string; alt: string; caption?: string }
  | { type: 'gallery'; images: { file: string; alt: string }[] };

export interface ProjectStorySection {
  id: string;
  title: string;
  blocks: ProjectStoryBlock[];
}
