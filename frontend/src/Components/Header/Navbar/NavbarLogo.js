import React from 'react'
import img from '../../../Assets/greywoodLogo.png'
import { RxHamburgerMenu } from "react-icons/rx";

function NavbarLogo() {
  return (
   <div className='flex sm:gap-10 gap-5 items-center'>
     <RxHamburgerMenu className='lg:hidden text-lg' style={{color:"white"}}/>
  <img alt='store logo' className='max-w-full w-6.5/12 lg:w-9/12 lg:h-16 h-6 sm:h-8 ' src={img}/>
   </div>
  )
}

export default NavbarLogo