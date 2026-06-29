import About from './components/sections/About'
import ForLeanTeams from './components/sections/ForLeanTeams'
import Hero from './components/sections/Hero'
import LogoSlider from './components/sections/LogoSlider'
import ServiceSection from './components/sections/Services.'
import Package from './components/sections/Package'
import FAQ from './components/sections/FAQ'
import StartBuildScale from './components/sections/StartBuildScale'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Effective Accounting, Audit, Tax & PRO in UAE | 800-Simplify',
  description:
    '800-Simplify brings efficiency to every number & value to every move with effective accounting, audit & tax, and PRO services for UAE SMEs, driving momentum.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServiceSection />
      <LogoSlider />
      <ForLeanTeams />
      <Package />
      <FAQ />
      <StartBuildScale />
    </>
  )
}
