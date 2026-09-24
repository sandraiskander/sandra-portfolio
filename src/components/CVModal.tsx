import React from 'react';
import {
  X,
  Printer,
  Mail,
  MapPin,
  CheckCircle2,
  GraduationCap,
  Award,
  Briefcase,
  Layers,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  CERTIFICATIONS_DATA,
  PUBLICATION_DATA,
} from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const CVModal: React.FC<CVModalProps> = ({
  isOpen,
  onClose,
  darkMode,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-heading"
    >
      <div
        className={`w-full max-w-4xl rounded-2xl border shadow-2xl relative my-auto max-h-[92vh] flex flex-col overflow-hidden ${
          darkMode ? 'bg-zinc-900 border-zinc-700 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
        }`}
      >
        {/* Modal Controls Bar */}
        <div
          className={`px-6 py-4 border-b flex items-center justify-between shrink-0 ${
            darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Verified Curriculum Vitae
            </span>
            <span className="text-xs text-zinc-400 hidden sm:inline">· Sandra Iskander</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                darkMode
                  ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                  : 'bg-zinc-200 hover:bg-zinc-300 text-zinc-800'
              }`}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV Modal"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans print:p-0 print:text-black">
          {/* Header */}
          <div className="border-b pb-6 border-zinc-800 print:border-zinc-300">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h2 id="cv-modal-heading" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {PERSONAL_INFO.name}
                </h2>
                <div className="text-sm font-semibold text-indigo-400 mt-1">
                  Senior Frontend Developer · Full-Stack & UI/UX Mindset
                </div>
              </div>

              <div className="text-xs font-mono space-y-1 sm:text-right text-zinc-400 print:text-zinc-600">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-500" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 print:text-zinc-700 mt-4 leading-relaxed max-w-3xl">
              {PERSONAL_INFO.aboutStatement} {PERSONAL_INFO.aboutSecondary}
            </p>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Technical Stack</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-zinc-950/40 border border-zinc-800 print:bg-white print:border-zinc-300">
                <span className="font-semibold text-zinc-200 print:text-zinc-900 block mb-1">
                  Frontend & Mobile:
                </span>
                <span className="text-zinc-400 print:text-zinc-600">
                  React.js, React Native, TypeScript, JavaScript, HTML5, CSS3, SCSS, Bootstrap, TanStack,
                  Responsive Design, ClojureScript, Reagent
                </span>
              </div>

              <div className="p-3 rounded-lg bg-zinc-950/40 border border-zinc-800 print:bg-white print:border-zinc-300">
                <span className="font-semibold text-zinc-200 print:text-zinc-900 block mb-1">
                  Backend, Platforms & UX:
                </span>
                <span className="text-zinc-400 print:text-zinc-600">
                  NestJS, Prisma, Shopify, WordPress, Clojure, UI/UX Design (Udacity Nanodegree),
                  Human-Centered Usability
                </span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-4 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Professional Experience</span>
            </h3>

            <div className="space-y-6">
              {EXPERIENCE_DATA.map((job) => (
                <div key={job.id} className="text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <div className="font-bold text-sm text-zinc-100 print:text-zinc-900">
                      {job.role} <span className="text-indigo-400">@ {job.company}</span>
                    </div>
                    <div className="font-mono text-[11px] text-zinc-400 print:text-zinc-600">
                      {job.period}
                    </div>
                  </div>
                  <p className="text-zinc-300 print:text-zinc-700 mb-2 leading-relaxed">
                    {job.summary}
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-zinc-400 print:text-zinc-600">
                    {job.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & UX Nanodegree */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-zinc-800 print:border-zinc-300">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Education</span>
              </h3>
              <div className="text-xs space-y-1">
                <div className="font-bold text-zinc-100 print:text-zinc-900">
                  {EDUCATION_DATA.institution}
                </div>
                <div className="text-zinc-300 print:text-zinc-700">
                  {EDUCATION_DATA.degree} ({EDUCATION_DATA.period})
                </div>
                <div className="text-emerald-400 font-medium">
                  {EDUCATION_DATA.honors.join(' · ')}
                </div>
                <div className="text-zinc-400 print:text-zinc-600 italic pt-1">
                  Thesis: “{EDUCATION_DATA.thesis.title}”
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-3 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Certifications & Research</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-zinc-300 print:text-zinc-700 list-none p-0">
                {CERTIFICATIONS_DATA.map((c) => (
                  <li key={c.id} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>{c.title}</strong> — {c.issuer}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 pt-2 border-t border-zinc-800 print:border-zinc-300 text-[11px] text-zinc-400">
                <strong>Publication:</strong> {PUBLICATION_DATA.title} ({PUBLICATION_DATA.conference}, {PUBLICATION_DATA.year}).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
