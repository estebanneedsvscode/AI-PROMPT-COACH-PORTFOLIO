import React from 'react';
import { Target, Search, Scale, Shield, FileCheck, PhoneForwarded, Users } from 'lucide-react';

const principles = [
  {
    icon: <Target size={24} />,
    title: "Coach, don't take over",
    desc: "Help participants develop their own ability to work with AI. The goal is capability, not dependency."
  },
  {
    icon: <Search size={24} />,
    title: "Diagnose before rewriting",
    desc: "Understand exactly why an output failed before rushing to change the prompt."
  },
  {
    icon: <Scale size={24} />,
    title: "Human judgment remains essential",
    desc: "AI output should be evaluated critically rather than blindly accepted."
  },
  {
    icon: <Shield size={24} />,
    title: "Protect sensitive information",
    desc: "Avoid unnecessary exposure of confidential, proprietary, or personal information."
  },
  {
    icon: <FileCheck size={24} />,
    title: "Verify important claims",
    desc: "AI-generated information can be incomplete or inaccurate. Always verify facts."
  },
  {
    icon: <PhoneForwarded size={24} />,
    title: "Know when to escalate",
    desc: "Recognize questions that fall outside the coach's role and route them appropriately."
  },
  {
    icon: <Users size={24} />,
    title: "Meet the learner where they are",
    desc: "Adjust explanations based on the participant's level of technical and AI experience."
  }
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-stone-900 text-stone-50 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Coaching Philosophy & Responsible AI</h2>
        <p className="text-lg text-stone-400 mb-16 max-w-2xl">
          A professional coaching approach designed to build confidence, ensure safety, and foster critical thinking in live workshop environments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {principles.map((principle, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="shrink-0 text-stone-500 mt-1">
                {principle.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-100 mb-2">{principle.title}</h3>
                <p className="text-stone-400 leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
