import type {
  SkillItem,
  ProjectItem,
  ExperienceItem,
  CertificationItem,
  PublicationItem,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Sandra Iskander',
  title: 'Senior Frontend Developer',
  supportingTitle: 'Frontend Developer + Full-Stack Experience + UI/UX Mindset',
  headline: 'Senior Frontend Developer building thoughtful digital experiences.',
  supportingLine:
    'Frontend-focused developer with full-stack experience and a passion for UI/UX, modern web technologies, and creating intuitive digital products.',
  location: 'Cairo, Egypt',
  timezone: 'GMT+2 (Cairo Time)',
  email: 'sandraiskander3@gmail.com',
  /** Add your profile URLs in Contact / Footer when ready — not linked until provided */
  githubUrl: null as string | null,
  linkedinUrl: null as string | null,
  aboutStatement:
    'I enjoy turning ideas and designs into functional, responsive digital experiences. My background in frontend and full-stack development allows me to understand both the interface users interact with and the systems behind it.',
  aboutSecondary:
    'I am a fast learner who enjoys exploring new technologies and solving problems, bridging user-centric design with resilient architecture.',
};

/**
 * TECHNICAL SKILLS
 * Strictly using only the provided list:
 * HTML5, CSS3, SCSS, JavaScript, TypeScript, React.js, React Native,
 * TanStack, NestJS, Prisma, Shopify, WordPress, Bootstrap,
 * Responsive Design, UI/UX Design, ClojureScript, Clojure, Reagent
 */
export const SKILLS_DATA: SkillItem[] = [
  // Frontend
  {
    name: 'React.js',
    category: 'frontend',
    description: 'Component architecture, state patterns, reusable UI libraries, and modern lifecycle hooks.',
    badge: 'Core Frontend',
    highlights: ['Component systems', 'Hooks & State', 'Virtual DOM optimization'],
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    description: 'Strict type safety, generic interfaces, scalable frontend codebases, and maintainable contracts.',
    badge: 'Strong Typing',
    highlights: ['Type-safe props & APIs', 'Generics & Utility types', 'Refactoring safety'],
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    description: 'Modern ES6+ syntax, asynchronous programming, DOM APIs, and functional paradigms.',
    highlights: ['ESNext features', 'Async / Event Loop', 'DOM performance'],
  },
  {
    name: 'TanStack',
    category: 'frontend',
    description: 'Robust server-state management, intelligent caching, data tables, and client synchronization.',
    badge: 'State & Data',
    highlights: ['TanStack Query', 'Server-state caching', 'Optimistic UI updates'],
  },
  {
    name: 'HTML5',
    category: 'frontend',
    description: 'Semantic markup, accessibility landmarks, clean document outlines, and modern web standards.',
    highlights: ['Semantic landmarks', 'WCAG accessibility', 'SEO structure'],
  },
  {
    name: 'CSS3',
    category: 'frontend',
    description: 'Modern flexbox, grid layouts, animations, transitions, and responsive fluid design.',
    highlights: ['CSS Grid & Flexbox', 'Custom properties', 'Keyframe animations'],
  },
  {
    name: 'SCSS',
    category: 'frontend',
    description: 'Modular stylesheets, mixins, nesting, BEM conventions, and design token integration.',
    highlights: ['Modular architecture', 'Mixins & variables', 'Preprocessed styling'],
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    description: 'Rapid prototyping, responsive utility grids, and accessible components.',
    highlights: ['Responsive grid', 'Utility classes', 'Layout rapid testing'],
  },
  {
    name: 'Responsive Design',
    category: 'frontend',
    description: 'Fluid viewports, cross-device parity, mobile-first breakpoints, and touch optimization.',
    badge: 'Cross-Device',
    highlights: ['Mobile-first layout', 'Container queries', 'Touch targets'],
  },
  {
    name: 'ClojureScript',
    category: 'frontend',
    description: 'Functional frontend programming with immutable data structures and reactive view rendering.',
    highlights: ['Immutable data', 'Functional UI', 'REPL-driven workflows'],
  },
  {
    name: 'Reagent',
    category: 'frontend',
    description: 'Minimalist ClojureScript interface to React for reactive, declarative UI components.',
    highlights: ['Reactive atoms', 'Declarative views', 'Hiccup syntax'],
  },

  // Mobile
  {
    name: 'React Native',
    category: 'mobile',
    description: 'Cross-platform mobile applications for iOS and Android with native performance and responsive layouts.',
    badge: 'Cross-Platform',
    highlights: ['iOS & Android UI', 'Native bridge integration', 'Mobile navigation'],
  },

  // Backend
  {
    name: 'NestJS',
    category: 'backend',
    description: 'Modular enterprise Node.js framework for scalable, maintainable server-side APIs.',
    badge: 'Robust APIs',
    highlights: ['Dependency injection', 'Controllers & Services', 'Clean architecture'],
  },
  {
    name: 'Prisma',
    category: 'backend',
    description: 'Type-safe database ORM, schema modeling, automated migrations, and relational queries.',
    badge: 'Type-Safe ORM',
    highlights: ['Schema migrations', 'Relational modeling', 'Zero-drift queries'],
  },
  {
    name: 'Clojure',
    category: 'backend',
    description: 'Functional, concurrent backend programming on the JVM with emphasis on data-driven design.',
    highlights: ['Data-driven design', 'Concurrency models', 'Functional backend'],
  },

  // Platforms
  {
    name: 'Shopify',
    category: 'platforms',
    description: 'Custom e-commerce store implementation, Liquid templating, and storefront customization.',
    badge: 'E-Commerce',
    highlights: ['Storefront builds', 'Theme customization', 'Checkout optimization'],
  },
  {
    name: 'WordPress',
    category: 'platforms',
    description: 'Custom theme development, content architectures, and responsive e-commerce web solutions.',
    highlights: ['Custom themes', 'CMS architecture', 'Responsive templates'],
  },

  // Design
  {
    name: 'UI/UX Design',
    category: 'design',
    description: 'User flows, wireframing, component design systems, usability heuristics, and visual hierarchy.',
    badge: 'Nanodegree Certified',
    highlights: ['Udacity UX Nanodegree', 'User journey mapping', 'Design-to-code translation'],
  },
];

