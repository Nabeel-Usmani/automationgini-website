import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'

const statusStyle = {
  realistic: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  partial: 'bg-amber-50 text-amber-800 border-amber-200',
  no: 'bg-rose-50 text-rose-800 border-rose-200',
}

const chipDot = {
  ok: 'bg-emerald-500',
  warn: 'bg-amber-500',
  bad: 'bg-rose-500',
}

function StatusPill({ tone, children }) {
  return (
    <span className={`inline-flex items-center font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${statusStyle[tone]}`}>
      {children}
    </span>
  )
}

function Chip({ tone, children }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] px-3 py-1.5 rounded-full border border-navy/15 text-slate">
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${chipDot[tone]}`} />
      {children}
    </span>
  )
}

function RateLine({ k, v, strong }) {
  return (
    <div className={`flex items-center justify-between gap-4 text-xs ${strong ? 'font-semibold text-navy' : 'text-slate'}`}>
      <span>{k}</span>
      <span className="font-mono tabular-nums shrink-0">{v}</span>
    </div>
  )
}

function VendorCard({ name, tag, tone = 'warn', role, children }) {
  return (
    <div className="border border-navy/10 rounded-xl p-5 bg-white flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <p className="font-body font-semibold text-navy text-sm">{name}</p>
        <Chip tone={tone}>{tag}</Chip>
      </div>
      {role && <p className="font-body text-xs text-slate leading-relaxed -mt-1">{role}</p>}
      <div className="bg-ice rounded-lg px-3.5 py-3 space-y-1.5">{children}</div>
    </div>
  )
}

function BudgetBar({ label, value, amount, tone = 'bg-navy' }) {
  return (
    <div className="flex items-center gap-4 py-1.5">
      <span className="font-body text-xs text-slate w-44 shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-ice rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${tone}`} style={{ width: `${value}%` }} />
      </div>
      <span className="font-mono text-xs tabular-nums text-navy w-20 text-right shrink-0">{amount}</span>
    </div>
  )
}

const monthRows = [
  {
    label: 'Aug',
    sub: 'pre-Sep-1 rate · Snov Starter · Higgsfield not active · demos cut 60→40/mo',
    demos: '40', appDemos: '15', calls: '150', claude: '$17.56', vapi: '$49.50', snov: '$37.05',
    higgs: '—', gemini: '$4.34', render: '$90.15', draw: '$100.00', total: '$298.60',
  },
  {
    label: 'Sep',
    sub: 'new Claude rate · Snov stays Starter · Higgsfield delayed to Oct',
    demos: '40', appDemos: '15', calls: '150', claude: '$26.73', vapi: '$49.50', snov: '$37.05',
    higgs: '—', gemini: '$4.84', render: '$100.00', draw: '$100.00', total: '$318.12',
  },
  {
    label: 'Oct',
    sub: 'steady state · Higgsfield active (Oct only)',
    demos: '40', appDemos: '15', calls: '150', claude: '$26.73', vapi: '$49.50', snov: '$37.05',
    higgs: '$49.00', gemini: '$5.34', render: '$110.00', draw: '$100.00', total: '$377.62',
  },
]

const totalsRow = {
  demos: '120', appDemos: '45', calls: '450', claude: '$71.02', vapi: '$148.50', snov: '$111.15',
  higgs: '$49.00', gemini: '$14.52', render: '$300.15', draw: '$300.00', total: '$994.34',
}

