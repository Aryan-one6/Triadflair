import React from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Pricing, Tech, Works, Footer, ScrollToTop, Team , Terms, ChatWidget} from ".";

const TermsPage=()=> {
  return (
    <div className="relative z-0 bg-primary">
        <Navbar />
        <Terms/>
      <Footer />
      <ChatWidget/>
    </div>
  );
};

export default TermsPage;


