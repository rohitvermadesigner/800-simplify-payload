import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import AuditHeroSwiper from './AuditHeroSwiper.client'
import { AboutSectionComponent } from '@/blocks/AboutSection/Component'
import { ServiceHightlightComponent } from '@/blocks/ServiceHightlight/Component'
import FAQ from '../components/sections/FAQ'
import StartBuildScale from '../components/sections/StartBuildScale'

export const metadata: Metadata = {
  title: 'Audit & Assurance Services in UAE | 800-Simplify',
  description:
    'Audit and assurance support for UAE businesses, including statutory audits, compliance reports, interim audit reports, revenue audits, and liquidation reports.',
}

const auditStack = [
  {
    title: 'External / Statutory Audit',
    description: `An external audit is indicative of how seriously a company treats its financial reporting. Investors look at it
as a trust factor, so do banks and free zone authorities. Our approved auditors go through the numbers
to deliver reports that hold up under scrutiny while operations continue running as usual.`,
  },
  {
    title: 'Compliance Audit',
    description: `Strong compliance depends on consistency across daily operations. Internal checks alone may not be
enough to uncover operational blind spots. We review reporting practices and provide actionable insights
through a compliance audit report that improves reporting accountability.`,
  },
  {
    title: 'Review Management Report',
    description: `A business can look stable on paper while operational pressure builds underneath. That’s why we track
business movement and performance to show leadership where attention is needed most. It also gives
businesses a clearer view of how its verticals are performing beyond financial reports.`,
  },
  {
    title: 'Sales / Revenue Audit',
    description: `As businesses expand, revenue becomes harder to track across systems and billing cycles. That’s often
where reporting inconsistencies start to appear. Our UAE-approved auditors review revenue records in
line with IFRS 15 to confirm there is no gap between reported income and actual commercial activity.`,
  },
  {
    title: 'Interim Audit Report',
    description: `Interim audits work as a mid-year checkpoint on financial performance. As registered auditors in the
UAE, we cross-check records early to identify inconsistencies before final audit pressure starts building.
Businesses also get a better understanding of their financial position and reporting accuracy.`,
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
            url: '/images/audit/audit.png',
            alt: 'About',
          }}
          imageClassName={'w-[20rem] md:w-[30rem] 2xl:w-[30rem]'}
        />
      </section>

      <section className="bg-white px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-[#2F3B51] md:text-4xl">
            Audit services that anchor compliance.{' '}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1fr_0.9fr_1fr]">
            <ServiceCard {...auditStack[0]} />
            <div className="relative min-h-[360px] overflow-hidden bg-[#F8F3FC] md:min-h-full">
              <Image
                src="/images/audit/audit-service.png"
                alt="Audit documents and financial records"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#652D8E]/10" />
            </div>

            <ServiceCard {...auditStack[1]} />
            <ServiceCard {...auditStack[2]} />
            <ServiceCard {...auditStack[3]} />
            <ServiceCard {...auditStack[4]} />
          </div>
        </div>
      </section>

      <ServiceHightlightComponent
        title="Audit services that meet UAE business needs."
        para="From entrepreneurs trading in retail or pharma, to SMEs in F&B, travel and tourism, we address industry-
specific compliance bottlenecks through accurate audit processes. Businesses are equipped with reliable
financial data for stronger decision-making."
      />

      <FAQ />
      <StartBuildScale />
    </main>
  )
}
