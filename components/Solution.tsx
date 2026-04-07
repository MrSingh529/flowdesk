"use client";
import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    label: "You type it",
    desc: "Send WhatsApp alert to vendor if PO not confirmed in 2 days",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#6366F1" strokeWidth="2"/>
        <path d="M7 9h10M7 13h6" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    isInput: true,
  },
  {
    number: "02",
    label: "AI builds it",
    desc: "FlowDesk AI reads your instruction and builds the full workflow — triggers, conditions, actions, all wired up.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z" stroke="#C8FF00" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    isInput: false,
  },
  {
    number: "03",
    label: "It runs itself",
    desc: "The workflow is live. It runs automatically. You don't think about it again.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#818CF8" strokeWidth="2"/>
        <path d="M9 12l2 2 4-4" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    isInput: false,
  },
];

export default function Solution() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="solution" className="py-20 md:py-28 bg-[#0F172A] relative overflow-hidden" ref={sectionRef}>
      {/* BG decoration */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <div className="reveal mb-4 flex items-center gap-3">
          <div className="w-8 h-px bg-[#C8FF00]" />
          <span className="text-[#C8FF00] text-sm font-mono font-medium uppercase tracking-widest">The Solution</span>
        </div>

        <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-5xl font-800 text-white leading-tight mb-4 max-w-2xl">
          Just describe it.{" "}
          <span className="text-[#6366F1]">FlowDesk</span> does the rest.
        </h2>

        <p className="reveal reveal-delay-2 text-white/50 text-lg mb-16 max-w-xl">
          No forms. No drag-and-drop builders. No reading documentation. Just plain English — or Hindi.
        </p>

        {/* 3-step flow */}
        <div className="grid md:grid-cols-3 gap-0 relative">
          {/* Connecting arrows */}
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px">
            <div className="h-full bg-gradient-to-r from-[#6366F1] to-[#6366F1] relative">
              {/* Arrow heads positioned between cards */}
            </div>
          </div>

          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector arrow between steps */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute right-0 top-10 translate-x-1/2 z-20 items-center justify-center">
                  <div className="w-8 h-8 bg-[#0F172A] border-2 border-[#6366F1] flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              )}

              <div
                className={`reveal reveal-delay-${i + 1} m-2 md:m-3 p-6 md:p-7 ${
                  i === 0
                    ? "bg-[#1E293B] border-2 border-[#6366F1]"
                    : i === 1
                    ? "bg-[#6366F1] border-2 border-[#6366F1]"
                    : "bg-[#1E293B] border-2 border-[#6366F1]/40"
                }`}
                style={i === 1 ? { boxShadow: "0 0 40px rgba(99,102,241,0.3)" } : {}}
              >
                {/* Step number */}
                <div className={`font-mono text-xs font-bold mb-4 ${i === 1 ? "text-white/60" : "text-[#6366F1]/60"}`}>
                  Step {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4">{step.icon}</div>

                {/* Label */}
                <h3 className={`font-display text-xl font-700 mb-3 ${i === 1 ? "text-white" : "text-white"}`}>
                  {step.label}
                </h3>

                {/* Content */}
                {step.isInput ? (
                  <div className="bg-[#0F172A] border border-[#6366F1]/40 p-3 font-mono text-sm text-[#A5B4FC] leading-relaxed">
                    &ldquo;{step.desc}&rdquo;
                    <span className="cursor-blink text-[#6366F1] ml-0.5">|</span>
                  </div>
                ) : (
                  <p className={`text-sm leading-relaxed ${i === 1 ? "text-white/80" : "text-white/50"}`}>
                    {step.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Language support callout */}
        <div className="reveal reveal-delay-4 mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/5 border border-white/10 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C8FF00] brutal-border flex items-center justify-center shrink-0">
              <span className="text-[#0F172A] font-bold text-sm">अ</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Works in Hindi too</p>
              <p className="text-white/40 text-xs font-mono">&ldquo;वेंडर को WhatsApp भेजो अगर PO confirm नहीं हुआ 2 दिन में&rdquo;</p>
            </div>
          </div>
          <div className="sm:ml-auto text-[#C8FF00] text-xs font-mono font-semibold px-3 py-1 border border-[#C8FF00]/40 bg-[#C8FF00]/10">
            Bilingual Support
          </div>
        </div>
      </div>
    </section>
  );
}
