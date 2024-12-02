import React from 'react'
import { FaFacebook,  FaBriefcase,  FaLinkedin, FaGithub  } from 'react-icons/fa';



function Footer() {
  return (
    <div className='footer'>
         <div className="footer-text">
           Crafted with <span className="heart">❤</span> by <span className="name">Prajjwal Soni</span> 💖
          </div>
        <div className='social-icons-container'>
      <a href="https://www.facebook.com/prajjwal.soni/" target="_blank" rel="noopener noreferrer">
        <FaFacebook style={{ width: '30px', height: '30px' }} className='icon'/>
      </a>
      <a href="https://prajjwal-soni-portfolio-2024-8kgv.vercel.app/about" target="_blank" rel="noopener noreferrer">
        <FaBriefcase style={{ width: '30px', height: '30px' }} className='icon'/>
      </a>
      <a href="https://www.linkedin.com/in/prajjwal-soni-5b0741291/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin style={{ width: '30px', height: '30px' }} className='icon'/>
      </a>
      <a href="https://github.com/prajjwalhacker" target="_blank" rel="noopener noreferrer">
        <FaGithub  style={{ width: '30px', height: '30px' }} className='icon'/>
      </a>
    </div>
    </div>
  )
}

export default Footer