// import React, { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaDownload } from "react-icons/fa";

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";
// import myCV from "../assets/my_cv.pdf";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const sidebarRef = useRef(null);

//   // Define the sequence of nav items
//   const allNavLinks = [
//     { id: "about", title: "About" },
//     { id: "work", title: "Work" },
//     { id: "tech", title: "Tech" },
//     { id: "pricing", title: "Pricing" },
//     { id: "projects", title: "Projects" },
//     { id: "testimonials", title: "What People Say" },
//     { id: "contact", title: "Contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close sidebar when clicking outside of it
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest('.toggle-btn')) {
//         setToggle(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [sidebarRef]);

//   return (
//     <nav
//       className={`${styles.paddingX
//         } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
//         }`}
//     >
//       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
//         <Link
//           to='/'
//           className='flex items-center gap-2'
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt='logo' className='w-25 h-12 object-contain' />
//         </Link>


//         {/* Full menu hidden on md and smaller screens */}
//         <ul className='list-none hidden  md:flex flex-row gap-10'>
//           {allNavLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${active === nav.title ? "text-white" : "text-secondary"
//                 } hover:text-[#915EFF] text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>
//         {/* Hamburger menu visible on md and smaller screens */}
//         <div className='md:hidden flex flex-1 justify-end items-center'>
//           <img
//             src={toggle ? close : menu}
//             alt='menu'
//             className='w-[28px] h-[28px] object-contain toggle-btn'
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             ref={sidebarRef}
//             className={`${!toggle ? "hidden" : "flex"
//               } fixed top-0 left-0 w-[280px] h-full bg-gray-900 p-6 z-20 transition-transform transform ${toggle ? "translate-x-0" : "-translate-x-full"
//               } flex-col justify-between`}
//           >
//             <div>
//               {/* Logo at the top, left-aligned with a bottom border */}
//               <Link
//                 to='/'
//                 className='flex items-center justify-start mb-6 pb-4 border-b border-gray-700'
//                 onClick={() => {
//                   setActive("");
//                   setToggle(false);
//                   window.scrollTo(0, 0);
//                 }}
//               >
//                 <img src={logo} alt='logo' className='w-35 h-10 object-contain' />
//               </Link>

//               {/* Stacked menu items below the logo */}
//               <ul className='list-none flex flex-col gap-4'>
//                 {allNavLinks.map((nav) => (
//                   <li
//                     key={nav.id}
//                     className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-gray-300"
//                       } text-left hover:text-[#915EFF] transition-colors duration-200`}
//                     onClick={() => {
//                       setToggle(!toggle);
//                       setActive(nav.title);
//                     }}
//                   >
//                     <a href={`#${nav.id}`}>{nav.title}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Social icons at the bottom */}
//             <div className='flex justify-start gap-4 mt-6'>
//               <a href='https://www.linkedin.com/in/naresh-parashar-a34676213/' target='_blank' rel='noopener noreferrer'>
//                 <FaLinkedin className='text-white text-2xl hover:text-[#0077B5] transition-colors duration-200' />
//               </a>
//               <a href='https://github.com/Aryan-one6/' target='_blank' rel='noopener noreferrer'>
//                 <FaGithub className='text-white text-2xl hover:text-[#333] transition-colors duration-200' />
//               </a>
//               <a href='https://instagram.com/Aryan_one6/' target='_blank' rel='noopener noreferrer'>
//                 <FaInstagram className='text-white text-2xl hover:text-[#E4405F] transition-colors duration-200' />
//               </a>
//               <a href='https://wa.me/+919354249191' target='_blank' rel='noopener noreferrer'>
//                 <FaWhatsapp className='text-white text-2xl hover:text-[#25D366] transition-colors duration-200' />
//               </a>
              
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { Fragment, useState, useEffect } from 'react'

import { Dialog, Popover, Transition } from '@headlessui/react'
import { logo, menu, close } from "../assets";
import my_cv from "../assets/my_cv.pdf";

import {
  ArrowPathIcon,
  Bars4Icon,
  HomeIcon,
  ArrowDownTrayIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  MegaphoneIcon, 
  DocumentTextIcon, 
  ChartBarIcon, 
  // WhatsappIcon,
  Squares2X2Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Service = [
  { 
    name: "Web App", 
    description: "Build fast, scalable applications.", 
    href: "#", 
    icon: GlobeAltIcon 
  },
  { 
    name: "Mobile App", 
    description: "Create iOS and Android apps.", 
    href: "#", 
    icon: DevicePhoneMobileIcon 
  },
  { 
    name: "Digital Marketing", 
    description: "Boost online brand visibility.", 
    href: "#", 
    icon: MegaphoneIcon 
  },
  { 
    name: "Search Engine Optimization", 
    description: "Improve rankings with SEO.", 
    href: "#", 
    icon: DocumentTextIcon 
  },
  { 
    name: "Content Marketing", 
    description: "Engage audiences with content.", 
    href: "#", 
    icon: ChartBarIcon 
  }
    ]
const callsToAction = [
  { name: 'Whatsapp', href: '#', icon: FaWhatsapp },
  { name: 'Call Now', href: '#', icon: PhoneIcon },
]
const company = [
  { name: 'About us', href: '/about-us', description: 'Learn more about our company values and mission to empower others' },
  { name: 'Contact us', href: '/contact-us', description: 'Get in touch with our dedicated support team or reach out on our community forums' },
  { name: 'Blog', href: '/blogs', description: 'Read our latest announcements and get perspectives from our team' },

]

 const Navbar=() =>{
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ Detect Scroll & Change Navbar Background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, 
  []);

  return (
<header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-md" : "bg-transparent"
      }`}
    >      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Hey Aryan</span>
            <img className="h-12 w-full justify-center item-left" src={logo} alt="" />
          </a>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex  items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Squares2X2Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
          
        </div>
        
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <a href="/" className="tflex items-center gap-x-1 text-lg font-semibold leading-6 text-white">
        Home 

          </a>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-white">
              Services
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {Service.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

         
          <a href="/Our-Pricing" className="text-lg font-semibold leading-6 text-white">
            Pricing
          </a>
          <a href="#projects" className="text-lg font-semibold leading-6 text-white">
            Work
          </a>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-white">
              Company
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5">
                {company.map((item) => (
                  <div key={item.name} className="relative rounded-lg p-4 hover:bg-gray-50">
                    <a href={item.href} className="block text-sm font-semibold leading-6 text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-sm leading-6 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href={my_cv} download className="text-sm font-semibold leading-6 text-white">
              <ArrowDownTrayIcon className="w-6 h-8" aria-hidden="true" />
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex w-[90%] flex-col justify-between overflow-y-auto bg-gray-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Hey Aryan</span>
                <img
                  className="h-12 w-full"
                  src={logo}
                  alt="/"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only text-white">Close menu</span>
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {Service.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-400 hover:bg-gray-300"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="space-y-2 py-6">
                  
                  {company.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-400 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
export default Navbar;