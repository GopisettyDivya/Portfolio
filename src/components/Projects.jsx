const projects = [
  {
    title: 'Blockchain-Based KYC for Credit Allocation',
    tech: ['JSP', 'Web3.js', 'MetaMask', 'SQL'],
    type: 'College Project',
    description:
      'Decentralized KYC system enabling secure, transparent credit allocation in banking with tamper-proof identity verification and role-based interfaces for customers and banks.',
  },
  {
    title: 'Ayraa Studio — Photography Studio Platform',
    tech: ['React', 'Vite', 'Tailwind', 'Flask', 'MySQL'],
    type: 'Personal Project',
    description:
      'Full-stack platform for a photography studio with an interactive quote builder, dynamic pricing, admin dashboard for bookings and reviews, and WhatsApp inquiry integration.',
  },
  {
    title: 'Health Assessment Platform',
    tech: ['React.js', 'Flask', 'MySQL', 'REST APIs'],
    type: 'Internship · Broadmind Technologies',
    description:
      'Full-stack features for a health assessment platform — migrated legacy HTML to reusable React components, integrated secure REST APIs, and implemented score calculation and user registration.',
  },
  {
    title: 'Personal Portfolio Website',
    tech: ['React', 'Vite', 'CSS'],
    type: 'Personal Project',
    description:
      'This very website — a modern, responsive single-page portfolio built with React and Vite to showcase my skills, projects, and experience.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p className="section-tag">Projects</p>
        <h2>Things I&apos;ve built</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-icon">{project.title.charAt(0)}</div>
            <span className="project-type">{project.type}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="skill-chips">
              {project.tech.map((t) => (
                <span key={t} className="chip chip-small">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