const replacementTargets = [
  {
    title: 'Prompting',
    vendor: 'Anthropic Claude',
    cost: '$71.02 / 3 mo',
    inHouse: 'Self-hosted open-weight model (Llama / Qwen) for low-stakes generation; Claude stays for quality-critical site and app-mockup output.',
    tone: 'no',
    status: 'Not at this budget',
    detail: 'A single dedicated GPU instance costs more per month than the entire 3-month Claude line. The realistic first move is a hybrid split — route template previews and simple copy to a cheaper hosted model now, keep Claude only where output quality is customer-facing. Full self-hosting only pencils out once generation volume is high enough that GPU rental undercuts Claude’s per-token cost, not on a fixed month-3 date.',
  },
  {
    title: 'Email',
    vendor: 'Snov.io',
    cost: '$111.15 / 3 mo',
    inHouse: 'Evidence-based owner-email discovery + MX-record verification, running on Perplexity and DNS lookups — already mostly built.',
    tone: 'realistic',
    status: 'Realistic — on track',
    detail: 'This is the one target where "feed the system for 3 months, then drop the vendor" is literally what’s happening. Snov is billed 3-month (not annual), kept at Starter tier the whole time — 1,000 credits/mo is plenty to feed pattern data into the in-house pipeline, no need to pay for Pro volume just to bootstrap it.',
  },
  {
    title: 'Voice agents',
    vendor: 'Vapi (BYOK)',
    cost: '$148.50 / 3 mo',
    inHouse: 'Self-hosted STT → LLM → TTS → telephony orchestration, replacing Vapi’s platform layer end to end.',
    tone: 'no',
    status: 'Not yet — wrong reason to wait on',
    detail: 'Vapi is orchestration, not a foundation model — genuinely buildable. But at 150 calls/mo, Vapi’s own markup over BYOK is only ≈$22.50/mo; a self-hosted stack costs more in GPU/ops than that saves today. Worth pre-building in parallel so cutover is ready the moment call volume clears the break-even point — not worth cutting over at this volume just to hit month 3.',
  },
]

const endState = [
  {
    name: 'Higgsfield',
    role: 'Hero/lifestyle image and video generation for site demos — the polish layer, not the structural content.',
    cost: '$49/mo once active',
  },
  {
    name: 'Google AI Studio',
    role: 'Gemini image generation already powers every app-mockup icon, hero photo, and project photo — 4 real image calls per app demo today, not a hypothetical use.',
    cost: '< $10–15/mo est.',
  },
]

