import chapterBookstore from '../assets/proj-imgs/CHAPTER-Bookstore.png'

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
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* CARD 1 */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <figure>
                <img src={chapterBookstore} alt="Chapter Bookstore" className="w-full object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Chapter Bookstore
                  <div className="flex items-center gap-2 text-espresso">
                    <i className="devicon-html5-plain text-xl" title="HTML"></i>
                    <i className="devicon-javascript-plain text-xl" title="JavaScript"></i>
                    <i className="devicon-tailwindcss-plain text-xl" title="Tailwind CSS"></i>
                    <i className="devicon-css3-plain text-xl" title="CSS"></i>
                  </div>
                </h2>
                {/* Description */}
                <p>An online bookstore developed using HTML and JavaScript and a mixture of Tailwind and Native CSS</p>
                <div className="justify-end card-actions">
                  <a href="https://github.com/OuahidMA/chapter-e-com" target="_blank" className="btn btn-outline btn-sm">View Source Code</a>
                  <a href="https://chapter-pi.vercel.app/" target="_blank" className="btn btn-primary btn-sm">Live Demo</a>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            {/*
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">
                  Project Two
                  <div className="badge badge-primary badge-outline">Node.js</div>
                </h2>
                <p>Add a short description of what this project does and what it was built with.</p>
                <div className="justify-end card-actions">
                  <a href="#" className="btn btn-outline btn-sm">View Source Code</a>
                  <a href="#" className="btn btn-primary btn-sm">Live Demo</a>
                </div>
              </div>
            </div>
            */}

            {/* CARD 3 */}
            {/*
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">
                  Project Three
                  <div className="badge badge-primary badge-outline">JavaScript</div>
                </h2>
                <p>Add a short description of what this project does and what it was built with.</p>
                <div className="justify-end card-actions">
                  <a href="#" className="btn btn-outline btn-sm">View Source Code</a>
                  <a href="#" className="btn btn-primary btn-sm">Live Demo</a>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>
    </div>
  )
}