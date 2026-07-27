import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import PillButton from './PillButton'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Lead Discovery', to: '/features#lead-discovery' },
      { label: 'Voice Demos', to: '/features#ai-voice-demos' },
      { label: 'Website Builder', to: '/features#website-builder' },
      { label: 'AI Chatbot', to: '/features#ai-chatbot' },
    ],
  },
  {
    title: 'Add-ons',
    links: [
      { label: 'Voice Agent Build', to: '/pricing#voice-agent-build' },
      { label: 'Website Build', to: '/pricing#website-build' },
      { label: 'Chatbot Subscription', to: '/pricing#ai-chatbot' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
]

export default function Footer() {
  return (
    <footer className="relative bg-navy-deep text-white pt-24 md:pt-32 overflow-hidden">
      <Reveal className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 md:pb-20">
          <h2 className="font-display font-medium text-4xl md:text-6xl tracking-tight leading-[1.05] max-w-lg">
            Let&rsquo;s build your <span className="font-flourish italic font-normal">pipeline</span>.
          </h2>
          <PillButton to="/signup" variant="ghost">Sign up free</PillButton>
        </div>

        <div className="grid md:grid-cols-[1.3fr_repeat(3,1fr)] gap-10 md:gap-12 pb-14 border-t border-white/10 pt-12">
          <div>
            <span className="font-wordmark font-black text-lg tracking-tight uppercase">
              Automation<span className="text-white/50">Gini</span>
            </span>
            <p className="font-body text-sm text-white/50 max-w-xs leading-relaxed mt-4">
              AI-powered lead generation and client automation, built for agencies.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="font-body text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8 border-t border-white/10">
          <p className="font-mono text-xs text-white/40 uppercase tracking-wider">
            &copy; AutomationGini 2024&ndash;2026. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="font-mono text-xs text-white/40 hover:text-white uppercase tracking-wider transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="select-none pointer-events-none -mb-[3vw] overflow-hidden">
        <span className="block font-wordmark font-black uppercase text-white leading-none tracking-tight whitespace-nowrap text-center text-[12vw]">
          AutomationGini
        </span>
      </div>
    </footer>
  )
}