export default function ThreeMonthPricingPlan() {
  useEffect(() => {
    const prevTitle = document.title
    document.title = 'AutomationGini — 3-Month Infrastructure Cost Plan (Internal)'

    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)

    return () => {
      document.title = prevTitle
      document.head.removeChild(meta)
    }
  }, [])

  return (
    <PageTransition className="font-body bg-white">
      <div className="border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="font-wordmark font-black text-sm tracking-tight text-navy uppercase">
            Automation<span className="text-slate">Gini</span>
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
            Internal &middot; unlisted
          </span>
        </div>
      </div>

      <section className="bg-white pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-navy/40 uppercase mb-4">
              Investor briefing &middot; cost model draft v5
            </p>
            <h1 className="font-display font-medium text-4xl md:text-5xl text-navy tracking-tight leading-[1.08] max-w-3xl">
              3-month infrastructure cost plan
            </h1>
            <p className="mt-5 font-body text-lg text-slate max-w-2xl leading-relaxed">
              Budget-constrained to $1,000 over three months, at 150 voice-demo calls/month, now
              covering website, app, and CRM demos. Every line traced down to sub-components, and
              an honest read on the three costs we actually intend to eliminate in-house &mdash;
              prompting, email, and voice agents &mdash; leaving only Higgsfield and Google AI
              Studio as the vendors we keep past month 3.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2 mt-8 font-mono text-xs text-slate/70">
              <span><strong className="text-navy">Prepared</strong> Aug 11, 2026</span>
              <span><strong className="text-navy">Window</strong> Aug &ndash; Oct 2026</span>
              <span><strong className="text-navy">Ceiling</strong> $1,000 / 3 mo</span>
              <span><strong className="text-navy">Vapi target</strong> 150 calls/mo</span>
            </div>
          </Reveal>

          <Reveal delay={80} className="flex flex-wrap gap-2 mt-8">
            <Chip tone="ok">Verified &mdash; Anthropic, Render, Higgsfield, Vapi platform fee, Snov.io</Chip>
            <Chip tone="warn">Estimated &mdash; Vapi&rsquo;s STT/TTS/telephony pass-through</Chip>
            <Chip tone="bad">Still missing &mdash; Google AI Studio&rsquo;s rate table</Chip>
          </Reveal>
        </div>
      </section>

      <section className="bg-ice py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-navy/40 uppercase mb-2">The three targets</p>
            <h2 className="font-display font-medium text-2xl md:text-3xl text-navy tracking-tight mb-3">
              What we&rsquo;re actually trying to eliminate
            </h2>
            <p className="font-body text-slate leading-relaxed max-w-2xl mb-10">
              Everything else in this plan (Render, Higgsfield, Gemini) is infrastructure we expect to keep
              paying for. These three are the ones we intend to replace with in-house systems &mdash; at
              different speeds, for different reasons.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {replacementTargets.map((t, i) => (
              <Reveal key={t.title} delay={i * 80} className="bg-white border border-navy/10 rounded-xl p-6 flex flex-col gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-navy/40 mb-1.5">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="font-display font-semibold text-xl text-navy tracking-tight">{t.title}</h3>
                </div>
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-slate">{t.vendor}</span>
                  <span className="text-navy font-semibold tabular-nums">{t.cost}</span>
                </div>
                <StatusPill tone={t.tone}>{t.status}</StatusPill>
                <div className="border-t border-navy/10 pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-navy/40 mb-1.5">In-house target</p>
                  <p className="font-body text-sm text-navy leading-relaxed">{t.inHouse}</p>
                </div>
                <p className="font-body text-xs text-slate leading-relaxed">{t.detail}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={260} className="mt-10 bg-white border-l-2 border-navy rounded-r-xl px-6 py-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-navy/40 mb-2">The end state</p>
            <p className="font-body text-sm text-navy leading-relaxed">
              Once prompting, email, and voice agents are in-house, <strong>Higgsfield and Google AI
              Studio are the only two vendors this plan expects to still be paying for</strong> &mdash;
              both for image/video generation, nothing else. Everything else in these 3 months (Claude,
              Vapi, Snov) exists to feed and validate that in-house build, not to run indefinitely.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4 mt-5">
            {endState.map((v) => (
              <div key={v.name} className="bg-white border border-navy/10 rounded-xl p-5 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-body font-semibold text-navy text-sm">{v.name}</p>
                  <span className="font-mono text-[11px] text-navy/60 tabular-nums shrink-0">{v.cost}</span>
                </div>
                <p className="font-body text-xs text-slate leading-relaxed">{v.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-navy/40 uppercase mb-2">Vendor breakdown</p>
            <h2 className="font-display font-medium text-2xl md:text-3xl text-navy tracking-tight mb-3">
              What each vendor is actually for
            </h2>
            <p className="font-body text-slate leading-relaxed max-w-2xl mb-3">
              Rate is the unit cost; role is what the platform uses it for today. This is the input
              to the scenario table below, not the projection itself.
            </p>
            <p className="font-body text-sm text-slate/70 leading-relaxed max-w-2xl mb-8">
              CRM demos aren&rsquo;t listed as a card below &mdash; they&rsquo;re pure Postgres inserts
              (sandboxed workspace, sample services, a working staff login), no AI calls at all, so
              their marginal cost is $0 beyond the Render line already in this plan.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4">
            <Reveal>
              <VendorCard name="Anthropic Claude" tag="verified" tone="ok" role="Generates every page of a website demo (4 pages/site) and the interactive HTML for app-mockup demos. Website volume cut from 60/mo to 40/mo this round to help fund the larger founder draw below.">
                <RateLine k="Input, through Aug 31" v="$2 / MTok" />
                <RateLine k="Output, through Aug 31" v="$10 / MTok" />
                <RateLine k="Input, from Sep 1" v="$3 / MTok" />
                <RateLine k="Output, from Sep 1" v="$15 / MTok" />
              </VendorCard>
            </Reveal>
            <Reveal delay={60}>
              <VendorCard name="Vapi &mdash; Build tier" tag="verified, direct" tone="ok" role="Powers voice-agent demo calls. LLM leg on the existing Anthropic key (Vapi&rsquo;s own BYOK terms), not Vapi&rsquo;s pass-through.">
                <RateLine k="Platform fee" v="$0.05 / min" />
                <RateLine k="SMS/chat" v="$0.005 / msg" />
                <RateLine k="LLM leg &mdash; BYOK" v="$0 to Vapi" />
                <RateLine k="STT (est.)" v="≈$0.01 / min" />
                <RateLine k="TTS (est.)" v="≈$0.04 / min" />
                <RateLine k="Telephony (est.)" v="≈$0.01 / min" />
                <RateLine k="All-in, BYOK, used below" v="≈$0.11 / min" strong />
              </VendorCard>
            </Reveal>
            <Reveal delay={120}>
              <VendorCard name="Snov.io &mdash; 3-month billing, Starter" tag="verified, direct" tone="ok" role="Feeds pattern data into the in-house owner-email pipeline. Kept at Starter tier all 3 months this round, not upgraded to Pro &mdash; 1,000 credits/mo is enough to bootstrap the pipeline, and it&rsquo;s dropped entirely once that pipeline is validated.">
                <RateLine k="Starter, monthly" v="$39.00 / mo" />
                <RateLine k="Starter, 3-mo (−5%), used below" v="$37.05 / mo" strong />
                <RateLine k="Pro, 3-mo (−5%), not used" v="$94.05 / mo" />
              </VendorCard>
            </Reveal>
            <Reveal delay={180}>
              <VendorCard name="Google AI Studio" tag="rate unconfirmed" tone="warn" role="Real, verified usage today: generates all 4 images (icon, hero photo, 2 project photos) for every app-mockup demo via Gemini image generation, plus drafts cold-outreach email copy.">
                <RateLine k="Image gen, publicly cited (unverified)" v="≈$0.039 / image" />
                <RateLine k="Email copy (Flash-Lite)" v="no reliable rate yet" />
                <RateLine k="Cost is small either way" v="&lt; $15/mo likely" />
              </VendorCard>
            </Reveal>
            <Reveal delay={240}>
              <VendorCard name="Higgsfield" tag="verified, optional" tone="ok" role="Image/video generation for site-demo hero assets. Pushed back to Oct only this round &mdash; the second month of runway is going to the founder draw instead.">
                <RateLine k="Free plan" v="generation blocked" />
                <RateLine k="Paid plan" v="$49 / mo" />
                <RateLine k="Aug–Sep" v="not budgeted" />
                <RateLine k="Oct only" v="$49.00" />
              </VendorCard>
            </Reveal>
            <Reveal delay={300}>
              <VendorCard name="Founder / operator draw" tag="disclosed line item" tone="ok" role="Not a vendor &mdash; operator time, budgeted openly like every other line here. Set to a flat $100/mo this round, funded by trimming modeled demo volume, keeping Snov at Starter, and delaying Higgsfield &mdash; never by folding it into another vendor&rsquo;s number.">
                <RateLine k="Per month, flat" v="$100.00 / mo" strong />
                <RateLine k="3-month total" v="$300.00" />
              </VendorCard>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ice py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-navy/40 uppercase mb-2">Render &mdash; confirmed baseline</p>
            <h2 className="font-display font-medium text-2xl md:text-3xl text-navy tracking-tight mb-3">
              Hosting, straight from the July invoice
            </h2>
            <p className="font-body text-slate leading-relaxed max-w-2xl mb-8">
              Datastores and the workspace subscription are itemized; the rest sits in compute
              services above what the invoice screenshot showed &mdash; worth pulling the full
              invoice before this goes in front of anyone.
            </p>
          </Reveal>
          <Reveal delay={80} className="bg-white border border-navy/10 rounded-xl p-6">
            <BudgetBar label="Compute (unattributed)" value={89.7} amount="$80.85" tone="bg-navy/30" />
            <BudgetBar label="Workspace subscription" value={7.8} amount="$7.04" tone="bg-navy/50" />
            <BudgetBar label="Datastores" value={2.5} amount="$2.26" tone="bg-navy/70" />
            <div className="border-t border-navy/10 mt-3 pt-3">
              <BudgetBar label="July total" value={100} amount="$90.15" tone="bg-amber-500" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-navy/40 uppercase mb-2">Three-month scenario</p>
            <h2 className="font-display font-medium text-2xl md:text-3xl text-navy tracking-tight mb-3">
              Fit to the $1,000 ceiling
            </h2>
            <p className="font-body text-slate leading-relaxed max-w-2xl mb-3">
              Vapi&rsquo;s call volume stays fixed at 150/mo &mdash; its LLM leg still runs on the
              existing Anthropic key instead of Vapi&rsquo;s pass-through ($216 → $148.50 across 3
              months). This version adds app-mockup demos (Claude + Google AI image gen, modeled at
              15/mo) and CRM demos ($0, Postgres-only) to the plan, and pays for the founder draw
              going to a flat $100/mo by cutting site demos to 40/mo, holding Snov at Starter
              instead of upgrading to Pro, and keeping Higgsfield to Oct only.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-8 max-w-2xl">
              <p className="font-body text-sm text-amber-900 leading-relaxed">
                <strong>Why Aug and Sep/Oct differ:</strong> Anthropic&rsquo;s intro pricing for Claude
                Sonnet 5 ends Aug 31 &mdash; the same demo costs about 50% more to generate from
                September onward. That step is built into the numbers below, not an error.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="overflow-x-auto border border-navy/10 rounded-xl">
            <table className="w-full text-xs border-collapse min-w-[920px]">
              <thead>
                <tr className="bg-ice">
                  {['Month', 'Site demos', 'App demos', 'Calls', 'Claude', 'Vapi', 'Snov', 'Higgsfield', 'Gemini', 'Render', 'Draw', 'Total'].map((h) => (
                    <th key={h} className="font-mono text-[10px] uppercase tracking-wider text-navy/50 text-left px-4 py-3 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {monthRows.map((r) => (
                  <tr key={r.label} className="border-t border-navy/10">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="font-semibold text-navy block">{r.label}</span>
                      <span className="text-slate/60 text-[11px]">{r.sub}</span>
                    </td>
                    <td className="px-4 py-3 font-mono tabular-nums text-navy">{r.demos}</td>
                    <td className="px-4 py-3 font-mono tabular-nums text-navy">{r.appDemos}</td>
                    <td className="px-4 py-3 font-mono tabular-nums text-navy">{r.calls}</td>
                    <td className="px-4 py-3 font-mono tabular-nums text-navy">{r.claude}</td>
                    <td className="px-4 py-3 font-mono tabular-nums text-navy">{r.vapi}</td>
                    <td className="px-4 py-3 font-mono tabular-nums text-navy">{r.snov}</td>
                    <td className="px-4 py-3 font-mono tabular-nums text-navy">{r.higgs}</td>
                    <td className="px-4 py-3 font-mono tabular-nums text-navy">{r.gemini}</td>
                    <td className="px-4 py-3 font-mono tabular-nums text-navy">{r.render}</td>
                    <td className="px-4 py-3 font-mono tabular-nums text-navy">{r.draw}</td>
                    <td className="px-4 py-3 font-mono tabular-nums font-semibold text-navy">{r.total}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-navy/20 bg-amber-50">
                  <td className="px-4 py-3 font-semibold text-navy">3-month total</td>
                  <td className="px-4 py-3 font-mono tabular-nums font-semibold text-navy">{totalsRow.demos}</td>
                  <td className="px-4 py-3 font-mono tabular-nums font-semibold text-navy">{totalsRow.appDemos}</td>
                  <td className="px-4 py-3 font-mono tabular-nums font-semibold text-navy">{totalsRow.calls}</td>
                  <td className="px-4 py-3 font-mono tabular-nums font-semibold text-navy">{totalsRow.claude}</td>
                  <td className="px-4 py-3 font-mono tabular-nums font-semibold text-navy">{totalsRow.vapi}</td>
                  <td className="px-4 py-3 font-mono tabular-nums font-semibold text-navy">{totalsRow.snov}</td>
                  <td className="px-4 py-3 font-mono tabular-nums font-semibold text-navy">{totalsRow.higgs}</td>
                  <td className="px-4 py-3 font-mono tabular-nums font-semibold text-navy">{totalsRow.gemini}</td>
                  <td className="px-4 py-3 font-mono tabular-nums font-semibold text-navy">{totalsRow.render}</td>
                  <td className="px-4 py-3 font-mono tabular-nums font-semibold text-navy">{totalsRow.draw}</td>
                  <td className="px-4 py-3 font-mono tabular-nums font-bold text-amber-800">{totalsRow.total}</td>
                </tr>
              </tbody>
            </table>
          </Reveal>

          <Reveal delay={140}>
            <p className="font-body text-sm text-slate leading-relaxed mt-4 max-w-2xl">
              Gemini&rsquo;s line blends a placeholder for email copy with a real, estimated cost for
              app-mockup images. The plan lands at <strong className="text-navy">$994.34</strong> &mdash;
              $5.66 under the $1,000 ceiling, with the $300 founder/operator draw ($100/mo flat) as its
              own visible line, never folded into anyone else&rsquo;s number.
            </p>

            <div className="mt-8 bg-ice rounded-xl p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-navy/40 mb-4">Where the $994.34 goes</p>
              <BudgetBar label="Founder draw" value={30.0} amount="$300.00" tone="bg-amber-500" />
              <BudgetBar label="Render (hosting)" value={30.0} amount="$300.15" tone="bg-navy" />
              <BudgetBar label="Vapi (BYOK)" value={14.9} amount="$148.50" tone="bg-navy/55" />
              <BudgetBar label="Snov.io (Starter)" value={11.1} amount="$111.15" tone="bg-navy/70" />
              <BudgetBar label="Claude (site + app demos)" value={7.1} amount="$71.02" tone="bg-navy/30" />
              <BudgetBar label="Higgsfield (Oct only)" value={4.9} amount="$49.00" tone="bg-navy/40" />
              <BudgetBar label="Gemini (email + app images)" value={1.5} amount="$14.52" tone="bg-navy/15" />
              <div className="border-t border-navy/10 mt-2 pt-3">
                <BudgetBar label="Headroom to $1,000" value={0.6} amount="$5.66" tone="bg-emerald-400" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ice py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-navy/40 uppercase mb-2">In-house by month 3</p>
            <h2 className="font-display font-medium text-2xl md:text-3xl text-navy tracking-tight mb-3">
              An honest read, vendor by vendor
            </h2>
            <p className="font-body text-slate leading-relaxed max-w-2xl mb-8">
              &ldquo;Feed our internal system for 3 months, then replace the vendor&rdquo; is exactly right
              for one of these five. For the other four, the same framing doesn&rsquo;t hold, and it&rsquo;s
              better to say that now than have it surface in diligence.
            </p>
          </Reveal>

          <Reveal delay={80} className="bg-white border border-navy/10 rounded-xl overflow-hidden">
            {[
              { name: 'Snov.io', tone: 'realistic', status: 'Realistic', why: 'This is the one true match. The replacement is mostly already built &mdash; evidence-based owner-discovery + MX-record verification, running on Perplexity and DNS lookups, not Snov. The 3 months of Snov spend above is exactly "feed the system, then drop the vendor."' },
              { name: 'Vapi', tone: 'no', status: 'Not yet, wrong reason', why: 'Vapi is orchestration, not a foundation model — genuinely buildable in principle. But at 150 calls/mo (450 min), its own markup over BYOK is only ≈$22.50/mo. A self-hosted stack costs more in GPU/ops than that saves. Pays off at much higher call volume, not this one.' },
              { name: 'Claude', tone: 'no', status: 'Not at this budget', why: 'A foundation model, not a service — training one from scratch runs into hundreds of millions of dollars. Self-hosting an open-weight model trades API cost for GPU rental, and a single dedicated instance costs more per month than this entire 3-month Claude line ($71.02, website + app demos combined). Realistic move: route low-stakes generation to a cheaper hosted model, keep Claude for what needs the quality.' },
              { name: 'Google AI Studio', tone: 'no', status: 'Not worth it', why: 'Same logic as Claude, smaller stakes — Gemini Flash-Lite is already cheap enough (under $10/mo at this volume) that there’s very little to save by self-hosting, and GPU cost would dwarf the savings.' },
              { name: 'Higgsfield', tone: 'partial', status: 'Partial, later', why: 'Open-weight image models (Stable Diffusion / Flux) are closer to commercial quality than open LLMs are to Claude, so this is more plausible than the other three — but still means a hosted API for the open model, not a self-run GPU at this volume. Worth revisiting once spend clears a few hundred dollars a month.' },
            ].map((row, i) => (
              <div key={row.name} className={`p-6 flex flex-col sm:flex-row sm:items-start gap-4 ${i > 0 ? 'border-t border-navy/10' : ''}`}>
                <div className="sm:w-40 shrink-0 flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2">
                  <p className="font-body font-semibold text-navy text-sm">{row.name}</p>
                  <StatusPill tone={row.tone}>{row.status}</StatusPill>
                </div>
                <p className="font-body text-sm text-slate leading-relaxed flex-1" dangerouslySetInnerHTML={{ __html: row.why }} />
              </div>
            ))}
          </Reveal>

          <Reveal delay={140} className="mt-8 bg-white border-l-2 border-amber-400 rounded-r-xl px-6 py-5 max-w-2xl">
            <p className="font-body text-sm text-navy leading-relaxed">
              <strong>The pattern that&rsquo;s actually true:</strong> &ldquo;in-house&rdquo; pays off once a
              vendor&rsquo;s markup exceeds what dedicated infrastructure costs to run. Right now only Snov
              clears that bar. The other four need either a lot more volume or a cheaper hosted
              alternative &mdash; not a self-hosted server &mdash; before a cutover makes sense.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="border-t border-navy/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-mono text-[11px] text-slate/60 uppercase tracking-wide">
            AutomationGini &mdash; internal working draft, unlisted, not indexed
          </p>
          <Link to="/" className="font-mono text-xs text-navy/60 hover:text-navy transition-colors">
            &larr; Back to home
          </Link>
        </div>
      </div>
    </PageTransition>
  )
}
