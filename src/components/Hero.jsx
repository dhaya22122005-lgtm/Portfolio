import React, { useRef, useEffect, useState } from 'react'
import useOnScreen from '../hooks/useOnScreen'
import scrollToId from '../utils/scrollToId'
import profileImg from '../assets/profile.jpg'

function useTyping(phrases, speed = 60, pause = 1400) {
  const [text, setText] = useState('')
  const [idx, setIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout
    const current = phrases[idx % phrases.length]
    if (!isDeleting) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
      if (text === current) timeout = setTimeout(() => setIsDeleting(true), pause)
    } else {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2)
      if (text === '') {
        setIsDeleting(false)
        setIdx(i => i + 1)
      }
    }
    return () => clearTimeout(timeout)
  }, [text, isDeleting, idx, phrases, speed, pause])

  return text
}

export default function Hero(){
  const ref = useRef()
  const onScreen = useOnScreen(ref, '-100px')
  const typing = useTyping([
    'Web Applications that Perform',
    'Clean & Structured Architecture',
    'Secure Full-Stack Solutions'
  ], 50, 1600)

  return (
    <div ref={ref} className={`fade-in ${onScreen ? 'visible' : ''} py-20`}> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          {/* Main Title with animated icon */}
          <div className="flex items-center gap-2 hero-fade-in-up">
            <span className="text-5xl icon-rotate">👋</span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight title-slide-in">Hi, I'm <span className="gradient-accent">Dhayanandh</span></h1>
          </div>

          {/* Subtitle with animated icon */}
          <div className="flex items-center gap-2 mt-2 hero-fade-in-up hero-fade-in-up-delay-1">
            <span className="text-2xl icon-pulse">💻</span>
            <p className="text-lg text-gray-300 title-fade-in">Full-Stack Developer | React &amp; Spring Boot</p>
          </div>

          {/* Enhanced Description */}
          <p className="mt-6 text-gray-300 max-w-xl leading-relaxed hero-fade-in-up hero-fade-in-up-delay-1">
            I build secure, scalable, and performance-driven web applications. From crafting intuitive React interfaces to engineering structured Spring Boot backend systems, I focus on clarity, clean architecture, and real-world impact.
          </p>

          {/* Typing effect text */}
          <div className="mt-4 text-sm text-gray-300 hero-fade-in-up hero-fade-in-up-delay-2">
            <span className="typing">{typing}</span>
          </div>

          {/* Animated Highlight Badges */}
          <div className="mt-6 flex flex-wrap gap-3 hero-fade-in-up hero-fade-in-up-delay-2">
            <div className="hero-badge">
              <span>⚡</span>
              <span className="text-xs font-medium text-gray-200">Performance-Focused</span>
            </div>
            <div className="hero-badge">
              <span>🔐</span>
              <span className="text-xs font-medium text-gray-200">Secure Architecture</span>
            </div>
            <div className="hero-badge">
              <span>🎨</span>
              <span className="text-xs font-medium text-gray-200">UI Precision</span>
            </div>
          </div>

          {/* Premium Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            {/* Primary Button */}
            <button 
              onClick={() => scrollToId('projects')} 
              className="hero-button hero-button-1 hero-btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300"
            >
              🔥 View Projects
            </button>

            {/* Secondary Button */}
            <a 
              href="https://drive.google.com/uc?export=download&id=1YJvEGomt7TrWT7mJhM2osOCHMczAeaIE
" 
              download="Dhayanandh_Resume.pdf"
              className="hero-button hero-button-2 hero-btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-gray-200 font-semibold border-2 border-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
              style={{
                borderImage: 'linear-gradient(135deg, #3b82f6, #7c3aed) 1'
              }}
            >
              📄 Download Resume
            </a>

            {/* Tertiary Button */}
            <button 
              onClick={() => scrollToId('contact')}
              className="hero-button hero-button-3 hero-btn-tertiary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-gray-200 font-semibold transition-all duration-300"
            >
              📩 Contact Me
            </button>
          </div>
        </div>

        {/* Enhanced Image Section */}
        <div className="order-first md:order-last flex flex-col justify-center md:justify-end items-center md:items-end hero-fade-in-up">
          <div className="relative">
            {/* Gradient glow behind image */}
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/10 rounded-3xl blur-3xl -z-20 animate-pulse" />
            
            {/* Main image container with floating animation */}
            <div className="relative w-64 h-80 rounded-3xl overflow-hidden shadow-2xl floating-image transition-transform duration-300 hover:scale-105"
                 style={{
                   border: '3px solid',
                   borderImage: 'linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%) 1',
                   boxShadow: '0 30px 60px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 50px rgba(124, 58, 237, 0.15)'
                 }}>
              <img 
                src={profileImg} 
                alt="Dhayanandh" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom glow accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full blur-3xl -z-10" />
          </div>
          
          {/* Professional subtitle */}
          <div className="text-center mt-8 hero-fade-in-up hero-fade-in-up-delay-3">
            <p className="text-gray-400 text-sm font-medium">Full Stack Developer | India</p>
          </div>
        </div>
      </div>
    </div>
  )
}
