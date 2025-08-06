import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="w-full px-2 md:px-10 py-4 flex flex-row items-start">
      <div className="py-1 mr-2 md:hidden">
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
      </div>

      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col items-start cursor-pointer hover:text-blue-500">
          <h1 className="text-2xl font-semibold">Andrian Robby</h1>
          <span className="text-sm font-light">Frontend Developer</span>
        </div>
        <div className="hidden md:flex flex-row justify-end gap-2">
          <div className="flex flex-1 gap-2">
            <div className="px-4 py-2 hover:text-blue-500 flex items-center cursor-pointer">Skills</div>
            <div className="px-4 py-2 hover:text-blue-500 flex items-center cursor-pointer">Projects</div>
            <a
              id="linkedin-btn" 
              href="https://www.linkedin.com/in/andrian-robby-pratama-786401137/"
              target="_blank"
              className="px-4 py-2 hover:text-blue-500 flex items-center cursor-pointer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b text-gray-950">
          <h3 className="text-lg font-semibold">Menu</h3>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-2 p-4 text-gray-950">
          <div className="px-4 py-2 hover:text-blue-500 flex items-center cursor-pointer">Skills</div>
          <div className="px-4 py-2 hover:text-blue-500 flex items-center cursor-pointer">Projects</div>
          <a
            id="linkedin-btn" 
            href="https://www.linkedin.com/in/andrian-robby-pratama-786401137/"
            target="_blank"
            className="px-4 py-2 hover:text-blue-500 flex items-center cursor-pointer"
          >
            LinkedIn
          </a>
        </nav>
      </div>    
      
      { menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  )
}

export default Header
