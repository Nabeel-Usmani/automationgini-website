import Reveal from './Reveal'
import SectionIntro from './SectionIntro'

export default function BrandStory() {
  return (
    <section className="bg-white py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro eyebrow="Why we built this" cta="Read our story" ctaTo="/about">
          We build the tools agencies actually pitch with.
        </SectionIntro>
        <Reveal className="grid md:grid-cols-[160px_1fr] gap-6 md:gap-10 pb-16 md:pb-20 -mt-8 md:-mt-10">
          <div />
          <p className="font-body text-lg text-slate leading-relaxed max-w-2xl">
            Most lead-gen tools stop at a spreadsheet of names and phone numbers. Most demo tools
            are disconnected from where the leads actually came from. AutomationGini puts discovery,
            live AI demos, and the production builds that follow all in one pipeline.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
