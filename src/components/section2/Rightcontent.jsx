import React from 'react'
import { MoveRight } from 'lucide-react'
import Shweta_Patil from '../../assets/Shweta_Patil.pdf'

const Rightcontent = () => {
  return (
    <div className='relative flex w-full flex-col items-center gap-3 text-[#f4f4f4] lg:w-[55%]'>
      <div className='w-full max-w-2xl'>
        <h4 className='text-xl sm:text-2xl'>
          <span className='pr-2 text-2xl text-amber-500 sm:text-3xl'>-</span>
          About Me
        </h4>

        <h2 className='mt-5 text-3xl font-medium sm:text-4xl lg:text-5xl'>
          Who is {" "}
          <span className='text-amber-400 italic'>Shweta Patil?</span>
        </h2>

        <p className='mt-6 text-base text-gray-300 sm:text-lg lg:mt-8 lg:text-xl'>
          I'm a recent CSE graduate who enjoys exploring new technologies, building things, and learning through hands-on experience. I'm curious about how things work and like turning ideas into simple, practical solutions. I'm currently working on projects that help me discover my interests, improve my skills, and grow as a developer.
        </p>

        <div className='mt-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center lg:gap-3'>
          <button className='mt-1 flex items-center gap-3 rounded-full bg-amber-400 p-1 sm:mt-6'>
            <span className='rounded-full bg-[#344C36] px-4 py-4 text-sm sm:px-5 sm:py-4'>Download CV</span>
            <span className='rounded-full bg-[#f4f4f4] p-3 text-[#344C36]'>
              <MoveRight />
            </span>
          </button>

          <a href={Shweta_Patil} target='_blank' rel='noopener noreferrer' className='group relative m-2 text-2xl text-amber-400 dancing sm:text-3xl lg:m-4 lg:text-4xl'>
            Shweta Patil
            
            <span className='absolute -bottom-1 left-0.5 h-[2px] w-0 -translate-x-0.5 bg-amber-400 transition-all duration-500 group-hover:w-full'></span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Rightcontent
