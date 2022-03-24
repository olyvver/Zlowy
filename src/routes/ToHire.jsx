import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import Talent from './components/Talent/Talent';
import TechSkills from './components/TechSkills/TechSkills';
import Company from './components/Company/Company';
import TalentSolutions from './components/TalentSolutions/TalentSolutions';
import Trusted from './components/Trusted/Trusted';
import Ready from './components/Ready/Ready';
import Footer from './components/Footer/Footer';

const ToHire = () => {
  return (
    <>
        <Navbar />
        <Header />
        <Talent />
        <TechSkills />
        <Company />
        <TalentSolutions />
        <Trusted />
        <Ready />
        <Footer />
    </>
  )
}

export default ToHire;