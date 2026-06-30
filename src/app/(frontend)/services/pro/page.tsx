import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import AuditHeroSwiper from './AuditHeroSwiper.client'
import { AboutSectionComponent } from '@/blocks/AboutSection/Component'
import { ServiceHightlightComponent } from '@/blocks/ServiceHightlight/Component'
import FAQ from '../../components/sections/FAQ'
import StartBuildScale from '../../components/sections/StartBuildScale'

export const metadata: Metadata = {
  title: 'Audit & Assurance Services in UAE | 800-Simplify',
  description:
    'Audit and assurance support for UAE businesses, including statutory audits, compliance reports, interim audit reports, revenue audits, and liquidation reports.',
}

const auditStack = [
  {
    title: 'Visa Process',
    description: `Visa delays can hold up onboarding and slow down operations. We oversee employment visa
processing from initial applications to amendments. Our visa services in the UAE also include
Emirates ID support and coordination with authorities keeping workforce movement aligned with
`,
  },
  {
    title: 'License Renewals and Amendment',
    description: `An expired or outdated UAE trade license can disrupt business operations and create
compliance exposure. As businesses evolve, license records need to keep pace with
operational and ownership changes. Our professional PRO services in the UAE manage
renewal and amendment requirements so internal teams are not pulled into authority
coordination and approval follow-ups.`,
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
          heading={`PRO services in UAE without
             the premium.`}
          description={
            <p>
              Businesses often manage PRO tasks in-house without accounting for the constant fees
              and follow-ups involved at every stage. At 800-Simplify, our corporate PRO services in
              the UAE handle visa processing and trade license documentation alongside authority
              coordination, so operations stay on track without stretching operational costs.
            </p>
          }
          image={{
            url: '/images/pro/pro.png',
            alt: 'About',
          }}
          imageClassName={'w-[20rem] md:w-[30rem] 2xl:w-[30rem]'}
        />
      </section>

      <section className="bg-white px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-[#2F3B51] md:text-4xl">
            Corporate workflows, thoroughly managed.{' '}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="relative min-h-[360px] overflow-hidden bg-[#F8F3FC] md:min-h-full">
              <Image
                src="/images/pro/pro-service.png"
                alt="Audit documents and financial records"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#652D8E]/10" />
            </div>

            <div className="grid gap-4">
              <ServiceCard {...auditStack[0]} />
              <ServiceCard {...auditStack[1]} />
            </div>
          </div>
        </div>
      </section>

      <ServiceHightlightComponent
        title="PRO solutions for UAE compliance requirements.."
        para="As businesses expand and workforce requirements change, visa processing and trade license
compliance require closer attention. From entrepreneurs to SMEs across retail, F&B, pharma,
and travel sectors in the UAE, our PRO support team keeps documentation and authority coordination aligned so operations are not slowed down by compliance dependencies."
      />

      <FAQ />
      <StartBuildScale />
    </main>
  )
}
