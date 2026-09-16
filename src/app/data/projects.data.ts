import { Project } from '../shared/models';

const GITHUB_USER = 'JacksonLuiz99';

export const PROJECTS: Project[] = [
  {
    slug: 'siae-pjc',
    name: 'SIAE — Sistema Integrado de Acessos Externos',
    description: {
      pt: 'Sistema que digitaliza a concessão de acesso externo de pessoas físicas às dependências da PJC-MT, cobrindo solicitação, aprovação por superior e histórico de status. Back-end em Java/Quarkus com PostgreSQL; front-end em Angular integrado a um Design System institucional.',
      en: 'A system that digitizes external-access requests to PJC-MT facilities, covering submission, supervisor approval and status history. Java/Quarkus back-end with PostgreSQL; Angular front-end built on an institutional Design System.',
    },
    tags: ['Angular', 'Java', 'Quarkus', 'PostgreSQL'],
    liveUrl: 'https://siae.pjc.mt.gov.br/login',
    category: 'work',
    featured: true,
    caseStudy: {
      challenge: {
        pt: 'Organizar a solicitação e aprovação de acessos externos às dependências da PJC-MT.',
        en: 'Organize external access requests and approvals for PJC-MT facilities.',
      },
      contribution: {
        pt: 'Front-end Angular integrado ao Design System institucional e aos fluxos de solicitação e aprovação.',
        en: 'Angular front end integrated with the institutional Design System and request and approval flows.',
      },
      outcome: {
        pt: 'Solicitações, aprovação por superior e histórico de status reunidos em um fluxo digital.',
        en: 'Requests, supervisor approval and status history brought together in a digital flow.',
      },
      illustration: 'projects/siae.svg',
    },
  },
  {
    slug: 'vinculum-pjc',
    name: 'Vinculum',
    description: {
      pt: 'Sistema de apoio à investigação policial, com gestão de casos, consultas unificadas a fontes externas de dados e dashboards estatísticos. Autenticação corporativa robusta e controle de permissões por papel.',
      en: 'A criminal-investigation support system with case management, unified lookups across external data sources, and statistical dashboards. Robust corporate authentication with role-based permissions.',
    },
    tags: ['Angular 17', 'RBAC'],
    liveUrl: 'https://vinculum.pjc.mt.gov.br/sign-in',
    category: 'work',
    featured: true,
  },
  {
    slug: 'argus-pjc',
    name: 'Argus',
    description: {
      pt: 'Sistema de gestão interno da PJC-MT, em migração de Angular 19 (Material/Fuse) para Angular 22 (standalone, Signals), consumindo um Design System interno via NPM. Contribuí com o módulo de veículos e conduzi a migração do módulo de cooperação para o novo padrão.',
      en: 'An internal PJC-MT management system being migrated from Angular 19 (Material/Fuse) to Angular 22 (standalone, Signals), built on an internal Design System distributed via NPM. I contributed the vehicles module and led the migration of the cooperation module onto the new standard.',
    },
    tags: ['Angular 22', 'Signals', 'Standalone', 'Design System'],
    liveUrl: 'https://argusv2.pjc.mt.gov.br/sign-in',
    category: 'work',
    featured: true,
    caseStudy: {
      challenge: {
        pt: 'Migrar módulos de um sistema interno para o novo padrão de front-end da instituição.',
        en: 'Migrate internal system modules to the institution’s new front-end standard.',
      },
      contribution: {
        pt: 'Contribuição no módulo de veículos e condução da migração do módulo de cooperação para Angular 22.',
        en: 'Contributed to the vehicles module and led the cooperation module migration to Angular 22.',
      },
      outcome: {
        pt: 'Módulo de cooperação alinhado ao novo padrão com componentes standalone, Signals e Design System interno.',
        en: 'Cooperation module aligned with the new standard using standalone components, Signals and the internal Design System.',
      },
      illustration: 'projects/argus.svg',
    },
  },
  {
    slug: 'checagem-externa-pjc',
    name: 'Checagem Externa',
    description: {
      pt: 'Plataforma de apoio à segurança pública para checagem de dados de pessoas e veículos, com auditoria de acessos e acompanhamento de ocorrências. Arquitetura front-end em componentes Smart/Dumb com gerenciamento de estado via Facade.',
      en: 'A public-safety support platform for checking data on people and vehicles, with access auditing and incident tracking. Smart/Dumb component front-end architecture with Facade-based state management.',
    },
    tags: ['Angular 17', 'Angular Material'],
    liveUrl: 'https://checagem-externa.pjc.mt.gov.br/sign-in',
    category: 'work',
    featured: false,
  },
  {
    slug: 'desaparecidos-web-pjc',
    name: 'Desaparecidos Web',
    description: {
      pt: 'Front-end Angular de um sistema público de consulta a pessoas desaparecidas, criado originalmente como teste técnico de admissão. Consome uma API pública com busca por filtros e detalhes de cada caso. Stack: Angular 19, Angular Material e Tailwind CSS 4, com padrão Facade e estado reativo via RxJS; containerizado com Docker/Nginx e CI/CD no GitLab.',
      en: 'Angular front-end for a public missing-persons lookup system, originally built as a technical hiring assessment. Consumes a public API with filtered search and case details. Stack: Angular 19, Angular Material and Tailwind CSS 4, with a Facade pattern and RxJS-driven state; containerized with Docker/Nginx and GitLab CI/CD.',
    },
    tags: ['Angular 19', 'Tailwind CSS', 'Docker', 'GitLab CI/CD'],
    liveUrl: 'https://desaparecidos.pjc.mt.gov.br/',
    category: 'work',
    featured: false,
    caseStudy: {
      challenge: {
        pt: 'Facilitar a consulta pública a casos de pessoas desaparecidas por meio de busca e filtros.',
        en: 'Make public missing-person cases easier to search and filter.',
      },
      contribution: {
        pt: 'Desenvolvimento do front-end Angular com filtros, detalhes dos casos e estado reativo via Facade e RxJS.',
        en: 'Built the Angular front end with filters, case details and reactive state through Facade and RxJS.',
      },
      outcome: {
        pt: 'Consulta pública de pessoas desaparecidas com busca por filtros e acesso aos detalhes de cada caso.',
        en: 'Public missing-person lookup with filtered search and access to each case’s details.',
      },
      illustration: 'projects/desaparecidos.svg',
    },
  },
  {
    slug: 'gestao-projetos-institucionais-pjc',
    name: 'Gestão de Projetos Institucionais',
    description: {
      pt: 'Sistema de gestão de projetos institucionais da PJC-MT, em Angular 22 (standalone, zoneless, Signals, SSR). Controla o ciclo de vida de projetos submetidos por unidades — criação, tramitação entre áreas, aprovação e notificações — com permissões por papel. Ainda em desenvolvimento, fora do ar publicamente.',
      en: 'An institutional project-management system for PJC-MT, built with Angular 22 (standalone, zoneless, Signals, SSR). Controls the full lifecycle of projects submitted by units — creation, routing between areas, approval and notifications — with role-based permissions. Still in development, not yet publicly live.',
    },
    tags: ['Angular 22', 'Zoneless', 'Signals', 'SSR'],
    category: 'work',
    featured: false,
  },
  {
    slug: 'sac-pjc',
    name: 'SAC — Gestão de Chamados',
    description: {
      pt: 'Sistema de gestão de chamados de suporte técnico, reescrito de um app legado em Vue 3/Quasar para Angular moderno. Usuários abrem e acompanham chamados; atendentes gerenciam atendimentos em tempo real, com controle de acesso por perfil, anexos e módulos complementares.',
      en: 'A technical-support ticketing system, rewritten from a legacy Vue 3/Quasar app to modern Angular. Users open and track tickets while agents manage them in real time, with role-based access control, attachments and complementary modules.',
    },
    tags: ['Angular', 'Signals', 'WebSocket', 'SSR'],
    liveUrl: 'https://sac.pjc.mt.gov.br/login',
    category: 'work',
    featured: false,
  },
  {
    slug: 'pjc-desaparecidos',
    name: 'Desaparecidos — Projeto Seletivo',
    description: {
      pt: 'Aplicação para consulta de pessoas desaparecidas, desenvolvida como projeto prático para o processo seletivo SEPLAG/PJC. Consumo de API REST, autenticação, paginação e boas práticas de front-end.',
      en: 'Missing-persons lookup application, built as a practical project for a public selection process at SEPLAG/PJC. REST API consumption, authentication, pagination and front-end best practices.',
    },
    tags: ['Angular', 'TypeScript', 'API REST'],
    repoUrl: `https://github.com/${GITHUB_USER}/pjc-desaparecidos`,
    category: 'work',
    featured: false,
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
