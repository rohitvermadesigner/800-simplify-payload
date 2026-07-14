'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const hero = {
  src: '/images/package/slide-1.png',
  alt: '800 Simplify Package Landing Page',
  title: 'Affordable audit, tax, PRO, and accounting packages in UAE.',
  benefits: ['SME-focused', 'No lock-in contracts', 'Transparent pricing'],
}

export default function Hero() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setFormStatus('loading')
    setFormMessage('')

    try {
      const response = await fetch('/api/package-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          phone: formData.get('phone'),
          email: formData.get('email'),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result?.message || 'Unable to send your enquiry right now.')
      }

      setFormStatus('success')
      setFormMessage('Thank you. Your enquiry has been sent.')
      form.reset()
    } catch (error) {
      setFormStatus('error')
      setFormMessage(error instanceof Error ? error.message : 'Unable to send your enquiry right now.')
    }
  }

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="relative">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 pt-28 pb-28 text-white md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pt-52 md:pb-32 lg:grid-cols-[1fr_404px] xl:px-0">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold leading-[1.13] tracking-normal drop-shadow-[2px_4px_10px_rgba(0,0,0,0.35)] md:text-5xl lg:text-[2.65rem] xl:text-[2.75rem]">
              {hero.title}
            </h1>

            <ul className="mt-8 grid gap-2 text-lg font-bold text-[#E8AB20] md:text-xl">
              {hero.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-4">
                  <Image
                    src="/images/package/check.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="w-8 h-8"
                  />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-6 md:mt-12 flex flex-wrap gap-4">
              <Link
                href="mailto:info@800-simplify.com"
                className="inline-flex min-h-14 items-center justify-center gap-4 rounded-md bg-[linear-gradient(90deg,#B350B6,#64269C)] px-4 md:px-7 text-sm font-bold text-white shadow-xl shadow-black/20 transition hover:opacity-95 md:min-w-[168px]"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="https://wa.me/97145579552"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-white px-4 md:px-7 text-sm font-bold text-[#2F3B51] shadow-xl shadow-black/20 transition hover:bg-white/95 md:min-w-[176px]"
              >
                <FaWhatsapp className="h-6 w-6 text-[#25D366]" />
                Chat with us
              </Link>
            </div>
          </div>

          <form
            className="w-full rounded-lg bg-[rgba(48,41,30,0.52)] px-5 md:px-7 py-5 md:py-9 shadow-2xl backdrop-blur-md md:justify-self-end lg:w-[404px]"
            onSubmit={handleSubmit}
          >
            <h2 className="mb-7 text-center text-xl font-bold text-white">
              Let&apos;s discuss your finance needs
            </h2>

            <div className="grid gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full name*"
                className="h-12 w-full rounded-[4px] border border-white/70 bg-white px-4 text-sm text-[#2F3B51] outline-none placeholder:text-[#B8B8B8] focus:border-[#B350B6] focus:ring-2 focus:ring-[#B350B6]/30"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number*"
                className="h-12 w-full rounded-[4px] border border-white/70 bg-white px-4 text-sm text-[#2F3B51] outline-none placeholder:text-[#B8B8B8] focus:border-[#B350B6] focus:ring-2 focus:ring-[#B350B6]/30"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="h-12 w-full rounded-[4px] border border-white/70 bg-white px-4 text-sm text-[#2F3B51] outline-none placeholder:text-[#B8B8B8] focus:border-[#B350B6] focus:ring-2 focus:ring-[#B350B6]/30"
                required
              />
              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="mt-1 h-12 rounded-[4px] bg-[linear-gradient(90deg,#B350B6,#64269C)] text-sm font-bold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {formStatus === 'loading' ? 'Submitting...' : 'Submit'}
              </button>

              {formMessage ? (
                <p
                  className={
                    formStatus === 'success'
                      ? 'text-center text-sm font-semibold text-[#8EF2A0]'
                      : 'text-center text-sm font-semibold text-[#FFB4B4]'
                  }
                >
                  {formMessage}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
