import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CTASection() {
  return (
    <section className="bg-white py-32 md:py-44">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <h2 className="font-display font-semibold text-4xl md:text-6xl text-navy tracking-tight leading-[1.02]">
            Let&rsquo;s build your pipeline.
          </h2>
          <p className="mt-6 font-body text-xl text-slate max-w-xl mx-auto">
            See a real lead go from search result to a live AI call, in one sitting.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/signup"
              className="font-body font-semibold text-white bg-navy hover:bg-blue px-9 py-4 rounded-lg transition-all text-lg hover:scale-[1.03] active:scale-[0.98]"
            >
              Sign up free
            </Link>
            <Link
              to="/login"
              className="font-body font-semibold text-navy border border-navy/20 hover:border-navy/40 px-9 py-4 rounded-lg transition-all text-lg hover:scale-[1.03] active:scale-[0.98]"
            >
              Sign in
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
