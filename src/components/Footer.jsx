import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-amber-400 px-4 py-5 md:px-8 lg:px-10'>
      <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 text-lg font-semibold text-gray-900 sm:gap-5 sm:text-xl lg:flex-nowrap lg:justify-between lg:text-2xl'>
        <span>Creative Thinker</span>
        <span className='text-2xl font-bold sm:text-3xl lg:text-4xl'>✳</span>

        <span>Always Learning</span>
        <span className='text-2xl font-bold sm:text-3xl lg:text-4xl'>✳</span>

        <span>Problem Solver</span>
        <span className='text-2xl font-bold sm:text-3xl lg:text-4xl'>✳</span>

        <span>Tech Explorer</span>
      </div>
    </div>
  )
}

export default Footer
