export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <p className="section-tag">About Me</p>
        <h2>Turning ideas into working software</h2>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I&apos;m a Computer Science graduate from Annamacharya Institute of
            Technology and Sciences (2021–2025) with hands-on experience in
            full-stack development through internships and real-world projects.
          </p>
          <p>
            Currently interning at Broadmind Technologies, where I develop
            full-stack features for a health assessment platform — building
            frontend modules with React.js, designing REST APIs with Flask, and
            working with MySQL. I love turning complex problems into simple,
            elegant solutions.
          </p>
          <ul className="about-list">
            <li>Full-stack development (React, Flask, MySQL)</li>
            <li>REST API design, Swagger documentation &amp; Postman</li>
            <li>Blockchain-based solutions (Web3.js, MetaMask)</li>
            <li>Collaborative Git/GitHub workflows</li>
            <li>
              Leadership — Vice President, CSE Student Association (2023–24)
            </li>
          </ul>
        </div>
        <div className="about-facts">
          <div className="fact-card">
            <span className="fact-icon">🎓</span>
            <h3>Degree</h3>
            <p>B.Tech, Computer Science Engineering · GPA 8.3</p>
          </div>
          <div className="fact-card">
            <span className="fact-icon">💼</span>
            <h3>Internship</h3>
            <p>Broadmind Technologies — Full-Stack Developer</p>
          </div>
          <div className="fact-card">
            <span className="fact-icon">📍</span>
            <h3>Location</h3>
            <p>Kadapa, Andhra Pradesh, India</p>
          </div>
          <div className="fact-card">
            <span className="fact-icon">🎖️</span>
            <h3>Leadership</h3>
            <p>
              Vice President, CSE Student Association, Annamacharya Institute
              (July 2023 – July 2024)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
