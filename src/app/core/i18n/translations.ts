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
      language: 'Idioma',
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
        'Tenho sólida experiência com Angular, TypeScript, Tailwind CSS, PrimeNG, Fuse e Angular Material, aplicando boas práticas de componentização, arquitetura limpa e integração com APIs REST. Sou graduado em Análise e Desenvolvimento de Sistemas e pós-graduado em Desenvolvimento Front-End.',
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
      sddTitle: 'Desenvolvimento orientado por especificações',
      sddDescription:
        'No Spec-Driven Development (SDD), specs estruturadas registram regras de negócio, decisões de arquitetura e critérios de aceitação. Elas orientam o trabalho de pessoas e agentes de IA e permanecem como referência para implementação e validação.',
      sddSteps: {
        spec: {
          title: 'Especificação',
          description:
            'Defino o problema, os objetivos, o escopo e os critérios de aceitação com apoio da IA.',
        },
        plan: {
          title: 'Planejamento técnico',
          description:
            'Organizo tarefas por etapas e registro padrões de código e orientações para os agentes.',
        },
        implement: {
          title: 'Implementação e revisão',
          description:
            'Claude e Codex implementam com base na spec; reviso código, testes e critérios de aceitação.',
        },
      },
      sddRole:
        'Meu papel: escrever especificações claras, orientar os agentes e validar o resultado antes da entrega.',
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
      showMore: 'Mostrar mais projetos',
      showLess: 'Mostrar menos projetos',
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
      languages: 'Idiomas',
      viewCredential: 'Ver credencial',
    },
    contact: {
      title: 'Vamos conversar',
      kicker: 'Contato',
      subtitle:
        'Aberto a novas oportunidades, freelas e trocas sobre front-end, Angular e tecnologia. Me chama em qualquer um dos canais abaixo.',
      email: 'E-mail',
      whatsapp: 'WhatsApp',
      whatsappMessage: 'Olá Jackson, gostei do seu portfólio e queria falar com você.',
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
      language: 'Language',
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
        'I have solid experience with Angular, TypeScript, Tailwind CSS, PrimeNG, Fuse and Angular Material, applying componentization best practices, clean architecture and REST API integration. I hold a degree in Systems Analysis and Development and a postgraduate specialization in Front-End Development.',
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
      sddTitle: 'Spec-driven development',
      sddDescription:
        'In Spec-Driven Development (SDD), structured specs record business rules, architecture decisions and acceptance criteria. They guide both people and AI agents and remain the reference for implementation and validation.',
      sddSteps: {
        spec: {
          title: 'Specification',
          description:
            'I define the problem, goals, scope and acceptance criteria with AI support.',
        },
        plan: {
          title: 'Technical planning',
          description:
            'I organize tasks into stages and record coding standards and guidance for agents.',
        },
        implement: {
          title: 'Implementation and review',
          description:
            'Claude and Codex implement from the spec; I review code, tests and acceptance criteria.',
        },
      },
      sddRole:
        'My role: write clear specs, guide the agents and validate the result before delivery.',
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
      showMore: 'Show more projects',
      showLess: 'Show fewer projects',
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
      languages: 'Languages',
      viewCredential: 'View credential',
    },
    contact: {
      title: "Let's talk",
      kicker: 'Contact',
      subtitle:
        'Open to new opportunities, freelance work, and conversations about front-end, Angular and tech. Reach out through any channel below.',
      email: 'Email',
      whatsapp: 'WhatsApp',
      whatsappMessage: 'Hi Jackson, I liked your portfolio and would like to talk with you.',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with Angular and Tailwind CSS.',
    },
  },
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Trayectoria',
      skills: 'Habilidades',
      projects: 'Proyectos',
      education: 'Formación',
      contact: 'Contacto',
      resume: 'Currículum',
      theme: 'Tema',
      themeDark: 'Oscuro',
      themeLight: 'Claro',
      themeAmber: 'Ámbar',
      language: 'Idioma',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Jackson Luiz',
      role: 'Ingeniero de Software Front-End',
      tagline:
        'Construyo interfaces modernas y escalables con Angular y TypeScript. Actualmente trabajo en la Policía Civil de Mato Grosso, mejorando sistemas que requieren estabilidad, claridad y responsabilidad.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Hablemos',
      available: 'Disponible para oportunidades',
    },
    about: {
      title: 'Sobre mí',
      kicker: 'Quién soy',
      body1:
        'Soy analista de sistemas, seleccionado mediante un proceso público de SEPLAG-MT, y actualmente trabajo como ingeniero de software sénior en la Policía Civil de Mato Grosso (PJC-MT). Desarrollo sistemas de integración de datos e inteligencia, con atención al rendimiento, la escalabilidad y la experiencia de usuario.',
      body2:
        'Tengo experiencia con Angular, TypeScript, Tailwind CSS, PrimeNG, Fuse y Angular Material. Aplico buenas prácticas de componentes, arquitectura limpia e integración con API REST. Soy graduado en Análisis y Desarrollo de Sistemas y tengo una especialización en Desarrollo Front-End.',
      body3:
        'Fuera del trabajo también desarrollo proyectos personales y para clientes. Sigo aprendiendo, actualmente con el objetivo de profundizar en Angular y explorar nuevas tecnologías.',
    },
    experience: {
      title: 'Trayectoria',
      kicker: 'Experiencia',
      subtitle:
        'Más de 3 años en el ámbito de la seguridad pública, desde el soporte técnico hasta la ingeniería de software.',
    },
    skills: {
      title: 'Habilidades',
      kicker: 'Cómo trabajo',
      frontend: 'Front-End',
      backendTools: 'Back-End y herramientas',
      practices: 'Prácticas y metodologías',
      aiWorkflow: 'IA y flujo de trabajo',
      aiWorkflowDescription:
        'Uso Claude y Codex con el enfoque SDD y herramientas como Headroom y RTK.',
      sddTitle: 'Desarrollo guiado por especificaciones',
      sddDescription:
        'En Spec-Driven Development (SDD), las specs estructuradas registran reglas de negocio, decisiones de arquitectura y criterios de aceptación. Guían a personas y agentes de IA y sirven de referencia para la implementación y la validación.',
      sddSteps: {
        spec: {
          title: 'Especificación',
          description:
            'Defino el problema, los objetivos, el alcance y los criterios de aceptación con apoyo de la IA.',
        },
        plan: {
          title: 'Planificación técnica',
          description:
            'Organizo las tareas por etapas y documento estándares de código e instrucciones para los agentes.',
        },
        implement: {
          title: 'Implementación y revisión',
          description:
            'Claude y Codex implementan según la spec; reviso código, pruebas y criterios de aceptación.',
        },
      },
      sddRole:
        'Mi papel: redactar specs claras, guiar a los agentes y validar el resultado antes de la entrega.',
    },
    projects: {
      title: 'Proyectos',
      kicker: 'Lo que construyo',
      subtitle:
        'Proyectos personales, trabajos para clientes y sistemas en los que participo profesionalmente.',
      selected: 'Destacados',
      selectedSubtitle:
        'Tres proyectos que muestran mi trabajo en interfaces y sistemas en producción.',
      challenge: 'El desafío',
      contribution: 'Mi participación',
      outcome: 'Resultado',
      illustration: 'Ilustración conceptual del proyecto',
      illustrationNote: 'Ilustración conceptual',
      browseAll: 'Otros proyectos',
      showMore: 'Mostrar más proyectos',
      showLess: 'Mostrar menos proyectos',
      filterLabel: 'Filtrar proyectos',
      viewCode: 'Código',
      viewLive: 'Visitar',
      viewMore: 'Ver más en GitHub',
      filterAll: 'Todos',
      filterPersonal: 'Personales',
      filterClient: 'Clientes',
      filterWork: 'Trabajo',
    },
    education: {
      title: 'Formación y certificados',
      kicker: 'Aprendizaje continuo',
      educationSubtitle: 'Formación académica',
      certsSubtitle: 'Licencias y certificados',
      languages: 'Idiomas',
      viewCredential: 'Ver credencial',
    },
    contact: {
      title: 'Hablemos',
      kicker: 'Contacto',
      subtitle:
        'Estoy abierto a nuevas oportunidades, proyectos independientes y conversaciones sobre front-end, Angular y tecnología. Contáctame por cualquiera de los canales siguientes.',
      email: 'Correo electrónico',
      whatsapp: 'WhatsApp',
      whatsappMessage: 'Hola Jackson, me gustó tu portafolio y me gustaría hablar contigo.',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      builtWith: 'Hecho con Angular y Tailwind CSS.',
    },
  },
};
