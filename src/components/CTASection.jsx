import Reveal from './Reveal'
import PillButton from './PillButton'

export default function CTASection() {
  return (
    <section className="bg-white pt-16 pb-28 md:pt-20 md:pb-36 border-t border-navy/[0.08]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="font-display font-medium text-4xl md:text-6xl text-navy tracking-tight leading-[1.05]">
            Let&rsquo;s build your <span className="font-flourish italic font-normal">pipeline</span>.
          </h2>
          <p className="mt-6 font-body text-xl text-slate max-w-xl mx-auto">
            See a real lead go from search result to a live AI call, in one sitting.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <PillButton to="/signup">Sign up free</PillButton>
            <PillButton to="/login" variant="outline">Sign in</PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
