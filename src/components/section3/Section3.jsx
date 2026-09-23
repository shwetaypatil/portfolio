import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaReact
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiC,
  SiCplusplus,
  SiFlask,
  SiPostgresql,
  SiSqlite,
  SiGooglecolab,
  SiAnthropic,
  SiAndroidstudio
} from "react-icons/si";
import { VscVscode} from 'react-icons/vsc'
import Cards from './Cards';

const Section3 = () => {

const tools = [
  { id: 1, name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { id: 2, name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { id: 3, name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { id: 4, name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
  { id: 5, name: "Python", icon: FaPython, color: "text-blue-500" },
  { id: 6, name: "C", icon: SiC, color: "text-blue-600" },
  { id: 7, name: "C++", icon: SiCplusplus, color: "text-blue-600" },
  { id: 8, name: "Java", icon: FaJava, color: "text-red-500" },
  { id: 9, name: "Flask", icon: SiFlask, color: "text-black" },
  { id: 10, name: "React", icon: FaReact, color: "text-cyan-400" },
  { id: 11, name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
  { id: 12, name: "SQLite", icon: SiSqlite, color: "text-blue-500" },
  { id: 13, name: "VS Code", icon: VscVscode, color: "text-blue-500" },
  { id: 14, name: "Android Studio", icon: SiAndroidstudio, color: "text-green-500" },
  { id: 15, name: "Claude", icon: SiAnthropic, color: "text-orange-600" },
  { id: 16, name: "Git", icon: FaGitAlt, color: "text-orange-600" },
  { id: 17, name: "GitHub", icon: FaGithub, color: "text-gray-900" },
  { id: 18, name: "Google Colab", icon: SiGooglecolab, color: "text-orange-500" },
  { id: 19, name: "Codex", icon: FaCode, color: "text-gray-700" },
 ];

  return (
    <div id='tools' className='flex min-h-screen w-full flex-col items-center bg-[#f4f4f4] px-4 py-12 sm:px-6 lg:px-12'>
      <h5 className='mb-4 text-xl text-gray-900 sm:text-2xl'>
        <span className='pr-2 text-2xl text-amber-500 sm:text-3xl'>-</span>
        My Favorite Tools & Technologies
      </h5>

      <h3 className='max-w-4xl text-center text-3xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl'>
        <span className='font-normal italic text-amber-400'>Exploring the Tools & Technologies</span> {" "}
        <br className='hidden sm:block' />
        Behind My Designs
      </h3>

      <div className='mt-8 flex w-full max-w-7xl flex-wrap justify-center gap-4 sm:gap-6'>
        {tools.map((tool) => (
          <Cards key={tool.id} tools={tool} />
        ))}
      </div>
    </div>
  )
}

export default Section3
