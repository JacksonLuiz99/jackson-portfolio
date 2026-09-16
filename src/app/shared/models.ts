export type Lang = 'pt' | 'en';

export interface LocalizedText {
  pt: string;
  en: string;
}

export interface ExperienceItem {
  role: LocalizedText;
  company: string;
  companyUrl?: string;
  period: LocalizedText;
  location: LocalizedText;
  description: LocalizedText;
  tags: string[];
}

export interface EducationItem {
  institution: string;
  degree: LocalizedText;
  period: string;
  details?: LocalizedText;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Project {
  slug: string;
  name: string;
  description: LocalizedText;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  category: 'personal' | 'client' | 'work' | 'study';
  featured: boolean;
  caseStudy?: {
    challenge: LocalizedText;
    contribution: LocalizedText;
    outcome: LocalizedText;
    illustration: string;
  };
}
