import React from 'react'

export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Operating under two hats;<br /> Builder & Auditor.</h1>

                <span className='font-bold text-xl block mt-4'>
                    I'm a&nbsp;
                    <span className="text-rotate">
                        <span>
                            <span className="bg-teal-400 text-teal-800 px-2">Full-Stack Web Developer</span>
                            <span className="bg-red-400 text-red-800 px-2">Full-Scope Pentester</span>
                        </span>
                    </span>
                </span><br />

                <p className="py-6">
                    I design modern web applications and rigorously pentest both the application layer and network infrastracture for vulnerabilities before adversaries do
                </p>

                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
  )
}
