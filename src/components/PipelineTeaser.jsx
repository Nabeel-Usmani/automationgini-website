import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const stages = [
  { n: '01', title: 'Discover', desc: 'Grid-search a city past the 20-result wall.' },
  { n: '02', title: 'Enrich', desc: 'Website health, phone recovery, real reviews.' },
  { n: '03', title: 'Engage', desc: 'A live AI voice call or chatbot, on demand.' },
  { n: '04', title: 'Convert', desc: 'One click builds the paid deliverable.' },
]

export default function PipelineTeaser() {
  return (
    <section className="bg-ice py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-14 md:mb-16">
          <p className="font-mono text-xs tracking-widest text-blue uppercase mb-3">The pipeline</p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-navy tracking-tight leading-[1.05]">
            One flow, from a search to a paid client.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stages.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="h-full bg-white border border-navy/10 rounded-2xl p-6"
              >
                <span className="font-display font-semibold text-2xl text-amber tabular-nums">{s.n}</span>
                <h3 className="font-display font-semibold text-lg text-navy tracking-tight mt-2 mb-1.5">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-slate leading-relaxed">{s.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280} className="mt-10">
          <Link
            to="/features"
            className="inline-flex items-center gap-1.5 font-body font-semibold text-blue hover:text-navy transition-colors"
          >
            See the full platform &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
