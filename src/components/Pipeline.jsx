import Reveal from './Reveal'

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
    <section id="pipeline" className="bg-ice py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-20 md:mb-28">
          <p className="font-mono text-xs tracking-widest text-blue uppercase mb-3">The pipeline</p>
          <h2 className="font-display font-semibold text-4xl md:text-6xl text-navy tracking-tight leading-[1.02]">
            One flow, from a search to a paid client.
          </h2>
        </Reveal>

        <div className="space-y-0">
          {stages.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="group grid md:grid-cols-[auto_1fr_auto] items-start md:items-center gap-4 md:gap-10 py-8 md:py-10 border-t border-navy/10 last:border-b">
                <span className="font-display font-semibold text-5xl md:text-7xl text-navy/15 group-hover:text-amber/40 transition-colors tabular-nums">
                  {s.n}
                </span>
                <h3 className="font-display font-semibold text-2xl md:text-3xl text-navy tracking-tight">
                  {s.title}
                </h3>
                <p className="font-body text-slate leading-relaxed md:max-w-sm md:text-right">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
