"use client";
import { useState, useRef, useEffect } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setErrorMsg("Network error. Please check your connection.");
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="py-20 md:py-28 bg-[#0F172A] relative overflow-hidden" ref={sectionRef}>
      {/* BG decorations */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#6366F1]/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#C8FF00]/5 rounded-full blur-3xl" />

      {/* Brutalist frame lines */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#6366F1]/40 hidden md:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#6366F1]/40 hidden md:block" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="reveal inline-flex items-center gap-2 bg-[#C8FF00]/10 border border-[#C8FF00]/30 px-3 py-1.5 mb-8">
          <span className="w-2 h-2 bg-[#C8FF00] rounded-full animate-pulse" />
          <span className="text-[#C8FF00] text-xs font-mono font-medium uppercase tracking-wider">Early Access Open</span>
        </div>

        <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-5xl lg:text-6xl font-800 text-white leading-tight mb-4">
          Be the first to{" "}
          <span className="text-[#6366F1]">automate</span>
          <br />your workflows.
        </h2>

        <p className="reveal reveal-delay-2 text-white/50 text-lg mb-4 max-w-xl mx-auto leading-relaxed">
          Early access members get{" "}
          <span className="text-[#C8FF00] font-semibold">1 month free</span>{" "}
          + lifetime{" "}
          <span className="text-[#C8FF00] font-semibold">20% discount.</span>
        </p>

        <p className="reveal reveal-delay-2 text-white/30 text-sm mb-10">
        Join the teams on waitlist. We&apos;ll reach out within 48 hours.
        </p>

        {/* Form */}
        <div className="reveal reveal-delay-3 max-w-xl mx-auto">
          {status === "success" ? (
            <SuccessState />
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={status === "loading"}
                  className="w-full bg-white/10 text-white placeholder-white/30 border-2 border-white/20 focus:border-[#6366F1] px-4 py-4 text-base transition-colors font-mono disabled:opacity-60"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading" || !email}
                className="btn-primary bg-[#6366F1] text-white font-semibold px-6 py-4 brutal-border brutal-shadow flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="20 16" />
                    </svg>
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-3 text-[#FF4D4D] text-sm font-mono">{errorMsg}</p>
          )}

          {status !== "success" && (
            <p className="mt-4 text-white/20 text-xs">
              No spam, ever. We&apos;ll only reach out about FlowDesk.
            </p>
          )}
        </div>

        {/* Trust badges */}
        <div className="reveal reveal-delay-4 mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/30 text-xs">
          {[
            { text: "No credit card required" },
            { text: "Built in India" },
            { text: "Setup in minutes" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessState() {
  return (
    <div className="bg-[#1E293B] border-2 border-[#C8FF00] p-8 text-center" style={{ boxShadow: "6px 6px 0px #C8FF00" }}>
      <div className="w-14 h-14 bg-[#C8FF00] mx-auto mb-4 flex items-center justify-center brutal-border">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 12l5 5L19 7" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3 className="font-display text-2xl font-700 text-white mb-2">You&apos;re on the list!</h3>
      <p className="text-white/60 text-sm leading-relaxed">
        We&apos;ll reach out within{" "}
        <span className="text-[#C8FF00] font-semibold">48 hours</span>{" "}
        with your early access details. Check your inbox (and spam, just in case).
      </p>
    </div>
  );
}
