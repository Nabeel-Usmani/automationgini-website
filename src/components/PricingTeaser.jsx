import { Link } from 'react-router-dom'
import Reveal from './Reveal'

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
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-14 md:mb-16">
          <p className="font-mono text-xs tracking-widest text-amber uppercase mb-3">Pricing</p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-navy tracking-tight leading-[1.05]">
            Start free. Pay only for what you build.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 70}
              className={`rounded-2xl p-7 border transition-all ${
                p.featured
                  ? 'bg-ice border-amber/30 shadow-lg shadow-amber/[0.1]'
                  : 'bg-ice/50 border-navy/[0.08]'
              }`}
            >
              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="font-display font-semibold text-3xl text-navy tracking-tight">{p.price}</span>
                <span className="font-mono text-xs text-slate/60">{p.period}</span>
              </div>
              <h3 className="font-body font-semibold text-navy text-sm mb-2">{p.name}</h3>
              <p className="font-body text-sm text-slate leading-relaxed">{p.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280} className="mt-10">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-1.5 font-body font-semibold text-blue hover:text-navy transition-colors"
          >
            See full pricing &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
