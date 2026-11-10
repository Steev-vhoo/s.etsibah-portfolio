import { useEffect, useState } from 'react'
import { site } from '../data/site.js'
import { Arrow, Play, SocialIcon } from './Icons.jsx'
import SectionHead from './SectionHead.jsx'

const fmt = (d) => (d ? new Date(d).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : '')

export default function Videos() {
  const [state, setState] = useState({ loading: true, videos: [] })
  const [playing, setPlaying] = useState(null)

  useEffect(() => {
    fetch('/api/videos?max=6')
      .then((r) => r.json())
      .then((d) => setState({ loading: false, videos: d.videos || [], configured: d.configured }))
      .catch(() => setState({ loading: false, videos: [] }))
  }, [])

  const [featured, ...rest] = state.videos
  const current = playing ? state.videos.find((v) => v.id === playing) : featured

  return (
    <section id="videos" className="section dark-section">
      <div className="container">
        <SectionHead light eyebrow="On YouTube" accent="Latest" rest="Videos" aside="Tutorials, design breakdowns and behind-the-scenes from my channel." />

        {state.loading ? (
          <div className="video-layout"><div className="video-main skeleton dark" /><div className="video-list">{[0, 1, 2].map((i) => <div key={i} className="video-row skeleton dark" />)}</div></div>
        ) : !state.videos.length ? (
          <div className="video-empty reveal">
            <SocialIcon name="youtube" size={42} />
            <p>{state.configured === false ? <>Set <code>YOUTUBE_CHANNEL_ID</code> to show your latest uploads here.</> : 'No videos yet — check back soon!'}</p>
            <a className="btn btn-orange" href={site.youtubeChannelUrl} target="_blank" rel="noreferrer">Visit Channel</a>
          </div>
        ) : (
          <>
            <div className="video-layout">
              <div className="video-main reveal">
                {playing ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${current.id}?autoplay=1&rel=0`}
                    title={current.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button className="video-poster" onClick={() => setPlaying(featured.id)} aria-label={`Play ${featured.title}`}>
                    <img src={featured.thumbnail} alt="" />
                    <span className="play-btn"><Play /></span>
                    <span className="poster-caption"><small>{fmt(featured.published)}</small>{featured.title}</span>
                  </button>
                )}
              </div>
              <div className="video-list">
                {(rest.length ? rest : state.videos).slice(0, 5).map((v) => (
                  <button key={v.id} className={`video-row ${playing === v.id ? 'active' : ''}`} onClick={() => setPlaying(v.id)}>
                    <span className="vr-thumb"><img src={v.thumbnail} alt="" loading="lazy" /><span className="mini-play"><Play /></span></span>
                    <span className="vr-text"><strong>{v.title}</strong><small>{fmt(v.published)}</small></span>
                  </button>
                ))}
              </div>
            </div>
            <div className="center-btn">
              <a href={site.youtubeChannelUrl} target="_blank" rel="noreferrer" className="btn btn-orange pill-btn">Subscribe on YouTube <span className="btn-ico white"><Arrow size={14} rotate={0} /></span></a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
