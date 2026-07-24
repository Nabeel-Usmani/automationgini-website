import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoLight from '../assets/Logo.jpg'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Product', href: '#pipeline' },
    { label: 'Features', href: '#features' },
    { label: 'Add-ons', href: '#addons' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/0'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">
        <a href="#top" className="flex items-center">
          <img src={LogoLight} alt="AutomationGini" width="50" height="36" className="h-8 md:h-9 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-[15px] font-medium text-navy/70 hover:text-navy transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden sm:inline-block font-body text-[15px] font-semibold text-navy/80 hover:text-navy px-4 py-2 transition-colors"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="font-body text-[15px] font-semibold text-white bg-navy hover:bg-blue px-5 py-2.5 rounded-lg transition-colors"
          >
            Sign up free
          </Link>
        </div>
      </nav>
    </header>
  )
}
