import React from 'react'

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">What operators say</h2>
          <p className="mt-3 text-slate-300">Testimonials coming soon. Add your client quotes here to build trust.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-4 w-24 rounded bg-white/10" />
              <div className="mt-4 space-y-2">
                <div className="h-3 w-full rounded bg-white/10" />
                <div className="h-3 w-5/6 rounded bg-white/10" />
                <div className="h-3 w-3/4 rounded bg-white/10" />
              </div>
              <div className="mt-6 h-8 w-32 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
