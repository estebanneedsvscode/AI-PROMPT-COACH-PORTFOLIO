import React from 'react';
import { MessageSquare, AlertTriangle, Lightbulb } from 'lucide-react';

export default function Diagnosis() {
  return (
    <section id="diagnosis" className="py-24 bg-stone-50 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/50 text-stone-600 text-xs font-bold uppercase tracking-widest">
          Simulated Coaching Demonstration
        </div>
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Prompt Diagnosis Case Study</h2>
        <p className="text-lg text-stone-600 mb-12 max-w-2xl">
          A workshop participant asks an AI tool to create an employee training activity. Here is how I would diagnose and intervene.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Before */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
              <h3 className="text-sm uppercase tracking-widest font-semibold text-stone-400 mb-4 flex items-center gap-2">
                <MessageSquare size={16} /> Initial Prompt
              </h3>
              <p className="text-stone-800 font-medium italic">
                "Create a fun employee training activity about leadership."
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm opacity-75">
              <h3 className="text-sm uppercase tracking-widest font-semibold text-stone-400 mb-4">Result (AI Output)</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                "Title: The Leadership Raft. Gather your team in a room and tell them they are stranded on an island. Have them build a raft out of office supplies to learn how to lead each other..."
              </p>
            </div>
          </div>

          {/* Diagnosis & Intervention */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200">
              <h3 className="text-sm uppercase tracking-widest font-semibold text-amber-800 mb-4 flex items-center gap-2">
                <AlertTriangle size={16} /> Coach Diagnosis
              </h3>
              <ul className="list-disc list-inside text-amber-900 text-sm space-y-2">
                <li><strong>Unclear objective:</strong> What specific leadership skill is being trained?</li>
                <li><strong>Vague audience:</strong> Are these new managers, executives, or line workers?</li>
                <li><strong>Missing constraints:</strong> Is this virtual or in-person? How much time?</li>
                <li><strong>Generic result:</strong> Leads to clichéd, impractical team-building exercises.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-stone-800 text-stone-50">
              <h3 className="text-sm uppercase tracking-widest font-semibold text-stone-400 mb-4 flex items-center gap-2">
                <Lightbulb size={16} /> Coaching Intervention
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-4">
                Instead of replacing the prompt, I ask: <br/><br/>
                <em className="text-stone-100">"What specific leadership skill do your managers struggle with most right now? And will they be doing this over Zoom or in a conference room?"</em>
              </p>
              <p className="text-stone-400 text-xs border-t border-stone-700 pt-4">
                The goal is to demonstrate diagnostic reasoning, teaching the participant to add context and constraints automatically next time.
              </p>
            </div>
          </div>
        </div>

        {/* After */}
        <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm">
          <h3 className="text-sm uppercase tracking-widest font-semibold text-stone-400 mb-4">Improved Prompt Structure</h3>
          <p className="text-stone-800 font-medium italic mb-6">
            "Act as an instructional designer. Create a 15-minute virtual training activity for newly promoted middle managers. The objective is to practice giving constructive feedback to underperforming peers. Provide a scenario, instructions for breakout rooms, and a debriefing guide. Do not use generic team-building games."
          </p>
          <div className="pl-6 border-l-2 border-emerald-500">
            <p className="text-stone-600 text-sm leading-relaxed">
              <strong>Improved Output:</strong> A structured, scenario-based roleplay exercise specifically tailored for Zoom breakout rooms, focused on feedback delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
