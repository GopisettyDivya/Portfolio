const education = [
  {
    school: 'Annamacharya Institute of Technology and Sciences',
    years: '2021 – 2025',
    degree: "Bachelor's, Computer Science Engineering",
    grade: 'GPA: 8.3',
  },
  {
    school: 'Narayana Junior College',
    years: '2019 – 2021',
    degree: 'Certification, MPC',
    grade: 'GPA: 7.21',
  },
  {
    school: 'Narayana Group of School',
    years: '2018 – 2019',
    degree: 'Certification, SSC',
    grade: 'GPA: 9.2',
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-heading">
        <p className="section-tag">Education &amp; Certifications</p>
        <h2>My learning journey</h2>
      </div>
      <div className="edu-list">
        {education.map((item) => (
          <div key={item.school} className="edu-item">
            <div className="edu-marker" />
            <div className="edu-content">
              <div className="edu-head">
                <h3>{item.school}</h3>
                <span className="edu-years">{item.years}</span>
              </div>
              <p>{item.degree} · {item.grade}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cert-grid">
        <div className="cert-card">
          <span className="fact-icon">🎖️</span>
          <h4>Vice President — CSE Student Association</h4>
          <p>
            Annamacharya Institute of Technology and Sciences · July 2023 – July
            2024
          </p>
        </div>
        <div className="cert-card">
          <span className="fact-icon">☁️</span>
          <h4>Google Cloud Computing Foundations</h4>
          <p>Google Cloud Learning Services · Aug – Oct 2024</p>
        </div>
        <div className="cert-card">
          <span className="fact-icon">🏆</span>
          <h4>Paper Presentation</h4>
          <p>3rd prize at the Samsleshna event</p>
        </div>
        <div className="cert-card">
          <span className="fact-icon">📜</span>
          <h4>Social Innovation in Industry 4.0</h4>
          <p>NPTEL Certification · Scored 70%</p>
        </div>
      </div>
    </section>
  )
}
