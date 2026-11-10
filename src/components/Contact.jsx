import { useState } from 'react'
import { site } from '../data/site.js'
import { Arrow, SocialIcon } from './Icons.jsx'
import SectionHead from './SectionHead.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(form.subject || 'Project enquiry')}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <div className="contact-info reveal">
          <SectionHead eyebrow="Get In Touch" accent="Let's Work" rest="Together" />
          <p>Have a project in mind or just want to say hi? Send a message and I'll get back to you within 24 hours.</p>
          <ul className="contact-list">
            <li><span>Email</span><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><span>Phone</span><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></li>
            <li><span>Location</span>{site.location.replace(/^based in /, '')}</li>
          </ul>
          <div className="socials">
            {site.socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}><SocialIcon name={s.icon} size={15} /></a>
            ))}
          </div>
        </div>
        <form className="contact-form reveal" onSubmit={submit}>
          <div className="row">
            <label>Name<input required value={form.name} onChange={set('name')} placeholder="Your name" /></label>
            <label>Email<input required type="email" value={form.email} onChange={set('email')} placeholder="you@email.com" /></label>
          </div>
          <label>Subject<input value={form.subject} onChange={set('subject')} placeholder="Project enquiry" /></label>
          <label>Message<textarea required rows="5" value={form.message} onChange={set('message')} placeholder="Tell me about your project…" /></label>
          <button className="btn btn-orange btn-lg" type="submit">Send Message <span className="btn-ico white"><Arrow size={14} rotate={0} /></span></button>
        </form>
      </div>
    </section>
  )
}
