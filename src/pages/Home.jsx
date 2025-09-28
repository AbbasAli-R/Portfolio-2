import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Work from '../sections/Work'
import Marquee from '../sections/Marquee'
import CTA from '../components/CTA'

const Home = () => {
  return (
   <>
   <Hero/>
   <About/>
   <Skills/>
   <Work/>
   <Marquee/>
   <CTA/>
   </>
  )
}

export default Home