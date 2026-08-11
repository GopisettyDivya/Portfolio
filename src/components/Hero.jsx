export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <p className="hero-tagline">
          <span className="dot" />
          Open to Software Developer roles
        </p>
        <h1 className="hero-title">
          Hi, I&apos;m <span className="gradient-text">Divya Gopisetty</span>
          <br />
          Full-Stack Developer &amp; IT Fresher
        </h1>
        <p className="hero-subtitle">
          Computer Science graduate with hands-on experience in full-stack
          development using React.js, Python, Flask, and MySQL. I build
          responsive web apps, REST APIs, and database-driven solutions — ready
          to build scalable, impactful applications.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">5+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-value">8.3</span>
            <span className="stat-label">CGPA</span>
          </div>
        </div>
      </div>
      <div className="hero-card">
        <img
          className="avatar"
          src="/profile.jpg"
          alt="Divya Gopisetty"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.parentElement
              .querySelector('.avatar-fallback')
              .style.display = 'flex'
          }}
        />
        <div className="avatar avatar-fallback">DG</div>
        <h3>Divya Gopisetty</h3>
        <p>Full-Stack Developer · CSE 2025</p>
        <div className="hero-card-skills">
          <span>React</span>
          <span>Python</span>
          <span>Flask</span>
          <span>MySQL</span>
        </div>
      </div>
    </section>
  )
}
