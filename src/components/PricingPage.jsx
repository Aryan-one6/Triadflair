import React from 'react'
import Pricing from './Pricing'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'
import { HeroPricing } from '.'

 const PricingPage = () => {
  return (
    <div>
      <Navbar/>
      {/* <HeroPricing/> */}
      <Pricing/>
      
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}
export default PricingPage;