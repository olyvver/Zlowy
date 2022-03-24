import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Opportunities from './components/Opportunities/Opportunities'
import QualityEdu from './components/QualityEdu/QualityEdu'
import ISA from './components/ISA/ISA'
import Courses from './components/Courses/Courses'
import Finance from './components/Finance/Finance'
import Grads from './components/Grads/Grads'


const UpSkill = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Opportunities />
        <QualityEdu />
        <ISA />
        <Courses/>
        <Finance />
        <Grads/>
        <Footer />
    </>
  )
}

export default UpSkill