import React from 'react'
import donutI from '../../../public/images/donut.svg';
import Image from 'next/image';
import { ModeToggle } from './ModeToggle';
import { useTheme } from 'next-themes';

function Navbar() {

  const {  theme } = useTheme()

  const navbarList = [
    {
        name: "Docs"
    },
    {
        name: "Components"
    }
    ,
    {
        name: "Blocks"
    },
    {
        name: "Charts"
    }
    ,
    {
        name: "Themes"
    }
    ,
    {
        name: "Colors"
    }
  ]
  return (
    <div className={`navbar ${theme==='light' ? 'navbar-light': ''}`}>
        <div className='navbar-left'>
        <div className='navbar-items'>
          <Image src={donutI} width={40} height={40} alt='donut'/>
        </div>
          {navbarList.map((item, index) => {
             return ( 
                <div className='text-3xl navbar-items' key={index}>
                    {item.name}
                </div>
             )
          })}
        </div>
        <div className='navbar-right'>
           <ModeToggle/>
        </div>
    </div>
  )
}

export default Navbar