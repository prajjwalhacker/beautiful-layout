import React from 'react'
import PrajjwalI from '../../../public/images/prajjwal-soni123.jpeg';
import "react-caroussel/dist/index.css";
import Image from 'next/image';


function AboutMe() {
  return (
    <div className='about-me-container'>
        <Image src={PrajjwalI} alt='' width={200} height={200}/>
        <div className="animated-title">
           <span>HI, I am</span>
           <span className="highlight"> Prajjwal Soni </span>
           <span>Senior Software Engineer.</span>
        </div>
        <div className="title">
  <p>👋 Hello, I am <span className="name">Prajjwal</span>, Senior Fullstack Engineer at Gurgaon based startup <span className="company">Fairdeal.market</span>, with a passion for technology, startups, and continuous learning. 🚀</p>
  <p>My career is built on a solid foundation of technical expertise and leadership skills. Proficient in a variety of programming languages like <span className="tech">Javascript</span>, <span className="tech">NodeJS</span>, <span className="tech">NextJS</span>, <span className="tech">Rubyonrails</span>, I have successfully delivered projects that leverage cutting-edge technologies. 🛠️</p>
  <p>I have mastered <span className="tech">Javascript</span>, <span className="tech">NodeJS</span>, <span className="tech">NextJS</span> technologies. My familiarity with databases like <span className="db">MySQL</span>, <span className="db">PostgreSQL</span>, <span className="db">MongoDB</span> adds depth to my skill set. 📚</p>
  <p>Beyond the world of code, I love fitness, travelling, and gaming.</p>
</div>
    </div>
  )
}

export default AboutMe