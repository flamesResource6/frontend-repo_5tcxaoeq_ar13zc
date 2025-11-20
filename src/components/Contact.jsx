import React, { useState } from 'react'

export default function Contact({ backendUrl }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setResult({ ok: true, msg: 'Thanks! We will reach out shortly.' })
      setForm({ name: '', email: '', phone: '', company: '', message: '' })
    } catch (err) {
      setResult({ ok: false, msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Book a free automation audit</h2>
            <p className="mt-3 text-slate-300">We’ll review your lead flow, dispatch, and follow-ups, then present a tailored roadmap with quick wins.</p>

            <ul className="mt-6 space-y-3 text-slate-300 text-sm">
              <li>• Lead capture and <span className="text-white font-medium">sub-60s routing</span></li>
              <li>• <span className="text-white font-medium">14-step follow-ups</span> that close deals</li>
              <li>• <span className="text-white font-medium">Dynamic pricing</span> with utilization guardrails</li>
              <li>• <span className="text-white font-medium">CRM-free workflows</span> your team can run today</li>
            </ul>
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input className="rounded-lg bg-slate-900/60 px-4 py-3 text-white placeholder-slate-400 outline-none border border-white/10 focus:border-violet-400/60" placeholder="Name" required value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} />
              <input type="email" className="rounded-lg bg-slate-900/60 px-4 py-3 text-white placeholder-slate-400 outline-none border border-white/10 focus:border-violet-400/60" placeholder="Email" required value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} />
              <input className="rounded-lg bg-slate-900/60 px-4 py-3 text-white placeholder-slate-400 outline-none border border-white/10 focus:border-violet-400/60" placeholder="Phone" value={form.phone} onChange={e=>setForm({ ...form, phone: e.target.value })} />
              <input className="rounded-lg bg-slate-900/60 px-4 py-3 text-white placeholder-slate-400 outline-none border border-white/10 focus:border-violet-400/60" placeholder="Company" value={form.company} onChange={e=>setForm({ ...form, company: e.target.value })} />
            </div>
            <textarea className="mt-4 h-28 w-full rounded-lg bg-slate-900/60 px-4 py-3 text-white placeholder-slate-400 outline-none border border-white/10 focus:border-violet-400/60" placeholder="Tell us a bit about your operations" value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })} />
            <button disabled={loading} className="mt-4 w-full rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 px-5 py-3 text-white disabled:opacity-60">
              {loading ? 'Submitting...' : 'Send Request'}
            </button>
            {result && (
              <p className={`mt-3 text-sm ${result.ok ? 'text-emerald-300' : 'text-rose-300'}`}>{result.msg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
