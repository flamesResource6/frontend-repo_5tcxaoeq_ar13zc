import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleAudit = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleWhatsapp = () => {
    window.open('https://wa.me/15555555555', '_blank')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero onPrimaryCta={handleAudit} onSecondaryCta={handleWhatsapp} />
      <Services />
      <Testimonials />
      <div id="contact">
        <Contact backendUrl={backendUrl} />
      </div>
      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/15555555555"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 hover:scale-[1.02] transition"
        aria-label="WhatsApp Now"
      >
        {/* Simple WA glyph */}
        <svg viewBox="0 0 32 32" fill="currentColor" className="h-7 w-7"><path d="M19.11 17.08a5.48 5.48 0 0 1-2.38-.65c-.73-.37-1.42-.84-2.03-1.41-.51-.49-.96-1.05-1.32-1.67-.46-.76-.74-1.6-.81-2.48-.04-.52.17-1.02.56-1.36.18-.15.36-.3.54-.44.24-.19.56-.24.84-.12.44.22.88.45 1.31.68.37.2.57.6.5 1.02-.05.3-.11.6-.2.89-.05.15-.03.32.05.46.3.53.71 1 1.22 1.34.14.09.32.12.48.08.33-.08.66-.19.97-.32.33-.14.7-.07.97.18.33.32.65.64.96.98.2.23.26.55.15.84-.14.38-.29.75-.47 1.11-.15.29-.45.47-.77.47Zm-3.1 6.42c-1.32 0-2.61-.33-3.76-.96l-2.5.65c-.38.1-.77-.13-.86-.51l-.6-2.44a8.69 8.69 0 0 1-1.03-4.08c0-4.84 3.94-8.78 8.75-8.78 4.84 0 8.78 3.94 8.78 8.78a8.77 8.77 0 0 1-8.78 8.78Zm0-15.5c-3.73 0-6.75 3.03-6.75 6.75 0 1.32.38 2.6 1.11 3.7.08.12.11.26.08.4l.35 1.43 1.47-.38c.12-.03.25-.02.36.05a6.72 6.72 0 0 0 3.38.9c3.72 0 6.75-3.02 6.75-6.75 0-3.71-3.03-6.75-6.75-6.75Z"/></svg>
      </a>
    </div>
  )
}

export default App
