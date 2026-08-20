import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return
      handler()
    }
    document.addEventListener('pointerdown', listener)
    return () => document.removeEventListener('pointerdown', listener)
  }, [ref, handler])
}

function navLinkClass({ isActive }) {
  return `btn btn-ghost btn-sm font-sans rounded-btn ${
    isActive ? 'btn-active' : ''
  }`
}

const projects = [
  { to: '/projects/development', label: 'Development' },
  { to: '/projects/cybersecurity', label: 'Cybersecurity' },
]

function Chevron({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)

  const desktopDropdownRef = useRef(null)
  const mobileDropdownRef = useRef(null)

  const closeProjects = useCallback(() => setIsProjectsOpen(false), [])
  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false)
    setMobileProjectsOpen(false)
  }, [])

  useClickOutside(desktopDropdownRef, closeProjects)
  useClickOutside(mobileDropdownRef, closeMobileMenu)

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        closeProjects()
        closeMobileMenu()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeProjects, closeMobileMenu])

  return (
    <div className="navbar bg-base-100/80 backdrop-blur border-b border-base-300 sticky top-0 z-50 px-4 sm:px-6">
      {/* Mobile Menu & Logo Start */}
      <div className="navbar-start">
        <div ref={mobileDropdownRef} className="relative lg:hidden">
          <button
            type="button"
            className="btn btn-ghost btn-circle"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-haspopup="menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <div
            className={`absolute left-0 mt-3 w-60 rounded-box bg-base-100 border border-base-300 shadow-lg transition-all duration-150 ${
              mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
            }`}
          >
            <ul className="menu menu-sm p-2">
              <li>
                <NavLink
                  to="/about"
                  onClick={() => {
                    setMobileOpen(false)
                    document.activeElement?.blur()
                  }}
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-btn px-4 py-3 text-sm font-medium hover:bg-base-200"
                  aria-expanded={mobileProjectsOpen}
                  onClick={() => setMobileProjectsOpen((o) => !o)}
                >
                  Projects
                  <Chevron open={mobileProjectsOpen} />
                </button>
                {mobileProjectsOpen && (
                  <ul className="ms-4 mt-1 space-y-1">
                    {projects.map((p) => (
                      <li key={p.to}>
                        <NavLink
                          to={p.to}
                          className="block rounded-btn px-4 py-2 text-sm hover:bg-base-200"
                          onClick={closeMobileMenu}
                        >
                          {p.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => {
                    setMobileOpen(false)
                    document.activeElement?.blur()
                  }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Link to="/" className="inline-block leading-none">
          <img src={logo} alt="OHD logo" className="h-8 w-auto object-contain [image-rendering:-webkit-optimize-contrast] [shape-rendering:geometricPrecision]" />
        </Link>
      </div>

      {/* Desktop Navigation Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 px-1">
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About Me
            </NavLink>
          </li>
          <li ref={desktopDropdownRef}>
            <button
              type="button"
              className="btn btn-ghost btn-sm font-sans rounded-btn"
              aria-expanded={isProjectsOpen}
              aria-haspopup="menu"
              onClick={() => setIsProjectsOpen((o) => !o)}
            >
              Projects
              <Chevron open={isProjectsOpen} />
            </button>
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-48 rounded-box bg-base-100 border border-base-300 shadow-lg transition-all duration-150 z-10 ${
                isProjectsOpen ? 'visible opacity-100' : 'invisible opacity-0'
              }`}
            >
              <ul className="menu p-2">
                {projects.map((p) => (
                  <li key={p.to}>
                    <NavLink to={p.to} onClick={closeProjects}>
                      {p.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Contact Button End */}
      <div className="navbar-end gap-2">
        <Link to="/contact" className="btn btn-primary btn-sm font-sans">
          Get in Touch
        </Link>
      </div>
    </div>
  )
}