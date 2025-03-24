import { BrowserRouter, Route, Routes } from "react-router-dom"
import React, { useState, useEffect } from 'react';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Pricing, Tech, Works, Footer, ScrollToTop, Team, DisclaimerPage, BlogPage, Home, AboutPage, ContactPage, PricingPage, TermsPage} from './components';
// import { DisclaimerPage } from "./pages ";

// import Home from './pages/Home.jsx';

const App = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/Contact-us" element={<ContactPage />} />
        <Route path="/Our-Pricing" element={<PricingPage />} />
        <Route path="/Blogs" element={<BlogPage/>}/>
        <Route path="/Disclaimer" element={<DisclaimerPage/>}/>
        <Route path="/Terms-and-Conditions" element={<TermsPage/>}/>




      </Routes>
    
    </BrowserRouter>

  )
}

export default App;

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home.jsx ";


// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} /> 
//         <Route path="/about-us" element={<AboutPage />} /> 
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
