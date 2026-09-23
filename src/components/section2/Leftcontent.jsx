import React from 'react'
import illustration from '../../assets/illustration.webp'

const Leftcontent = () => {
  return (
    <div className="flex w-full items-center justify-center lg:w-[45%]">
      <div className="flex aspect-square w-[240px] items-center justify-center overflow-hidden rounded-full bg-amber-500 sm:w-[330px] md:w-[400px] lg:w-[500px] xl:w-[540px]">
        <img
          src={illustration}
          alt="illustration"
          className="h-[90%] w-[90%] object-contain object-bottom"
        />
      </div>
    </div>
  )
}

export default Leftcontent
