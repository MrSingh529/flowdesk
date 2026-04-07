"use client";
import { useEffect, useRef } from "react";

const problems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2v8l4 4" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="10" r="8" stroke="#6366F1" strokeWidth="2"/>
      </svg>
    ),
    title: "Hours lost to manual follow-ups",
    desc: "Vendor reminders, attendance pings, PO checks — your team does it by hand, every day, on repeat.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="5" width="16" height="12" rx="2" stroke="#6366F1" strokeWidth="2"/>
        <path d="M6 5V4a4 4 0 018 0v1" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 11v2" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="1" fill="#6366F1"/>
      </svg>
    ),
    title: "Automation tools built for developers",
    desc: "Zapier, Make, n8n — powerful on paper, unusable in practice for non-technical operations and admin teams.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 13l-3-3 3-3" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 10h6" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "WhatsApp has no real integrations",
    desc: "Your whole team runs on WhatsApp — but no automation platform connects to it cleanly for Indian workflows.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 4h12v8H4z" stroke="#6366F1" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 16h16M8 12v4M12 12v4" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Everything is siloed",
    desc: "Tally, Zoho, Sheets, Gmail — data lives everywhere, but nothing talks to each other without a developer.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#6366F1" strokeWidth="2"/>
        <path d="M10 6v4l3 2" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 2.5A8 8 0 002.5 6" stroke="#C8FF00" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Ops managers are stuck firefighting",
    desc: "Instead of improving processes, your operations lead is stuck chasing the same tasks every morning.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L2 7l8 5 8-5-8-5z" stroke="#6366F1" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 13l8 5 8-5M2 10l8 5 8-5" stroke="#6366F1" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: "No tool understands Indian context",
    desc: "Hindi instructions, Indian ERPs, local holidays, GST workflows — western tools weren't built for any of this.",
  },
];

export default function ProblemSection() {
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
    <section className="py-20 md:py-28 bg-[#0F172A] relative overflow-hidden" ref={sectionRef}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(99,102,241,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,.06)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Label */}
        <div className="reveal mb-4 flex items-center gap-3">
          <div className="w-8 h-px bg-[#6366F1]" />
          <span className="text-[#6366F1] text-sm font-mono font-medium uppercase tracking-widest">
            Problems We&apos;re Solving
          </span>
        </div>

        {/* Heading */}
        <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-5xl font-800 text-white leading-tight mb-4 max-w-2xl">
          We know exactly what&apos;s <span className="text-[#C8FF00]">slowing you down.</span>
        </h2>
        <p className="reveal reveal-delay-2 text-white/50 text-lg mb-14 max-w-xl">
          FlowDesk was built by talking to 20+ operations teams across India. These are the six things we heard over and over.
        </p>

        {/* Problems grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} group bg-[#1E293B] border border-white/10 hover:border-[#6366F1]/60 p-6 transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px]`}
              style={{ boxShadow: "0 0 0 0 transparent", transition: "border-color .2s, transform .2s, box-shadow .2s" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "4px 4px 0px #6366F1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 0 transparent";
              }}
            >
              <div className="w-10 h-10 bg-[#6366F1]/10 border border-[#6366F1]/25 flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <div className="font-mono text-[10px] font-semibold text-[#6366F1]/40 mb-2 uppercase tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-base md:text-lg font-700 text-white mb-2 leading-snug">{p.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal reveal-delay-4 mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#6366F1]/10 border border-[#6366F1]/30 p-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#C8FF00] flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-white/70 text-sm">
              FlowDesk solves all six. In plain English. In minutes.
            </p>
          </div>
          <a
            href="#waitlist"
            className="sm:ml-auto text-[#C8FF00] font-semibold text-sm border border-[#C8FF00]/40 px-4 py-2 hover:bg-[#C8FF00]/10 transition-colors whitespace-nowrap"
          >
            Join the Waitlist →
          </a>
        </div>
      </div>
    </section>
  );
}