export type Lang = 'pt' | 'en' | 'es';

export interface LocalizedText {
  pt: string;
  en: string;
  es: string;
}

export interface ExperienceItem {
  role: LocalizedText;
  company: string;
  companyUrl?: string;
  period: LocalizedText;
  currentSince?: string;
  location: LocalizedText;
  description: LocalizedText;
  tags: string[];
}

export interface EducationItem {
  institution: string;
  degree: LocalizedText;
  period: LocalizedText;
  details?: LocalizedText;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: LocalizedText;
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
