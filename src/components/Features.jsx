import Reveal from './Reveal'

const features = [
  {
    title: 'Lead Discovery',
    desc: 'Search by niche and city, queue multiple cities at once, and get real verified contact data — not scraped guesses.',
    tags: ['Google Maps grid search', 'Phone recovery', 'Country & city aware'],
  },
  {
    title: 'AI Voice Demos',
    desc: 'A real outbound call, personalized to that business, in English or a live Arabic/English bilingual router.',
    tags: ['Live outbound calls', 'Bilingual routing', 'Built from real site content'],
  },
  {
    title: 'Website Builder',
    desc: 'A genuine multi-page site generated from their real reviews and niche — preview it live before anyone pays.',
    tags: ['Free live preview', 'HTML or React', 'ZIP export'],
  },
  {
    title: 'AI Chatbot',
    desc: 'A widget that actually talks to visitors, remembers the conversation, and never invents pricing it can\u2019t verify.',
    tags: ['Real conversation memory', 'Works on any site', 'Editable live'],
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-16">
          <p className="font-mono text-xs tracking-widest text-blue uppercase mb-3">What&rsquo;s inside</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-navy tracking-tight">
            Every tool a lead-gen agency actually needs, in one place.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 80}
              className="group border border-navy/10 rounded-2xl p-8 hover:border-blue/30 hover:shadow-lg hover:shadow-blue/[0.06] transition-all"
            >
              <h3 className="font-display font-semibold text-xl text-navy mb-3">{f.title}</h3>
              <p className="font-body text-[15px] text-slate leading-relaxed mb-6">{f.desc}</p>
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
