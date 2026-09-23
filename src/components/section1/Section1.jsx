import React from 'react'
import Navbar from './Navbar'
import Center from './Center'

const Section1 = () => {
  return (
    <div id='home' className='min-h-screen w-full overflow-hidden bg-[#f4f4f4] pt-48 md:pt-32'>
      <Navbar />
      <Center />
    </div>
  )
}

export default Section1
