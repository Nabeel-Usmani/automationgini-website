import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import PageHero from '../components/PageHero'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import Upsells from '../components/Upsells'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

const freeIncludes = [
  '100 leads',
  '5 voice demos',
  '5 chatbot demos',
  'No card required',
]

export default function Pricing() {
  return (
    <PageTransition className="font-body">
      <Nav />
      <PageHero
        eyebrow="Pricing"
        title="Start free. Pay only for what you build."
        subtitle="Discovery and demos are free to try. You only pay when a lead is ready to become a real, delivered product."
      />

      <section className="bg-white pb-10">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Reveal className="rounded-3xl border border-navy/10 bg-ice/60 p-9 md:p-12 text-center">
            <p className="font-mono text-xs tracking-widest text-blue uppercase mb-3">Free plan</p>
            <div className="flex items-baseline justify-center gap-1.5 mb-6">
              <span className="font-display font-semibold text-6xl text-navy tracking-tight">$0</span>
              <span className="font-mono text-sm text-slate/60">/month</span>
            </div>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-9">
              {freeIncludes.map((item) => (
                <li key={item} className="font-body text-sm text-slate flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/signup"
              className="inline-block font-body font-semibold text-white bg-navy hover:bg-blue px-8 py-3.5 rounded-lg transition-colors"
            >
              Sign up free
            </Link>
          </Reveal>
        </div>
      </section>

      <Upsells />

      <section className="bg-ice py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-navy tracking-tight leading-[1.05] mb-4">
              Running a full team or higher volume?
            </h2>
            <p className="font-body text-lg text-slate leading-relaxed mb-8 max-w-xl mx-auto">
              Trial, Starter, Professional, and custom Agency plans add higher usage
              allowances and team seats. Sign up to see what fits, or talk to us directly.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/signup"
                className="font-body font-semibold text-white bg-navy hover:bg-blue px-7 py-3.5 rounded-lg transition-colors"
              >
                Explore plans
              </Link>
              <Link
                to="/contact"
                className="font-body font-semibold text-navy border border-navy/20 hover:border-navy/40 px-7 py-3.5 rounded-lg transition-colors"
              >
                Talk to us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
      <Footer />
    </PageTransition>
  )
}
