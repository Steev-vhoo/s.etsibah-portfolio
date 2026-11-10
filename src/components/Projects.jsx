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

export default function Projects() {
  const [state, setState] = useState({ loading: true, files: [], source: 'drive' })
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    fetch('/api/projects')
      .then((r) => r.json())
      .then((d) => {
        if (d.configured && d.files?.length) setState({ loading: false, files: d.files, source: 'drive' })
        else setState({ loading: false, files: site.fallbackProjects, source: 'fallback', error: d.error })
      })
      .catch(() => setState({ loading: false, files: site.fallbackProjects, source: 'fallback' }))
  }, [])

  const types = ['All', ...new Set(state.files.map((f) => typeLabel(f.mimeType)).filter(() => state.source === 'drive'))]
  const shown = filter === 'All' ? state.files : state.files.filter((f) => typeLabel(f.mimeType) === filter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead eyebrow="My Portfolio" accent="Recent" rest="Projects" aside="Live from my Google Drive — click any project to open the full case study, files or prototype." />

        {types.length > 2 && (
          <div className="filters">
            {types.map((t) => (
              <button key={t} className={`filter ${filter === t ? 'active' : ''}`} onClick={() => setFilter(t)}>{t}</button>
            ))}
          </div>
        )}

        {state.loading ? (
          <div className="project-grid">{[0, 1, 2].map((i) => <div key={i} className="project-card skeleton" />)}</div>
        ) : (
          <div className="project-grid">
            {shown.map((p, i) => (
              <a key={p.id || i} href={p.link} target="_blank" rel="noreferrer" className="project-card reveal">
                <div className="project-thumb">
                  {p.thumbnail && !p.isFolder ? (
                    <img src={p.thumbnail} alt={p.name} loading="lazy" referrerPolicy="no-referrer"
                      onError={(e) => { e.currentTarget.style.display = 'none' }} />
                  ) : null}
                  <span className="thumb-fallback">{p.name.slice(0, 1)}</span>
                  {state.source === 'drive' && <span className="type-pill">{typeLabel(p.mimeType)}</span>}
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
        )}

        {state.source === 'fallback' && !state.loading && (
          <p className="note">
            Showing sample projects. Set <code>GOOGLE_API_KEY</code> and <code>GOOGLE_DRIVE_FOLDER_ID</code> to load projects from Google Drive.
          </p>
        )}
      </div>
    </section>
  )
}
