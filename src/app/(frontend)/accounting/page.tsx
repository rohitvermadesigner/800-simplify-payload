import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import AuditHeroSwiper from './AuditHeroSwiper.client'
import { AboutSectionComponent } from '@/blocks/AboutSection/Component'
import { ServiceHightlightComponent } from '@/blocks/ServiceHightlight/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'
import StartBuildScale from '../components/sections/StartBuildScale'

export const metadata: Metadata = {
  title: 'Audit & Assurance Services in UAE | 800-Simplify',
  description:
    'Audit and assurance support for UAE businesses, including statutory audits, compliance reports, interim audit reports, revenue audits, and liquidation reports.',
}

const accountingStack = [
  {
    title: 'External / Statutory Audit',
    description: `Businesses rely on financial reports to make operational decisions, but that only works when
records stay accurate and consistently updated. Disorganized records often affect financial
tracking and reporting reliability. Our bookkeeping services in UAE deliver practical insights
through accurate bank reconciliations and structured annual or bi-annual reports, keeping
financial decisions grounded in real numbers.`,
  },
  {
    title: 'Management Accounting',
    description: `Financial reports alone do not always explain where business pressure is building as costs shift
and spending patterns change across departments over time. We highlight cost leaks and help
businesses monitor KPIs that impact profitability while building forecasts around upcoming
business decisions.`,
  },
  {
    title: 'Cost Accounting',
    description: `When businesses lose visibility of operational costs, it can affect the bottom line. Pricing
decisions & resource planning become complex when cost tracking is inconsistent. Through our
finance and accounting services, we help companies track operational costs accurately and
manage budgeting more effectively.`,
  },
  {
    title: 'Review & Reconciliation of Accounts',
    description: `Accuracy of financial records is directly proportionate to flawless reconciliation. Unverified balances and missing adjustments create pressure during financial reviews. As an
accounting firm in UAE, we review and reconcile accounts to ensure accuracy and resolve
discrepancies so businesses maintain reliable records.`,
  },
]

const faqs = [
  {
    question: 'What accounting and bookkeeping services does 800-Simplify offer in the UAE?',
    answer: `Our accounting services cover everything businesses need to keep reporting organised and records review-ready. Bookkeeping, MIS reporting, management accounting, cost accounting, and account reconciliation. The focus stays on keeping records organised and reporting reliable as transaction volumes grow.`,
  },
  {
    question:
      'In-house or outsourced accounting services in the UAE - what is better for UAE SMEs?',
    answer: `For many SMEs, maintaining an in-house finance team adds extra internal costs. Outsourcing accounting services helps businesses keep reporting consistent without adding cost pressure or the responsibility of managing an in-house team.`,
  },
  {
    question: 'What is MIS reporting, and how does it benefit my business?',
    answer: `MIS reporting gives businesses a clearer view of a business&#39;s financial performance. Bi-annual and annual accounting reports help track cash flow and revenue more clearly for routine decision-making.`,
  },
  {
    question: 'How much are small business accounting fees in the UAE?',
    answer: `The cost of accounting services varies based on transaction volume and reporting requirements. At 800-Simplify, we offer flexible accounting packages, designed to support different stages of business growth.`,
  },
  {
    question: 'Why do UAE startups and small businesses need professional accounting services?',
    answer: `As operations expand, financial record management become harder to maintain internally. Our team of accountants offer professional accounting companies in the UAE to help businesses keep records organised and accounting aligned with growing business activity.`,
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
          heading={`Finance done better with 
            professional accounting 
            services.`}
          description={
            <p>
              As businesses expand, daily transaction volumes increase rapidly. Many companies start
              facing delayed reconciliations and reporting gaps that affect financial oversight. At
              800-Simplify, we help businesses keep up with their accounting without adding
              operational complexity. Our structured business accounting services in UAE keep
              records accurate and review-ready at every stage of growth.
            </p>
          }
          image={{
            url: '/images/accounting/accounting.png',
            alt: 'About',
          }}
          imageClassName={'w-[20rem] md:w-[30rem] 2xl:w-[30rem]'}
        />
      </section>

      <section className="bg-white px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-[#2F3B51] md:text-4xl">
            The complete accounting stack.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1fr_0.9fr_1fr]">
            <div className="grid gap-4">
              <ServiceCard {...accountingStack[0]} />
              <ServiceCard {...accountingStack[1]} />
            </div>

            <div className="relative min-h-[360px] overflow-hidden bg-[#F8F3FC] md:min-h-full">
              <Image
                src="/images/accounting/accounting-service.png"
                alt="Audit documents and financial records"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#652D8E]/10" />
            </div>

            <div className="grid gap-4">
              <ServiceCard {...accountingStack[2]} />
              <ServiceCard {...accountingStack[3]} />
            </div>
          </div>
        </div>
      </section>

      <ServiceHightlightComponent
        title="Accounting solutions built for diverse business sectors in the UAE."
        para="From retail and pharma to F&B, travel, and tourism, every business has different accounting
needs based on scale and complexity. We support them through structured accounting
processes, giving clearer financial visibility and improved reporting consistency for smoother
operations."
      />

      <FAQBlock
        heading="Just in case you were wondering..."
        description="Find answers to common questions about our services."
        items={faqs}
      />
      <StartBuildScale />
    </main>
  )
}
