import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Footer2 = () => {
  return (
    <div className='w-full bg-[#f4f4f4] px-4 py-6 sm:px-6 lg:px-12'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-gray-800 sm:flex-row sm:text-left'>
        <p className='text-sm sm:text-base'>
          Copyright © 2026 <span className='text-amber-600'>Shweta</span>. All rights reserved.
        </p>

        <div className='flex items-center gap-4'>
          <a href='https://www.linkedin.com/in/shweta-patil-5b0324259/' target='_blank' rel='noopener noreferrer' className='flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 hover:text-blue-600 hover-float'>
            <FaLinkedin className='text-2xl sm:text-3xl' />
          </a>

          <a href='https://github.com/shwetaypatil' target='_blank' rel='noopener noreferrer' className='flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 hover:text-black hover-float'>
            <FaGithub className='text-2xl sm:text-3xl' />
          </a>

          <a href='https://www.instagram.com/shweta_1605?igsh=MTIxdGVvdzcyN2dlYg==' target='_blank' rel='noopener noreferrer' className='flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 hover:text-pink-600 hover-float'>
            <FaInstagram className='text-2xl sm:text-3xl' />
          </a>

          <a href='mailto:shwetaypatil@gmail.com' className='flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 hover:text-orange-700 hover-float'>
            <FaEnvelope className='text-2xl sm:text-3xl' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer2
