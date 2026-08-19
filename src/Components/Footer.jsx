import { Link } from 'react-router-dom'

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/your-username',
    path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/OuahidMA',
    path: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ouahidma',
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
]

const quickLinks = [
  { to: '/about', label: 'About Me' },
  { to: '/projects/development', label: 'Development' },
  { to: '/projects/cybersecurity', label: 'Cybersecurity' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-100 border-t border-base-300 text-base-content px-6 sm:px-10 py-10">
      <aside>
        <Link to="/" className="font-sans text-2xl font-bold tracking-tight">
          OHD
        </Link>
        <p className="text-sm text-muted">
          Builder &amp; Auditor.
          <br />
          &copy; 2026 All Rights Reserved.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title opacity-80">Navigate</h6>
        <div className="grid grid-flow-col gap-4">
          {quickLinks.map((link) => (
            <Link key={link.to} to={link.to} className="link link-hover text-sm">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      <nav>
        <h6 className="footer-title opacity-80">Social</h6>
        <div className="grid grid-flow-col gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="btn btn-ghost btn-square btn-sm rounded-box hover:bg-base-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                <path d={link.path} />
              </svg>
            </a>
          ))}
        </div>
      </nav>
    </footer>
  )
}
