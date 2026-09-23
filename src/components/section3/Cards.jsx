import React from 'react'

const Cards = ({ tools }) => {

  const Icon = tools.icon

  return (
    <div className="flex h-[170px] w-[130px] shrink-0 flex-col items-center justify-center gap-4 rounded-full border-2 border-gray-300 bg-gray-200 p-4 sm:h-[190px] sm:w-[150px]">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-300 sm:h-20 sm:w-20">
        <Icon className={`text-3xl sm:text-4xl ${tools.color}`} />
      </div>

      <h5 className='text-center text-xs text-gray-600 sm:text-sm'>{tools.name}</h5>
    </div>
  )
}

export default Cards
