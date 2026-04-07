"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060B18]/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#6366F1] brutal-border flex items-center justify-center rotate-3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h8M2 12h10" stroke="#C8FF00" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="font-display font-700 text-white text-xl tracking-tight">
            Flow<span className="text-[#6366F1]">Desk</span>
          </span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Problem", href: "#problem" },
            { label: "Solution", href: "#solution" },
            { label: "Features", href: "#features" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/60 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#waitlist"
          className="bg-[#6366F1] text-white text-sm font-semibold px-4 py-2 brutal-border brutal-shadow btn-primary"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
