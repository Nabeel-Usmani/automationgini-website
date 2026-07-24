import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import PageHero from '../components/PageHero'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'
import { OPEN_CHAT_EVENT } from '../components/ChatWidget'

const options = [
  {
    title: 'Chat with us',
    desc: 'Usually replies instantly — ask about pricing, features, or how the demos work.',
    action: 'Open chat',
    onClick: () => window.dispatchEvent(new Event(OPEN_CHAT_EVENT)),
  },
  {
    title: 'Email support',
    desc: 'For account issues, billing questions, or anything else.',
    action: 'support@automationgini.com',
    href: 'mailto:support@automationgini.com',
  },
  {
    title: 'Just want to try it?',
    desc: 'Sign up free and run a real lead through the pipeline yourself.',
    action: 'Sign up free',
    to: '/signup',
  },
]

export default function Contact() {
  return (
    <PageTransition className="font-body">
      <Nav />
      <PageHero
        eyebrow="Contact"
        title="Talk to a real person, not a form."
        subtitle="Pick whichever is fastest for you — we read all three."
      />

      <section className="bg-white pb-28 md:pb-40">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 grid sm:grid-cols-3 gap-6">
          {options.map((o, i) => (
            <Reveal
              key={o.title}
              delay={i * 80}
              className="bg-ice/60 border border-navy/[0.08] rounded-3xl p-8 flex flex-col"
            >
              <h3 className="font-body font-semibold text-navy text-lg mb-2.5">{o.title}</h3>
              <p className="font-body text-sm text-slate leading-relaxed mb-6 flex-1">{o.desc}</p>
              {o.onClick && (
                <button
                  onClick={o.onClick}
                  className="font-body font-semibold text-sm text-blue hover:text-navy transition-colors text-left"
                >
                  {o.action} &rarr;
                </button>
              )}
              {o.href && (
                <a
                  href={o.href}
                  className="font-body font-semibold text-sm text-blue hover:text-navy transition-colors"
                >
                  {o.action} &rarr;
                </a>
              )}
              {o.to && (
                <Link
                  to={o.to}
                  className="font-body font-semibold text-sm text-blue hover:text-navy transition-colors"
                >
                  {o.action} &rarr;
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </PageTransition>
  )
}
