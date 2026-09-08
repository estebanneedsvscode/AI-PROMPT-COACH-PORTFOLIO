import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const competencies = [
  {
    category: "Instructional Design → AI Coaching",
    evidence: "Experience designing learner-centered materials and translating complex concepts into accessible learning experiences supports a coaching approach that helps participants improve their own work."
  },
  {
    category: "Customer Support → Learner Empathy",
    evidence: "Managed 100-150 complex customer and logistics concerns daily at Amazon Operations, demonstrating the patience, active listening, and problem-solving needed for live Zoom breakout rooms."
  },
  {
    category: "Process Improvement → Prompt Iteration",
    evidence: "Analyzed workflow gaps and contributed to AI-driven process improvements that increased CSAT to 90–95% and reduced AHT by 60%, showing structured diagnostic capabilities."
  },
  {
    category: "Knowledge Management → Tool Agnosticism",
    evidence: "Developed structured reference materials utilizing RAG systems and applied documentation management, transferring effectively to guiding users across varying AI platforms and contexts."
  }
];

export default function Fit() {
  return (
    <section id="fit" className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Why I'm a Strong Fit</h2>
        <p className="text-lg text-stone-600 mb-12 max-w-2xl">
          An intersection of instructional design, user support, and structured problem solving—directly aligned with helping participants achieve better outcomes in live workshop environments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competencies.map((comp, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-stone-200 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle2 className="text-stone-800 shrink-0 mt-1" size={24} />
                <h3 className="text-lg font-semibold text-stone-900 leading-tight">
                  {comp.category}
                </h3>
              </div>
              <p className="text-stone-600 leading-relaxed pl-10">
                {comp.evidence}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
