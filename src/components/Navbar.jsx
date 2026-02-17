import React, { useState } from 'react'
import scrollToId from '../utils/scrollToId'

const links = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Achievements', href: 'achievements' },
  { name: 'Contact', href: 'contact' }
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed w-full z-40 top-0">
      <nav className="backdrop-blur bg-black/40 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button onClick={() => scrollToId('home')} className="text-lg font-semibold gradient-accent">Dhayanandh</button>
            </div>
            <div className="hidden md:flex md:space-x-6">
              {links.map(l => (
                <button key={l.name} onClick={() => scrollToId(l.href)} className="hover:text-white transition-colors">{l.name}</button>
              ))}
            </div>
            <div className="md:hidden">
              <button onClick={() => setOpen(s => !s)} className="p-2 rounded-md border border-gray-700">
                <span className="sr-only">Open menu</span>
                <div className="w-5 h-0.5 bg-gray-200 mb-1"></div>
                <div className="w-5 h-0.5 bg-gray-200 mb-1"></div>
                <div className="w-5 h-0.5 bg-gray-200"></div>
              </button>
            </div>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-4 py-3 space-y-2">
              {links.map(l => (
                <button key={l.name} onClick={() => { scrollToId(l.href); setOpen(false) }} className="block text-left w-full">{l.name}</button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
