import React from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Pricing, Tech, Works, Footer, ScrollToTop, Team , Disclaimer} from ".";

const DisclaimerPage=()=> {
  return (
    <div className="relative z-0 bg-primary">
        <Navbar />
        <Disclaimer/>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default DisclaimerPage;