/**
 * FEATURED PROJECTS
 * Only clearly marked placeholders ready for Sandra to link her repos & live URLs.
 * Strictly uses provided technologies and categories without invented metrics or clients.
 */
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'placeholder-web-app',
    title: '[Placeholder] Web Application',
    subtitle: 'Replace with project title — e.g. product dashboard, marketing site, or internal tool',
    description:
      'Add a concise summary of a web application you shipped: the user problem, your frontend role, and the stack you used. Link a live demo and GitHub repo when available.',
    category: 'web',
    categoryLabel: 'Web Applications',
    technologies: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Responsive Design'],
    type: 'Web Application',
    role: 'Frontend Developer',
    isPlaceholder: true,
    features: [
      'Replace with 2–4 bullets: interface highlights, accessibility, or responsive behavior you owned',
    ],
  },
  {
    id: 'placeholder-fullstack',
    title: '[Placeholder] Full-Stack Application',
    subtitle: 'Replace with a TanStack + NestJS (or similar) project you contributed to',
    description:
      'Describe how you connected a React client to APIs—focus on UI data flows, forms, tables, and how you worked with backend contracts. No metrics required.',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Applications',
    technologies: ['React.js', 'TypeScript', 'TanStack', 'NestJS', 'Prisma'],
    type: 'Full-Stack Web App',
    role: 'Full Stack Developer',
    isPlaceholder: true,
    features: ['Replace with bullets about client/server integration and frontend architecture'],
  },
  {
    id: 'placeholder-mobile',
    title: '[Placeholder] Mobile Application',
    subtitle: 'Replace with a React Native (or mobile) project title',
    description:
      'Summarize screens, navigation, and UI patterns you implemented. Add App Store / Play Store or demo links when you have them.',
    category: 'mobile',
    categoryLabel: 'Mobile Applications',
    technologies: ['React Native', 'TypeScript', 'Responsive Design', 'UI/UX Design'],
    type: 'Mobile Application',
    role: 'Frontend / Mobile Developer',
    isPlaceholder: true,
    features: ['Replace with mobile UI or cross-platform details you led'],
  },
  {
    id: 'placeholder-ecommerce',
    title: '[Placeholder] E-Commerce Experience',
    subtitle: 'Replace with a Shopify or WordPress storefront you customized',
    description:
      'Outline theme customization, checkout or catalog UX, and how you balanced brand design with performance. Link the live store if permitted.',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    technologies: ['Shopify', 'WordPress', 'SCSS', 'JavaScript', 'Responsive Design'],
    type: 'E-Commerce',
    role: 'Senior Front End Developer',
    isPlaceholder: true,
    features: ['Replace with theme, Liquid/template, or plugin work you delivered'],
  },
  {
    id: 'placeholder-uiux',
    title: '[Placeholder] UI/UX Case Study',
    subtitle: 'Replace with a Udacity UX project, wireframe flow, or design-to-code study',
    description:
      'Upload Figma frames, wireframes, or before/after UI captures. Explain user flows and how you translated design into production components.',
    category: 'uiux',
    categoryLabel: 'UI/UX Projects',
    technologies: ['UI/UX Design', 'React.js', 'TypeScript', 'SCSS'],
    type: 'UI/UX & Frontend',
    role: 'UI/UX-minded Developer',
    isPlaceholder: true,
    features: ['Replace with research, prototyping, or usability steps you documented'],
  },
];

