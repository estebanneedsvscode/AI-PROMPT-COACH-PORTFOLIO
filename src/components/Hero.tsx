import React from 'react';
import { BookOpen, UserCircle, LayoutTemplate } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-24 pb-16 flex flex-col justify-center px-6">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/50 text-stone-600 text-sm font-medium">
          <BookOpen size={16} />
          Portfolio
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif leading-tight text-stone-900 mb-6">
          AI Prompt Coaching & <br />
          <span className="text-stone-500 italic">Generative AI Practice</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-stone-600 mb-12 max-w-2xl leading-relaxed">
          Generative AI practitioner combining instructional design, user support, research, and process improvement to help people use AI more effectively.
        </p>

        <div className="pt-12 border-t border-stone-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-stone-400 font-semibold mb-1">Prepared by</h2>
            <p className="text-2xl font-serif text-stone-800">Sean Adrian Esteban</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-stone-600">
              <UserCircle size={20} className="text-stone-400" />
              <span>Instructional Design</span>
            </div>
            <div className="flex items-center gap-2 text-stone-600">
              <LayoutTemplate size={20} className="text-stone-400" />
              <span>Process Improvement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
