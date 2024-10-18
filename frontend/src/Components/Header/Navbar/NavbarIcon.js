import React from 'react'
import { GrUpdate } from "react-icons/gr";
import { GoHeart } from "react-icons/go";
import { LiaUser } from "react-icons/lia";
import { IoCartOutline } from "react-icons/io5";

function NavbarIcon() {
  return (
    <div className='navbarIcon-main flex lg:gap-6 gap-3 '>
      <div className='text-sm lg:text-lg text-white'><GrUpdate/></div>
      <div className='text-base lg:text-xl text-white'><GoHeart/></div>
      <div className='text-base lg:text-xl text-white'><LiaUser/></div>
      <div className='text-base lg:text-xl text-white'><IoCartOutline/></div>
 
   
   
   
    </div>
  )
}

export default NavbarIcon