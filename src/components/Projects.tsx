import React, { useState } from 'react';
import {
  ExternalLink,
  Sparkles,
  Info,
  CheckCircle2,
  X,
  ArrowUpRight,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { ProjectCategory, ProjectItem } from '../types/portfolio';
import { GithubIcon } from './SocialIcons';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Applications' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'uiux', label: 'UI/UX & Design Systems' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      aria-label="Featured Projects and Implementations"
      className={`py-20 border-t ${
        darkMode ? 'border-zinc-800/80 bg-zinc-950' : 'border-zinc-200/80 bg-zinc-50/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-500 uppercase tracking-wider mb-2">
              <span>03</span>
              <span className="w-6 h-px bg-indigo-500" />
              <span>Featured Work</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-bold tracking-tight ${
                darkMode ? 'text-zinc-100' : 'text-zinc-900'
              }`}
            >
              Practical development & application architecture.
            </h2>
          </div>

          {/* Transparent Notice */}
          <div
            className={`inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg border ${
              darkMode ? 'bg-zinc-900/60 border-zinc-800 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700 shadow-xs'
            }`}
          >
            <Info className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span>Structured placeholders ready for Sandra's direct repos & demos</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : darkMode
                    ? 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                    : 'bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`group rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                darkMode
                  ? 'bg-zinc-900/40 border-zinc-800/80 hover:border-indigo-500/50 hover:bg-zinc-900/70'
                  : 'bg-white border-zinc-200 hover:border-indigo-300 shadow-xs hover:shadow-md'
              }`}
            >
              {/* Mockup / Visual Header */}
              <div
                className={`relative h-44 p-4 border-b flex flex-col justify-between overflow-hidden ${
                  darkMode ? 'bg-zinc-950/70 border-zinc-800/80' : 'bg-zinc-100/80 border-zinc-200'
                }`}
              >
                {/* Decorative Window Controls & Tag */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-600/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-600/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-600/40" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Abstract UI Component Representation */}
                <div className="my-auto py-2">
                  <div
                    className={`p-3 rounded-xl border font-mono text-[11px] space-y-1.5 transition-transform duration-300 group-hover:scale-[1.02] ${
                      darkMode ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between text-indigo-400">
                      <span className="font-semibold">{project.type}</span>
                      <span className="text-[10px] text-zinc-400">Role: {project.role}</span>
                    </div>
                    <div className="h-1.5 w-3/4 rounded-full bg-indigo-500/30" />
                    <div className="h-1.5 w-1/2 rounded-full bg-zinc-500/20" />
                  </div>
                </div>

                {/* Placeholder Overlay Tag */}
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 z-10">
                  <span>Verified Architecture</span>
                  <span className="text-amber-400/90 text-[10px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Placeholder Ready
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className={`text-lg font-bold tracking-tight mb-2 group-hover:text-indigo-400 transition-colors ${
                      darkMode ? 'text-zinc-100' : 'text-zinc-900'
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-4 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {project.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <ul className="space-y-1.5 mb-5 list-none p-0">
                    {project.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5" aria-label="Project technologies">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${
                          darkMode ? 'bg-zinc-950 text-zinc-300 border border-zinc-800' : 'bg-zinc-100 text-zinc-700 border border-zinc-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links & Inspection Button */}
                  <div className="pt-3 border-t border-zinc-800/40 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-medium text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Architecture Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        aria-label={`Configure code repository for ${project.title}`}
                        className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                          darkMode
                            ? 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
                            : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                        }`}
                        title="Configure GitHub Repository Link"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        aria-label={`Configure live demo for ${project.title}`}
                        className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                          darkMode
                            ? 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
                            : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                        }`}
                        title="Configure Live Demo Link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Project Modal for Architecture Details */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <div
              className={`max-w-xl w-full rounded-2xl border p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto ${
                darkMode ? 'bg-zinc-900 border-zinc-700 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
              }`}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details modal"
                className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {selectedProject.categoryLabel}
                </span>
                <h3 id="modal-project-title" className="text-xl font-bold mt-2">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  Role: {selectedProject.role} · Type: {selectedProject.type}
                </p>
              </div>

              <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                {selectedProject.description}
              </p>

              <div className="mb-5">
                <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2">Key Implementation Highlights:</h4>
                <ul className="space-y-1.5 list-none p-0 text-xs">
                  {selectedProject.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-5">
                <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className={`text-xs font-mono px-2 py-1 rounded ${
                        darkMode ? 'bg-zinc-950 text-indigo-300 border border-zinc-800' : 'bg-zinc-100 text-indigo-700'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border text-xs ${
                  darkMode ? 'bg-zinc-950/60 border-zinc-800 text-zinc-300' : 'bg-zinc-50 border-zinc-200 text-zinc-700'
                }`}
              >
                <div className="font-semibold text-amber-400 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Developer Notice</span>
                </div>
                <p className="leading-relaxed">
                  Per the portfolio requirements, all projects are strictly derived from Sandra's experience profile.
                  To link your exact repository or deployment, update the URLs in{' '}
                  <code className="px-1 py-0.5 rounded bg-zinc-800 text-indigo-300">src/data/portfolioData.ts</code>.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
