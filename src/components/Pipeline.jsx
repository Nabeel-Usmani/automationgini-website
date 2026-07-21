import Reveal from './Reveal'

const stages = [
  {
    n: '01',
    title: 'Discover',
    desc: 'Grid-based search scans multiple sub-areas of a city automatically — well past the ~20-result wall a single search hits.',
    image: 'https://images.pexels.com/photos/11169211/pexels-photo-11169211.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    n: '02',
    title: 'Enrich',
    desc: 'Website health checks, phone-number recovery, and real review data pulled in automatically for every lead.',
    image: 'https://images.pexels.com/photos/8413176/pexels-photo-8413176.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    n: '03',
    title: 'Engage',
    desc: 'Place a live AI voice demo call or drop a lead straight into a personalized chatbot — on demand, from the lead card.',
    image: 'https://images.pexels.com/photos/8101357/pexels-photo-8101357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    n: '04',
    title: 'Convert',
    desc: 'One click builds the real deliverable: a production voice agent, a live website, or a chatbot subscription — paid and shipped.',
    image: 'https://images.pexels.com/photos/12903031/pexels-photo-12903031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
]

export default function Pipeline() {
  return (
    <section id="pipeline" className="bg-ice py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-20 md:mb-24">
          <p className="font-mono text-xs tracking-widest text-blue uppercase mb-3">The pipeline</p>
          <h2 className="font-display font-semibold text-4xl md:text-6xl text-navy tracking-tight leading-[1.02]">
            One flow, from a search to a paid client.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {stages.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 80}
              className="group relative bg-white border border-navy/10 rounded-3xl overflow-hidden hover:border-amber/40 hover:shadow-xl hover:shadow-amber/[0.08] transition-all"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-navy/10 to-transparent" />
                <span className="absolute top-5 left-7 font-display font-semibold text-3xl text-white/70 tabular-nums">
                  {s.n}
                </span>
                <h3 className="absolute bottom-5 left-7 font-display font-semibold text-2xl text-white tracking-tight">
                  {s.title}
                </h3>
              </div>
              <div className="p-7 md:p-9">
                <p className="font-body text-[16px] text-slate leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
