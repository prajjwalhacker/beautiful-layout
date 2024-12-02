import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub  } from 'react-icons/fa';



function Footer() {
  return (
    <div className='footer'>
        Crafted with love - by Prajjwal Soni 💖
        <div className='social-icons-container'>
      <a href="https://www.facebook.com/prajjwal.soni/" target="_blank" rel="noopener noreferrer">
        <FaFacebook style={{ width: '30px', height: '30px' }} className='icon'/>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={{ width: '30px', height: '30px' }} className='icon'/>
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