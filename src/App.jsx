import { useEffect } from 'react'
import { site } from './data/site.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Photography from './components/Photography.jsx'
import Videos from './components/Videos.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    document.title = `${site.fullName} | Digital Marketing Portfolio`
    // Reveal-on-scroll
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0.12 },
    )
    const scan = () => document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el))
    scan()
    // Content loaded later (Drive / YouTube) also gets the reveal animation
    const mo = new MutationObserver(scan)
    mo.observe(document.body, { childList: true, subtree: true })
    return () => { io.disconnect(); mo.disconnect() }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Experience />
        <Projects />
        <Photography />
        <Videos />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
