import React from 'react'
import scheduleasy from '../../assets/scheduleasy.jpg'
import smartTask from '../../assets/smartTask.png'
import financeTracker from '../../assets/financeTracker.png'
import Project from './Project'

const Section4 = () => {

    const projects = [
    {
    id: 1,
    image: smartTask,
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    title: "Smart Task Manager",
    href: "https://smart-task-manager-vercel.vercel.app/",
    },
    {
    id: 2,
    image: financeTracker,
    technologies: ["HTML5", "JavaScript", "CSS3", "Flask"],
    title: "Personal Finance Tracker",
    href: "https://finance-tracker-do1i.onrender.com/",
    },
    {
    id: 3,
    image: scheduleasy,
    technologies: ["Java", "XML", "SQLite"],
    title: "SchedulEasy - Timetable Management App",
    href: "https://github.com/shwetaypatil/SchedulEasyApp",
    },
    ];

  return (
    <div id='projects' className='w-full bg-gray-200 px-4 py-12 sm:px-6 lg:px-12'>
      <div className='mx-auto w-full max-w-7xl'>
        <h4 className='mb-2 text-xl text-gray-900 sm:text-2xl'>
          <span className='pr-2 text-2xl text-amber-500 sm:text-3xl'>-</span>
          My Portfolio
        </h4>

        <h2 className='mb-8 text-3xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl'>
          My Latest <span className='font-normal italic text-amber-400'>Projects</span>
        </h2>

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section4
