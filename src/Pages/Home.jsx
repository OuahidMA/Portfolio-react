import { Link } from 'react-router-dom'
import Hero from '../Components/Hero'

const disciplines = [
  {
    title: 'Development',
    description:
      'Full-stack web applications with responsive front-ends, clean APIs, and flexible SQL / NoSQL back-ends.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    to: '/projects/development',
  },
  {
    title: 'Cybersecurity',
    description:
      'Full-scope penetration testing of applications and network infrastructure using structured, real-world methodology.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    to: '/projects/cybersecurity',
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-16 sm:py-20 bg-base-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Two disciplines, one approach</h2>
          <p className="mt-3 text-muted max-w-2xl mx-auto">
            I build things that work, then break them to make sure they keep working.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
            {disciplines.map((d) => (
              <Link
                key={d.title}
                to={d.to}
                className="card bg-base-100 border border-base-300 hover:border-primary/50 hover:shadow-lg transition-all duration-200 text-left group"
              >
                <div className="card-body">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-box bg-primary/10 text-primary">{d.icon}</div>
                    <h3 className="card-title text-xl">{d.title}</h3>
                  </div>
                  <p className="text-sm text-muted">{d.description}</p>
                  <span className="mt-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore projects →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
