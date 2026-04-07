"use client";
import { useEffect, useRef } from "react";

const problems = [
  {
    title: "Still doing this manually?",
    body: "Vendor follow-up emails, attendance reports, inventory alerts — all done by hand, every single day. Hours of your team's time, gone.",
    accent: "#FF4D4D",
    tag: "Time sink",
  },
  {
    title: "Zapier is too complex",
    body: "Triggers, webhooks, APIs — non-technical ops teams can't touch it. And if something breaks, good luck debugging it at 9pm.",
    accent: "#6366F1",
    tag: "Built for devs, not operations",
  },
  {
    title: "WhatsApp is your operations tool",
    body: "Your team runs on WhatsApp groups. But nothing integrates with it properly for Indian workflows — not Zapier, not Monday, not anyone.",
    accent: "#C8FF00",
    tag: "Integration gap",
  },
];

export default function Problem() {
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
    <section id="problem" className="py-20 md:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <div className="reveal mb-4 flex items-center gap-3">
          <div className="w-8 h-px bg-[#6366F1]" />
          <span className="text-[#6366F1] text-sm font-mono font-medium uppercase tracking-widest">The Problem</span>
        </div>

        <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-5xl font-800 text-[#0F172A] leading-tight mb-4 max-w-2xl">
          Many operations teams are{" "}
          <span className="relative">
            <span>stuck in 2015.</span>
            <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" preserveAspectRatio="none">
              <path d="M0 3 Q50 0 100 3 Q150 6 200 3" stroke="#FF4D4D" strokeWidth="2.5" fill="none"/>
            </svg>
          </span>
        </h2>

        <p className="reveal reveal-delay-2 text-[#64748B] text-lg mb-14 max-w-xl">
          The tools exist. The willingness is there. But nothing was built for how India actually works.
        </p>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group bg-white brutal-border hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform duration-200`}
              style={{ boxShadow: `4px 4px 0px ${problem.accent}` }}
            >
              {/* Top accent bar */}
              <div className="h-1.5 w-full" style={{ background: problem.accent }} />

              <div className="p-6 md:p-7">
                {/* Tag */}
                <div
                  className="inline-block text-xs font-mono font-semibold px-2 py-0.5 mb-4"
                  style={{ background: `${problem.accent}18`, color: problem.accent, border: `1px solid ${problem.accent}40` }}
                >
                  {problem.tag}
                </div>

                <div className="text-3xl mb-4"></div>

                <h3 className="font-display text-xl md:text-2xl font-700 text-[#0F172A] mb-3 leading-tight">
                  {problem.title}
                </h3>

                <p className="text-[#64748B] text-sm md:text-base leading-relaxed">{problem.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Separator with marquee */}
        <div className="mt-20 overflow-hidden">
          <div className="marquee-track text-[#0F172A]/08 font-display font-800 text-5xl md:text-7xl uppercase tracking-tighter select-none whitespace-nowrap">
            {Array(6).fill("Manual work is broken • ").join("")}
          </div>
        </div>
      </div>
    </section>
  );
}
