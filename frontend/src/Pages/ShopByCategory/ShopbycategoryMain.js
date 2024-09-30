import React from 'react'
import ShopbycategoryGrid from './ShopbycategoryGrid'
import ShopbycategoryHeader from './ShopbycategoryHeader'
function ShopbycategoryMain() {
  return (
    <div className='shopbycategory-main flex flex-col gap-6 px-16 py-6'>
    <ShopbycategoryHeader/>
    <ShopbycategoryGrid/>
    </div>
  )
}

export default ShopbycategoryMain