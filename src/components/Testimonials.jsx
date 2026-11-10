import { site } from '../data/site.js'
import SectionHead from './SectionHead.jsx'

export default function Testimonials() {
  if (!site.testimonials.length) return null
  return (
    <section id="testimonials" className="section bg-soft">
      <div className="container">
        <SectionHead center eyebrow="Testimonials" accent="What Clients" rest="Say" />
        <div className="testi-grid">
          {site.testimonials.map((t, i) => (
            <figure key={i} className={`testi ${i === 1 ? 'featured' : ''} reveal`}>
              <span className="quote-mark">“</span>
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <blockquote>{t.text}</blockquote>
              <figcaption>
                <span className="testi-avatar">{t.name.slice(0, 1)}</span>
                <span><strong>{t.name}</strong><small>{t.title}</small></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
