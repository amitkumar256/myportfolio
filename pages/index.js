import About from '@/components/About'
import Contact from '@/components/Contact'
import Form from '@/components/Form'
import Navbar from '@/components/Navbar'
import Project from '@/components/Project'
import Skills from '@/components/Skills'
import React from 'react'

const index = () => {
  return (
    <div className='bg-black  '>
    <Navbar/>
    <About/>
    <Skills/>
    <Project/>
    <Form/>
    <Contact/>
    </div>

  )
}

export default index