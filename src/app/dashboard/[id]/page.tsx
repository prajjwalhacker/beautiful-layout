"use client";
import Navbar from '@/app/components/Navbar';
import React from 'react'
import { useTheme } from 'next-themes';


function Dashboard() {

  const { setTheme, theme } = useTheme()

  return (
    <div className={`dashboard-main-container  ${theme === 'light' ? 'dashboard-light-mode': ''}`}>
        <Navbar/> 
        <div className='dashboard-main'>
        <div className='dashboard-main-container-left'>
        <div className='blocks'>
            
        </div>
        <div className='blocks'>
            sdsdfsdfsdse
            sdfsdfsdf
            </div>
            <div className='blocks'>
dsfdsfsdfdfdsf
sdfsdfsdjf
            </div>
            <div className='blocks'>
            dsfsdfsdfsd
            dfsdfsdfsdjfksdfkjlsdf
            sdf
            </div>
            <div className='blocks'>
            dfsdfsdfsdjfksdfkjlsdfsdfsd
            </div>
            <div className='blocks'>
            asdfsdfsdprajjwja
            </div>
        </div>
        <div className='dashboard-main-container-mid'>
        </div>
        <div className='dashboard-main-container-right'>
        </div>
        </div>
    </div>
  )
}

export default Dashboard;