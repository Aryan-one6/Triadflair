import React from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Pricing, Tech, Works, Footer, ScrollToTop, Team , Disclaimer, ChatWidget} from ".";

const DisclaimerPage=()=> {
  return (
    <div className="relative z-0 bg-primary">
        <Navbar />
        <Disclaimer/>
      <Footer />
      <ChatWidget/>
    </div>
  );
};

export default DisclaimerPage;


