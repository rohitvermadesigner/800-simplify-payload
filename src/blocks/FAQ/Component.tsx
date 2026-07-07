'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
}

type FAQBlockProps = {
  heading: string
  description?: string | null
  items?: FAQItem[] | null
}

export const FAQBlock = ({ heading, description, items }: FAQBlockProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!items?.length) return null

  return (
    <section>
      <div className="relative mx-auto max-w-7xl px-4 py-8 md:px-4 md:py-16 lg:px-0">
        <div className="lg:px-56">
          <div className="text-center">
            <h2 className="mt-4 text-3xl font-bold text-[#2F3B51] md:text-4xl">{heading}</h2>

            {description ? (
              <p className="mt-2 px-4 font-medium text-[#4A5565]">{description}</p>
            ) : null}
          </div>

          <div className="mt-8 bg-white md:mt-12">
            {items.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={`${faq.question}-${index}`}
                  className={`accordion-item overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                    isOpen
                      ? 'border-[#7B2CBF] bg-white shadow-[0_14px_28px_rgba(101,45,142,0.12)]'
                      : 'border-gray-100 bg-white shadow-[0_2px_12px_rgba(16,24,40,0.12)]'
                  } ${index > 0 ? 'mt-4' : ''}`}
                >
                  <button
                    type="button"
                    className={`accordion-btn flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left focus:outline-none md:px-6 md:py-4 ${
                      isOpen ? 'bg-[#F8F3FC]' : 'bg-white'
                    }`}
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                  >
                    <span
                      className={`text-[0.9rem] font-bold md:text-base ${
                        isOpen ? 'text-[#6F2DA8]' : 'text-[#101828]'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-9 w-9 flex-shrink-0 rounded-md p-2 transition-transform duration-300 ${
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
                      <p className="text-[0.95rem] leading-7 whitespace-pre-line text-[#4A5565] md:text-base">
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
