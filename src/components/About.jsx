import React, { useRef, useState, useEffect } from 'react'
import useOnScreen from '../hooks/useOnScreen'

function CountUp({ end, duration = 1200, suffix = '' }){
  const [value, setValue] = useState(0)
  useEffect(() => {
    let start = 0
    const stepTime = Math.max(20, Math.floor(duration / end))
    const timer = setInterval(() => {
      start += 1
      setValue(start)
      if (start >= end) clearInterval(timer)
    }, stepTime)
    return () => clearInterval(timer)
  }, [end, duration])
  return <span className="font-semibold text-white">{value}{suffix}</span>
}

export default function About(){
  const ref = React.useRef()
  const visible = useOnScreen(ref, '-80px')
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="bg-gray-900/40 p-6 rounded-lg shadow-glow">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl icon-pulse">👤</span>
            <h2 className="text-3xl font-bold gradient-accent title-bounce-in">About Me</h2>
          </div>
          <p className="mt-4 text-gray-300">I’m a self-motivated developer who combines backend logic with intuitive UI design. I focus on structured, maintainable code and modern architecture. With expertise in React, Spring Boot, REST APIs, JWT authentication, and Tailwind CSS, I build applications that are secure, scalable, and delightful to use.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-900/30 rounded-lg text-center hover:shadow-glow transition transform hover:-translate-y-1">
            <div className="text-gray-400">✔</div>
            <div className="mt-2 text-sm text-gray-300"><CountUp end={2} suffix="+"/> Full Stack Projects</div>
          </div>

          <div className="p-4 bg-gray-900/30 rounded-lg text-center hover:shadow-glow transition transform hover:-translate-y-1">
            <div className="text-gray-400">✔</div>
            <div className="mt-2 text-sm text-gray-300"><CountUp end={5} suffix="+"/> Core Web Technologies</div>
          </div>

          <div className="p-4 bg-gray-900/30 rounded-lg text-center hover:shadow-glow transition transform hover:-translate-y-1">
            <div className="text-gray-400">✔</div>
            <div className="mt-2 text-sm text-gray-300">Focus on Security & Performance</div>
          </div>

          <div className="p-4 bg-gray-900/30 rounded-lg text-center hover:shadow-glow transition transform hover:-translate-y-1">
            <div className="text-gray-400">✔</div>
            <div className="mt-2 text-sm text-gray-300">Mobile-Friendly & Responsive Design</div>
          </div>
        </div>
      </div>
    </div>
  )
}
