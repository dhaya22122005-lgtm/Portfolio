import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  useEffect(() => { console.log('App mounted') }, [])
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="debug-app-mounted" className="text-sm text-gray-400 text-center py-2">React app mounted</div>
        <section id="home" className="pt-24">
          <Hero />
        </section>
        <section id="about" className="pt-20">
          <About />
        </section>
        <section id="skills" className="pt-20">
          <Skills />
        </section>
        <section id="projects" className="pt-20">
          <Projects />
        </section>
        <section id="achievements" className="pt-20">
          <Achievements />
        </section>
        <section id="contact" className="pt-20 pb-12">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
