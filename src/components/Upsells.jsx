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
    <section id="addons" className="bg-navy py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs tracking-widest text-amber uppercase mb-3">Beyond the demo</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-white tracking-tight">
            Every lead can become real, recurring revenue.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl p-8 border ${
                p.featured
                  ? 'bg-white/[0.06] border-amber/30'
                  : 'bg-white/[0.03] border-white/10'
              }`}
            >
              {p.featured && (
                <span className="inline-block font-mono text-[10px] tracking-wide text-amber bg-amber/10 rounded-full px-2.5 py-1 mb-4">
                  MOST BUILT
                </span>
              )}
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-display font-semibold text-3xl text-white">{p.price}</span>
                <span className="font-mono text-sm text-white/40">{p.period}</span>
              </div>
              <h3 className="font-body font-semibold text-white mb-2">{p.title}</h3>
              <p className="font-body text-sm text-white/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
