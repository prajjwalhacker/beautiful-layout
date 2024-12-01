"use client";
import Navbar from '@/app/components/Navbar';
import React from 'react'
import { useTheme } from 'next-themes';


function Dashboard() {

  const {  theme } = useTheme()


  const topicsArr = [
      {
         name: "Nextjs"
      },
      {
         name: "Reactjs"
      },
      {
        name: "Nodejs"
     },
     {
        name: "WebRTC"
     },
     {
      name: "Websocket"
     },
     {
      name: "DSA"
     },
     {
      name: "Project making"
     },{
      name: "Nextjs"
   },
   {
      name: "Reactjs"
   },
   {
     name: "Nodejs"
  },
  {
     name: "WebRTC"
  },
  {
   name: "Websocket"
  },
  {
   name: "DSA"
  },
  {
   name: "Project making"
  }
  ,
  {
    name: "Nextjs"
 },
 {
    name: "Reactjs"
 },
 {
   name: "Nodejs"
},
{
   name: "WebRTC"
},
{
 name: "Websocket"
},
{
 name: "DSA"
},
{
 name: "Project making"
},{
 name: "Nextjs"
},
{
 name: "Reactjs"
},
{
name: "Nodejs"
},
{
name: "WebRTC"
},
{
name: "Websocket"
},
{
name: "DSA"
},
{
name: "Project making"
}
,
  ]

  return (
    <div className={`dashboard-main-container  ${theme === 'light' ? 'dashboard-light-mode': ''}`}>
        <Navbar/> 
        <div className='dashboard-main'>
        <div className='dashboard-main-container-left'>
          <div className='dashboard-main-container-left-heading'>
            Topics
          </div>
          <div className='dashboard-main-container-left-topic-lists'>
            {topicsArr.map((item, index) => {
              return (
                <div className='dashboard-main-container-topic-element' key={index}>
                  {item.name || ''}
                 </div>
               )
            })}
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