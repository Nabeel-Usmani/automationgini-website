import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const features = [
  { title: 'Lead Discovery', desc: 'Grid-search a city past the 20-result wall, with real verified contact data.' },
  { title: 'AI Voice Demos', desc: 'A live outbound call, personalized to that business, in English or 9 languages.' },
  { title: 'Website Builder', desc: 'A real multi-page site generated from their reviews — preview it free.' },
  { title: 'AI Chatbot', desc: 'A widget that talks to visitors and remembers the conversation.' },
]

export default function FeaturesTeaser() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-14 md:mb-16">
          <p className="font-mono text-xs tracking-widest text-blue uppercase mb-3">What&rsquo;s inside</p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-navy tracking-tight leading-[1.05]">
            Every tool a lead-gen agency actually needs.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="h-full bg-ice/60 border border-navy/[0.06] rounded-2xl p-6"
              >
                <h3 className="font-display font-semibold text-lg text-navy tracking-tight mb-1.5">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-slate leading-relaxed">{f.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280} className="mt-10">
          <Link
            to="/features"
            className="inline-flex items-center gap-1.5 font-body font-semibold text-blue hover:text-navy transition-colors"
          >
            Explore every feature &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
