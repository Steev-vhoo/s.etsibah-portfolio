import { site } from '../data/site.js'
import SectionHead from './SectionHead.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section dark-section">
      <div className="container narrow">
        <SectionHead light eyebrow="My Journey" accent="Work" rest="Experience" aside="A few of the places and teams I've had the pleasure of designing with." />
        <div className="timeline">
          {site.experience.map((e) => (
            <div key={e.role + e.period} className="tl-item reveal">
              <span className="tl-period">{e.period}</span>
              <div>
                <h3>{e.role}</h3>
                <p className="tl-company">{e.company}</p>
                <p>{e.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
