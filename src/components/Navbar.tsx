import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleTheme,
  onOpenCVModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'projects', 'experience', 'skills', 'uiux', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      if (window.scrollY < 150) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'UI/UX', href: '#uiux' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? darkMode
              ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-md shadow-black/20'
              : 'bg-white/85 backdrop-blur-md border-b border-zinc-200/80 py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <a
              href="#"
              className="group flex items-center gap-2.5 text-inherit no-underline focus-visible:rounded-lg"
              aria-label="Sandra Iskander - Back to top"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-sm group-hover:scale-105 transition-transform duration-200">
                SI
              </div>
              <div className="flex flex-col">
                <span className={`font-semibold text-sm tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[11px] tracking-wide uppercase font-mono text-indigo-500 font-medium">
                  Senior Frontend Dev
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
              <ul className="flex items-center gap-1 list-none p-0 m-0">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(link.href);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-colors ${
                          isActive
                            ? darkMode
                              ? 'text-indigo-400 bg-indigo-950/40 border border-indigo-800/50'
                              : 'text-indigo-600 bg-indigo-50 border border-indigo-200/60'
                            : darkMode
                            ? 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50'
                            : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className={`h-4 w-px mx-2 ${darkMode ? 'bg-zinc-800' : 'bg-zinc-200'}`} aria-hidden="true" />

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={onToggleTheme}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode
                    ? 'text-zinc-400 hover:text-amber-300 hover:bg-zinc-800/60'
                    : 'text-zinc-600 hover:text-indigo-600 hover:bg-zinc-100'
                }`}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* View CV Button */}
              <button
                type="button"
                onClick={onOpenCVModal}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  darkMode
                    ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700/80 shadow-xs'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-200 shadow-xs'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-indigo-500" />
                <span>Resume / CV</span>
              </button>
            </nav>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={onToggleTheme}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                className={`p-2 rounded-lg ${
                  darkMode ? 'text-zinc-400 hover:bg-zinc-800' : 'text-zinc-600 hover:bg-zinc-100'
                }`}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                aria-controls="mobile-navigation"
                className={`p-2 rounded-lg ${
                  darkMode ? 'text-zinc-200 hover:bg-zinc-800' : 'text-zinc-800 hover:bg-zinc-100'
                }`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className={`md:hidden px-4 pt-3 pb-6 border-b transition-all ${
              darkMode
                ? 'bg-zinc-950/95 border-zinc-800 backdrop-blur-xl'
                : 'bg-white/95 border-zinc-200 backdrop-blur-xl'
            }`}
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? darkMode
                        ? 'text-indigo-400 bg-indigo-950/50'
                        : 'text-indigo-600 bg-indigo-50'
                      : darkMode
                      ? 'text-zinc-300 hover:bg-zinc-900'
                      : 'text-zinc-700 hover:bg-zinc-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCVModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume / CV</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
