export type SkillCategory = 'all' | 'frontend' | 'mobile' | 'backend' | 'platforms' | 'design';

export interface SkillItem {
  name: string;
  category: 'frontend' | 'mobile' | 'backend' | 'platforms' | 'design';
  description: string;
  badge?: string;
  highlights: string[];
}

export type ProjectCategory = 'all' | 'web' | 'mobile' | 'ecommerce' | 'fullstack' | 'uiux';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  technologies: string[];
  type: string;
  role: string;
  isPlaceholder: boolean;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  architectureNotes?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  location?: string;
  summary: string;
  technologies: string[];
  responsibilities: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: 'ux' | 'mobile' | 'leadership' | 'career';
  featured?: boolean;
  description?: string;
}

export interface PublicationItem {
  title: string;
  conference: string;
  location: string;
  year: number;
  description: string;
  topics: string[];
}
