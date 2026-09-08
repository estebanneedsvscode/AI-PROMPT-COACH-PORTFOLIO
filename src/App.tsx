import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Fit from './components/Fit';
import Framework from './components/Framework';
import Diagnosis from './components/Diagnosis';
import Evaluation from './components/Evaluation';
import Experience from './components/Experience';
import Philosophy from './components/Philosophy';
import Closing from './components/Closing';
import Navigation from './components/Navigation';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'fit', 'framework', 'diagnosis', 'evaluation', 'experience', 'philosophy', 'closing'];
      let current = 'hero';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-stone-200">
      <Navigation activeSection={activeSection} />
      
      <main className="pb-24">
        <Hero />
        <Fit />
        <Framework />
        <Diagnosis />
        <Evaluation />
        <Experience />
        <Philosophy />
        <Closing />
      </main>
    </div>
  );
}
