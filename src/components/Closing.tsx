import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Closing() {
  return (
    <section id="closing" className="py-32 bg-stone-100 px-6">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
          The interface changes. <br/>
          <span className="text-stone-500 italic">The reasoning process doesn't.</span>
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-3 text-stone-400 text-sm md:text-base font-semibold uppercase tracking-widest mb-12">
          <span>Goal</span>
          <span className="text-stone-300">→</span>
          <span>Context</span>
          <span className="text-stone-300">→</span>
          <span>Instructions</span>
          <span className="text-stone-300">→</span>
          <span>Constraints</span>
          <span className="text-stone-300">→</span>
          <span>Output</span>
          <span className="text-stone-300">→</span>
          <span>Evaluation</span>
          <span className="text-stone-300">→</span>
          <span>Iteration</span>
        </div>

        <p className="text-xl text-stone-600 mb-16 leading-relaxed max-w-2xl mx-auto">
          My approach to AI coaching is grounded in the same principles I apply to learning design and user support: clarify the goal, diagnose the problem, make the process understandable, and help the person become more capable—not more dependent.
        </p>

        <div className="pt-12 border-t border-stone-300">
          <h3 className="text-2xl font-serif text-stone-900 mb-6">Sean Adrian Esteban</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-stone-600">
            <a href="mailto:estebasb15@gmail.com" className="flex items-center gap-2 hover:text-stone-900 transition-colors">
              <Mail size={18} />
              estebasb15@gmail.com
            </a>
            <span className="hidden md:block text-stone-300">|</span>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              +63 991 024 5677
            </div>
            <span className="hidden md:block text-stone-300">|</span>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              Pasay City, Metro Manila
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
