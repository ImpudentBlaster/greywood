import React from 'react'
import img from '../../Assets/recommendedProductBanner.png'
function RecommendedSideBanner() {
  return (
    <>
   <div className='recommendedBanner-main relative flex justify-center h-72 lg:h-auto w-auto'>
     <img className='h-full w-full object-cover rounded' src={img} alt='recommendedBanner'/>
     <div className='recommendedBanner-text absolute top-16 -rotate-6 flex flex-col gap-4'>
      <div>

      
         <p className='font-medium text-white'>SPECIAL OFFER</p>
         <p className='font-semibold text-pink-400 text-5xl' >OFFER</p>
         <p className='text-white'>UPTO 50% OFF!</p>
      </div>
         <p className='bg-white px-4 py-2 text-xs font-medium rounded'>DISCOVER SHOP</p>
     </div>
   </div>
    </>
  )
}

export default RecommendedSideBanner