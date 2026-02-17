import React, { useRef } from 'react'
import useOnScreen from '../hooks/useOnScreen'

const PROJECTS = [
  {
    title: 'Digital Locker Application',
    desc: 'A secure digital document management platform with role-based access control and JWT authentication. Designed with Spring Security on the backend and a responsive React + Tailwind frontend. Integrated RESTful APIs with MySQL database for efficient document storage and retrieval.',
    stack: ['React', 'Spring Boot', 'JWT', 'MySQL', 'Tailwind CSS'],
    demo: '#',
    code: '#'
  },
  {
    title: 'Disaster Relief Application',
    desc: 'An emergency response platform built to track weather data, deliver offline safety alerts, and visualize real-time data on an interactive dashboard to aid coordination and response efforts.',
    stack: ['React', 'REST APIs', 'Tailwind CSS', 'Location APIs'],
    demo: '#',
    code: '#'
  }
]

export default function Projects(){
  const ref = useRef()
  const visible = useOnScreen(ref, '-100px')
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl icon-rotate">🚀</span>
        <h3 className="text-3xl font-bold gradient-accent title-slide-in">Projects</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p, idx) => (
          <article key={p.title} style={{ animationDelay: `${idx * 100}ms` }} className="p-5 bg-gray-900/40 rounded-lg card-hover transition-transform duration-300 hover:-translate-y-2 slide-in">
            <h4 className="text-lg font-semibold">{p.title}</h4>
            <p className="mt-2 text-gray-300">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map(t => (
                <span key={t} className="text-xs px-2 py-1 bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] rounded-full text-white">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <a className="px-3 py-2 bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] rounded-md text-white text-sm shadow-sm hover:shadow-glow" href={p.demo} target="_blank" rel="noreferrer">🔗 Live Demo</a>
              <a className="px-3 py-2 border border-gray-700 rounded-md text-sm hover:scale-105 transition" href={p.code} target="_blank" rel="noreferrer">💻 View Code</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
