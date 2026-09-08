import React from 'react';

const navItems = [
  { id: 'hero', label: 'Overview' },
  { id: 'fit', label: 'Fit' },
  { id: 'framework', label: 'Framework' },
  { id: 'diagnosis', label: 'Diagnosis' },
  { id: 'evaluation', label: 'Evaluation' },
  { id: 'experience', label: 'Experience' },
  { id: 'philosophy', label: 'Philosophy' },
];

export default function Navigation({ activeSection }: { activeSection: string }) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-serif font-semibold text-lg tracking-wide text-stone-800">
          S.A.E.
        </div>
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                activeSection === item.id 
                  ? 'bg-stone-800 text-stone-50 font-medium' 
                  : 'text-stone-600 hover:bg-stone-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
