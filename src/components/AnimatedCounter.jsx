import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

// Parses a leading numeric portion so values like "<15" or "116" both animate,
// while any non-numeric prefix/suffix (the "<", commas, etc.) renders untouched.
export default function AnimatedCounter({ value, className = '' }) {
  const match = String(value).match(/^([^\d]*)(\d+)([^\d]*)$/)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(match ? match[1] + '0' + match[3] : value)

  const target = match ? parseInt(match[2], 10) : 0
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 1.2, bounce: 0 })

  useEffect(() => {
    if (inView && match) motionValue.set(target)
  }, [inView, target, match, motionValue])

  useEffect(() => {
    if (!match) return
    const unsubscribe = spring.on('change', (v) => {
      setDisplay(`${match[1]}${Math.round(v)}${match[3]}`)
    })
    return unsubscribe
  }, [spring, match])

  return (
    <span ref={ref} className={className}>
      {match ? display : value}
    </span>
  )
}
