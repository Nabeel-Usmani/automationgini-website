import LogoDark from '../assets/logo-dark-bg.svg'

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

export default function Footer() {
  return (
    <footer className="bg-navy-deep pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-[1.3fr_repeat(3,1fr)] gap-12 pb-14 border-b border-white/10">
          <div>
            <img src={LogoDark} alt="AutomationGini" className="h-8 mb-4" />
            <p className="font-body text-sm text-white/50 max-w-xs leading-relaxed">
              AI-powered lead generation and client automation, built for agencies.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-body font-semibold text-white text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="font-body text-sm text-white/50 hover:text-white/80 transition-colors"
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
          <p className="font-mono text-xs text-white/30">
            &copy; 2026 AutomationGini. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
