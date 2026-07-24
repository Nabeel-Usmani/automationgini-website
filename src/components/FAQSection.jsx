import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'

const faqs = [
  {
    q: 'Is the free plan actually free?',
    a: 'Yes. It includes 100 leads, 5 voice demos, and 5 chatbot demos — no card required to sign up.',
  },
  {
    q: 'How does billing work?',
    a: 'Paid subscriptions are billed in advance on a recurring basis through Stripe. One-time deliverables — like a voice agent or website build — are billed separately as a single fee, not a subscription. You can cancel anytime from your account settings.',
  },
  {
    q: 'Where do the leads come from?',
    a: 'Real, verifiable sources — Google Maps grid search, phone-number recovery, and real review data — not scraped guesses.',
  },
  {
    q: 'Can my whole team share one account?',
    a: 'Yes. Agency-tier plans let admins invite agents, set their access, and watch usage in one place — every account is a real multi-tenant workspace, not a shared login.',
  },
  {
    q: 'Is my data isolated from other customers?',
    a: 'Yes. AutomationGini is multi-tenant from day one — every customer’s data is fully isolated, built to resell rather than just for internal use.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-navy/[0.08]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-body font-semibold text-navy text-lg">{faq.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-7 h-7 rounded-full bg-white flex items-center justify-center text-navy text-lg font-body"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-slate leading-relaxed pb-6 pr-10">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-ice py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <Reveal className="mb-12 md:mb-14">
          <p className="font-mono text-xs tracking-widest text-blue uppercase mb-3">FAQ</p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-navy tracking-tight leading-[1.05]">
            Questions, answered.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
