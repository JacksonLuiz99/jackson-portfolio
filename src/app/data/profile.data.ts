import { CertificationItem, EducationItem, ExperienceItem } from '../shared/models';

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: { pt: 'Engenheiro de Software Sênior', en: 'Senior Software Engineer' },
    company: 'Polícia Judiciária Civil do Estado de Mato Grosso',
    period: { pt: 'abr de 2026 — atual', en: 'Apr 2026 — present' },
    location: { pt: 'Cuiabá, MT · Presencial', en: 'Cuiabá, Brazil · On-site' },
    description: {
      pt: 'Atuo na evolução técnica dos sistemas do ecossistema GEIA (Argus, Vículum, Chamados, entre outros), com foco em arquitetura de front-end, componentização e integração com APIs REST. Contribuo para decisões técnicas, padronização de interfaces, performance e experiência do usuário em sistemas em produção. Cargo conquistado no Processo Seletivo Simplificado Conjunto nº 001/2026/SEPLAG, com projeto prático em Angular (SPA, JWT, paginação, lazy loading, testes unitários e Facade/RxJS) com pontuação máxima nos critérios técnicos.',
      en: 'I work on the technical evolution of the GEIA ecosystem systems (Argus, Vículum, Chamados, among others), focusing on front-end architecture, componentization and REST API integration. I contribute to technical decisions, UI standardization, performance and user experience on production systems. Promoted through a public selection process with a practical Angular project (SPA, JWT auth, pagination, lazy loading, unit tests and Facade/RxJS) that scored top marks on technical criteria.',
    },
    tags: ['Angular', 'TypeScript', 'RxJS', 'Tailwind CSS', 'PrimeNG', 'Fuse', 'Angular Material'],
  },
  {
    role: { pt: 'Desenvolvedor Front-End Júnior', en: 'Junior Front-End Developer' },
    company: 'Polícia Judiciária Civil do Estado de Mato Grosso',
    period: { pt: 'jul de 2025 — abr de 2026 · 10 meses', en: 'Jul 2025 — Apr 2026 · 10 mos' },
    location: { pt: 'Cuiabá, MT · Presencial', en: 'Cuiabá, Brazil · On-site' },
    description: {
      pt: 'Desenvolvimento e manutenção de sistemas corporativos da PJC com Angular, TypeScript, Tailwind CSS e Fuse Template, criando interfaces modernas, responsivas e integradas a APIs. Aprovado em 4º lugar no Processo Seletivo nº 002/2025/SEPLAG, com projeto prático de consulta de pessoas desaparecidas (API REST, autenticação e paginação).',
      en: 'Development and maintenance of PJC corporate systems with Angular, TypeScript, Tailwind CSS and Fuse Template, building modern, responsive, API-integrated interfaces. Ranked 4th in a public selection process with a practical missing-persons lookup project (REST API, auth and pagination).',
    },
    tags: ['Angular', 'API REST', 'Tailwind CSS', 'Fuse'],
  },
  {
    role: { pt: 'Residente Técnico', en: 'Technical Resident' },
    company: 'Polícia Judiciária Civil do Estado de Mato Grosso',
    period: { pt: 'out de 2024 — jul de 2025 · 10 meses', en: 'Oct 2024 — Jul 2025 · 10 mos' },
    location: { pt: 'Cuiabá, MT · Presencial', en: 'Cuiabá, Brazil · On-site' },
    description: {
      pt: 'Residência técnica do Programa de Residência do Estado de Mato Grosso, aprovado em 1º lugar no perfil Tecnólogo - Analista e Desenvolvedor de Sistemas. Foco em desenvolvimento front-end com Angular e Vue, elaboração de documentação técnica e atividades junto à equipe da PJC-MT.',
      en: "Technical residency under Mato Grosso's state residency program, ranked 1st for the Systems Analyst/Developer profile. Focused on front-end development with Angular and Vue, technical documentation and collaboration with the PJC-MT team.",
    },
    tags: ['Angular', 'Vue'],
  },
  {
    role: { pt: 'Estagiário de Pós-graduação', en: 'Postgraduate Intern' },
    company: 'Polícia Judiciária Civil do Estado de Mato Grosso',
    period: {
      pt: 'abr de 2023 — out de 2024 · 1 ano e 7 meses',
      en: 'Apr 2023 — Oct 2024 · 1 yr 7 mos',
    },
    location: { pt: 'Cuiabá, MT · Híbrido', en: 'Cuiabá, Brazil · Hybrid' },
    description: {
      pt: 'Suporte técnico (helpdesk) da PJC-MT, com atendimentos remotos e manutenção preventiva e corretiva de computadores, dando continuidade ao trabalho iniciado no estágio de TI.',
      en: 'Technical (helpdesk) support at PJC-MT, remote assistance and preventive/corrective computer maintenance, continuing the work started in the earlier IT internship.',
    },
    tags: ['Suporte Técnico', 'Infraestrutura'],
  },
  {
    role: { pt: 'Estagiário de TI', en: 'IT Intern' },
    company: 'Polícia Judiciária Civil do Estado de Mato Grosso',
    period: {
      pt: 'ago de 2017 — abr de 2019 · 1 ano e 9 meses',
      en: 'Aug 2017 — Apr 2019 · 1 yr 9 mos',
    },
    location: { pt: 'Cuiabá, MT · No local', en: 'Cuiabá, Brazil · On-site' },
    description: {
      pt: 'Atendimento de chamados para manutenção preventiva e reparo de computadores nas delegacias do estado, elaboração de relatórios no GLPI e suporte a usuários, incluindo instalação de servidores locais e configuração de redes.',
      en: "Ticket-based preventive maintenance and computer repair across the state's police stations, GLPI reporting, and user support including local server setup and network configuration.",
    },
    tags: ['Suporte Técnico', 'GLPI', 'Redes'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Faculdade de Minas',
    degree: {
      pt: 'Pós-graduação Lato Sensu — Especialização em Docência em Sistemas de Informações',
      en: 'Postgraduate Specialization — Teaching in Information Systems',
    },
    period: 'fev de 2025 – ago de 2026',
  },
  {
    institution: 'Faculdade de Minas',
    degree: {
      pt: 'Pós-graduação Lato Sensu — Desenvolvimento em Aplicações Web / TI',
      en: 'Postgraduate Specialization — Web Application Development / IT',
    },
    period: 'set de 2023 – fev de 2025',
    details: {
      pt: 'Bootstrap, desenvolvimento front-end e tecnologia da informação.',
      en: 'Bootstrap, front-end development and information technology.',
    },
  },
  {
    institution: 'UNOPAR — Universidade Norte do Paraná',
    degree: {
      pt: 'Pós-graduação Lato Sensu — Especialização em Desenvolvimento Front-End',
      en: 'Postgraduate Specialization — Front-End Development',
    },
    period: 'mar de 2023 – jan de 2024',
    details: {
      pt: 'Linguagens e padrões web, frameworks front-end, técnicas avançadas de CSS e JavaScript, Node.js, UX, apps móveis, APIs e projetos ágeis.',
      en: 'Web languages and standards, front-end frameworks, advanced CSS and JavaScript, Node.js, UX, mobile apps, APIs and agile projects.',
    },
  },
  {
    institution: 'UNOPAR — Universidade Norte do Paraná',
    degree: {
      pt: 'Curso Superior de Tecnologia (CST) — Análise e Desenvolvimento de Sistemas',
      en: 'Associate Degree (Technologist) — Systems Analysis and Development',
    },
    period: '2021 – jun de 2023',
  },
  {
    institution: 'Unic — Universidade de Cuiabá',
    degree: {
      pt: 'Sistemas de Informação',
      en: 'Information Systems',
    },
    period: 'fev de 2016 – ago de 2018',
    details: {
      pt: 'Curso cursado parcialmente (5 de 8 semestres). Estudos retomados depois no curso de Análise e Desenvolvimento de Sistemas pela UNOPAR, com reaproveitamento de disciplinas.',
      en: 'Partially completed (5 of 8 semesters). Studies later resumed in the Systems Analysis and Development program at UNOPAR, with credit transfer for completed courses.',
    },
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'Angular 17 — CRUD completo com Firebase',
    issuer: 'Udemy',
    date: 'fev de 2025',
    url: 'https://www.udemy.com/certificate/UC-d30685f3-27ed-4564-a634-0afc2d7cf2cc/',
  },
  {
    name: 'Web Moderno Completo com JavaScript + Projetos',
    issuer: 'Udemy',
    date: 'jun de 2024',
    url: 'https://www.udemy.com/certificate/UC-326644fd-8c46-4374-8381-7f4f36bea6e8/',
  },
  {
    name: 'Manipulando banco de dados com Navicat',
    issuer: 'Udemy',
    date: 'jun de 2023',
    url: 'https://www.udemy.com/certificate/UC-0a6f4707-beef-4479-a50ffa7501f6a8dc/',
  },
  {
    name: 'DevLinks',
    issuer: 'Rocketseat',
    date: 'jun de 2023',
  },
  {
    name: 'Scrum Foundation Professional Certificate (SFPC)',
    issuer: 'Certiprof',
    date: 'jun de 2023',
  },
  {
    name: 'Curso de PHP',
    issuer: 'Curso em Vídeo',
    date: 'mar de 2018',
  },
  {
    name: 'Java para Iniciantes ao Intermediário',
    issuer: 'Udemy',
    date: '',
    url: 'https://www.udemy.com/certificate/UC-b613f18f-f47f-49b2-a2c9-4661c99471f3/',
  },
];

export const SKILLS = {
  frontend: [
    'Angular',
    'TypeScript',
    'RxJS',
    'Angular Material',
    'PrimeNG',
    'Fuse',
    'Tailwind CSS',
    'HTML5',
    'CSS3/SCSS',
    'JavaScript',
  ],
  backendTools: ['API REST', 'Node.js', 'Firebase', 'Java', 'Git', 'GitHub'],
  practices: [
    'Scrum',
    'CI/CD',
    'Testes unitários',
    'Clean Architecture',
    'Padrões de projeto',
    'Componentização',
  ],
  aiWorkflow: ['Claude', 'Codex', 'SDD', 'Headroom', 'RTK'],
};

export const LANGUAGES = [
  { name: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'Nativo', en: 'Native' } },
  { name: { pt: 'Inglês', en: 'English' }, level: { pt: 'Básico', en: 'Basic' } },
];
