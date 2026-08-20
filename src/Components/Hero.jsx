import { Link } from 'react-router-dom'
import Terminal from './Terminal'
import useTypewriter from '../hooks/useTypewriter'

const roles = ['Full-Stack Web Developer', 'Full-Scope Pentester', 'Security-Minded Builder']

const longestRole = roles.reduce((longest, r) => (r.length > longest.length ? r : longest), '')

export default function Hero() {
  const role = useTypewriter(roles)

  return (
    <section className="hero bg-base-200 min-h-[calc(100vh-4rem)] overflow-x-hidden">
      <div className="hero-content flex-col-reverse lg:grid lg:grid-cols-2 gap-12 py-16 max-w-full px-8 lg:px-16 items-center">
        <div className="w-full min-w-0 text-center lg:text-left animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Building software.
            <br />
            <span className="text-primary">Auditing</span> it too.
          </h1>
          <p className="mt-6 text-lg font-medium">
            I&apos;m a{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="invisible">{longestRole}</span>
              <span className="absolute inset-0 text-primary font-semibold text-left">
                {role}
                <span className="blinking-cursor">|</span>
              </span>
            </span>
          </p>
          <p className="py-6 max-w-3xl mx-auto lg:mx-0 text-muted">
            I design modern web applications and rigorously audit both the application layer and
            network infrastructure for vulnerabilities before adversaries do.
          </p>
          <div className="flex gap-3 justify-center lg:justify-start flex-wrap">
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="w-full min-w-0 max-w-3xl animate-fade-in-up [animation-delay:150ms]">
          <Terminal />
        </div>
      </div>
    </section>
  )
}
