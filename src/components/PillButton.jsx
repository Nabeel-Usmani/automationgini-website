import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const base = 'inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider rounded-full px-6 py-3.5 transition-colors whitespace-nowrap'

const variants = {
  dark: 'bg-navy text-white hover:bg-black',
  light: 'bg-ice text-navy hover:bg-navy/10',
  outline: 'bg-transparent text-navy border border-navy/20 hover:border-navy/40',
  ghost: 'bg-transparent text-white border border-white/25 hover:border-white/50',
}

export default function PillButton({ to, href, onClick, variant = 'dark', arrow = true, children, className = '', ...rest }) {
  const content = (
    <>
      {children}
      {arrow && <span aria-hidden="true">&#9656;</span>}
    </>
  )
  const cls = `${base} ${variants[variant]} ${className}`

  const inner = <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className={cls}>{content}</motion.span>

  if (to) {
    return (
      <Link to={to} onClick={onClick} className="inline-block">
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {inner}
      </a>
    )
  }
  return (
    <button onClick={onClick} className="inline-block" {...rest}>
      {inner}
    </button>
  )
}
