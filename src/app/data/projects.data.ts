import { Project } from '../shared/models';

const GITHUB_USER = 'JacksonLuiz99';

export const PROJECTS: Project[] = [
  {
    slug: 'pjc-desaparecidos',
    name: 'PJC Desaparecidos',
    description: {
      pt: 'Aplicação para consulta de pessoas desaparecidas, desenvolvida como projeto prático para o processo seletivo SEPLAG/PJC. Consumo de API REST, autenticação, paginação e boas práticas de front-end.',
      en: 'Missing-persons lookup application, built as a practical project for a public selection process at SEPLAG/PJC. REST API consumption, authentication, pagination and front-end best practices.',
    },
    tags: ['Angular', 'TypeScript', 'API REST'],
    repoUrl: `https://github.com/${GITHUB_USER}/pjc-desaparecidos`,
    category: 'work',
    featured: true,
  },
  {
    slug: 'gerador-de-cartaz-desaparecidos',
    name: 'Gerador de Cartaz — Pessoas Desaparecidas',
    description: {
      pt: 'Ferramenta para gerar cartazes de pessoas desaparecidas em Mato Grosso a partir dos dados do caso.',
      en: 'Tool to generate missing-person posters for Mato Grosso from case data.',
    },
    tags: ['CSS', 'JavaScript'],
    repoUrl: `https://github.com/${GITHUB_USER}/gerador-de-cartaz-desaparecidos`,
    category: 'work',
    featured: true,
  },
  {
    slug: 'control-users',
    name: 'Control Users',
    description: {
      pt: 'Sistema web para cadastro, listagem, edição e exclusão de usuários, com Angular 17, Angular Material e Firebase — ideal para empresas que precisam gerenciar informações de usuários.',
      en: 'Web system for user CRUD (create, list, edit, delete), built with Angular 17, Angular Material and Firebase — ideal for companies managing user data.',
    },
    tags: ['Angular', 'Angular Material', 'Firebase', 'TypeScript'],
    repoUrl: `https://github.com/${GITHUB_USER}/control-users`,
    category: 'personal',
    featured: true,
  },
  {
    slug: 'helpdesk',
    name: 'Helpdesk',
    description: {
      pt: 'Sistema de helpdesk full stack, com front-end em Angular/TypeScript e back-end em Java, inspirado na rotina de suporte técnico.',
      en: 'Full-stack helpdesk system, with an Angular/TypeScript front-end and a Java back-end, inspired by real technical support workflows.',
    },
    tags: ['Angular', 'TypeScript', 'Java'],
    repoUrl: `https://github.com/${GITHUB_USER}/helpdesk-frontend`,
    category: 'personal',
    featured: true,
  },
  {
    slug: 'klebao-mercearias',
    name: 'Klebão Mercearias',
    description: {
      pt: 'Site desenvolvido para um cliente real do ramo de mercearias.',
      en: 'Website developed for a real grocery-store client.',
    },
    tags: ['TypeScript'],
    repoUrl: `https://github.com/${GITHUB_USER}/klebao-mercearias`,
    category: 'client',
    featured: false,
  },
  {
    slug: 'barbearia-ls',
    name: 'Barbearia LS',
    description: {
      pt: 'Página institucional criada para uma barbearia.',
      en: 'Institutional landing page built for a barbershop.',
    },
    tags: ['HTML', 'CSS'],
    repoUrl: `https://github.com/${GITHUB_USER}/BarbeariaLS`,
    category: 'client',
    featured: false,
  },
  {
    slug: 'alv-turismo',
    name: 'ALV Turismo',
    description: {
      pt: 'Site institucional para uma agência de turismo.',
      en: 'Institutional website for a tourism agency.',
    },
    tags: ['HTML', 'CSS'],
    repoUrl: `https://github.com/${GITHUB_USER}/ALVTurismo`,
    category: 'client',
    featured: false,
  },
  {
    slug: 'cliente-facil',
    name: 'Cliente Fácil',
    description: {
      pt: 'Aplicação para gestão simplificada de clientes.',
      en: 'Application for simplified client management.',
    },
    tags: ['TypeScript'],
    repoUrl: `https://github.com/${GITHUB_USER}/cliente-facil`,
    category: 'personal',
    featured: false,
  },
  {
    slug: 'tour-app',
    name: 'Tour App',
    description: {
      pt: 'Aplicação para organização e apresentação de passeios/turismo.',
      en: 'Application for organizing and showcasing tours.',
    },
    tags: ['TypeScript'],
    repoUrl: `https://github.com/${GITHUB_USER}/tour-app`,
    category: 'personal',
    featured: false,
  },
  {
    slug: 'pagina-de-bloqueio-pjc',
    name: 'Página de Bloqueio — PJC-MT',
    description: {
      pt: 'Página institucional da Polícia Judiciária Civil de Mato Grosso que comunica o bloqueio de acesso a um domínio por ordem judicial. Layout responsivo com identidade visual oficial.',
      en: 'Institutional page for the Civil Police of Mato Grosso communicating a court-ordered domain block. Responsive layout with official visual identity.',
    },
    tags: ['CSS', 'HTML'],
    repoUrl: `https://github.com/${GITHUB_USER}/pagina-de-bloqueio-pjc`,
    category: 'work',
    featured: false,
  },
  {
    slug: 'game-estourando-baloes',
    name: 'Estourando Balões',
    description: {
      pt: 'Jogo simples criado para testar habilidades com JavaScript puro.',
      en: 'Simple game built to test vanilla JavaScript skills.',
    },
    tags: ['JavaScript', 'HTML'],
    repoUrl: `https://github.com/${GITHUB_USER}/GameEstourandoBaloes`,
    category: 'study',
    featured: false,
  },
];

export const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USER}`;
