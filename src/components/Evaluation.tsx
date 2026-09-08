import React from 'react';
import { Search, ShieldAlert, FileWarning, HelpCircle } from 'lucide-react';

const evaluations = [
  {
    icon: <ShieldAlert size={20} />,
    title: "Confidentiality Concern",
    issue: "The output incorporates specific employee performance data from the prompt.",
    why: "Uploading PII (Personally Identifiable Information) to public models violates privacy policies.",
    action: "Coach the participant to redact names and use generic placeholders before prompting."
  },
  {
    icon: <FileWarning size={20} />,
    title: "Unsupported Assumptions",
    issue: "The AI assumed the company has a formalized 'Performance Review Board'.",
    why: "Generative AI fills gaps with plausible sounding but often incorrect corporate norms.",
    action: "Teach the participant to verify claims and explicitly state organizational structures in the prompt."
  },
  {
    icon: <HelpCircle size={20} />,
    title: "Missing Context & Relevance",
    issue: "The generated policy uses California labor law for a UK-based team.",
    why: "Without geographic constraints, the AI defaults to its most prevalent training data.",
    action: "Prompt the user to always specify jurisdiction, audience, and governing policies."
  }
];

export default function Evaluation() {
  return (
    <section id="evaluation" className="py-24 bg-white px-6 border-t border-stone-100">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/50 text-stone-600 text-xs font-bold uppercase tracking-widest">
          Simulated Coaching Demonstration
        </div>
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">AI Output Evaluation</h2>
        <p className="text-lg text-stone-600 mb-12 max-w-2xl">
          AI output should never be automatically treated as correct. Critical evaluation is essential to prevent bias, privacy breaches, and factual errors.
        </p>

        <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200">
          <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-4">
            <Search className="text-stone-400" />
            <h3 className="text-lg font-medium text-stone-800">Critical Review Annotations</h3>
          </div>
          
          <div className="space-y-8">
            {evaluations.map((evalItem, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  {evalItem.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-stone-900 mb-2">{evalItem.title}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 rounded-xl bg-white border border-stone-200">
                      <span className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">What is wrong</span>
                      <p className="text-sm text-stone-700">{evalItem.issue}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-stone-200">
                      <span className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">Why it matters</span>
                      <p className="text-sm text-stone-700">{evalItem.why}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-stone-200">
                      <span className="block text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">Next Step</span>
                      <p className="text-sm text-stone-700">{evalItem.action}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
