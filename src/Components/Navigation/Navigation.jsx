import React from 'react'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

const Navigation = () => {
  return (
    <nav  className='static z-30 w-screen'>
      <MobileNav />
      <DesktopNav />
    </nav>
  )
}

export default Navigation