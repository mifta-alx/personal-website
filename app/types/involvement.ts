export interface Experience {
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
}
export interface Organization {
  logo: string;
  name: string;
  institution: string;
  experience: Experience[];
}
export interface Involvement {
  title: string;
  description: string;
  organization: Organization[];
}
