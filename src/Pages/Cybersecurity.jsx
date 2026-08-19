const cyberProjects = [
  'Full-scope penetration tests of web applications',
  'Internal network enumeration across Windows & Linux',
  'Custom tooling built with Python and C',
  'Vulnerability assessment & remediation guidance',
]

export default function Cybersecurity() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="bg-base-200 border-b border-base-300">
        <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in-up">
          <span className="badge badge-ghost badge-soft mb-4">/projects/cybersecurity</span>
          <h1 className="text-3xl sm:text-4xl font-bold">Cybersecurity</h1>
          <p className="mt-4 text-muted max-w-2xl">
            Engagements, labs, and research across offensive security.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body items-center text-center py-14">
              <div className="p-4 rounded-box bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h2 className="card-title text-xl mt-4">Projects coming soon</h2>
              <p className="text-sm text-muted max-w-md">
                This section is being populated. While it is, here is what you will find here:
              </p>
              <ul className="menu bg-base-100 border border-base-300 rounded-box w-full max-w-md text-left mt-4">
                {cyberProjects.map((item) => (
                  <li key={item}>
                    <a className="text-sm">
                      <span className="text-primary">▸</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
