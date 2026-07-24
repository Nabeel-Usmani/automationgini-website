import { Link } from 'react-router-dom'
import LogoIcon from '../assets/logo-icon.png'
import Reveal from './Reveal'

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
    <footer className="bg-white pt-24 pb-10 border-t border-navy/[0.06]">
      <Reveal className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-[1.3fr_repeat(3,1fr)] gap-12 pb-14 border-b border-navy/[0.06]">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 w-fit">
              <img src={LogoIcon} alt="" className="h-8 w-auto" />
              <span className="font-display font-semibold text-xl tracking-tight text-navy">
                Automation<span className="text-amber">Gini</span>
              </span>
            </Link>
            <p className="font-body text-sm text-slate/70 max-w-xs leading-relaxed">
              AI-powered lead generation and client automation, built for agencies.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-body font-semibold text-navy text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="font-body text-sm text-slate/70 hover:text-navy transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <p className="font-mono text-xs text-slate/50">
            &copy; 2026 AutomationGini. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="font-mono text-xs text-slate/50 hover:text-navy transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </footer>
  )
}
