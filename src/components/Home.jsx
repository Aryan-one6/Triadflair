import React from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Pricing, Tech, Works, Footer, ScrollToTop, Team, ChatWidget, MouseCursor } from "../components";

const Home=()=> {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <MouseCursor/>
        <Hero />
      </div>
      <About />
      {/* <Tech /> */}
      <Works />
      <Tech />


      {/* <Pricing /> */}

      <Experience />
      <Feedbacks />

      <Team />

      <div className="relative z-0">

        <Contact />
      </div>
      <Footer />
      {/* <Chatbot/> */} 
      <ChatWidget/>
      {/* <ScrollToTop /> */}
    </div>
  );
};

export default Home;


