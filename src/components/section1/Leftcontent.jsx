import React from 'react'

const Leftcontent = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-6 text-center md:w-[52%] md:items-start md:text-left'>
      <div className="relative inline-block border-2 border-black px-5 py-2 sm:px-8 sm:py-3">
        <span className="text-lg font-normal sm:text-xl lg:text-2xl">Hello There!</span>

        {/* top-left */}
        <span className="absolute -left-2 -top-2 h-4 w-6 border-2 border-black bg-amber-400"></span>

        {/* top-right */}
        <span className="absolute -right-2 -top-2 h-4 w-6 border-2 border-black bg-amber-400"></span>

        {/* bottom-left */}
        <span className="absolute -bottom-2 -left-2 h-4 w-6 border-2 border-black bg-amber-400"></span>

        {/* bottom-right */}
        <span className="absolute -bottom-2 -right-2 h-4 w-6 border-2 border-black bg-amber-400"></span>
       </div>

      <h2 className='max-w-3xl text-4xl font-medium leading-tight text-gray-800 sm:text-5xl lg:text-6xl'>
        I'm <span className='italic text-amber-400 underline'>Shweta Patil,</span>
        <br className='hidden lg:block' /> Software Developer Based in India.
      </h2>

      <p className='max-w-xl text-base text-gray-500 sm:text-lg lg:text-xl'>
        I'm a recent CSE graduate, exploring different technologies.
      </p>

      <button className='cursor-pointer rounded-full border-2 border-gray-900 px-7 py-3 text-lg leading-tight text-gray-900 hover-float sm:text-xl'>
        <a href="mailto:shwetaypatil05@gmail.com?subject=Job Opportunity">Hire Me</a>
      </button>
    </div>
  )
}

export default Leftcontent
