import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import AuditHeroSwiper from './AuditHeroSwiper.client'
import { AboutSectionComponent } from '@/blocks/AboutSection/Component'

export const metadata: Metadata = {
  title: 'Audit & Assurance Services in UAE | 800-Simplify',
  description:
    'Audit and assurance support for UAE businesses, including statutory audits, compliance reports, interim audit reports, revenue audits, and liquidation reports.',
}

const auditStack = [
  {
    title: 'External / Statutory Audit',
    description:
      'Independent audit support for UAE companies that need credible financial statements, regulatory confidence, and a smoother annual close.',
  },
  {
    title: 'Review Management Report',
    description:
      'Clear reporting that helps leadership understand observations, risks, and practical improvements before small issues become expensive.',
  },
  {
    title: 'Interim Audit Report',
    description:
      'Mid-year audit checks that keep your records aligned, your controls visible, and your final audit process easier to complete.',
  },
  {
    title: 'Compliance Report',
    description:
      'Structured compliance reviews for license, free zone, and reporting obligations so your documentation stands up when reviewed.',
  },
]

const sectors = [
  'Mainland companies',
  'Free zone businesses',
  'Startups',
  'SMEs',
  'Consultancies',
  'Trading companies',
]

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="bg-white p-5 shadow-[0_10px_30px_rgba(16,24,40,0.06)]">
      <h3 className="text-lg font-bold text-[#2F3B51]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#4A5565]">{description}</p>
      <Link
        href="https://800-simplify.org/800-simplify/?focus=true"
        className="mt-5 inline-flex items-center gap-2 rounded-sm bg-[#652D8E] px-4 py-2 text-xs font-semibold text-white"
      >
        Explore more
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </article>
  )
}

export default function AuditServicePage() {
  return (
    <main className="bg-white text-[#2F3B51]">
      <AuditHeroSwiper />

      <section className="relative overflow-hidden bg-[#E4763D]">
        <div className="absolute -left-16 -top-16 h-36 w-36 rounded-br-[3rem] border-[28px] border-white/10" />
        <div className="absolute -left-16 bottom-0 h-36 w-36 rounded-tr-[3rem] border-[28px] border-white/10" />

        <AboutSectionComponent
          heading={`Expert solutions for stronger
             audit outcomes.`}
          description={
            <p>
              Most businesses assume expertise in audit consultancy services come at higher costs
              and added complexity. At 800-Simplify, that trade-off doesn’t apply. We close the gap
              between quality and affordability. Our auditors in the UAE work with growing
              businesses across mainland and free zones to deliver reliable audits without cutting
              corners.
            </p>
          }
          image={{
            url: '/images/about-800-simplify.png',
            alt: 'About',
          }}
        />
      </section>

      <section className="bg-white px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-[#2F3B51] md:text-4xl">
            The complete audit stack.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1fr_0.9fr_1fr]">
            <div className="grid gap-4">
              <ServiceCard {...auditStack[0]} />
              <ServiceCard {...auditStack[1]} />
            </div>

            <div className="relative min-h-[360px] overflow-hidden bg-[#F8F3FC] md:min-h-full">
              <Image
                src="/images/about-800-simplify.png"
                alt="Audit documents and financial records"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#652D8E]/10" />
            </div>

            <div className="grid gap-4">
              <ServiceCard {...auditStack[2]} />
              <ServiceCard {...auditStack[3]} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7EAFB] px-6 py-14 text-center md:px-10 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold leading-tight text-[#2F3B51] md:text-4xl">
            Audit solutions built for diverse business sectors in the UAE.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#4A5565] md:text-base">
            From retail and professional services to free zone companies and growing SMEs, we
            support different audit needs based on scale, compliance requirements, and reporting
            maturity. We help your finance function stay visible, accurate, and ready for smoother
            operations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#652D8E] shadow-[0_8px_22px_rgba(101,45,142,0.08)]"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
