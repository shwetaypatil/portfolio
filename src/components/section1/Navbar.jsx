import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-7xl -translate-x-1/2 md:top-6'>

      {/* Main Navbar */}
      <div className='flex h-[72px] items-center justify-between rounded-full bg-[#344C36] px-4 text-white shadow-lg sm:px-6 md:px-8'>

        {/* Logo */}
        <h5 className='font-sans text-xl font-semibold sm:text-2xl'>
          <span className='mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 font-semibold text-[#344C36]'>
            S
          </span>
          Shweta.
        </h5>

        {/* Desktop Menu */}
        <ul className='hidden items-center justify-center gap-3 text-sm text-amber-50 sm:gap-6 md:flex md:text-base'>
          <li>
            <a href='#home' className='cursor-pointer hover:underline'>
              Home
            </a>
          </li>

          <li>
            <a href='#about' className='cursor-pointer hover:underline'>
              About
            </a>
          </li>

          <li>
            <a href='#tools' className='cursor-pointer hover:underline'>
              Tools
            </a>
          </li>

          <li>
            <a href='#projects' className='cursor-pointer hover:underline'>
              Projects
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex h-10 w-10 items-center justify-center text-amber-400 md:hidden'
          aria-label='Toggle menu'
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Contact Button */}
        <a
          href='#contact'
          className='hidden cursor-pointer rounded-full bg-[#f4f4f4] px-5 py-2 font-semibold text-[#344C36] transition-colors duration-300 hover:bg-amber-400 hover-float md:block'
        >
          Contact Me
        </a>

      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className='absolute right-0 top-[82px] w-full rounded-3xl bg-[#344C36] p-6 text-white shadow-xl md:hidden'>

          <div className='flex flex-col gap-5'>

            <a
              href='#home'
              onClick={() => setIsOpen(false)}
              className='hover:text-amber-400'
            >
              Home
            </a>

            <a
              href='#about'
              onClick={() => setIsOpen(false)}
              className='hover:text-amber-400'
            >
              About
            </a>

            <a
              href='#tools'
              onClick={() => setIsOpen(false)}
              className='hover:text-amber-400'
            >
              Tools
            </a>

            <a
              href='#projects'
              onClick={() => setIsOpen(false)}
              className='hover:text-amber-400'
            >
              Projects
            </a>

            <a
              href='#contact'
              onClick={() => setIsOpen(false)}
              className='hover:text-amber-400'
            >
              Contact Me
            </a>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar