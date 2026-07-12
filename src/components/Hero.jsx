export default function Hero() {
  return (
    <section id="top" className="relative bg-navy overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-40 w-[560px] h-[560px] rounded-full bg-blue/20 blur-[120px]" />
        <div className="absolute bottom-0 -left-20 w-[420px] h-[420px] rounded-full bg-amber/10 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
            <span className="font-mono text-xs tracking-wide text-white/70">AI-powered lead generation</span>
          </div>

          <h1 className="font-display font-semibold text-[2.5rem] leading-[1.08] md:text-6xl md:leading-[1.05] text-white tracking-tight">
            Find the leads.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-light to-amber">
              Show them the AI.
            </span>
            <br />
            Close the deal.
          </h1>

          <p className="mt-6 font-body text-lg text-white/70 max-w-xl leading-relaxed">
            Discover real local businesses, place a live AI voice call or drop them into a chat —
            right from the lead card. See it work before you ever pitch it.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="font-body font-semibold text-navy bg-white hover:bg-ice px-7 py-3.5 rounded-lg transition-colors"
            >
              Get a demo
            </a>
            <a
              href="#pipeline"
              className="font-body font-semibold text-white/90 hover:text-white border border-white/20 hover:border-white/40 px-7 py-3.5 rounded-lg transition-colors"
            >
              See how it works
            </a>
          </div>

          <p className="mt-8 font-mono text-xs text-white/40">
            No card required to preview &middot; Built for lead-gen agencies
          </p>
        </div>

        {/* Right: signature live product card */}
        <div className="relative">
          <div className="relative bg-navy-deep border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
            {/* Card header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div>
                <p className="font-body font-semibold text-white text-sm">Sunrise Plumbing Co.</p>
                <p className="font-mono text-[11px] text-white/40">Miami, FL &middot; Plumber</p>
              </div>
              <div className="flex items-center gap-1.5 bg-amber/10 border border-amber/20 rounded-full px-2.5 py-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber" />
                </span>
                <span className="font-mono text-[10px] font-medium text-amber tracking-wide">LIVE DEMO</span>
              </div>
            </div>

            {/* Voice call visualization */}
            <div className="px-5 py-5 border-b border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-blue/20 flex items-center justify-center text-blue-light text-sm">
                  &#9742;
                </div>
                <div>
                  <p className="font-body text-sm text-white/90">AI voice call in progress</p>
                  <p className="font-mono text-[11px] text-white/40">00:14</p>
                </div>
              </div>
              <div className="flex items-end gap-[3px] h-8 pl-11">
                {[6, 14, 22, 10, 18, 26, 12, 20, 8, 16, 24, 10].map((h, i) => (
                  <span
                    key={i}
                    className="w-[3px] bg-blue-light/70 rounded-full animate-wave"
                    style={{ height: `${h}px`, animationDelay: `${i * 0.08}s` }}
                  />
                ))}
              </div>
            </div>

            {/* Chat snippet */}
            <div className="px-5 py-5 space-y-2.5">
              <div className="max-w-[80%] bg-white/5 border border-white/10 rounded-xl rounded-bl-sm px-3.5 py-2.5">
                <p className="font-body text-[13px] text-white/80">
                  Hi! I can check availability or answer questions about our plumbing services — what do you need?
                </p>
              </div>
              <div className="flex items-center gap-1 pl-1">
                <span className="w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>

            {/* Pipeline stepper */}
            <div className="flex items-center px-5 py-4 bg-white/[0.03] border-t border-white/10">
              {['Discover', 'Enrich', 'Engage', 'Convert'].map((step, i) => (
                <div key={step} className="flex items-center flex-1 last:flex-none">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${i <= 2 ? 'bg-amber' : 'bg-white/20'}`}
                    />
                    <span
                      className={`font-mono text-[10px] tracking-wide ${
                        i <= 2 ? 'text-white/70' : 'text-white/30'
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                  {i < 3 && <span className="flex-1 h-px bg-white/10 mx-2" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
