import { CertificationItem, EducationItem, ExperienceItem } from '../shared/models';

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: {
      pt: 'Engenheiro de Software Sênior',
      en: 'Senior Software Engineer',
      es: 'Ingeniero de Software Sénior',
    },
    company: 'Polícia Judiciária Civil do Estado de Mato Grosso',
    period: {
      pt: '01/04/2026 — atual',
      en: 'Apr 1, 2026 — present',
      es: '01/04/2026 — actualidad',
    },
    currentSince: '2026-04-01T00:00:00-04:00',
    location: {
      pt: 'Cuiabá, MT · Presencial',
      en: 'Cuiabá, Brazil · On-site',
      es: 'Cuiabá, Brasil · Presencial',
    },
    description: {
      pt: 'Atuo na evolução técnica dos sistemas do ecossistema GEIA (Argus, Vículum, Chamados, entre outros), com foco em arquitetura de front-end, componentização e integração com APIs REST. Contribuo para decisões técnicas, padronização de interfaces, performance e experiência do usuário em sistemas em produção. Cargo conquistado no Processo Seletivo Simplificado Conjunto nº 001/2026/SEPLAG, com projeto prático em Angular (SPA, JWT, paginação, lazy loading, testes unitários e Facade/RxJS) com pontuação máxima nos critérios técnicos.',
      en: 'I work on the technical evolution of the GEIA ecosystem systems (Argus, Vículum, Chamados, among others), focusing on front-end architecture, componentization and REST API integration. I contribute to technical decisions, UI standardization, performance and user experience on production systems. Promoted through a public selection process with a practical Angular project (SPA, JWT auth, pagination, lazy loading, unit tests and Facade/RxJS) that scored top marks on technical criteria.',
      es: 'Trabajo en la evolución técnica de los sistemas del ecosistema GEIA (Argus, Vículum, Chamados, entre otros), con énfasis en la arquitectura front-end, los componentes y la integración con API REST. Contribuyo a las decisiones técnicas, la estandarización de interfaces, el rendimiento y la experiencia de usuario en sistemas en producción. Obtuve el puesto mediante un proceso público de selección con un proyecto práctico en Angular (SPA, JWT, paginación, carga diferida, pruebas unitarias y Facade/RxJS) que alcanzó la máxima puntuación técnica.',
    },
    tags: ['Angular', 'TypeScript', 'RxJS', 'Tailwind CSS', 'PrimeNG', 'Fuse', 'Angular Material'],
  },
  {
    role: {
      pt: 'Desenvolvedor Front-End Júnior',
      en: 'Junior Front-End Developer',
      es: 'Desarrollador Front-End Júnior',
    },
    company: 'Polícia Judiciária Civil do Estado de Mato Grosso',
    period: {
      pt: 'jul de 2025 — abr de 2026 · 10 meses',
      en: 'Jul 2025 — Apr 2026 · 10 mos',
      es: 'jul de 2025 — abr de 2026 · 10 meses',
    },
    location: {
      pt: 'Cuiabá, MT · Presencial',
      en: 'Cuiabá, Brazil · On-site',
      es: 'Cuiabá, Brasil · Presencial',
    },
    description: {
      pt: 'Desenvolvimento e manutenção de sistemas corporativos da PJC com Angular, TypeScript, Tailwind CSS e Fuse Template, criando interfaces modernas, responsivas e integradas a APIs. Aprovado em 4º lugar no Processo Seletivo nº 002/2025/SEPLAG, com projeto prático de consulta de pessoas desaparecidas (API REST, autenticação e paginação).',
      en: 'Development and maintenance of PJC corporate systems with Angular, TypeScript, Tailwind CSS and Fuse Template, building modern, responsive, API-integrated interfaces. Ranked 4th in a public selection process with a practical missing-persons lookup project (REST API, auth and pagination).',
      es: 'Desarrollo y mantenimiento de sistemas corporativos de la PJC con Angular, TypeScript, Tailwind CSS y Fuse Template, creando interfaces modernas, adaptables e integradas con API. Obtuve el 4.º puesto en un proceso público de selección con un proyecto práctico de consulta de personas desaparecidas (API REST, autenticación y paginación).',
    },
    tags: ['Angular', 'API REST', 'Tailwind CSS', 'Fuse'],
  },
  {
    role: { pt: 'Residente Técnico', en: 'Technical Resident', es: 'Residente Técnico' },
    company: 'Polícia Judiciária Civil do Estado de Mato Grosso',
    period: {
      pt: 'out de 2024 — jul de 2025 · 10 meses',
      en: 'Oct 2024 — Jul 2025 · 10 mos',
      es: 'oct de 2024 — jul de 2025 · 10 meses',
    },
    location: {
      pt: 'Cuiabá, MT · Presencial',
      en: 'Cuiabá, Brazil · On-site',
      es: 'Cuiabá, Brasil · Presencial',
    },
    description: {
      pt: 'Residência técnica do Programa de Residência do Estado de Mato Grosso, aprovado em 1º lugar no perfil Tecnólogo - Analista e Desenvolvedor de Sistemas. Foco em desenvolvimento front-end com Angular e Vue, elaboração de documentação técnica e atividades junto à equipe da PJC-MT.',
      en: "Technical residency under Mato Grosso's state residency program, ranked 1st for the Systems Analyst/Developer profile. Focused on front-end development with Angular and Vue, technical documentation and collaboration with the PJC-MT team.",
      es: 'Residencia técnica del Programa de Residencia del Estado de Mato Grosso, con el 1.er puesto en el perfil de Analista y Desarrollador de Sistemas. Me centré en el desarrollo front-end con Angular y Vue, la documentación técnica y el trabajo con el equipo de la PJC-MT.',
    },
    tags: ['Angular', 'Vue'],
  },
  {
    role: {
      pt: 'Estagiário de Pós-graduação',
      en: 'Postgraduate Intern',
      es: 'Becario de Posgrado',
    },
    company: 'Polícia Judiciária Civil do Estado de Mato Grosso',
    period: {
      pt: 'abr de 2023 — out de 2024 · 1 ano e 7 meses',
      en: 'Apr 2023 — Oct 2024 · 1 yr 7 mos',
      es: 'abr de 2023 — oct de 2024 · 1 año y 7 meses',
    },
    location: {
      pt: 'Cuiabá, MT · Híbrido',
      en: 'Cuiabá, Brazil · Hybrid',
      es: 'Cuiabá, Brasil · Híbrido',
    },
    description: {
      pt: 'Suporte técnico (helpdesk) da PJC-MT, com atendimentos remotos e manutenção preventiva e corretiva de computadores, dando continuidade ao trabalho iniciado no estágio de TI.',
      en: 'Technical (helpdesk) support at PJC-MT, remote assistance and preventive/corrective computer maintenance, continuing the work started in the earlier IT internship.',
      es: 'Soporte técnico en la PJC-MT, con atención remota y mantenimiento preventivo y correctivo de equipos, dando continuidad al trabajo realizado durante las prácticas de TI.',
    },
    tags: ['Suporte Técnico', 'Infraestrutura'],
  },
  {
    role: { pt: 'Estagiário de TI', en: 'IT Intern', es: 'Becario de TI' },
    company: 'Polícia Judiciária Civil do Estado de Mato Grosso',
    period: {
      pt: 'ago de 2017 — abr de 2019 · 1 ano e 9 meses',
      en: 'Aug 2017 — Apr 2019 · 1 yr 9 mos',
      es: 'ago de 2017 — abr de 2019 · 1 año y 9 meses',
    },
    location: {
      pt: 'Cuiabá, MT · No local',
      en: 'Cuiabá, Brazil · On-site',
      es: 'Cuiabá, Brasil · Presencial',
    },
    description: {
      pt: 'Atendimento de chamados para manutenção preventiva e reparo de computadores nas delegacias do estado, elaboração de relatórios no GLPI e suporte a usuários, incluindo instalação de servidores locais e configuração de redes.',
      en: "Ticket-based preventive maintenance and computer repair across the state's police stations, GLPI reporting, and user support including local server setup and network configuration.",
      es: 'Atención de solicitudes de mantenimiento preventivo y reparación de equipos en las comisarías del estado, elaboración de informes en GLPI y soporte a usuarios, incluida la instalación de servidores locales y la configuración de redes.',
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
      es: 'Especialización de Posgrado — Docencia en Sistemas de Información',
    },
    period: {
      pt: 'fev de 2025 – ago de 2026',
      en: 'Feb 2025 – Aug 2026',
      es: 'feb de 2025 – ago de 2026',
    },
  },
  {
    institution: 'Faculdade de Minas',
    degree: {
      pt: 'Pós-graduação Lato Sensu — Desenvolvimento em Aplicações Web / TI',
      en: 'Postgraduate Specialization — Web Application Development / IT',
      es: 'Especialización de Posgrado — Desarrollo de Aplicaciones Web / TI',
    },
    period: {
      pt: 'set de 2023 – fev de 2025',
      en: 'Sep 2023 – Feb 2025',
      es: 'sep de 2023 – feb de 2025',
    },
    details: {
      pt: 'Bootstrap, desenvolvimento front-end e tecnologia da informação.',
      en: 'Bootstrap, front-end development and information technology.',
      es: 'Bootstrap, desarrollo front-end y tecnología de la información.',
    },
  },
  {
    institution: 'UNOPAR — Universidade Norte do Paraná',
    degree: {
      pt: 'Pós-graduação Lato Sensu — Especialização em Desenvolvimento Front-End',
      en: 'Postgraduate Specialization — Front-End Development',
      es: 'Especialización de Posgrado — Desarrollo Front-End',
    },
    period: {
      pt: 'mar de 2023 – jan de 2024',
      en: 'Mar 2023 – Jan 2024',
      es: 'mar de 2023 – ene de 2024',
    },
    details: {
      pt: 'Linguagens e padrões web, frameworks front-end, técnicas avançadas de CSS e JavaScript, Node.js, UX, apps móveis, APIs e projetos ágeis.',
      en: 'Web languages and standards, front-end frameworks, advanced CSS and JavaScript, Node.js, UX, mobile apps, APIs and agile projects.',
      es: 'Lenguajes y estándares web, frameworks front-end, CSS y JavaScript avanzados, Node.js, UX, aplicaciones móviles, API y proyectos ágiles.',
    },
  },
  {
    institution: 'UNOPAR — Universidade Norte do Paraná',
    degree: {
      pt: 'Curso Superior de Tecnologia (CST) — Análise e Desenvolvimento de Sistemas',
      en: 'Associate Degree (Technologist) — Systems Analysis and Development',
      es: 'Grado Tecnológico — Análisis y Desarrollo de Sistemas',
    },
    period: { pt: '2021 – jun de 2023', en: '2021 – Jun 2023', es: '2021 – jun de 2023' },
  },
  {
    institution: 'Unic — Universidade de Cuiabá',
    degree: {
      pt: 'Sistemas de Informação',
      en: 'Information Systems',
      es: 'Sistemas de Información',
    },
    period: {
      pt: 'fev de 2016 – ago de 2018',
      en: 'Feb 2016 – Aug 2018',
      es: 'feb de 2016 – ago de 2018',
    },
    details: {
      pt: 'Curso cursado parcialmente (5 de 8 semestres). Estudos retomados depois no curso de Análise e Desenvolvimento de Sistemas pela UNOPAR, com reaproveitamento de disciplinas.',
      en: 'Partially completed (5 of 8 semesters). Studies later resumed in the Systems Analysis and Development program at UNOPAR, with credit transfer for completed courses.',
      es: 'Cursé parcialmente la carrera (5 de 8 semestres). Después retomé los estudios en Análisis y Desarrollo de Sistemas en UNOPAR, convalidando asignaturas ya cursadas.',
    },
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'Angular 17 — CRUD completo com Firebase',
    issuer: 'Udemy',
    date: { pt: 'fev de 2025', en: 'Feb 2025', es: 'feb de 2025' },
    url: 'https://www.udemy.com/certificate/UC-d30685f3-27ed-4564-a634-0afc2d7cf2cc/',
  },
  {
    name: 'Web Moderno Completo com JavaScript + Projetos',
    issuer: 'Udemy',
    date: { pt: 'jun de 2024', en: 'Jun 2024', es: 'jun de 2024' },
    url: 'https://www.udemy.com/certificate/UC-326644fd-8c46-4374-8381-7f4f36bea6e8/',
  },
  {
    name: 'Manipulando banco de dados com Navicat',
    issuer: 'Udemy',
    date: { pt: 'jun de 2023', en: 'Jun 2023', es: 'jun de 2023' },
    url: 'https://www.udemy.com/certificate/UC-0a6f4707-beef-4479-a50ffa7501f6a8dc/',
  },
  {
    name: 'DevLinks',
    issuer: 'Rocketseat',
    date: { pt: 'jun de 2023', en: 'Jun 2023', es: 'jun de 2023' },
  },
  {
    name: 'Scrum Foundation Professional Certificate (SFPC)',
    issuer: 'Certiprof',
    date: { pt: 'jun de 2023', en: 'Jun 2023', es: 'jun de 2023' },
  },
  {
    name: 'Curso de PHP',
    issuer: 'Curso em Vídeo',
    date: { pt: 'mar de 2018', en: 'Mar 2018', es: 'mar de 2018' },
  },
  {
    name: 'Java para Iniciantes ao Intermediário',
    issuer: 'Udemy',
    date: { pt: '', en: '', es: '' },
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
  backendTools: [
    'API REST',
    'Node.js',
    'Firebase',
    'Java',
    'Git',
    'GitHub',
    'GitLab',
    'Docker',
    'Postman',
  ],
  practices: [
    'Scrum',
    'CI/CD',
    'Testes unitários',
    'Clean Architecture',
    'Padrões de projeto',
    'Facade',
    'Componentização',
  ],
  aiWorkflow: ['Claude', 'Codex', 'SDD', 'Headroom', 'RTK'],
};

export const LANGUAGES = [
  {
    name: { pt: 'Português', en: 'Portuguese', es: 'Portugués' },
    level: { pt: 'Nativo', en: 'Native', es: 'Nativo' },
  },
  {
    name: { pt: 'Inglês', en: 'English', es: 'Inglés' },
    level: { pt: 'Básico', en: 'Basic', es: 'Básico' },
  },
];
