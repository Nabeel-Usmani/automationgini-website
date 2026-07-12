export default function TrustBar() {
  const stats = [
    { value: '116', unit: 'leads', label: 'from a single grid search — Miami metro, plumbing niche' },
    { value: '4', unit: 'products', label: 'voice agents, websites, chatbots, and text-back — one platform' },
    { value: '<15', unit: 'sec', label: 'from clicking demo to a live AI call ringing' },
  ]

  return (
    <section className="bg-white border-b border-navy/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-start gap-4">
              <span className="font-display font-semibold text-3xl text-navy shrink-0">
                {s.value}
                <span className="text-base font-body font-medium text-blue ml-1">{s.unit}</span>
              </span>
              <span className="font-body text-sm text-slate leading-snug pt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
