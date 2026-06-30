'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Audit & Assurance',
    href: '/services/audit',
    icon: '/images/icon-audit-assurance.png',
    tagline: 'Disciplined audits for smarter business moves.',
    description:
      'We ensure your business is ready well before the audit begins. From internal checks to statutory audits and management reviews, our UAE approved auditors focus on what really matters: accountability and financial clarity. So, your reports are clear, credible, and ready to stand scrutiny.',
    items: [
      'External / Statutory Audit',
      'Review Management Report',
      'Interim Audit Report',
      'Compliance Report',
      'Sales/Revenue Audit',
      'Liquidation Report',
    ],
  },
  {
    title: 'Accounting & Bookkeeping',
    href: '/services/accounting',
    icon: '/images/icon-accounting-bookkeeping.png',
    tagline: 'Your business moves fast. Your accounting should keep up.',
    description:
      'Daily transactions, accurate records, and clear reports are handled precisely and on time by our expert chartered accountants in the UAE. We make sure you know where your money is going and where it should move next.',
    items: [
      'Bookkeeping & MIS Reporting',
      'Management Accounting',
      'Cost Accounting',
      'Review and Reconciliation of Accounts',
    ],
  },
  {
    title: 'Taxation Services',
    href: '/services/taxation',
    icon: '/images/icon-taxation-services.png',
    tagline: "Pay what's due. Not a dirham more or less.",
    description:
      'As your business grows, so do your tax responsibilities. That’s why we match our support to your growth stage. Our tax experts keep your books ready, your processes sharp, and your team prepared so you file on time, stay compliant, and handle taxes with confidence, not fear.',
    items: [
      'Tax Audit',
      'VAT Registration',
      'VAT Returns Filing',
      'Corporate Tax Registration',
      'Corporate Tax Filing',
      'Tax Residency/Domicile',
      'Custom Registration & Renewals',
    ],
  },
  {
    title: 'PRO Services',
    href: '/services/pro',
    icon: '/images/icon-pro-services.png',
    tagline: 'Smooth renewals. Steady operations.',
    description:
      'As your team grows and operations expand, visa and license compliance becomes critical. We handle processing, renewals, and approvals end-to-end. Everything stays on track, fully documented, and up to date, so your business runs smoothly without delays, penalties, or last-minute surprises.',
    items: ['Visa Process', 'License Renewals & Amendment'],
  },
]

export default function ServiceSection() {
  return (
    <section id="services">
      <div className="relative max-w-7xl mx-auto py-8 md:py-16 px-4">
        <div className="text-center lg:px-64">
          <span className="uppercase text-xl md:text-2xl font-bold text-[#652D8E]">
            OUR SERVICES
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#2F3B51] mt-4">
            Measured precisely. Delivered efficiently.
          </h2>

          <p className="text-[#4A5565] font-medium mt-2">
            Tailored auditing, accounting, tax, and PRO solutions — everything your business needs
            to stay compliant and in control.
          </p>
        </div>

        <div className="mt-8 md:mt-12">
          <Swiper
            className="services-swiper"
            modules={[Autoplay]}
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {services.map((service) => (
              <SwiperSlide key={service.title} className="!h-auto flex py-4">
                <Link
                  href={service.href}
                  className="block h-full w-full border-2 border-[#F3F4F6] rounded-[0.9rem] p-6 text-left bg-white hover:-translate-y-[10px] duration-300"
                >
                  <div className="flex gap-4">
                    <div className="bg-[linear-gradient(90deg,#9D4A9A,#652D8E)] rounded-xl w-14 h-14 flex items-center justify-center shrink-0">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={28}
                        height={28}
                        className="w-7"
                      />
                    </div>

                    <h3 className="text-[#2F3B51] text-[1.4rem] font-bold leading-[1.1]">
                      {service.title.split(' ').slice(0, -1).join(' ')} <br />
                      {service.title.split(' ').slice(-1)}
                    </h3>
                  </div>

                  <p className="font-semibold mt-4 text-black">{service.tagline}</p>

                  <p className="text-[#4A5565] mt-4 text-sm">{service.description}</p>

                  <p className="font-semibold mt-4 text-black">Services include:</p>

                  <ul className="mt-2 list-disc pl-5 marker:text-[#8200DB] text-[#4A5565] text-sm">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
