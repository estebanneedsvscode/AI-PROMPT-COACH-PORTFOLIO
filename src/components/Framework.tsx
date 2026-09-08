import React from 'react';

const steps = [
  {
    number: "01",
    title: "Clarify the Goal",
    desc: "What is the participant trying to accomplish? Establishing the core objective before touching the prompt."
  },
  {
    number: "02",
    title: "Inspect the Prompt",
    desc: "What context, constraints, audience, instructions, and desired output are missing from the input?"
  },
  {
    number: "03",
    title: "Diagnose the Output",
    desc: "What specifically went wrong? Pinpointing hallucinations, generic tone, or format failures."
  },
  {
    number: "04",
    title: "Identify the Cause",
    desc: "Is the problem caused by missing context, ambiguous instructions, or insufficient constraints?"
  },
  {
    number: "05",
    title: "Iterate (Don't Regenerate)",
    desc: "Guide the participant to improve the prompt structure rather than blindly regenerating."
  },
  {
    number: "06",
    title: "Evaluate",
    desc: "Check accuracy, completeness, relevance, assumptions, bias, and alignment with the task."
  },
  {
    number: "07",
    title: "Teach the Pattern",
    desc: "Explain the improvement so the participant can repeat it independently in future tasks."
  }
];

export default function Framework() {
  return (
    <section id="framework" className="py-24 bg-stone-900 text-stone-50 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Prompt Coaching Framework</h2>
        <p className="text-lg text-stone-400 mb-16 max-w-2xl">
          The coach teaches the participant how to improve their interaction with AI, instead of doing the participant's work for them.
        </p>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-stone-800">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-stone-900 bg-stone-800 text-stone-300 font-serif font-bold z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                {step.number}
              </div>
              
              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-stone-800/50 border border-stone-800">
                <h3 className="text-xl font-semibold mb-2 text-stone-100">{step.title}</h3>
                <p className="text-stone-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
