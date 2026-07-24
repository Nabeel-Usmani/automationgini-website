import Nav from '../components/Nav'
import PageHero from '../components/PageHero'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import TeamSection from '../components/TeamSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

const values = [
  {
    title: 'Show, don’t pitch',
    desc: 'Every product is demoable on a real lead before anyone signs anything — a live voice call or a working preview, not a slide deck.',
  },
  {
    title: 'Real data, not guesses',
    desc: 'Leads come from verified sources, not scraped approximations. If we can’t confirm it, we don’t show it as fact.',
  },
  {
    title: 'Built for resale',
    desc: 'Multi-tenant, role-based access, and usage enforcement from day one — because agencies need to run clients on this, not just themselves.',
  },
]

export default function About() {
  return (
    <PageTransition className="font-body">
      <Nav />
      <PageHero
        eyebrow="About AutomationGini"
        title="We build the tools agencies actually pitch with."
        subtitle="AutomationGini exists because finding a lead and proving value to them shouldn't be two separate, disconnected jobs."
      />

      <section className="bg-white pb-28 md:pb-40">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-16 md:mb-20">
            <p className="font-body text-lg text-slate leading-relaxed">
              Most lead-gen tools stop at a spreadsheet of names and phone numbers. Most demo
              tools are disconnected from where the leads actually came from. AutomationGini puts
              discovery, live AI demos, and the production builds that follow all in one pipeline —
              so an agency can go from a search result to a paid client without switching platforms
              in between.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="bg-ice/60 rounded-2xl p-7 border border-navy/[0.06]">
                <h3 className="font-body font-semibold text-navy text-lg mb-2.5">{v.title}</h3>
                <p className="font-body text-sm text-slate leading-relaxed">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
      <CTASection />
      <Footer />
    </PageTransition>
  )
}
