const devProjects = [
  'Full-stack web applications (React, Node.js, Express)',
  'REST APIs and database design (SQL & NoSQL)',
  'Automation and scripting with Python',
  'Low-level systems work in C',
]

export default function Development() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="bg-base-200 border-b border-base-300">
        <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in-up">
          <span className="badge badge-ghost badge-soft mb-4">/projects/development</span>
          <h1 className="text-3xl sm:text-4xl font-bold">Development</h1>
          <p className="mt-4 text-muted max-w-2xl">
            A curated collection of software I have designed and built.
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h2 className="card-title text-xl mt-4">Projects coming soon</h2>
              <p className="text-sm text-muted max-w-md">
                This section is being populated. While it is, here is what you will find here:
              </p>
              <ul className="menu bg-base-100 border border-base-300 rounded-box w-full max-w-md text-left mt-4">
                {devProjects.map((item) => (
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
