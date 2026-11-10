import { site } from '../data/site.js'
import SectionHead from './SectionHead.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section dark-section">
      <div className="container narrow">
        <SectionHead light eyebrow="Toolkit & Growth" accent="Always" rest="Learning" aside="Always learning. Always creating. Here's where I've been building experience and skills." />
        <div className="timeline">
          {site.journey.map((e) => (
            <div key={e.title} className="tl-item reveal">
              <span className="tl-period">{e.tag}</span>
              <div>
                <h3>{e.title}</h3>
                <p className="tl-company">{e.org}</p>
                <p>{e.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
