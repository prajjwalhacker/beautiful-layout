import React from 'react'
import PrajjwalI from '../../../public/images/prajjwal-soni123.jpeg';
import "react-caroussel/dist/index.css";
import Image from 'next/image';
import Carousal from './Carousal';


function AboutMe() {
  return (
    <div className='about-me-container'>
        <Image src={PrajjwalI} alt='' width={200} height={200}/>
        <div className="animated-title">
           <span>HI, I am</span>
           <span className="highlight"> Prajjwal Soni </span>
           <span>Senior Software Engineer.</span>
        </div>
        <div className="animated-description">
        👋 Hello, I am Prajjwal, Senior Fullstack Engineer at Gurgaon based startup Fairdeal.market , with a passion for technology, startups, and continuous learning. 🚀 My career is built on a solid foundation of technical expertise and leadership skills. Proficient in a variety of programming languages like Javascript, NodeJS, NextJS, Rubyonrails I have successfully delivered projects that leverage cutting-edge technologies. 🛠️ I have mastered Javascript, NodeJS, NextJs technologies,. My familiarity with databases like MySQL, PostgreSQL, MongoDB adds depth to my skill set. 📚 Beyond the world of code, I love fitness, travelling and gaming.
        </div>

        <div className="animated-description">
        <div className="travelling-text">
  I       <span className="heart">❤</span> Travelling
        </div>
        <Carousal/>
        </div>
    </div>
  )
}

export default AboutMe