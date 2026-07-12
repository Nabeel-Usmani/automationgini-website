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
    <section className="bg-ice py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
        <div>
          <p className="font-mono text-xs tracking-widest text-blue uppercase mb-3">Built for agencies</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-navy tracking-tight mb-5">
            A platform your whole team runs on, not just you.
          </h2>
          <p className="font-body text-slate leading-relaxed">
            Every account is a real multi-tenant workspace — invite agents, set their access,
            and watch usage in one place, without spreadsheets stitched together after the fact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {points.map((p) => (
            <div key={p.title} className="bg-white rounded-xl p-6 border border-navy/[0.06]">
              <h3 className="font-body font-semibold text-navy mb-2">{p.title}</h3>
              <p className="font-body text-sm text-slate leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
