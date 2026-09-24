import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { UIUXSection } from './components/UIUXSection';
import { Experience } from './components/Experience';
import { EducationCertifications } from './components/EducationCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sandra-portfolio-theme');
      if (saved) return saved === 'dark';
      return true; // Default to sleek dark mode
    }
    return true;
  });

  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('sandra-portfolio-theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('sandra-portfolio-theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'
      }`}
    >
      <Navbar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenCVModal={() => setIsCVModalOpen(true)}
      />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero
          darkMode={darkMode}
          onOpenCVModal={() => setIsCVModalOpen(true)}
        />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <UIUXSection darkMode={darkMode} />
        <EducationCertifications darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />

      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
};

export default App;
