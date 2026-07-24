import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function BrandStory() {
  return (
    <section className="bg-ice py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-blue uppercase mb-3">Why we built this</p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-navy tracking-tight leading-[1.05] mb-6">
            We build the tools agencies actually pitch with.
          </h2>
          <p className="font-body text-lg text-slate leading-relaxed max-w-2xl mx-auto mb-8">
            Most lead-gen tools stop at a spreadsheet of names and phone numbers. Most demo tools
            are disconnected from where the leads actually came from. AutomationGini puts discovery,
            live AI demos, and the production builds that follow all in one pipeline.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 font-body font-semibold text-blue hover:text-navy transition-colors"
          >
            Read our story &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
