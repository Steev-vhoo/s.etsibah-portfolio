import { site } from '../data/site.js'
import { Arrow, SocialIcon, Spark, Sparkle } from './Icons.jsx'

export default function Hero() {
  const [t1, t2, t3, t4, t5] = site.heroTags
  const socials = site.socials.filter((s) => s.url)
  return (
    <section id="home" className="hero grid-bg">
      <div className="container hero-inner">
        <div className="hero-title reveal">
          <p className="eyebrow">Hello There!</p>
          <h1>I'm <em>{site.name}</em><Spark /></h1>
          <p className="hero-sub">{site.role} {site.location}</p>
        </div>

        <a href="#contact" className="hire-badge" aria-label="Hire me">
          <svg viewBox="0 0 100 100" className="hire-ring">
            <defs><path id="circ" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" /></defs>
            <text><textPath href="#circ">HIRE ME ✦ HIRE ME ✦ HIRE ME ✦</textPath></text>
          </svg>
          <span className="hire-dot"><Arrow size={16} /></span>
        </a>

        <div className="hero-stage">
          <div className="hero-left reveal">
            <span className="quote-mark">“</span>
            <p className="hero-quote">{site.heroQuote}</p>
            <div className="hero-learning">
              <span className="pulse" />
              <div>
                <small>Currently</small>
                <p><strong className="accent">{site.heroBadge.title}</strong></p>
                <small>{site.heroBadge.subtitle}</small>
              </div>
            </div>
          </div>

          <div className="hero-photo">
            <div className="blob" />
            <img src={site.photo} alt={site.fullName} fetchPriority="high" />
            <div className="hero-btns">
              <a href="#projects" className="btn btn-dark btn-lg">Portfolio <span className="btn-ico"><Arrow size={14} rotate={0} /></span></a>
              <a href="#contact" className="btn btn-outline btn-lg">Hire Me</a>
            </div>
          </div>

          <div className="hero-right reveal">
            <div className="tags">
              <span className="tag dark">{t1}</span><span className="tag orange">{t2}</span>
              <span className="tag-row"><span className="spark-dot"><Sparkle size={12} /></span><span className="tag dark">{t3}</span></span>
              <span className="tag orange">{t4}</span><span className="tag dark">{t5}</span>
            </div>
            {socials.length > 0 && (
              <div className="follow">
                <small>Follow Me On</small>
                <div className="socials">
                  {socials.map((s) => (
                    <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}><SocialIcon name={s.icon} size={14} /></a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
