import React from 'react'
import { GraduationCap, BriefcaseBusiness } from 'lucide-react'

const Section5 = () => {
  return (
    <div className='w-full bg-[#f4f4f4] px-4 py-12 sm:px-6 lg:px-12'>
      <h4 className='mb-4 text-center text-xl text-gray-900 sm:text-2xl'>
        <span className='pr-2 text-2xl text-amber-500 sm:text-3xl'>-</span>
        Education & Work
      </h4>

      <h2 className='mb-8 text-center text-3xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl'>
        My <span className='font-normal italic text-amber-500'>Academic and Professional</span> Journey
      </h2>

      <div className='mx-auto flex max-w-7xl flex-col gap-6 xl:flex-row'>
        <div className='w-full rounded-2xl border border-gray-300 bg-gray-200 p-6 sm:p-8 xl:w-1/2'>
          <div className='flex items-center gap-4 sm:gap-6'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 sm:h-14 sm:w-14'>
              <GraduationCap className='text-2xl font-semibold text-gray-900 sm:text-3xl' />
            </div>

            <h4 className='text-2xl font-semibold text-gray-900 sm:text-3xl'>Education</h4>
          </div>

          <div className='my-6 h-px w-full bg-gray-300' />

          <div className='mb-8 border-l-4 border-gray-300 pl-4 sm:pl-5'>
            <p className='text-base text-gray-500 sm:text-xl'>2022-2026</p>
            <h3 className='text-lg font-semibold text-gray-900 sm:text-2xl'>Dr. D. Y. Patil College of Engineering, Kolhapur</h3>
            <p className='text-base text-gray-500 sm:text-xl'>Bachelor in Computer Science & Technology</p>
          </div>

          <div className='mb-8 border-l-4 border-gray-300 pl-4 sm:pl-5'>
            <p className='text-base text-gray-500 sm:text-xl'>2021-2022</p>
            <h3 className='text-lg font-semibold text-gray-900 sm:text-2xl'>Dudhsakhar Vidyaniketan College, Bidri</h3>
            <p className='text-base text-gray-500 sm:text-xl'>Higher Secondary Education (Science)</p>
          </div>

          <div className='border-l-4 border-gray-300 pl-4 sm:pl-5'>
            <p className='text-base text-gray-500 sm:text-xl'>2019-2020</p>
            <h3 className='text-lg font-semibold text-gray-900 sm:text-2xl'>Raghunath New English School, Kasaba Walve</h3>
            <p className='text-base text-gray-500 sm:text-xl'>Secondary Education</p>
          </div>
        </div>

        <div className='w-full rounded-2xl border border-gray-300 bg-gray-200 p-6 sm:p-8 xl:w-1/2'>
          <div className='flex items-center gap-4 sm:gap-6'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 sm:h-14 sm:w-14'>
              <BriefcaseBusiness className='text-2xl font-semibold text-gray-900 sm:text-3xl' />
            </div>
            <h3 className='text-2xl font-semibold text-gray-900 sm:text-3xl'>Work Experience</h3>
          </div>

          <div className='my-6 h-px w-full bg-gray-300' />

          <div className='border-l-4 border-gray-300 pl-4 sm:pl-5'>
            <p className='text-base text-gray-500 sm:text-xl'>June 2025 - July 2025</p>
            <h3 className='text-lg font-semibold text-gray-900 sm:text-2xl'>Anvistar ITS Pvt. Ltd.</h3>
            <p className='text-base text-gray-500 sm:text-xl'>Python Developer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5
