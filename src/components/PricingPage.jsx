import React from 'react'
import Pricing from './Pricing'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'
// import Hero from './Hero';
import Feedbacks from './Feedbacks'
import HeroPricing from './HeroPricing'
import ChatWidget from './Chatbot/ChatWidget'



 const PricingPage = () => {
  return (
   
    <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <HeroPricing/>
      {/* <Hero /> */}
    </div>
    <Pricing />
{/* <Feedbacks /> */}
<Footer />
<ChatWidget/>
</div>
  )
}
export default PricingPage;

