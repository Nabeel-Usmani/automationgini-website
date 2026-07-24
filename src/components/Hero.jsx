import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroVideo from '../assets/hero-video.mp4'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="top" className="relative bg-navy-deep overflow-hidden">
      {/* Full-bleed video background */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40">
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark wash so the video reads as backdrop texture, not the focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/85 to-navy-deep" />
      </div>

      {/* Glowing gradient mesh accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 right-[-8%] w-[34rem] h-[34rem] rounded-full bg-amber/20 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 -left-32 w-[28rem] h-[28rem] rounded-full bg-blue/25 blur-[110px]"
        />
      </div>

      {/* Smooth hand-off into the light section below */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-white" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-28 md:pt-52 md:pb-40"
      >
        <div className="max-w-4xl">
          <motion.div variants={item} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
            <span className="font-mono text-xs tracking-wide text-white/70">AI-powered lead generation</span>
          </motion.div>

          <motion.h1 variants={item} className="font-display font-semibold text-[3rem] leading-[1.02] md:text-[5.5rem] md:leading-[0.98] text-white tracking-tight">
            Find the leads.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-light to-amber">
              Show them the AI.
            </span>
            <br />
            Close the deal.
          </motion.h1>

          <motion.p variants={item} className="mt-8 font-body text-xl text-white/70 max-w-2xl leading-relaxed">
            Discover real local businesses, place a live AI voice call or drop them into a chat —
            right from the lead card. See it work before you ever pitch it.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/signup"
              className="font-body font-semibold text-navy-deep bg-amber hover:bg-amber/90 px-8 py-4 rounded-lg transition-all text-lg hover:scale-[1.03] active:scale-[0.98]"
            >
              Sign up free
            </Link>
            <Link
              to="/login"
              className="font-body font-semibold text-white/85 hover:text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-lg transition-all text-lg hover:scale-[1.03] active:scale-[0.98]"
            >
              Sign in
            </Link>
          </motion.div>

          <motion.p variants={item} className="mt-8 font-mono text-xs text-white/40">
            No card required &middot; Built for lead-gen agencies
          </motion.p>
        </div>

        {/* Signature live product card - now a floating panel below the headline, editorial layout */}
        <motion.div variants={item} className="mt-20 md:mt-28 max-w-2xl md:ml-auto">
          <div className="relative bg-white border border-navy/10 rounded-2xl shadow-2xl shadow-black/30 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-navy/[0.06] bg-ice/50">
              <div>
                <p className="font-body font-semibold text-navy text-sm">Sunrise Plumbing Co.</p>
                <p className="font-mono text-[11px] text-slate/70">Miami, FL &middot; Plumber</p>
              </div>
              <div className="flex items-center gap-1.5 bg-amber/10 border border-amber/20 rounded-full px-2.5 py-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber" />
                </span>
                <span className="font-mono text-[10px] font-medium text-amber tracking-wide">LIVE DEMO</span>
              </div>
            </div>

            <div className="px-5 py-5 border-b border-navy/[0.06]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-blue/10 flex items-center justify-center text-blue text-sm">
                  &#9742;
                </div>
                <div>
                  <p className="font-body text-sm text-navy/90">AI voice call in progress</p>
                  <p className="font-mono text-[11px] text-slate/60">00:14</p>
                </div>
              </div>
              <div className="flex items-end gap-[3px] h-8 pl-11">
                {[6, 14, 22, 10, 18, 26, 12, 20, 8, 16, 24, 10].map((h, i) => (
                  <span
                    key={i}
                    className="w-[3px] bg-blue/60 rounded-full animate-wave"
                    style={{ height: `${h}px`, animationDelay: `${i * 0.08}s` }}
                  />
                ))}
              </div>
            </div>

            <div className="px-5 py-5 space-y-2.5">
              <div className="max-w-[80%] bg-ice border border-navy/[0.06] rounded-xl rounded-bl-sm px-3.5 py-2.5">
                <p className="font-body text-[13px] text-navy/80">
                  Hi! I can check availability or answer questions about our plumbing services — what do you need?
                </p>
              </div>
              <div className="flex items-center gap-1 pl-1">
                <span className="w-1.5 h-1.5 bg-navy/20 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-navy/20 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-navy/20 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>

            <div className="flex items-center px-5 py-4 bg-ice/60 border-t border-navy/[0.06]">
              {['Discover', 'Enrich', 'Engage', 'Convert'].map((step, i) => (
                <div key={step} className="flex items-center flex-1 last:flex-none">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${i <= 2 ? 'bg-amber' : 'bg-navy/15'}`} />
                    <span className={`font-mono text-[10px] tracking-wide ${i <= 2 ? 'text-navy/70' : 'text-navy/30'}`}>
                      {step}
                    </span>
                  </div>
                  {i < 3 && <span className="flex-1 h-px bg-navy/[0.08] mx-2" />}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 justify-end">
            <p className="font-mono text-[10px] text-white/40 uppercase tracking-wide">Time to first call</p>
            <p className="font-display font-semibold text-white">&lt;15 sec</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
