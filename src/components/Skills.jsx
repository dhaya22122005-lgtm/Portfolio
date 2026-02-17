import React, { useRef } from 'react'
import useOnScreen from '../hooks/useOnScreen'

const SKILL_LIST = [
  { title: 'Java', category: 'Programming', desc: 'Back-end logic and object-oriented design.' },
  { title: 'C++', category: 'Programming', desc: 'Problem solving & performance focused coding.' },
  { title: 'JavaScript', category: 'Programming', desc: 'ES6+, asynchronous flows, DOM & event handling.' },
  { title: 'React.js', category: 'Frontend', desc: 'Component architecture, hooks and state patterns.' },
  { title: 'Tailwind CSS', category: 'Frontend', desc: 'Modern utility-first responsive design.' },
  { title: 'RESTful APIs', category: 'Backend', desc: 'Data interfaces and integration logic.' },
  { title: 'Spring Boot', category: 'Backend', desc: 'Secure, scalable backend service development.' },
  { title: 'JWT Authentication', category: 'Backend', desc: 'Token-based secure authorization systems.' },
  { title: 'MySQL', category: 'Database', desc: 'Structured relational data design and optimized queries.' },
  { title: 'Git', category: 'Tools', desc: 'Version control workflows for collaboration.' },
  { title: 'GitHub', category: 'Tools', desc: 'Repository hosting and project management.' },
  { title: 'VS Code', category: 'Tools', desc: 'Productive development environment with extensions.' },
  { title: 'Figma', category: 'Tools', desc: 'Design prototyping and UI planning.' }
]

export default function Skills(){
  const ref = useRef()
  const visible = useOnScreen(ref, '-100px')
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl icon-bounce">⚡</span>
        <h3 className="text-3xl font-bold gradient-accent title-bounce-in">Skills</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_LIST.map((skill, idx) => (
          <div key={skill.title} style={{ animationDelay: `${idx * 80}ms` }} className="p-4 bg-gray-900/40 rounded-lg card-hover transition-transform duration-200 glow fade-in visible">
            <div className="flex items-start gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] mt-1" />
              <div>
                <div className="font-semibold text-gray-100">{skill.title} <span className="text-sm text-gray-400">• {skill.category}</span></div>
                <div className="mt-2 text-sm text-gray-300">{skill.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
