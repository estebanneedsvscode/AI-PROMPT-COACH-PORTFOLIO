import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-stone-50 px-6 border-t border-stone-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Real-World Experience</h2>
        <p className="text-lg text-stone-600 mb-12 max-w-2xl">
          Demonstrated experience using AI and structured information systems in a real operational environment, identifying knowledge gaps, improving workflows, and supporting users.
        </p>

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200">
          <div className="p-8 border-b border-stone-100 bg-stone-900 text-stone-50">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase size={20} className="text-stone-400" />
              <h3 className="text-xl font-semibold">Amazon Operations Service</h3>
            </div>
            <p className="text-stone-400">Customer Service Associate | Workflow Optimization</p>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-3">Context & Problem</h4>
                <p className="text-stone-700 leading-relaxed mb-6">
                  Managing 100-150 complex customer and logistics concerns daily required rapid information retrieval. Existing documentation was fragmented, leading to process inconsistencies and extended handling times during peak seasons.
                </p>

                <h4 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-3">Approach</h4>
                <p className="text-stone-700 leading-relaxed">
                  Analyzed workflow and knowledge gaps to develop structured reference materials. Applied documentation management and structured problem-solving to simplify complex operational processes.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-3">AI & Human Workflow</h4>
                <p className="text-stone-700 leading-relaxed mb-6">
                  Utilized RAG (Retrieval-Augmented Generation) systems to structure reference materials and improve information retrieval consistency. Contributed to AI-driven process improvements that directly integrated into the team's daily human workflow.
                </p>

                <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-3">Measurable Result</h4>
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-stone-500 font-medium">CSAT Score</div>
                    <ArrowRight className="text-stone-300" size={16} />
                    <div className="text-emerald-700 font-bold">80-85% → 90-95%</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-stone-500 font-medium">Avg Handling Time</div>
                    <ArrowRight className="text-stone-300" size={16} />
                    <div className="text-emerald-700 font-bold">10-15 min → 3-5 min</div>
                  </div>
                  <p className="text-xs text-stone-500 mt-4 italic">
                    * Improvements realized during the Q4 peak season.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
