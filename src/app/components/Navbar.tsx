import React from 'react'
import donutI from '../../../public/images/donut.svg';
import Image from 'next/image';
import { ModeToggle } from './ModeToggle';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

function Navbar() {

  const {  theme } = useTheme()

  const router = useRouter();

  const navbarList = [
    {
        name: "My blogs",
        value: '/dashboard/new'
    },
    {
        name: "About us",
        value: '/about'
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
                <div className='text-3xl navbar-items navbar-text' key={index} onClick={()=>{
                  router.push(item.value);
                }}>
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