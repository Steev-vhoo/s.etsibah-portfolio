import { site } from '../data/site.js'
import { Arrow, Spark } from './Icons.jsx'

export default function About() {
  const { about } = site
  return (
    <section id="about" className="section bg-soft">
      <div className="container about">
        <div className="about-photo reveal">
          <div className="about-circle" />
          <img src={site.photoAlt || site.photo} alt={site.fullName} loading="lazy" />
          <div className="float-card">
            <span className="float-ico">✦</span>
            <small>Ideas are everywhere.</small>
            <strong>I make something out of them.</strong>
          </div>
        </div>
        <div className="about-text reveal">
          <p className="eyebrow">About Me</p>
          <h2>Who is <em>{site.firstName}?</em><Spark /></h2>
          {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <div className="stats">
            {about.mindset.map((s) => (
              <div key={s.value}><strong>{s.value}</strong><span>{s.label}</span></div>
            ))}
          </div>
          <p className="tools-label">Tools I use</p>
          <div className="skills">{about.tools.map((s) => <span key={s} className="chip light">{s}</span>)}</div>
          <div className="about-actions">
            {site.resumeUrl && (
              <a href={site.resumeUrl} target="_blank" rel="noreferrer" className="btn btn-orange">Download CV <span className="btn-ico white"><Arrow size={14} rotate={90} /></span></a>
            )}
            <a href="#contact" className="btn btn-outline">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}
