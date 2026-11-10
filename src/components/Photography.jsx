import { useEffect, useState } from 'react'
import { site } from '../data/site.js'
import SectionHead from './SectionHead.jsx'

export default function Photography() {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % site.photos.length)
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + site.photos.length) % site.photos.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!site.photos.length) return null
  return (
    <section id="photography" className="section">
      <div className="container">
        <SectionHead eyebrow="Visual Storytelling" accent="Through" rest="My Lens" aside="Light, colour and small details. Moments I noticed and kept." />
        <div className="photo-grid">
          {site.photos.map((p, i) => (
            <button key={p.src} className={`photo photo-${i + 1} reveal`} onClick={() => setOpen(i)} aria-label={`View photo: ${p.alt}`}>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>
      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <img src={site.photos[open].src} alt={site.photos[open].alt} onClick={(e) => e.stopPropagation()} />
          <button className="lb-close" aria-label="Close" onClick={() => setOpen(null)}>×</button>
        </div>
      )}
    </section>
  )
}
