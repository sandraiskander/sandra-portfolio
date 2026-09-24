# Sandra Iskander — Senior Frontend Developer Portfolio

> **Frontend Developer + Full-Stack Experience + UI/UX Mindset**  
> Premium, modern personal portfolio website built with React 19, TypeScript, and modern responsive CSS.

---

## 🎯 Positioning & Highlights

- **Role Focus**: Senior Frontend Developer, Frontend Developer, Full-Stack Developer, UI/UX-focused Engineering.
- **Core Philosophy**: Building thoughtful, intuitive, accessible, and high-performance digital experiences.
- **Key Differentiator**: Advanced User Experience Design Nanodegree from Udacity, uniting human-centered product design with robust frontend architectures.
- **Location**: Cairo, Egypt (GMT+2).

---

## 🛠️ Verified Technical Toolkit

Strictly aligned with Sandra's professional capabilities:

- **Frontend**: React.js, TypeScript, JavaScript, HTML5, CSS3, SCSS, Bootstrap, TanStack, Responsive Design, ClojureScript, Reagent
- **Mobile**: React Native
- **Backend & APIs**: NestJS, Prisma, Clojure
- **Platforms**: Shopify, WordPress
- **Design & UX**: UI/UX Design (Udacity Nanodegree Certified), Responsive Design, Accessibility (WCAG 2.1 AA/AAA)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
pnpm install
# or
npm install
```

### 2. Start Development Server
```bash
pnpm run dev
# or
npm run dev
```

### 3. Build for Production
```bash
pnpm run build
# or
npm run build
```

### 4. Preview Production Build
```bash
pnpm run preview
# or
npm run preview
```

---

## 📂 Project Architecture

```
Portfolio/
├── public/                     # Static assets & favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Accessible sticky header, theme toggle & mobile drawer
│   │   ├── Hero.tsx            # Hero section with interactive UI workbench & CTAs
│   │   ├── About.tsx           # Concise personal intro & 4 engineering pillars
│   │   ├── Skills.tsx          # Filterable tech grid with capability highlights
│   │   ├── Projects.tsx        # Featured work with architecture modals & filter tabs
│   │   ├── UIUXSection.tsx     # Deep-dive UX section & interactive workflow pipeline
│   │   ├── Experience.tsx      # Chronological interactive career timeline
│   │   ├── EducationCertifications.tsx # GUC honors, UX certifications, and ISNCC publication
│   │   ├── Contact.tsx         # 1-click email copy, interactive form & timezone info
│   │   ├── CVModal.tsx         # Printable, accessible resume viewer modal
│   │   ├── Footer.tsx          # Semantic footer with back-to-top & copyright
│   │   └── SocialIcons.tsx     # Clean SVG brand icons
│   ├── data/
│   │   └── portfolioData.ts    # Centralized, strictly verified resume & project data
│   ├── types/
│   │   └── portfolio.ts        # Strict TypeScript type definitions
│   ├── App.tsx                 # Main application shell with theme persistence
│   ├── index.css               # Tailwind CSS v4 setup, scrollbars & keyframes
│   └── main.tsx                # React 19 root mounting
├── index.html                  # SEO metadata, Open Graph, fonts & favicon
├── package.json                # Project dependencies & build scripts
├── tsconfig.json               # TypeScript strict configuration
└── vite.config.ts              # Vite 6 configuration
```

---

## ✏️ How to Customize Placeholders

All content is centralized in **[`src/data/portfolioData.ts`](file:///Users/sandraiskander/Documents/Portfolio/src/data/portfolioData.ts)** for easy maintenance:

1. **LinkedIn & GitHub URLs**: Update `githubPlaceholder` and `linkedinPlaceholder` in `PERSONAL_INFO`.
2. **Project Repositories & Demos**: Edit `githubUrl` and `demoUrl` in `PROJECTS_DATA` for any of the 6 featured projects.
3. **UX Case Studies**: Attach Figma links or case study URLs in `src/components/UIUXSection.tsx`.
4. **CV / Resume PDF**: Place your latest `Sandra_Iskander_CV.pdf` inside `public/` to link direct file downloads.

---

## ♿ Accessibility & Performance

- **Semantic HTML**: Standard landmark regions (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`).
- **Heading Order**: Sequential `<h1>` through `<h4>` with no skipped heading levels.
- **Skip Links**: Accessible `#main-content` jump link for keyboard navigators.
- **Contrast & Motion**: WCAG AA/AAA contrast ratios and `prefers-reduced-motion` CSS overrides.
- **Touch Affordances**: Minimum 44×44px touch targets on mobile viewports.
