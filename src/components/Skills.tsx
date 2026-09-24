import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Code2,
  Smartphone,
  Server,
  ShoppingBag,
  Palette,
  Sparkles,
  Layers,
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import type { SkillCategory, SkillItem } from '../types/portfolio';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const { ref: revealRef, visible } = useScrollReveal<HTMLElement>();
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const categories: { id: SkillCategory; label: string; icon: React.ElementType }[] = [
    { id: 'all', label: 'All Technologies', icon: Layers },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'platforms', label: 'Platforms', icon: ShoppingBag },
    { id: 'design', label: 'Design & UX', icon: Palette },
  ];

  const filteredSkills =
    selectedCategory === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section
      ref={revealRef}
      id="skills"
      aria-label="Technical Skills and Technologies"
      className={`reveal-section py-20 relative ${visible ? 'is-visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-500 uppercase tracking-wider mb-2">
              <span>02</span>
              <span className="w-6 h-px bg-indigo-500" />
              <span>Technical Stack</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-bold tracking-tight ${
                darkMode ? 'text-zinc-100' : 'text-zinc-900'
              }`}
            >
              Curated tools & modern web technologies.
            </h2>
          </div>
          <p className={`text-sm max-w-md ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Focused primarily on modern frontend engineering, component systems, and UX fidelity,
            complemented by robust full-stack and mobile capabilities.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                    : darkMode
                    ? 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800 hover:border-zinc-700'
                    : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 border border-zinc-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => {
            const isHovered = activeSkill?.name === skill.name;
            return (
              <div
                key={skill.name}
                onMouseEnter={() => setActiveSkill(skill)}
                onMouseLeave={() => setActiveSkill(null)}
                className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isHovered
                    ? 'border-indigo-500 shadow-md shadow-indigo-500/10 -translate-y-0.5'
                    : darkMode
                    ? 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-900/70'
                    : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className={`text-base font-semibold tracking-tight ${
                        darkMode ? 'text-zinc-100' : 'text-zinc-900'
                      }`}
                    >
                      {skill.name}
                    </h3>

                    {skill.badge ? (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {skill.badge}
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50">
                        {skill.category}
                      </span>
                    )}
                  </div>

                  <p className={`text-xs leading-relaxed mb-4 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {skill.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-3 border-t border-zinc-800/40">
                  <div className="flex flex-wrap gap-1.5">
                    {skill.highlights.map((h) => (
                      <span
                        key={h}
                        className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                          darkMode ? 'bg-zinc-950/60 text-zinc-300' : 'bg-zinc-100 text-zinc-700'
                        }`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Philosophy Notice */}
        <div
          className={`mt-8 p-4 rounded-xl border flex items-center justify-between flex-wrap gap-3 ${
            darkMode ? 'bg-zinc-900/30 border-zinc-800/60 text-zinc-400' : 'bg-zinc-50 border-zinc-200 text-zinc-600'
          }`}
        >
          <div className="flex items-center gap-2 text-xs">
            <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>
              All listed technologies reflect Sandra's hands-on professional toolkit without arbitrary percentage scores.
            </span>
          </div>
          <span className="text-[11px] font-mono text-indigo-400">Strictly Verified Skills</span>
        </div>
      </div>
    </section>
  );
};
