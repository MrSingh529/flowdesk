export default function Footer() {
  return (
    <footer className="bg-[#060B18] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 bg-[#6366F1] border border-white/20 flex items-center justify-center rotate-3">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4h12M2 8h8M2 12h10" stroke="#C8FF00" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-display font-700 text-white text-lg">
                Flow<span className="text-[#6366F1]">Desk</span>
              </span>
            </div>
            <p className="text-white/30 text-sm font-mono">
              Automate the boring. Focus on the real work.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-white/30 hover:text-white/70 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="mailto:hello@flowdesk.in"
              className="text-white/30 hover:text-[#6366F1] text-sm transition-colors font-mono"
            >
              hello@flowdesk.in
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/15 text-xs font-mono">
            © {new Date().getFullYear()} FlowDesk. Made with ♥ for India.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#C8FF00] rounded-full animate-pulse" />
            <span className="text-white/20 text-xs font-mono">Early Access — Now Open</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
