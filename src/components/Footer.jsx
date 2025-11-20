import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} AI Automation with Salman. All rights reserved.</p>
        <div className="flex items-center gap-3 text-sm text-slate-300">
          <a href="#contact" className="hover:text-white">Contact</a>
          <span className="opacity-30">•</span>
          <a href="mailto:hello@example.com" className="hover:text-white">hello@example.com</a>
        </div>
      </div>
    </footer>
  )
}
