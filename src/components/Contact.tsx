import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Copy,
  Check,
  Send,
  Clock,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hello Sandra,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Sandra Iskander"
      className={`py-24 border-t ${
        darkMode ? 'border-zinc-800/80 bg-zinc-950' : 'border-zinc-200/80 bg-zinc-50/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Social Placeholders */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-500 uppercase tracking-wider mb-2">
                <span>07</span>
                <span className="w-6 h-px bg-indigo-500" />
                <span>Get in Touch</span>
              </div>

              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
                  darkMode ? 'text-zinc-50' : 'text-zinc-900'
                }`}
              >
                Let's build{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
                  something meaningful.
                </span>
              </h2>

              <p className={`text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                I am currently open to Frontend Developer, Senior Frontend Developer, Full-Stack Developer,
                and UI/UX-focused opportunities. If you're building intuitive, modern digital products,
                let's connect.
              </p>
            </div>

            {/* Direct Email Card with 1-click Copy */}
            <div
              className={`p-5 rounded-2xl border transition-all ${
                darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200 shadow-xs'
              }`}
            >
              <div className="text-xs font-mono uppercase text-zinc-400 mb-2">Direct Email</div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base sm:text-lg font-semibold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2 break-all"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all shrink-0 cursor-pointer ${
                    copied
                      ? 'bg-emerald-600 text-white'
                      : darkMode
                      ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                      : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Timezone Indicator */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className={`p-4 rounded-xl border flex items-center gap-3 ${
                  darkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200 shadow-xs'
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400 uppercase">Location</div>
                  <div className={`text-sm font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                    Cairo, Egypt
                  </div>
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border flex items-center gap-3 ${
                  darkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200 shadow-xs'
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400 uppercase">Timezone</div>
                  <div className={`text-sm font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                    GMT+2 (Egypt Standard Time)
                  </div>
                </div>
              </div>
            </div>

            {/* LinkedIn & GitHub Placeholders (Clearly marked as required) */}
            <div>
              <div className="text-xs font-mono uppercase text-zinc-400 mb-2">
                Professional Profiles (Placeholders)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  className={`p-3.5 rounded-xl border border-dashed flex items-center justify-between ${
                    darkMode ? 'border-zinc-800 bg-zinc-900/20' : 'border-zinc-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                    <div>
                      <div className="text-xs font-medium">LinkedIn Profile</div>
                      <div className="text-[10px] font-mono text-zinc-400">Placeholder Ready</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10">
                    Connect
                  </span>
                </div>

                <div
                  className={`p-3.5 rounded-xl border border-dashed flex items-center justify-between ${
                    darkMode ? 'border-zinc-800 bg-zinc-900/20' : 'border-zinc-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-indigo-400" />
                    <div>
                      <div className="text-xs font-medium">GitHub Repositories</div>
                      <div className="text-[10px] font-mono text-zinc-400">Placeholder Ready</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10">
                    Browse
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-6">
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                darkMode ? 'bg-zinc-900/60 border-zinc-800 shadow-xl' : 'bg-white border-zinc-200 shadow-md'
              }`}
            >
              <h3
                className={`text-xl font-bold tracking-tight mb-1 ${
                  darkMode ? 'text-zinc-100' : 'text-zinc-900'
                }`}
              >
                Send a Message
              </h3>
              <p className={`text-xs mb-6 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Fill in the details below to start a conversation or discuss an opportunity.
              </p>

              {formSubmitted ? (
                <div
                  className={`p-6 rounded-xl border text-center space-y-3 ${
                    darkMode ? 'bg-zinc-950/60 border-emerald-500/30' : 'bg-emerald-50/50 border-emerald-200'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-400">Draft Prepared!</h4>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Your email client should have opened with your pre-filled inquiry. You can also write
                    directly to <span className="text-indigo-400 font-mono">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-mono text-indigo-400 underline underline-offset-4 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className={`block text-xs font-medium mb-1.5 ${
                        darkMode ? 'text-zinc-300' : 'text-zinc-700'
                      }`}
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Connor"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm border transition-colors ${
                        darkMode
                          ? 'bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                          : 'bg-zinc-50 border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600'
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className={`block text-xs font-medium mb-1.5 ${
                        darkMode ? 'text-zinc-300' : 'text-zinc-700'
                      }`}
                    >
                      Your Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm border transition-colors ${
                        darkMode
                          ? 'bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                          : 'bg-zinc-50 border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600'
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className={`block text-xs font-medium mb-1.5 ${
                        darkMode ? 'text-zinc-300' : 'text-zinc-700'
                      }`}
                    >
                      Opportunity or Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Senior Frontend Developer Role"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm border transition-colors ${
                        darkMode
                          ? 'bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                          : 'bg-zinc-50 border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600'
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className={`block text-xs font-medium mb-1.5 ${
                        darkMode ? 'text-zinc-300' : 'text-zinc-700'
                      }`}
                    >
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your team, tech stack, or project vision..."
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm border transition-colors resize-none ${
                        darkMode
                          ? 'bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                          : 'bg-zinc-50 border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
                  >
                    <span>Get in Touch</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
