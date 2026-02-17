import React, { useRef } from 'react'
import useOnScreen from '../hooks/useOnScreen'

export default function Footer(){
  const ref = useRef()
  const visible = useOnScreen(ref, '-50px')

  return (
    <footer ref={ref} className={`relative border-t border-gradient-to-r from-blue-500/20 via-purple-500/20 to-transparent transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-gray-950 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-8">
            
            {/* LEFT: Branding */}
            <div>
              <h4 className="text-lg font-bold gradient-accent">Dhayanandh</h4>
              <p className="text-xs text-gray-500 mt-1 tracking-wide">Full-Stack Developer | React & Spring Boot</p>
            </div>

            {/* CENTER: Navigation */}
            <div className="flex justify-center gap-8">
              <a href="#about" className="footer-link-minimal text-sm">About</a>
              <a href="#skills" className="footer-link-minimal text-sm">Skills</a>
              <a href="#projects" className="footer-link-minimal text-sm">Projects</a>
              <a href="#contact" className="footer-link-minimal text-sm">Contact</a>
            </div>

            {/* RIGHT: Social Icons */}
            <div className="flex justify-center md:justify-end gap-5">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="footer-social-minimal"
                title="GitHub"
              >
                💻
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="footer-social-minimal"
                title="LinkedIn"
              >
                🔗
              </a>
              <a 
                href="mailto:dhaya22122005@gmail.com"
                className="footer-social-minimal"
                title="Email"
              >
                📧
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-gray-800/30">
            <p className="text-xs text-gray-600">
              © 2026 Dhayanandh. Crafted with precision using <span className="text-blue-500 font-medium">React</span> & <span className="text-purple-500 font-medium">Tailwind CSS</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
