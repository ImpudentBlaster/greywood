import React from 'react'
import ShopbycategoryGrid from './ShopbycategoryGrid'
import ComponentHeading from '../../Components/ComponentHeading'

function ShopbycategoryMain() {
  return (
    <div className='shopbycategory-main flex flex-col sm:gap-6 gap-4 items-center sm:px-10 mt-5 px-6'>
    <ComponentHeading mainHeading={"SHOP BY CATEGORIES"} viewMoreButton={"VIEW MORE"}/>
    <ShopbycategoryGrid  />
    </div>
  )
}

export default ShopbycategoryMain