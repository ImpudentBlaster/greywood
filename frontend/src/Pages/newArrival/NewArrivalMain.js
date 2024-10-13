import React from 'react'
import ComponentHeading from '../../Components/ComponentHeading'

import ComponentSingleProduct from '../../Components/ComponentSingleProduct'
import img1 from '../../Assets/product-1-sample.jpg'
import img2 from '../../Assets/product-2-sample.jpg'

function NewArrivalMain() {
  return (
    <div className='flex flex-col  sm:gap-6 gap-4 sm:px-10 mt-5 px-6'>
    <ComponentHeading mainHeading={"NEW ARRIVAL"} viewMoreButton={"VIEW MORE"}/>
    <div className="product-grid-main grid lg:grid-cols-6 sm:gap-x-6 sm:gap-y-8 gap-x-4 gap-y-6 sm:grid-cols-3 grid-cols-2 ">
    <ComponentSingleProduct img={img2} prodTag={"SALE"} prodTitle={"Kids Boys 2 Pc. Night Suit"} prodPrice={1000} prodOriginalPrice={1300}/>
    <ComponentSingleProduct img={img1} prodTag={"SALE"} prodTitle={"Kids Boys 2 Pc. Night Suit"} prodPrice={1000} prodOriginalPrice={1300}/>
    <ComponentSingleProduct img={img2} prodTag={"SALE"} prodTitle={"Kids Boys 2 Pc. Night Suit"} prodPrice={1000} prodOriginalPrice={1300}/>
    <ComponentSingleProduct img={img1} prodTag={"SALE"} prodTitle={"Kids Boys 2 Pc. Night Suit"} prodPrice={1000} prodOriginalPrice={1300}/>
    <ComponentSingleProduct img={img2} prodTag={"SALE"} prodTitle={"Kids Boys 2 Pc. Night Suit"} prodPrice={1000} prodOriginalPrice={1300}/>
    <ComponentSingleProduct img={img1} prodTag={"SALE"} prodTitle={"Kids Boys 2 Pc. Night Suit"} prodPrice={1000} prodOriginalPrice={1300}/>
    </div>
      
    </div>
  )
}

export default NewArrivalMain