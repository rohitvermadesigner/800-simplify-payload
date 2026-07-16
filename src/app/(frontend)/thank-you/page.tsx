import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You | 800 Simplify',
  description: 'Thank you for contacting 800 Simplify.',
}

export default function ThankYouPage() {
  return (
    <main className="bg-white text-[#2F3B51]">
      <section className="relative flex min-h-[calc(100vh-420px)] items-center overflow-hidden px-4 py-20 md:px-10 md:py-28">
        <div className="absolute -right-20 top-10 h-52 w-52 rounded-full border-[34px] border-[#E4763D]/10" />
        <div className="absolute -left-24 bottom-8 h-56 w-56 rounded-full border-[36px] border-[#652D8E]/10" />

        <div className="relative mx-auto max-w-3xl text-center mt-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#652D8E]/10 text-[#652D8E]">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-[#2F3B51] md:text-6xl">
            Thank you
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-[#4A5565] md:text-lg">
            Your form has been successfully submitted.
            <br />
            We truly appreciate your interest and will be in touch with you shortly.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/our-packages"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[linear-gradient(90deg,#B350B6,#64269C)] px-6 text-sm font-bold text-white shadow-xl shadow-black/10 transition hover:opacity-95"
            >
              Back to packages
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#652D8E]/30 bg-white px-6 text-sm font-bold text-[#652D8E] transition hover:bg-[#652D8E]/5"
            >
              Go home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
