import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

function SearchbarMain() {
  return (
    <div className='searchbar-main flex bg-amber-100 lg:justify-between justify-center items-center py-3 px-8'>
    <div className='flex gap-10 border border-gray-400 rounded-3xl w-fit items-center px-6 py-0.5 lg:px-8 lg:py-2 '>
    <input className='bg-transparent focus:outline-none w-full' placeholder='Search products'/>
     <IoSearchOutline/>
    </div>

    <div className='lg:block hidden'>Free Shipping over $200</div>
    <div className='lg:block hidden'>Premium Quality</div>
    <div className='lg:block hidden'>100% Secure Payment</div>
    </div>
  )
}

export default SearchbarMain