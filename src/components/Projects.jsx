import { useEffect, useState } from 'react'
import { site } from '../data/site.js'
import { Arrow } from './Icons.jsx'
import SectionHead from './SectionHead.jsx'

const typeLabel = (m = '') => {
  if (m.includes('folder')) return 'Folder'
  if (m.includes('pdf')) return 'PDF'
  if (m.includes('presentation')) return 'Slides'
  if (m.includes('document')) return 'Doc'
  if (m.includes('spreadsheet')) return 'Sheet'
  if (m.startsWith('image/')) return 'Image'
  if (m.startsWith('video/')) return 'Video'
  return 'File'
}

function CaseStudy({ p, index }) {
  return (
    <article className={`case reveal ${index % 2 ? 'flip' : ''}`}>
      <div className="case-img"><img src={p.image} alt={p.title} loading="lazy" /></div>
      <div className="case-body">
        <span className="case-cat">{String(index + 1).padStart(2, '0')} / {p.category}</span>
        <h3>{p.title}</h3>
        <p>{p.overview}</p>
        <dl>
          <div><dt>My role</dt><dd>{p.role}</dd></div>
          <div><dt>Outcome</dt><dd>{p.outcome}</dd></div>
        </dl>
        <div className="chips">{p.tools.map((t) => <span key={t} className="chip light">{t}</span>)}</div>
      </div>
    </article>
  )
}

function DriveGallery() {
  const [state, setState] = useState({ loading: true, files: [] })
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    fetch('/api/projects')
      .then((r) => r.json())
      .then((d) => setState({ loading: false, files: d.files || [], configured: d.configured }))
      .catch(() => setState({ loading: false, files: [] }))
  }, [])

  if (!state.loading && !state.files.length) return null
  const types = ['All', ...new Set(state.files.map((f) => typeLabel(f.mimeType)))]
  const shown = filter === 'All' ? state.files : state.files.filter((f) => typeLabel(f.mimeType) === filter)

  return (
    <div className="drive">
      <div className="drive-head">
        <h3>More work <span className="muted">from my Google Drive</span></h3>
        {types.length > 2 && (
          <div className="filters">
            {types.map((t) => (
              <button key={t} className={`filter ${filter === t ? 'active' : ''}`} onClick={() => setFilter(t)}>{t}</button>
            ))}
          </div>
        )}
      </div>
      <div className="project-grid">
        {state.loading
          ? [0, 1, 2].map((i) => <div key={i} className="project-card skeleton" />)
          : shown.map((p) => (
            <a key={p.id} href={p.link} target="_blank" rel="noreferrer" className="project-card reveal">
              <div className="project-thumb">
                {!p.isFolder && (
                  <img src={p.thumbnail} alt={p.name} loading="lazy" referrerPolicy="no-referrer"
                    onError={(e) => { e.currentTarget.style.display = 'none' }} />
                )}
                <span className="thumb-fallback">{p.name.slice(0, 1)}</span>
                <span className="type-pill">{typeLabel(p.mimeType)}</span>
              </div>
              <div className="project-info">
                <div>
                  <h3>{p.name}</h3>
                  {p.description && <p>{p.description}</p>}
                </div>
                <span className="round-ico"><Arrow size={14} /></span>
              </div>
            </a>
          ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead eyebrow="My Portfolio" accent="Selected" rest="Work" aside="Campaigns, promo videos, AI-assisted designs and personal content: what I made, how and why." />
        <div className="cases">
          {site.featuredProjects.map((p, i) => <CaseStudy key={p.title} p={p} index={i} />)}
        </div>
        <DriveGallery />
      </div>
    </section>
  )
}
