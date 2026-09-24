import React, { useState } from 'react';
import {
  Compass,
  Layout,
  Sliders,
  Code2,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { UX_PILLARS } from '../data/portfolioData';

interface UIUXSectionProps {
  darkMode: boolean;
}

export const UIUXSection: React.FC<UIUXSectionProps> = ({ darkMode }) => {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      number: '01',
      title: 'User Flows & Information Architecture',
      subtitle: 'Mapping intent & reducing cognitive load',
      icon: Compass,
      description:
        'Before writing code, analyzing user journeys, edge cases, and decision paths. Designing navigation trees that make complex data digestible and natural to browse.',
      deliverable: 'Flow diagrams, site maps, and state transition maps',
      badge: 'Research & Planning',
    },
    {
      number: '02',
      title: 'Wireframing & Visual Hierarchy',
      subtitle: 'Layout balance, typography & touch targets',
      icon: Layout,
      description:
        'Establishing clear visual prominence, intentional whitespace, and responsive scaling. Ensuring touch targets meet the 44x44px minimum for comfortable handheld usability.',
      deliverable: 'Low/High-fidelity wireframes and responsive layouts',
      badge: 'UX / Udacity Nanodegree',
    },
    {
      number: '03',
      title: 'Design Tokens & Component Systems',
      subtitle: 'Systemic consistency & atomic composition',
      icon: Sliders,
      description:
        'Standardizing typography scales, color contrast ratios (WCAG 2.1 AA/AAA), border radii, and spacing variables into modular, composable component primitives.',
      deliverable: 'Design token schema, reusable UI pattern libraries',
      badge: 'Systems Thinking',
    },
    {
      number: '04',
      title: 'Production Translation & Engineering',
      subtitle: 'Pixel-perfect, accessible React implementation',
      icon: Code2,
      description:
        'Translating design specifications into responsive, semantic HTML5, accessible ARIA attributes, and smooth 60fps CSS transitions with full keyboard navigability.',
      deliverable: 'Accessible React/TypeScript components with 0 layout shift',
      badge: 'Frontend Engineering',
    },
  ];

  return (
    <section
      id="uiux"
      aria-label="UI/UX and Frontend Synergy"
      className="py-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-500 uppercase tracking-wider mb-2">
            <span>04</span>
            <span className="w-6 h-px bg-indigo-500" />
            <span>The UX Differentiator</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
              darkMode ? 'text-zinc-100' : 'text-zinc-900'
            }`}
          >
            Where development meets{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
              user experience.
            </span>
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            As a developer certified with an{' '}
            <strong className={darkMode ? 'text-zinc-200' : 'text-zinc-800'}>
              Advanced User Experience Design Nanodegree from Udacity
            </strong>
            , I do not just implement mockups—I interrogate how real humans navigate interfaces,
            eliminating friction and ensuring usability at every layer of the frontend stack.
          </p>
        </div>

        {/* 7 Core UX Thinking Pillars */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3
              className={`text-sm font-mono uppercase tracking-wider ${
                darkMode ? 'text-zinc-400' : 'text-zinc-500'
              }`}
            >
              Core UX Considerations in Every Project
            </h3>
            <span className="text-xs font-mono text-indigo-400">7 Core Disciplines</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {UX_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.id}
                className={`p-4 rounded-xl border transition-all hover:border-indigo-500/50 ${
                  darkMode
                    ? 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-900/70'
                    : 'bg-white border-zinc-200 shadow-xs'
                }`}
              >
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono mb-2">
                  <span>0{idx + 1}</span>
                  <span className="h-px w-3 bg-indigo-500/40" />
                  <span className="truncate">{pillar.title}</span>
                </div>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Design → Development Workflow Walkthrough */}
        <div
          className={`rounded-2xl border p-6 lg:p-8 transition-all ${
            darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-zinc-800/80 mb-6 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                Interactive Pipeline
              </span>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
                From Design Intent to Production Frontend
              </h3>
            </div>

            {/* Stepper Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {workflowSteps.map((step, idx) => (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                    activeStep === idx
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : darkMode
                      ? 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
                      : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {step.number}. {step.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-indigo-500 font-mono">
                  {workflowSteps[activeStep].number}
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {workflowSteps[activeStep].badge}
                </span>
              </div>

              <h4
                className={`text-2xl font-bold tracking-tight ${
                  darkMode ? 'text-zinc-100' : 'text-zinc-900'
                }`}
              >
                {workflowSteps[activeStep].title}
              </h4>

              <p className="text-sm font-medium text-indigo-400">
                {workflowSteps[activeStep].subtitle}
              </p>

              <p className={`text-sm leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                {workflowSteps[activeStep].description}
              </p>

              <div
                className={`p-3.5 rounded-xl border text-xs flex items-center gap-3 ${
                  darkMode ? 'bg-zinc-950/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-semibold text-zinc-300">Deliverable Outcome: </span>
                  <span className="text-zinc-400">{workflowSteps[activeStep].deliverable}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev + 1) % workflowSteps.length)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 cursor-pointer"
                >
                  <span>Next Step: {workflowSteps[(activeStep + 1) % workflowSteps.length].title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Visual Workflow Preview Container */}
            <div className="lg:col-span-5">
              <div
                className={`p-6 rounded-2xl border flex flex-col justify-between min-h-[260px] ${
                  darkMode ? 'bg-zinc-950/80 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                }`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <span className="text-xs font-mono text-zinc-400">Workflow Matrix</span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Human-Centric
                  </span>
                </div>

                {/* Conceptual Schematic */}
                <div className="py-6 flex flex-col gap-3 font-mono text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                    <span className="text-zinc-400">01. Discovery & Flows</span>
                    <span className="text-indigo-400">User Journey Map</span>
                  </div>
                  <div className="flex justify-center text-zinc-600">↓</div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                    <span className="text-zinc-400">02. Design System</span>
                    <span className="text-violet-400">Tokens & Primitives</span>
                  </div>
                  <div className="flex justify-center text-zinc-600">↓</div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-800/60">
                    <span className="text-zinc-200 font-semibold">03. Production Code</span>
                    <span className="text-emerald-400 font-semibold">React + A11y</span>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-zinc-500 text-center">
                  Zero disconnect between UX vision and engineering execution.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UX Case Study Placeholders - Per requirement: clear placeholders without fabricated claims */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h3
              className={`text-sm font-mono uppercase tracking-wider ${
                darkMode ? 'text-zinc-400' : 'text-zinc-500'
              }`}
            >
              UX Case Studies & Figma Wireframes
            </h3>
            <span className="text-xs font-mono text-amber-400/90">Figma / Case-Study Placeholders</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className={`p-5 rounded-2xl border border-dashed transition-colors ${
                darkMode ? 'border-zinc-800 bg-zinc-900/20' : 'border-zinc-300 bg-zinc-50/50'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-mono text-indigo-400 font-medium">UX Case Study Slot A</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                  Ready to Link
                </span>
              </div>
              <h4 className={`text-base font-bold mb-1 ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                Udacity Nanodegree Capstone Study
              </h4>
              <p className={`text-xs leading-relaxed mb-3 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Placeholder for Sandra to embed or link her full Udacity UX Nanodegree portfolio case study,
                wireframes, user research interviews, and prototype walkthroughs.
              </p>
              <div className="text-xs text-indigo-400/80 font-mono inline-flex items-center gap-1">
                <span>[Attach Figma URL / Case Study PDF]</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>

            <div
              className={`p-5 rounded-2xl border border-dashed transition-colors ${
                darkMode ? 'border-zinc-800 bg-zinc-900/20' : 'border-zinc-300 bg-zinc-50/50'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-mono text-indigo-400 font-medium">UX Case Study Slot B</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                  Ready to Link
                </span>
              </div>
              <h4 className={`text-base font-bold mb-1 ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                Design System & Component Token Specs
              </h4>
              <p className={`text-xs leading-relaxed mb-3 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Placeholder for Sandra to showcase interactive design system guidelines, color hierarchy,
                and responsive breakpoint specifications.
              </p>
              <div className="text-xs text-indigo-400/80 font-mono inline-flex items-center gap-1">
                <span>[Attach Design System Figma / Docs]</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
