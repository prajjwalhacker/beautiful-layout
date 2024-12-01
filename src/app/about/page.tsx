"use client";
import Navbar from '@/app/components/Navbar';
import React from 'react'
import { useTheme } from 'next-themes';
import Footer from '@/app/components/Footer';

function About() {

  const {  theme } = useTheme()


  return (
    <div className={`dashboard-main-container  ${theme === 'light' ? 'dashboard-light-mode': ''}`}>
        <Navbar/> 
        <div className='about-main-container'>
           
        </div>
        <Footer/>
    </div>
  )
}

export default About;