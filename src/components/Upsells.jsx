import Reveal from './Reveal'

const products = [
  {
    price: '$50',
    period: 'one-time',
    title: 'Voice Agent Build',
    desc: 'A permanent, production-ready inbound receptionist — built on the client\u2019s own account, no ongoing cost to you.',
  },
  {
    price: '$75\u2013150',
    period: 'one-time',
    title: 'Website Build',
    desc: 'The same site they previewed for free, delivered for real — static HTML or a live React build.',
    featured: true,
  },
  {
    price: '$29',
    period: '/month',
    title: 'AI Chatbot',
    desc: '100 conversations included, works on the site you build them or one they already have.',
  },
]

export default function Upsells() {
  return (
    <section id="addons" className="bg-ice py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-20 md:mb-24">
          <p className="font-mono text-xs tracking-widest text-amber uppercase mb-3">Beyond the demo</p>
          <h2 className="font-display font-semibold text-4xl md:text-6xl text-navy tracking-tight leading-[1.02]">
            Every lead can become recurring revenue.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 80}
              className={`rounded-3xl p-9 border transition-all ${
                p.featured
                  ? 'bg-white border-amber/30 shadow-xl shadow-amber/[0.1] md:-translate-y-3'
                  : 'bg-white/60 border-navy/[0.08] hover:bg-white hover:border-navy/15'
              }`}
            >
              {p.featured && (
                <span className="inline-block font-mono text-[10px] tracking-wide text-amber bg-amber/10 rounded-full px-2.5 py-1 mb-5">
                  MOST BUILT
                </span>
              )}
              <div className="flex items-baseline gap-1.5 mb-5">
                <span className="font-display font-semibold text-5xl text-navy tracking-tight">{p.price}</span>
                <span className="font-mono text-sm text-slate/60">{p.period}</span>
              </div>
              <h3 className="font-body font-semibold text-navy text-lg mb-2">{p.title}</h3>
              <p className="font-body text-sm text-slate leading-relaxed">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
