import React from 'react';
import logo from '../assets/logo.png';
// import { StarsCanvas } from "./canvas";


const Footer = () => {
  const navigation = {
    Pages: [
      { name: 'Home', href: '/' },
      { name: 'Disclaimer', href: '/Disclaimer/' },
      { name: 'About ', href: '/about-us/' },
      { name: 'Term & Conditions', href: '/terms-and-conditions/' },
      // { name: 'Blogs', href: '/Blogs' },
    ],
    Services: [
      { name: "Web App", href: "/Our-Pricing" },
      { name: "Mobile App", href: "/Our-Pricing" },
      { name: "Digital Marketing", href: "/Our-Pricing" },
      { name: "Maintainance ", href: "/Our-Pricing" },
    ],

  };

  const social = [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="white" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/team_heyaryan/",
      icon: (props) => (
        <svg fill="white" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/919354249191",
      icon: (props) => (
        <svg fill="white" viewBox="0 0 448 512" {...props}>
          <path d="M380.9 97.1C339 55.2 283.8 32 224 32 100.3 32 0 132.3 0 256c0 45.2 12.2 89.3 35.2 128.3L0 480l98.4-33.5c37.1 20.3 79.3 31 121.6 31 123.7 0 224-100.3 224-224 0-59.8-23.2-115-65.1-157.9zM224 439c-34.8 0-68.7-9.2-98.1-26.5l-7-4.2-58.3 19.9 20.5-60.8-4.5-7C69.2 326.1 60 292.2 60 256 60 148.4 148.4 60 256 60c57.2 0 110.7 22.2 151 62.5S452 198.8 452 256c0 107.6-88.4 196-196 196zM370.6 301.7c-5.3-2.6-31.3-15.4-36.1-17.1-4.8-1.7-8.3-2.6-11.8 2.6-3.5 5.2-13.5 17.1-16.5 20.6-3 3.5-6 3.9-11.3 1.3-5.3-2.6-22.4-8.3-42.7-26.4-15.8-14.1-26.5-31.6-29.7-36.9-3.2-5.3-.3-8.2 2.4-10.8 2.5-2.5 5.3-6.4 8-9.6 2.7-3.2 3.6-5.3 5.4-8.9 1.8-3.6.9-6.7-.5-9.3-1.3-2.7-11.8-28.5-16.1-39.2-4.3-10.7-8.7-9.3-11.8-9.5-3-.2-6.4-.2-9.8-.2s-9.3 1.3-14.2 6.7c-4.8 5.3-18.3 17.9-18.3 43.6s18.7 50.6 21.3 53.9c2.7 3.2 38.2 58.4 92.7 81.9 12.9 5.6 23.1 8.9 31 11.4 13.1 4.2 25.1 3.6 34.6 2.2 10.6-1.7 31.3-12.8 35.7-25.1 4.4-12.2 4.4-22.7 3.1-25.1-1.3-2.4-4.8-3.9-10.1-6.5z" />
        </svg>
      ),
    }

  ];

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto  pt-8 pb-0  container lg:ml-28 flex lg:max-w-[87vw]  px-8">
        {/* First Column */}
        <div className="flex flex-wrap lg:flex-nowrap  gap-8">
          <div className="w-full lg:w-2/4">
            <div className="mb-4  px-0">
              <img src={logo} alt="Logo" className="w-32" />
            </div>
            <p className="text-base mb-4">
            Hey there! It's Team Aryan — Some Creative technologists who loves turning ideas into immersive digital experiences. Welcome to our corner of the internet.</p>
            <div className="flex gap-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="hover:text-white text-gray-900 p-2 bg-[#915EFF] rounded-full" >
                  {item.icon({ className: "h-6 w-6" })}
                </a>
              ))}
            </div>
          </div>


          {/* Contact us Sections        */}

          <div className="w-full lg:w-1/4">
            <h4 className="text-lg mb-4 text-white font-bold">Contact</h4>
            <ul className="space-y-4">
              {/* Email */}
              <li className="flex items-center text-white">
                <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 13.333l-11-7.333v10.667c0 .733.6 1.333 1.333 1.333h19.333c.733 0 1.333-.6 1.333-1.333v-10.667l-11 7.333zM12 11.667l11-7.333v-.667c0-.733-.6-1.333-1.333-1.333h-19.333c-.733 0-1.333.6-1.333 1.333v.667l11 7.333z" />
                </svg>
                <a href="mailto:Contact@Heyaryan.com" className="text-base text-gray-400 hover:text-gray-300">Connect@Heyaryan.com</a>
              </li>

              {/* Phone */}
              <li className="flex items-center text-white">
                <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.2c1.5 3.1 4.1 5.7 7.2 7.2l2.4-2.4c.4-.4 1-.5 1.5-.3 1.2.4 2.5.7 3.8.7.8 0 1.5.7 1.5 1.5v3.5c0 .8-.7 1.5-1.5 1.5-10 0-18-8-18-18 0-.8.7-1.5 1.5-1.5h3.5c.8 0 1.5.7 1.5 1.5 0 1.3.3 2.6.7 3.8.2.5.1 1.1-.3 1.5l-2.4 2.4z" />
                </svg>
                <a href="tel:
+91 9354249191" className="text-base text-gray-400 hover:text-gray-300">
                  +91 9354249191</a>
              </li>

              {/* Address */}
              <li className="flex items-center text-white">
                <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c-3.9 0-7 3.1-7 7 0 4.4 7 13 7 13s7-8.6 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" />
                </svg>
                <span className="text-base text-gray-400 ">Noida, India</span>
              </li>
            </ul>
          </div>

          {/* Second Column */}
          <div className="w-full lg:w-2/4 space-x-4">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
              {Object.entries(navigation).map(([section, links]) => (
                <div key={section}>
                  <h4 className="text-lg mb-3 text-white font-bold ">{section}</h4>
                  <ul className="space-y-2 ">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className=" text-base text-gray-400 hover:text-gray-300 "
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/4 mt-10 mb-12 xl:mt-0">
            <h3 className="text-lg font-semibold md:grid-cols-1 leading-6 text-white">Get in Touch</h3>
            {/* <p className="mt-2 text-sm leading-6 text-gray-300">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p> */}
            <form className="mt-6 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-trasparent px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                placeholder="Your email"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-[#915EFF] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>


        </div>

      </div>
      <div className=" pb-4 text-center border-t border-white/10 pt-4 sm:mt-20 lg:mt- bg-primary">
        <p className="  text-base leading-5 text-white  ">
          &copy; HeyAryan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;