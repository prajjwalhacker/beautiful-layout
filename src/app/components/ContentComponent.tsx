import React from 'react'

function ContentComponent({ heading, description,children }: { heading: string, description: string, children: React.ReactNode }) {
  return (
    <div className='content-component first-line:'>
        {!!heading && <h1 className='content-component-header content-title'>
           {heading}
        </h1>}
        {!!description && <h2 className='content-component-description'>
           {description}
        </h2>}
        {!!children && <div className='content-component-main'>
           {children}
        </div>}
    </div>
  )
}

export default ContentComponent