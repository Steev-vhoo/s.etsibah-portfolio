import { useState } from 'react'
import { site } from '../data/site.js'
import { Arrow } from './Icons.jsx'
import SectionHead from './SectionHead.jsx'

export default function Services() {
  const [open, setOpen] = useState(1)
  return (
    <section id="services" className="section">
      <div className="container narrow">
        <SectionHead eyebrow="My Specialization" accent="Services" rest="I Provide" aside={site.servicesIntro} />
        <div className="services">
          {site.services.map((s, i) => {
            const isOpen = open === i
            return (
              <article key={s.title} className={`service ${isOpen ? 'open' : ''} reveal`}>
                <button className="service-head" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span className="service-num">{String(i + 1).padStart(2, '0')}.</span>
                  <span className="service-title">{s.title}</span>
                  <span className="service-ico"><Arrow size={13} rotate={isOpen ? -45 : 0} /></span>
                </button>
                <div className="service-body">
                  <div>
                    <div className="chips">{s.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
                    <p>{s.text}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        <div className="center-btn">
          <a href="#contact" className="btn btn-orange pill-btn">Start a Project <span className="btn-ico white"><Arrow size={14} rotate={0} /></span></a>
        </div>
      </div>
    </section>
  )
}
