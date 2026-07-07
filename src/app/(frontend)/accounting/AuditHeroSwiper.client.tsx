'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
  {
    src: '/images/accounting/slide-1.png',
    alt: 'Audit & Assurance',
    title: 'Regular Monthly',
    titleSecondLine: 'Accounting',
    price: 'AED 200',
  },
  {
    src: '/images/accounting/slide-2.png',
    alt: 'Audit & Assurance',
    title: 'Annual ',
    titleSecondLine: 'Accounting',
    price: 'AED 500',
  },
]

export default function AuditHeroSwiper() {
  return (
    <section className="relative overflow-hidden bg-[#1F1230]">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={0}
        slidesPerView={1}
        className="audit-hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.src}>
            <div className="relative h-[420px] md:h-[700px]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 1920px) 100vw, 33vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(43,12,58,0.82)_0%,rgba(101,45,142,0.38)_45%,rgba(0,0,0,0.04)_100%)]" />
              <div className="absolute inset-0 z-20">
                <div className="mx-auto flex h-full max-w-7xl items-center px-4 text-white md:px-0 lg:px-0">
                  <div className="">
                    <p className="text-3xl md:text-6xl font-bold leading-tight drop-shadow-[2px_4px_10px_rgba(0,0,0,0.5)] mt-15">
                      {slide.title}
                      <br />
                      {slide.titleSecondLine}
                    </p>

                    <div className="mb-4 md:mb-6 bg-[linear-gradient(90deg,#E4763D,#652D8E03)] rounded-xl py-3 px-12 inline-flex flex-col gap-1 mt-2 md:mt-5">
                      <span className="block text-sm font-bold">Starting from</span>
                      <span className="text-4xl font-bold">{slide.price}</span>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-2 md:mt-8">
                      <Link
                        href="mailto:info@800-simplify.com"
                        target="_blank"
                        className="btn-primary inline-flex gap-2"
                      >
                        Write to us <ArrowRight />
                      </Link>

                      <Link href="tel:80074675439" className="btn-secondary inline-flex gap-2">
                        <Phone />
                        Let&apos;s Talk
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
