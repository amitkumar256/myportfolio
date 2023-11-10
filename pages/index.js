import About from '@/components/About'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'
import React from 'react'

const index = () => {
  return (
    <div className='bg-slate-700  '>
    <Navbar/>
    <About/>
    <Skills/>
    </div>

  )
}

export default index