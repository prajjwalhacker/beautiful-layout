"use client";
import Navbar from '@/app/components/Navbar';
import React from 'react'
import { useTheme } from 'next-themes';
import Footer from '@/app/components/Footer';
import AboutMe from '../components/AboutMe';

function About() {

  const {  theme } = useTheme()


  return (
    <div className={`dashboard-main-container  ${theme === 'light' ? 'dashboard-light-mode': ''}`}>
        <Navbar/> 
        <div className='about-main-container'>
           <AboutMe/>
        </div>
        <Footer/>
    </div>
  )
}

export default About;