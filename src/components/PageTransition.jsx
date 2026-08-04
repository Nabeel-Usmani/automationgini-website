import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function PageTransition({ children, className = '' }) {
  const { pathname, hash } = useLocation()

  // Each page gets a fresh PageTransition mount (Routes is keyed by pathname
  // in App.jsx), so this fires exactly once per navigation, after the old
  // page's exit animation has finished unmounting it - not mid-transition.
  useLayoutEffect(() => {
    // index.css sets html { scroll-behavior: smooth } for in-page anchor
    // links, but that also hijacks these calls into a slow animated scroll
    // on every page navigation - force instant so a new page always opens
    // already at the right position, not mid-scroll-animation.
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ block: 'start', behavior: 'instant' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
