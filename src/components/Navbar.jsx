export default function Navbar() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="navbar">
      <a href="#home" className="brand">
        Divya
      </a>
      <div className="nav-links">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <a href="#contact" className="btn btn-primary nav-cta">
        Hire Me
      </a>
    </nav>
  )
}
