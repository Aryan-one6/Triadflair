import React from 'react'
import { SectionWrapper } from '../hoc'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'


const Disclaimer = () => {
    return (
        <div className="bg-primary px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-gray-400">Disclaimer</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Introduction to HeyAryan</h1>
                <p className="mt-6 text-xl text-gray-400 leading-8">
                    Welcome to HeyAryan. By accessing or using this Website, you agree to be bound by the following disclaimer. If you disagree with any part of this disclaimer, please do not use HeyAryan.com. We reserve the right to modify these terms at any time, so please review this page periodically for changes.
                </p>
                <div className="mt-10 max-w-2xl">
                    <h1 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">1. No Professional Advice     </h1>

                    <p className='text-gray-500'> 
                        All information on this Website is provided for general informational and educational purposes only. Although we strive to present accurate and up-to-date information, we make no representations, guarantees, or warranties of any kind—express or implied—about the completeness, accuracy, reliability, suitability, or availability of the Website or the information, products, services, or related graphics contained on the Website for any purpose. Any reliance you place on such information is strictly at your own risk.
                    </p>
                </div>
                <div className="mt-10 max-w-2xl">
                    <h1 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">2. Personal Responsibility                    </h1>

                    <p className='text-gray-500'>
                        You acknowledge that any actions you take based on the information found on this Website are your sole responsibility. HeyAryan.com and its authors or contributors will not be held liable for any direct or indirect losses, damages, or injuries resulting from the display or use of the information provided.</p>
                </div>
                <div className="mt-10 max-w-2xl">
                    <h1 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">3. External Links
                    </h1>

                    <p className='text-gray-500'>
                        Through this Website, you may be able to follow links to external websites which are not under the control of HeyAryan.com. We have no control over the nature, content, and availability of those sites. The inclusion of any external link does not imply a recommendation or endorsement of the views expressed within them.</p>
                </div>

                <div className="mt-10 max-w-2xl">
                    <h1 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">4. Affiliate Disclosure
                    </h1>
                    <p className='text-gray-500'>
                        HeyAryan.com may engage in affiliate marketing, which means we may earn a commission if you purchase a product or service through the provided links. This does not affect the price you pay and helps us support the cost of running this Website. We only recommend products or services we believe may be of value to our users.
                    </p>
                </div>
                <div className="mt-10 max-w-2xl">
                    <h1 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">5. “As-Is” and “As-Available” Basis
                    </h1>
                    <p className='text-gray-500'>
                        All information, content, and materials on the Website are provided on an “as-is” and “as-available” basis. We do not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components. You understand and agree that you use the Website and its content at your own discretion and risk.
                    </p>
                </div>

                <div className="mt-10 max-w-2xl">
                    <h1 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">6. Limitation of Liability
                    </h1>
                    <p className='text-gray-500'>
                        Under no circumstances shall HeyAryan.com or its owners, authors, or contributors be held liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of your use of the Website or reliance on any information provided, even if advised of the possibility of such damages.
                    </p>
                </div>
                <div className="mt-10 max-w-2xl">
                    <h1 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">7. Changes to This Disclaimer
                    </h1>

                    <p className='text-gray-500'>
                        We reserve the right to update, amend, or make any changes to this disclaimer at our sole discretion without prior notice. Any changes will be posted here and will become effective immediately upon posting. Your continued use of the Website after any modifications indicates your acceptance of the updated disclaimer.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default SectionWrapper(Disclaimer, "Disclaimer");