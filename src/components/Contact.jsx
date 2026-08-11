import { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzeprozb'

const EMAIL = 'gopisettydivyasree@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const sendViaMailto = () => {
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    if (FORMSPREE_ENDPOINT) {
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (res.ok) {
          setStatus('success')
          setForm({ name: '', email: '', message: '' })
        } else {
          setStatus('error')
        }
      } catch {
        setStatus('error')
      }
      return
    }

    sendViaMailto()
    setStatus('mailto')
  }

  return (
    <section id="contact" className="section">
      <div className="section-heading">
        <p className="section-tag">Contact</p>
        <h2>Let&apos;s build something together</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <p>
            I&apos;m actively looking for Software Developer roles. If you
            think I&apos;d be a good fit, let&apos;s talk!
          </p>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <a href="tel:+917093922716">+91 70939 22716</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>Kadapa, Andhra Pradesh, India</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🔗</span>
            <a
              href="https://linkedin.com/in/divya-gopisetty-6842b61b0"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/divya-gopisetty-6842b61b0
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={update('name')}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={update('email')}
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            value={form.message}
            onChange={update('message')}
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="form-status success">
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="form-status error">
              Something went wrong. Please email me directly or try again.
            </p>
          )}
          {status === 'mailto' && (
            <p className="form-status success">
              Your email app is opening — just press send.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
