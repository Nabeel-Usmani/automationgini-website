import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroVideo from '../assets/hero-video.mp4'
import PillButton from './PillButton'

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
    <section id="top" className="relative bg-white overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-20 md:pt-44 md:pb-28"
      >
        <motion.div variants={item} className="inline-flex items-center gap-2 bg-ice rounded-full px-4 py-1.5 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
          <span className="font-mono text-xs tracking-wide text-navy/60 uppercase">AI-powered lead generation</span>
        </motion.div>

        <div className="relative rounded-3xl overflow-hidden bg-ice">
          <video autoPlay loop muted playsInline className="w-full h-[280px] md:h-[420px] object-cover">
            <source src={heroVideo} type="video/mp4" />
          </video>
          <span className="absolute top-5 left-5 font-mono text-[11px] uppercase tracking-wider bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-navy/70">
            Live product demo
          </span>
        </div>

        <motion.h1 variants={item} className="mt-14 font-display font-medium text-[2.75rem] leading-[1.05] md:text-[5rem] md:leading-[1.02] text-navy tracking-tight max-w-4xl">
          Find the leads. Show them the <span className="font-flourish italic font-normal">AI</span>. Close the deal.
        </motion.h1>

        <motion.div variants={item} className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="font-body text-lg text-slate max-w-xl leading-relaxed">
            Discover real local businesses, place a live AI voice call or drop them into a chat &mdash;
            right from the lead card. See it work before you ever pitch it.
          </p>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <PillButton to="/signup">Sign up free</PillButton>
            <PillButton to="/login" variant="outline">Sign in</PillButton>
          </div>
        </motion.div>

        {/* Signature live product card */}
        <motion.div variants={item} className="mt-20 md:mt-28 max-w-2xl md:ml-auto">
          <div className="relative bg-white border border-navy/10 rounded-2xl shadow-xl shadow-black/[0.04] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-navy/[0.06] bg-ice/60">
              <div>
                <p className="font-body font-semibold text-navy text-sm">Sunrise Plumbing Co.</p>
                <p className="font-mono text-[11px] text-slate/70">Miami, FL &middot; Plumber</p>
              </div>
              <div className="flex items-center gap-1.5 bg-navy/5 border border-navy/10 rounded-full px-2.5 py-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber" />
                </span>
                <span className="font-mono text-[10px] font-medium text-navy/70 tracking-wide uppercase">Live demo</span>
              </div>
            </div>

            <div className="px-5 py-5 border-b border-navy/[0.06]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center text-navy/70 text-sm">
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
                    className="w-[3px] bg-navy/40 rounded-full animate-wave"
                    style={{ height: `${h}px`, animationDelay: `${i * 0.08}s` }}
                  />
                ))}
              </div>
            </div>

            <div className="px-5 py-5 space-y-2.5">
              <div className="max-w-[80%] bg-ice border border-navy/[0.06] rounded-xl rounded-bl-sm px-3.5 py-2.5">
                <p className="font-body text-[13px] text-navy/80">
                  Hi! I can check availability or answer questions about our plumbing services &mdash; what do you need?
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
                    <span className={`w-1.5 h-1.5 rounded-full ${i <= 2 ? 'bg-navy' : 'bg-navy/15'}`} />
                    <span className={`font-mono text-[10px] tracking-wide uppercase ${i <= 2 ? 'text-navy/70' : 'text-navy/30'}`}>
                      {step}
                    </span>
                  </div>
                  {i < 3 && <span className="flex-1 h-px bg-navy/[0.08] mx-2" />}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 justify-end">
            <p className="font-mono text-[10px] text-slate/60 uppercase tracking-wide">Time to first call</p>
            <p className="font-display font-semibold text-navy">&lt;15 sec</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