/**
 * EXPERIENCE TIMELINE
 * Chronologically organized, matching exact details provided in the prompt.
 */
export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'determinds-fullstack',
    role: 'Full Stack Developer',
    company: 'Determinds',
    period: 'January 2026 – June 2026',
    startDate: 'Jan 2026',
    endDate: 'Jun 2026',
    summary:
      'Engineered full-stack applications leveraging TanStack for intelligent client-side state and NestJS with Prisma for high-integrity, type-safe API backends.',
    technologies: ['TanStack', 'NestJS', 'Prisma', 'TypeScript', 'React.js', 'Responsive Design'],
    responsibilities: [
      'Built full-stack applications using TanStack and NestJS with Prisma for robust APIs.',
    ],
  },
  {
    id: 'determinds-senior-frontend',
    role: 'Senior Front End Developer',
    company: 'Determinds',
    period: 'August 2023 – December 2025',
    startDate: 'Aug 2023',
    endDate: 'Dec 2025',
    summary:
      'Led frontend engineering of high-performance web and mobile applications while delivering customized Shopify and WordPress e-commerce solutions.',
    technologies: ['React.js', 'React Native', 'JavaScript', 'TypeScript', 'Shopify', 'WordPress', 'SCSS', 'UI/UX Design'],
    responsibilities: [
      'Built high-performance web and mobile applications and delivered customized Shopify and WordPress e-commerce solutions.',
    ],
  },
  {
    id: 'beest-software-dev',
    role: 'Software Developer',
    company: 'Beest',
    period: 'January 2020 – January 2026',
    startDate: 'Jan 2020',
    endDate: 'Jan 2026',
    summary:
      'Contributed to the multi-year development and evolution of a next-generation applications platform.',
    technologies: ['JavaScript', 'TypeScript', 'React.js', 'CSS3', 'HTML5', 'UI/UX Design', 'ClojureScript', 'Reagent'],
    responsibilities: ['Worked on building a next-generation applications platform.'],
  },
  {
    id: 'eduniverse-frontend-engineer',
    role: 'Front End Engineer',
    company: 'Eduniverse',
    period: 'July 2018 – September 2019',
    startDate: 'Jul 2018',
    endDate: 'Sep 2019',
    summary:
      'Designed, implemented, and monitored responsive web pages and interactive applications for educational audiences.',
    technologies: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'Bootstrap', 'Responsive Design'],
    responsibilities: [
      'Designed, implemented, and monitored responsive web pages and applications.',
    ],
  },
  {
    id: 'simpler-apps-android',
    role: 'Android Developer',
    company: 'Simpler Apps Software Solutions',
    period: 'June 2016 – July 2016',
    startDate: 'Jun 2016',
    endDate: 'Jul 2016',
    summary:
      'Implemented a fully functional Android mobile application from scratch with native components.',
    technologies: ['UI/UX Design', 'Responsive Design'],
    responsibilities: ['Implemented a fully functional Android application from scratch.'],
  },
  {
    id: 'simpler-apps-intern',
    role: 'Web and Software Developer Intern',
    company: 'Simpler Apps Software Solutions',
    period: 'August 2015',
    startDate: 'Aug 2015',
    endDate: 'Aug 2015',
    summary:
      'Completed a software development assignment focusing on web and software architecture foundations.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    responsibilities: [
      'Worked on a software development assignment using C#, .NET, MVC, and SQL Entity Framework.',
    ],
  },
];

