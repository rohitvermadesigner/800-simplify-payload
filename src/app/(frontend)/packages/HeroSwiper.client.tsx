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
    src: '/images/package-landing-page/slide-1.png',
    alt: '800 Simplify Package Landing Page',
    title: 'Built for businesses that',
    titleSecondLine: 'appreciate value',
    para: 'Choose the level of financial oversight that matches your operations. Upgrade anytime.',
  },
]

export default function HeroSwiper() {
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
              <div className="absolute inset-0 z-20">
                <div className="mx-auto flex justify-center h-full max-w-7xl items-center px-4 text-white md:px-0 lg:px-0 text-center">
                  <div>
                    <p className="text-2xl md:text-6xl font-bold leading-tight drop-shadow-[2px_4px_10px_rgba(0,0,0,0.5)] mt-36 md:mt-15">
                      {slide.title}
                      <br />
                      <span className="text-[#E8AB20]"> {slide.titleSecondLine}</span>
                    </p>
                    <p className="text-md md:text-xl mt-2 md:mt-4 text-white">{slide.para}</p>

                    <div className="flex flex-wrap gap-[8px] md:gap-4 mt-6 md:mt-8 justify-center">
                      <Link
                        href="mailto:info@800-simplify.com"
                        target="_blank"
                        className="btn-primary inline-flex gap-[2px]"
                      >
                        Get Started Now <ArrowRight />
                      </Link>

                      <Link
                        href="#plans"
                        className="btn-secondary inline-flex gap-2 md:min-w-[165px] justify-center"
                      >
                        View Plans
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
