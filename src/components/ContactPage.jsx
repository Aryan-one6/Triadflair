import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Contact from './Contact';

 const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};
export default ContactPage;