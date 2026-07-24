import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import LogoIcon from '../assets/logo-icon.png'
import LogoIconWhite from '../assets/logo-icon-white.png'

const links = [
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // The homepage opens on a dark hero — float light-colored nav text over it
  // until the user scrolls (or opens the mobile menu, which is always solid white).
  const overDark = location.pathname === '/' && !scrolled && !menuOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/0'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={overDark ? LogoIconWhite : LogoIcon} alt="" width="35" height="40" className="h-8 md:h-9 w-auto" />
          <span className={`font-display font-semibold text-xl md:text-2xl tracking-tight transition-colors ${overDark ? 'text-white' : 'text-navy'}`}>
            Automation<span className="text-amber">Gini</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                `relative font-body text-[15px] font-medium transition-colors py-1 ${
                  isActive
                    ? overDark ? 'text-white' : 'text-navy'
                    : overDark ? 'text-white/70 hover:text-white' : 'text-navy/70 hover:text-navy'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-amber rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/login"
            className={`hidden sm:inline-block font-body text-[15px] font-semibold px-4 py-2 transition-colors ${
              overDark ? 'text-white/85 hover:text-white' : 'text-navy/80 hover:text-navy'
            }`}
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="hidden sm:inline-block font-body text-[15px] font-semibold text-white bg-navy hover:bg-blue px-5 py-2.5 rounded-lg transition-colors"
          >
            Sign up free
          </Link>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden shrink-0 w-9 h-9 flex flex-col items-center justify-center gap-1.5 -mr-1"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              className={`w-5 h-[1.5px] block origin-center transition-colors ${overDark ? 'bg-white' : 'bg-navy'}`}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`w-5 h-[1.5px] block transition-colors ${overDark ? 'bg-white' : 'bg-navy'}`}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              className={`w-5 h-[1.5px] block origin-center transition-colors ${overDark ? 'bg-white' : 'bg-navy'}`}
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
            className="md:hidden overflow-hidden border-t border-navy/[0.06] bg-white/95 backdrop-blur-md"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.label}
                  to={l.to}
                  className={({ isActive }) =>
                    `font-body text-base font-medium py-2.5 transition-colors ${
                      isActive ? 'text-navy' : 'text-navy/70'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-navy/[0.06]">
                <Link to="/login" className="font-body text-base font-semibold text-navy/80 py-2">
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="font-body text-base font-semibold text-white bg-navy px-5 py-2.5 rounded-lg"
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
