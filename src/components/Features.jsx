import Reveal from './Reveal'

const features = [
  {
    id: 'lead-discovery',
    title: 'Lead Discovery',
    desc: 'Search by niche and city, queue multiple cities at once, and get real verified contact data — not scraped guesses.',
    tags: ['Google Maps grid search', 'Phone recovery', 'Country & city aware'],
    image: 'https://images.pexels.com/photos/22775411/pexels-photo-22775411.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'ai-voice-demos',
    title: 'AI Voice Demos',
    desc: 'A real outbound call, personalized to that business, in English or a live bilingual router across 9 languages.',
    tags: ['Live outbound calls', 'Bilingual routing', 'Built from real site content'],
    image: 'https://images.pexels.com/photos/8682773/pexels-photo-8682773.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'website-builder',
    title: 'Website Builder',
    desc: 'A genuine multi-page site generated from their real reviews and niche — preview it live before anyone pays.',
    tags: ['Free live preview', 'HTML or React', 'ZIP export'],
    image: 'https://images.pexels.com/photos/26694146/pexels-photo-26694146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot',
    desc: 'A widget that actually talks to visitors, remembers the conversation, and never invents pricing it can’t verify.',
    tags: ['Real conversation memory', 'Works on any site', 'Editable live'],
    image: 'https://images.pexels.com/photos/7342998/pexels-photo-7342998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
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
              id={f.id}
              className="group relative border border-navy/10 rounded-3xl overflow-hidden hover:border-blue/30 hover:shadow-xl hover:shadow-blue/[0.06] transition-all scroll-mt-28"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
                <h3 className="absolute bottom-5 left-7 font-display font-semibold text-2xl text-white tracking-tight">
                  {f.title}
                </h3>
              </div>
              <div className="p-7 md:p-9">
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
