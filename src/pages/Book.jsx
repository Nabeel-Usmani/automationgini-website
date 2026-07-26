import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const API_BASE = 'https://api.automationgini.com'

function formatPrice(cents) {
  if (cents == null) return null
  return `$${(cents / 100).toFixed(2)}`
}

function todayDateInputValue() {
  const d = new Date()
  return d.toISOString().slice(0, 10)
}

function formatDateLabel(dateStr) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })
}

function formatSlotLabel(hhmm) {
  const [h, m] = hhmm.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour12 = h % 12 === 0 ? 12 : h % 12
  return `${hour12}:${String(m).padStart(2, '0')} ${period}`
}

// Standalone, unbranded page for a client business's own customers to
// self-book - deliberately no AutomationGini nav/footer chrome, since this
// is the business's page, not a marketing page for AutomationGini itself.
export default function Book() {
  const { slug } = useParams()
  const [businessName, setBusinessName] = useState('')
  const [services, setServices] = useState(null) // null = loading, [] = loaded empty
  const [notFound, setNotFound] = useState(false)
  const [loadError, setLoadError] = useState('')

  const [step, setStep] = useState('service') // service | datetime | details | confirmed
  const [selectedService, setSelectedService] = useState(null)
  const [date, setDate] = useState(todayDateInputValue())
  const [slots, setSlots] = useState(null)
  const [slotsError, setSlotsError] = useState('')
  const [selectedSlot, setSelectedSlot] = useState(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [bookStatus, setBookStatus] = useState('')
  const [booking, setBooking] = useState(false)
  const [confirmedAppointment, setConfirmedAppointment] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE}/public/crm/${slug}/services`)
      .then(async (r) => {
        if (r.status === 404) { setNotFound(true); return null }
        if (!r.ok) throw new Error('Something went wrong loading this page.')
        return r.json()
      })
      .then((data) => {
        if (!data) return
        setBusinessName(data.business_name)
        setServices(data.services)
      })
      .catch((e) => setLoadError(e.message))
  }, [slug])

  useEffect(() => {
    if (step !== 'datetime' || !selectedService) return
    setSlots(null)
    setSlotsError('')
    setSelectedSlot(null)
    fetch(`${API_BASE}/public/crm/${slug}/availability?service_id=${selectedService.id}&date=${date}`)
      .then((r) => r.json())
      .then((data) => setSlots(data.slots || []))
      .catch(() => setSlotsError('Could not load available times - please try again.'))
  }, [step, selectedService, date, slug])

  async function submitBooking() {
    if (!name.trim() || !email.trim()) { setBookStatus('Name and email are required.'); return }
    setBooking(true)
    setBookStatus('')
    try {
      const resp = await fetch(`${API_BASE}/public/crm/${slug}/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: selectedService.id,
          customer_name: name.trim(),
          customer_email: email.trim(),
          customer_phone: phone.trim() || null,
          starts_at: `${date}T${selectedSlot}:00`,
        }),
      })
      const body = await resp.json().catch(() => ({}))
      if (!resp.ok) throw new Error(body.detail || 'That time is no longer available - please pick another.')
      setConfirmedAppointment(body)
      setStep('confirmed')
    } catch (e) {
      setBookStatus(e.message)
    } finally {
      setBooking(false)
    }
  }

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ice px-4">
        <p className="font-body text-slate text-center">This booking page doesn't exist or is no longer active.</p>
      </div>
    )
  }

  if (loadError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ice px-4">
        <p className="font-body text-slate text-center">{loadError}</p>
      </div>
    )
  }

  return (
    <PageTransition className="min-h-screen bg-ice font-body">
      <header className="max-w-xl mx-auto px-6 pt-10 pb-6 text-center">
        <h1 className="font-display font-semibold text-2xl text-navy">
          {businessName || 'Loading...'}
        </h1>
        <p className="text-slate text-sm mt-1">Book an appointment online</p>
      </header>

      <main className="max-w-xl mx-auto px-6 pb-16">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <AnimatePresence mode="wait">
            {step === 'service' && (
              <motion.div key="service" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h2 className="font-display font-semibold text-lg text-navy mb-4">Choose a service</h2>
                {services === null ? (
                  <p className="text-slate text-sm">Loading services...</p>
                ) : services.length === 0 ? (
                  <p className="text-slate text-sm">No services are available to book right now.</p>
                ) : (
                  <div className="space-y-2">
                    {services.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => { setSelectedService(s); setStep('datetime') }}
                        className="w-full flex items-center justify-between border border-slate-200 hover:border-blue rounded-xl px-4 py-3 text-left transition-colors"
                      >
                        <div>
                          <p className="font-semibold text-navy text-sm">{s.name}</p>
                          <p className="text-slate text-xs">{s.duration_minutes} min</p>
                        </div>
                        {formatPrice(s.price_cents) && (
                          <span className="font-mono text-sm text-navy">{formatPrice(s.price_cents)}</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {step === 'datetime' && selectedService && (
              <motion.div key="datetime" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <button onClick={() => setStep('service')} className="text-xs font-semibold text-blue hover:underline mb-3">← Back</button>
                <h2 className="font-display font-semibold text-lg text-navy mb-1">{selectedService.name}</h2>
                <p className="text-slate text-sm mb-4">Pick a date and time</p>

                <input
                  type="date"
                  value={date}
                  min={todayDateInputValue()}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2.5 mb-2"
                />
                <p className="text-xs text-slate-400 mb-4">{formatDateLabel(date)}</p>

                {slotsError && <p className="text-sm text-red-600 mb-3">{slotsError}</p>}
                {slots === null ? (
                  <p className="text-slate text-sm">Loading available times...</p>
                ) : slots.length === 0 ? (
                  <p className="text-slate text-sm">No open times on this day - try another date.</p>
                ) : (
                  <div className="grid grid-cols-3 gap-2">
                    {slots.map((s) => (
                      <button
                        key={s}
                        onClick={() => { setSelectedSlot(s); setStep('details') }}
                        className="text-sm font-semibold text-navy border border-slate-200 hover:border-blue hover:bg-blue/5 rounded-lg py-2 transition-colors"
                      >
                        {formatSlotLabel(s)}
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {step === 'details' && selectedService && selectedSlot && (
              <motion.div key="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <button onClick={() => setStep('datetime')} className="text-xs font-semibold text-blue hover:underline mb-3">← Back</button>
                <h2 className="font-display font-semibold text-lg text-navy mb-1">Your details</h2>
                <p className="text-slate text-sm mb-4">
                  {selectedService.name} · {formatDateLabel(date)} at {formatSlotLabel(selectedSlot)}
                </p>
                <div className="space-y-3">
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2.5" />
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2.5" />
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (optional)" className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2.5" />
                  {bookStatus && <p className="text-sm text-red-600">{bookStatus}</p>}
                  <button
                    onClick={submitBooking}
                    disabled={booking}
                    className="w-full font-semibold text-sm text-white bg-navy hover:bg-blue disabled:opacity-60 rounded-lg py-3 transition-colors"
                  >
                    {booking ? 'Booking...' : 'Confirm Appointment'}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'confirmed' && confirmedAppointment && (
              <motion.div key="confirmed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-4">
                <h2 className="font-display font-semibold text-xl text-navy mb-2">You're booked!</h2>
                <p className="text-slate text-sm">
                  {selectedService.name} on {formatDateLabel(date)} at {formatSlotLabel(selectedSlot)}.
                </p>
                <p className="text-slate text-xs mt-3">A confirmation has been sent to {email}.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">Powered by AutomationGini</p>
      </main>
    </PageTransition>
  )
}
