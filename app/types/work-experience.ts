export interface WorkExperience {
  companyLogo: string;
  companyName: string;
  role: string;
  period: string;
  location: string;
  employmentType: string;
  workMode: 'Hybrid' | 'Remote' | 'On-site';
  responsibilities: string[];
}
