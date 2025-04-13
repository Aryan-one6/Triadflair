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
    name: "Artificial intelligence ",
    description: "Intigrate AI for Business growth ",
    href: "#",
    icon: DocumentTextIcon
  },

]
const callsToAction = [
  { name: 'Whatsapp', href: 'https://wa.me/919354249191', icon: FaWhatsapp },
  { name: 'Call Now', href: 'tel:+919354249191', icon: PhoneIcon },
]
const company = [
  { name: 'About us', href: '/about-us', description: 'Learn more about our company values and mission to empower others' },
  { name: 'Contact us', href: '/contact-us', description: 'Get in touch with our dedicated support team or reach out on our community forums' },
  { name: 'Blog', href: '/blogs', description: 'Read our latest announcements and get perspectives from our team' },

]
const price = [
  { name: 'Pricing', href: '/Our-Pricing' },
  { name: 'About us', href: '/about-us', description: 'Learn more about our company values and mission to empower others' },
  // { name: 'Contact us', href: '/contact-us', description: 'Get in touch with our dedicated support team or reach out on our community forums' },
  { name: 'Blog', href: '/blogs', description: 'Read our latest announcements and get perspectives from our team' },
]

const Navbar = () => {
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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-primary shadow-md" : "bg-transparent"
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
                      <item.icon className="h-5 w-5 flex-none text-indigo-500" aria-hidden="true" />
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
          <a href="https://wa.me/919354249191" className="text-lg font-semibold leading-6 text-white">
            <div className='flex-col inline'> Need help!
              {/* <FaWhatsapp className="w-6 h-8" aria-hidden="true" /> */}
            </div>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 flex w-[80%] flex-col justify-between overflow-y-auto bg-gray-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Triad Flair</span>
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
              <div className="-my-6 divide-y divide-gray-500">
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
                {/* <a href="/Our-Pricing" className="text-lg border-none font-semibold leading-6 text-white">
                  Pricing
                </a> */}


                <div className="space-y-2 py-4">

                  {price.map((item) => (
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
                <item.icon className="h-5 w-5 flex-none text-indigo-500" aria-hidden="true" />
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