import { useEffect, useState } from 'react'
import { site } from '../data/site.js'

const links = [
  ['Home', 'home'], ['Services', 'services'], ['About', 'about'], ['Projects', 'projects'],
  ['Videos', 'videos'], ['Testimonials', 'testimonials'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      let current = 'home'
      for (const [, id] of links) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < 140) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">{site.logoLetter}</span>
          {site.firstName}<span className="dot">.</span>
        </a>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
          <li className="nav-cta-mobile"><a href="#contact" className="btn btn-dark" onClick={() => setOpen(false)}>Contact Me</a></li>
        </ul>
        <a href="#contact" className="btn btn-dark nav-cta">Contact Me</a>
        <button className={`burger ${open ? 'open' : ''}`} aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </nav>
    </header>
  )
}
