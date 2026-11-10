import { site } from '../data/site.js'
import { Sparkle } from './Icons.jsx'

export default function Marquee() {
  const items = [...site.marquee, ...site.marquee]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i} className="marquee-item">{t}<Sparkle size={20} /></span>
        ))}
      </div>
    </div>
  )
}
