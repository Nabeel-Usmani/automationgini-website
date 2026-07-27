import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionIntro from './SectionIntro'

const stages = [
  { n: '01', title: 'Discover', desc: 'Grid-search a city past the 20-result wall.' },
  { n: '02', title: 'Enrich', desc: 'Website health, phone recovery, real reviews.' },
  { n: '03', title: 'Engage', desc: 'A live AI voice call or chatbot, on demand.' },
  { n: '04', title: 'Convert', desc: 'One click builds the paid deliverable.' },
]

export default function PipelineTeaser() {
  return (
    <section className="bg-white py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro eyebrow="The pipeline" cta="See the full platform" ctaTo="/features">
          One flow, from a search to a paid client.
        </SectionIntro>

        <Reveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/[0.08] border border-navy/[0.08] mb-16 md:mb-20">
          {stages.map((s, i) => (
            <motion.div
              key={s.n}
              whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
              className="bg-white p-7"
            >
              <span className="font-mono text-xs text-navy/30">{s.n}</span>
              <h3 className="font-display font-semibold text-lg text-navy tracking-tight mt-3 mb-1.5">
                {s.title}
              </h3>
              <p className="font-body text-sm text-slate leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
