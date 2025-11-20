import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ onPrimaryCta, onSecondaryCta }) {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            <p className="text-xs tracking-wide text-slate-200/90">AI Automation for US Travel & Fleet Operators</p>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            AI Automation with Salman
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Operations, automation, and AI systems that boost bookings, streamline dispatch, and deliver faster responses for limo, party-bus, and charter operators.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={onPrimaryCta} className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 px-5 py-3 text-white shadow-lg shadow-violet-500/20 transition hover:opacity-95 focus:outline-none">
              Book a Free Audit
            </button>
            <button onClick={onSecondaryCta} className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-slate-100 backdrop-blur transition hover:bg-white/10">
              WhatsApp Now
            </button>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 text-slate-200/90">
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">Lead to booking</dt>
              <dd className="mt-1 text-xl font-semibold">35% faster</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">Admin overhead</dt>
              <dd className="mt-1 text-xl font-semibold">-40%</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">Event setup</dt>
              <dd className="mt-1 text-xl font-semibold">50% faster</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">Response time</dt>
              <dd className="mt-1 text-xl font-semibold">+60%</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
