const stages = [
  {
    n: '01',
    title: 'Discover',
    desc: 'Grid-based search scans multiple sub-areas of a city automatically — well past the ~20-result wall a single search hits.',
  },
  {
    n: '02',
    title: 'Enrich',
    desc: 'Website health checks, phone-number recovery, and real review data pulled in automatically for every lead.',
  },
  {
    n: '03',
    title: 'Engage',
    desc: 'Place a live AI voice demo call or drop a lead straight into a personalized chatbot — on demand, from the lead card.',
  },
  {
    n: '04',
    title: 'Convert',
    desc: 'One click builds the real deliverable: a production voice agent, a live website, or a chatbot subscription — paid and shipped.',
  },
]

export default function Pipeline() {
  return (
    <section id="pipeline" className="bg-ice py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs tracking-widest text-blue uppercase mb-3">The pipeline</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-navy tracking-tight">
            One flow, from a Google Maps search to a paid client.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-px bg-navy/10 rounded-2xl overflow-hidden">
          {stages.map((s) => (
            <div key={s.n} className="bg-ice p-7 md:p-8">
              <span className="font-mono text-xs text-blue/70">{s.n}</span>
              <h3 className="font-display font-semibold text-xl text-navy mt-3 mb-3">{s.title}</h3>
              <p className="font-body text-sm text-slate leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
