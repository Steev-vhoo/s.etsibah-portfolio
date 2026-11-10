import { site } from '../data/site.js'
import { Arrow, Spark } from './Icons.jsx'

export default function About() {
  return (
    <section id="about" className="section bg-soft">
      <div className="container about">
        <div className="about-photo reveal">
          <div className="about-circle" />
          <img src={site.photo} alt={site.name} />
          <div className="float-card">
            <span className="float-ico">★</span>
            <small>Total Clients</small>
            <strong>{site.about.stats[0].value}</strong>
          </div>
        </div>
        <div className="about-text reveal">
          <p className="eyebrow">About Me</p>
          <h2>Who is <em>{site.name}?</em><Spark /></h2>
          <p>{site.about.text}</p>
          <div className="stats">
            {site.about.stats.map((s) => (
              <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
            ))}
          </div>
          <div className="skills">{site.about.skills.map((s) => <span key={s} className="chip light">{s}</span>)}</div>
          <div className="about-actions">
            <a href={site.resumeUrl} target="_blank" rel="noreferrer" className="btn btn-orange">Download CV <span className="btn-ico white"><Arrow size={14} rotate={90} /></span></a>
            <a href="#contact" className="btn btn-outline">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}
