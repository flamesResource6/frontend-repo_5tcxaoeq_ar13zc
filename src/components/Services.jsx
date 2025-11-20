import React from 'react'
import { CheckCircle, Bot, Zap, Gauge, PhoneCall, Workflow, MessageSquare, ChartBar, DollarSign } from 'lucide-react'

const services = [
  { icon: Zap, title: '<60-second lead automation', desc: 'Capture, qualify, and route new leads in under a minute across web, phone, and WhatsApp.' },
  { icon: DollarSign, title: 'Dynamic pricing engine', desc: 'AI-assisted rate suggestions with peak-time multipliers and margin protection.' },
  { icon: Workflow, title: '14-step follow-up automation', desc: 'Sequenced SMS/email/WhatsApp nudges that convert unresponsive leads.' },
  { icon: CheckCircle, title: 'CRM-free workflows', desc: 'Operate without heavyweight CRMs. Simple, automated flows that teams actually use.' },
  { icon: Bot, title: 'AI chatbot & AI sales agents', desc: 'On-site and phone AI agents that quote, answer FAQs, and book rides 24/7.' },
  { icon: PhoneCall, title: 'Dispatch automation', desc: 'Auto-assign drivers, notify customers, and update ETAs with minimal clicks.' },
  { icon: ChartBar, title: 'Real-time dashboards', desc: 'Live visibility on leads, bookings, utilization, and revenue in one place.' },
]

export default function Services() {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <header className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Systems that compound efficiency</h2>
          <p className="mt-3 text-slate-300">Built for travel operators, limo & party-bus companies, charter fleets, and dispatch units in NJ, NYC, NY, CT, and PA.</p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 hover:border-violet-400/40 transition">
              <s.icon className="h-6 w-6 text-violet-300" />
              <h3 className="mt-4 text-lg font-semibold text-white" dangerouslySetInnerHTML={{ __html: s.title }} />
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            { stat: '35%', label: 'increase in booking efficiency' },
            { stat: '40%', label: 'reduction in administrative overhead' },
            { stat: '50%', label: 'faster event setup and coordination' },
            { stat: '60%', label: 'improvement in response times' },
          ].map((it, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-semibold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-300 bg-clip-text text-transparent">{it.stat}</div>
              <div className="mt-1 text-slate-300 text-sm">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
