import React from 'react'
import NavbarMain from './Components/Header/Navbar/NavbarMain'
import SearchbarMain from './Components/Header/SeachBar/SearchbarMain'
import ShopbycategoryMain from './Pages/ShopByCategory/ShopbycategoryMain'
import NewArrivalMain from './Pages/newArrival/NewArrivalMain'
import ElementarColumnMain from './Pages/elementalColumn/ElementarColumnMain'
import BottomBannerMain from './Pages/bottomBanner/BottomBannerMain'
import FeatureProductsMain from './Pages/featureProducts/FeatureProductsMain'
import RecommendedMain from './Pages/RecommendedForYou/RecommendedMain'



function App() {
  return (
    <>
    <NavbarMain/>
    <SearchbarMain/>
 <ShopbycategoryMain/>
 <NewArrivalMain/>
 <ElementarColumnMain/>
 <FeatureProductsMain/>
 <BottomBannerMain/>
 <RecommendedMain/>
    </>
  )
}

export default App