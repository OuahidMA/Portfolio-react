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
          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body items-center text-center py-14">
              <h2 className="card-title text-xl">
                Projects coming soon
                <div className="badge badge-primary badge-outline">In progress</div>
              </h2>
              <p className="text-sm text-muted max-w-md">
                This section is being populated. Check back soon for new projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}