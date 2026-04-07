"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.classList.add("visible");
  }, []);

  return (
    <section className="relative min-h-screen bg-[#060B18] overflow-hidden flex flex-col justify-center">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Floating abstract shapes */}
      <div className="absolute top-24 right-8 md:right-24 w-32 h-32 md:w-48 md:h-48 bg-[#6366F1]/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-32 left-4 md:left-16 w-24 h-24 md:w-32 md:h-32 bg-[#C8FF00]/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-[#6366F1]/30 blur-xl" style={{ animationDelay: "1s" }} />

      {/* Decorative brutalist elements */}
      <div className="absolute top-28 right-12 md:right-40 w-3 h-3 bg-[#C8FF00] rotate-45 hidden md:block" />
      <div className="absolute top-40 right-20 md:right-52 w-2 h-2 bg-[#6366F1]" />
      <div className="absolute bottom-40 left-16 md:left-32 w-4 h-4 border-2 border-[#6366F1] rotate-12 hidden md:block" />
      <div className="absolute top-1/3 left-4 md:left-10 w-2 h-16 bg-[#6366F1]/30 hidden md:block" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div
          ref={heroRef}
          className="reveal"
          style={{ transition: "opacity 0.8s ease, transform 0.8s ease" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#6366F1]/15 border border-[#6366F1]/40 px-3 py-1.5 mb-8">
            <span className="w-2 h-2 bg-[#C8FF00] rounded-full animate-pulse" />
            <span className="text-[#A5B4FC] text-xs font-mono font-medium tracking-wider uppercase">
              AI-Powered Workflow Automation
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-800 text-white leading-[1.05] tracking-tight mb-6 max-w-4xl">
            Describe your{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#6366F1]">workflow.</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#6366F1]/20 -z-0" />
            </span>
            <br />
            FlowDesk&apos;ll{" "}
            <span className="relative">
              <span className="text-[#C8FF00]">automate it.</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            FlowDesk turns plain English{" "}
            <span className="text-white/80 font-medium">(or Hindi)</span>{" "}
            instructions into automated workflows - no coding, no Zapier complexity.{" "}
            <span className="text-[#A5B4FC]">Built for Indian ops teams.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#waitlist"
              className="btn-primary inline-flex items-center justify-center gap-2 bg-[#6366F1] text-white font-semibold px-8 py-4 brutal-border brutal-shadow text-base"
            >
              Join Waitlist
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#solution"
              className="btn-secondary inline-flex items-center justify-center gap-2 bg-transparent text-white font-semibold px-8 py-4 border-2 border-white/30 hover:border-[#6366F1] text-base transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2"/>
                <path d="M6 6.5l4 1.5-4 1.5" fill="currentColor"/>
              </svg>
              See How It Works
            </a>
          </div>

          {/* Trust text */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["#6366F1", "#818CF8", "#A5B4FC", "#C8FF00"].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#060B18] flex items-center justify-center text-xs font-bold text-[#060B18]"
                  style={{ background: color }}
                >
                  {["R", "P", "S", "A"][i]}
                </div>
              ))}
            </div>
            <p className="text-white/50 text-sm">
              <span className="text-white font-semibold">Limited early access</span> Join the teams on waitlist
            </p>
          </div>
        </div>

        {/* Hero Visual — Terminal/Command mockup */}
        <div className="mt-16 md:mt-20 reveal reveal-delay-2" style={{ transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s" }}>
          <HeroVisual />
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-[#0F172A] brutal-border brutal-shadow-indigo overflow-hidden">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#1E293B]">
          <div className="w-3 h-3 rounded-full bg-[#FF4D4D]" />
          <div className="w-3 h-3 rounded-full bg-[#C8FF00]" />
          <div className="w-3 h-3 rounded-full bg-[#6366F1]" />
          <span className="ml-2 text-white/30 text-xs font-mono">flowdesk — workflow builder</span>
        </div>

        <div className="p-5 md:p-6">
          {/* Input line */}
          <div className="flex items-start gap-3 mb-6">
            <span className="text-[#C8FF00] font-mono text-sm mt-0.5">›</span>
            <div>
              <p className="text-white/50 text-xs font-mono mb-1 uppercase tracking-wider">Your instruction</p>
              <p className="text-white font-mono text-sm md:text-base leading-relaxed">
                Send WhatsApp alert to vendor if PO not confirmed in 2 days
                <span className="cursor-blink text-[#6366F1] ml-0.5">|</span>
              </p>
            </div>
          </div>

          {/* Processing */}
          <div className="flex items-center gap-2 mb-6 text-[#6366F1]">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="20 16" />
            </svg>
            <span className="text-xs font-mono text-[#6366F1]">FlowDesk AI is building your workflow...</span>
          </div>

          {/* Output steps */}
          <div className="space-y-2">
            {[
              { icon: "✓", label: "Trigger", desc: "Monitor PO status every 24h", color: "#C8FF00" },
              { icon: "✓", label: "Condition", desc: "If PO unconfirmed → proceed", color: "#6366F1" },
              { icon: "✓", label: "Action", desc: "WhatsApp message sent to vendor", color: "#818CF8" },
              { icon: "✓", label: "Log", desc: "Entry added to Sheets tracker", color: "#A5B4FC" },
            ].map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/5 px-3 py-2 border border-white/10"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <span className="text-xs font-bold" style={{ color: step.color }}>{step.icon}</span>
                <span className="text-[#A5B4FC] font-mono text-xs w-20 shrink-0">{step.label}</span>
                <span className="text-white/60 text-xs font-mono">{step.desc}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/30 px-3 py-2">
            <span className="w-2 h-2 bg-[#C8FF00] rounded-full" />
            <span className="text-[#C8FF00] font-mono text-xs font-semibold">Workflow active — running automatically</span>
          </div>
        </div>
      </div>
    </div>
  );
}
