import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

import HeroSwiper from './HeroSwiper.client'
import { AboutSectionComponent } from '@/blocks/AboutSection/Component'
import LogoSlider from '../components/sections/LogoSlider'

export const metadata: Metadata = {
  title: '800 Simplify - Packages',
  description: '800 Simplify - Packages',
}

type PackageFeature = {
  name: string
  img: string
}

type PackagePlan = {
  title: string
  description: string
  price: string
  image: string
  imageAlt: string
  features1: PackageFeature[]
  features2?: PackageFeature[]
  popular?: boolean
}

const packages: PackagePlan[] = [
  {
    title: 'Core Package',
    description: 'For startups, small business or companies getting their financial footing.',
    price: '800',
    image: '/images/package-landing-page/core.png',
    imageAlt: 'Entrepreneur reviewing financial details on a tablet',
    features1: [
      {
        name: 'Accounting',
        img: '/images/package-landing-page/icons/accounting.svg',
      },
      {
        name: 'VAT Returns Filing',
        img: '/images/package-landing-page/icons/vat-return.svg',
      },
      {
        name: 'Email Support',
        img: '/images/package-landing-page/icons/email-support.svg',
      },
    ],
  },
  {
    title: 'Advanced Package',
    description: 'For growing businesses seeking better controls and financial insights.',
    price: '1,200',
    image: '/images/package-landing-page/advanced.png',
    imageAlt: 'Business team reviewing documents together',
    popular: true,
    features1: [
      {
        name: 'Accounting',
        img: '/images/package-landing-page/icons/accounting.svg',
      },
      {
        name: 'VAT Returns Filing',
        img: '/images/package-landing-page/icons/vat-return.svg',
      },
      {
        name: 'Email Support',
        img: '/images/package-landing-page/icons/email-support.svg',
      },
      {
        name: 'Call Support',
        img: '/images/package-landing-page/icons/call-support.svg',
      },
      {
        name: 'VAT Compliance',
        img: '/images/package-landing-page/icons/vat-compliance.svg',
      },
      {
        name: 'Regular Updates to Regulatory Changes',
        img: '/images/package-landing-page/icons/regular-update.svg',
      },
    ],
    features2: [
      {
        name: 'License Renewal',
        img: '/images/package-landing-page/icons/license-renewal.svg',
      },
      {
        name: 'Corporate Tax Returns Filing',
        img: '/images/package-landing-page/icons/corporate-tax.svg',
      },
    ],
  },
  {
    title: 'Elite Package',
    description:
      'For established organization seeking full scale financial oversight and strategic advisory.',
    price: '2,500',
    image: '/images/package-landing-page/elite.png',
    imageAlt: 'Business advisors discussing financial planning',
    features1: [
      {
        name: 'Accounting',
        img: '/images/package-landing-page/icons/accounting.svg',
      },
      {
        name: 'VAT Returns Filing',
        img: '/images/package-landing-page/icons/vat-return.svg',
      },
      {
        name: 'Email Support',
        img: '/images/package-landing-page/icons/email-support.svg',
      },
      {
        name: 'Call Support',
        img: '/images/package-landing-page/icons/call-support.svg',
      },
      {
        name: 'VAT Compliance',
        img: '/images/package-landing-page/icons/vat-compliance.svg',
      },
      {
        name: 'Regular Updates to Regulatory Changes',
        img: '/images/package-landing-page/icons/regular-update.svg',
      },
    ],
    features2: [
      {
        name: 'License Renewal',
        img: '/images/package-landing-page/icons/license-renewal.svg',
      },
      {
        name: 'Corporate Tax Returns Filing',
        img: '/images/package-landing-page/icons/corporate-tax.svg',
      },
      {
        name: 'Dedicated Account Manager',
        img: '/images/package-landing-page/icons/dedicated-account.svg',
      },
      {
        name: 'Annual Audit Report',
        img: '/images/package-landing-page/icons/annual-audit-report.svg',
      },
      {
        name: 'Monthly Meetings',
        img: '/images/package-landing-page/icons/monthly-meetings.svg',
      },
      {
        name: 'VAT Renewal (Up to 2 per year)',
        img: '/images/package-landing-page/icons/vat-renewal.svg',
      },
      {
        name: 'Corporate Tax Compliance',
        img: '/images/package-landing-page/icons/corporate-tax.svg',
      },
    ],
  },
]

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="bg-white p-5 shadow-[0_10px_30px_rgba(16,24,40,0.06)]">
      <h3 className="text-lg font-bold text-[#2F3B51]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#4A5565]">{description}</p>
      <Link
        href="#"
        className="mt-5 inline-flex items-center gap-2 rounded-sm bg-[#652D8E] px-4 py-2 text-xs font-semibold text-white"
      >
        Explore more
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </article>
  )
}

