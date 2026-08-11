const skillGroups = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React.js', 'Flask', 'Flask-RESTX', 'Tailwind CSS'],
  },
  {
    title: 'API & Development Tools',
    skills: ['REST APIs', 'Swagger', 'Postman', 'Git', 'GitHub Actions'],
  },
  {
    title: 'Databases & Platforms',
    skills: ['MySQL', 'Vite', 'VS Code', 'MySQL Workbench', 'AWS'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <p className="section-tag">Skills</p>
        <h2>My tech stack</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-card">
            <h3>{group.title}</h3>
            <div className="skill-chips">
              {group.skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
