import Reveal from './Reveal'
import AnimatedCounter from './AnimatedCounter'

export default function TrustBar() {
  const stats = [
    { value: '116', unit: 'leads', label: 'From a single grid search — Miami metro, plumbing niche' },
    { value: '4', unit: 'products', label: 'Voice agents, websites, chatbots, and apps — one platform' },
    { value: '<15', unit: 'sec', label: 'From clicking demo to a live AI call ringing' },
  ]

  return (
    <section className="bg-white border-t border-navy/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 md:py-16">
        <div className="grid sm:grid-cols-3 gap-10 sm:gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className={`${i > 0 ? 'sm:border-l sm:border-navy/10 sm:pl-8' : ''}`}>
              <div className="flex items-baseline gap-1.5">
                <AnimatedCounter
                  value={s.value}
                  className="font-display font-semibold text-6xl md:text-7xl text-navy tracking-tight tabular-nums"
                />
                <span className="font-mono text-sm font-medium text-slate">{s.unit}</span>
              </div>
              <p className="font-body text-[15px] text-slate leading-snug mt-3 max-w-[220px]">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
