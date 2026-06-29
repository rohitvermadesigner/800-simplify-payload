'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How will your team support my business?',
    answer:
      'We take full ownership of your annual financial audits, monthly accounting & bookkeeping, tax, and PRO needs. Our team makes sure every detail is accurate, secure, and fully documented. What does this mean to you? Complete clarity, stronger decisions.',
  },
  {
    question:
      "I'm a startup in the DMCC free zone and need audit support. Are you approved to handle this?",
    answer:
      'Absolutely. We can take care of your annual DMCC audit requirements with no back-and-forth. 800-Simplify is a registered and approved auditor across DMCC, DIFC, JAFZA, DED, DWC, DAFZA, TECOM, Dubai Media City, SAIF Zone, Dubai Internet City, DSO, Hamriyah Free Zone, D3, and other major UAE free zones. You just need to focus on growing your business and let us manage the books.',
  },
  {
    question: 'How do I know my numbers will be accurate and compliant?',
    answer:
      "We don't cut corners. For us, compliance is non-negotiable, so we stick to the UAE tax regulations as well as IAS and IFRS for accounting meticulously. All this keeps your numbers rock-solid, always.",
  },
  {
    question: 'I run a small business. What should I really be paying for an accountant?',
    answer:
      "The small business accountant cost depends on your transaction volume, business complexity, and the level of support you need. With 800-Simplify, you don't just pay for CPA accounting services; you get real value. Small businesses deserve expert support without the heavy price tag. That's exactly what we deliver. Our experienced accountants offer structured support at a price that fits your budget and business.",
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section>
      <div className="relative max-w-6xl mx-auto py-8 md:py-16 px-4 md:px-4 lg:px-0">
        <div className="lg:px-56">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F3B51] mt-4">
              Just in case you were wondering...
            </h2>
            <p className="text-[#4A5565] px-4 font-medium mt-2">
              Find answers to common questions about our services.
            </p>
          </div>

          <div className="bg-white mt-8 md:mt-12">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={faq.question}
                  className={`accordion-item overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                    isOpen
                      ? 'border-[#7B2CBF] bg-white shadow-[0_14px_28px_rgba(101,45,142,0.12)]'
                      : 'border-gray-100 bg-white shadow-[0_2px_12px_rgba(16,24,40,0.12)]'
                  } ${index > 0 ? 'mt-4' : ''}`}
                >
                  <button
                    type="button"
                    className={`cursor-pointer w-full text-left px-4 py-3 md:px-6 md:py-4 flex justify-between items-center gap-4 focus:outline-none accordion-btn ${
                      isOpen ? 'bg-[#F8F3FC]' : 'bg-white'
                    }`}
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                  >
                    <span
                      className={`font-bold text-[0.9rem] md:text-base ${
                        isOpen ? 'text-[#6F2DA8]' : 'text-[#101828]'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-9 h-9 transition-transform duration-300 p-2 rounded-md flex-shrink-0 ${
                        isOpen ? 'rotate-180 bg-[#8A35AD] text-white' : 'bg-[#F3F4F6] text-gray-600'
                      }`}
                    />
                  </button>
                  <div
                    className={`accordion-content overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-4 pb-5 pt-0 md:px-6 md:pb-6">
                      <div className="mb-4 h-1 w-14 rounded-full bg-[#3326B8]" />
                      <p className="text-[0.95rem] md:text-base leading-7 text-[#4A5565]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
