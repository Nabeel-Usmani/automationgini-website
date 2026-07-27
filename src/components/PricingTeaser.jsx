import Reveal from './Reveal'
import SectionIntro from './SectionIntro'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    desc: '100 leads, 5 voice demos, 5 chatbot demos. No card required.',
  },
  {
    name: 'Website Build',
    price: '$75–150',
    period: 'one-time',
    desc: 'The site they previewed for free, delivered for real.',
    featured: true,
  },
  {
    name: 'AI Chatbot',
    price: '$29',
    period: '/month',
    desc: '100 conversations included, on any site you build or already have.',
  },
]

export default function PricingTeaser() {
  return (
    <section className="bg-white py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro eyebrow="Pricing" cta="See full pricing" ctaTo="/pricing">
          Start free. Pay only for what you build.
        </SectionIntro>

        <Reveal className="grid sm:grid-cols-3 gap-px bg-navy/[0.08] border border-navy/[0.08] mb-16 md:mb-20">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`p-7 ${p.featured ? 'bg-ice' : 'bg-white'}`}
            >
              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="font-display font-semibold text-3xl text-navy tracking-tight">{p.price}</span>
                <span className="font-mono text-xs text-slate/60">{p.period}</span>
              </div>
              <h3 className="font-body font-semibold text-navy text-sm mb-2">{p.name}</h3>
              <p className="font-body text-sm text-slate leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
