import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50">
      {/* Mobile Menu & Logo Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a href="">About Me</a></li>
            <li>
              <a>Projects</a>
              <ul className="p-2">
                <li><a href="">Development</a></li>
                <li><a href="">CyberSecurity</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <a href="" className="btn btn-ghost text-xl font-sans">OHD</a>
      </div>

      {/* Desktop Navigation Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="" className="font-sans">About Me</a></li>
          <li>
            <details>
              <summary className="font-sans">Projects</summary>
              <ul className="p-2 bg-base-100 w-44 z-1 shadow-md rounded-box">
                <li><a href="">Development</a></li>
                <li><a href="">CyberSecurity</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* Contact Button End */}
      <div className="navbar-end">
        <a href="" className="btn font-sans">Get in Touch</a>
      </div>
    </div>
  )
}