'use client'

import { Check } from 'lucide-react'
import Image from 'next/image'
import { Grid } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { GridOptions, SwiperOptions } from 'swiper/types'

import 'swiper/css'
import 'swiper/css/grid'

type Props = {
  eyebrow?: string
  heading: string
  description: any
  image: {
    url: string
    alt?: string
  }
  features?: {
    title: string
    description: string
  }[]
}

type AboutSwiperOptions = SwiperOptions & {
  grid?: GridOptions
}

const breakpoints: Record<number, AboutSwiperOptions> = {
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

export const AboutSectionComponent = ({
  eyebrow,
  heading,
  description,
  image,
  features,
}: Props) => {
  return (
    <section className="relative bg-[#e4763d] text-white">
      <Image
        src="/images/icons/2sqare-outline-bg.png"
        alt=""
        width={100}
        height={100}
        className="absolute -top-12 -left-20 w-48"
      />

      <Image
        src="/images/icons/sqare-bg.png"
        alt=""
        width={100}
        height={100}
        className="absolute -bottom-24 -left-24 w-48"
      />

      <div className="max-w-7xl mx-auto py-8 md:py-16 pb-88 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.8fr] gap-8 items-center px-4">
          <div>
            <span className="uppercase text-xl md:text-2xl font-semibold text-[var(--purple)]">
              {eyebrow}
            </span>

            <h2 className="mt-5 text-[1.3rem] md:text-4xl font-bold whitespace-pre-line">
              {heading}
            </h2>

            {/* Replace with your RichText renderer if using Payload Lexical */}
            <div className="mt-5">{description}</div>
          </div>

          <div>
            <Image
              src={image?.url}
              alt={image?.alt || ''}
              width={1200}
              height={800}
              className="w-[20rem] md:w-[36rem] 2xl:w-[42rem] absolute right-0 bottom-0"
            />
          </div>
        </div>

        <div className="md:w-[55%] ml-4 md:ml-0">
          <Swiper
            modules={[Grid]}
            className="mt-4 md:mt-16"
            spaceBetween={16}
            breakpoints={breakpoints}
          >
            {features?.map((item) => (
              <SwiperSlide key={item.title} className="!h-auto">
                <div className="bg-[#652D8E] hover:shadow-lg p-4 rounded-lg h-full">
                  <div className="grid grid-cols-[40px_1fr] gap-3">
                    <Check className="mt-1" />

                    <div>
                      <h6 className="text-lg font-bold mb-2">{item.title}</h6>

                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
