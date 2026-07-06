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
    title: 'Corporate Tax Registration & Filing',
    description: `Corporate tax registration should be carried out with complete understanding of how the
business structure or revenue affect future filings. The gaps usually emerge closer to deadlines.
From corporate tax registration and structured review of financial records to preparing accurate
returns, we keep your obligations on track and FTA-aligned.`,
  },
  {
    title: 'VAT Registration & Filing',
    description: `VAT registration is often treated as a one-time task and filing as a periodic formality. When the
two aren’t managed in sync, reporting inconsistencies start arising. Our tax agents in UAE
handle everything from securing your TRN to reconciling transactions and filing accurate returns
on time.`,
  },
  {
    title: 'Tax Audit',
    description: `Business in the UAE usually review their tax records when an FTA audit is already underway.
By then, inconsistencies in filings or supporting documentation are tougher to address. As a tax
consulting company, we go through your records beforehand to ensure your filings are accurate
and reporting accountability is maintained.`,
  },
  {
    title: 'Tax Residency / Domicile',
    description: `Domicile decisions and tax residency affect how businesses manage tax obligations across
jurisdictions. Our tax specialists assess your residency status and guide domicile decisions so
your global tax position holds up across borders. Your Tax Residency Certificate is secured
without unnecessary back-and-forth.`,
  },
  {
    title: 'Customs Registration & Renewals',
    description: `Cross-border transactions carry customs and VAT obligations that require consistent attention.
Missed renewals and documentation gaps with customs authorities can create severe delays.
We manage customs registration and documentation accurately, with renewal tracking handled
so your cross-border operations stay on schedule.`,
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
          heading={`Tax services in UAE that ensures
             reporting accuracy.`}
          description={
            <p>
              There’s no place for errors in tax reporting. Inconsistent records and missed details
              attract penalties and unwanted scrutiny. Structure and clarity, in turn, become the
              key pillars of execution. At 800-Simplify, our transparent tax services help
              businesses file accurately and maintain clearer visibility into their tax position.
            </p>
          }
          image={{
            url: '/images/taxation/taxation.png',
            alt: 'About',
          }}
          imageClassName={'w-[20rem] md:w-[30rem] 2xl:w-[30rem]'}
        />
      </section>

      <section className="bg-white px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-[#2F3B51] md:text-4xl">
            Tax solutions, tuned for businesses.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1fr_0.9fr_1fr]">
            <ServiceCard {...auditStack[0]} />
            <div className="relative min-h-[360px] overflow-hidden bg-[#F8F3FC] md:min-h-full">
              <Image
                src="/images/taxation/taxation-service.png"
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
        title="Strategic tax advice for diverse business sectors."
        para="From startups and SMEs in food & beverage and travel & tourism to entrepreneurs in retail and
pharma, every business faces unique tax compliance challenges. We work through that
complexity with focused tax consulting and structured filings so businesses stay compliant and
in control."
      />

      <FAQ />
      <StartBuildScale />
    </main>
  )
}
