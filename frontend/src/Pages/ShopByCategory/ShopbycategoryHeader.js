import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
function ShopbycategoryHeader() {
  return (
    <>
    <div className='border-b-4 border-grey-500 flex items-center justify-between py-1 px-6'>
    <p className='font-bold text-lg'>SHOP BY CATEGORIES</p>
    <p className='flex gap-2 items-center text-sm'>MORE CATEGORIES <FaLongArrowAltRight /></p>
    </div>
    </>
  )
}

export default ShopbycategoryHeader