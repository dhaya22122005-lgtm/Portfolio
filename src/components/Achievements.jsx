import React, { useRef } from 'react'
import useOnScreen from '../hooks/useOnScreen'

const ITEMS = [
  {
    title: 'Best Team Award – Sri Eshwar College Hackathon (2024)',
    desc: 'Recognized for exceptional teamwork, problem-solving, and innovative solution delivery under strict time constraints.'
  },
  {
    title: 'Infosys Springboard Certification – Java Programming (2024)',
    desc: 'Completed in-depth training focused on object-oriented programming and practical application development.'
  }
]

export default function Achievements(){
  const ref = useRef()
  const visible = useOnScreen(ref, '-80px')
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl icon-rotate">🏆</span>
        <h3 className="text-3xl font-bold gradient-accent title-fade-in">Achievements</h3>
      </div>

      <div className="timeline">
        {ITEMS.map((it, idx) => (
          <div key={it.title} style={{ animationDelay: `${idx * 120}ms` }} className="timeline-item fade-in visible">
            <div className="timeline-dot" />
            <div className="p-4 bg-gray-900/40 rounded-lg shadow-glow">
              <div className="font-semibold text-gray-100">{it.title}</div>
              <div className="mt-2 text-gray-300">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
