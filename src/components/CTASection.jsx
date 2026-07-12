export default function CTASection() {
  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-display font-semibold text-3xl md:text-5xl text-navy tracking-tight leading-[1.1]">
          Let&rsquo;s build your pipeline.
        </h2>
        <p className="mt-5 font-body text-lg text-slate max-w-xl mx-auto">
          See a real lead go from search result to a live AI call, in one sitting.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:nabeel@automationgini.com"
            className="font-body font-semibold text-white bg-navy hover:bg-blue px-8 py-3.5 rounded-lg transition-colors"
          >
            Get a demo
          </a>
        </div>
      </div>
    </section>
  )
}
