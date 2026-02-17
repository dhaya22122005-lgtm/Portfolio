import React, { useRef } from 'react'
import useOnScreen from '../hooks/useOnScreen'

export default function Contact(){
  const ref = useRef()
  const visible = useOnScreen(ref, '-80px')
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl icon-bounce">💬</span>
        <h3 className="text-3xl font-bold gradient-accent title-slide-in">Let's Work Together</h3>
      </div>
      <p className="text-gray-300 mb-6">I’m open to internships, collaborations, and software development opportunities. Reach out and let’s build impactful solutions together.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-900/40 rounded-lg">
          <p className="text-gray-300">Email: <a href="mailto:dhaya22122005@gmail.com" className="text-[#3b82f6]">dhaya22122005@gmail.com</a></p>
          <p className="mt-2 text-gray-300">Phone: +91 6381552648</p>
          <p className="mt-2 text-gray-300">Location: India</p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a target="_blank"  href="mailto:dhaya22122005@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] rounded-md text-white hover:scale-105 transition">📧 Email Me</a>
            <a target="_blank"  href="https://github.com/dhaya22122005-lgtm" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-md text-gray-200 hover:scale-105 transition">🧑‍💻 GitHub</a>
            <a target="_blank"  href="https://www.linkedin.com/in/dhayanandh-a-2954a2290" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-md text-gray-200 hover:scale-105 transition">🔗 LinkedIn</a>
          </div>
        </div>

        <div className="p-6 bg-gray-900/30 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-gray-300">Prefer a quick message instead? Send a short email and I’ll respond promptly.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
