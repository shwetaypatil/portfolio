import React from 'react'
import profile from '../../assets/profile.png'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'


const Rightcontent = () => {
  return (
    <div className='flex w-full justify-center md:w-[48%]'>
      <div className='relative aspect-square w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[560px]'>
        <div className='absolute inset-[15%] rounded-[43%] bg-amber-500'></div>

        <img src={profile} alt="profile" className='absolute inset-x-0 bottom-0 z-10 mx-auto h-[98%] w-[94%] object-contain object-bottom' />

        <div className='absolute bottom-[13%] left-0 z-20 rounded-full bg-[#344C36] px-3 py-2 text-xs text-white float sm:px-5 sm:py-3 sm:text-sm lg:text-base'>Frontend Developer</div>

        <div className='absolute right-0 top-[50%] z-20 rounded-full bg-amber-500 px-3 py-2 text-xs text-[#344C36] float sm:px-5 sm:py-3 sm:text-sm lg:text-base'>Full Stack Developer</div>

        <a href="https://www.linkedin.com/in/shweta-patil-5b0324259/" target='_blank' rel='noopener noreferrer' className='absolute left-[19%] top-[9%] z-30 flex h-9 w-9 items-center justify-center rounded-full bg-[#f4f4f4] text-[#344C36] shadow-md transition-colors duration-300 hover:bg-blue-600 hover:text-[#f4f4f4] float sm:h-11 sm:w-11 lg:h-12 lg:w-12'>
          <FaLinkedin className='text-lg sm:text-xl'/>
        </a>

        <a href="https://github.com/shwetaypatil" target='_blank' rel='noopener noreferrer' className='absolute bottom-[34%] left-[14%] z-30 flex h-9 w-9 items-center justify-center rounded-full bg-[#f4f4f4] text-[#344C36] shadow-md transition-colors duration-300 hover:bg-gray-900 hover:text-[#f4f4f4] float sm:h-11 sm:w-11 lg:h-12 lg:w-12'>
          <FaGithub className='text-lg sm:text-xl'/>
        </a>

        <a href="https://www.instagram.com/shweta_1605?igsh=MTIxdGVvdzcyN2dlYg==" target='_blank' rel='noopener noreferrer' className='absolute right-[20%] top-[24%] z-30 flex h-9 w-9 items-center justify-center rounded-full bg-[#f4f4f4] text-[#344C36] shadow-md transition-colors duration-300 hover:bg-pink-500 hover:text-[#f4f4f4] float sm:h-11 sm:w-11 lg:h-12 lg:w-12'>
          <FaInstagram className='text-lg sm:text-xl'/>
        </a>

        <a href="mailto:shwetaypatil05@gmail.com" className='absolute bottom-[20%] right-[20%] z-30 flex h-9 w-9 items-center justify-center rounded-full bg-[#f4f4f4] text-[#344C36] shadow-md transition-colors duration-300 hover:bg-orange-600 hover:text-[#f4f4f4] float sm:h-11 sm:w-11 lg:h-12 lg:w-12'>
          <FaEnvelope className='text-lg sm:text-xl'/>
        </a>
      </div>

    </div>
  )
}

export default Rightcontent
