import { Lang } from '../../shared/models';

export const TRANSLATIONS: Record<Lang, Record<string, any>> = {
  pt: {
    nav: {
      about: 'Sobre',
      experience: 'Trajetória',
      skills: 'Habilidades',
      projects: 'Projetos',
      education: 'Formação',
      contact: 'Contato',
      resume: 'Currículo',
      theme: 'Tema',
      themeDark: 'Escuro',
      themeLight: 'Claro',
      themeAmber: 'Âmbar',
    },
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Jackson Luiz',
      role: 'Engenheiro de Software Front-End',
      tagline:
        'Construo interfaces modernas e escaláveis com Angular e TypeScript. Atualmente na Polícia Judiciária Civil de Mato Grosso, evoluindo sistemas que precisam de estabilidade, clareza e responsabilidade.',
      ctaProjects: 'Ver projetos',
      ctaContact: 'Falar comigo',
      available: 'Disponível para oportunidades',
    },
    about: {
      title: 'Sobre mim',
      kicker: 'Quem eu sou',
      body1:
        'Sou Analista de Sistemas, aprovado no seletivo da SEPLAG-MT, atuando atualmente como Engenheiro de Software Sênior na Polícia Judiciária Civil de Mato Grosso (PJC-MT). Trabalho no desenvolvimento de sistemas voltados à integração de dados e inteligência, com foco em performance, escalabilidade e experiência do usuário.',
      body2:
        'Tenho sólida experiência com Angular, TypeScript, Tailwind CSS, PrimeNG, Fuse e Angular Material, aplicando boas práticas de componentização, arquitetura limpa e integração com APIs REST. Sou graduado em Análise e Desenvolvimento de Sistemas, pós-graduado em Desenvolvimento Front-End e certificado em Scrum Foundation.',
      body3:
        'Fora do trabalho, também desenvolvo projetos pessoais e para clientes, sempre buscando aprender algo novo — hoje com foco em me aprofundar em Angular e expandir para novas tecnologias.',
    },
    experience: {
      title: 'Trajetória',
      kicker: 'Experiência',
      subtitle:
        'Uma jornada de mais de 3 anos dentro da segurança pública, do suporte técnico à engenharia de software.',
    },
    skills: {
      title: 'Habilidades',
      kicker: 'Como eu trabalho',
      frontend: 'Front-End',
      backendTools: 'Back-End & Ferramentas',
      practices: 'Práticas & Metodologias',
      aiWorkflow: 'IA & Fluxo de Trabalho',
      aiWorkflowDescription:
        'Uso Claude e Codex com a abordagem SDD e ferramentas como Headroom e RTK.',
    },
    projects: {
      title: 'Projetos',
      kicker: 'O que eu construo',
      subtitle: 'Projetos pessoais, para clientes e sistemas em que atuo profissionalmente.',
      selected: 'Em destaque',
      selectedSubtitle:
        'Três projetos que mostram meu trabalho em interfaces e sistemas em produção.',
      challenge: 'O desafio',
      contribution: 'Minha atuação',
      outcome: 'Entrega',
      illustration: 'Ilustração conceitual do projeto',
      illustrationNote: 'Ilustração conceitual',
      browseAll: 'Outros projetos',
      filterLabel: 'Filtrar projetos',
      viewCode: 'Código',
      viewLive: 'Acessar',
      viewMore: 'Ver mais no GitHub',
      filterAll: 'Todos',
      filterPersonal: 'Pessoais',
      filterClient: 'Clientes',
      filterWork: 'Trabalho',
    },
    education: {
      title: 'Formação & Certificados',
      kicker: 'Estudo contínuo',
      educationSubtitle: 'Formação acadêmica',
      certsSubtitle: 'Licenças e certificados',
      viewCredential: 'Ver credencial',
    },
    contact: {
      title: 'Vamos conversar',
      kicker: 'Contato',
      subtitle:
        'Aberto a novas oportunidades, freelas e trocas sobre front-end, Angular e tecnologia. Me chama em qualquer um dos canais abaixo.',
      email: 'E-mail',
      whatsapp: 'WhatsApp',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      builtWith: 'Feito com Angular e Tailwind CSS.',
    },
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Journey',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
      resume: 'Resume',
      theme: 'Theme',
      themeDark: 'Dark',
      themeLight: 'Light',
      themeAmber: 'Amber',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Jackson Luiz',
      role: 'Front-End Software Engineer',
      tagline:
        'I build modern, scalable interfaces with Angular and TypeScript. Currently at the Civil Police of Mato Grosso, evolving systems that demand stability, clarity and responsibility.',
      ctaProjects: 'View projects',
      ctaContact: 'Get in touch',
      available: 'Open to opportunities',
    },
    about: {
      title: 'About me',
      kicker: 'Who I am',
      body1:
        "I'm a Systems Analyst, selected through Mato Grosso's SEPLAG public process, currently working as Senior Software Engineer at the Civil Police of Mato Grosso (PJC-MT). I work on systems focused on data integration and intelligence, with an emphasis on performance, scalability and user experience.",
      body2:
        'I have solid experience with Angular, TypeScript, Tailwind CSS, PrimeNG, Fuse and Angular Material, applying componentization best practices, clean architecture and REST API integration. I hold a degree in Systems Analysis and Development, a postgraduate specialization in Front-End Development, and a Scrum Foundation certification.',
      body3:
        'Outside of work, I also build personal and client projects, always looking to learn something new — currently focused on going deeper into Angular and expanding into new technologies.',
    },
    experience: {
      title: 'Journey',
      kicker: 'Experience',
      subtitle: 'Over 3 years in public safety, from technical support to software engineering.',
    },
    skills: {
      title: 'Skills',
      kicker: 'How I work',
      frontend: 'Front-End',
      backendTools: 'Back-End & Tools',
      practices: 'Practices & Methodologies',
      aiWorkflow: 'AI & Workflow',
      aiWorkflowDescription:
        'I use Claude and Codex with an SDD approach and tools such as Headroom and RTK.',
    },
    projects: {
      title: 'Projects',
      kicker: 'What I build',
      subtitle: 'Personal projects, client work, and systems I work on professionally.',
      selected: 'Selected work',
      selectedSubtitle: 'Three projects that show my work on interfaces and production systems.',
      challenge: 'The challenge',
      contribution: 'My contribution',
      outcome: 'What it delivers',
      illustration: 'Conceptual illustration of the project',
      illustrationNote: 'Conceptual illustration',
      browseAll: 'More projects',
      filterLabel: 'Filter projects',
      viewCode: 'Code',
      viewLive: 'Visit',
      viewMore: 'See more on GitHub',
      filterAll: 'All',
      filterPersonal: 'Personal',
      filterClient: 'Client',
      filterWork: 'Work',
    },
    education: {
      title: 'Education & Certifications',
      kicker: 'Always learning',
      educationSubtitle: 'Academic background',
      certsSubtitle: 'Licenses & certifications',
      viewCredential: 'View credential',
    },
    contact: {
      title: "Let's talk",
      kicker: 'Contact',
      subtitle:
        'Open to new opportunities, freelance work, and conversations about front-end, Angular and tech. Reach out through any channel below.',
      email: 'Email',
      whatsapp: 'WhatsApp',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with Angular and Tailwind CSS.',
    },
  },
};
