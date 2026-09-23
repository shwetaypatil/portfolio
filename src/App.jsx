import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Footer from './components/Footer'
import Section3 from './components/section3/Section3'
import Section4 from './components/section4/Section4'
import Section5 from './components/section5/Section5'
import Section6 from './components/section6/Section6'
import Footer2 from './components/Footer2'

const App = () => {
  return (
    <div className='flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f4f4f4]'>
      <Section1 />
      <Footer />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
      <Section6 />
      <Footer2 />
    </div>
  )
}

export default App
