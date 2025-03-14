// import React from "react";
// import { motion } from "framer-motion";
// import { FaCheck } from "react-icons/fa"; // Import the checkmark icon
// import { styles } from "../styles";
// import { textVariant, fadeIn } from "../utils/motion";

// const pricingPlans = [
//   {
//     title: "Single Page Website",
//     price: "Start from ₹10k",
//     description:
//       "Perfect for personal portfolios or simple landing pages. A clean, responsive single-page website tailored to your needs.",
//     features: ["Responsive Design", "SEO Optimized", "Fast Loading Speed"],
//   },
//   {
//     title: "Dynamic Website",
//     price: "Start from ₹18k",
//     description:
//       "Ideal for businesses needing multi-page websites with dynamic content. Custom CMS integration for easy updates.",
//     features: ["Content Management", "Customizable Design", "SEO & Analytics"],
//   },
//   {
//     title: "E-commerce Website",
//     price: "Start from ₹30k",
//     description:
//       "A complete solution for online stores. Fully-featured e-commerce platform with secure payment integration.",
//     features: ["Product Management", "Secure Payments", "Custom Design", "SEO & Marketing Tools"],
//   },
//   {
//     title: "Business Marketing",
//     price: "Start from ₹11k",
//     description:
//       "Boost your online presence with our tailored marketing services. Ideal for businesses looking to grow their customer base.",
//     features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Email Marketing"],
//   },
// ];

// const PricingCard = ({ title, price, description, features, index }) => (
//   <motion.div
//     variants={fadeIn("up", "spring", index * 0.5, 0.75)}
//     className="bg-gray-900 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between w-full sm:w-[300px] transition-transform duration-300 hover:scale-105 shadow-xl" // Added shadow-xl for a stronger box shadow
//   >
//     {/* Header with adjusted font size */}
//     <div className="bg-[#5220bd] text-white text-center p-4">
//       <h3 className="text-[20px] font-bold">{title}</h3>
//       <p className="text-[18px] font-semibold mt-2">{price}</p>
//     </div>
    
//     {/* Dark content area */}
//     <div className="p-6 text-center">
//       <p className="text-gray-400 mb-4 p-2 font-normal text-[12px]">{description}</p>
//       <ul className="list-inside list-none space-y-2">
//         {features.map((feature, i) => (
//           <li key={i} className="text-gray-200 flex items-center">
//             <FaCheck className="text-green-400 mr-2" /> {/* Checkmark icon */}
//             <span className="whitespace-normal">{feature}</span> {/* Ensures normal text wrapping */}
//           </li>
//         ))}
//       </ul>
//     </div>

//     {/* Full-width button */}
//     <div className="p-6">
//       <a
//         href="https://wa.me/+919354249191/" // Replace with your WhatsApp number
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-[#915EFF] text-white py-2 px-4 rounded-lg hover:bg-[#7a49d8] transition-colors duration-200 w-full block text-center"
//       >
//         Get Started
//       </a>
//     </div>
//   </motion.div>
// );

// const Pricing = () => {
//   return (
//     <section id="pricing" className="mt-10 px-2.5 sm:px-0"> {/* Add padding on mobile mode */}
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} text-center`}>
//           Our Pricing
//         </p>
//         <h2 className={`${styles.sectionHeadText} text-center`}>
//           Choose Your Plan.
//         </h2>
//       </motion.div>

//       <div className="mt-20
      
      
//       ml-5 mr-5 pt-2.5 flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center gap-10 mt-2.5">
//         {pricingPlans.map((plan, index) => (
//           <PricingCard key={index} index={index} {...plan} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Pricing;


import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
// import { CheckIcon, RadioGroup, FaInstagram, FaWhatsapp, FaDownload } from "react-icons/fa";

// import {SectionWrapper} from '../hoc/SectionWrapper'

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '$15', annually: '$144' },
    description: 'The essentials to provide your best work for clients.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    mostPopular: false,
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '$30', annually: '$288' },
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: '$48', annually: '$576' },
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
    ],
    mostPopular: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Pricing=() =>{
  const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <div id='Pricing' className=" bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
          loyalty, and driving sales.
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
          >
            <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(checked ? 'bg-indigo-500' : '', 'cursor-pointer rounded-full px-2.5 py-1')
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-indigo-500' : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">{tier.price[frequency.value]}</span>
                <span className="text-sm font-semibold leading-6 text-gray-300">{frequency.priceSuffix}</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Buy plan
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Pricing;