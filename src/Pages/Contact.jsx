import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: 'Inquiry', message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`Type: ${form.type}\n\n${form.message}`)
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="bg-base-200 border-b border-base-300">
        <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in-up">
          <span className="badge badge-ghost badge-soft mb-4">/contact</span>
          <h1 className="text-3xl sm:text-4xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-muted max-w-2xl">
            Have a project to build, an engagement to run, or just want to say hi? My inbox is
            open.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <h2 className="card-title text-xl mb-2">Send a message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="floating-label w-full">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="input input-lg w-full"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <span>Name</span>
                  </label>
                </div>

                <div>
                  <label className="floating-label validator w-full">
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="input input-lg w-full"
                      value={form.email}
                      onChange={handleChange}
                      aria-describedby="email-hint"
                      required
                    />
                    <span>Email</span>
                  </label>
                  <p id="email-hint" className="validator-hint hidden">
                    Please enter a valid email address
                  </p>
                </div>

                <div>
                  <label className="select select-lg w-full">
                    <span className="label">Type</span>
                    <select name="type" value={form.type} onChange={handleChange}>
                      <option>Inquiry</option>
                      <option>General</option>
                    </select>
                  </label>
                </div>

                <div>
                  <label className="floating-label w-full">
                    <textarea
                      name="message"
                      placeholder="Tell me about your project or engagement..."
                      className="textarea textarea-lg w-full"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                    <span>Message</span>
                  </label>
                </div>

                <button type="submit" className="btn btn-primary w-full sm:w-auto">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}