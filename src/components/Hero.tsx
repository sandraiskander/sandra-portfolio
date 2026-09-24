import React, { useState } from 'react';
import {
  ArrowRight,
  Mail,
  FileDown,
  Sparkles,
  MapPin,
  CheckCircle2,
  Palette,
  Layers,
  Sliders,
} from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onOpenCVModal }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'tokens' | 'code'>('preview');
  const [interactiveCount, setInteractiveCount] = useState(1);
  const [cardVariant, setCardVariant] = useState<'default' | 'accent' | 'minimal'>('default');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[110px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Supporting Copy, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Location & Availability Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 transition-colors ${
                darkMode
                  ? 'bg-zinc-900 border border-zinc-800 text-zinc-300'
                  : 'bg-zinc-100 border border-zinc-200 text-zinc-700'
              }`}
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-indigo-500" />
                <span>Cairo, Egypt</span>
              </span>
              <span className={`h-3 w-px ${darkMode ? 'bg-zinc-700' : 'bg-zinc-300'}`} />
              <span className="text-indigo-400 font-medium">Available for Opportunities</span>
            </div>

            {/* Main Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 ${
                darkMode ? 'text-zinc-50' : 'text-zinc-900'
              }`}
            >
              Senior Frontend Developer{' '}
              <span className="bg-gradient-to-r from-indigo-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
                building thoughtful
              </span>{' '}
              digital experiences.
            </h1>

            {/* Supporting Subheadline */}
            <p
              className={`text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-2xl ${
                darkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              Frontend-focused developer with full-stack experience and a passion for UI/UX,
              modern web technologies, and creating intuitive digital products.
            </p>

            {/* Key Skill Highlights Pills */}
            <div className="flex flex-wrap gap-2 mb-8" aria-label="Core focus areas">
              {['Frontend Development', 'UI/UX Mindset', 'React & TypeScript', 'Full-Stack Architecture'].map(
                (item) => (
                  <span
                    key={item}
                    className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md font-mono ${
                      darkMode
                        ? 'bg-zinc-900/80 text-zinc-300 border border-zinc-800'
                        : 'bg-zinc-100 text-zinc-800 border border-zinc-200'
                    }`}
                  >
                    <CheckCircle2 className="w-3 h-3 text-indigo-500" />
                    {item}
                  </span>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] transition-all shadow-lg shadow-indigo-600/25 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                  darkMode
                    ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800'
                    : 'bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-300 shadow-xs'
                }`}
              >
                <Mail className="w-4 h-4 text-indigo-500" />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Subtle Secondary CV Link */}
            <div className="mt-2">
              <button
                type="button"
                onClick={onOpenCVModal}
                className={`inline-flex items-center gap-1.5 text-xs font-medium underline underline-offset-4 transition-colors cursor-pointer ${
                  darkMode ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                <FileDown className="w-3.5 h-3.5 text-indigo-500" />
                <span>Download CV / Resume Preview</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Code & UI Sandbox Showcase */}
          <div className="lg:col-span-5 w-full">
            <div
              className={`rounded-2xl border transition-all shadow-2xl overflow-hidden ${
                darkMode
                  ? 'bg-zinc-900/90 border-zinc-800/80 shadow-black/40'
                  : 'bg-white border-zinc-200 shadow-xl'
              }`}
            >
              {/* Window Header / Tab Bar */}
              <div
                className={`px-4 py-3 border-b flex items-center justify-between ${
                  darkMode ? 'bg-zinc-950/60 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-zinc-400 ml-2">frontend-workbench.tsx</span>
                </div>

                <div className="flex items-center gap-1 bg-zinc-800/40 p-0.5 rounded-lg border border-zinc-700/40 text-[11px]">
                  <button
                    type="button"
                    onClick={() => setActiveTab('preview')}
                    className={`px-2 py-1 rounded transition-colors ${
                      activeTab === 'preview'
                        ? 'bg-indigo-600 text-white font-medium'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('tokens')}
                    className={`px-2 py-1 rounded transition-colors ${
                      activeTab === 'tokens'
                        ? 'bg-indigo-600 text-white font-medium'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Tokens
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('code')}
                    className={`px-2 py-1 rounded transition-colors ${
                      activeTab === 'code'
                        ? 'bg-indigo-600 text-white font-medium'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    TypeScript
                  </button>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-5">
                {activeTab === 'preview' && (
                  <div className="space-y-4">
                    {/* Interactive controls */}
                    <div className="flex items-center justify-between text-xs pb-3 border-b border-zinc-800/60">
                      <span className="font-mono text-zinc-400 flex items-center gap-1.5">
                        <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                        Component State:
                      </span>
                      <div className="flex gap-1.5">
                        {(['default', 'accent', 'minimal'] as const).map((v) => (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setCardVariant(v)}
                            className={`px-2 py-0.5 rounded text-[11px] font-medium capitalize transition-all ${
                              cardVariant === v
                                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                                : 'text-zinc-400 hover:text-zinc-200'
                            }`}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Live Rendered Component */}
                    <div
                      className={`p-4 rounded-xl border transition-all duration-300 ${
                        cardVariant === 'accent'
                          ? 'bg-indigo-950/30 border-indigo-500/40 ring-1 ring-indigo-500/20'
                          : cardVariant === 'minimal'
                          ? 'bg-transparent border-zinc-700/50'
                          : darkMode
                          ? 'bg-zinc-800/50 border-zinc-700/60'
                          : 'bg-zinc-50 border-zinc-200'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <h2 className="text-sm font-semibold tracking-tight">Thoughtful Interface</h2>
                            <p className="text-[11px] text-zinc-400">Responsive & Accessible</p>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          WCAG AAA
                        </span>
                      </div>

                      <p className="text-xs text-zinc-300 mb-4 leading-relaxed">
                        Precision engineering that prioritizes readability, touch affordances, and zero layout shift.
                      </p>

                      <div className="flex items-center justify-between pt-2">
                        <button
                          type="button"
                          onClick={() => setInteractiveCount((c) => c + 1)}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white transition-transform active:scale-95 flex items-center gap-1.5 shadow-sm"
                        >
                          <Sparkles className="w-3 h-3" />
                          <span>Interact ({interactiveCount})</span>
                        </button>
                        <span className="text-[11px] font-mono text-zinc-400">60 FPS · Smooth</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                      <div className={`p-2 rounded-lg border ${darkMode ? 'bg-zinc-950/40 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
                        <div className="text-[10px] text-zinc-400 uppercase font-mono">React 19</div>
                        <div className="text-xs font-semibold text-indigo-400">Component</div>
                      </div>
                      <div className={`p-2 rounded-lg border ${darkMode ? 'bg-zinc-950/40 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
                        <div className="text-[10px] text-zinc-400 uppercase font-mono">TypeScript</div>
                        <div className="text-xs font-semibold text-emerald-400">Strict Types</div>
                      </div>
                      <div className={`p-2 rounded-lg border ${darkMode ? 'bg-zinc-950/40 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
                        <div className="text-[10px] text-zinc-400 uppercase font-mono">UI/UX</div>
                        <div className="text-xs font-semibold text-violet-400">A11y Compliant</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'tokens' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center gap-2 text-zinc-400 pb-2 border-b border-zinc-800">
                      <Palette className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Design System Tokens</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 rounded bg-zinc-950/50 border border-zinc-800">
                        <span className="text-zinc-400">--color-primary</span>
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-indigo-500 inline-block" />
                          <span className="text-zinc-300">#6366f1</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-zinc-950/50 border border-zinc-800">
                        <span className="text-zinc-400">--font-family</span>
                        <span className="text-zinc-300">Inter, sans-serif</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-zinc-950/50 border border-zinc-800">
                        <span className="text-zinc-400">--border-radius</span>
                        <span className="text-zinc-300">12px (rounded-xl)</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-zinc-950/50 border border-zinc-800">
                        <span className="text-zinc-400">--spacing-touch</span>
                        <span className="text-zinc-300">min 44px touch target</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'code' && (
                  <div className="font-mono text-[11px] leading-relaxed overflow-x-auto text-zinc-300 bg-zinc-950/70 p-3 rounded-lg border border-zinc-800">
                    <pre>
                      <code>{`interface ExperienceProps {
  role: 'Senior Frontend Developer';
  focus: ['UI/UX', 'Performance', 'TanStack'];
  mindset: 'User-First Engineering';
  isResponsive: true;
}

export const SandraProfile: React.FC = () => {
  return (
    <DigitalExperience
      location="Cairo, Egypt"
      experience="Senior Frontend + Full-Stack"
      uiuxNanodegree="Udacity Certified"
      quality="Production-Ready"
    />
  );
};`}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
