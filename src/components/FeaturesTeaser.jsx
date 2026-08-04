import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionIntro from './SectionIntro'

const features = [
  { title: 'Lead Discovery', desc: 'Grid-search a city past the 20-result wall, with real verified contact data.' },
  { title: 'AI Voice Demos', desc: 'A live outbound call, personalized to that business, in English or 9 languages.' },
  { title: 'Website Builder', desc: 'A real multi-page site generated from their reviews — preview it free.' },
  { title: 'AI Chatbot', desc: 'A widget that talks to visitors and remembers the conversation.' },
  { title: 'Messenger', desc: 'One shared inbox for every client conversation, across channels.' },
  { title: 'Email Automation', desc: 'Auto-enrolled outreach with a live demo built into every email.' },
  { title: 'Social Media Automation', desc: 'On-brand posts generated and scheduled automatically.' },
]

export default function FeaturesTeaser() {
  return (
    <section className="bg-white py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro eyebrow="What's inside" cta="Explore every feature" ctaTo="/features">
          Every tool a lead-gen agency actually needs.
        </SectionIntro>

        <Reveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/[0.08] border border-navy/[0.08] mb-16 md:mb-20">
          {features.map((f) => (
            <motion.div
              key={f.title}
              whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
              className="bg-white p-7"
            >
              <h3 className="font-display font-semibold text-lg text-navy tracking-tight mb-1.5">
                {f.title}
              </h3>
              <p className="font-body text-sm text-slate leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
