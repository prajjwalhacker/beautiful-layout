import React from 'react'

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
          {navbarList.map((item, index) => {
             return ( 
                <div className='navbar-items' key={index}>
                    {item.name}
                </div>
             )
          })}
        </div>
        <div className='navbar-right'>
        </div>
    </div>
  )
}

export default Navbar