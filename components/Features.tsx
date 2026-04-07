"use client";
import { useEffect, useRef } from "react";

const features = [
  {
    title: "Natural Language Setup",
    desc: "No forms, no drag-drop. Just describe your workflow in plain English or Hindi - and FlowDesk builds it.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="3" stroke="#6366F1" strokeWidth="2"/>
        <path d="M7 11h14M7 15h8" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="22" cy="22" r="4" fill="#C8FF00"/>
        <path d="M20.5 22l1 1 2-2" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    badge: "Core",
    accentBg: "bg-[#6366F1]/8",
    accentBorder: "border-[#6366F1]/20",
  },
  {
    title: "WhatsApp Native",
    desc: "Alerts, approvals, and follow-ups via WhatsApp - where your team already is. No new app to install.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C8.477 3 4 7.477 4 13c0 1.88.524 3.637 1.438 5.13L4 25l7.07-1.41A10.957 10.957 0 0014 24c5.523 0 10-4.477 10-10S19.523 3 14 3z" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 11.5c0-.5.3-1.5 1.5-1.5s2 1.5 2 2-1 2-1 3 1.5 3 3.5 3c1.5 0 2.5-.5 2.5-.5" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    badge: "India-first",
    accentBg: "bg-green-500/8",
    accentBorder: "border-green-500/20",
  },
  {
    title: "Operations Templates",
    desc: "5 ready-made workflows: vendor follow-up, daily reports, inventory alerts, PO approvals, attendance summary.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="10" height="10" rx="1.5" stroke="#818CF8" strokeWidth="2"/>
        <rect x="15" y="3" width="10" height="10" rx="1.5" stroke="#818CF8" strokeWidth="2"/>
        <rect x="3" y="15" width="10" height="10" rx="1.5" stroke="#818CF8" strokeWidth="2"/>
        <rect x="15" y="15" width="10" height="10" rx="1.5" stroke="#C8FF00" strokeWidth="2"/>
        <path d="M18 20l1.5 1.5L22 18" stroke="#C8FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    badge: "Quick Start",
    accentBg: "bg-[#818CF8]/8",
    accentBorder: "border-[#818CF8]/20",
  },
  {
    title: "Works with your tools",
    desc: "Google Sheets, Gmail, WhatsApp, Tally, Zoho — connects to what you already use. No rip-and-replace.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="7" cy="14" r="3.5" stroke="#6366F1" strokeWidth="2"/>
        <circle cx="21" cy="7" r="3.5" stroke="#6366F1" strokeWidth="2"/>
        <circle cx="21" cy="21" r="3.5" stroke="#6366F1" strokeWidth="2"/>
        <path d="M10.3 12.3l7.4-4M10.3 15.7l7.4 4" stroke="#6366F1" strokeWidth="1.5"/>
      </svg>
    ),
    badge: "Integrations",
    accentBg: "bg-[#6366F1]/8",
    accentBorder: "border-[#6366F1]/20",
  },
];

export default function Features() {
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
    <section id="features" className="py-20 md:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <div className="reveal mb-4 flex items-center gap-3">
          <div className="w-8 h-px bg-[#6366F1]" />
          <span className="text-[#6366F1] text-sm font-mono font-medium uppercase tracking-widest">Features</span>
        </div>

        <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-5xl font-800 text-[#0F172A] leading-tight mb-4 max-w-2xl">
          Everything your ops team needs.
          <br />
          <span className="text-[#6366F1]">Nothing they don&apos;t.</span>
        </h2>

        <p className="reveal reveal-delay-2 text-[#64748B] text-lg mb-14 max-w-xl">
          Purpose-built for Indian ops workflows. Not a western tool with a desi coat of paint.
        </p>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} group p-6 md:p-8 border-2 border-[#0F172A] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 bg-white`}
              style={{ boxShadow: i % 2 === 0 ? "4px 4px 0px #6366F1" : "4px 4px 0px #0F172A" }}
            >
              {/* Icon + badge row */}
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 ${feature.accentBg} border ${feature.accentBorder} flex items-center justify-center`}>
                  {feature.icon}
                </div>
                <span className="text-xs font-mono font-semibold text-[#6366F1] bg-[#6366F1]/8 border border-[#6366F1]/20 px-2 py-1">
                  {feature.badge}
                </span>
              </div>

              <h3 className="font-display text-xl md:text-2xl font-700 text-[#0F172A] mb-2 leading-tight">
                {feature.title}
              </h3>
              <p className="text-[#64748B] text-sm md:text-base leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Integration logos strip */}
        <div className="reveal reveal-delay-4 mt-14 p-6 border-2 border-[#0F172A]/10 bg-[#F8FAFC]">
          <p className="text-[#94A3B8] text-xs font-mono uppercase tracking-wider mb-4">Connects with</p>
          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            {[
              { name: "Google Sheets", color: "#34A853" },
              { name: "Gmail", color: "#EA4335" },
              { name: "WhatsApp", color: "#25D366" },
              { name: "Tally", color: "#6366F1" },
              { name: "Zoho", color: "#E42527" },
              { name: "+ more soon", color: "#94A3B8" },
            ].map((tool) => (
              <div key={tool.name} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: tool.color }} />
                <span className="text-sm font-medium text-[#334155]">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
