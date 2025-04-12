import React from 'react'

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout = ({children}: PageLayoutProps) => {
  return (
    <>
        {children}
    </>
  )
}

export default PageLayout