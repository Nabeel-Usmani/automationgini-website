import Reveal from './Reveal'
import PillButton from './PillButton'

// Afternow's recurring section pattern: a small mono eyebrow label in a slim
// left column, a large statement in the wide column, hairline rules above and
// below, and an optional pill link at the far right.
export default function SectionIntro({ eyebrow, children, cta, ctaTo, className = '' }) {
  return (
    <Reveal className={`border-t border-navy/[0.08] ${className}`}>
      <div className="grid md:grid-cols-[160px_1fr] gap-6 md:gap-10 py-10 md:py-14">
        <p className="font-mono text-xs tracking-widest text-navy/40 uppercase">{eyebrow}</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="font-display font-medium text-2xl md:text-4xl text-navy tracking-tight leading-[1.15] max-w-3xl">
            {children}
          </h2>
          {cta && (
            <div className="shrink-0">
              <PillButton to={ctaTo}>{cta}</PillButton>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  )
}
