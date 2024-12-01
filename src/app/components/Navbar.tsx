import React from 'react'
import donutI from '../../../public/images/donut.svg';
import Image from 'next/image';
import { ModeToggle } from './ModeToggle';

function Navbar() {
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
    <div className='navbar'>
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