import React from 'react'
import { MoveRight } from 'lucide-react'

const Project = ({ project }) => {
  return (
    <div className='relative flex min-h-[480px] w-full flex-col justify-between gap-3 rounded-2xl bg-[#f4f4f4] p-4 shadow-sm sm:p-5'>
      <img className='h-[220px] rounded-2xl border-2 border-gray-200 object-cover sm:h-[260px] lg:h-[300px]' src={project.image} alt={project.title} />

      <div className='flex flex-wrap gap-2'>
        {project.technologies.map((tech) => (
          <span key={tech} className='mr-1 rounded-full bg-amber-500 px-3 py-1 text-xs font-medium text-gray-900'>
            {tech}
          </span>
        ))}
      </div>

      <h2 className='flex items-center text-xl font-semibold text-gray-900 sm:text-2xl'>{project.title}</h2>

      <span className="absolute bottom-5 right-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#344C36] p-2 text-amber-300 hover-float">
        <a href={project.href} target='_blank' rel='noopener noreferrer'>
          <MoveRight />
        </a>
      </span>
    </div>
  )
}

export default Project

