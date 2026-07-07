import About from './components/sections/About'
import ForLeanTeams from './components/sections/ForLeanTeams'
import Hero from './components/sections/Hero'
import LogoSlider from './components/sections/LogoSlider'
import ServiceSection from './components/sections/Services.'
import Package from './components/sections/Package'
import StartBuildScale from './components/sections/StartBuildScale'
import type { Metadata } from 'next'
import { FAQBlock } from '@/blocks/FAQ/Component'

export const metadata: Metadata = {
  title: 'Effective Accounting, Audit, Tax & PRO in UAE | 800-Simplify',
  description:
    '800-Simplify brings efficiency to every number & value to every move with effective accounting, audit & tax, and PRO services for UAE SMEs, driving momentum.',
}

const homeFAQs = [
  {
    question: 'How will your team support my business?',
    answer: `We take full ownership of your annual financial audits, monthly accounting & bookkeeping, tax, and PRO needs. Our team makes sure every detail is accurate, secure, and fully documented. What does this mean to you? Complete clarity, stronger decisions.`,
  },
  {
    question:
      'I’m a startup in the DMCC free zone and need audit support. Are you approved to handle this?',
    answer: `Absolutely. We can take care of your annual DMCC audit requirements with no back-and-forth. 800- Simplify is a registered and approved auditor across DMCC, DIFC, JAFZA, DED, DWC, DAFZA, TECOM, Dubai Media City, SAIF Zone, Dubai Internet City, DSO, Hamriyah Free Zone, D3, and other major UAE free zones. You just need to focus on growing your business and let us manage the books.`,
  },
  {
    question: 'How do I know my numbers will be accurate and compliant?',
    answer: `We don’t cut corners. For us, compliance is non-negotiable, so we stick to the UAE tax regulations as well as IAS and IFRS for accounting meticulously. All this keeps your numbers rock-solid, always.`,
  },
  {
    question: 'I run a small business. What should I really be paying for an accountant?',
    answer: `The small business accountant cost depends on your transaction volume, business complexity, and the level of support you need. With 800-Simplify, you don’t just pay for CPA accounting services; you get real value. Small businesses deserve expert support without the heavy price tag. That’s exactly what we deliver. Our experienced accountants offer structured support at a price that fits your budget and business.`,
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServiceSection />
      <LogoSlider />
      <ForLeanTeams />
      <Package />
      <FAQBlock
        heading="Just in case you were wondering..."
        description="Find answers to common questions about our services."
        items={homeFAQs}
      />
      <StartBuildScale />
    </>
  )
}