/**
 * EDUCATION
 */
export const EDUCATION_DATA = {
  institution: 'German University in Cairo',
  degree: 'Bachelor of Science in Media Engineering and Technology',
  period: '2013 – 2018',
  location: 'Cairo, Egypt',
  honors: [
    'Cumulative Grade: Excellent with honors',
    'Bachelor Grade: Excellent',
  ],
  thesis: {
    title: 'Preserving Privacy in Wireless Sensor Networks using Onion Routing',
    note: 'Published at the 2018 International Symposium on Networks, Computers and Communications (ISNCC), Rome.',
  },
};

/**
 * UX & PROFESSIONAL CERTIFICATIONS
 * Highlighting UI/UX as Sandra's core differentiator.
 */
export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'udacity-ux',
    title: 'Advanced User Experience Design',
    issuer: 'Udacity',
    category: 'ux',
    featured: true,
    description: 'Deep dive into user research, wireframing, high-fidelity prototyping, interaction design, and usability testing.',
  },
  {
    id: 'coursera-ux',
    title: 'Start the UX Design Process',
    issuer: 'Coursera',
    category: 'ux',
    featured: true,
    description: 'Foundational human-centered design principles, empathy mapping, user personas, and user journey flows.',
  },
  {
    id: 'google-android',
    title: 'Developing Android Apps',
    issuer: 'Google / Egyptian Ministry of Communications and Information Technology',
    category: 'mobile',
    description: 'Native mobile application architecture, responsive mobile layouts, and application lifecycle principles.',
  },
  {
    id: 'guc-cdp',
    title: 'Career Development Program',
    issuer: 'German University in Cairo',
    category: 'career',
    description: 'Professional development, engineering communication, and project planning.',
  },
  {
    id: 'wellspring-leadership',
    title: 'Leadership Training',
    issuer: 'Wellspring Egypt',
    category: 'leadership',
    description: 'Team leadership, emotional intelligence, collaborative problem solving, and cross-functional alignment.',
  },
];

/**
 * PUBLICATION
 */
export const PUBLICATION_DATA: PublicationItem = {
  title: 'Preserving Privacy in Wireless Sensor Networks using Onion Routing',
  conference: '2018 International Symposium on Networks, Computers and Communications (ISNCC)',
  location: 'Rome, Italy',
  year: 2018,
  description:
    'Peer-reviewed research investigating cryptographic privacy preservation, distributed routing security, and anonymous data propagation in wireless sensor networks.',
  topics: ['Network Security', 'Distributed Systems', 'Privacy & Cryptography', 'Routing Protocols'],
};

/**
 * UI/UX PRINCIPLES & WORKFLOW DATA
 */
export const UX_PILLARS = [
  {
    id: 'user-flows',
    title: 'User Flows & Journeys',
    description: 'Mapping every user touchpoint, decision tree, and state transition before writing code to prevent friction.',
  },
  {
    id: 'responsive-interfaces',
    title: 'Responsive Interfaces',
    description: 'Designing fluid, mobile-first layouts that adapt gracefully from compact screens to ultra-wide displays.',
  },
  {
    id: 'usability',
    title: 'Usability & Accessibility',
    description: 'Adhering to WCAG guidelines, accessible color contrasts, keyboard navigable flows, and intuitive affordances.',
  },
  {
    id: 'visual-hierarchy',
    title: 'Visual Hierarchy',
    description: 'Guiding the user eyes purposefully using typography weights, intentional whitespace, and balanced contrast.',
  },
  {
    id: 'component-design',
    title: 'Component Design Systems',
    description: 'Building atomic, composable design tokens and component libraries for visual consistency and speed.',
  },
  {
    id: 'interaction',
    title: 'Micro-Interactions & Motion',
    description: 'Crafting subtle, meaningful transitions that provide instant tactile feedback without overwhelming the user.',
  },
  {
    id: 'design-to-code',
    title: 'Design-to-Code Translation',
    description: 'Bridging Figma specifications into pixel-perfect, accessible, and performant React components.',
  },
];
