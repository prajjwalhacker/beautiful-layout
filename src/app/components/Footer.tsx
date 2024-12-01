import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';



function Footer() {
  return (
    <div className='footer'>
        Crafted with love - by Prajjwal Soni 💖
        <div className='social-icons-container'>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook style={{ width: '30px', height: '30px' }} className='icon'/>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter style={{ width: '30px', height: '30px' }} className='icon'/>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={{ width: '30px', height: '30px' }} className='icon'/>
      </a>
    </div>
    </div>
  )
}

export default Footer