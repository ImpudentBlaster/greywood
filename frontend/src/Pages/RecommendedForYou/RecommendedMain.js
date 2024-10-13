import React from 'react'
import RecommendedSideBanner from './RecommendedSideBanner'
import ComponentHeading from './../../Components/ComponentHeading';
import ComponentSingleProduct from './../../Components/ComponentSingleProduct';
import img1 from '../../Assets/product-1-sample.jpg'
import img2 from '../../Assets/product-2-sample.jpg'

function RecommendedMain() {
  return (
    <div className='grid lg:grid-cols-4 gap-4 grid-cols-1 recommendedbanner-main sm:px-10 mt-5 px-6'>
     <RecommendedSideBanner/>
     <div className='lg:col-span-3 shadow-xl p-4 flex flex-col gap-6'>
      <ComponentHeading mainHeading={"RECOMMENDED FOR YOU"} viewMoreButton={"VIEW MORE"}/>
      <div className="product-grid-main grid sm:gap-x-6 sm:gap-y-8 gap-x-4 gap-y-6 sm:grid-cols-4 grid-cols-2 ">
      <ComponentSingleProduct img={img2} prodTag={"SALE"} prodTitle={"Kids Boys 2 Pc. Night Suit"} prodPrice={1000} prodOriginalPrice={1300}/>
      <ComponentSingleProduct img={img1} prodTag={"SALE"} prodTitle={"Kids Boys 2 Pc. Night Suit"} prodPrice={1000} prodOriginalPrice={1300}/>
      <ComponentSingleProduct img={img2} prodTag={"SALE"} prodTitle={"Kids Boys 2 Pc. Night Suit"} prodPrice={1000} prodOriginalPrice={1300}/>
      <ComponentSingleProduct img={img1} prodTag={"SALE"} prodTitle={"Kids Boys 2 Pc. Night Suit"} prodPrice={1000} prodOriginalPrice={1300}/>
      </div>
     </div>
    </div>
  )
}

export default RecommendedMain