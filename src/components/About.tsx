import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Layout,
  Database,
  Zap,
  Smartphone,
  GraduationCap,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const { ref: revealRef, visible } = useScrollReveal<HTMLElement>();
  const pillars = [
    {
      icon: Layout,
      title: 'UI/UX & Frontend Focus',
      description:
        'Crafting responsive, accessible, and visually refined interfaces with modern React, TypeScript, and clean CSS architectures.',
    },
    {
      icon: Database,
      title: 'Full-Stack Understanding',
      description:
        'Understanding both client interactions and the backend architecture behind them, including NestJS APIs, Prisma ORM, and TanStack state.',
    },
    {
      icon: Zap,
      title: 'Fast Learner & Problem Solver',
      description:
        'Constantly exploring and rapidly mastering new technologies to engineer resilient, modern solutions to complex technical challenges.',
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform & Platforms',
      description:
        'Proven hands-on delivery across responsive web applications, React Native mobile apps, and tailored Shopify and WordPress solutions.',
    },
  ];

  return (
    <section
      ref={revealRef}
      id="about"
      aria-label="About Sandra Iskander"
      className={`reveal-section py-20 border-t ${visible ? 'is-visible' : ''} ${
        darkMode ? 'border-zinc-800/80 bg-zinc-950/50' : 'border-zinc-200/80 bg-zinc-50/50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-500 uppercase tracking-wider mb-2">
            <span>01</span>
            <span className="w-6 h-px bg-indigo-500" />
            <span>About Me</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              darkMode ? 'text-zinc-100' : 'text-zinc-900'
            }`}
          >
            Engineering at the intersection of design, code, and systems.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Statement & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <blockquote
              className={`p-6 rounded-2xl border-l-4 border-indigo-500 ${
                darkMode ? 'bg-zinc-900/60 border-zinc-800 text-zinc-200' : 'bg-white border-zinc-200 text-zinc-800 shadow-sm'
              }`}
            >
              <p className="text-lg sm:text-xl font-medium leading-relaxed italic">
                “{PERSONAL_INFO.aboutStatement}”
              </p>
            </blockquote>

            <p className={`text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Based in Cairo, Egypt, I have spent several years delivering high-performance digital
              products across frontend, full-stack, mobile, and modern e-commerce platforms. As someone
              deeply passionate about UI/UX and modern web technologies, I focus on crafting interfaces
              that are intuitive, accessible, and technically robust.
            </p>

            <p className={`text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              I am an agile, fast learner who thrives when exploring new engineering paradigms and solving
              intricate UI and data synchronization problems. Whether architecting reusable component libraries
              in React or designing type-safe server integrations, I ensure that design intent and system integrity
              are preserved at every step.
            </p>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div
                className={`p-3 rounded-xl border ${
                  darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200 shadow-xs'
                }`}
              >
                <div className="text-xs font-mono text-zinc-400 mb-1">Location</div>
                <div className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Cairo, Egypt</span>
                </div>
              </div>

              <div
                className={`p-3 rounded-xl border ${
                  darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200 shadow-xs'
                }`}
              >
                <div className="text-xs font-mono text-zinc-400 mb-1">Education</div>
                <div className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>B.Sc. Honors GUC</span>
                </div>
              </div>

              <div
                className={`p-3 rounded-xl border col-span-2 sm:col-span-1 ${
                  darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200 shadow-xs'
                }`}
              >
                <div className="text-xs font-mono text-zinc-400 mb-1">UX Credential</div>
                <div className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Udacity Nanodegree</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`p-5 rounded-2xl border transition-all hover:border-indigo-500/50 ${
                    darkMode
                      ? 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-900/70'
                      : 'bg-white border-zinc-200 hover:border-indigo-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-indigo-600/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3
                        className={`text-sm font-semibold mb-1 ${
                          darkMode ? 'text-zinc-100' : 'text-zinc-900'
                        }`}
                      >
                        {pillar.title}
                      </h3>
                      <p className={`text-xs leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
