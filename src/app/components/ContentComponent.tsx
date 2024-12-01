import React from 'react'

function ContentComponent({ heading,children }: { heading: string, children: React.ReactNode }) {
  return (
    <div className='content-component'>
        {!!heading && <h1 className='content-component-header'>
           {heading}
        </h1>}
        {!!children && <div className='content-component-main'>
           {children}
        </div>}
    </div>
  )
}

export default ContentComponent