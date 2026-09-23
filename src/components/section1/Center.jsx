import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Center = () => {
  return (
    <div className='mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-7xl flex-col items-center justify-center gap-10 px-4 pb-10 sm:px-6 md:min-h-[calc(100vh-8rem)] md:flex-row lg:gap-12 xl:gap-16'>
      <Leftcontent />
      <Rightcontent />
    </div>
  )
}

export default Center
