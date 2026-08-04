import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import LogoIcon from '../assets/logo-icon.png'

const links = [
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-navy/[0.06]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-24">
        <Link to="/" className="flex items-center gap-2">
          <img src={LogoIcon} alt="" width="35" height="40" className="h-7 md:h-8 w-auto" />
          <span className="font-wordmark font-black text-lg md:text-xl tracking-tight text-navy uppercase">
            Automation<span className="text-slate">Gini</span>
          </span>
          <span className="font-mono text-[9px] md:text-[10px] font-semibold uppercase tracking-wide text-navy/70 bg-ice rounded-full px-2 py-0.5">
            Beta
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-ice rounded-full px-2 py-2">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                `font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-colors ${
                  isActive ? 'bg-navy text-white' : 'text-navy/60 hover:text-navy'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/login"
            className="hidden sm:inline-block font-mono text-xs uppercase tracking-wider px-4 py-2 text-navy/70 hover:text-navy transition-colors"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white bg-navy hover:bg-black px-5 py-3.5 rounded-full transition-colors"
          >
            Sign up free
          </Link>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden shrink-0 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full bg-ice"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              className="w-4 h-[1.5px] block origin-center bg-navy"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-4 h-[1.5px] block bg-navy"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              className="w-4 h-[1.5px] block origin-center bg-navy"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-b border-navy/[0.06]"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.label}
                  to={l.to}
                  className={({ isActive }) =>
                    `font-mono text-xs uppercase tracking-wider py-2.5 transition-colors ${
                      isActive ? 'text-navy' : 'text-navy/60'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-navy/[0.06]">
                <Link to="/login" className="font-mono text-xs uppercase tracking-wider text-navy/70 py-2">
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="font-mono text-xs uppercase tracking-wider text-white bg-navy px-5 py-3 rounded-full"
                >
                  Sign up free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
