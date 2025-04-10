
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
// import { CheckIcon, RadioGroup, FaInstagram, FaWhatsapp, FaDownload } from "react-icons/fa";

// import {SectionWrapper} from '../hoc/SectionWrapper'

const frequencies = [
  { value: 'Plans', label: 'Plans', pricePreffix: 'Starts from', priceSuffix: '/month' },
  { value: 'Maintenance', label: 'Maintenance', priceSuffix: '/year' },
]
const tiers = [
  {
    name: 'Small Business',
    id: 'tier-freelancer',
    href: 'https://wa.me/919354249191',
    price: { Plans: '$500', Maintenance: '$100' },
    description: 'The essentials to provide your best work for clients.',
    features: ['Custom design/theme', ' Responsive layout,', 'Basic CMS (like WordPress)', 'Basic on-page SEO'],
    mostPopular: false,
  },
  {
    name: 'E-commerce ',
    id: 'tier-startup',
    href: 'https://wa.me/919354249191',
    price: { Plans: '$2,000', Maintenance: '$300' },
    description: 'A plan that scales with your rapidly growing Maintenance.',
    features: [
      'Product catalog',
      'shopping cart',
      'payment gateway integration',
      'user accounts',
      'security setup ',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: 'https://wa.me/919354249191',
    price: { Plans: '$4,000', Maintenance: '$300' },
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Complex custom features',
      'Integrations (ERP/CRM)',
      'Multi-language support',
      'Performance optimization',
      'Marketing automations',
      'Custom reporting tools',
    ],
    mostPopular: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Pricing = () => {
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
              <p className="mt-6 flex-col items-baseline gap-x-1 item-center justify-center"><div className='item-center justify-center'>
                <span className="text-sm font-semibold leading-6 text-gray-300">{frequency.pricePreffix}</span></div>
                <span className="text-4xl font-bold tracking-tight text-white">{tier.price[frequency.value]}</span>
                {/* <span className="text-sm font-semibold leading-6 text-gray-300">{frequency.priceSuffix}</span> */}
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