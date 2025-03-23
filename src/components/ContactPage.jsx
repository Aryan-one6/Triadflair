import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Contact from './Contact';
import HeroContact from './HeroContact';

const ContactPage = () => {
  return (
    <div>      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">

      <Navbar />
      <HeroContact /></div>
      <div className="bg-primary py-24 sm:py-32 border-b-4 border-indigo-500">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white">Find us </h2>
          <p className="mt-6 text-lg leading-8 text-gray-500">
          Find our office, get directions, and meet us in person. We look forward to welcoming you!






          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base  leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-white">Email us</h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-500">
              <p><a href='mailto:Parashar.one6@gmail.com'>Parashar.one6@gmail.com</a></p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-white">Phone</h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-500">
              <p><a href='tel:+91 9354 249191'>+91 9354 249191</a></p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-white">Address</h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>Sector 62, Noida, India</p>
            </address>
          </div>
          {/* <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-white">London</h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-500">
              <p>114 Cobble Lane</p>
              <p>London N1 2EF</p>
            </address>
          </div> */}
        </div>
      </div>
    </div>
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};
export default ContactPage;