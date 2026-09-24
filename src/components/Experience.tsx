import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const { ref: revealRef, visible } = useScrollReveal<HTMLElement>();
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCE_DATA[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      ref={revealRef}
      id="experience"
      aria-label="Professional Experience and Career Timeline"
      className={`reveal-section py-20 border-t ${visible ? 'is-visible' : ''} ${
        darkMode ? 'border-zinc-800/80 bg-zinc-950/60' : 'border-zinc-200/80 bg-zinc-50/50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-500 uppercase tracking-wider mb-2">
              <span>04</span>
              <span className="w-6 h-px bg-indigo-500" />
              <span>Career Timeline</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-bold tracking-tight ${
                darkMode ? 'text-zinc-100' : 'text-zinc-900'
              }`}
            >
              Professional experience across frontend & full-stack engineering.
            </h2>
          </div>

          <p className={`text-sm max-w-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Chronological progression demonstrating strong frontend leadership, robust API integration,
            and cross-platform software delivery.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/20 space-y-8 sm:space-y-10">
          {EXPERIENCE_DATA.map((job) => {
            const isExpanded = expandedId === job.id;
            return (
              <div key={job.id} className="relative group">
                {/* Timeline Dot Marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                    isExpanded
                      ? 'bg-indigo-500 border-indigo-300 ring-4 ring-indigo-500/20 scale-110'
                      : darkMode
                      ? 'bg-zinc-950 border-indigo-500/50 group-hover:border-indigo-400'
                      : 'bg-white border-indigo-500/60 group-hover:border-indigo-600'
                  }`}
                />

                {/* Timeline Card */}
                <div
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? darkMode
                        ? 'bg-zinc-900/90 border-indigo-500/40 shadow-lg shadow-indigo-500/5'
                        : 'bg-white border-indigo-300 shadow-md'
                      : darkMode
                      ? 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-900/70'
                      : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-xs'
                  }`}
                >
                  {/* Card Header */}
                  <div
                    onClick={() => toggleExpand(job.id)}
                    className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleExpand(job.id);
                      }
                    }}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3
                          className={`text-lg font-bold tracking-tight ${
                            darkMode ? 'text-zinc-100' : 'text-zinc-900'
                          }`}
                        >
                          {job.role}
                        </h3>
                        <span className="text-zinc-500 font-mono text-sm">@</span>
                        <span className="text-base font-semibold text-indigo-400">{job.company}</span>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                        <span>{job.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="hidden sm:flex flex-wrap gap-1.5 max-w-xs justify-end">
                        {job.technologies.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                              darkMode ? 'bg-zinc-950 text-zinc-300' : 'bg-zinc-100 text-zinc-700'
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                        {job.technologies.length > 3 && (
                          <span className="text-[11px] font-mono px-1 text-zinc-500">
                            +{job.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div
                        className={`p-1.5 rounded-lg text-zinc-400 ${
                          darkMode ? 'bg-zinc-800/60' : 'bg-zinc-100'
                        }`}
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Card Expanded Content */}
                  {isExpanded && (
                    <div className={`px-5 pb-6 sm:px-6 pt-2 border-t ${darkMode ? 'border-zinc-800' : 'border-zinc-100'}`}>
                      <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                        {job.summary}
                      </p>

                      <div className="space-y-2 mb-5">
                        <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                          Key Deliverables & Responsibilities:
                        </h4>
                        <ul className="space-y-1.5 list-none p-0 text-xs">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2 text-zinc-400">
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                              <span className={darkMode ? 'text-zinc-300' : 'text-zinc-700'}>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2">
                          Applied Tech Stack:
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {job.technologies.map((t) => (
                            <span
                              key={t}
                              className={`text-xs font-mono px-2.5 py-1 rounded-md ${
                                darkMode
                                  ? 'bg-zinc-950 text-indigo-300 border border-zinc-800'
                                  : 'bg-zinc-100 text-indigo-700 border border-zinc-200'
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
