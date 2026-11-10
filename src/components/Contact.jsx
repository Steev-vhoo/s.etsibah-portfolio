import { useState } from 'react'
import { site } from '../data/site.js'
import { Arrow, SocialIcon } from './Icons.jsx'
import SectionHead from './SectionHead.jsx'

const digits = (n) => n.replace(/[^\d]/g, '')

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const socials = site.socials.filter((s) => s.url)
  const viaEmail = Boolean(site.email)

  const submit = (e) => {
    e.preventDefault()
    const subject = form.subject || 'Project enquiry'
    if (viaEmail) {
      const body = `${form.message}\n\n— ${form.name} (${form.email})`
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    } else {
      const text = `Hi Stephen, I'm ${form.name} (${form.email}).\n\n${subject}\n${form.message}`
      window.open(`https://wa.me/${digits(site.phone)}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <div className="contact-info reveal">
          <SectionHead eyebrow="Let's Talk" accent="Good Ideas" rest="Deserve to Exist" />
          <p>Have an idea, a brand, a story or a project that needs a creative perspective? I'd love to hear about it. Let's start a conversation.</p>
          <ul className="contact-list">
            {site.email && <li><span>Email</span><a href={`mailto:${site.email}`}>{site.email}</a></li>}
            <li><span>Phone</span><a href={`tel:+${digits(site.phone)}`}>{site.phone}</a></li>
            <li><span>Location</span>{site.location.replace(/^based in /, '')}</li>
          </ul>
          {socials.length > 0 && (
            <div className="socials">
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}><SocialIcon name={s.icon} size={15} /></a>
              ))}
            </div>
          )}
        </div>
        <form className="contact-form reveal" onSubmit={submit}>
          <div className="row">
            <label>Name<input required value={form.name} onChange={set('name')} placeholder="Your name" /></label>
            <label>Email<input required type="email" value={form.email} onChange={set('email')} placeholder="you@email.com" /></label>
          </div>
          <label>Subject<input value={form.subject} onChange={set('subject')} placeholder="Project enquiry" /></label>
          <label>Message<textarea required rows="5" value={form.message} onChange={set('message')} placeholder="Tell me about your idea, brand or project…" /></label>
          <button className="btn btn-orange btn-lg" type="submit">{viaEmail ? 'Send Message' : 'Send via WhatsApp'} <span className="btn-ico white"><Arrow size={14} rotate={0} /></span></button>
          <p className="form-note">Creativity / Strategy / Connection</p>
        </form>
      </div>
    </section>
  )
}
