import Reveal from './Reveal'

const points = [
  {
    title: 'Role-based access',
    desc: 'Admins see everything across the team. Agents see only their own leads.',
  },
  {
    title: 'Real usage enforcement',
    desc: 'Plan caps on leads, demos, and builds — enforced live, not just displayed on a dashboard.',
  },
  {
    title: 'Multi-tenant from day one',
    desc: 'Every customer\u2019s data is fully isolated. Built to resell, not just for internal use.',
  },
  {
    title: 'Country-aware, not just US',
    desc: 'Leads, filters, and search scope dynamically to wherever your team actually operates.',
  },
]

export default function TeamSection() {
  return (
    <section className="bg-white py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-20 items-start">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-blue uppercase mb-3">Built for agencies</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-navy tracking-tight leading-[1.02] mb-6">
            A platform your whole team runs on.
          </h2>
          <p className="font-body text-lg text-slate leading-relaxed">
            Every account is a real multi-tenant workspace — invite agents, set their access,
            and watch usage in one place, without spreadsheets stitched together after the fact.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 60} className="bg-ice/60 rounded-2xl p-7 border border-navy/[0.06] hover:bg-ice transition-colors">
              <h3 className="font-body font-semibold text-navy text-lg mb-2.5">{p.title}</h3>
              <p className="font-body text-sm text-slate leading-relaxed">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
