import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function LegalPageLayout({ title, lastUpdated, notice, sections }) {
  return (
    <div className="font-body bg-white">
      <Nav />

      <div className="max-w-3xl mx-auto px-6 lg:px-10 pt-36 pb-24">
        <h1 className="font-display font-semibold text-4xl md:text-5xl text-navy tracking-tight mb-3">
          {title}
        </h1>
        <p className="font-mono text-xs text-slate/60 mb-8">Last updated: {lastUpdated}</p>

        {notice && (
          <div className="bg-amber/[0.08] border border-amber/30 rounded-xl px-5 py-4 mb-12">
            <p className="font-body text-[13px] text-amber-900 leading-relaxed italic">{notice}</p>
          </div>
        )}

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display font-semibold text-2xl text-navy tracking-tight mb-3">
                {section.heading}
              </h2>
              {section.intro && (
                <p className="font-body text-slate leading-relaxed mb-3">{section.intro}</p>
              )}
              {(section.subs || []).map((sub, i) => (
                <div key={i} className="mb-4">
                  {sub.heading && (
                    <h3 className="font-body font-semibold text-navy text-lg mb-2">{sub.heading}</h3>
                  )}
                  {(sub.paragraphs || []).map((p, j) => (
                    <p key={j} className="font-body text-slate leading-relaxed mb-3">{p}</p>
                  ))}
                  {(sub.bullets || []).length > 0 && (
                    <ul className="space-y-2 mb-3">
                      {sub.bullets.map((b, j) => (
                        <li key={j} className="font-body text-slate leading-relaxed flex gap-2.5">
                          <span className="text-blue mt-1.5 shrink-0">&bull;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              {(section.paragraphs || []).map((p, i) => (
                <p key={i} className="font-body text-slate leading-relaxed mb-3">{p}</p>
              ))}
              {(section.bullets || []).length > 0 && (
                <ul className="space-y-2 mb-3">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="font-body text-slate leading-relaxed flex gap-2.5">
                      <span className="text-blue mt-1.5 shrink-0">&bull;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {(section.paragraphs2 || []).map((p, i) => (
                <p key={i} className="font-body text-slate leading-relaxed mb-3">{p}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-navy/10">
          <Link to="/" className="font-body text-sm text-blue hover:text-navy transition-colors">
            &larr; Back to home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
