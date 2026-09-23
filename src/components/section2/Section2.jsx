import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Section2 = () => {
  return (
    <div id='about' className='w-full bg-[#344C36] px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-7xl flex-col items-center justify-center gap-10 lg:flex-row lg:gap-12 xl:gap-16'>
        <Leftcontent />
        <Rightcontent />
      </div>
    </div>
  )
}

export default Section2
