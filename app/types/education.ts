export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  icon: string;
}

export interface EducationSection {
  title: string;
  description: string;
  education: EducationItem[];
}