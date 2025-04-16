import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Certifications from './components/Certifications'

const App = () => {
  return (
    <div className='overflow-x-hidden text-stone-300 antialiased'>
      <div className='fixed inset-0 -z-10'>
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        </div>
      </div>

      <div className='container mx-auto px-8'>
        <Navbar/>
        <Hero/>
        <Technologies/>
        <Projects/>
        <Experience/>
        <Certifications/>
        <Contact/>
      </div>
    </div>

  )
}

export default App
