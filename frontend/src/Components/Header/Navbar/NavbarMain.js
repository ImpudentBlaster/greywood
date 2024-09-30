import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarRouteButton from './NavbarRouteButton'
import NavbarIcon from './NavbarIcon';

function NavbarMain() {
  return (
    <div className='flex justify-between items-center px-8 py-4 bg-black'>
    <NavbarLogo/>
    <NavbarRouteButton/>
    <NavbarIcon/>
    </div>
  )
}

export default NavbarMain