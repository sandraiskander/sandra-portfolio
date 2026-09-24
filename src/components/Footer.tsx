import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      role="contentinfo"
      className={`border-t py-12 transition-colors ${
        darkMode ? 'border-zinc-900 bg-zinc-950 text-zinc-400' : 'border-zinc-200 bg-white text-zinc-600'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800/40">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
              SI
            </div>
            <div>
              <div className={`font-semibold text-sm ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-indigo-400 font-mono">Senior Frontend Developer</div>
            </div>
          </div>

          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#uiux" className="hover:text-indigo-400 transition-colors">UI/UX</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </nav>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              darkMode ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700'
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Sandra Iskander.</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-indigo-400" />
              <span>Cairo, Egypt</span>
            </span>
          </div>

          <div className="text-[11px] font-mono text-zinc-400 text-center sm:text-right">
            Engineered with React 19, TypeScript & modern accessible CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
