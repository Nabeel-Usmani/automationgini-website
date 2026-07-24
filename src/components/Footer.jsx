import { Link } from 'react-router-dom'
import LogoIcon from '../assets/logo-icon.png'

const columns = [
  {
    title: 'Product',
    links: ['Lead Discovery', 'Voice Demos', 'Website Builder', 'AI Chatbot'],
  },
  {
    title: 'Add-ons',
    links: ['Voice Agent Build', 'Website Build', 'Chatbot Subscription'],
  },
  {
    title: 'Company',
    links: ['About', 'Contact'],
  },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
]

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-10 border-t border-navy/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-[1.3fr_repeat(3,1fr)] gap-12 pb-14 border-b border-navy/[0.06]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={LogoIcon} alt="" className="h-8 w-auto" />
              <span className="font-display font-semibold text-xl tracking-tight text-navy">
                Automation<span className="text-amber">Gini</span>
              </span>
            </div>
            <p className="font-body text-sm text-slate/70 max-w-xs leading-relaxed">
              AI-powered lead generation and client automation, built for agencies.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-body font-semibold text-navy text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="font-body text-sm text-slate/70 hover:text-navy transition-colors"
                    >
                      {l}
                    </a>
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
      </div>
    </footer>
  )
}
