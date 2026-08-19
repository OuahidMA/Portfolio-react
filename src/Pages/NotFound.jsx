import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] grid place-items-center px-6">
      <div className="text-center animate-fade-in-up">
        <p className="text-7xl sm:text-8xl font-bold text-primary">404</p>
        <h1 className="text-2xl sm:text-3xl font-bold mt-4">Page not found</h1>
        <p className="mt-3 text-muted">
          The route you&apos;re looking for doesn&apos;t exist (or moved).
        </p>
        <Link to="/" className="btn btn-primary mt-8">
          Back Home
        </Link>
      </div>
    </div>
  )
}