function PackageCard({ plan, index }: { plan: PackagePlan; index: number }) {
  const isAdvanced = plan.popular
  const imageFirst = index === 1

  const content = (
    <div
      className={
        isAdvanced ? 'flex h-full flex-col text-white' : 'flex h-full flex-col text-[#25324A]'
      }
    >
      {plan.popular ? (
        <div className="mb-4 inline-flex w-fit self-start rounded-full bg-[#E4763D] px-3 py-1 text-xs font-bold text-white">
          <Image
            src="/images/most-popular.svg"
            alt="Most Popular"
            width="15"
            height="0"
            className="mr-2"
          />
          Most Popular
        </div>
      ) : null}
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <h3 className="text-2xl font-bold uppercase">{plan.title}</h3>
          <p
            className={
              isAdvanced
                ? 'mt-2 max-w-xs text-sm text-white/85'
                : 'mt-2 max-w-xs text-sm text-[#4A5565]'
            }
          >
            {plan.description}
          </p>
        </div>
        <div>
          <p
            className={
              isAdvanced
                ? 'text-xs font-bold uppercase text-white/80'
                : 'text-xs font-bold uppercase text-[#4A5565]'
            }
          >
            Starting from
          </p>
          <div className="mt-1 flex items-end gap-2">
            <span className="mb-1 text-xs font-bold">AED</span>
            <span
              className={
                isAdvanced ? 'text-4xl font-bold text-white' : 'text-4xl font-bold text-[#1498F5]'
              }
            >
              {plan.price}
            </span>
            <span className="mb-1 text-xs font-bold">/month</span>
          </div>
        </div>
      </div>

      <div className={isAdvanced ? 'my-8 h-px bg-white/20' : 'my-8 h-px bg-[#E8EAF0]'} />

      <div className="grid gap-x-8 gap-y-4 text-sm md:grid-cols-2 items-start">
        <ul className="grid gap-y-4 text-sm">
          {plan.features1?.map((feature) => (
            <li key={feature.name} className="flex items-start gap-3">
              <span
                className={
                  isAdvanced
                    ? 'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-white'
                    : 'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-[#F4E8F8]'
                }
              >
                <Image
                  src={feature.img}
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] object-contain"
                />
              </span>
              <span>{feature.name}</span>
            </li>
          ))}
        </ul>
        <ul className="grid gap-y-4 text-sm">
          {plan.features2?.map((feature) => (
            <li key={feature.name} className="flex items-start gap-3">
              <span
                className={
                  isAdvanced
                    ? 'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-white'
                    : 'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-[#F4E8F8]'
                }
              >
                <Image
                  src={feature.img}
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] object-contain"
                />
              </span>
              <span>{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-9">
        <Link
          href="https://800-simplify.org/800-simplify/?focus=true"
          className={
            isAdvanced
              ? 'inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#652D8E] shadow-[0_14px_30px_rgba(0,0,0,0.18)]'
              : 'inline-flex items-center gap-2 rounded-full bg-[#82359A] px-7 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(101,45,142,0.25)]'
          }
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )

  const image = (
    <div className="relative min-h-[260px] overflow-hidden rounded-xl md:min-h-full">
      <Image src={plan.image} alt={plan.imageAlt} fill className="object-cover" />
    </div>
  )

  return (
    <article
      className={
        isAdvanced
          ? 'grid gap-8 bg-[#82359A] p-6 md:min-h-[640px] md:grid-cols-[0.85fr_1.15fr] md:p-8'
          : 'grid gap-8 bg-[#F7F7F8] p-6 md:min-h-[640px] md:grid-cols-[1.15fr_0.85fr] md:p-8'
      }
    >
      {imageFirst ? image : content}
      {imageFirst ? content : image}
    </article>
  )
}

export default function AuditServicePage() {
  return (
    <main className="bg-white text-[#2F3B51]">
      <HeroSwiper />

      <section className="package-section bg-white px-4 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#2F3B51] md:text-4xl" id="plans">
              Built for every stage, structured to adapt.
            </h2>
            <p className="mt-3 text-sm font-medium text-[#0C0C0C] md:text-base">
              A curated financial toolkit that fits your pace today, ready to upgrade the moment
              your operations grow.
            </p>
          </div>

          <div className="grid gap-4">
            {packages.map((plan, index) => (
              <PackageCard key={plan.title} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#E4763D]">
        <div className="absolute -left-16 -top-16 h-36 w-36 rounded-br-[3rem] border-[28px] border-white/10" />
        <div className="absolute -left-16 bottom-0 h-36 w-36 rounded-tr-[3rem] border-[28px] border-white/10" />
        <AboutSectionComponent
          heading={`About Us`}
          description={
            <p>
              800-Simplify is the finance buddy you call when things get real. We understand that
              building and running a business requires significant investment. That's why we work
              with a service model that fits your business, placing the right structures and
              maintaining audit-ready books.
            </p>
          }
          image={{
            url: '/images/audit/audit.png',
            alt: 'About',
          }}
          imageClassName={'w-[20rem] md:w-[30rem] 2xl:w-[30rem]'}
          features={[
            {
              title: 'Value-Driven',
              description:
                'Efficient financial solutions priced smartly for your business and budget.',
            },
            {
              title: 'Registered',
              description: 'Officially registered with the Ministry of Economy (MoE).',
            },
            {
              title: 'Licensed',
              description: 'Regulated by the Department of Economic Development (DED).',
            },
            {
              title: 'Certified',
              description: 'ISO 9001:2015 certified for quality management.',
            },
          ]}
        />
      </section>
      <LogoSlider classNameMain="bg-[#fff]" classNameTitle="text-[#2F3B51]" logoImg="border-0" />
      <section className="px-4 py-4 md:py-20 cta-section bg-[linear-gradient(90deg,#78398B,#954597)] relative overflow-hidden">
        <Image
          src="/images/icons/2sqare-outline-purple.png"
          alt=""
          width="150"
          height="0"
          className="w-72 absolute -top-24 -left-28"
        />
        <Image
          src="/images/icons/sqare-bg-purple.png"
          alt=""
          width="100"
          height="0"
          className="w-48 absolute -bottom-20 -left-20"
        />
        <Image
          src="/images/icons/sqare-bg-purple.png"
          alt=""
          width="100"
          height="0"
          className="w-48 absolute -right-8 -top-20"
        />
        <Image
          src="/images/icons/sqare-outline-purple.png"
          alt=""
          width="125"
          height="0"
          className="w-60 absolute -bottom-20 -right-20"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-row gap-8 items-center justify-center text-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-5xl mb-0 leading-[1.1] font-bold">
                Ready to simplify your financial compliance?
              </h2>
              <p className="text-lg md:text-[1.2rem] mt-4">
                Choose a plan and get activated today. Our team will reach out within{' '}
                <span className="hidden md:block"></span> 24 hours to complete your onboarding.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://800-simplify.org/800-simplify/?focus=true"
                className="bg-[#FFFFFF] text-[#652D8E] px-8 py-3 rounded-[0.5rem] font-medium transition-all duration-200 inline-flex gap-4 items-center shadow-xl justify-center"
              >
                <Calendar className="w-5 h-5" />
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
