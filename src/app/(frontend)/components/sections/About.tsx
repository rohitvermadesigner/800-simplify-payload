'use client'

import { Check } from 'lucide-react'
import Image from 'next/image'
import { Grid } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { GridOptions, SwiperOptions } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/grid'
import { AboutSectionComponent } from '@/blocks/AboutSection/Component'

const aboutList = [
  {
    title: 'Value-Driven',
    des: 'Efficient financial solutions priced smartly for your business and budget.',
  },
  {
    title: 'Licensed',
    des: 'Licensed by the Department of Economic Development (DED).',
  },
  {
    title: 'Registered',
    des: 'Registered with the Ministry of Economy (MoE).',
  },
  {
    title: 'Certified',
    des: 'ISO 9001:2015 certified.',
  },
]

type AboutSwiperOptions = SwiperOptions & {
  grid?: GridOptions
}

const aboutSwiperBreakpoints: Record<number, AboutSwiperOptions> = {
  0: {
    slidesPerView: 1.2,
    grid: {
      rows: 1,
    },
  },
  768: {
    slidesPerView: 2,
    grid: {
      rows: 1,
    },
  },
  1024: {
    slidesPerView: 2,
    grid: {
      rows: 2,
      fill: 'row',
    },
  },
}

function About() {
  return (
    <AboutSectionComponent
      eyebrow="About Us"
      heading={`Ensuring Compliance is tight,
while the Spends are light.`}
      description={
        <p>
          800-Simplify is the finance buddy you call when things get real. We understand that
          building and running a business requires significant investment. That's why we work with a
          service model that fits your business, placing the right structures and maintaining
          audit-ready books. Our objective is simple: Through our accounting, audit, and tax
          solutions, we take the weight off your shoulders so that you can shift your focus to
          things that truly matter - your vision, your people, and your operations.
        </p>
      }
      image={{
        url: '/images/about.png',
        alt: 'About',
      }}
      features={[
        {
          title: 'Value-Driven',
          description: 'Efficient financial solutions priced smartly for your business and budget.',
        },
        {
          title: 'Licensed',
          description: 'Licensed by the Department of Economic Development (DED).',
        },
        {
          title: 'Registered',
          description: 'Registered with the Ministry of Economy (MoE).',
        },
        {
          title: 'Certified',
          description: 'ISO 9001:2015 certified.',
        },
      ]}
    />
  )
}

export default About
