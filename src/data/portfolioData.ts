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
  githubPlaceholder: 'https://github.com/placeholder-sandra',
  linkedinPlaceholder: 'https://linkedin.com/in/placeholder-sandra',
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
    id: 'tanstack-nest-fullstack',
    title: 'Full-Stack Enterprise Management Application',
    subtitle: 'Data-intensive web application with TanStack server-state and NestJS API',
    description:
      'A full-stack application built to deliver responsive data tables, instant server synchronization, and type-safe API communication. Designed with a strong focus on frontend usability, clean data flows, and fast response times.',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Application',
    technologies: ['React.js', 'TypeScript', 'TanStack', 'NestJS', 'Prisma', 'CSS3'],
    type: 'Full-Stack Web App',
    role: 'Full Stack Developer',
    isPlaceholder: true,
    features: [
      'TanStack server-state caching for zero-flicker queries',
      'Modular NestJS backend with Prisma ORM data modeling',
      'Type-safe contracts shared between client and server',
      'Accessible, high-density data views with responsive layout',
    ],
    architectureNotes: 'Clean separation between presentation layer and API controllers with type-safe schema.',
  },
  {
    id: 'shopify-ecommerce-platform',
    title: 'Modern E-Commerce Storefront',
    subtitle: 'High-performance shopping experience with customized product interactions',
    description:
      'A customized e-commerce storefront focusing on mobile-first conversion, intuitive navigation, and clean visual hierarchy. Engineered for rapid page loads, responsive layouts, and seamless checkout flows.',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    technologies: ['Shopify', 'JavaScript', 'HTML5', 'SCSS', 'Responsive Design', 'UI/UX Design'],
    type: 'E-Commerce Storefront',
    role: 'Senior Front End Developer',
    isPlaceholder: true,
    features: [
      'Tailored storefront UX with fluid product cards and cart drawers',
      'SCSS modular design system matching brand typography',
      'Mobile-first responsive design across all viewports',
      'Streamlined user flows reducing checkout friction',
    ],
    architectureNotes: 'Customized Shopify themes paired with modular SCSS styling for peak responsiveness.',
  },
  {
    id: 'react-native-mobile-app',
    title: 'Cross-Platform Mobile Application',
    subtitle: 'Native mobile interface with responsive UI components for iOS and Android',
    description:
      'A mobile application crafted from scratch with React Native. Emphasizes fluid gesture navigation, native design language compliance, and responsive layouts across varied screen densities.',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    technologies: ['React Native', 'JavaScript', 'TypeScript', 'Responsive Design', 'UI/UX Design'],
    type: 'Mobile App (iOS & Android)',
    role: 'Mobile & Front End Developer',
    isPlaceholder: true,
    features: [
      'Native gesture-driven transitions and navigation stacks',
      'Adaptive layouts for varied handset and tablet screen sizes',
      'Reusable mobile component primitives with strict typing',
      'Consistent design system adhering to mobile usability patterns',
    ],
    architectureNotes: 'Single codebase delivering tailored native user experiences on iOS and Android.',
  },
  {
    id: 'nextgen-platform-frontend',
    title: 'Next-Generation Applications Platform UI',
    subtitle: 'Scalable frontend system with reusable component architecture',
    description:
      'A core frontend interface developed for a multi-faceted application platform. Focuses on high-performance rendering, structured component hierarchy, and intuitive user workflows.',
    category: 'web',
    categoryLabel: 'Web Applications',
    technologies: ['React.js', 'TypeScript', 'JavaScript', 'CSS3', 'Responsive Design', 'UI/UX Design'],
    type: 'Web Application',
    role: 'Software Developer',
    isPlaceholder: true,
    features: [
      'Component-driven architecture for rapid feature composition',
      'Predictable client state patterns and reactive data updates',
      'Accessible keyboard navigation and focus management',
      'Refined visual hierarchy designed for day-to-day power users',
    ],
    architectureNotes: 'Built around modular React components with type-safe state interfaces.',
  },
  {
    id: 'ux-design-system-case-study',
    title: 'Design-to-Code Component System & UX Flow',
    subtitle: 'Bridging user research, wireframes, and production-ready React components',
    description:
      'A comprehensive UI/UX workflow study documenting the transition from user journey mapping and wireframing into production-ready accessible React components. Demonstrates the synergy between Udacity UX principles and clean frontend engineering.',
    category: 'uiux',
    categoryLabel: 'UI/UX Projects',
    technologies: ['UI/UX Design', 'React.js', 'TypeScript', 'SCSS', 'HTML5', 'Responsive Design'],
    type: 'Design System & Case Study',
    role: 'UI/UX & Frontend Engineer',
    isPlaceholder: true,
    features: [
      'Complete user journey mapping and usability heuristic audits',
      'Design token definition (typography scale, spacing, color contrasts)',
      'Accessible component library meeting WCAG 2.1 AA standards',
      'Interactive prototype demonstrating responsive edge-cases',
    ],
    architectureNotes: 'Translating design tokens and user flow diagrams into reusable React components.',
  },
  {
    id: 'wordpress-custom-portal',
    title: 'Responsive Content & Web Portal',
    subtitle: 'Custom WordPress theme with responsive layouts and structured content',
    description:
      'A custom web portal delivering dynamic content management with responsive styling, fast delivery, and an intuitive editorial experience tailored for content teams.',
    category: 'web',
    categoryLabel: 'Web Applications',
    technologies: ['WordPress', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design'],
    type: 'Web Portal & CMS',
    role: 'Front End Engineer',
    isPlaceholder: true,
    features: [
      'Custom theme templates structured for responsive content presentation',
      'Bootstrap utility grid optimized for custom brand aesthetics',
      'Mobile-responsive menus and dynamic page templates',
      'Optimized asset loading and clean semantic HTML',
    ],
    architectureNotes: 'Custom WordPress theme development with responsive modern CSS.',
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
      'Architected type-safe data pipelines from database models up to React client interfaces.',
      'Optimized server queries and client caching for seamless, responsive user experiences.',
      'Collaborated on feature roadmaps balancing rapid delivery with architectural resilience.',
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
      'Built high-performance web and mobile applications with responsive component design.',
      'Delivered customized Shopify and WordPress e-commerce solutions tailored to business requirements.',
      'Ensured high standards of UI/UX fidelity, cross-browser compatibility, and mobile responsiveness.',
      'Mentored team members on modern frontend best practices and reusable component structures.',
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
    responsibilities: [
      'Worked on building a next-generation applications platform.',
      'Developed responsive, scalable frontend features and modular component systems.',
      'Addressed real-world usability challenges and refined interface workflows for users.',
      'Collaborated across engineering and product to maintain code quality and platform reliability.',
    ],
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
      'Converted visual design specifications into clean, production-ready frontend code.',
      'Monitored application responsiveness and cross-device performance.',
      'Ensured consistent user experiences across modern mobile and desktop browsers.',
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
    technologies: ['Responsive Design', 'UI/UX Design', 'JavaScript'],
    responsibilities: [
      'Implemented a fully functional Android application from scratch.',
      'Engineered mobile UI layouts, touch interactions, and native view hierarchies.',
      'Handled local data persistence and core application lifecycle management.',
    ],
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
      'Gained early foundational experience in software engineering principles, MVC separation, and database queries.',
    ],
  },
];

/**
 * EDUCATION
 */
export const EDUCATION_DATA = {
  institution: 'German University in Cairo (GUC)',
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
    title: 'Advanced User Experience Design Nanodegree',
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
    issuer: 'Google / Egyptian Ministry of Communications & IT (MCIT)',
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
