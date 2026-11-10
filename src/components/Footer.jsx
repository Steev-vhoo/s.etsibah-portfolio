import { site } from '../data/site.js'
import { SocialIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="logo light"><span className="logo-mark">{site.logoLetter}</span>{site.firstName}<span className="dot">.</span></a>
        <nav>
          {['services', 'about', 'projects', 'photography', 'videos', 'contact'].map((id) => (
            <a key={id} href={`#${id}`}>{id[0].toUpperCase() + id.slice(1)}</a>
          ))}
        </nav>
        <div className="socials">
          {site.socials.filter((s) => s.url).map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}><SocialIcon name={s.icon} size={14} /></a>
          ))}
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} {site.fullName}. Creativity / Strategy / Connection.</p>
    </footer>
  )
}
