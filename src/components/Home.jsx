// // src/pages/HomePage/Home.jsx
// import React from "react";
// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Pricing, Tech, Works, Footer, ScrollToTop, Team } from "../../components";

// const Home = () => {
//   return (
//     <div className="relative z-0 bg-primary">
//       <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//         <Navbar />
//         <Hero />
//       </div>
//       <About />
//       <Experience />
//       <Tech />
//       <Team />
//       <Pricing />
//       <Works />
//       <Feedbacks />
//       <div className="relative z-0">
//         <Contact />
//       </div>
//       <Footer />
//       <ScrollToTop />
//     </div>
//   );
// };

// export default Home;

// src/pages/HomePage/Home.jsx
import React from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Pricing, Tech, Works, Footer, ScrollToTop, Team } from "../components";

const Home=()=> {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      {/* <Tech /> */}
      <Works />

      {/* <Pricing /> */}

      <Team />
      <Tech />

      <Feedbacks />
      <Experience />

      <div className="relative z-0">
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;


