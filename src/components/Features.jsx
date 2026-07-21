import Reveal from './Reveal'

const features = [
  {
    title: 'Lead Discovery',
    desc: 'Search by niche and city, queue multiple cities at once, and get real verified contact data — not scraped guesses.',
    tags: ['Google Maps grid search', 'Phone recovery', 'Country & city aware'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: 'AI Voice Demos',
    desc: 'A real outbound call, personalized to that business, in English or a live bilingual router across 9 languages.',
    tags: ['Live outbound calls', 'Bilingual routing', 'Built from real site content'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: 'Website Builder',
    desc: 'A genuine multi-page site generated from their real reviews and niche — preview it live before anyone pays.',
    tags: ['Free live preview', 'HTML or React', 'ZIP export'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'AI Chatbot',
    desc: 'A widget that actually talks to visitors, remembers the conversation, and never invents pricing it can\u2019t verify.',
    tags: ['Real conversation memory', 'Works on any site', 'Editable live'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-20 md:mb-24">
          <p className="font-mono text-xs tracking-widest text-blue uppercase mb-3">What&rsquo;s inside</p>
          <h2 className="font-display font-semibold text-4xl md:text-6xl text-navy tracking-tight leading-[1.02]">
            Every tool a lead-gen agency actually needs.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 80}
              className="group relative border border-navy/10 rounded-3xl p-9 md:p-10 hover:border-blue/30 hover:shadow-xl hover:shadow-blue/[0.06] transition-all overflow-hidden"
            >
              <div className="w-14 h-14 rounded-2xl bg-navy/[0.04] text-navy flex items-center justify-center mb-7 group-hover:bg-blue/10 group-hover:text-blue transition-colors">
                {f.icon}
              </div>
              <h3 className="font-display font-semibold text-2xl text-navy mb-3 tracking-tight">{f.title}</h3>
              <p className="font-body text-[16px] text-slate leading-relaxed mb-7 max-w-md">{f.desc}</p>
              <div className="flex flex-wrap gap-2">
                {f.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-blue bg-blue/[0.07] rounded-full px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
