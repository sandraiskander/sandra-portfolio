import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Calendar,
  MapPin,
} from 'lucide-react';
import {
  EDUCATION_DATA,
  CERTIFICATIONS_DATA,
  PUBLICATION_DATA,
} from '../data/portfolioData';

interface EducationCertificationsProps {
  darkMode: boolean;
}

export const EducationCertifications: React.FC<EducationCertificationsProps> = ({
  darkMode,
}) => {
  return (
    <section
      id="education"
      aria-label="Education, Certifications, and Research Publication"
      className="py-20 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-500 uppercase tracking-wider mb-2">
            <span>06</span>
            <span className="w-6 h-px bg-indigo-500" />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              darkMode ? 'text-zinc-100' : 'text-zinc-900'
            }`}
          >
            Education, UX certifications & research.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column: Education */}
          <div className="lg:col-span-5">
            <h3
              className={`text-sm font-mono uppercase tracking-wider mb-4 flex items-center gap-2 ${
                darkMode ? 'text-zinc-400' : 'text-zinc-500'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>University Degree</span>
            </h3>

            <div
              className={`p-6 rounded-2xl border transition-all h-full flex flex-col justify-between ${
                darkMode
                  ? 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700'
                  : 'bg-white border-zinc-200 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    B.Sc. Honors
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{EDUCATION_DATA.period}</span>
                  </div>
                </div>

                <h4
                  className={`text-lg font-bold tracking-tight mb-1 ${
                    darkMode ? 'text-zinc-100' : 'text-zinc-900'
                  }`}
                >
                  {EDUCATION_DATA.degree}
                </h4>

                <p className="text-sm font-semibold text-indigo-400 mb-4">
                  {EDUCATION_DATA.institution}
                </p>

                <div className="space-y-2 mb-6">
                  {EDUCATION_DATA.honors.map((honor) => (
                    <div
                      key={honor}
                      className="flex items-center gap-2 text-xs font-medium text-emerald-400"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{honor}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border text-xs ${
                  darkMode ? 'bg-zinc-950/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                }`}
              >
                <div className="text-[11px] font-mono text-zinc-400 uppercase mb-1">
                  Bachelor Thesis:
                </div>
                <div className="font-semibold text-zinc-200 mb-1">
                  “{EDUCATION_DATA.thesis.title}”
                </div>
                <div className="text-zinc-400 text-[11px]">
                  {EDUCATION_DATA.thesis.note}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: UX & Professional Certifications */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <h3
                className={`text-sm font-mono uppercase tracking-wider flex items-center gap-2 ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-500'
                }`}
              >
                <Award className="w-4 h-4 text-indigo-400" />
                <span>Specialized Certifications</span>
              </h3>
              <span className="text-xs font-mono text-indigo-400">UI/UX Focused</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className={`p-4 rounded-xl border transition-all hover:border-indigo-500/50 flex flex-col justify-between ${
                    cert.featured
                      ? darkMode
                        ? 'bg-zinc-900/70 border-indigo-900/50 ring-1 ring-indigo-500/20'
                        : 'bg-indigo-50/40 border-indigo-200'
                      : darkMode
                      ? 'bg-zinc-900/30 border-zinc-800/80'
                      : 'bg-white border-zinc-200'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                        {cert.issuer}
                      </span>
                      {cert.featured && (
                        <span className="text-[10px] font-mono text-indigo-400 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Featured UX
                        </span>
                      )}
                    </div>

                    <h4
                      className={`text-sm font-bold tracking-tight mb-1.5 ${
                        darkMode ? 'text-zinc-100' : 'text-zinc-900'
                      }`}
                    >
                      {cert.title}
                    </h4>

                    {cert.description && (
                      <p className={`text-xs leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        {cert.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Publication Section (Visually Secondary, Clean Card) */}
        <div
          className={`p-6 rounded-2xl border transition-all ${
            darkMode
              ? 'bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700'
              : 'bg-white border-zinc-200 shadow-xs'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400">
                  Research & Publication
                </span>
                <h4
                  className={`text-base font-bold tracking-tight ${
                    darkMode ? 'text-zinc-100' : 'text-zinc-900'
                  }`}
                >
                  {PUBLICATION_DATA.title}
                </h4>
              </div>
            </div>

            <div className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 shrink-0">
              <MapPin className="w-3.5 h-3.5 text-indigo-500" />
              <span>{PUBLICATION_DATA.conference}, {PUBLICATION_DATA.location} ({PUBLICATION_DATA.year})</span>
            </div>
          </div>

          <p className={`text-xs leading-relaxed mb-4 max-w-4xl ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            {PUBLICATION_DATA.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-zinc-800/40">
            <div className="flex flex-wrap gap-1.5">
              {PUBLICATION_DATA.topics.map((topic) => (
                <span
                  key={topic}
                  className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    darkMode ? 'bg-zinc-950 text-zinc-400 border border-zinc-800' : 'bg-zinc-100 text-zinc-600 border border-zinc-200'
                  }`}
                >
                  {topic}
                </span>
              ))}
            </div>

            <span className="text-[11px] font-mono text-zinc-500">
              International Peer-Reviewed Conference
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
