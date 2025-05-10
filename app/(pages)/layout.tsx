import React from 'react'

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout = ({children}: PageLayoutProps) => {
  return (
    <div className='container mx-auto'>
        {children}
    </div>
  )
}

export default PageLayout