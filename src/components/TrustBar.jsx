export default function TrustBar() {
  const stats = [
    { value: '116', unit: 'leads', label: 'From a single grid search — Miami metro, plumbing niche' },
    { value: '4', unit: 'products', label: 'Voice agents, websites, chatbots, and apps — one platform' },
    { value: '<15', unit: 'sec', label: 'From clicking demo to a live AI call ringing' },
  ]

  return (
    <section className="bg-white border-t border-navy/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid sm:grid-cols-3 gap-10 sm:gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className={`${i > 0 ? 'sm:border-l sm:border-navy/10 sm:pl-8' : ''}`}>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-semibold text-6xl md:text-7xl text-navy tracking-tight">
                  {s.value}
                </span>
                <span className="font-mono text-sm font-medium text-blue">{s.unit}</span>
              </div>
              <p className="font-body text-[15px] text-slate leading-snug mt-3 max-w-[220px]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
